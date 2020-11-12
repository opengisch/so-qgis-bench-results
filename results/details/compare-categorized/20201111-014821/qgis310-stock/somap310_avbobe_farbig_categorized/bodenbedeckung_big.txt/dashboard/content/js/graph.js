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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 20228.0, "series": [{"data": [[0.0, 18.0], [0.1, 25.0], [0.2, 26.0], [0.3, 26.0], [0.4, 28.0], [0.5, 29.0], [0.6, 30.0], [0.7, 31.0], [0.8, 32.0], [0.9, 32.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 39.0], [2.8, 39.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 40.0], [3.3, 40.0], [3.4, 40.0], [3.5, 40.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 43.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 44.0], [4.7, 44.0], [4.8, 44.0], [4.9, 44.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 47.0], [5.6, 47.0], [5.7, 47.0], [5.8, 47.0], [5.9, 48.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 49.0], [6.5, 49.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 51.0], [7.3, 51.0], [7.4, 52.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 54.0], [7.9, 55.0], [8.0, 55.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 58.0], [8.8, 58.0], [8.9, 59.0], [9.0, 59.0], [9.1, 60.0], [9.2, 60.0], [9.3, 61.0], [9.4, 61.0], [9.5, 62.0], [9.6, 62.0], [9.7, 62.0], [9.8, 63.0], [9.9, 63.0], [10.0, 64.0], [10.1, 65.0], [10.2, 65.0], [10.3, 66.0], [10.4, 66.0], [10.5, 67.0], [10.6, 67.0], [10.7, 67.0], [10.8, 68.0], [10.9, 69.0], [11.0, 69.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 71.0], [11.6, 71.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 73.0], [12.1, 73.0], [12.2, 74.0], [12.3, 74.0], [12.4, 75.0], [12.5, 75.0], [12.6, 76.0], [12.7, 76.0], [12.8, 76.0], [12.9, 77.0], [13.0, 77.0], [13.1, 78.0], [13.2, 78.0], [13.3, 79.0], [13.4, 79.0], [13.5, 80.0], [13.6, 80.0], [13.7, 81.0], [13.8, 82.0], [13.9, 82.0], [14.0, 83.0], [14.1, 83.0], [14.2, 83.0], [14.3, 84.0], [14.4, 85.0], [14.5, 85.0], [14.6, 86.0], [14.7, 86.0], [14.8, 86.0], [14.9, 87.0], [15.0, 87.0], [15.1, 88.0], [15.2, 88.0], [15.3, 88.0], [15.4, 89.0], [15.5, 90.0], [15.6, 90.0], [15.7, 90.0], [15.8, 91.0], [15.9, 91.0], [16.0, 92.0], [16.1, 92.0], [16.2, 93.0], [16.3, 93.0], [16.4, 94.0], [16.5, 94.0], [16.6, 95.0], [16.7, 96.0], [16.8, 96.0], [16.9, 96.0], [17.0, 96.0], [17.1, 97.0], [17.2, 97.0], [17.3, 98.0], [17.4, 98.0], [17.5, 99.0], [17.6, 99.0], [17.7, 99.0], [17.8, 100.0], [17.9, 100.0], [18.0, 101.0], [18.1, 101.0], [18.2, 102.0], [18.3, 102.0], [18.4, 102.0], [18.5, 103.0], [18.6, 103.0], [18.7, 104.0], [18.8, 105.0], [18.9, 105.0], [19.0, 105.0], [19.1, 106.0], [19.2, 106.0], [19.3, 107.0], [19.4, 107.0], [19.5, 108.0], [19.6, 109.0], [19.7, 109.0], [19.8, 110.0], [19.9, 110.0], [20.0, 111.0], [20.1, 112.0], [20.2, 112.0], [20.3, 113.0], [20.4, 114.0], [20.5, 114.0], [20.6, 115.0], [20.7, 115.0], [20.8, 116.0], [20.9, 117.0], [21.0, 117.0], [21.1, 118.0], [21.2, 119.0], [21.3, 120.0], [21.4, 120.0], [21.5, 121.0], [21.6, 121.0], [21.7, 122.0], [21.8, 122.0], [21.9, 123.0], [22.0, 123.0], [22.1, 124.0], [22.2, 124.0], [22.3, 125.0], [22.4, 126.0], [22.5, 126.0], [22.6, 127.0], [22.7, 127.0], [22.8, 129.0], [22.9, 129.0], [23.0, 129.0], [23.1, 130.0], [23.2, 131.0], [23.3, 132.0], [23.4, 132.0], [23.5, 133.0], [23.6, 134.0], [23.7, 134.0], [23.8, 134.0], [23.9, 136.0], [24.0, 137.0], [24.1, 138.0], [24.2, 139.0], [24.3, 140.0], [24.4, 141.0], [24.5, 142.0], [24.6, 143.0], [24.7, 143.0], [24.8, 144.0], [24.9, 144.0], [25.0, 145.0], [25.1, 145.0], [25.2, 146.0], [25.3, 147.0], [25.4, 148.0], [25.5, 148.0], [25.6, 150.0], [25.7, 151.0], [25.8, 151.0], [25.9, 151.0], [26.0, 152.0], [26.1, 153.0], [26.2, 154.0], [26.3, 155.0], [26.4, 156.0], [26.5, 157.0], [26.6, 157.0], [26.7, 158.0], [26.8, 159.0], [26.9, 159.0], [27.0, 160.0], [27.1, 161.0], [27.2, 162.0], [27.3, 162.0], [27.4, 163.0], [27.5, 164.0], [27.6, 164.0], [27.7, 166.0], [27.8, 166.0], [27.9, 167.0], [28.0, 167.0], [28.1, 168.0], [28.2, 169.0], [28.3, 170.0], [28.4, 170.0], [28.5, 171.0], [28.6, 172.0], [28.7, 173.0], [28.8, 174.0], [28.9, 174.0], [29.0, 175.0], [29.1, 175.0], [29.2, 176.0], [29.3, 177.0], [29.4, 177.0], [29.5, 178.0], [29.6, 179.0], [29.7, 179.0], [29.8, 180.0], [29.9, 180.0], [30.0, 181.0], [30.1, 181.0], [30.2, 182.0], [30.3, 183.0], [30.4, 185.0], [30.5, 186.0], [30.6, 187.0], [30.7, 187.0], [30.8, 188.0], [30.9, 189.0], [31.0, 189.0], [31.1, 190.0], [31.2, 191.0], [31.3, 192.0], [31.4, 193.0], [31.5, 193.0], [31.6, 194.0], [31.7, 196.0], [31.8, 197.0], [31.9, 197.0], [32.0, 198.0], [32.1, 199.0], [32.2, 200.0], [32.3, 201.0], [32.4, 201.0], [32.5, 202.0], [32.6, 203.0], [32.7, 204.0], [32.8, 205.0], [32.9, 206.0], [33.0, 207.0], [33.1, 207.0], [33.2, 210.0], [33.3, 211.0], [33.4, 213.0], [33.5, 214.0], [33.6, 215.0], [33.7, 216.0], [33.8, 218.0], [33.9, 219.0], [34.0, 219.0], [34.1, 221.0], [34.2, 222.0], [34.3, 222.0], [34.4, 223.0], [34.5, 224.0], [34.6, 224.0], [34.7, 226.0], [34.8, 227.0], [34.9, 228.0], [35.0, 229.0], [35.1, 230.0], [35.2, 231.0], [35.3, 233.0], [35.4, 234.0], [35.5, 235.0], [35.6, 236.0], [35.7, 237.0], [35.8, 238.0], [35.9, 238.0], [36.0, 240.0], [36.1, 240.0], [36.2, 241.0], [36.3, 242.0], [36.4, 243.0], [36.5, 243.0], [36.6, 245.0], [36.7, 245.0], [36.8, 246.0], [36.9, 246.0], [37.0, 247.0], [37.1, 248.0], [37.2, 249.0], [37.3, 250.0], [37.4, 251.0], [37.5, 252.0], [37.6, 252.0], [37.7, 253.0], [37.8, 254.0], [37.9, 255.0], [38.0, 256.0], [38.1, 257.0], [38.2, 258.0], [38.3, 260.0], [38.4, 263.0], [38.5, 263.0], [38.6, 265.0], [38.7, 266.0], [38.8, 267.0], [38.9, 268.0], [39.0, 269.0], [39.1, 270.0], [39.2, 271.0], [39.3, 271.0], [39.4, 272.0], [39.5, 273.0], [39.6, 274.0], [39.7, 275.0], [39.8, 276.0], [39.9, 277.0], [40.0, 278.0], [40.1, 279.0], [40.2, 281.0], [40.3, 281.0], [40.4, 282.0], [40.5, 283.0], [40.6, 285.0], [40.7, 285.0], [40.8, 286.0], [40.9, 286.0], [41.0, 288.0], [41.1, 288.0], [41.2, 289.0], [41.3, 290.0], [41.4, 291.0], [41.5, 291.0], [41.6, 292.0], [41.7, 292.0], [41.8, 293.0], [41.9, 293.0], [42.0, 294.0], [42.1, 294.0], [42.2, 295.0], [42.3, 297.0], [42.4, 297.0], [42.5, 299.0], [42.6, 299.0], [42.7, 301.0], [42.8, 302.0], [42.9, 303.0], [43.0, 303.0], [43.1, 304.0], [43.2, 304.0], [43.3, 305.0], [43.4, 306.0], [43.5, 306.0], [43.6, 307.0], [43.7, 307.0], [43.8, 308.0], [43.9, 308.0], [44.0, 309.0], [44.1, 309.0], [44.2, 310.0], [44.3, 310.0], [44.4, 311.0], [44.5, 312.0], [44.6, 312.0], [44.7, 313.0], [44.8, 314.0], [44.9, 315.0], [45.0, 315.0], [45.1, 315.0], [45.2, 316.0], [45.3, 316.0], [45.4, 317.0], [45.5, 317.0], [45.6, 318.0], [45.7, 318.0], [45.8, 319.0], [45.9, 319.0], [46.0, 320.0], [46.1, 321.0], [46.2, 321.0], [46.3, 322.0], [46.4, 322.0], [46.5, 323.0], [46.6, 324.0], [46.7, 324.0], [46.8, 325.0], [46.9, 326.0], [47.0, 326.0], [47.1, 327.0], [47.2, 327.0], [47.3, 328.0], [47.4, 328.0], [47.5, 329.0], [47.6, 329.0], [47.7, 329.0], [47.8, 330.0], [47.9, 331.0], [48.0, 331.0], [48.1, 332.0], [48.2, 332.0], [48.3, 332.0], [48.4, 333.0], [48.5, 333.0], [48.6, 334.0], [48.7, 334.0], [48.8, 335.0], [48.9, 336.0], [49.0, 336.0], [49.1, 337.0], [49.2, 337.0], [49.3, 338.0], [49.4, 338.0], [49.5, 338.0], [49.6, 339.0], [49.7, 340.0], [49.8, 341.0], [49.9, 341.0], [50.0, 342.0], [50.1, 342.0], [50.2, 342.0], [50.3, 343.0], [50.4, 343.0], [50.5, 343.0], [50.6, 344.0], [50.7, 345.0], [50.8, 346.0], [50.9, 346.0], [51.0, 347.0], [51.1, 347.0], [51.2, 348.0], [51.3, 349.0], [51.4, 350.0], [51.5, 350.0], [51.6, 351.0], [51.7, 351.0], [51.8, 352.0], [51.9, 353.0], [52.0, 353.0], [52.1, 354.0], [52.2, 355.0], [52.3, 356.0], [52.4, 357.0], [52.5, 357.0], [52.6, 358.0], [52.7, 359.0], [52.8, 359.0], [52.9, 360.0], [53.0, 361.0], [53.1, 361.0], [53.2, 362.0], [53.3, 362.0], [53.4, 363.0], [53.5, 364.0], [53.6, 365.0], [53.7, 366.0], [53.8, 366.0], [53.9, 367.0], [54.0, 367.0], [54.1, 368.0], [54.2, 369.0], [54.3, 370.0], [54.4, 370.0], [54.5, 372.0], [54.6, 372.0], [54.7, 373.0], [54.8, 373.0], [54.9, 374.0], [55.0, 374.0], [55.1, 375.0], [55.2, 376.0], [55.3, 378.0], [55.4, 379.0], [55.5, 380.0], [55.6, 381.0], [55.7, 381.0], [55.8, 382.0], [55.9, 382.0], [56.0, 383.0], [56.1, 383.0], [56.2, 384.0], [56.3, 384.0], [56.4, 385.0], [56.5, 385.0], [56.6, 387.0], [56.7, 388.0], [56.8, 389.0], [56.9, 390.0], [57.0, 391.0], [57.1, 392.0], [57.2, 394.0], [57.3, 395.0], [57.4, 396.0], [57.5, 397.0], [57.6, 398.0], [57.7, 399.0], [57.8, 401.0], [57.9, 402.0], [58.0, 403.0], [58.1, 404.0], [58.2, 404.0], [58.3, 405.0], [58.4, 405.0], [58.5, 407.0], [58.6, 408.0], [58.7, 409.0], [58.8, 412.0], [58.9, 413.0], [59.0, 413.0], [59.1, 414.0], [59.2, 415.0], [59.3, 416.0], [59.4, 417.0], [59.5, 418.0], [59.6, 419.0], [59.7, 420.0], [59.8, 421.0], [59.9, 422.0], [60.0, 423.0], [60.1, 425.0], [60.2, 426.0], [60.3, 427.0], [60.4, 428.0], [60.5, 430.0], [60.6, 431.0], [60.7, 432.0], [60.8, 433.0], [60.9, 434.0], [61.0, 436.0], [61.1, 437.0], [61.2, 438.0], [61.3, 440.0], [61.4, 443.0], [61.5, 446.0], [61.6, 448.0], [61.7, 450.0], [61.8, 451.0], [61.9, 452.0], [62.0, 453.0], [62.1, 455.0], [62.2, 458.0], [62.3, 459.0], [62.4, 459.0], [62.5, 461.0], [62.6, 462.0], [62.7, 464.0], [62.8, 466.0], [62.9, 467.0], [63.0, 470.0], [63.1, 471.0], [63.2, 473.0], [63.3, 475.0], [63.4, 476.0], [63.5, 478.0], [63.6, 480.0], [63.7, 481.0], [63.8, 483.0], [63.9, 484.0], [64.0, 485.0], [64.1, 488.0], [64.2, 490.0], [64.3, 493.0], [64.4, 496.0], [64.5, 498.0], [64.6, 500.0], [64.7, 501.0], [64.8, 504.0], [64.9, 506.0], [65.0, 507.0], [65.1, 508.0], [65.2, 510.0], [65.3, 511.0], [65.4, 512.0], [65.5, 514.0], [65.6, 520.0], [65.7, 520.0], [65.8, 522.0], [65.9, 523.0], [66.0, 525.0], [66.1, 526.0], [66.2, 529.0], [66.3, 531.0], [66.4, 533.0], [66.5, 535.0], [66.6, 537.0], [66.7, 539.0], [66.8, 541.0], [66.9, 542.0], [67.0, 546.0], [67.1, 547.0], [67.2, 548.0], [67.3, 549.0], [67.4, 551.0], [67.5, 552.0], [67.6, 553.0], [67.7, 554.0], [67.8, 557.0], [67.9, 558.0], [68.0, 560.0], [68.1, 561.0], [68.2, 563.0], [68.3, 564.0], [68.4, 565.0], [68.5, 566.0], [68.6, 568.0], [68.7, 569.0], [68.8, 571.0], [68.9, 571.0], [69.0, 573.0], [69.1, 574.0], [69.2, 575.0], [69.3, 576.0], [69.4, 576.0], [69.5, 577.0], [69.6, 578.0], [69.7, 579.0], [69.8, 580.0], [69.9, 581.0], [70.0, 581.0], [70.1, 583.0], [70.2, 584.0], [70.3, 586.0], [70.4, 586.0], [70.5, 589.0], [70.6, 590.0], [70.7, 591.0], [70.8, 591.0], [70.9, 592.0], [71.0, 593.0], [71.1, 594.0], [71.2, 595.0], [71.3, 596.0], [71.4, 596.0], [71.5, 598.0], [71.6, 598.0], [71.7, 599.0], [71.8, 599.0], [71.9, 600.0], [72.0, 601.0], [72.1, 602.0], [72.2, 602.0], [72.3, 603.0], [72.4, 603.0], [72.5, 604.0], [72.6, 605.0], [72.7, 605.0], [72.8, 606.0], [72.9, 606.0], [73.0, 607.0], [73.1, 608.0], [73.2, 609.0], [73.3, 610.0], [73.4, 611.0], [73.5, 611.0], [73.6, 612.0], [73.7, 613.0], [73.8, 614.0], [73.9, 615.0], [74.0, 617.0], [74.1, 618.0], [74.2, 620.0], [74.3, 621.0], [74.4, 621.0], [74.5, 623.0], [74.6, 624.0], [74.7, 625.0], [74.8, 626.0], [74.9, 626.0], [75.0, 627.0], [75.1, 627.0], [75.2, 628.0], [75.3, 629.0], [75.4, 629.0], [75.5, 631.0], [75.6, 632.0], [75.7, 633.0], [75.8, 633.0], [75.9, 634.0], [76.0, 635.0], [76.1, 636.0], [76.2, 637.0], [76.3, 638.0], [76.4, 640.0], [76.5, 640.0], [76.6, 642.0], [76.7, 642.0], [76.8, 643.0], [76.9, 644.0], [77.0, 645.0], [77.1, 646.0], [77.2, 647.0], [77.3, 649.0], [77.4, 651.0], [77.5, 652.0], [77.6, 654.0], [77.7, 655.0], [77.8, 657.0], [77.9, 658.0], [78.0, 659.0], [78.1, 660.0], [78.2, 662.0], [78.3, 665.0], [78.4, 666.0], [78.5, 670.0], [78.6, 673.0], [78.7, 675.0], [78.8, 676.0], [78.9, 677.0], [79.0, 681.0], [79.1, 683.0], [79.2, 685.0], [79.3, 687.0], [79.4, 690.0], [79.5, 692.0], [79.6, 694.0], [79.7, 695.0], [79.8, 697.0], [79.9, 701.0], [80.0, 703.0], [80.1, 707.0], [80.2, 710.0], [80.3, 711.0], [80.4, 715.0], [80.5, 718.0], [80.6, 720.0], [80.7, 722.0], [80.8, 724.0], [80.9, 726.0], [81.0, 729.0], [81.1, 731.0], [81.2, 732.0], [81.3, 735.0], [81.4, 739.0], [81.5, 740.0], [81.6, 744.0], [81.7, 748.0], [81.8, 750.0], [81.9, 751.0], [82.0, 754.0], [82.1, 755.0], [82.2, 757.0], [82.3, 761.0], [82.4, 766.0], [82.5, 769.0], [82.6, 771.0], [82.7, 777.0], [82.8, 780.0], [82.9, 785.0], [83.0, 786.0], [83.1, 790.0], [83.2, 792.0], [83.3, 795.0], [83.4, 806.0], [83.5, 808.0], [83.6, 814.0], [83.7, 819.0], [83.8, 822.0], [83.9, 828.0], [84.0, 831.0], [84.1, 835.0], [84.2, 839.0], [84.3, 843.0], [84.4, 845.0], [84.5, 849.0], [84.6, 851.0], [84.7, 858.0], [84.8, 862.0], [84.9, 863.0], [85.0, 867.0], [85.1, 870.0], [85.2, 874.0], [85.3, 878.0], [85.4, 882.0], [85.5, 884.0], [85.6, 886.0], [85.7, 887.0], [85.8, 889.0], [85.9, 890.0], [86.0, 892.0], [86.1, 894.0], [86.2, 895.0], [86.3, 898.0], [86.4, 900.0], [86.5, 901.0], [86.6, 903.0], [86.7, 905.0], [86.8, 907.0], [86.9, 911.0], [87.0, 912.0], [87.1, 916.0], [87.2, 917.0], [87.3, 918.0], [87.4, 920.0], [87.5, 922.0], [87.6, 923.0], [87.7, 925.0], [87.8, 928.0], [87.9, 929.0], [88.0, 934.0], [88.1, 935.0], [88.2, 938.0], [88.3, 941.0], [88.4, 945.0], [88.5, 950.0], [88.6, 954.0], [88.7, 959.0], [88.8, 964.0], [88.9, 965.0], [89.0, 968.0], [89.1, 973.0], [89.2, 976.0], [89.3, 984.0], [89.4, 990.0], [89.5, 995.0], [89.6, 997.0], [89.7, 1005.0], [89.8, 1011.0], [89.9, 1026.0], [90.0, 1036.0], [90.1, 1041.0], [90.2, 1051.0], [90.3, 1059.0], [90.4, 1077.0], [90.5, 1089.0], [90.6, 1094.0], [90.7, 1098.0], [90.8, 1106.0], [90.9, 1112.0], [91.0, 1116.0], [91.1, 1121.0], [91.2, 1128.0], [91.3, 1138.0], [91.4, 1146.0], [91.5, 1150.0], [91.6, 1155.0], [91.7, 1158.0], [91.8, 1161.0], [91.9, 1167.0], [92.0, 1170.0], [92.1, 1173.0], [92.2, 1179.0], [92.3, 1181.0], [92.4, 1185.0], [92.5, 1188.0], [92.6, 1190.0], [92.7, 1193.0], [92.8, 1198.0], [92.9, 1203.0], [93.0, 1208.0], [93.1, 1220.0], [93.2, 1225.0], [93.3, 1232.0], [93.4, 1239.0], [93.5, 1248.0], [93.6, 1257.0], [93.7, 1276.0], [93.8, 1297.0], [93.9, 1324.0], [94.0, 1342.0], [94.1, 1351.0], [94.2, 1392.0], [94.3, 1411.0], [94.4, 1434.0], [94.5, 1447.0], [94.6, 1489.0], [94.7, 1542.0], [94.8, 1579.0], [94.9, 1621.0], [95.0, 1636.0], [95.1, 1690.0], [95.2, 1788.0], [95.3, 1854.0], [95.4, 1907.0], [95.5, 1932.0], [95.6, 1982.0], [95.7, 2050.0], [95.8, 2127.0], [95.9, 2167.0], [96.0, 2230.0], [96.1, 2299.0], [96.2, 2385.0], [96.3, 2464.0], [96.4, 2517.0], [96.5, 2566.0], [96.6, 2665.0], [96.7, 2722.0], [96.8, 2789.0], [96.9, 2850.0], [97.0, 2897.0], [97.1, 3013.0], [97.2, 3052.0], [97.3, 3127.0], [97.4, 3321.0], [97.5, 3418.0], [97.6, 3576.0], [97.7, 3750.0], [97.8, 3832.0], [97.9, 3874.0], [98.0, 3959.0], [98.1, 3977.0], [98.2, 4362.0], [98.3, 4517.0], [98.4, 4833.0], [98.5, 5227.0], [98.6, 5520.0], [98.7, 5983.0], [98.8, 7240.0], [98.9, 7625.0], [99.0, 7739.0], [99.1, 7881.0], [99.2, 8001.0], [99.3, 8156.0], [99.4, 8648.0], [99.5, 9843.0], [99.6, 10208.0], [99.7, 10318.0], [99.8, 10548.0], [99.9, 10839.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 919.0, "series": [{"data": [[0.0, 919.0], [600.0, 417.0], [700.0, 181.0], [800.0, 156.0], [900.0, 172.0], [1000.0, 55.0], [1100.0, 109.0], [1200.0, 51.0], [1300.0, 21.0], [1400.0, 21.0], [1500.0, 13.0], [1600.0, 12.0], [1700.0, 7.0], [1800.0, 7.0], [1900.0, 14.0], [2000.0, 6.0], [2100.0, 9.0], [2200.0, 9.0], [2300.0, 5.0], [2400.0, 7.0], [2500.0, 11.0], [2600.0, 5.0], [2800.0, 10.0], [2700.0, 10.0], [2900.0, 2.0], [3000.0, 10.0], [3100.0, 4.0], [3300.0, 5.0], [3200.0, 2.0], [3400.0, 4.0], [3500.0, 5.0], [3700.0, 4.0], [3600.0, 1.0], [3800.0, 9.0], [3900.0, 10.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 2.0], [4400.0, 4.0], [4600.0, 2.0], [4500.0, 2.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [4900.0, 1.0], [5100.0, 2.0], [5200.0, 2.0], [5300.0, 2.0], [5500.0, 3.0], [5400.0, 1.0], [5800.0, 1.0], [5900.0, 2.0], [6500.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [7600.0, 6.0], [7500.0, 2.0], [7800.0, 6.0], [7900.0, 3.0], [7700.0, 3.0], [8100.0, 3.0], [8000.0, 4.0], [8200.0, 2.0], [8300.0, 1.0], [8700.0, 1.0], [8600.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [9200.0, 1.0], [9700.0, 1.0], [9900.0, 1.0], [9800.0, 1.0], [10100.0, 3.0], [10200.0, 4.0], [10500.0, 6.0], [10300.0, 4.0], [10700.0, 1.0], [10800.0, 2.0], [15200.0, 1.0], [18000.0, 1.0], [20100.0, 1.0], [20200.0, 1.0], [100.0, 751.0], [200.0, 542.0], [300.0, 785.0], [400.0, 354.0], [500.0, 377.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 279.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3353.0, "series": [{"data": [[0.0, 3353.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1558.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 279.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.67741935483871, "minX": 1.60505952E12, "maxY": 10.0, "series": [{"data": [[1.60505958E12, 10.0], [1.60505988E12, 9.90566037735849], [1.6050597E12, 10.0], [1.60505952E12, 9.67741935483871], [1.60505982E12, 10.0], [1.60505964E12, 10.0], [1.60505976E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505988E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 360.66666666666663, "minX": 1.0, "maxY": 8013.0, "series": [{"data": [[8.0, 454.5], [4.0, 1041.0], [2.0, 8013.0], [1.0, 7940.0], [9.0, 360.66666666666663], [10.0, 611.9292890262735], [5.0, 711.0], [6.0, 597.0], [3.0, 838.0], [7.0, 632.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989402697495155, 614.7154142581893]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 243.53333333333333, "minX": 1.60505952E12, "maxY": 5717791.316666666, "series": [{"data": [[1.60505958E12, 2878797.25], [1.60505988E12, 1723734.7666666666], [1.6050597E12, 4818389.1], [1.60505952E12, 203721.48333333334], [1.60505982E12, 4068605.0833333335], [1.60505964E12, 5717791.316666666], [1.60505976E12, 4231404.583333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60505958E12, 6260.466666666666], [1.60505988E12, 3746.5833333333335], [1.6050597E12, 9186.783333333333], [1.60505952E12, 243.53333333333333], [1.60505982E12, 6411.4], [1.60505964E12, 6741.466666666666], [1.60505976E12, 7351.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505988E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 418.258064516129, "minX": 1.60505952E12, "maxY": 706.6002444987773, "series": [{"data": [[1.60505958E12, 698.5084541062807], [1.60505988E12, 430.96016771488496], [1.6050597E12, 502.0946745562129], [1.60505952E12, 418.258064516129], [1.60505982E12, 706.6002444987773], [1.60505964E12, 704.2193181818192], [1.60505976E12, 618.4830421377175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505988E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 415.2903225806452, "minX": 1.60505952E12, "maxY": 705.2139364303176, "series": [{"data": [[1.60505958E12, 696.8816425120772], [1.60505988E12, 429.771488469602], [1.6050597E12, 500.67202028740473], [1.60505952E12, 415.2903225806452], [1.60505982E12, 705.2139364303176], [1.60505964E12, 701.7318181818179], [1.60505976E12, 617.079136690647]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505988E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006038647342995172, "minX": 1.60505952E12, "maxY": 2.741935483870968, "series": [{"data": [[1.60505958E12, 0.006038647342995172], [1.60505988E12, 0.01257861635220124], [1.6050597E12, 0.009298393913778534], [1.60505952E12, 2.741935483870968], [1.60505982E12, 0.01589242053789731], [1.60505964E12, 0.01590909090909093], [1.60505976E12, 0.009249743062692706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505988E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.60505952E12, "maxY": 20228.0, "series": [{"data": [[1.60505958E12, 18062.0], [1.60505988E12, 15275.0], [1.6050597E12, 20177.0], [1.60505952E12, 1011.0], [1.60505982E12, 20228.0], [1.60505964E12, 10553.0], [1.60505976E12, 7858.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60505958E12, 33.0], [1.60505988E12, 25.30199988603592], [1.6050597E12, 33.655999717712405], [1.60505952E12, 45.0], [1.60505982E12, 33.0], [1.60505964E12, 30.92899978995323], [1.60505976E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60505958E12, 33.0], [1.60505988E12, 25.732200045585632], [1.6050597E12, 34.0], [1.60505952E12, 45.0], [1.60505982E12, 33.0], [1.60505964E12, 31.0], [1.60505976E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60505958E12, 33.0], [1.60505988E12, 25.540999943017958], [1.6050597E12, 34.0], [1.60505952E12, 45.0], [1.60505982E12, 33.0], [1.60505964E12, 31.0], [1.60505976E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60505958E12, 25.0], [1.60505988E12, 18.0], [1.6050597E12, 20.0], [1.60505952E12, 45.0], [1.60505982E12, 21.0], [1.60505964E12, 23.0], [1.60505976E12, 25.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60505958E12, 287.0], [1.60505988E12, 224.0], [1.6050597E12, 315.0], [1.60505952E12, 439.0], [1.60505982E12, 422.5], [1.60505964E12, 580.5], [1.60505976E12, 328.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505988E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 60.5, "minX": 1.0, "maxY": 2952.5, "series": [{"data": [[2.0, 2952.5], [33.0, 278.0], [34.0, 245.0], [35.0, 184.0], [36.0, 280.5], [37.0, 187.5], [38.0, 293.0], [39.0, 120.5], [41.0, 237.0], [40.0, 166.0], [42.0, 107.0], [47.0, 114.0], [3.0, 748.0], [56.0, 109.0], [62.0, 99.0], [4.0, 497.0], [5.0, 589.0], [6.0, 325.0], [7.0, 700.5], [8.0, 60.5], [9.0, 618.0], [10.0, 597.0], [11.0, 640.0], [12.0, 613.5], [13.0, 600.0], [14.0, 515.5], [15.0, 599.0], [16.0, 522.5], [1.0, 838.0], [17.0, 484.5], [18.0, 385.0], [19.0, 509.5], [20.0, 378.5], [21.0, 343.0], [22.0, 401.0], [23.0, 360.0], [24.0, 342.0], [25.0, 316.0], [26.0, 356.5], [27.0, 331.5], [28.0, 254.0], [29.0, 323.0], [30.0, 177.5], [31.0, 193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 2952.0, "series": [{"data": [[2.0, 2952.0], [33.0, 277.5], [34.0, 243.5], [35.0, 183.5], [36.0, 280.0], [37.0, 186.5], [38.0, 292.0], [39.0, 120.0], [41.0, 236.0], [40.0, 166.0], [42.0, 106.0], [47.0, 113.0], [3.0, 747.5], [56.0, 109.0], [62.0, 99.0], [4.0, 496.0], [5.0, 587.0], [6.0, 323.5], [7.0, 700.0], [8.0, 60.0], [9.0, 614.0], [10.0, 596.0], [11.0, 640.0], [12.0, 609.0], [13.0, 596.0], [14.0, 512.0], [15.0, 592.5], [16.0, 521.0], [1.0, 835.0], [17.0, 484.0], [18.0, 383.0], [19.0, 506.0], [20.0, 378.5], [21.0, 342.0], [22.0, 400.0], [23.0, 360.0], [24.0, 340.5], [25.0, 313.5], [26.0, 356.0], [27.0, 329.0], [28.0, 250.5], [29.0, 323.0], [30.0, 177.0], [31.0, 193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.60505952E12, "maxY": 19.733333333333334, "series": [{"data": [[1.60505958E12, 13.8], [1.60505988E12, 7.783333333333333], [1.6050597E12, 19.733333333333334], [1.60505952E12, 0.6833333333333333], [1.60505982E12, 13.633333333333333], [1.60505964E12, 14.65], [1.60505976E12, 16.216666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505988E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60505952E12, "maxY": 19.716666666666665, "series": [{"data": [[1.60505958E12, 13.8], [1.60505988E12, 7.95], [1.6050597E12, 19.716666666666665], [1.60505952E12, 0.5166666666666667], [1.60505982E12, 13.633333333333333], [1.60505964E12, 14.666666666666666], [1.60505976E12, 16.216666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505988E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60505952E12, "maxY": 19.716666666666665, "series": [{"data": [[1.60505958E12, 13.8], [1.60505988E12, 7.95], [1.6050597E12, 19.716666666666665], [1.60505952E12, 0.5166666666666667], [1.60505982E12, 13.633333333333333], [1.60505964E12, 14.666666666666666], [1.60505976E12, 16.216666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505988E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60505952E12, "maxY": 19.716666666666665, "series": [{"data": [[1.60505958E12, 13.8], [1.60505988E12, 7.95], [1.6050597E12, 19.716666666666665], [1.60505952E12, 0.5166666666666667], [1.60505982E12, 13.633333333333333], [1.60505964E12, 14.666666666666666], [1.60505976E12, 16.216666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505988E12, "title": "Total Transactions Per Second"}},
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

