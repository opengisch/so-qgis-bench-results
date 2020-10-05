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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 3362.0, "series": [{"data": [[0.0, 29.0], [0.1, 33.0], [0.2, 33.0], [0.3, 34.0], [0.4, 34.0], [0.5, 35.0], [0.6, 36.0], [0.7, 36.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 40.0], [2.0, 40.0], [2.1, 41.0], [2.2, 41.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 45.0], [3.1, 45.0], [3.2, 46.0], [3.3, 46.0], [3.4, 47.0], [3.5, 48.0], [3.6, 48.0], [3.7, 49.0], [3.8, 50.0], [3.9, 50.0], [4.0, 50.0], [4.1, 51.0], [4.2, 53.0], [4.3, 53.0], [4.4, 54.0], [4.5, 54.0], [4.6, 55.0], [4.7, 56.0], [4.8, 57.0], [4.9, 57.0], [5.0, 58.0], [5.1, 58.0], [5.2, 59.0], [5.3, 59.0], [5.4, 60.0], [5.5, 60.0], [5.6, 61.0], [5.7, 61.0], [5.8, 62.0], [5.9, 62.0], [6.0, 62.0], [6.1, 63.0], [6.2, 63.0], [6.3, 63.0], [6.4, 64.0], [6.5, 64.0], [6.6, 64.0], [6.7, 64.0], [6.8, 65.0], [6.9, 65.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 65.0], [7.4, 66.0], [7.5, 66.0], [7.6, 66.0], [7.7, 66.0], [7.8, 66.0], [7.9, 67.0], [8.0, 67.0], [8.1, 67.0], [8.2, 67.0], [8.3, 67.0], [8.4, 67.0], [8.5, 68.0], [8.6, 68.0], [8.7, 68.0], [8.8, 68.0], [8.9, 69.0], [9.0, 69.0], [9.1, 69.0], [9.2, 69.0], [9.3, 69.0], [9.4, 70.0], [9.5, 70.0], [9.6, 70.0], [9.7, 70.0], [9.8, 70.0], [9.9, 71.0], [10.0, 71.0], [10.1, 71.0], [10.2, 71.0], [10.3, 71.0], [10.4, 71.0], [10.5, 71.0], [10.6, 71.0], [10.7, 72.0], [10.8, 72.0], [10.9, 72.0], [11.0, 72.0], [11.1, 72.0], [11.2, 72.0], [11.3, 72.0], [11.4, 72.0], [11.5, 73.0], [11.6, 73.0], [11.7, 73.0], [11.8, 73.0], [11.9, 73.0], [12.0, 74.0], [12.1, 74.0], [12.2, 74.0], [12.3, 74.0], [12.4, 74.0], [12.5, 74.0], [12.6, 74.0], [12.7, 75.0], [12.8, 75.0], [12.9, 75.0], [13.0, 75.0], [13.1, 75.0], [13.2, 75.0], [13.3, 75.0], [13.4, 75.0], [13.5, 76.0], [13.6, 76.0], [13.7, 76.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 77.0], [14.2, 77.0], [14.3, 77.0], [14.4, 77.0], [14.5, 77.0], [14.6, 77.0], [14.7, 78.0], [14.8, 78.0], [14.9, 78.0], [15.0, 78.0], [15.1, 78.0], [15.2, 78.0], [15.3, 79.0], [15.4, 79.0], [15.5, 79.0], [15.6, 79.0], [15.7, 79.0], [15.8, 79.0], [15.9, 80.0], [16.0, 80.0], [16.1, 80.0], [16.2, 80.0], [16.3, 80.0], [16.4, 80.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 81.0], [16.9, 81.0], [17.0, 82.0], [17.1, 82.0], [17.2, 82.0], [17.3, 82.0], [17.4, 82.0], [17.5, 82.0], [17.6, 82.0], [17.7, 82.0], [17.8, 83.0], [17.9, 83.0], [18.0, 83.0], [18.1, 83.0], [18.2, 84.0], [18.3, 84.0], [18.4, 84.0], [18.5, 84.0], [18.6, 85.0], [18.7, 85.0], [18.8, 85.0], [18.9, 85.0], [19.0, 86.0], [19.1, 86.0], [19.2, 86.0], [19.3, 86.0], [19.4, 87.0], [19.5, 87.0], [19.6, 87.0], [19.7, 87.0], [19.8, 87.0], [19.9, 88.0], [20.0, 88.0], [20.1, 88.0], [20.2, 88.0], [20.3, 88.0], [20.4, 89.0], [20.5, 89.0], [20.6, 89.0], [20.7, 89.0], [20.8, 89.0], [20.9, 90.0], [21.0, 90.0], [21.1, 90.0], [21.2, 90.0], [21.3, 90.0], [21.4, 90.0], [21.5, 91.0], [21.6, 91.0], [21.7, 91.0], [21.8, 91.0], [21.9, 91.0], [22.0, 91.0], [22.1, 91.0], [22.2, 92.0], [22.3, 92.0], [22.4, 92.0], [22.5, 92.0], [22.6, 92.0], [22.7, 92.0], [22.8, 92.0], [22.9, 92.0], [23.0, 92.0], [23.1, 92.0], [23.2, 93.0], [23.3, 93.0], [23.4, 93.0], [23.5, 93.0], [23.6, 94.0], [23.7, 94.0], [23.8, 94.0], [23.9, 94.0], [24.0, 94.0], [24.1, 94.0], [24.2, 94.0], [24.3, 95.0], [24.4, 95.0], [24.5, 95.0], [24.6, 95.0], [24.7, 96.0], [24.8, 96.0], [24.9, 96.0], [25.0, 96.0], [25.1, 96.0], [25.2, 96.0], [25.3, 97.0], [25.4, 97.0], [25.5, 97.0], [25.6, 97.0], [25.7, 97.0], [25.8, 97.0], [25.9, 98.0], [26.0, 98.0], [26.1, 98.0], [26.2, 98.0], [26.3, 98.0], [26.4, 98.0], [26.5, 99.0], [26.6, 99.0], [26.7, 99.0], [26.8, 99.0], [26.9, 99.0], [27.0, 100.0], [27.1, 100.0], [27.2, 100.0], [27.3, 100.0], [27.4, 100.0], [27.5, 100.0], [27.6, 101.0], [27.7, 101.0], [27.8, 101.0], [27.9, 101.0], [28.0, 102.0], [28.1, 102.0], [28.2, 103.0], [28.3, 103.0], [28.4, 103.0], [28.5, 103.0], [28.6, 104.0], [28.7, 104.0], [28.8, 104.0], [28.9, 105.0], [29.0, 105.0], [29.1, 106.0], [29.2, 106.0], [29.3, 106.0], [29.4, 106.0], [29.5, 107.0], [29.6, 107.0], [29.7, 108.0], [29.8, 108.0], [29.9, 108.0], [30.0, 108.0], [30.1, 109.0], [30.2, 109.0], [30.3, 109.0], [30.4, 110.0], [30.5, 110.0], [30.6, 111.0], [30.7, 112.0], [30.8, 112.0], [30.9, 112.0], [31.0, 113.0], [31.1, 113.0], [31.2, 114.0], [31.3, 114.0], [31.4, 114.0], [31.5, 115.0], [31.6, 115.0], [31.7, 116.0], [31.8, 116.0], [31.9, 116.0], [32.0, 117.0], [32.1, 117.0], [32.2, 118.0], [32.3, 119.0], [32.4, 119.0], [32.5, 120.0], [32.6, 120.0], [32.7, 121.0], [32.8, 122.0], [32.9, 122.0], [33.0, 124.0], [33.1, 124.0], [33.2, 124.0], [33.3, 125.0], [33.4, 126.0], [33.5, 127.0], [33.6, 127.0], [33.7, 127.0], [33.8, 128.0], [33.9, 129.0], [34.0, 130.0], [34.1, 130.0], [34.2, 131.0], [34.3, 131.0], [34.4, 132.0], [34.5, 132.0], [34.6, 133.0], [34.7, 134.0], [34.8, 134.0], [34.9, 135.0], [35.0, 136.0], [35.1, 136.0], [35.2, 137.0], [35.3, 138.0], [35.4, 138.0], [35.5, 139.0], [35.6, 140.0], [35.7, 141.0], [35.8, 142.0], [35.9, 143.0], [36.0, 143.0], [36.1, 143.0], [36.2, 143.0], [36.3, 144.0], [36.4, 144.0], [36.5, 145.0], [36.6, 146.0], [36.7, 146.0], [36.8, 147.0], [36.9, 147.0], [37.0, 148.0], [37.1, 148.0], [37.2, 149.0], [37.3, 150.0], [37.4, 150.0], [37.5, 151.0], [37.6, 151.0], [37.7, 151.0], [37.8, 152.0], [37.9, 152.0], [38.0, 153.0], [38.1, 153.0], [38.2, 154.0], [38.3, 154.0], [38.4, 155.0], [38.5, 156.0], [38.6, 156.0], [38.7, 157.0], [38.8, 158.0], [38.9, 159.0], [39.0, 160.0], [39.1, 161.0], [39.2, 161.0], [39.3, 162.0], [39.4, 162.0], [39.5, 163.0], [39.6, 164.0], [39.7, 165.0], [39.8, 166.0], [39.9, 167.0], [40.0, 168.0], [40.1, 168.0], [40.2, 169.0], [40.3, 170.0], [40.4, 171.0], [40.5, 172.0], [40.6, 174.0], [40.7, 174.0], [40.8, 175.0], [40.9, 176.0], [41.0, 177.0], [41.1, 178.0], [41.2, 179.0], [41.3, 180.0], [41.4, 182.0], [41.5, 182.0], [41.6, 184.0], [41.7, 185.0], [41.8, 186.0], [41.9, 187.0], [42.0, 188.0], [42.1, 190.0], [42.2, 192.0], [42.3, 194.0], [42.4, 196.0], [42.5, 196.0], [42.6, 198.0], [42.7, 200.0], [42.8, 202.0], [42.9, 204.0], [43.0, 205.0], [43.1, 206.0], [43.2, 207.0], [43.3, 207.0], [43.4, 208.0], [43.5, 209.0], [43.6, 210.0], [43.7, 210.0], [43.8, 211.0], [43.9, 212.0], [44.0, 213.0], [44.1, 214.0], [44.2, 216.0], [44.3, 217.0], [44.4, 218.0], [44.5, 219.0], [44.6, 220.0], [44.7, 221.0], [44.8, 222.0], [44.9, 224.0], [45.0, 225.0], [45.1, 226.0], [45.2, 227.0], [45.3, 228.0], [45.4, 228.0], [45.5, 230.0], [45.6, 231.0], [45.7, 232.0], [45.8, 233.0], [45.9, 234.0], [46.0, 235.0], [46.1, 236.0], [46.2, 236.0], [46.3, 237.0], [46.4, 238.0], [46.5, 239.0], [46.6, 240.0], [46.7, 241.0], [46.8, 242.0], [46.9, 243.0], [47.0, 244.0], [47.1, 245.0], [47.2, 246.0], [47.3, 247.0], [47.4, 248.0], [47.5, 249.0], [47.6, 250.0], [47.7, 252.0], [47.8, 253.0], [47.9, 254.0], [48.0, 255.0], [48.1, 256.0], [48.2, 257.0], [48.3, 258.0], [48.4, 259.0], [48.5, 260.0], [48.6, 261.0], [48.7, 262.0], [48.8, 263.0], [48.9, 264.0], [49.0, 265.0], [49.1, 266.0], [49.2, 266.0], [49.3, 267.0], [49.4, 269.0], [49.5, 270.0], [49.6, 270.0], [49.7, 271.0], [49.8, 272.0], [49.9, 273.0], [50.0, 274.0], [50.1, 275.0], [50.2, 275.0], [50.3, 276.0], [50.4, 278.0], [50.5, 278.0], [50.6, 279.0], [50.7, 280.0], [50.8, 282.0], [50.9, 283.0], [51.0, 284.0], [51.1, 285.0], [51.2, 286.0], [51.3, 287.0], [51.4, 288.0], [51.5, 289.0], [51.6, 290.0], [51.7, 291.0], [51.8, 292.0], [51.9, 292.0], [52.0, 293.0], [52.1, 293.0], [52.2, 295.0], [52.3, 296.0], [52.4, 296.0], [52.5, 297.0], [52.6, 298.0], [52.7, 299.0], [52.8, 300.0], [52.9, 302.0], [53.0, 303.0], [53.1, 304.0], [53.2, 305.0], [53.3, 307.0], [53.4, 308.0], [53.5, 309.0], [53.6, 310.0], [53.7, 311.0], [53.8, 311.0], [53.9, 312.0], [54.0, 313.0], [54.1, 314.0], [54.2, 315.0], [54.3, 316.0], [54.4, 317.0], [54.5, 318.0], [54.6, 320.0], [54.7, 322.0], [54.8, 324.0], [54.9, 324.0], [55.0, 325.0], [55.1, 326.0], [55.2, 329.0], [55.3, 331.0], [55.4, 332.0], [55.5, 332.0], [55.6, 333.0], [55.7, 333.0], [55.8, 335.0], [55.9, 336.0], [56.0, 337.0], [56.1, 339.0], [56.2, 340.0], [56.3, 342.0], [56.4, 343.0], [56.5, 344.0], [56.6, 345.0], [56.7, 346.0], [56.8, 347.0], [56.9, 348.0], [57.0, 349.0], [57.1, 350.0], [57.2, 350.0], [57.3, 352.0], [57.4, 353.0], [57.5, 354.0], [57.6, 355.0], [57.7, 356.0], [57.8, 357.0], [57.9, 359.0], [58.0, 360.0], [58.1, 362.0], [58.2, 363.0], [58.3, 364.0], [58.4, 365.0], [58.5, 366.0], [58.6, 367.0], [58.7, 368.0], [58.8, 369.0], [58.9, 370.0], [59.0, 372.0], [59.1, 373.0], [59.2, 374.0], [59.3, 374.0], [59.4, 376.0], [59.5, 377.0], [59.6, 378.0], [59.7, 380.0], [59.8, 381.0], [59.9, 381.0], [60.0, 384.0], [60.1, 384.0], [60.2, 385.0], [60.3, 386.0], [60.4, 387.0], [60.5, 388.0], [60.6, 389.0], [60.7, 390.0], [60.8, 392.0], [60.9, 393.0], [61.0, 393.0], [61.1, 395.0], [61.2, 396.0], [61.3, 396.0], [61.4, 398.0], [61.5, 399.0], [61.6, 400.0], [61.7, 401.0], [61.8, 403.0], [61.9, 404.0], [62.0, 405.0], [62.1, 407.0], [62.2, 409.0], [62.3, 410.0], [62.4, 412.0], [62.5, 413.0], [62.6, 414.0], [62.7, 415.0], [62.8, 417.0], [62.9, 419.0], [63.0, 420.0], [63.1, 422.0], [63.2, 423.0], [63.3, 424.0], [63.4, 425.0], [63.5, 426.0], [63.6, 427.0], [63.7, 428.0], [63.8, 431.0], [63.9, 432.0], [64.0, 433.0], [64.1, 434.0], [64.2, 436.0], [64.3, 436.0], [64.4, 437.0], [64.5, 438.0], [64.6, 440.0], [64.7, 441.0], [64.8, 443.0], [64.9, 444.0], [65.0, 446.0], [65.1, 448.0], [65.2, 450.0], [65.3, 451.0], [65.4, 452.0], [65.5, 454.0], [65.6, 454.0], [65.7, 456.0], [65.8, 459.0], [65.9, 460.0], [66.0, 460.0], [66.1, 461.0], [66.2, 465.0], [66.3, 466.0], [66.4, 468.0], [66.5, 468.0], [66.6, 470.0], [66.7, 471.0], [66.8, 473.0], [66.9, 474.0], [67.0, 475.0], [67.1, 477.0], [67.2, 478.0], [67.3, 480.0], [67.4, 481.0], [67.5, 483.0], [67.6, 484.0], [67.7, 486.0], [67.8, 487.0], [67.9, 489.0], [68.0, 490.0], [68.1, 492.0], [68.2, 493.0], [68.3, 494.0], [68.4, 496.0], [68.5, 497.0], [68.6, 498.0], [68.7, 499.0], [68.8, 502.0], [68.9, 503.0], [69.0, 504.0], [69.1, 505.0], [69.2, 506.0], [69.3, 507.0], [69.4, 508.0], [69.5, 510.0], [69.6, 511.0], [69.7, 512.0], [69.8, 513.0], [69.9, 515.0], [70.0, 517.0], [70.1, 518.0], [70.2, 520.0], [70.3, 520.0], [70.4, 521.0], [70.5, 523.0], [70.6, 525.0], [70.7, 526.0], [70.8, 527.0], [70.9, 529.0], [71.0, 530.0], [71.1, 530.0], [71.2, 531.0], [71.3, 533.0], [71.4, 534.0], [71.5, 535.0], [71.6, 537.0], [71.7, 539.0], [71.8, 540.0], [71.9, 541.0], [72.0, 542.0], [72.1, 545.0], [72.2, 546.0], [72.3, 548.0], [72.4, 551.0], [72.5, 552.0], [72.6, 553.0], [72.7, 554.0], [72.8, 557.0], [72.9, 560.0], [73.0, 562.0], [73.1, 564.0], [73.2, 566.0], [73.3, 568.0], [73.4, 569.0], [73.5, 570.0], [73.6, 571.0], [73.7, 573.0], [73.8, 574.0], [73.9, 576.0], [74.0, 576.0], [74.1, 577.0], [74.2, 579.0], [74.3, 581.0], [74.4, 582.0], [74.5, 583.0], [74.6, 586.0], [74.7, 588.0], [74.8, 589.0], [74.9, 591.0], [75.0, 592.0], [75.1, 594.0], [75.2, 595.0], [75.3, 597.0], [75.4, 600.0], [75.5, 601.0], [75.6, 603.0], [75.7, 605.0], [75.8, 607.0], [75.9, 607.0], [76.0, 609.0], [76.1, 609.0], [76.2, 611.0], [76.3, 613.0], [76.4, 614.0], [76.5, 615.0], [76.6, 617.0], [76.7, 619.0], [76.8, 620.0], [76.9, 622.0], [77.0, 623.0], [77.1, 626.0], [77.2, 628.0], [77.3, 630.0], [77.4, 633.0], [77.5, 635.0], [77.6, 637.0], [77.7, 640.0], [77.8, 642.0], [77.9, 645.0], [78.0, 646.0], [78.1, 649.0], [78.2, 651.0], [78.3, 652.0], [78.4, 655.0], [78.5, 656.0], [78.6, 658.0], [78.7, 661.0], [78.8, 662.0], [78.9, 663.0], [79.0, 665.0], [79.1, 667.0], [79.2, 669.0], [79.3, 673.0], [79.4, 674.0], [79.5, 677.0], [79.6, 680.0], [79.7, 682.0], [79.8, 685.0], [79.9, 686.0], [80.0, 688.0], [80.1, 691.0], [80.2, 693.0], [80.3, 695.0], [80.4, 695.0], [80.5, 697.0], [80.6, 699.0], [80.7, 701.0], [80.8, 703.0], [80.9, 705.0], [81.0, 706.0], [81.1, 707.0], [81.2, 708.0], [81.3, 710.0], [81.4, 713.0], [81.5, 715.0], [81.6, 716.0], [81.7, 720.0], [81.8, 723.0], [81.9, 725.0], [82.0, 727.0], [82.1, 729.0], [82.2, 731.0], [82.3, 733.0], [82.4, 734.0], [82.5, 735.0], [82.6, 736.0], [82.7, 737.0], [82.8, 739.0], [82.9, 740.0], [83.0, 744.0], [83.1, 746.0], [83.2, 748.0], [83.3, 750.0], [83.4, 756.0], [83.5, 758.0], [83.6, 761.0], [83.7, 763.0], [83.8, 767.0], [83.9, 769.0], [84.0, 772.0], [84.1, 774.0], [84.2, 780.0], [84.3, 783.0], [84.4, 785.0], [84.5, 787.0], [84.6, 790.0], [84.7, 793.0], [84.8, 794.0], [84.9, 796.0], [85.0, 799.0], [85.1, 801.0], [85.2, 805.0], [85.3, 807.0], [85.4, 809.0], [85.5, 810.0], [85.6, 812.0], [85.7, 815.0], [85.8, 820.0], [85.9, 822.0], [86.0, 824.0], [86.1, 826.0], [86.2, 829.0], [86.3, 830.0], [86.4, 835.0], [86.5, 839.0], [86.6, 841.0], [86.7, 845.0], [86.8, 849.0], [86.9, 853.0], [87.0, 857.0], [87.1, 863.0], [87.2, 865.0], [87.3, 867.0], [87.4, 869.0], [87.5, 871.0], [87.6, 873.0], [87.7, 875.0], [87.8, 878.0], [87.9, 880.0], [88.0, 883.0], [88.1, 884.0], [88.2, 887.0], [88.3, 893.0], [88.4, 895.0], [88.5, 900.0], [88.6, 902.0], [88.7, 906.0], [88.8, 909.0], [88.9, 910.0], [89.0, 913.0], [89.1, 915.0], [89.2, 917.0], [89.3, 920.0], [89.4, 927.0], [89.5, 929.0], [89.6, 932.0], [89.7, 935.0], [89.8, 942.0], [89.9, 945.0], [90.0, 950.0], [90.1, 956.0], [90.2, 959.0], [90.3, 961.0], [90.4, 965.0], [90.5, 969.0], [90.6, 972.0], [90.7, 980.0], [90.8, 983.0], [90.9, 991.0], [91.0, 996.0], [91.1, 998.0], [91.2, 1003.0], [91.3, 1007.0], [91.4, 1011.0], [91.5, 1015.0], [91.6, 1021.0], [91.7, 1025.0], [91.8, 1028.0], [91.9, 1033.0], [92.0, 1038.0], [92.1, 1042.0], [92.2, 1047.0], [92.3, 1054.0], [92.4, 1060.0], [92.5, 1063.0], [92.6, 1066.0], [92.7, 1071.0], [92.8, 1076.0], [92.9, 1079.0], [93.0, 1084.0], [93.1, 1089.0], [93.2, 1095.0], [93.3, 1097.0], [93.4, 1105.0], [93.5, 1109.0], [93.6, 1112.0], [93.7, 1120.0], [93.8, 1124.0], [93.9, 1138.0], [94.0, 1140.0], [94.1, 1144.0], [94.2, 1146.0], [94.3, 1149.0], [94.4, 1159.0], [94.5, 1166.0], [94.6, 1169.0], [94.7, 1175.0], [94.8, 1181.0], [94.9, 1190.0], [95.0, 1195.0], [95.1, 1201.0], [95.2, 1210.0], [95.3, 1218.0], [95.4, 1229.0], [95.5, 1235.0], [95.6, 1240.0], [95.7, 1250.0], [95.8, 1254.0], [95.9, 1263.0], [96.0, 1271.0], [96.1, 1281.0], [96.2, 1290.0], [96.3, 1297.0], [96.4, 1308.0], [96.5, 1317.0], [96.6, 1324.0], [96.7, 1331.0], [96.8, 1339.0], [96.9, 1355.0], [97.0, 1363.0], [97.1, 1400.0], [97.2, 1411.0], [97.3, 1427.0], [97.4, 1446.0], [97.5, 1468.0], [97.6, 1491.0], [97.7, 1506.0], [97.8, 1529.0], [97.9, 1538.0], [98.0, 1542.0], [98.1, 1557.0], [98.2, 1590.0], [98.3, 1621.0], [98.4, 1640.0], [98.5, 1665.0], [98.6, 1683.0], [98.7, 1700.0], [98.8, 1726.0], [98.9, 1777.0], [99.0, 1843.0], [99.1, 1865.0], [99.2, 1917.0], [99.3, 1953.0], [99.4, 2022.0], [99.5, 2124.0], [99.6, 2237.0], [99.7, 2375.0], [99.8, 2605.0], [99.9, 2767.0], [100.0, 3362.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1422.0, "series": [{"data": [[0.0, 1422.0], [600.0, 277.0], [700.0, 231.0], [800.0, 183.0], [900.0, 139.0], [1000.0, 117.0], [1100.0, 92.0], [1200.0, 68.0], [1300.0, 38.0], [1400.0, 29.0], [1500.0, 32.0], [100.0, 829.0], [1600.0, 23.0], [1700.0, 12.0], [1800.0, 13.0], [1900.0, 10.0], [2000.0, 7.0], [2100.0, 4.0], [2300.0, 4.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 5.0], [2800.0, 3.0], [2700.0, 2.0], [2900.0, 1.0], [200.0, 530.0], [3300.0, 1.0], [300.0, 465.0], [400.0, 376.0], [500.0, 352.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3621.0, "series": [{"data": [[0.0, 3621.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1525.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 122.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.36726384364819, "minX": 1.60189902E12, "maxY": 39.99826904055405, "series": [{"data": [[1.60189902E12, 39.99826904055405], [1.60189908E12, 39.36726384364819]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 278.0, "minX": 1.0, "maxY": 2427.0, "series": [{"data": [[33.0, 512.0], [32.0, 994.0], [2.0, 2344.0], [35.0, 515.0], [34.0, 990.0], [37.0, 518.0], [36.0, 574.0], [38.0, 717.0], [39.0, 278.0], [40.0, 401.5592734225614], [3.0, 2137.0], [4.0, 2057.0], [5.0, 2312.0], [6.0, 2326.0], [8.0, 1932.0], [9.0, 1675.0], [11.0, 1546.0], [12.0, 1673.0], [13.0, 1557.0], [14.0, 1618.0], [15.0, 1341.0], [16.0, 1491.0], [1.0, 2427.0], [17.0, 1360.0], [18.0, 1270.0], [19.0, 1492.0], [20.0, 1351.0], [21.0, 1263.0], [22.0, 1309.0], [23.0, 1184.0], [24.0, 1195.0], [25.0, 1095.0], [26.0, 926.0], [27.0, 835.0], [28.0, 864.0], [29.0, 767.0], [30.0, 695.0], [31.0, 673.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.851289833080436, 408.4971547799688]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10858.616666666667, "minX": 1.60189902E12, "maxY": 2893654.2, "series": [{"data": [[1.60189902E12, 2893654.2], [1.60189908E12, 1384042.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189902E12, 34720.933333333334], [1.60189908E12, 10858.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 391.6750741839756, "minX": 1.60189902E12, "maxY": 463.8949511400652, "series": [{"data": [[1.60189902E12, 391.6750741839756], [1.60189908E12, 463.8949511400652]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 391.37190900099023, "minX": 1.60189902E12, "maxY": 463.4022801302935, "series": [{"data": [[1.60189902E12, 391.37190900099023], [1.60189908E12, 463.4022801302935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015472312703583088, "minX": 1.60189902E12, "maxY": 0.154055390702275, "series": [{"data": [[1.60189902E12, 0.154055390702275], [1.60189908E12, 0.015472312703583088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60189902E12, "maxY": 3362.0, "series": [{"data": [[1.60189902E12, 2841.0], [1.60189908E12, 3362.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189902E12, 59.0], [1.60189908E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189902E12, 60.0], [1.60189908E12, 33.14730011701584]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189902E12, 60.0], [1.60189908E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189902E12, 37.0], [1.60189908E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189902E12, 266.0], [1.60189908E12, 295.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 90.5, "minX": 6.0, "maxY": 2319.0, "series": [{"data": [[36.0, 743.0], [38.0, 899.5], [41.0, 913.0], [49.0, 723.0], [51.0, 718.0], [52.0, 740.0], [59.0, 534.5], [60.0, 490.5], [63.0, 650.0], [65.0, 589.0], [71.0, 486.0], [73.0, 471.0], [75.0, 501.0], [74.0, 272.0], [78.0, 392.0], [77.0, 429.0], [83.0, 774.0], [82.0, 359.0], [91.0, 96.0], [90.0, 472.5], [88.0, 269.5], [95.0, 369.0], [6.0, 2319.0], [101.0, 356.0], [102.0, 271.0], [100.0, 316.5], [106.0, 104.5], [112.0, 332.5], [114.0, 278.5], [117.0, 333.5], [121.0, 100.0], [120.0, 279.5], [132.0, 152.0], [136.0, 241.0], [148.0, 260.0], [153.0, 114.0], [164.0, 94.0], [168.0, 90.5], [172.0, 149.0], [169.0, 170.0], [171.0, 96.0], [193.0, 164.0], [202.0, 179.5], [15.0, 1537.0], [21.0, 864.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[132.0, 237.0], [51.0, 868.0], [102.0, 475.0], [52.0, 732.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 202.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 90.5, "minX": 6.0, "maxY": 2318.5, "series": [{"data": [[36.0, 741.0], [38.0, 897.5], [41.0, 913.0], [49.0, 723.0], [51.0, 715.0], [52.0, 736.0], [59.0, 534.0], [60.0, 490.0], [63.0, 650.0], [65.0, 588.0], [71.0, 486.0], [73.0, 471.0], [75.0, 500.5], [74.0, 272.0], [78.0, 391.0], [77.0, 429.0], [83.0, 774.0], [82.0, 358.5], [91.0, 96.0], [90.0, 472.5], [88.0, 269.5], [95.0, 369.0], [6.0, 2318.5], [101.0, 356.0], [102.0, 271.0], [100.0, 316.0], [106.0, 104.5], [112.0, 332.5], [114.0, 278.5], [117.0, 333.0], [121.0, 100.0], [120.0, 279.5], [132.0, 152.0], [136.0, 240.5], [148.0, 260.0], [153.0, 114.0], [164.0, 94.0], [168.0, 90.5], [172.0, 149.0], [169.0, 170.0], [171.0, 96.0], [193.0, 164.0], [202.0, 179.5], [15.0, 1536.0], [21.0, 864.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[132.0, 237.0], [51.0, 868.0], [102.0, 475.0], [52.0, 732.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 202.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.8, "minX": 1.60189902E12, "maxY": 68.06666666666666, "series": [{"data": [[1.60189902E12, 68.06666666666666], [1.60189908E12, 19.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189902E12, "maxY": 67.36666666666666, "series": [{"data": [[1.60189902E12, 67.36666666666666], [1.60189908E12, 20.433333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189902E12, 0.03333333333333333], [1.60189908E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189908E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189902E12, "maxY": 67.36666666666666, "series": [{"data": [[1.60189902E12, 67.36666666666666], [1.60189908E12, 20.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189902E12, 0.03333333333333333], [1.60189908E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189902E12, "maxY": 67.36666666666666, "series": [{"data": [[1.60189902E12, 67.36666666666666], [1.60189908E12, 20.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189902E12, 0.03333333333333333], [1.60189908E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189908E12, "title": "Total Transactions Per Second"}},
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

