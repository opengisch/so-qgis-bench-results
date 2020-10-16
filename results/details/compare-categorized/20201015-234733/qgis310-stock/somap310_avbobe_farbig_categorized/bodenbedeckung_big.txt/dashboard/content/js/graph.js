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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 20942.0, "series": [{"data": [[0.0, 19.0], [0.1, 23.0], [0.2, 25.0], [0.3, 28.0], [0.4, 29.0], [0.5, 29.0], [0.6, 30.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 37.0], [2.8, 37.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 42.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 43.0], [4.8, 43.0], [4.9, 43.0], [5.0, 44.0], [5.1, 44.0], [5.2, 44.0], [5.3, 44.0], [5.4, 45.0], [5.5, 45.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 47.0], [6.2, 47.0], [6.3, 48.0], [6.4, 48.0], [6.5, 48.0], [6.6, 48.0], [6.7, 49.0], [6.8, 49.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 51.0], [7.3, 51.0], [7.4, 51.0], [7.5, 51.0], [7.6, 52.0], [7.7, 52.0], [7.8, 53.0], [7.9, 53.0], [8.0, 53.0], [8.1, 53.0], [8.2, 54.0], [8.3, 54.0], [8.4, 54.0], [8.5, 55.0], [8.6, 55.0], [8.7, 56.0], [8.8, 56.0], [8.9, 57.0], [9.0, 57.0], [9.1, 58.0], [9.2, 58.0], [9.3, 58.0], [9.4, 59.0], [9.5, 59.0], [9.6, 59.0], [9.7, 59.0], [9.8, 60.0], [9.9, 60.0], [10.0, 60.0], [10.1, 61.0], [10.2, 61.0], [10.3, 62.0], [10.4, 62.0], [10.5, 63.0], [10.6, 63.0], [10.7, 64.0], [10.8, 64.0], [10.9, 64.0], [11.0, 64.0], [11.1, 65.0], [11.2, 66.0], [11.3, 66.0], [11.4, 67.0], [11.5, 68.0], [11.6, 69.0], [11.7, 69.0], [11.8, 70.0], [11.9, 70.0], [12.0, 71.0], [12.1, 71.0], [12.2, 71.0], [12.3, 71.0], [12.4, 72.0], [12.5, 73.0], [12.6, 73.0], [12.7, 73.0], [12.8, 74.0], [12.9, 75.0], [13.0, 75.0], [13.1, 76.0], [13.2, 76.0], [13.3, 76.0], [13.4, 77.0], [13.5, 77.0], [13.6, 77.0], [13.7, 78.0], [13.8, 78.0], [13.9, 79.0], [14.0, 79.0], [14.1, 79.0], [14.2, 80.0], [14.3, 80.0], [14.4, 81.0], [14.5, 81.0], [14.6, 82.0], [14.7, 83.0], [14.8, 83.0], [14.9, 83.0], [15.0, 83.0], [15.1, 84.0], [15.2, 84.0], [15.3, 85.0], [15.4, 85.0], [15.5, 85.0], [15.6, 86.0], [15.7, 86.0], [15.8, 87.0], [15.9, 87.0], [16.0, 88.0], [16.1, 88.0], [16.2, 89.0], [16.3, 89.0], [16.4, 90.0], [16.5, 90.0], [16.6, 90.0], [16.7, 91.0], [16.8, 91.0], [16.9, 92.0], [17.0, 92.0], [17.1, 92.0], [17.2, 93.0], [17.3, 93.0], [17.4, 93.0], [17.5, 94.0], [17.6, 95.0], [17.7, 95.0], [17.8, 95.0], [17.9, 96.0], [18.0, 96.0], [18.1, 96.0], [18.2, 97.0], [18.3, 98.0], [18.4, 98.0], [18.5, 99.0], [18.6, 100.0], [18.7, 100.0], [18.8, 100.0], [18.9, 101.0], [19.0, 101.0], [19.1, 102.0], [19.2, 102.0], [19.3, 102.0], [19.4, 103.0], [19.5, 104.0], [19.6, 105.0], [19.7, 105.0], [19.8, 106.0], [19.9, 107.0], [20.0, 107.0], [20.1, 108.0], [20.2, 109.0], [20.3, 109.0], [20.4, 110.0], [20.5, 110.0], [20.6, 111.0], [20.7, 111.0], [20.8, 112.0], [20.9, 113.0], [21.0, 113.0], [21.1, 113.0], [21.2, 114.0], [21.3, 115.0], [21.4, 115.0], [21.5, 116.0], [21.6, 117.0], [21.7, 118.0], [21.8, 119.0], [21.9, 119.0], [22.0, 120.0], [22.1, 120.0], [22.2, 121.0], [22.3, 122.0], [22.4, 123.0], [22.5, 123.0], [22.6, 124.0], [22.7, 124.0], [22.8, 125.0], [22.9, 125.0], [23.0, 126.0], [23.1, 126.0], [23.2, 127.0], [23.3, 127.0], [23.4, 128.0], [23.5, 128.0], [23.6, 129.0], [23.7, 130.0], [23.8, 130.0], [23.9, 131.0], [24.0, 132.0], [24.1, 132.0], [24.2, 133.0], [24.3, 133.0], [24.4, 134.0], [24.5, 135.0], [24.6, 135.0], [24.7, 136.0], [24.8, 137.0], [24.9, 138.0], [25.0, 139.0], [25.1, 140.0], [25.2, 141.0], [25.3, 141.0], [25.4, 142.0], [25.5, 142.0], [25.6, 143.0], [25.7, 143.0], [25.8, 144.0], [25.9, 144.0], [26.0, 145.0], [26.1, 146.0], [26.2, 146.0], [26.3, 147.0], [26.4, 147.0], [26.5, 148.0], [26.6, 148.0], [26.7, 149.0], [26.8, 150.0], [26.9, 151.0], [27.0, 151.0], [27.1, 152.0], [27.2, 153.0], [27.3, 154.0], [27.4, 154.0], [27.5, 155.0], [27.6, 155.0], [27.7, 156.0], [27.8, 157.0], [27.9, 158.0], [28.0, 159.0], [28.1, 159.0], [28.2, 160.0], [28.3, 161.0], [28.4, 162.0], [28.5, 162.0], [28.6, 163.0], [28.7, 163.0], [28.8, 164.0], [28.9, 164.0], [29.0, 165.0], [29.1, 166.0], [29.2, 167.0], [29.3, 168.0], [29.4, 169.0], [29.5, 170.0], [29.6, 171.0], [29.7, 171.0], [29.8, 172.0], [29.9, 172.0], [30.0, 173.0], [30.1, 173.0], [30.2, 174.0], [30.3, 175.0], [30.4, 175.0], [30.5, 176.0], [30.6, 178.0], [30.7, 178.0], [30.8, 179.0], [30.9, 180.0], [31.0, 180.0], [31.1, 181.0], [31.2, 182.0], [31.3, 182.0], [31.4, 183.0], [31.5, 183.0], [31.6, 184.0], [31.7, 185.0], [31.8, 186.0], [31.9, 187.0], [32.0, 187.0], [32.1, 188.0], [32.2, 189.0], [32.3, 190.0], [32.4, 191.0], [32.5, 193.0], [32.6, 193.0], [32.7, 194.0], [32.8, 195.0], [32.9, 195.0], [33.0, 196.0], [33.1, 196.0], [33.2, 197.0], [33.3, 198.0], [33.4, 200.0], [33.5, 201.0], [33.6, 202.0], [33.7, 202.0], [33.8, 203.0], [33.9, 203.0], [34.0, 204.0], [34.1, 204.0], [34.2, 205.0], [34.3, 207.0], [34.4, 207.0], [34.5, 210.0], [34.6, 210.0], [34.7, 211.0], [34.8, 212.0], [34.9, 212.0], [35.0, 213.0], [35.1, 214.0], [35.2, 215.0], [35.3, 216.0], [35.4, 217.0], [35.5, 218.0], [35.6, 219.0], [35.7, 220.0], [35.8, 222.0], [35.9, 223.0], [36.0, 224.0], [36.1, 224.0], [36.2, 225.0], [36.3, 226.0], [36.4, 227.0], [36.5, 228.0], [36.6, 228.0], [36.7, 229.0], [36.8, 230.0], [36.9, 232.0], [37.0, 234.0], [37.1, 234.0], [37.2, 236.0], [37.3, 237.0], [37.4, 238.0], [37.5, 239.0], [37.6, 241.0], [37.7, 242.0], [37.8, 243.0], [37.9, 245.0], [38.0, 246.0], [38.1, 247.0], [38.2, 248.0], [38.3, 249.0], [38.4, 250.0], [38.5, 251.0], [38.6, 252.0], [38.7, 253.0], [38.8, 254.0], [38.9, 255.0], [39.0, 257.0], [39.1, 258.0], [39.2, 258.0], [39.3, 259.0], [39.4, 260.0], [39.5, 261.0], [39.6, 262.0], [39.7, 262.0], [39.8, 263.0], [39.9, 264.0], [40.0, 265.0], [40.1, 266.0], [40.2, 266.0], [40.3, 267.0], [40.4, 268.0], [40.5, 269.0], [40.6, 271.0], [40.7, 271.0], [40.8, 274.0], [40.9, 275.0], [41.0, 276.0], [41.1, 278.0], [41.2, 279.0], [41.3, 279.0], [41.4, 281.0], [41.5, 282.0], [41.6, 283.0], [41.7, 284.0], [41.8, 285.0], [41.9, 287.0], [42.0, 288.0], [42.1, 289.0], [42.2, 290.0], [42.3, 291.0], [42.4, 292.0], [42.5, 293.0], [42.6, 294.0], [42.7, 295.0], [42.8, 297.0], [42.9, 297.0], [43.0, 298.0], [43.1, 299.0], [43.2, 300.0], [43.3, 301.0], [43.4, 301.0], [43.5, 302.0], [43.6, 302.0], [43.7, 304.0], [43.8, 304.0], [43.9, 305.0], [44.0, 307.0], [44.1, 307.0], [44.2, 308.0], [44.3, 308.0], [44.4, 309.0], [44.5, 310.0], [44.6, 311.0], [44.7, 311.0], [44.8, 312.0], [44.9, 312.0], [45.0, 313.0], [45.1, 314.0], [45.2, 314.0], [45.3, 315.0], [45.4, 316.0], [45.5, 317.0], [45.6, 317.0], [45.7, 317.0], [45.8, 318.0], [45.9, 318.0], [46.0, 318.0], [46.1, 319.0], [46.2, 319.0], [46.3, 319.0], [46.4, 320.0], [46.5, 320.0], [46.6, 321.0], [46.7, 322.0], [46.8, 322.0], [46.9, 323.0], [47.0, 323.0], [47.1, 324.0], [47.2, 325.0], [47.3, 325.0], [47.4, 326.0], [47.5, 327.0], [47.6, 328.0], [47.7, 328.0], [47.8, 329.0], [47.9, 329.0], [48.0, 330.0], [48.1, 330.0], [48.2, 331.0], [48.3, 331.0], [48.4, 332.0], [48.5, 332.0], [48.6, 333.0], [48.7, 333.0], [48.8, 334.0], [48.9, 335.0], [49.0, 335.0], [49.1, 335.0], [49.2, 337.0], [49.3, 337.0], [49.4, 338.0], [49.5, 339.0], [49.6, 339.0], [49.7, 340.0], [49.8, 340.0], [49.9, 341.0], [50.0, 341.0], [50.1, 342.0], [50.2, 343.0], [50.3, 344.0], [50.4, 344.0], [50.5, 344.0], [50.6, 345.0], [50.7, 345.0], [50.8, 346.0], [50.9, 347.0], [51.0, 347.0], [51.1, 348.0], [51.2, 349.0], [51.3, 349.0], [51.4, 350.0], [51.5, 350.0], [51.6, 351.0], [51.7, 352.0], [51.8, 353.0], [51.9, 354.0], [52.0, 355.0], [52.1, 355.0], [52.2, 356.0], [52.3, 357.0], [52.4, 357.0], [52.5, 358.0], [52.6, 358.0], [52.7, 359.0], [52.8, 360.0], [52.9, 360.0], [53.0, 361.0], [53.1, 362.0], [53.2, 362.0], [53.3, 363.0], [53.4, 364.0], [53.5, 365.0], [53.6, 365.0], [53.7, 366.0], [53.8, 366.0], [53.9, 367.0], [54.0, 368.0], [54.1, 369.0], [54.2, 369.0], [54.3, 370.0], [54.4, 370.0], [54.5, 371.0], [54.6, 371.0], [54.7, 372.0], [54.8, 373.0], [54.9, 374.0], [55.0, 374.0], [55.1, 375.0], [55.2, 376.0], [55.3, 377.0], [55.4, 377.0], [55.5, 378.0], [55.6, 379.0], [55.7, 380.0], [55.8, 381.0], [55.9, 381.0], [56.0, 383.0], [56.1, 384.0], [56.2, 384.0], [56.3, 384.0], [56.4, 385.0], [56.5, 387.0], [56.6, 388.0], [56.7, 389.0], [56.8, 391.0], [56.9, 392.0], [57.0, 392.0], [57.1, 393.0], [57.2, 394.0], [57.3, 395.0], [57.4, 396.0], [57.5, 398.0], [57.6, 399.0], [57.7, 400.0], [57.8, 401.0], [57.9, 402.0], [58.0, 403.0], [58.1, 404.0], [58.2, 406.0], [58.3, 407.0], [58.4, 407.0], [58.5, 409.0], [58.6, 410.0], [58.7, 411.0], [58.8, 412.0], [58.9, 414.0], [59.0, 415.0], [59.1, 416.0], [59.2, 416.0], [59.3, 417.0], [59.4, 418.0], [59.5, 419.0], [59.6, 420.0], [59.7, 421.0], [59.8, 422.0], [59.9, 425.0], [60.0, 426.0], [60.1, 427.0], [60.2, 429.0], [60.3, 429.0], [60.4, 429.0], [60.5, 430.0], [60.6, 431.0], [60.7, 432.0], [60.8, 435.0], [60.9, 436.0], [61.0, 437.0], [61.1, 439.0], [61.2, 440.0], [61.3, 442.0], [61.4, 443.0], [61.5, 444.0], [61.6, 447.0], [61.7, 449.0], [61.8, 451.0], [61.9, 452.0], [62.0, 454.0], [62.1, 455.0], [62.2, 456.0], [62.3, 458.0], [62.4, 459.0], [62.5, 460.0], [62.6, 461.0], [62.7, 463.0], [62.8, 464.0], [62.9, 464.0], [63.0, 466.0], [63.1, 468.0], [63.2, 471.0], [63.3, 471.0], [63.4, 474.0], [63.5, 476.0], [63.6, 478.0], [63.7, 479.0], [63.8, 480.0], [63.9, 482.0], [64.0, 483.0], [64.1, 484.0], [64.2, 486.0], [64.3, 487.0], [64.4, 489.0], [64.5, 491.0], [64.6, 493.0], [64.7, 494.0], [64.8, 496.0], [64.9, 498.0], [65.0, 501.0], [65.1, 502.0], [65.2, 504.0], [65.3, 508.0], [65.4, 510.0], [65.5, 510.0], [65.6, 512.0], [65.7, 513.0], [65.8, 515.0], [65.9, 517.0], [66.0, 518.0], [66.1, 523.0], [66.2, 524.0], [66.3, 526.0], [66.4, 528.0], [66.5, 529.0], [66.6, 531.0], [66.7, 533.0], [66.8, 535.0], [66.9, 537.0], [67.0, 539.0], [67.1, 540.0], [67.2, 541.0], [67.3, 543.0], [67.4, 545.0], [67.5, 548.0], [67.6, 552.0], [67.7, 557.0], [67.8, 558.0], [67.9, 560.0], [68.0, 563.0], [68.1, 564.0], [68.2, 566.0], [68.3, 566.0], [68.4, 568.0], [68.5, 569.0], [68.6, 569.0], [68.7, 572.0], [68.8, 573.0], [68.9, 574.0], [69.0, 575.0], [69.1, 575.0], [69.2, 577.0], [69.3, 577.0], [69.4, 578.0], [69.5, 579.0], [69.6, 580.0], [69.7, 582.0], [69.8, 585.0], [69.9, 586.0], [70.0, 587.0], [70.1, 588.0], [70.2, 589.0], [70.3, 590.0], [70.4, 590.0], [70.5, 591.0], [70.6, 592.0], [70.7, 593.0], [70.8, 594.0], [70.9, 596.0], [71.0, 596.0], [71.1, 597.0], [71.2, 598.0], [71.3, 599.0], [71.4, 600.0], [71.5, 601.0], [71.6, 602.0], [71.7, 603.0], [71.8, 604.0], [71.9, 604.0], [72.0, 605.0], [72.1, 606.0], [72.2, 608.0], [72.3, 608.0], [72.4, 609.0], [72.5, 610.0], [72.6, 611.0], [72.7, 612.0], [72.8, 612.0], [72.9, 613.0], [73.0, 613.0], [73.1, 614.0], [73.2, 616.0], [73.3, 618.0], [73.4, 618.0], [73.5, 619.0], [73.6, 621.0], [73.7, 624.0], [73.8, 624.0], [73.9, 626.0], [74.0, 627.0], [74.1, 628.0], [74.2, 629.0], [74.3, 631.0], [74.4, 632.0], [74.5, 632.0], [74.6, 634.0], [74.7, 635.0], [74.8, 635.0], [74.9, 636.0], [75.0, 636.0], [75.1, 637.0], [75.2, 638.0], [75.3, 639.0], [75.4, 640.0], [75.5, 641.0], [75.6, 641.0], [75.7, 643.0], [75.8, 643.0], [75.9, 644.0], [76.0, 644.0], [76.1, 645.0], [76.2, 646.0], [76.3, 646.0], [76.4, 648.0], [76.5, 649.0], [76.6, 651.0], [76.7, 652.0], [76.8, 654.0], [76.9, 655.0], [77.0, 657.0], [77.1, 658.0], [77.2, 660.0], [77.3, 661.0], [77.4, 661.0], [77.5, 662.0], [77.6, 664.0], [77.7, 665.0], [77.8, 666.0], [77.9, 669.0], [78.0, 671.0], [78.1, 671.0], [78.2, 673.0], [78.3, 674.0], [78.4, 676.0], [78.5, 678.0], [78.6, 679.0], [78.7, 680.0], [78.8, 682.0], [78.9, 684.0], [79.0, 689.0], [79.1, 691.0], [79.2, 692.0], [79.3, 697.0], [79.4, 699.0], [79.5, 700.0], [79.6, 701.0], [79.7, 703.0], [79.8, 705.0], [79.9, 709.0], [80.0, 712.0], [80.1, 719.0], [80.2, 722.0], [80.3, 725.0], [80.4, 727.0], [80.5, 729.0], [80.6, 733.0], [80.7, 736.0], [80.8, 739.0], [80.9, 742.0], [81.0, 743.0], [81.1, 747.0], [81.2, 749.0], [81.3, 753.0], [81.4, 755.0], [81.5, 760.0], [81.6, 766.0], [81.7, 768.0], [81.8, 770.0], [81.9, 773.0], [82.0, 777.0], [82.1, 779.0], [82.2, 782.0], [82.3, 784.0], [82.4, 788.0], [82.5, 791.0], [82.6, 793.0], [82.7, 796.0], [82.8, 798.0], [82.9, 803.0], [83.0, 805.0], [83.1, 808.0], [83.2, 811.0], [83.3, 815.0], [83.4, 818.0], [83.5, 819.0], [83.6, 823.0], [83.7, 825.0], [83.8, 831.0], [83.9, 836.0], [84.0, 841.0], [84.1, 847.0], [84.2, 848.0], [84.3, 855.0], [84.4, 857.0], [84.5, 859.0], [84.6, 863.0], [84.7, 866.0], [84.8, 871.0], [84.9, 874.0], [85.0, 876.0], [85.1, 878.0], [85.2, 881.0], [85.3, 882.0], [85.4, 883.0], [85.5, 888.0], [85.6, 890.0], [85.7, 892.0], [85.8, 895.0], [85.9, 898.0], [86.0, 899.0], [86.1, 901.0], [86.2, 903.0], [86.3, 904.0], [86.4, 906.0], [86.5, 907.0], [86.6, 911.0], [86.7, 914.0], [86.8, 915.0], [86.9, 918.0], [87.0, 924.0], [87.1, 924.0], [87.2, 926.0], [87.3, 929.0], [87.4, 930.0], [87.5, 933.0], [87.6, 937.0], [87.7, 938.0], [87.8, 941.0], [87.9, 947.0], [88.0, 948.0], [88.1, 951.0], [88.2, 954.0], [88.3, 957.0], [88.4, 960.0], [88.5, 962.0], [88.6, 966.0], [88.7, 971.0], [88.8, 974.0], [88.9, 978.0], [89.0, 982.0], [89.1, 988.0], [89.2, 994.0], [89.3, 1003.0], [89.4, 1012.0], [89.5, 1020.0], [89.6, 1027.0], [89.7, 1035.0], [89.8, 1043.0], [89.9, 1053.0], [90.0, 1061.0], [90.1, 1080.0], [90.2, 1087.0], [90.3, 1098.0], [90.4, 1108.0], [90.5, 1118.0], [90.6, 1126.0], [90.7, 1131.0], [90.8, 1142.0], [90.9, 1147.0], [91.0, 1150.0], [91.1, 1156.0], [91.2, 1164.0], [91.3, 1167.0], [91.4, 1171.0], [91.5, 1175.0], [91.6, 1178.0], [91.7, 1181.0], [91.8, 1187.0], [91.9, 1191.0], [92.0, 1196.0], [92.1, 1202.0], [92.2, 1209.0], [92.3, 1213.0], [92.4, 1215.0], [92.5, 1219.0], [92.6, 1223.0], [92.7, 1231.0], [92.8, 1236.0], [92.9, 1251.0], [93.0, 1259.0], [93.1, 1266.0], [93.2, 1281.0], [93.3, 1298.0], [93.4, 1306.0], [93.5, 1323.0], [93.6, 1336.0], [93.7, 1347.0], [93.8, 1378.0], [93.9, 1404.0], [94.0, 1413.0], [94.1, 1436.0], [94.2, 1465.0], [94.3, 1486.0], [94.4, 1524.0], [94.5, 1592.0], [94.6, 1608.0], [94.7, 1622.0], [94.8, 1677.0], [94.9, 1696.0], [95.0, 1715.0], [95.1, 1762.0], [95.2, 1837.0], [95.3, 1919.0], [95.4, 1949.0], [95.5, 1973.0], [95.6, 2024.0], [95.7, 2083.0], [95.8, 2156.0], [95.9, 2205.0], [96.0, 2263.0], [96.1, 2318.0], [96.2, 2406.0], [96.3, 2479.0], [96.4, 2539.0], [96.5, 2596.0], [96.6, 2617.0], [96.7, 2716.0], [96.8, 2839.0], [96.9, 2893.0], [97.0, 2955.0], [97.1, 2996.0], [97.2, 3059.0], [97.3, 3119.0], [97.4, 3235.0], [97.5, 3348.0], [97.6, 3407.0], [97.7, 3589.0], [97.8, 3657.0], [97.9, 3797.0], [98.0, 3884.0], [98.1, 3921.0], [98.2, 4098.0], [98.3, 4334.0], [98.4, 4792.0], [98.5, 5158.0], [98.6, 5319.0], [98.7, 6399.0], [98.8, 7449.0], [98.9, 7800.0], [99.0, 7960.0], [99.1, 8073.0], [99.2, 8196.0], [99.3, 8359.0], [99.4, 8759.0], [99.5, 10160.0], [99.6, 10313.0], [99.7, 10422.0], [99.8, 10628.0], [99.9, 10979.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 965.0, "series": [{"data": [[0.0, 965.0], [600.0, 418.0], [700.0, 176.0], [800.0, 167.0], [900.0, 168.0], [1000.0, 54.0], [1100.0, 90.0], [1200.0, 66.0], [1300.0, 29.0], [1400.0, 22.0], [1500.0, 12.0], [1600.0, 19.0], [1700.0, 13.0], [1800.0, 6.0], [1900.0, 14.0], [2000.0, 9.0], [2100.0, 9.0], [2200.0, 10.0], [2300.0, 4.0], [2400.0, 8.0], [2500.0, 11.0], [2600.0, 8.0], [2800.0, 9.0], [2700.0, 4.0], [2900.0, 9.0], [3000.0, 9.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 4.0], [3400.0, 6.0], [3500.0, 1.0], [3700.0, 5.0], [3600.0, 6.0], [3800.0, 7.0], [3900.0, 4.0], [4000.0, 4.0], [4300.0, 4.0], [4100.0, 2.0], [4200.0, 1.0], [4600.0, 2.0], [4700.0, 1.0], [4800.0, 2.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5200.0, 3.0], [5300.0, 3.0], [5500.0, 1.0], [5700.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6400.0, 2.0], [6800.0, 1.0], [7400.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7700.0, 2.0], [7900.0, 6.0], [7800.0, 4.0], [8000.0, 2.0], [8100.0, 5.0], [8700.0, 2.0], [8300.0, 5.0], [8200.0, 2.0], [8600.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10000.0, 1.0], [9900.0, 1.0], [10100.0, 2.0], [10200.0, 4.0], [10500.0, 3.0], [10600.0, 4.0], [10300.0, 5.0], [10400.0, 1.0], [10700.0, 2.0], [11200.0, 1.0], [10900.0, 1.0], [16400.0, 1.0], [20500.0, 1.0], [20800.0, 1.0], [20900.0, 1.0], [100.0, 768.0], [200.0, 508.0], [300.0, 750.0], [400.0, 380.0], [500.0, 334.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 294.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3373.0, "series": [{"data": [[0.0, 3373.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1523.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 294.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.927768860353128, "minX": 1.60280592E12, "maxY": 10.0, "series": [{"data": [[1.60280604E12, 10.0], [1.60280622E12, 9.927768860353128], [1.60280616E12, 10.0], [1.60280598E12, 10.0], [1.60280592E12, 9.997569866342662], [1.6028061E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280622E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 296.0, "minX": 1.0, "maxY": 8219.0, "series": [{"data": [[8.0, 664.5], [4.0, 795.0], [2.0, 8219.0], [1.0, 4667.0], [9.0, 296.0], [10.0, 616.5359073359082], [5.0, 607.0], [6.0, 721.0], [3.0, 710.0], [7.0, 517.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 618.789402697494]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4894.333333333333, "minX": 1.60280592E12, "maxY": 5033628.016666667, "series": [{"data": [[1.60280604E12, 4598265.15], [1.60280622E12, 2320509.7666666666], [1.60280616E12, 5033628.016666667], [1.60280598E12, 4889225.916666667], [1.60280592E12, 2922899.3333333335], [1.6028061E12, 3877828.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280604E12, 8368.333333333334], [1.60280622E12, 4894.333333333333], [1.60280616E12, 6300.833333333333], [1.60280598E12, 5486.283333333334], [1.60280592E12, 6225.583333333333], [1.6028061E12, 8666.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280622E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 521.6385017421602, "minX": 1.60280592E12, "maxY": 856.1276005547845, "series": [{"data": [[1.60280604E12, 562.2001879699245], [1.60280622E12, 578.4815409309789], [1.60280616E12, 679.9506781750921], [1.60280598E12, 856.1276005547845], [1.60280592E12, 589.7849331713244], [1.6028061E12, 521.6385017421602]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280622E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 520.475609756098, "minX": 1.60280592E12, "maxY": 853.4452149791953, "series": [{"data": [[1.60280604E12, 560.4671052631568], [1.60280622E12, 577.2568218298554], [1.60280616E12, 678.1171393341557], [1.60280598E12, 853.4452149791953], [1.60280592E12, 588.2235722964764], [1.6028061E12, 520.475609756098]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280622E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007839721254355406, "minX": 1.60280592E12, "maxY": 0.10206561360874845, "series": [{"data": [[1.60280604E12, 0.008458646616541365], [1.60280622E12, 0.011235955056179775], [1.60280616E12, 0.012330456226880398], [1.60280598E12, 0.018030513176144253], [1.60280592E12, 0.10206561360874845], [1.6028061E12, 0.007839721254355406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280622E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.60280592E12, "maxY": 20942.0, "series": [{"data": [[1.60280604E12, 20555.0], [1.60280622E12, 20942.0], [1.60280616E12, 10764.0], [1.60280598E12, 10373.0], [1.60280592E12, 16401.0], [1.6028061E12, 8127.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280604E12, 32.584999746084215], [1.60280622E12, 32.231999702453614], [1.60280616E12, 32.0], [1.60280598E12, 31.0], [1.60280592E12, 34.41599980354309], [1.6028061E12, 29.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280604E12, 33.0], [1.60280622E12, 33.0], [1.60280616E12, 32.0], [1.60280598E12, 31.147800068855286], [1.60280592E12, 35.0], [1.6028061E12, 29.37510010957718]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280604E12, 33.0], [1.60280622E12, 32.855999851226805], [1.60280616E12, 32.0], [1.60280598E12, 31.0], [1.60280592E12, 34.82799990177155], [1.6028061E12, 29.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280604E12, 24.0], [1.60280622E12, 25.0], [1.60280616E12, 23.0], [1.60280598E12, 22.0], [1.60280592E12, 30.0], [1.6028061E12, 19.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280604E12, 351.0], [1.60280622E12, 289.0], [1.60280616E12, 524.0], [1.60280598E12, 605.0], [1.60280592E12, 281.0], [1.6028061E12, 263.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280622E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 95.0, "minX": 1.0, "maxY": 4140.5, "series": [{"data": [[33.0, 211.0], [2.0, 2207.5], [32.0, 321.5], [35.0, 260.5], [34.0, 95.0], [37.0, 175.0], [36.0, 220.0], [38.0, 142.0], [41.0, 228.0], [40.0, 145.5], [43.0, 117.0], [44.0, 173.5], [46.0, 113.5], [3.0, 620.0], [49.0, 96.0], [48.0, 185.0], [62.0, 127.0], [4.0, 711.5], [5.0, 358.0], [6.0, 894.5], [7.0, 352.0], [8.0, 447.0], [9.0, 422.5], [10.0, 631.0], [11.0, 641.5], [12.0, 635.5], [13.0, 574.5], [14.0, 629.0], [15.0, 631.5], [1.0, 4140.5], [16.0, 393.0], [17.0, 493.0], [18.0, 392.0], [19.0, 418.5], [20.0, 365.5], [21.0, 361.0], [22.0, 323.5], [23.0, 383.5], [24.0, 305.0], [25.0, 310.0], [26.0, 354.5], [27.0, 237.0], [28.0, 125.5], [29.0, 250.0], [30.0, 247.5], [31.0, 219.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 95.0, "minX": 1.0, "maxY": 4137.5, "series": [{"data": [[33.0, 210.0], [2.0, 2207.5], [32.0, 321.0], [35.0, 259.5], [34.0, 95.0], [37.0, 172.5], [36.0, 219.5], [38.0, 141.5], [41.0, 227.0], [40.0, 145.0], [43.0, 117.0], [44.0, 173.0], [46.0, 113.0], [3.0, 617.0], [49.0, 96.0], [48.0, 184.5], [62.0, 125.5], [4.0, 710.0], [5.0, 355.0], [6.0, 892.5], [7.0, 349.0], [8.0, 446.0], [9.0, 421.0], [10.0, 626.5], [11.0, 637.0], [12.0, 632.0], [13.0, 571.0], [14.0, 623.0], [15.0, 626.5], [1.0, 4137.5], [16.0, 391.0], [17.0, 490.5], [18.0, 391.5], [19.0, 418.5], [20.0, 362.5], [21.0, 361.0], [22.0, 319.5], [23.0, 383.0], [24.0, 304.5], [25.0, 310.0], [26.0, 352.5], [27.0, 234.0], [28.0, 125.5], [29.0, 248.5], [30.0, 247.0], [31.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.216666666666667, "minX": 1.60280592E12, "maxY": 19.133333333333333, "series": [{"data": [[1.60280604E12, 17.733333333333334], [1.60280622E12, 10.216666666666667], [1.60280616E12, 13.516666666666667], [1.60280598E12, 12.016666666666667], [1.60280592E12, 13.883333333333333], [1.6028061E12, 19.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280622E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.383333333333333, "minX": 1.60280592E12, "maxY": 19.133333333333333, "series": [{"data": [[1.60280604E12, 17.733333333333334], [1.60280622E12, 10.383333333333333], [1.60280616E12, 13.516666666666667], [1.60280598E12, 12.016666666666667], [1.60280592E12, 13.716666666666667], [1.6028061E12, 19.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280622E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.383333333333333, "minX": 1.60280592E12, "maxY": 19.133333333333333, "series": [{"data": [[1.60280604E12, 17.733333333333334], [1.60280622E12, 10.383333333333333], [1.60280616E12, 13.516666666666667], [1.60280598E12, 12.016666666666667], [1.60280592E12, 13.716666666666667], [1.6028061E12, 19.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280622E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.383333333333333, "minX": 1.60280592E12, "maxY": 19.133333333333333, "series": [{"data": [[1.60280604E12, 17.733333333333334], [1.60280622E12, 10.383333333333333], [1.60280616E12, 13.516666666666667], [1.60280598E12, 12.016666666666667], [1.60280592E12, 13.716666666666667], [1.6028061E12, 19.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280622E12, "title": "Total Transactions Per Second"}},
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

