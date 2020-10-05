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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2999.0, "series": [{"data": [[0.0, 29.0], [0.1, 30.0], [0.2, 30.0], [0.3, 31.0], [0.4, 33.0], [0.5, 33.0], [0.6, 34.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 41.0], [2.1, 41.0], [2.2, 42.0], [2.3, 42.0], [2.4, 43.0], [2.5, 43.0], [2.6, 43.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 45.0], [3.1, 46.0], [3.2, 46.0], [3.3, 47.0], [3.4, 48.0], [3.5, 49.0], [3.6, 49.0], [3.7, 51.0], [3.8, 51.0], [3.9, 52.0], [4.0, 53.0], [4.1, 54.0], [4.2, 55.0], [4.3, 55.0], [4.4, 56.0], [4.5, 56.0], [4.6, 56.0], [4.7, 57.0], [4.8, 58.0], [4.9, 59.0], [5.0, 60.0], [5.1, 60.0], [5.2, 61.0], [5.3, 61.0], [5.4, 62.0], [5.5, 62.0], [5.6, 63.0], [5.7, 63.0], [5.8, 63.0], [5.9, 63.0], [6.0, 64.0], [6.1, 64.0], [6.2, 64.0], [6.3, 65.0], [6.4, 65.0], [6.5, 65.0], [6.6, 65.0], [6.7, 66.0], [6.8, 66.0], [6.9, 66.0], [7.0, 66.0], [7.1, 67.0], [7.2, 67.0], [7.3, 67.0], [7.4, 67.0], [7.5, 67.0], [7.6, 68.0], [7.7, 68.0], [7.8, 68.0], [7.9, 68.0], [8.0, 68.0], [8.1, 68.0], [8.2, 69.0], [8.3, 69.0], [8.4, 69.0], [8.5, 69.0], [8.6, 69.0], [8.7, 69.0], [8.8, 70.0], [8.9, 70.0], [9.0, 70.0], [9.1, 70.0], [9.2, 70.0], [9.3, 70.0], [9.4, 71.0], [9.5, 71.0], [9.6, 71.0], [9.7, 71.0], [9.8, 71.0], [9.9, 71.0], [10.0, 71.0], [10.1, 71.0], [10.2, 71.0], [10.3, 72.0], [10.4, 72.0], [10.5, 72.0], [10.6, 72.0], [10.7, 72.0], [10.8, 72.0], [10.9, 72.0], [11.0, 72.0], [11.1, 72.0], [11.2, 73.0], [11.3, 73.0], [11.4, 73.0], [11.5, 73.0], [11.6, 73.0], [11.7, 73.0], [11.8, 73.0], [11.9, 73.0], [12.0, 73.0], [12.1, 73.0], [12.2, 74.0], [12.3, 74.0], [12.4, 74.0], [12.5, 74.0], [12.6, 74.0], [12.7, 74.0], [12.8, 74.0], [12.9, 74.0], [13.0, 74.0], [13.1, 75.0], [13.2, 75.0], [13.3, 75.0], [13.4, 75.0], [13.5, 75.0], [13.6, 75.0], [13.7, 76.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 76.0], [14.2, 76.0], [14.3, 76.0], [14.4, 76.0], [14.5, 76.0], [14.6, 77.0], [14.7, 77.0], [14.8, 77.0], [14.9, 77.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 77.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 78.0], [16.3, 78.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 79.0], [16.9, 79.0], [17.0, 79.0], [17.1, 79.0], [17.2, 80.0], [17.3, 80.0], [17.4, 80.0], [17.5, 80.0], [17.6, 80.0], [17.7, 80.0], [17.8, 81.0], [17.9, 81.0], [18.0, 81.0], [18.1, 81.0], [18.2, 81.0], [18.3, 81.0], [18.4, 82.0], [18.5, 82.0], [18.6, 82.0], [18.7, 82.0], [18.8, 82.0], [18.9, 82.0], [19.0, 83.0], [19.1, 83.0], [19.2, 83.0], [19.3, 83.0], [19.4, 83.0], [19.5, 83.0], [19.6, 84.0], [19.7, 84.0], [19.8, 84.0], [19.9, 84.0], [20.0, 84.0], [20.1, 85.0], [20.2, 85.0], [20.3, 85.0], [20.4, 85.0], [20.5, 86.0], [20.6, 86.0], [20.7, 86.0], [20.8, 86.0], [20.9, 86.0], [21.0, 87.0], [21.1, 87.0], [21.2, 87.0], [21.3, 87.0], [21.4, 87.0], [21.5, 88.0], [21.6, 88.0], [21.7, 88.0], [21.8, 88.0], [21.9, 88.0], [22.0, 88.0], [22.1, 88.0], [22.2, 89.0], [22.3, 89.0], [22.4, 89.0], [22.5, 89.0], [22.6, 90.0], [22.7, 90.0], [22.8, 90.0], [22.9, 90.0], [23.0, 91.0], [23.1, 91.0], [23.2, 91.0], [23.3, 91.0], [23.4, 91.0], [23.5, 92.0], [23.6, 92.0], [23.7, 92.0], [23.8, 92.0], [23.9, 92.0], [24.0, 92.0], [24.1, 93.0], [24.2, 93.0], [24.3, 93.0], [24.4, 93.0], [24.5, 93.0], [24.6, 93.0], [24.7, 94.0], [24.8, 94.0], [24.9, 94.0], [25.0, 95.0], [25.1, 95.0], [25.2, 95.0], [25.3, 95.0], [25.4, 95.0], [25.5, 96.0], [25.6, 96.0], [25.7, 96.0], [25.8, 96.0], [25.9, 96.0], [26.0, 96.0], [26.1, 97.0], [26.2, 97.0], [26.3, 97.0], [26.4, 97.0], [26.5, 97.0], [26.6, 98.0], [26.7, 98.0], [26.8, 98.0], [26.9, 98.0], [27.0, 99.0], [27.1, 99.0], [27.2, 99.0], [27.3, 100.0], [27.4, 100.0], [27.5, 100.0], [27.6, 100.0], [27.7, 101.0], [27.8, 101.0], [27.9, 102.0], [28.0, 102.0], [28.1, 102.0], [28.2, 103.0], [28.3, 103.0], [28.4, 103.0], [28.5, 104.0], [28.6, 104.0], [28.7, 104.0], [28.8, 104.0], [28.9, 104.0], [29.0, 105.0], [29.1, 105.0], [29.2, 106.0], [29.3, 106.0], [29.4, 106.0], [29.5, 107.0], [29.6, 107.0], [29.7, 108.0], [29.8, 108.0], [29.9, 109.0], [30.0, 109.0], [30.1, 109.0], [30.2, 110.0], [30.3, 111.0], [30.4, 111.0], [30.5, 111.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 113.0], [31.0, 113.0], [31.1, 114.0], [31.2, 114.0], [31.3, 115.0], [31.4, 115.0], [31.5, 116.0], [31.6, 117.0], [31.7, 117.0], [31.8, 118.0], [31.9, 119.0], [32.0, 120.0], [32.1, 121.0], [32.2, 121.0], [32.3, 122.0], [32.4, 122.0], [32.5, 123.0], [32.6, 124.0], [32.7, 126.0], [32.8, 126.0], [32.9, 128.0], [33.0, 128.0], [33.1, 129.0], [33.2, 130.0], [33.3, 131.0], [33.4, 131.0], [33.5, 132.0], [33.6, 132.0], [33.7, 133.0], [33.8, 133.0], [33.9, 134.0], [34.0, 135.0], [34.1, 135.0], [34.2, 136.0], [34.3, 136.0], [34.4, 137.0], [34.5, 137.0], [34.6, 138.0], [34.7, 138.0], [34.8, 139.0], [34.9, 139.0], [35.0, 140.0], [35.1, 140.0], [35.2, 141.0], [35.3, 142.0], [35.4, 142.0], [35.5, 143.0], [35.6, 143.0], [35.7, 144.0], [35.8, 144.0], [35.9, 145.0], [36.0, 145.0], [36.1, 146.0], [36.2, 146.0], [36.3, 147.0], [36.4, 147.0], [36.5, 148.0], [36.6, 149.0], [36.7, 149.0], [36.8, 150.0], [36.9, 150.0], [37.0, 150.0], [37.1, 151.0], [37.2, 152.0], [37.3, 153.0], [37.4, 153.0], [37.5, 154.0], [37.6, 154.0], [37.7, 155.0], [37.8, 155.0], [37.9, 155.0], [38.0, 156.0], [38.1, 157.0], [38.2, 158.0], [38.3, 158.0], [38.4, 159.0], [38.5, 160.0], [38.6, 160.0], [38.7, 161.0], [38.8, 161.0], [38.9, 162.0], [39.0, 163.0], [39.1, 164.0], [39.2, 164.0], [39.3, 164.0], [39.4, 165.0], [39.5, 166.0], [39.6, 167.0], [39.7, 167.0], [39.8, 168.0], [39.9, 169.0], [40.0, 169.0], [40.1, 170.0], [40.2, 171.0], [40.3, 172.0], [40.4, 173.0], [40.5, 173.0], [40.6, 174.0], [40.7, 176.0], [40.8, 177.0], [40.9, 177.0], [41.0, 178.0], [41.1, 179.0], [41.2, 180.0], [41.3, 181.0], [41.4, 183.0], [41.5, 184.0], [41.6, 186.0], [41.7, 186.0], [41.8, 188.0], [41.9, 189.0], [42.0, 190.0], [42.1, 193.0], [42.2, 194.0], [42.3, 196.0], [42.4, 197.0], [42.5, 198.0], [42.6, 199.0], [42.7, 200.0], [42.8, 202.0], [42.9, 203.0], [43.0, 204.0], [43.1, 205.0], [43.2, 206.0], [43.3, 208.0], [43.4, 210.0], [43.5, 210.0], [43.6, 211.0], [43.7, 213.0], [43.8, 214.0], [43.9, 215.0], [44.0, 217.0], [44.1, 218.0], [44.2, 219.0], [44.3, 220.0], [44.4, 222.0], [44.5, 223.0], [44.6, 224.0], [44.7, 225.0], [44.8, 225.0], [44.9, 228.0], [45.0, 228.0], [45.1, 229.0], [45.2, 230.0], [45.3, 231.0], [45.4, 233.0], [45.5, 234.0], [45.6, 235.0], [45.7, 236.0], [45.8, 236.0], [45.9, 237.0], [46.0, 238.0], [46.1, 238.0], [46.2, 239.0], [46.3, 239.0], [46.4, 241.0], [46.5, 241.0], [46.6, 243.0], [46.7, 243.0], [46.8, 244.0], [46.9, 244.0], [47.0, 245.0], [47.1, 246.0], [47.2, 247.0], [47.3, 248.0], [47.4, 249.0], [47.5, 250.0], [47.6, 251.0], [47.7, 251.0], [47.8, 252.0], [47.9, 253.0], [48.0, 254.0], [48.1, 255.0], [48.2, 256.0], [48.3, 257.0], [48.4, 258.0], [48.5, 259.0], [48.6, 260.0], [48.7, 261.0], [48.8, 261.0], [48.9, 262.0], [49.0, 263.0], [49.1, 264.0], [49.2, 265.0], [49.3, 266.0], [49.4, 267.0], [49.5, 268.0], [49.6, 268.0], [49.7, 269.0], [49.8, 270.0], [49.9, 271.0], [50.0, 272.0], [50.1, 273.0], [50.2, 274.0], [50.3, 275.0], [50.4, 275.0], [50.5, 278.0], [50.6, 278.0], [50.7, 279.0], [50.8, 279.0], [50.9, 280.0], [51.0, 281.0], [51.1, 281.0], [51.2, 284.0], [51.3, 285.0], [51.4, 286.0], [51.5, 287.0], [51.6, 288.0], [51.7, 288.0], [51.8, 289.0], [51.9, 290.0], [52.0, 291.0], [52.1, 291.0], [52.2, 292.0], [52.3, 294.0], [52.4, 295.0], [52.5, 296.0], [52.6, 297.0], [52.7, 297.0], [52.8, 298.0], [52.9, 300.0], [53.0, 301.0], [53.1, 301.0], [53.2, 302.0], [53.3, 302.0], [53.4, 304.0], [53.5, 305.0], [53.6, 306.0], [53.7, 308.0], [53.8, 309.0], [53.9, 310.0], [54.0, 310.0], [54.1, 312.0], [54.2, 313.0], [54.3, 315.0], [54.4, 315.0], [54.5, 316.0], [54.6, 317.0], [54.7, 317.0], [54.8, 318.0], [54.9, 319.0], [55.0, 320.0], [55.1, 320.0], [55.2, 322.0], [55.3, 322.0], [55.4, 323.0], [55.5, 324.0], [55.6, 325.0], [55.7, 326.0], [55.8, 327.0], [55.9, 328.0], [56.0, 329.0], [56.1, 329.0], [56.2, 330.0], [56.3, 332.0], [56.4, 333.0], [56.5, 333.0], [56.6, 334.0], [56.7, 336.0], [56.8, 337.0], [56.9, 338.0], [57.0, 339.0], [57.1, 340.0], [57.2, 341.0], [57.3, 342.0], [57.4, 344.0], [57.5, 345.0], [57.6, 346.0], [57.7, 347.0], [57.8, 348.0], [57.9, 349.0], [58.0, 350.0], [58.1, 352.0], [58.2, 353.0], [58.3, 354.0], [58.4, 355.0], [58.5, 356.0], [58.6, 357.0], [58.7, 358.0], [58.8, 360.0], [58.9, 361.0], [59.0, 361.0], [59.1, 362.0], [59.2, 363.0], [59.3, 364.0], [59.4, 367.0], [59.5, 368.0], [59.6, 369.0], [59.7, 370.0], [59.8, 370.0], [59.9, 372.0], [60.0, 373.0], [60.1, 374.0], [60.2, 375.0], [60.3, 378.0], [60.4, 379.0], [60.5, 380.0], [60.6, 381.0], [60.7, 382.0], [60.8, 383.0], [60.9, 383.0], [61.0, 386.0], [61.1, 386.0], [61.2, 387.0], [61.3, 389.0], [61.4, 391.0], [61.5, 391.0], [61.6, 392.0], [61.7, 393.0], [61.8, 396.0], [61.9, 396.0], [62.0, 398.0], [62.1, 399.0], [62.2, 400.0], [62.3, 401.0], [62.4, 403.0], [62.5, 404.0], [62.6, 405.0], [62.7, 407.0], [62.8, 408.0], [62.9, 409.0], [63.0, 410.0], [63.1, 411.0], [63.2, 412.0], [63.3, 414.0], [63.4, 415.0], [63.5, 416.0], [63.6, 418.0], [63.7, 419.0], [63.8, 421.0], [63.9, 422.0], [64.0, 424.0], [64.1, 426.0], [64.2, 427.0], [64.3, 428.0], [64.4, 430.0], [64.5, 431.0], [64.6, 432.0], [64.7, 434.0], [64.8, 437.0], [64.9, 439.0], [65.0, 440.0], [65.1, 441.0], [65.2, 442.0], [65.3, 443.0], [65.4, 444.0], [65.5, 446.0], [65.6, 447.0], [65.7, 449.0], [65.8, 451.0], [65.9, 453.0], [66.0, 454.0], [66.1, 455.0], [66.2, 457.0], [66.3, 458.0], [66.4, 459.0], [66.5, 459.0], [66.6, 462.0], [66.7, 463.0], [66.8, 465.0], [66.9, 466.0], [67.0, 467.0], [67.1, 469.0], [67.2, 471.0], [67.3, 473.0], [67.4, 474.0], [67.5, 475.0], [67.6, 477.0], [67.7, 479.0], [67.8, 480.0], [67.9, 482.0], [68.0, 484.0], [68.1, 484.0], [68.2, 486.0], [68.3, 488.0], [68.4, 489.0], [68.5, 491.0], [68.6, 492.0], [68.7, 492.0], [68.8, 494.0], [68.9, 496.0], [69.0, 497.0], [69.1, 498.0], [69.2, 500.0], [69.3, 503.0], [69.4, 505.0], [69.5, 507.0], [69.6, 509.0], [69.7, 510.0], [69.8, 511.0], [69.9, 512.0], [70.0, 514.0], [70.1, 515.0], [70.2, 516.0], [70.3, 518.0], [70.4, 520.0], [70.5, 521.0], [70.6, 524.0], [70.7, 525.0], [70.8, 526.0], [70.9, 527.0], [71.0, 529.0], [71.1, 529.0], [71.2, 530.0], [71.3, 532.0], [71.4, 533.0], [71.5, 534.0], [71.6, 535.0], [71.7, 538.0], [71.8, 539.0], [71.9, 540.0], [72.0, 541.0], [72.1, 543.0], [72.2, 545.0], [72.3, 546.0], [72.4, 547.0], [72.5, 549.0], [72.6, 549.0], [72.7, 551.0], [72.8, 554.0], [72.9, 554.0], [73.0, 556.0], [73.1, 558.0], [73.2, 560.0], [73.3, 562.0], [73.4, 564.0], [73.5, 566.0], [73.6, 567.0], [73.7, 570.0], [73.8, 571.0], [73.9, 574.0], [74.0, 575.0], [74.1, 576.0], [74.2, 578.0], [74.3, 579.0], [74.4, 581.0], [74.5, 582.0], [74.6, 584.0], [74.7, 586.0], [74.8, 588.0], [74.9, 590.0], [75.0, 591.0], [75.1, 592.0], [75.2, 593.0], [75.3, 594.0], [75.4, 597.0], [75.5, 598.0], [75.6, 601.0], [75.7, 604.0], [75.8, 606.0], [75.9, 608.0], [76.0, 608.0], [76.1, 609.0], [76.2, 611.0], [76.3, 614.0], [76.4, 616.0], [76.5, 617.0], [76.6, 621.0], [76.7, 624.0], [76.8, 626.0], [76.9, 628.0], [77.0, 630.0], [77.1, 633.0], [77.2, 635.0], [77.3, 638.0], [77.4, 640.0], [77.5, 642.0], [77.6, 642.0], [77.7, 644.0], [77.8, 646.0], [77.9, 648.0], [78.0, 649.0], [78.1, 650.0], [78.2, 651.0], [78.3, 652.0], [78.4, 654.0], [78.5, 655.0], [78.6, 656.0], [78.7, 658.0], [78.8, 659.0], [78.9, 661.0], [79.0, 665.0], [79.1, 667.0], [79.2, 669.0], [79.3, 670.0], [79.4, 672.0], [79.5, 673.0], [79.6, 675.0], [79.7, 676.0], [79.8, 677.0], [79.9, 679.0], [80.0, 681.0], [80.1, 682.0], [80.2, 685.0], [80.3, 686.0], [80.4, 689.0], [80.5, 692.0], [80.6, 694.0], [80.7, 697.0], [80.8, 701.0], [80.9, 703.0], [81.0, 704.0], [81.1, 705.0], [81.2, 707.0], [81.3, 709.0], [81.4, 711.0], [81.5, 712.0], [81.6, 713.0], [81.7, 716.0], [81.8, 718.0], [81.9, 722.0], [82.0, 724.0], [82.1, 725.0], [82.2, 726.0], [82.3, 727.0], [82.4, 729.0], [82.5, 731.0], [82.6, 735.0], [82.7, 736.0], [82.8, 742.0], [82.9, 745.0], [83.0, 747.0], [83.1, 748.0], [83.2, 750.0], [83.3, 752.0], [83.4, 753.0], [83.5, 755.0], [83.6, 758.0], [83.7, 761.0], [83.8, 763.0], [83.9, 765.0], [84.0, 767.0], [84.1, 769.0], [84.2, 772.0], [84.3, 775.0], [84.4, 776.0], [84.5, 778.0], [84.6, 781.0], [84.7, 783.0], [84.8, 784.0], [84.9, 784.0], [85.0, 785.0], [85.1, 787.0], [85.2, 789.0], [85.3, 791.0], [85.4, 792.0], [85.5, 797.0], [85.6, 799.0], [85.7, 804.0], [85.8, 807.0], [85.9, 809.0], [86.0, 814.0], [86.1, 817.0], [86.2, 819.0], [86.3, 821.0], [86.4, 823.0], [86.5, 823.0], [86.6, 826.0], [86.7, 827.0], [86.8, 830.0], [86.9, 833.0], [87.0, 835.0], [87.1, 839.0], [87.2, 841.0], [87.3, 843.0], [87.4, 845.0], [87.5, 847.0], [87.6, 849.0], [87.7, 852.0], [87.8, 856.0], [87.9, 860.0], [88.0, 862.0], [88.1, 865.0], [88.2, 867.0], [88.3, 871.0], [88.4, 873.0], [88.5, 874.0], [88.6, 878.0], [88.7, 883.0], [88.8, 885.0], [88.9, 888.0], [89.0, 891.0], [89.1, 895.0], [89.2, 897.0], [89.3, 900.0], [89.4, 906.0], [89.5, 908.0], [89.6, 911.0], [89.7, 916.0], [89.8, 923.0], [89.9, 930.0], [90.0, 931.0], [90.1, 936.0], [90.2, 938.0], [90.3, 941.0], [90.4, 947.0], [90.5, 949.0], [90.6, 956.0], [90.7, 960.0], [90.8, 966.0], [90.9, 970.0], [91.0, 974.0], [91.1, 979.0], [91.2, 987.0], [91.3, 989.0], [91.4, 992.0], [91.5, 996.0], [91.6, 1002.0], [91.7, 1004.0], [91.8, 1009.0], [91.9, 1010.0], [92.0, 1016.0], [92.1, 1020.0], [92.2, 1026.0], [92.3, 1032.0], [92.4, 1035.0], [92.5, 1038.0], [92.6, 1042.0], [92.7, 1048.0], [92.8, 1053.0], [92.9, 1054.0], [93.0, 1058.0], [93.1, 1061.0], [93.2, 1064.0], [93.3, 1068.0], [93.4, 1071.0], [93.5, 1079.0], [93.6, 1083.0], [93.7, 1088.0], [93.8, 1099.0], [93.9, 1103.0], [94.0, 1115.0], [94.1, 1118.0], [94.2, 1125.0], [94.3, 1129.0], [94.4, 1137.0], [94.5, 1140.0], [94.6, 1145.0], [94.7, 1151.0], [94.8, 1158.0], [94.9, 1168.0], [95.0, 1177.0], [95.1, 1180.0], [95.2, 1188.0], [95.3, 1197.0], [95.4, 1207.0], [95.5, 1212.0], [95.6, 1221.0], [95.7, 1226.0], [95.8, 1229.0], [95.9, 1234.0], [96.0, 1242.0], [96.1, 1246.0], [96.2, 1253.0], [96.3, 1259.0], [96.4, 1262.0], [96.5, 1271.0], [96.6, 1291.0], [96.7, 1305.0], [96.8, 1322.0], [96.9, 1336.0], [97.0, 1346.0], [97.1, 1358.0], [97.2, 1373.0], [97.3, 1387.0], [97.4, 1413.0], [97.5, 1427.0], [97.6, 1439.0], [97.7, 1453.0], [97.8, 1475.0], [97.9, 1509.0], [98.0, 1520.0], [98.1, 1539.0], [98.2, 1593.0], [98.3, 1648.0], [98.4, 1659.0], [98.5, 1687.0], [98.6, 1705.0], [98.7, 1740.0], [98.8, 1760.0], [98.9, 1796.0], [99.0, 1819.0], [99.1, 1870.0], [99.2, 1913.0], [99.3, 1974.0], [99.4, 2106.0], [99.5, 2169.0], [99.6, 2230.0], [99.7, 2290.0], [99.8, 2420.0], [99.9, 2641.0], [100.0, 2999.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1439.0, "series": [{"data": [[0.0, 1439.0], [600.0, 274.0], [700.0, 255.0], [800.0, 194.0], [900.0, 119.0], [1000.0, 120.0], [1100.0, 80.0], [1200.0, 70.0], [1300.0, 37.0], [1400.0, 26.0], [1500.0, 20.0], [100.0, 810.0], [1600.0, 19.0], [1700.0, 17.0], [1800.0, 11.0], [1900.0, 10.0], [2000.0, 4.0], [2100.0, 8.0], [2200.0, 9.0], [2300.0, 4.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 539.0], [300.0, 491.0], [400.0, 368.0], [500.0, 337.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3648.0, "series": [{"data": [[0.0, 3648.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1509.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 113.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.74125874125873, "minX": 1.60189872E12, "maxY": 39.9942706037902, "series": [{"data": [[1.60189878E12, 39.74125874125873], [1.60189872E12, 39.9942706037902]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189878E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 396.50946281781705, "minX": 1.0, "maxY": 2718.0, "series": [{"data": [[33.0, 640.0], [32.0, 856.0], [2.0, 2420.0], [35.0, 547.0], [34.0, 630.0], [37.0, 453.0], [36.0, 477.0], [39.0, 619.5], [38.0, 960.0], [40.0, 396.50946281781705], [5.0, 2320.0], [6.0, 2169.0], [7.0, 2201.0], [8.0, 2230.0], [9.0, 2188.0], [10.0, 1737.0], [11.0, 1689.0], [12.0, 1568.0], [13.0, 1544.0], [14.0, 1565.0], [15.0, 1439.0], [16.0, 1373.0], [1.0, 2718.0], [17.0, 1520.0], [18.0, 1234.0], [19.0, 1271.0], [20.0, 1328.0], [21.0, 1314.0], [22.0, 1294.0], [23.0, 1220.0], [24.0, 1117.0], [25.0, 1024.0], [26.0, 1192.0], [27.0, 767.0], [28.0, 578.0], [29.0, 778.0], [30.0, 1226.0], [31.0, 844.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.850151745068345, 403.8370637329288]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 19721.9, "minX": 1.60189872E12, "maxY": 2369359.4833333334, "series": [{"data": [[1.60189878E12, 2369359.4833333334], [1.60189872E12, 1912100.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60189878E12, 25857.65], [1.60189872E12, 19721.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189878E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 384.75924075923984, "minX": 1.60189872E12, "maxY": 429.08638166593204, "series": [{"data": [[1.60189878E12, 384.75924075923984], [1.60189872E12, 429.08638166593204]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189878E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 384.44622044622014, "minX": 1.60189872E12, "maxY": 428.6989863375942, "series": [{"data": [[1.60189878E12, 384.44622044622014], [1.60189872E12, 428.6989863375942]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189878E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011988011988012, "minX": 1.60189872E12, "maxY": 0.2913177611282504, "series": [{"data": [[1.60189878E12, 0.011988011988012], [1.60189872E12, 0.2913177611282504]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189878E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.60189872E12, "maxY": 2999.0, "series": [{"data": [[1.60189878E12, 2999.0], [1.60189872E12, 2349.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60189878E12, 33.03599928379059], [1.60189872E12, 61.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60189878E12, 34.0], [1.60189872E12, 62.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60189878E12, 34.0], [1.60189872E12, 61.54599972963333]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60189878E12, 29.0], [1.60189872E12, 52.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60189878E12, 241.0], [1.60189872E12, 317.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189878E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 84.0, "minX": 2.0, "maxY": 2569.0, "series": [{"data": [[2.0, 2569.0], [5.0, 755.0], [12.0, 2178.5], [17.0, 1226.0], [33.0, 758.0], [44.0, 1129.0], [46.0, 902.5], [49.0, 437.0], [50.0, 747.5], [51.0, 543.0], [52.0, 937.5], [54.0, 698.5], [57.0, 516.0], [58.0, 644.5], [59.0, 459.0], [60.0, 489.0], [67.0, 532.5], [68.0, 600.5], [72.0, 587.0], [77.0, 522.0], [79.0, 442.0], [78.0, 122.5], [76.0, 391.5], [81.0, 415.0], [82.0, 459.0], [84.0, 453.5], [86.0, 364.5], [96.0, 391.0], [99.0, 93.0], [98.0, 413.5], [100.0, 474.0], [102.0, 410.5], [105.0, 174.0], [106.0, 253.0], [119.0, 144.0], [124.0, 295.5], [135.0, 130.0], [128.0, 254.5], [131.0, 214.0], [132.0, 93.5], [129.0, 246.5], [130.0, 232.0], [147.0, 238.0], [175.0, 84.0], [169.0, 109.0], [179.0, 166.0], [196.0, 154.5], [200.0, 93.5], [213.0, 157.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[77.0, 231.0], [44.0, 1008.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 213.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 84.0, "minX": 2.0, "maxY": 2568.5, "series": [{"data": [[2.0, 2568.5], [5.0, 755.0], [12.0, 2178.0], [17.0, 1226.0], [33.0, 758.0], [44.0, 1128.0], [46.0, 902.5], [49.0, 437.0], [50.0, 747.0], [51.0, 542.0], [52.0, 936.5], [54.0, 696.5], [57.0, 514.0], [58.0, 644.0], [59.0, 459.0], [60.0, 489.0], [67.0, 532.5], [68.0, 600.5], [72.0, 586.5], [77.0, 522.0], [79.0, 441.0], [78.0, 122.5], [76.0, 391.5], [81.0, 415.0], [82.0, 459.0], [84.0, 453.5], [86.0, 363.0], [96.0, 391.0], [99.0, 93.0], [98.0, 409.0], [100.0, 473.0], [102.0, 410.5], [105.0, 174.0], [106.0, 252.0], [119.0, 144.0], [124.0, 295.5], [135.0, 130.0], [128.0, 254.5], [131.0, 214.0], [132.0, 93.5], [129.0, 245.5], [130.0, 231.5], [147.0, 237.0], [175.0, 84.0], [169.0, 109.0], [179.0, 166.0], [196.0, 154.0], [200.0, 93.5], [213.0, 157.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[77.0, 231.0], [44.0, 1008.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 213.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 38.483333333333334, "minX": 1.60189872E12, "maxY": 49.38333333333333, "series": [{"data": [[1.60189878E12, 49.38333333333333], [1.60189872E12, 38.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189878E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189872E12, "maxY": 50.05, "series": [{"data": [[1.60189878E12, 50.05], [1.60189872E12, 37.78333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60189872E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60189878E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189872E12, "maxY": 50.05, "series": [{"data": [[1.60189878E12, 50.05], [1.60189872E12, 37.78333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60189872E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189878E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60189872E12, "maxY": 50.05, "series": [{"data": [[1.60189878E12, 50.05], [1.60189872E12, 37.78333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60189872E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60189878E12, "title": "Total Transactions Per Second"}},
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

