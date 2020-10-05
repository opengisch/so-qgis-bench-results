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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 90479.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 12.0], [10.5, 12.0], [10.6, 12.0], [10.7, 12.0], [10.8, 12.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 13.0], [12.4, 13.0], [12.5, 13.0], [12.6, 13.0], [12.7, 13.0], [12.8, 13.0], [12.9, 13.0], [13.0, 13.0], [13.1, 13.0], [13.2, 13.0], [13.3, 13.0], [13.4, 13.0], [13.5, 13.0], [13.6, 13.0], [13.7, 13.0], [13.8, 13.0], [13.9, 13.0], [14.0, 13.0], [14.1, 13.0], [14.2, 13.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 14.0], [15.3, 14.0], [15.4, 14.0], [15.5, 14.0], [15.6, 14.0], [15.7, 14.0], [15.8, 14.0], [15.9, 14.0], [16.0, 14.0], [16.1, 14.0], [16.2, 14.0], [16.3, 14.0], [16.4, 14.0], [16.5, 14.0], [16.6, 14.0], [16.7, 14.0], [16.8, 15.0], [16.9, 15.0], [17.0, 15.0], [17.1, 15.0], [17.2, 15.0], [17.3, 15.0], [17.4, 15.0], [17.5, 15.0], [17.6, 15.0], [17.7, 15.0], [17.8, 15.0], [17.9, 15.0], [18.0, 15.0], [18.1, 15.0], [18.2, 15.0], [18.3, 15.0], [18.4, 15.0], [18.5, 15.0], [18.6, 15.0], [18.7, 15.0], [18.8, 15.0], [18.9, 15.0], [19.0, 16.0], [19.1, 16.0], [19.2, 16.0], [19.3, 16.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 16.0], [19.8, 16.0], [19.9, 16.0], [20.0, 16.0], [20.1, 16.0], [20.2, 16.0], [20.3, 16.0], [20.4, 16.0], [20.5, 16.0], [20.6, 16.0], [20.7, 16.0], [20.8, 16.0], [20.9, 16.0], [21.0, 16.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 17.0], [22.0, 17.0], [22.1, 17.0], [22.2, 17.0], [22.3, 17.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 21.0], [27.8, 21.0], [27.9, 21.0], [28.0, 21.0], [28.1, 21.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 22.0], [28.8, 22.0], [28.9, 22.0], [29.0, 22.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 23.0], [29.6, 23.0], [29.7, 23.0], [29.8, 23.0], [29.9, 23.0], [30.0, 24.0], [30.1, 24.0], [30.2, 24.0], [30.3, 24.0], [30.4, 24.0], [30.5, 24.0], [30.6, 24.0], [30.7, 25.0], [30.8, 25.0], [30.9, 25.0], [31.0, 25.0], [31.1, 25.0], [31.2, 25.0], [31.3, 25.0], [31.4, 25.0], [31.5, 26.0], [31.6, 26.0], [31.7, 26.0], [31.8, 26.0], [31.9, 26.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 28.0], [32.6, 28.0], [32.7, 28.0], [32.8, 28.0], [32.9, 28.0], [33.0, 29.0], [33.1, 29.0], [33.2, 29.0], [33.3, 30.0], [33.4, 30.0], [33.5, 30.0], [33.6, 30.0], [33.7, 31.0], [33.8, 31.0], [33.9, 31.0], [34.0, 32.0], [34.1, 33.0], [34.2, 33.0], [34.3, 33.0], [34.4, 33.0], [34.5, 34.0], [34.6, 34.0], [34.7, 35.0], [34.8, 36.0], [34.9, 36.0], [35.0, 36.0], [35.1, 37.0], [35.2, 37.0], [35.3, 37.0], [35.4, 38.0], [35.5, 38.0], [35.6, 38.0], [35.7, 39.0], [35.8, 39.0], [35.9, 40.0], [36.0, 40.0], [36.1, 41.0], [36.2, 41.0], [36.3, 42.0], [36.4, 42.0], [36.5, 44.0], [36.6, 44.0], [36.7, 44.0], [36.8, 45.0], [36.9, 46.0], [37.0, 46.0], [37.1, 47.0], [37.2, 48.0], [37.3, 48.0], [37.4, 49.0], [37.5, 50.0], [37.6, 51.0], [37.7, 51.0], [37.8, 52.0], [37.9, 53.0], [38.0, 53.0], [38.1, 54.0], [38.2, 55.0], [38.3, 56.0], [38.4, 57.0], [38.5, 57.0], [38.6, 58.0], [38.7, 58.0], [38.8, 59.0], [38.9, 60.0], [39.0, 60.0], [39.1, 61.0], [39.2, 62.0], [39.3, 63.0], [39.4, 63.0], [39.5, 64.0], [39.6, 65.0], [39.7, 65.0], [39.8, 66.0], [39.9, 67.0], [40.0, 67.0], [40.1, 68.0], [40.2, 68.0], [40.3, 69.0], [40.4, 70.0], [40.5, 72.0], [40.6, 73.0], [40.7, 73.0], [40.8, 74.0], [40.9, 74.0], [41.0, 75.0], [41.1, 76.0], [41.2, 76.0], [41.3, 77.0], [41.4, 78.0], [41.5, 79.0], [41.6, 80.0], [41.7, 80.0], [41.8, 81.0], [41.9, 82.0], [42.0, 83.0], [42.1, 83.0], [42.2, 84.0], [42.3, 85.0], [42.4, 87.0], [42.5, 88.0], [42.6, 89.0], [42.7, 90.0], [42.8, 91.0], [42.9, 92.0], [43.0, 93.0], [43.1, 95.0], [43.2, 96.0], [43.3, 98.0], [43.4, 99.0], [43.5, 101.0], [43.6, 103.0], [43.7, 104.0], [43.8, 105.0], [43.9, 106.0], [44.0, 109.0], [44.1, 110.0], [44.2, 111.0], [44.3, 113.0], [44.4, 115.0], [44.5, 116.0], [44.6, 117.0], [44.7, 118.0], [44.8, 120.0], [44.9, 121.0], [45.0, 122.0], [45.1, 124.0], [45.2, 125.0], [45.3, 127.0], [45.4, 128.0], [45.5, 129.0], [45.6, 131.0], [45.7, 132.0], [45.8, 133.0], [45.9, 133.0], [46.0, 135.0], [46.1, 135.0], [46.2, 136.0], [46.3, 137.0], [46.4, 138.0], [46.5, 139.0], [46.6, 140.0], [46.7, 141.0], [46.8, 142.0], [46.9, 144.0], [47.0, 145.0], [47.1, 146.0], [47.2, 147.0], [47.3, 148.0], [47.4, 149.0], [47.5, 150.0], [47.6, 150.0], [47.7, 151.0], [47.8, 152.0], [47.9, 154.0], [48.0, 155.0], [48.1, 156.0], [48.2, 157.0], [48.3, 158.0], [48.4, 160.0], [48.5, 161.0], [48.6, 163.0], [48.7, 164.0], [48.8, 165.0], [48.9, 166.0], [49.0, 168.0], [49.1, 169.0], [49.2, 171.0], [49.3, 172.0], [49.4, 174.0], [49.5, 176.0], [49.6, 177.0], [49.7, 178.0], [49.8, 180.0], [49.9, 181.0], [50.0, 183.0], [50.1, 185.0], [50.2, 186.0], [50.3, 187.0], [50.4, 188.0], [50.5, 190.0], [50.6, 191.0], [50.7, 192.0], [50.8, 193.0], [50.9, 195.0], [51.0, 196.0], [51.1, 197.0], [51.2, 199.0], [51.3, 200.0], [51.4, 201.0], [51.5, 203.0], [51.6, 205.0], [51.7, 206.0], [51.8, 207.0], [51.9, 209.0], [52.0, 209.0], [52.1, 212.0], [52.2, 213.0], [52.3, 214.0], [52.4, 216.0], [52.5, 217.0], [52.6, 219.0], [52.7, 220.0], [52.8, 222.0], [52.9, 222.0], [53.0, 223.0], [53.1, 225.0], [53.2, 227.0], [53.3, 229.0], [53.4, 231.0], [53.5, 232.0], [53.6, 234.0], [53.7, 235.0], [53.8, 236.0], [53.9, 238.0], [54.0, 239.0], [54.1, 241.0], [54.2, 243.0], [54.3, 245.0], [54.4, 247.0], [54.5, 248.0], [54.6, 250.0], [54.7, 251.0], [54.8, 252.0], [54.9, 253.0], [55.0, 255.0], [55.1, 257.0], [55.2, 258.0], [55.3, 259.0], [55.4, 260.0], [55.5, 262.0], [55.6, 263.0], [55.7, 263.0], [55.8, 265.0], [55.9, 266.0], [56.0, 268.0], [56.1, 269.0], [56.2, 270.0], [56.3, 271.0], [56.4, 272.0], [56.5, 274.0], [56.6, 275.0], [56.7, 276.0], [56.8, 278.0], [56.9, 279.0], [57.0, 280.0], [57.1, 282.0], [57.2, 283.0], [57.3, 284.0], [57.4, 286.0], [57.5, 288.0], [57.6, 289.0], [57.7, 291.0], [57.8, 292.0], [57.9, 292.0], [58.0, 293.0], [58.1, 294.0], [58.2, 295.0], [58.3, 297.0], [58.4, 298.0], [58.5, 299.0], [58.6, 301.0], [58.7, 302.0], [58.8, 304.0], [58.9, 306.0], [59.0, 308.0], [59.1, 309.0], [59.2, 311.0], [59.3, 312.0], [59.4, 312.0], [59.5, 313.0], [59.6, 314.0], [59.7, 316.0], [59.8, 316.0], [59.9, 318.0], [60.0, 320.0], [60.1, 321.0], [60.2, 323.0], [60.3, 324.0], [60.4, 326.0], [60.5, 327.0], [60.6, 328.0], [60.7, 330.0], [60.8, 331.0], [60.9, 332.0], [61.0, 334.0], [61.1, 335.0], [61.2, 337.0], [61.3, 338.0], [61.4, 339.0], [61.5, 341.0], [61.6, 342.0], [61.7, 344.0], [61.8, 346.0], [61.9, 347.0], [62.0, 349.0], [62.1, 351.0], [62.2, 353.0], [62.3, 355.0], [62.4, 356.0], [62.5, 358.0], [62.6, 359.0], [62.7, 361.0], [62.8, 362.0], [62.9, 364.0], [63.0, 366.0], [63.1, 368.0], [63.2, 369.0], [63.3, 370.0], [63.4, 371.0], [63.5, 372.0], [63.6, 373.0], [63.7, 375.0], [63.8, 375.0], [63.9, 377.0], [64.0, 379.0], [64.1, 380.0], [64.2, 381.0], [64.3, 383.0], [64.4, 384.0], [64.5, 387.0], [64.6, 389.0], [64.7, 391.0], [64.8, 393.0], [64.9, 394.0], [65.0, 395.0], [65.1, 396.0], [65.2, 399.0], [65.3, 401.0], [65.4, 404.0], [65.5, 406.0], [65.6, 407.0], [65.7, 409.0], [65.8, 411.0], [65.9, 412.0], [66.0, 414.0], [66.1, 415.0], [66.2, 416.0], [66.3, 418.0], [66.4, 421.0], [66.5, 423.0], [66.6, 425.0], [66.7, 427.0], [66.8, 430.0], [66.9, 432.0], [67.0, 434.0], [67.1, 436.0], [67.2, 438.0], [67.3, 440.0], [67.4, 442.0], [67.5, 443.0], [67.6, 445.0], [67.7, 448.0], [67.8, 450.0], [67.9, 452.0], [68.0, 454.0], [68.1, 457.0], [68.2, 458.0], [68.3, 460.0], [68.4, 463.0], [68.5, 465.0], [68.6, 468.0], [68.7, 471.0], [68.8, 473.0], [68.9, 477.0], [69.0, 480.0], [69.1, 483.0], [69.2, 485.0], [69.3, 488.0], [69.4, 490.0], [69.5, 491.0], [69.6, 495.0], [69.7, 499.0], [69.8, 501.0], [69.9, 504.0], [70.0, 508.0], [70.1, 511.0], [70.2, 514.0], [70.3, 517.0], [70.4, 520.0], [70.5, 524.0], [70.6, 529.0], [70.7, 531.0], [70.8, 533.0], [70.9, 538.0], [71.0, 542.0], [71.1, 544.0], [71.2, 548.0], [71.3, 550.0], [71.4, 553.0], [71.5, 557.0], [71.6, 562.0], [71.7, 565.0], [71.8, 568.0], [71.9, 574.0], [72.0, 576.0], [72.1, 580.0], [72.2, 583.0], [72.3, 587.0], [72.4, 591.0], [72.5, 594.0], [72.6, 597.0], [72.7, 600.0], [72.8, 603.0], [72.9, 607.0], [73.0, 613.0], [73.1, 620.0], [73.2, 625.0], [73.3, 631.0], [73.4, 635.0], [73.5, 638.0], [73.6, 643.0], [73.7, 650.0], [73.8, 654.0], [73.9, 660.0], [74.0, 664.0], [74.1, 668.0], [74.2, 673.0], [74.3, 679.0], [74.4, 683.0], [74.5, 687.0], [74.6, 689.0], [74.7, 693.0], [74.8, 697.0], [74.9, 701.0], [75.0, 707.0], [75.1, 713.0], [75.2, 721.0], [75.3, 726.0], [75.4, 731.0], [75.5, 737.0], [75.6, 740.0], [75.7, 744.0], [75.8, 757.0], [75.9, 762.0], [76.0, 769.0], [76.1, 773.0], [76.2, 780.0], [76.3, 789.0], [76.4, 795.0], [76.5, 798.0], [76.6, 803.0], [76.7, 806.0], [76.8, 811.0], [76.9, 821.0], [77.0, 826.0], [77.1, 834.0], [77.2, 838.0], [77.3, 848.0], [77.4, 856.0], [77.5, 864.0], [77.6, 868.0], [77.7, 875.0], [77.8, 881.0], [77.9, 894.0], [78.0, 900.0], [78.1, 906.0], [78.2, 915.0], [78.3, 925.0], [78.4, 930.0], [78.5, 940.0], [78.6, 946.0], [78.7, 954.0], [78.8, 960.0], [78.9, 966.0], [79.0, 976.0], [79.1, 985.0], [79.2, 990.0], [79.3, 999.0], [79.4, 1007.0], [79.5, 1020.0], [79.6, 1028.0], [79.7, 1033.0], [79.8, 1046.0], [79.9, 1052.0], [80.0, 1064.0], [80.1, 1075.0], [80.2, 1078.0], [80.3, 1083.0], [80.4, 1091.0], [80.5, 1103.0], [80.6, 1113.0], [80.7, 1122.0], [80.8, 1133.0], [80.9, 1145.0], [81.0, 1166.0], [81.1, 1179.0], [81.2, 1194.0], [81.3, 1206.0], [81.4, 1219.0], [81.5, 1225.0], [81.6, 1236.0], [81.7, 1243.0], [81.8, 1251.0], [81.9, 1255.0], [82.0, 1268.0], [82.1, 1274.0], [82.2, 1284.0], [82.3, 1296.0], [82.4, 1308.0], [82.5, 1318.0], [82.6, 1334.0], [82.7, 1342.0], [82.8, 1357.0], [82.9, 1363.0], [83.0, 1378.0], [83.1, 1390.0], [83.2, 1401.0], [83.3, 1410.0], [83.4, 1425.0], [83.5, 1440.0], [83.6, 1456.0], [83.7, 1472.0], [83.8, 1488.0], [83.9, 1496.0], [84.0, 1516.0], [84.1, 1530.0], [84.2, 1558.0], [84.3, 1590.0], [84.4, 1615.0], [84.5, 1632.0], [84.6, 1643.0], [84.7, 1655.0], [84.8, 1669.0], [84.9, 1684.0], [85.0, 1703.0], [85.1, 1716.0], [85.2, 1737.0], [85.3, 1760.0], [85.4, 1795.0], [85.5, 1810.0], [85.6, 1821.0], [85.7, 1842.0], [85.8, 1881.0], [85.9, 1897.0], [86.0, 1920.0], [86.1, 1930.0], [86.2, 1979.0], [86.3, 2021.0], [86.4, 2040.0], [86.5, 2083.0], [86.6, 2118.0], [86.7, 2165.0], [86.8, 2202.0], [86.9, 2234.0], [87.0, 2250.0], [87.1, 2296.0], [87.2, 2317.0], [87.3, 2334.0], [87.4, 2355.0], [87.5, 2395.0], [87.6, 2415.0], [87.7, 2439.0], [87.8, 2471.0], [87.9, 2505.0], [88.0, 2540.0], [88.1, 2555.0], [88.2, 2587.0], [88.3, 2596.0], [88.4, 2637.0], [88.5, 2677.0], [88.6, 2702.0], [88.7, 2725.0], [88.8, 2746.0], [88.9, 2784.0], [89.0, 2819.0], [89.1, 2841.0], [89.2, 2877.0], [89.3, 2913.0], [89.4, 2938.0], [89.5, 2963.0], [89.6, 3018.0], [89.7, 3047.0], [89.8, 3079.0], [89.9, 3127.0], [90.0, 3189.0], [90.1, 3229.0], [90.2, 3295.0], [90.3, 3322.0], [90.4, 3367.0], [90.5, 3395.0], [90.6, 3436.0], [90.7, 3511.0], [90.8, 3548.0], [90.9, 3583.0], [91.0, 3625.0], [91.1, 3651.0], [91.2, 3669.0], [91.3, 3695.0], [91.4, 3726.0], [91.5, 3783.0], [91.6, 3814.0], [91.7, 3856.0], [91.8, 3898.0], [91.9, 3938.0], [92.0, 4008.0], [92.1, 4075.0], [92.2, 4140.0], [92.3, 4188.0], [92.4, 4217.0], [92.5, 4237.0], [92.6, 4297.0], [92.7, 4344.0], [92.8, 4369.0], [92.9, 4414.0], [93.0, 4486.0], [93.1, 4590.0], [93.2, 4666.0], [93.3, 4700.0], [93.4, 4774.0], [93.5, 4803.0], [93.6, 4895.0], [93.7, 4949.0], [93.8, 5033.0], [93.9, 5121.0], [94.0, 5221.0], [94.1, 5319.0], [94.2, 5372.0], [94.3, 5494.0], [94.4, 5598.0], [94.5, 5674.0], [94.6, 5724.0], [94.7, 5832.0], [94.8, 5907.0], [94.9, 5991.0], [95.0, 6064.0], [95.1, 6142.0], [95.2, 6281.0], [95.3, 6378.0], [95.4, 6451.0], [95.5, 6530.0], [95.6, 6679.0], [95.7, 6810.0], [95.8, 6950.0], [95.9, 7050.0], [96.0, 7175.0], [96.1, 7308.0], [96.2, 7432.0], [96.3, 7683.0], [96.4, 7844.0], [96.5, 7919.0], [96.6, 8074.0], [96.7, 8260.0], [96.8, 8442.0], [96.9, 8494.0], [97.0, 8686.0], [97.1, 8890.0], [97.2, 9105.0], [97.3, 9239.0], [97.4, 9439.0], [97.5, 9772.0], [97.6, 10103.0], [97.7, 10334.0], [97.8, 10471.0], [97.9, 10711.0], [98.0, 10890.0], [98.1, 10997.0], [98.2, 11149.0], [98.3, 11333.0], [98.4, 11539.0], [98.5, 11805.0], [98.6, 12042.0], [98.7, 12828.0], [98.8, 13992.0], [98.9, 14867.0], [99.0, 16186.0], [99.1, 16930.0], [99.2, 18239.0], [99.3, 19174.0], [99.4, 19928.0], [99.5, 22220.0], [99.6, 26451.0], [99.7, 30089.0], [99.8, 36506.0], [99.9, 90005.0], [100.0, 90479.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4314.0, "series": [{"data": [[0.0, 4314.0], [100.0, 777.0], [36500.0, 1.0], [200.0, 720.0], [55700.0, 1.0], [58900.0, 1.0], [300.0, 666.0], [400.0, 451.0], [500.0, 292.0], [600.0, 214.0], [700.0, 169.0], [800.0, 142.0], [900.0, 132.0], [1000.0, 115.0], [1100.0, 77.0], [1200.0, 109.0], [1300.0, 83.0], [1400.0, 73.0], [1500.0, 39.0], [1600.0, 65.0], [1700.0, 48.0], [1800.0, 49.0], [1900.0, 31.0], [2000.0, 33.0], [2100.0, 20.0], [2300.0, 41.0], [2200.0, 33.0], [2400.0, 37.0], [2500.0, 41.0], [2600.0, 27.0], [2800.0, 33.0], [2700.0, 34.0], [2900.0, 32.0], [3000.0, 25.0], [3100.0, 19.0], [3300.0, 32.0], [3200.0, 19.0], [3400.0, 16.0], [3500.0, 21.0], [3600.0, 39.0], [3700.0, 23.0], [3800.0, 27.0], [3900.0, 17.0], [4000.0, 17.0], [4200.0, 24.0], [4100.0, 22.0], [4300.0, 26.0], [4400.0, 16.0], [4500.0, 9.0], [4600.0, 17.0], [4700.0, 19.0], [4800.0, 13.0], [5000.0, 11.0], [5100.0, 10.0], [4900.0, 15.0], [5200.0, 9.0], [5300.0, 14.0], [5500.0, 9.0], [5600.0, 14.0], [5400.0, 10.0], [5700.0, 12.0], [5800.0, 12.0], [6100.0, 8.0], [5900.0, 13.0], [6000.0, 15.0], [6300.0, 10.0], [6200.0, 8.0], [6600.0, 11.0], [6400.0, 12.0], [6500.0, 7.0], [6900.0, 4.0], [6700.0, 6.0], [6800.0, 8.0], [7100.0, 9.0], [7000.0, 12.0], [7200.0, 7.0], [7300.0, 7.0], [7400.0, 8.0], [7600.0, 5.0], [7500.0, 2.0], [7900.0, 8.0], [7800.0, 9.0], [7700.0, 7.0], [8000.0, 7.0], [8100.0, 7.0], [8200.0, 3.0], [8500.0, 7.0], [8400.0, 16.0], [8600.0, 5.0], [8300.0, 2.0], [8700.0, 3.0], [8800.0, 6.0], [9100.0, 5.0], [9200.0, 6.0], [9000.0, 6.0], [8900.0, 1.0], [9400.0, 11.0], [9500.0, 3.0], [9300.0, 3.0], [9700.0, 4.0], [9900.0, 5.0], [9800.0, 2.0], [10200.0, 4.0], [10100.0, 2.0], [10000.0, 1.0], [10500.0, 6.0], [10700.0, 6.0], [10300.0, 8.0], [10400.0, 8.0], [10600.0, 2.0], [11000.0, 8.0], [11100.0, 3.0], [11200.0, 8.0], [10800.0, 6.0], [10900.0, 9.0], [11600.0, 3.0], [11400.0, 3.0], [11500.0, 6.0], [11700.0, 4.0], [11300.0, 4.0], [12200.0, 4.0], [11800.0, 6.0], [11900.0, 1.0], [12000.0, 3.0], [12100.0, 1.0], [12400.0, 3.0], [12800.0, 3.0], [12900.0, 1.0], [13000.0, 1.0], [13500.0, 1.0], [13600.0, 1.0], [13800.0, 1.0], [13900.0, 4.0], [14300.0, 1.0], [14100.0, 1.0], [14000.0, 2.0], [14200.0, 1.0], [14800.0, 3.0], [14700.0, 2.0], [14900.0, 2.0], [15000.0, 1.0], [15100.0, 1.0], [15600.0, 2.0], [15800.0, 1.0], [15500.0, 1.0], [15700.0, 1.0], [16100.0, 1.0], [16200.0, 3.0], [16300.0, 1.0], [17400.0, 2.0], [16400.0, 3.0], [16600.0, 1.0], [17200.0, 1.0], [18200.0, 2.0], [18400.0, 2.0], [17800.0, 1.0], [17600.0, 1.0], [18600.0, 2.0], [19200.0, 4.0], [18800.0, 1.0], [20000.0, 1.0], [20200.0, 1.0], [19800.0, 1.0], [20800.0, 2.0], [22200.0, 1.0], [23400.0, 1.0], [23800.0, 1.0], [25600.0, 2.0], [26400.0, 1.0], [26800.0, 1.0], [27800.0, 1.0], [28400.0, 1.0], [28800.0, 3.0], [30000.0, 1.0], [31600.0, 1.0], [31400.0, 1.0], [33200.0, 1.0], [34400.0, 1.0], [36000.0, 2.0], [37600.0, 1.0], [90400.0, 1.0], [37100.0, 1.0], [45500.0, 1.0], [48300.0, 1.0], [90100.0, 5.0], [16900.0, 2.0], [17300.0, 2.0], [17500.0, 1.0], [18100.0, 1.0], [19100.0, 2.0], [18500.0, 1.0], [18900.0, 1.0], [19700.0, 1.0], [19500.0, 3.0], [19900.0, 1.0], [20100.0, 1.0], [20700.0, 1.0], [20500.0, 1.0], [21700.0, 2.0], [23300.0, 1.0], [24500.0, 1.0], [24100.0, 1.0], [25500.0, 1.0], [26300.0, 1.0], [26700.0, 1.0], [28300.0, 1.0], [28100.0, 1.0], [30500.0, 1.0], [31100.0, 1.0], [32300.0, 1.0], [39400.0, 1.0], [41800.0, 1.0], [44600.0, 1.0], [90000.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1081.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4332.0, "series": [{"data": [[0.0, 4332.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1081.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1119.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3400.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60183326E12, "maxY": 20.0, "series": [{"data": [[1.60183356E12, 20.0], [1.60183326E12, 20.0], [1.60183386E12, 20.0], [1.6018338E12, 20.0], [1.6018335E12, 20.0], [1.60183344E12, 20.0], [1.60183374E12, 20.0], [1.60183368E12, 20.0], [1.60183338E12, 20.0], [1.60183332E12, 20.0], [1.60183398E12, 1.5], [1.60183392E12, 14.535714285714295], [1.60183362E12, 20.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 90093.0, "series": [{"data": [[8.0, 1403.0], [2.0, 90093.0], [9.0, 2389.0], [10.0, 10981.0], [11.0, 10634.0], [12.0, 10311.0], [3.0, 1228.0], [13.0, 489.0], [14.0, 10546.0], [15.0, 11336.0], [16.0, 228.0], [4.0, 1435.0], [1.0, 90041.0], [17.0, 11236.0], [18.0, 11539.0], [19.0, 11679.0], [20.0, 1218.6469282759992], [5.0, 1115.0], [6.0, 1141.0], [7.0, 12035.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.98086991542488, 1245.499999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.7, "minX": 1.60183326E12, "maxY": 1603879.7333333334, "series": [{"data": [[1.60183356E12, 180706.46666666667], [1.60183326E12, 49170.7], [1.60183386E12, 829137.6833333333], [1.6018338E12, 1603879.7333333334], [1.6018335E12, 176849.95], [1.60183344E12, 149112.83333333334], [1.60183374E12, 843648.95], [1.60183368E12, 277931.01666666666], [1.60183338E12, 206908.36666666667], [1.60183332E12, 705172.3666666667], [1.60183398E12, 26.7], [1.60183392E12, 35630.01666666667], [1.60183362E12, 194738.96666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183356E12, 3825.6666666666665], [1.60183326E12, 5263.966666666666], [1.60183386E12, 17049.816666666666], [1.6018338E12, 32142.283333333333], [1.6018335E12, 3596.633333333333], [1.60183344E12, 4510.983333333334], [1.60183374E12, 19471.583333333332], [1.60183368E12, 5295.55], [1.60183338E12, 8164.666666666667], [1.60183332E12, 9216.25], [1.60183398E12, 17.7], [1.60183392E12, 241.36666666666667], [1.60183362E12, 1682.1666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 459.29403306973427, "minX": 1.60183326E12, "maxY": 90067.0, "series": [{"data": [[1.60183356E12, 5202.921810699588], [1.60183326E12, 815.1722595078298], [1.60183386E12, 808.8313008130078], [1.6018338E12, 459.29403306973427], [1.6018335E12, 2994.320954907163], [1.60183344E12, 3514.7300613496927], [1.60183374E12, 576.0467769537926], [1.60183368E12, 2432.937262357415], [1.60183338E12, 1483.4831460674156], [1.60183332E12, 1152.6997971602452], [1.60183398E12, 90067.0], [1.60183392E12, 7413.392857142858], [1.60183362E12, 5369.1135135135155]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 392.36508841985216, "minX": 1.60183326E12, "maxY": 90066.0, "series": [{"data": [[1.60183356E12, 3064.2633744855957], [1.60183326E12, 751.4653243847879], [1.60183386E12, 565.0596205962075], [1.6018338E12, 410.64629762760603], [1.6018335E12, 1635.9389920424412], [1.60183344E12, 2316.22699386503], [1.60183374E12, 392.36508841985216], [1.60183368E12, 942.5779467680605], [1.60183338E12, 1176.5505617977528], [1.60183332E12, 608.2981744421902], [1.60183398E12, 90066.0], [1.60183392E12, 7382.642857142859], [1.60183362E12, 2737.843243243246]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60183326E12, "maxY": 16.543209876543212, "series": [{"data": [[1.60183356E12, 16.543209876543212], [1.60183326E12, 1.8187919463087243], [1.60183386E12, 0.27303523035230337], [1.6018338E12, 0.04025880661394686], [1.6018335E12, 3.9442970822281174], [1.60183344E12, 6.54294478527608], [1.60183374E12, 0.9965772960638942], [1.60183368E12, 6.6844106463878346], [1.60183338E12, 0.6966292134831463], [1.60183332E12, 0.630831643002028], [1.60183398E12, 0.0], [1.60183392E12, 0.25000000000000006], [1.60183362E12, 7.227027027027028]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60183326E12, "maxY": 58989.0, "series": [{"data": [[1.60183356E12, 36506.0], [1.60183326E12, 6903.0], [1.60183374E12, 24165.0], [1.60183368E12, 45524.0], [1.60183338E12, 14850.0], [1.60183386E12, 11013.0], [1.60183332E12, 15601.0], [1.6018338E12, 5658.0], [1.6018335E12, 19799.0], [1.60183344E12, 39490.0], [1.60183392E12, 12035.0], [1.60183362E12, 58989.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183356E12, 11.0], [1.60183326E12, 7.0], [1.60183374E12, 9.0], [1.60183368E12, 12.183999862670898], [1.60183338E12, 9.0], [1.60183386E12, 10.0], [1.60183332E12, 14.362999831438064], [1.6018338E12, 8.0], [1.6018335E12, 15.0], [1.60183344E12, 13.0], [1.60183392E12, 1115.0], [1.60183362E12, 8.340999964475632]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183356E12, 11.0], [1.60183326E12, 7.059100029468537], [1.60183374E12, 9.0], [1.60183368E12, 12.70240005493164], [1.60183338E12, 9.326100060939789], [1.60183386E12, 10.0], [1.60183332E12, 14.999300067424773], [1.6018338E12, 8.0], [1.6018335E12, 15.0], [1.60183344E12, 13.0], [1.60183392E12, 1115.0], [1.60183362E12, 8.475100014209747]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183356E12, 11.0], [1.60183326E12, 7.0], [1.60183374E12, 9.0], [1.60183368E12, 12.47199993133545], [1.60183338E12, 9.070499923825263], [1.60183386E12, 10.0], [1.60183332E12, 14.716499915719032], [1.6018338E12, 8.0], [1.6018335E12, 15.0], [1.60183344E12, 13.0], [1.60183392E12, 1115.0], [1.60183362E12, 8.415499982237815]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183356E12, 11.0], [1.60183326E12, 7.0], [1.60183374E12, 6.0], [1.60183368E12, 10.0], [1.60183338E12, 8.0], [1.60183386E12, 7.0], [1.60183332E12, 12.0], [1.6018338E12, 6.0], [1.6018335E12, 12.0], [1.60183344E12, 13.0], [1.60183392E12, 1115.0], [1.60183362E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183356E12, 11742.0], [1.60183326E12, 42.0], [1.60183374E12, 191.0], [1.60183368E12, 492.0], [1.60183338E12, 123.5], [1.60183386E12, 272.0], [1.60183332E12, 530.0], [1.6018338E12, 153.0], [1.6018335E12, 1131.0], [1.60183344E12, 3456.0], [1.60183392E12, 10681.5], [1.60183362E12, 287.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183392E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4.5, "minX": 1.0, "maxY": 6903.0, "series": [{"data": [[2.0, 6903.0], [3.0, 5922.0], [4.0, 2187.0], [5.0, 4877.5], [6.0, 2551.0], [7.0, 3492.0], [8.0, 1512.0], [9.0, 2564.5], [10.0, 1649.0], [11.0, 454.0], [12.0, 907.0], [13.0, 1122.0], [14.0, 1650.0], [15.0, 307.0], [16.0, 361.0], [17.0, 574.0], [18.0, 1020.0], [19.0, 1541.5], [20.0, 994.5], [21.0, 1841.0], [22.0, 337.0], [23.0, 435.0], [24.0, 338.5], [25.0, 398.0], [26.0, 33.0], [27.0, 789.0], [28.0, 281.5], [29.0, 525.5], [30.0, 997.5], [31.0, 591.0], [32.0, 259.0], [33.0, 68.0], [34.0, 362.5], [35.0, 712.0], [37.0, 179.0], [36.0, 468.0], [38.0, 974.0], [39.0, 1183.0], [40.0, 81.5], [41.0, 33.0], [42.0, 1262.0], [43.0, 214.0], [44.0, 409.0], [45.0, 182.0], [49.0, 239.0], [48.0, 35.0], [51.0, 239.0], [53.0, 27.0], [52.0, 30.0], [55.0, 194.0], [56.0, 314.0], [57.0, 192.0], [58.0, 276.0], [59.0, 414.0], [61.0, 157.0], [60.0, 183.0], [63.0, 29.0], [62.0, 25.0], [66.0, 483.0], [64.0, 338.0], [65.0, 190.0], [70.0, 62.0], [68.0, 46.0], [71.0, 23.0], [74.0, 17.0], [75.0, 149.5], [72.0, 17.5], [77.0, 16.0], [78.0, 138.5], [81.0, 16.0], [85.0, 327.5], [88.0, 152.0], [91.0, 19.5], [93.0, 28.0], [95.0, 24.0], [97.0, 20.5], [99.0, 15.0], [103.0, 16.0], [100.0, 227.0], [109.0, 23.0], [111.0, 14.0], [113.0, 18.0], [118.0, 14.0], [121.0, 15.0], [127.0, 15.0], [130.0, 366.0], [137.0, 14.0], [145.0, 226.0], [165.0, 18.0], [1.0, 5177.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 2398.0], [3.0, 3831.0], [4.0, 2480.0], [5.0, 2451.0], [6.0, 533.0], [7.0, 628.5], [8.0, 871.0], [9.0, 358.0], [10.0, 189.0], [11.0, 158.0], [12.0, 417.0], [13.0, 290.0], [14.0, 1081.0], [15.0, 251.0], [16.0, 86.0], [17.0, 251.5], [18.0, 157.0], [19.0, 308.0], [20.0, 65.5], [21.0, 60.5], [22.0, 490.0], [23.0, 230.5], [24.0, 94.5], [25.0, 176.0], [26.0, 39.0], [27.0, 79.0], [29.0, 79.0], [30.0, 20.0], [31.0, 292.0], [32.0, 87.5], [33.0, 174.0], [34.0, 103.0], [35.0, 92.0], [37.0, 421.0], [36.0, 15.0], [38.0, 495.0], [39.0, 81.0], [41.0, 217.0], [40.0, 209.5], [42.0, 45.0], [43.0, 5.0], [44.0, 23.0], [49.0, 75.5], [48.0, 67.0], [51.0, 275.0], [53.0, 33.0], [52.0, 92.0], [55.0, 38.0], [56.0, 77.5], [57.0, 305.0], [58.0, 48.5], [59.0, 5.0], [61.0, 88.5], [60.0, 34.5], [63.0, 18.0], [62.0, 75.0], [66.0, 31.0], [64.0, 31.0], [65.0, 13.0], [68.0, 14.0], [74.0, 31.0], [75.0, 63.0], [72.0, 44.5], [77.0, 7.0], [78.0, 42.0], [81.0, 38.5], [85.0, 11.0], [88.0, 18.0], [91.0, 64.0], [95.0, 945.0], [97.0, 141.5], [99.0, 4.5], [103.0, 34.0], [100.0, 7.0], [109.0, 137.5], [111.0, 5.5], [113.0, 15.5], [121.0, 15.5], [127.0, 110.0], [130.0, 14.0], [137.0, 38.0], [145.0, 22.0], [165.0, 48.0], [1.0, 4225.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4.0, "minX": 1.0, "maxY": 4225.0, "series": [{"data": [[2.0, 2202.0], [3.0, 1712.0], [4.0, 804.5], [5.0, 1101.0], [6.0, 1323.0], [7.0, 952.0], [8.0, 819.0], [9.0, 776.0], [10.0, 683.0], [11.0, 408.0], [12.0, 568.0], [13.0, 620.0], [14.0, 628.5], [15.0, 307.0], [16.0, 300.0], [17.0, 490.0], [18.0, 590.0], [19.0, 760.0], [20.0, 764.0], [21.0, 732.0], [22.0, 320.0], [23.0, 366.0], [24.0, 271.5], [25.0, 373.0], [26.0, 33.0], [27.0, 316.0], [28.0, 267.5], [29.0, 391.0], [30.0, 656.0], [31.0, 306.0], [32.0, 250.5], [33.0, 65.0], [34.0, 274.5], [35.0, 352.5], [37.0, 173.5], [36.0, 399.0], [38.0, 559.0], [39.0, 982.0], [40.0, 81.5], [41.0, 28.0], [42.0, 992.0], [43.0, 180.0], [44.0, 406.0], [45.0, 167.0], [49.0, 211.0], [48.0, 35.0], [51.0, 181.0], [53.0, 27.0], [52.0, 30.0], [55.0, 155.0], [56.0, 314.0], [57.0, 168.0], [58.0, 200.5], [59.0, 388.5], [61.0, 148.0], [60.0, 168.5], [63.0, 28.5], [62.0, 25.0], [66.0, 367.0], [64.0, 327.0], [65.0, 167.0], [70.0, 62.0], [68.0, 46.0], [71.0, 21.0], [74.0, 17.0], [75.0, 149.0], [72.0, 17.5], [77.0, 16.0], [78.0, 134.5], [81.0, 16.0], [85.0, 327.5], [88.0, 143.0], [91.0, 19.0], [93.0, 27.0], [95.0, 22.0], [97.0, 20.5], [99.0, 15.0], [103.0, 16.0], [100.0, 206.0], [109.0, 23.0], [111.0, 14.0], [113.0, 18.0], [118.0, 14.0], [121.0, 15.0], [127.0, 15.0], [130.0, 361.0], [137.0, 14.0], [145.0, 222.0], [165.0, 17.0], [1.0, 1274.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 2397.0], [3.0, 3830.0], [4.0, 2479.5], [5.0, 2154.0], [6.0, 533.0], [7.0, 507.5], [8.0, 871.0], [9.0, 102.0], [10.0, 127.0], [11.0, 145.0], [12.0, 415.0], [13.0, 245.0], [14.0, 1081.0], [15.0, 215.0], [16.0, 86.0], [17.0, 178.0], [18.0, 156.0], [19.0, 278.5], [20.0, 60.5], [21.0, 36.5], [22.0, 490.0], [23.0, 228.0], [24.0, 72.5], [25.0, 135.0], [26.0, 39.0], [27.0, 74.0], [29.0, 78.0], [30.0, 20.0], [31.0, 291.0], [32.0, 87.5], [33.0, 173.5], [34.0, 103.0], [35.0, 89.0], [37.0, 420.5], [36.0, 15.0], [38.0, 495.0], [39.0, 81.0], [41.0, 217.0], [40.0, 209.0], [42.0, 45.0], [43.0, 5.0], [44.0, 23.0], [49.0, 75.5], [48.0, 67.0], [51.0, 275.0], [53.0, 33.0], [52.0, 92.0], [55.0, 37.0], [56.0, 77.5], [57.0, 305.0], [58.0, 48.5], [59.0, 5.0], [61.0, 86.0], [60.0, 34.5], [63.0, 16.0], [62.0, 75.0], [66.0, 31.0], [64.0, 31.0], [65.0, 13.0], [68.0, 13.5], [74.0, 31.0], [75.0, 63.0], [72.0, 44.5], [77.0, 7.0], [78.0, 42.0], [81.0, 38.5], [85.0, 11.0], [88.0, 18.0], [91.0, 64.0], [95.0, 945.0], [97.0, 141.5], [99.0, 4.0], [103.0, 34.0], [100.0, 7.0], [109.0, 137.5], [111.0, 5.5], [113.0, 15.5], [121.0, 15.5], [127.0, 110.0], [130.0, 14.0], [137.0, 38.0], [145.0, 22.0], [165.0, 48.0], [1.0, 4225.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60183326E12, "maxY": 46.36666666666667, "series": [{"data": [[1.60183356E12, 4.083333333333333], [1.60183326E12, 7.766666666666667], [1.60183374E12, 29.216666666666665], [1.60183368E12, 8.766666666666667], [1.60183338E12, 13.383333333333333], [1.60183386E12, 24.6], [1.60183332E12, 16.416666666666668], [1.6018338E12, 46.36666666666667], [1.6018335E12, 6.25], [1.60183344E12, 5.433333333333334], [1.60183392E12, 0.16666666666666666], [1.60183362E12, 3.0833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183392E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60183326E12, "maxY": 46.266666666666666, "series": [{"data": [[1.60183356E12, 3.533333333333333], [1.60183326E12, 7.433333333333334], [1.60183374E12, 28.916666666666668], [1.60183368E12, 7.633333333333334], [1.60183338E12, 13.216666666666667], [1.60183386E12, 24.416666666666668], [1.60183332E12, 16.166666666666668], [1.6018338E12, 46.266666666666666], [1.6018335E12, 5.566666666666666], [1.60183344E12, 4.983333333333333], [1.60183392E12, 0.4666666666666667], [1.60183362E12, 2.7333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60183386E12, 0.03333333333333333], [1.6018338E12, 0.1], [1.60183398E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.60183356E12, 0.5166666666666667], [1.60183326E12, 0.016666666666666666], [1.60183374E12, 0.3], [1.60183368E12, 1.1333333333333333], [1.60183338E12, 0.13333333333333333], [1.60183386E12, 0.15], [1.60183332E12, 0.26666666666666666], [1.6018335E12, 0.7166666666666667], [1.60183344E12, 0.45], [1.60183362E12, 0.35]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60183326E12, "maxY": 32.916666666666664, "series": [{"data": [[1.60183356E12, 0.8833333333333333], [1.60183326E12, 5.133333333333334], [1.60183374E12, 18.6], [1.60183368E12, 4.783333333333333], [1.60183338E12, 10.633333333333333], [1.60183386E12, 14.883333333333333], [1.60183332E12, 11.766666666666667], [1.6018338E12, 32.916666666666664], [1.6018335E12, 3.95], [1.60183344E12, 2.45], [1.60183392E12, 0.4], [1.60183362E12, 2.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60183356E12, 3.1666666666666665], [1.60183326E12, 2.316666666666667], [1.60183386E12, 9.716666666666667], [1.6018338E12, 13.45], [1.6018335E12, 2.3333333333333335], [1.60183344E12, 2.9833333333333334], [1.60183374E12, 10.616666666666667], [1.60183368E12, 3.9833333333333334], [1.60183338E12, 2.716666666666667], [1.60183332E12, 4.666666666666667], [1.60183398E12, 0.03333333333333333], [1.60183392E12, 0.06666666666666667], [1.60183362E12, 0.6166666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60183326E12, "maxY": 32.916666666666664, "series": [{"data": [[1.60183356E12, 0.8833333333333333], [1.60183326E12, 5.133333333333334], [1.60183374E12, 18.6], [1.60183368E12, 4.783333333333333], [1.60183338E12, 10.633333333333333], [1.60183386E12, 14.883333333333333], [1.60183332E12, 11.766666666666667], [1.6018338E12, 32.916666666666664], [1.6018335E12, 3.95], [1.60183344E12, 2.45], [1.60183392E12, 0.4], [1.60183362E12, 2.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60183356E12, 3.1666666666666665], [1.60183326E12, 2.316666666666667], [1.60183386E12, 9.716666666666667], [1.6018338E12, 13.45], [1.6018335E12, 2.3333333333333335], [1.60183344E12, 2.9833333333333334], [1.60183374E12, 10.616666666666667], [1.60183368E12, 3.9833333333333334], [1.60183338E12, 2.716666666666667], [1.60183332E12, 4.666666666666667], [1.60183398E12, 0.03333333333333333], [1.60183392E12, 0.06666666666666667], [1.60183362E12, 0.6166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Total Transactions Per Second"}},
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

