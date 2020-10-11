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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 3592.0, "series": [{"data": [[0.0, 31.0], [0.1, 34.0], [0.2, 36.0], [0.3, 36.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 39.0], [0.8, 40.0], [0.9, 40.0], [1.0, 40.0], [1.1, 40.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 42.0], [1.8, 42.0], [1.9, 42.0], [2.0, 43.0], [2.1, 43.0], [2.2, 43.0], [2.3, 43.0], [2.4, 44.0], [2.5, 44.0], [2.6, 45.0], [2.7, 45.0], [2.8, 45.0], [2.9, 46.0], [3.0, 46.0], [3.1, 47.0], [3.2, 47.0], [3.3, 48.0], [3.4, 49.0], [3.5, 50.0], [3.6, 51.0], [3.7, 51.0], [3.8, 53.0], [3.9, 54.0], [4.0, 55.0], [4.1, 57.0], [4.2, 59.0], [4.3, 60.0], [4.4, 61.0], [4.5, 62.0], [4.6, 62.0], [4.7, 64.0], [4.8, 65.0], [4.9, 65.0], [5.0, 66.0], [5.1, 66.0], [5.2, 66.0], [5.3, 67.0], [5.4, 67.0], [5.5, 68.0], [5.6, 68.0], [5.7, 68.0], [5.8, 69.0], [5.9, 69.0], [6.0, 69.0], [6.1, 69.0], [6.2, 70.0], [6.3, 70.0], [6.4, 70.0], [6.5, 70.0], [6.6, 70.0], [6.7, 71.0], [6.8, 71.0], [6.9, 71.0], [7.0, 71.0], [7.1, 71.0], [7.2, 71.0], [7.3, 71.0], [7.4, 72.0], [7.5, 72.0], [7.6, 72.0], [7.7, 72.0], [7.8, 72.0], [7.9, 72.0], [8.0, 72.0], [8.1, 73.0], [8.2, 73.0], [8.3, 73.0], [8.4, 73.0], [8.5, 73.0], [8.6, 73.0], [8.7, 73.0], [8.8, 73.0], [8.9, 74.0], [9.0, 74.0], [9.1, 74.0], [9.2, 74.0], [9.3, 74.0], [9.4, 74.0], [9.5, 74.0], [9.6, 74.0], [9.7, 74.0], [9.8, 74.0], [9.9, 74.0], [10.0, 74.0], [10.1, 74.0], [10.2, 75.0], [10.3, 75.0], [10.4, 75.0], [10.5, 75.0], [10.6, 75.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 75.0], [11.1, 76.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 76.0], [12.1, 76.0], [12.2, 76.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 77.0], [12.7, 77.0], [12.8, 77.0], [12.9, 77.0], [13.0, 77.0], [13.1, 77.0], [13.2, 77.0], [13.3, 77.0], [13.4, 77.0], [13.5, 78.0], [13.6, 78.0], [13.7, 78.0], [13.8, 78.0], [13.9, 78.0], [14.0, 78.0], [14.1, 78.0], [14.2, 78.0], [14.3, 78.0], [14.4, 78.0], [14.5, 79.0], [14.6, 79.0], [14.7, 79.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 79.0], [15.2, 79.0], [15.3, 79.0], [15.4, 79.0], [15.5, 79.0], [15.6, 79.0], [15.7, 79.0], [15.8, 79.0], [15.9, 79.0], [16.0, 80.0], [16.1, 80.0], [16.2, 80.0], [16.3, 80.0], [16.4, 80.0], [16.5, 80.0], [16.6, 80.0], [16.7, 80.0], [16.8, 80.0], [16.9, 80.0], [17.0, 80.0], [17.1, 80.0], [17.2, 80.0], [17.3, 81.0], [17.4, 81.0], [17.5, 81.0], [17.6, 81.0], [17.7, 81.0], [17.8, 81.0], [17.9, 81.0], [18.0, 81.0], [18.1, 81.0], [18.2, 81.0], [18.3, 81.0], [18.4, 81.0], [18.5, 81.0], [18.6, 82.0], [18.7, 82.0], [18.8, 82.0], [18.9, 82.0], [19.0, 82.0], [19.1, 82.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 83.0], [20.8, 83.0], [20.9, 83.0], [21.0, 84.0], [21.1, 84.0], [21.2, 84.0], [21.3, 84.0], [21.4, 84.0], [21.5, 84.0], [21.6, 84.0], [21.7, 84.0], [21.8, 84.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 85.0], [22.3, 85.0], [22.4, 85.0], [22.5, 85.0], [22.6, 85.0], [22.7, 86.0], [22.8, 86.0], [22.9, 86.0], [23.0, 86.0], [23.1, 86.0], [23.2, 86.0], [23.3, 86.0], [23.4, 86.0], [23.5, 87.0], [23.6, 87.0], [23.7, 87.0], [23.8, 87.0], [23.9, 87.0], [24.0, 87.0], [24.1, 87.0], [24.2, 87.0], [24.3, 87.0], [24.4, 88.0], [24.5, 88.0], [24.6, 88.0], [24.7, 88.0], [24.8, 88.0], [24.9, 88.0], [25.0, 88.0], [25.1, 88.0], [25.2, 89.0], [25.3, 89.0], [25.4, 89.0], [25.5, 89.0], [25.6, 89.0], [25.7, 89.0], [25.8, 90.0], [25.9, 90.0], [26.0, 90.0], [26.1, 90.0], [26.2, 90.0], [26.3, 90.0], [26.4, 91.0], [26.5, 91.0], [26.6, 91.0], [26.7, 91.0], [26.8, 91.0], [26.9, 91.0], [27.0, 92.0], [27.1, 92.0], [27.2, 92.0], [27.3, 92.0], [27.4, 92.0], [27.5, 92.0], [27.6, 92.0], [27.7, 93.0], [27.8, 93.0], [27.9, 93.0], [28.0, 93.0], [28.1, 93.0], [28.2, 93.0], [28.3, 94.0], [28.4, 94.0], [28.5, 94.0], [28.6, 95.0], [28.7, 95.0], [28.8, 95.0], [28.9, 95.0], [29.0, 96.0], [29.1, 96.0], [29.2, 96.0], [29.3, 96.0], [29.4, 97.0], [29.5, 97.0], [29.6, 97.0], [29.7, 97.0], [29.8, 98.0], [29.9, 98.0], [30.0, 98.0], [30.1, 98.0], [30.2, 99.0], [30.3, 99.0], [30.4, 99.0], [30.5, 100.0], [30.6, 100.0], [30.7, 100.0], [30.8, 101.0], [30.9, 102.0], [31.0, 102.0], [31.1, 103.0], [31.2, 103.0], [31.3, 104.0], [31.4, 105.0], [31.5, 105.0], [31.6, 106.0], [31.7, 106.0], [31.8, 107.0], [31.9, 107.0], [32.0, 108.0], [32.1, 109.0], [32.2, 109.0], [32.3, 109.0], [32.4, 110.0], [32.5, 110.0], [32.6, 111.0], [32.7, 111.0], [32.8, 112.0], [32.9, 112.0], [33.0, 113.0], [33.1, 113.0], [33.2, 114.0], [33.3, 114.0], [33.4, 115.0], [33.5, 115.0], [33.6, 116.0], [33.7, 116.0], [33.8, 117.0], [33.9, 117.0], [34.0, 118.0], [34.1, 118.0], [34.2, 118.0], [34.3, 118.0], [34.4, 119.0], [34.5, 119.0], [34.6, 119.0], [34.7, 120.0], [34.8, 120.0], [34.9, 121.0], [35.0, 122.0], [35.1, 123.0], [35.2, 124.0], [35.3, 124.0], [35.4, 124.0], [35.5, 125.0], [35.6, 126.0], [35.7, 127.0], [35.8, 127.0], [35.9, 128.0], [36.0, 129.0], [36.1, 129.0], [36.2, 130.0], [36.3, 131.0], [36.4, 132.0], [36.5, 132.0], [36.6, 133.0], [36.7, 134.0], [36.8, 135.0], [36.9, 136.0], [37.0, 137.0], [37.1, 138.0], [37.2, 139.0], [37.3, 139.0], [37.4, 140.0], [37.5, 141.0], [37.6, 141.0], [37.7, 142.0], [37.8, 143.0], [37.9, 143.0], [38.0, 144.0], [38.1, 145.0], [38.2, 146.0], [38.3, 146.0], [38.4, 146.0], [38.5, 147.0], [38.6, 147.0], [38.7, 148.0], [38.8, 149.0], [38.9, 149.0], [39.0, 150.0], [39.1, 150.0], [39.2, 151.0], [39.3, 152.0], [39.4, 152.0], [39.5, 153.0], [39.6, 153.0], [39.7, 154.0], [39.8, 154.0], [39.9, 155.0], [40.0, 155.0], [40.1, 156.0], [40.2, 156.0], [40.3, 156.0], [40.4, 157.0], [40.5, 157.0], [40.6, 157.0], [40.7, 158.0], [40.8, 159.0], [40.9, 160.0], [41.0, 161.0], [41.1, 162.0], [41.2, 162.0], [41.3, 163.0], [41.4, 163.0], [41.5, 164.0], [41.6, 165.0], [41.7, 166.0], [41.8, 166.0], [41.9, 167.0], [42.0, 168.0], [42.1, 169.0], [42.2, 169.0], [42.3, 170.0], [42.4, 170.0], [42.5, 171.0], [42.6, 171.0], [42.7, 172.0], [42.8, 173.0], [42.9, 173.0], [43.0, 174.0], [43.1, 174.0], [43.2, 175.0], [43.3, 175.0], [43.4, 177.0], [43.5, 178.0], [43.6, 178.0], [43.7, 179.0], [43.8, 180.0], [43.9, 181.0], [44.0, 182.0], [44.1, 183.0], [44.2, 183.0], [44.3, 184.0], [44.4, 185.0], [44.5, 186.0], [44.6, 187.0], [44.7, 189.0], [44.8, 189.0], [44.9, 190.0], [45.0, 191.0], [45.1, 192.0], [45.2, 193.0], [45.3, 194.0], [45.4, 195.0], [45.5, 196.0], [45.6, 197.0], [45.7, 198.0], [45.8, 199.0], [45.9, 200.0], [46.0, 202.0], [46.1, 204.0], [46.2, 205.0], [46.3, 209.0], [46.4, 210.0], [46.5, 211.0], [46.6, 213.0], [46.7, 215.0], [46.8, 216.0], [46.9, 217.0], [47.0, 218.0], [47.1, 219.0], [47.2, 221.0], [47.3, 222.0], [47.4, 224.0], [47.5, 225.0], [47.6, 225.0], [47.7, 227.0], [47.8, 229.0], [47.9, 229.0], [48.0, 231.0], [48.1, 233.0], [48.2, 235.0], [48.3, 235.0], [48.4, 236.0], [48.5, 238.0], [48.6, 239.0], [48.7, 240.0], [48.8, 242.0], [48.9, 243.0], [49.0, 244.0], [49.1, 246.0], [49.2, 247.0], [49.3, 248.0], [49.4, 249.0], [49.5, 250.0], [49.6, 251.0], [49.7, 252.0], [49.8, 253.0], [49.9, 254.0], [50.0, 256.0], [50.1, 257.0], [50.2, 259.0], [50.3, 260.0], [50.4, 262.0], [50.5, 263.0], [50.6, 264.0], [50.7, 265.0], [50.8, 266.0], [50.9, 266.0], [51.0, 267.0], [51.1, 268.0], [51.2, 270.0], [51.3, 271.0], [51.4, 273.0], [51.5, 273.0], [51.6, 275.0], [51.7, 277.0], [51.8, 278.0], [51.9, 279.0], [52.0, 281.0], [52.1, 283.0], [52.2, 283.0], [52.3, 285.0], [52.4, 286.0], [52.5, 287.0], [52.6, 288.0], [52.7, 289.0], [52.8, 289.0], [52.9, 292.0], [53.0, 293.0], [53.1, 294.0], [53.2, 295.0], [53.3, 297.0], [53.4, 299.0], [53.5, 299.0], [53.6, 301.0], [53.7, 302.0], [53.8, 302.0], [53.9, 304.0], [54.0, 304.0], [54.1, 305.0], [54.2, 306.0], [54.3, 307.0], [54.4, 308.0], [54.5, 310.0], [54.6, 312.0], [54.7, 313.0], [54.8, 313.0], [54.9, 316.0], [55.0, 317.0], [55.1, 318.0], [55.2, 319.0], [55.3, 320.0], [55.4, 321.0], [55.5, 322.0], [55.6, 323.0], [55.7, 324.0], [55.8, 325.0], [55.9, 329.0], [56.0, 331.0], [56.1, 334.0], [56.2, 336.0], [56.3, 337.0], [56.4, 338.0], [56.5, 340.0], [56.6, 341.0], [56.7, 343.0], [56.8, 346.0], [56.9, 347.0], [57.0, 350.0], [57.1, 351.0], [57.2, 352.0], [57.3, 354.0], [57.4, 355.0], [57.5, 356.0], [57.6, 357.0], [57.7, 359.0], [57.8, 360.0], [57.9, 361.0], [58.0, 361.0], [58.1, 363.0], [58.2, 365.0], [58.3, 367.0], [58.4, 370.0], [58.5, 371.0], [58.6, 373.0], [58.7, 374.0], [58.8, 376.0], [58.9, 378.0], [59.0, 381.0], [59.1, 383.0], [59.2, 385.0], [59.3, 387.0], [59.4, 389.0], [59.5, 390.0], [59.6, 392.0], [59.7, 393.0], [59.8, 394.0], [59.9, 395.0], [60.0, 397.0], [60.1, 398.0], [60.2, 399.0], [60.3, 399.0], [60.4, 401.0], [60.5, 403.0], [60.6, 404.0], [60.7, 405.0], [60.8, 407.0], [60.9, 408.0], [61.0, 409.0], [61.1, 410.0], [61.2, 412.0], [61.3, 413.0], [61.4, 414.0], [61.5, 416.0], [61.6, 417.0], [61.7, 419.0], [61.8, 420.0], [61.9, 422.0], [62.0, 424.0], [62.1, 425.0], [62.2, 426.0], [62.3, 427.0], [62.4, 429.0], [62.5, 430.0], [62.6, 432.0], [62.7, 433.0], [62.8, 433.0], [62.9, 434.0], [63.0, 435.0], [63.1, 437.0], [63.2, 438.0], [63.3, 441.0], [63.4, 443.0], [63.5, 444.0], [63.6, 444.0], [63.7, 445.0], [63.8, 447.0], [63.9, 448.0], [64.0, 451.0], [64.1, 453.0], [64.2, 454.0], [64.3, 455.0], [64.4, 456.0], [64.5, 458.0], [64.6, 459.0], [64.7, 460.0], [64.8, 461.0], [64.9, 464.0], [65.0, 465.0], [65.1, 466.0], [65.2, 469.0], [65.3, 471.0], [65.4, 472.0], [65.5, 473.0], [65.6, 474.0], [65.7, 476.0], [65.8, 478.0], [65.9, 480.0], [66.0, 481.0], [66.1, 483.0], [66.2, 485.0], [66.3, 486.0], [66.4, 488.0], [66.5, 491.0], [66.6, 492.0], [66.7, 493.0], [66.8, 495.0], [66.9, 495.0], [67.0, 496.0], [67.1, 498.0], [67.2, 499.0], [67.3, 500.0], [67.4, 501.0], [67.5, 502.0], [67.6, 505.0], [67.7, 506.0], [67.8, 510.0], [67.9, 512.0], [68.0, 513.0], [68.1, 514.0], [68.2, 517.0], [68.3, 519.0], [68.4, 522.0], [68.5, 524.0], [68.6, 526.0], [68.7, 527.0], [68.8, 528.0], [68.9, 529.0], [69.0, 530.0], [69.1, 531.0], [69.2, 532.0], [69.3, 532.0], [69.4, 534.0], [69.5, 536.0], [69.6, 537.0], [69.7, 538.0], [69.8, 540.0], [69.9, 541.0], [70.0, 544.0], [70.1, 545.0], [70.2, 545.0], [70.3, 548.0], [70.4, 550.0], [70.5, 552.0], [70.6, 556.0], [70.7, 558.0], [70.8, 560.0], [70.9, 561.0], [71.0, 563.0], [71.1, 565.0], [71.2, 566.0], [71.3, 567.0], [71.4, 571.0], [71.5, 573.0], [71.6, 574.0], [71.7, 576.0], [71.8, 578.0], [71.9, 580.0], [72.0, 581.0], [72.1, 582.0], [72.2, 584.0], [72.3, 586.0], [72.4, 587.0], [72.5, 588.0], [72.6, 591.0], [72.7, 592.0], [72.8, 593.0], [72.9, 595.0], [73.0, 598.0], [73.1, 601.0], [73.2, 602.0], [73.3, 605.0], [73.4, 605.0], [73.5, 609.0], [73.6, 610.0], [73.7, 612.0], [73.8, 614.0], [73.9, 616.0], [74.0, 619.0], [74.1, 620.0], [74.2, 621.0], [74.3, 625.0], [74.4, 626.0], [74.5, 629.0], [74.6, 631.0], [74.7, 632.0], [74.8, 633.0], [74.9, 636.0], [75.0, 638.0], [75.1, 640.0], [75.2, 642.0], [75.3, 644.0], [75.4, 646.0], [75.5, 648.0], [75.6, 650.0], [75.7, 651.0], [75.8, 655.0], [75.9, 656.0], [76.0, 659.0], [76.1, 661.0], [76.2, 663.0], [76.3, 665.0], [76.4, 668.0], [76.5, 670.0], [76.6, 671.0], [76.7, 672.0], [76.8, 674.0], [76.9, 676.0], [77.0, 677.0], [77.1, 678.0], [77.2, 679.0], [77.3, 681.0], [77.4, 683.0], [77.5, 685.0], [77.6, 688.0], [77.7, 689.0], [77.8, 689.0], [77.9, 694.0], [78.0, 695.0], [78.1, 696.0], [78.2, 698.0], [78.3, 702.0], [78.4, 705.0], [78.5, 706.0], [78.6, 707.0], [78.7, 708.0], [78.8, 711.0], [78.9, 713.0], [79.0, 716.0], [79.1, 718.0], [79.2, 723.0], [79.3, 727.0], [79.4, 730.0], [79.5, 731.0], [79.6, 733.0], [79.7, 736.0], [79.8, 738.0], [79.9, 740.0], [80.0, 741.0], [80.1, 743.0], [80.2, 745.0], [80.3, 749.0], [80.4, 754.0], [80.5, 755.0], [80.6, 758.0], [80.7, 759.0], [80.8, 760.0], [80.9, 763.0], [81.0, 764.0], [81.1, 768.0], [81.2, 770.0], [81.3, 773.0], [81.4, 774.0], [81.5, 775.0], [81.6, 778.0], [81.7, 782.0], [81.8, 783.0], [81.9, 786.0], [82.0, 787.0], [82.1, 790.0], [82.2, 791.0], [82.3, 792.0], [82.4, 793.0], [82.5, 795.0], [82.6, 797.0], [82.7, 798.0], [82.8, 800.0], [82.9, 802.0], [83.0, 806.0], [83.1, 807.0], [83.2, 810.0], [83.3, 811.0], [83.4, 812.0], [83.5, 814.0], [83.6, 816.0], [83.7, 819.0], [83.8, 821.0], [83.9, 824.0], [84.0, 827.0], [84.1, 830.0], [84.2, 831.0], [84.3, 835.0], [84.4, 839.0], [84.5, 840.0], [84.6, 842.0], [84.7, 844.0], [84.8, 848.0], [84.9, 850.0], [85.0, 853.0], [85.1, 856.0], [85.2, 860.0], [85.3, 863.0], [85.4, 863.0], [85.5, 867.0], [85.6, 869.0], [85.7, 872.0], [85.8, 876.0], [85.9, 880.0], [86.0, 882.0], [86.1, 885.0], [86.2, 886.0], [86.3, 890.0], [86.4, 892.0], [86.5, 894.0], [86.6, 897.0], [86.7, 899.0], [86.8, 900.0], [86.9, 903.0], [87.0, 906.0], [87.1, 909.0], [87.2, 912.0], [87.3, 916.0], [87.4, 919.0], [87.5, 925.0], [87.6, 931.0], [87.7, 934.0], [87.8, 936.0], [87.9, 938.0], [88.0, 939.0], [88.1, 943.0], [88.2, 946.0], [88.3, 949.0], [88.4, 953.0], [88.5, 954.0], [88.6, 958.0], [88.7, 958.0], [88.8, 964.0], [88.9, 965.0], [89.0, 972.0], [89.1, 976.0], [89.2, 978.0], [89.3, 981.0], [89.4, 988.0], [89.5, 995.0], [89.6, 997.0], [89.7, 1003.0], [89.8, 1007.0], [89.9, 1010.0], [90.0, 1015.0], [90.1, 1020.0], [90.2, 1023.0], [90.3, 1026.0], [90.4, 1031.0], [90.5, 1034.0], [90.6, 1039.0], [90.7, 1042.0], [90.8, 1047.0], [90.9, 1056.0], [91.0, 1064.0], [91.1, 1070.0], [91.2, 1073.0], [91.3, 1078.0], [91.4, 1087.0], [91.5, 1089.0], [91.6, 1094.0], [91.7, 1100.0], [91.8, 1105.0], [91.9, 1108.0], [92.0, 1116.0], [92.1, 1123.0], [92.2, 1127.0], [92.3, 1133.0], [92.4, 1143.0], [92.5, 1150.0], [92.6, 1152.0], [92.7, 1156.0], [92.8, 1163.0], [92.9, 1169.0], [93.0, 1174.0], [93.1, 1176.0], [93.2, 1181.0], [93.3, 1185.0], [93.4, 1189.0], [93.5, 1195.0], [93.6, 1202.0], [93.7, 1206.0], [93.8, 1212.0], [93.9, 1217.0], [94.0, 1223.0], [94.1, 1230.0], [94.2, 1242.0], [94.3, 1247.0], [94.4, 1252.0], [94.5, 1259.0], [94.6, 1266.0], [94.7, 1270.0], [94.8, 1278.0], [94.9, 1286.0], [95.0, 1296.0], [95.1, 1303.0], [95.2, 1309.0], [95.3, 1318.0], [95.4, 1322.0], [95.5, 1330.0], [95.6, 1341.0], [95.7, 1347.0], [95.8, 1363.0], [95.9, 1374.0], [96.0, 1390.0], [96.1, 1402.0], [96.2, 1410.0], [96.3, 1418.0], [96.4, 1428.0], [96.5, 1433.0], [96.6, 1453.0], [96.7, 1487.0], [96.8, 1500.0], [96.9, 1510.0], [97.0, 1529.0], [97.1, 1533.0], [97.2, 1551.0], [97.3, 1567.0], [97.4, 1604.0], [97.5, 1626.0], [97.6, 1641.0], [97.7, 1678.0], [97.8, 1691.0], [97.9, 1717.0], [98.0, 1740.0], [98.1, 1778.0], [98.2, 1817.0], [98.3, 1855.0], [98.4, 1875.0], [98.5, 1904.0], [98.6, 1964.0], [98.7, 2006.0], [98.8, 2023.0], [98.9, 2070.0], [99.0, 2103.0], [99.1, 2161.0], [99.2, 2215.0], [99.3, 2328.0], [99.4, 2399.0], [99.5, 2456.0], [99.6, 2502.0], [99.7, 2531.0], [99.8, 2628.0], [99.9, 2939.0], [100.0, 3592.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1603.0, "series": [{"data": [[0.0, 1603.0], [600.0, 274.0], [700.0, 238.0], [800.0, 208.0], [900.0, 152.0], [1000.0, 109.0], [1100.0, 99.0], [1200.0, 78.0], [1300.0, 54.0], [1400.0, 37.0], [1500.0, 32.0], [100.0, 807.0], [1600.0, 24.0], [1700.0, 16.0], [1800.0, 18.0], [1900.0, 9.0], [2000.0, 15.0], [2100.0, 11.0], [2300.0, 7.0], [2200.0, 6.0], [2400.0, 9.0], [2500.0, 10.0], [2600.0, 2.0], [2800.0, 3.0], [2900.0, 2.0], [3100.0, 1.0], [200.0, 406.0], [3400.0, 1.0], [3500.0, 3.0], [300.0, 357.0], [400.0, 367.0], [500.0, 304.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 168.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3544.0, "series": [{"data": [[0.0, 3544.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1550.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 168.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.526315789473685, "minX": 1.6023765E12, "maxY": 12.0, "series": [{"data": [[1.60237668E12, 12.0], [1.6023765E12, 11.772413793103441], [1.60237662E12, 12.0], [1.60237674E12, 8.526315789473685], [1.60237656E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 424.6515353805076, "minX": 1.0, "maxY": 3592.0, "series": [{"data": [[4.0, 1319.0], [8.0, 3451.0], [2.0, 3592.0], [1.0, 2803.0], [9.0, 1401.0], [5.0, 1321.0], [10.0, 1869.5], [11.0, 1143.0], [6.0, 1786.0], [12.0, 424.6515353805076], [3.0, 2939.0], [7.0, 1224.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.981185860889392, 429.5900798175595]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 162.45, "minX": 1.6023765E12, "maxY": 1602524.8833333333, "series": [{"data": [[1.60237668E12, 1602524.8833333333], [1.6023765E12, 52351.21666666667], [1.60237662E12, 1026881.4166666666], [1.60237674E12, 26726.666666666668], [1.60237656E12, 1542281.4666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237668E12, 13792.266666666666], [1.6023765E12, 1271.55], [1.60237662E12, 18702.283333333333], [1.60237674E12, 162.45], [1.60237656E12, 11562.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237674E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 328.9760809567612, "minX": 1.6023765E12, "maxY": 2659.684210526316, "series": [{"data": [[1.60237668E12, 452.1935483870964], [1.6023765E12, 431.60689655172405], [1.60237662E12, 328.9760809567612], [1.60237674E12, 2659.684210526316], [1.60237656E12, 534.0833953834696]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 328.6747930082798, "minX": 1.6023765E12, "maxY": 2658.9999999999995, "series": [{"data": [[1.60237668E12, 451.67109424414883], [1.6023765E12, 431.2413793103449], [1.60237662E12, 328.6747930082798], [1.60237674E12, 2658.9999999999995], [1.60237656E12, 533.4638868205508]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023765E12, "maxY": 0.76551724137931, "series": [{"data": [[1.60237668E12, 0.010120177103099311], [1.6023765E12, 0.76551724137931], [1.60237662E12, 0.01241950321987122], [1.60237674E12, 0.0], [1.60237656E12, 0.010424422933730472]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237674E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.6023765E12, "maxY": 3592.0, "series": [{"data": [[1.60237668E12, 2933.0], [1.6023765E12, 1678.0], [1.60237662E12, 2521.0], [1.60237674E12, 3592.0], [1.60237656E12, 3146.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237668E12, 38.0], [1.6023765E12, 46.65199937343598], [1.60237662E12, 42.0], [1.60237674E12, 1159.0], [1.60237656E12, 40.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237668E12, 38.66180015087128], [1.6023765E12, 49.01720025062561], [1.60237662E12, 42.0], [1.60237674E12, 1159.0], [1.60237656E12, 40.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237668E12, 38.028999811410905], [1.6023765E12, 47.965999686717986], [1.60237662E12, 42.0], [1.60237674E12, 1159.0], [1.60237656E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237668E12, 32.0], [1.6023765E12, 41.0], [1.60237662E12, 31.0], [1.60237674E12, 1159.0], [1.60237656E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237668E12, 309.0], [1.6023765E12, 266.0], [1.60237662E12, 167.0], [1.60237674E12, 2556.0], [1.60237656E12, 434.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 74.0, "minX": 1.0, "maxY": 3197.5, "series": [{"data": [[2.0, 3197.5], [4.0, 1289.5], [5.0, 2464.0], [6.0, 1873.0], [7.0, 1181.0], [8.0, 1466.5], [9.0, 1127.0], [10.0, 874.0], [11.0, 996.0], [12.0, 825.0], [13.0, 792.0], [14.0, 770.5], [15.0, 850.0], [16.0, 770.5], [17.0, 729.0], [18.0, 587.0], [19.0, 661.0], [20.0, 592.0], [21.0, 745.0], [22.0, 402.0], [23.0, 474.5], [24.0, 365.5], [25.0, 541.0], [26.0, 413.0], [27.0, 403.5], [28.0, 274.0], [29.0, 332.0], [30.0, 322.5], [31.0, 177.0], [32.0, 323.0], [33.0, 319.0], [34.0, 110.5], [36.0, 92.0], [39.0, 230.0], [38.0, 144.5], [40.0, 185.5], [41.0, 143.0], [42.0, 159.0], [45.0, 104.0], [44.0, 168.5], [46.0, 172.0], [49.0, 98.0], [48.0, 82.5], [51.0, 232.0], [50.0, 133.0], [52.0, 85.5], [57.0, 184.0], [56.0, 137.5], [58.0, 119.5], [60.0, 165.0], [66.0, 153.5], [67.0, 74.0], [64.0, 150.5], [75.0, 117.0], [74.0, 167.0], [77.0, 87.0], [79.0, 86.0], [84.0, 99.5], [1.0, 2594.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 74.0, "minX": 1.0, "maxY": 3197.0, "series": [{"data": [[2.0, 3197.0], [4.0, 1288.0], [5.0, 2463.0], [6.0, 1872.5], [7.0, 1178.0], [8.0, 1466.5], [9.0, 1126.0], [10.0, 874.0], [11.0, 994.0], [12.0, 824.5], [13.0, 792.0], [14.0, 767.5], [15.0, 849.0], [16.0, 770.0], [17.0, 726.0], [18.0, 585.5], [19.0, 661.0], [20.0, 589.5], [21.0, 745.0], [22.0, 402.0], [23.0, 472.5], [24.0, 365.5], [25.0, 540.0], [26.0, 413.0], [27.0, 403.5], [28.0, 273.5], [29.0, 331.0], [30.0, 322.5], [31.0, 177.0], [32.0, 322.0], [33.0, 319.0], [34.0, 110.0], [36.0, 92.0], [39.0, 230.0], [38.0, 144.5], [40.0, 184.5], [41.0, 143.0], [42.0, 159.0], [45.0, 102.0], [44.0, 168.5], [46.0, 172.0], [49.0, 98.0], [48.0, 82.5], [51.0, 229.0], [50.0, 133.0], [52.0, 85.5], [57.0, 184.0], [56.0, 137.5], [58.0, 119.5], [60.0, 164.5], [66.0, 153.0], [67.0, 74.0], [64.0, 150.5], [75.0, 117.0], [74.0, 167.0], [77.0, 86.0], [79.0, 85.0], [84.0, 99.5], [1.0, 2593.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6023765E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60237668E12, 26.35], [1.6023765E12, 2.6166666666666667], [1.60237662E12, 36.233333333333334], [1.60237674E12, 0.11666666666666667], [1.60237656E12, 22.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237674E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6023765E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60237668E12, 26.35], [1.6023765E12, 2.4166666666666665], [1.60237662E12, 36.233333333333334], [1.60237674E12, 0.31666666666666665], [1.60237656E12, 22.383333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237674E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6023765E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60237668E12, 26.35], [1.6023765E12, 2.4166666666666665], [1.60237662E12, 36.233333333333334], [1.60237674E12, 0.31666666666666665], [1.60237656E12, 22.383333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237674E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6023765E12, "maxY": 36.233333333333334, "series": [{"data": [[1.60237668E12, 26.35], [1.6023765E12, 2.4166666666666665], [1.60237662E12, 36.233333333333334], [1.60237674E12, 0.31666666666666665], [1.60237656E12, 22.383333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237674E12, "title": "Total Transactions Per Second"}},
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

