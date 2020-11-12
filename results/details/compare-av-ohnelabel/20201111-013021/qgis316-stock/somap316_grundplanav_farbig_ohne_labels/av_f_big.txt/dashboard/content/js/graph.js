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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2060.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 8.0], [0.6, 8.0], [0.7, 9.0], [0.8, 9.0], [0.9, 10.0], [1.0, 10.0], [1.1, 16.0], [1.2, 16.0], [1.3, 17.0], [1.4, 19.0], [1.5, 20.0], [1.6, 20.0], [1.7, 20.0], [1.8, 20.0], [1.9, 20.0], [2.0, 20.0], [2.1, 21.0], [2.2, 21.0], [2.3, 21.0], [2.4, 22.0], [2.5, 22.0], [2.6, 23.0], [2.7, 23.0], [2.8, 23.0], [2.9, 23.0], [3.0, 25.0], [3.1, 25.0], [3.2, 26.0], [3.3, 26.0], [3.4, 26.0], [3.5, 27.0], [3.6, 30.0], [3.7, 37.0], [3.8, 37.0], [3.9, 45.0], [4.0, 51.0], [4.1, 58.0], [4.2, 58.0], [4.3, 64.0], [4.4, 67.0], [4.5, 96.0], [4.6, 96.0], [4.7, 97.0], [4.8, 97.0], [4.9, 98.0], [5.0, 98.0], [5.1, 98.0], [5.2, 98.0], [5.3, 98.0], [5.4, 99.0], [5.5, 99.0], [5.6, 100.0], [5.7, 100.0], [5.8, 100.0], [5.9, 101.0], [6.0, 102.0], [6.1, 102.0], [6.2, 102.0], [6.3, 103.0], [6.4, 103.0], [6.5, 103.0], [6.6, 103.0], [6.7, 106.0], [6.8, 106.0], [6.9, 106.0], [7.0, 106.0], [7.1, 108.0], [7.2, 108.0], [7.3, 108.0], [7.4, 109.0], [7.5, 109.0], [7.6, 109.0], [7.7, 109.0], [7.8, 110.0], [7.9, 111.0], [8.0, 111.0], [8.1, 112.0], [8.2, 113.0], [8.3, 114.0], [8.4, 114.0], [8.5, 114.0], [8.6, 115.0], [8.7, 115.0], [8.8, 116.0], [8.9, 117.0], [9.0, 117.0], [9.1, 117.0], [9.2, 118.0], [9.3, 118.0], [9.4, 120.0], [9.5, 120.0], [9.6, 121.0], [9.7, 122.0], [9.8, 122.0], [9.9, 122.0], [10.0, 122.0], [10.1, 126.0], [10.2, 126.0], [10.3, 127.0], [10.4, 128.0], [10.5, 128.0], [10.6, 128.0], [10.7, 129.0], [10.8, 129.0], [10.9, 132.0], [11.0, 132.0], [11.1, 132.0], [11.2, 136.0], [11.3, 139.0], [11.4, 139.0], [11.5, 140.0], [11.6, 140.0], [11.7, 140.0], [11.8, 142.0], [11.9, 154.0], [12.0, 159.0], [12.1, 159.0], [12.2, 162.0], [12.3, 172.0], [12.4, 183.0], [12.5, 183.0], [12.6, 184.0], [12.7, 185.0], [12.8, 188.0], [12.9, 188.0], [13.0, 190.0], [13.1, 193.0], [13.2, 195.0], [13.3, 195.0], [13.4, 195.0], [13.5, 196.0], [13.6, 196.0], [13.7, 196.0], [13.8, 197.0], [13.9, 199.0], [14.0, 199.0], [14.1, 200.0], [14.2, 201.0], [14.3, 201.0], [14.4, 201.0], [14.5, 202.0], [14.6, 203.0], [14.7, 204.0], [14.8, 204.0], [14.9, 204.0], [15.0, 204.0], [15.1, 204.0], [15.2, 205.0], [15.3, 208.0], [15.4, 209.0], [15.5, 209.0], [15.6, 212.0], [15.7, 212.0], [15.8, 212.0], [15.9, 212.0], [16.0, 212.0], [16.1, 213.0], [16.2, 213.0], [16.3, 213.0], [16.4, 216.0], [16.5, 216.0], [16.6, 217.0], [16.7, 217.0], [16.8, 220.0], [16.9, 220.0], [17.0, 220.0], [17.1, 221.0], [17.2, 224.0], [17.3, 226.0], [17.4, 226.0], [17.5, 228.0], [17.6, 230.0], [17.7, 230.0], [17.8, 230.0], [17.9, 230.0], [18.0, 233.0], [18.1, 233.0], [18.2, 233.0], [18.3, 236.0], [18.4, 238.0], [18.5, 238.0], [18.6, 243.0], [18.7, 247.0], [18.8, 248.0], [18.9, 248.0], [19.0, 248.0], [19.1, 255.0], [19.2, 260.0], [19.3, 260.0], [19.4, 261.0], [19.5, 262.0], [19.6, 263.0], [19.7, 263.0], [19.8, 266.0], [19.9, 266.0], [20.0, 267.0], [20.1, 267.0], [20.2, 267.0], [20.3, 268.0], [20.4, 268.0], [20.5, 268.0], [20.6, 269.0], [20.7, 272.0], [20.8, 272.0], [20.9, 274.0], [21.0, 282.0], [21.1, 282.0], [21.2, 282.0], [21.3, 283.0], [21.4, 286.0], [21.5, 286.0], [21.6, 286.0], [21.7, 287.0], [21.8, 292.0], [21.9, 292.0], [22.0, 293.0], [22.1, 294.0], [22.2, 294.0], [22.3, 294.0], [22.4, 295.0], [22.5, 297.0], [22.6, 300.0], [22.7, 300.0], [22.8, 312.0], [22.9, 313.0], [23.0, 314.0], [23.1, 314.0], [23.2, 319.0], [23.3, 323.0], [23.4, 323.0], [23.5, 324.0], [23.6, 327.0], [23.7, 329.0], [23.8, 329.0], [23.9, 338.0], [24.0, 367.0], [24.1, 367.0], [24.2, 367.0], [24.3, 369.0], [24.4, 371.0], [24.5, 373.0], [24.6, 373.0], [24.7, 373.0], [24.8, 374.0], [24.9, 377.0], [25.0, 377.0], [25.1, 377.0], [25.2, 379.0], [25.3, 379.0], [25.4, 379.0], [25.5, 380.0], [25.6, 380.0], [25.7, 380.0], [25.8, 381.0], [25.9, 381.0], [26.0, 384.0], [26.1, 384.0], [26.2, 384.0], [26.3, 384.0], [26.4, 385.0], [26.5, 385.0], [26.6, 385.0], [26.7, 385.0], [26.8, 385.0], [26.9, 385.0], [27.0, 386.0], [27.1, 386.0], [27.2, 386.0], [27.3, 386.0], [27.4, 387.0], [27.5, 387.0], [27.6, 387.0], [27.7, 387.0], [27.8, 388.0], [27.9, 388.0], [28.0, 388.0], [28.1, 388.0], [28.2, 388.0], [28.3, 389.0], [28.4, 389.0], [28.5, 389.0], [28.6, 390.0], [28.7, 390.0], [28.8, 390.0], [28.9, 390.0], [29.0, 390.0], [29.1, 390.0], [29.2, 390.0], [29.3, 391.0], [29.4, 392.0], [29.5, 392.0], [29.6, 393.0], [29.7, 394.0], [29.8, 394.0], [29.9, 394.0], [30.0, 394.0], [30.1, 395.0], [30.2, 395.0], [30.3, 395.0], [30.4, 396.0], [30.5, 396.0], [30.6, 396.0], [30.7, 397.0], [30.8, 397.0], [30.9, 399.0], [31.0, 399.0], [31.1, 399.0], [31.2, 400.0], [31.3, 400.0], [31.4, 400.0], [31.5, 400.0], [31.6, 400.0], [31.7, 400.0], [31.8, 401.0], [31.9, 401.0], [32.0, 401.0], [32.1, 401.0], [32.2, 402.0], [32.3, 402.0], [32.4, 402.0], [32.5, 402.0], [32.6, 402.0], [32.7, 402.0], [32.8, 404.0], [32.9, 404.0], [33.0, 404.0], [33.1, 406.0], [33.2, 407.0], [33.3, 407.0], [33.4, 407.0], [33.5, 407.0], [33.6, 407.0], [33.7, 409.0], [33.8, 409.0], [33.9, 409.0], [34.0, 409.0], [34.1, 409.0], [34.2, 410.0], [34.3, 410.0], [34.4, 410.0], [34.5, 412.0], [34.6, 412.0], [34.7, 413.0], [34.8, 413.0], [34.9, 413.0], [35.0, 414.0], [35.1, 414.0], [35.2, 414.0], [35.3, 414.0], [35.4, 416.0], [35.5, 416.0], [35.6, 417.0], [35.7, 418.0], [35.8, 419.0], [35.9, 419.0], [36.0, 419.0], [36.1, 420.0], [36.2, 421.0], [36.3, 421.0], [36.4, 424.0], [36.5, 424.0], [36.6, 425.0], [36.7, 425.0], [36.8, 427.0], [36.9, 428.0], [37.0, 428.0], [37.1, 428.0], [37.2, 431.0], [37.3, 432.0], [37.4, 432.0], [37.5, 434.0], [37.6, 435.0], [37.7, 436.0], [37.8, 436.0], [37.9, 436.0], [38.0, 436.0], [38.1, 437.0], [38.2, 437.0], [38.3, 438.0], [38.4, 439.0], [38.5, 439.0], [38.6, 439.0], [38.7, 440.0], [38.8, 440.0], [38.9, 440.0], [39.0, 441.0], [39.1, 441.0], [39.2, 443.0], [39.3, 443.0], [39.4, 445.0], [39.5, 445.0], [39.6, 447.0], [39.7, 447.0], [39.8, 448.0], [39.9, 450.0], [40.0, 452.0], [40.1, 452.0], [40.2, 457.0], [40.3, 458.0], [40.4, 458.0], [40.5, 459.0], [40.6, 459.0], [40.7, 462.0], [40.8, 462.0], [40.9, 463.0], [41.0, 464.0], [41.1, 466.0], [41.2, 466.0], [41.3, 467.0], [41.4, 467.0], [41.5, 469.0], [41.6, 469.0], [41.7, 470.0], [41.8, 470.0], [41.9, 470.0], [42.0, 473.0], [42.1, 473.0], [42.2, 476.0], [42.3, 476.0], [42.4, 477.0], [42.5, 477.0], [42.6, 479.0], [42.7, 479.0], [42.8, 482.0], [42.9, 483.0], [43.0, 485.0], [43.1, 485.0], [43.2, 485.0], [43.3, 494.0], [43.4, 494.0], [43.5, 495.0], [43.6, 497.0], [43.7, 498.0], [43.8, 498.0], [43.9, 500.0], [44.0, 501.0], [44.1, 502.0], [44.2, 502.0], [44.3, 503.0], [44.4, 504.0], [44.5, 506.0], [44.6, 506.0], [44.7, 507.0], [44.8, 511.0], [44.9, 513.0], [45.0, 513.0], [45.1, 514.0], [45.2, 515.0], [45.3, 515.0], [45.4, 516.0], [45.5, 517.0], [45.6, 521.0], [45.7, 521.0], [45.8, 526.0], [45.9, 531.0], [46.0, 532.0], [46.1, 532.0], [46.2, 533.0], [46.3, 536.0], [46.4, 538.0], [46.5, 538.0], [46.6, 539.0], [46.7, 541.0], [46.8, 541.0], [46.9, 544.0], [47.0, 544.0], [47.1, 551.0], [47.2, 551.0], [47.3, 555.0], [47.4, 556.0], [47.5, 560.0], [47.6, 560.0], [47.7, 561.0], [47.8, 561.0], [47.9, 564.0], [48.0, 564.0], [48.1, 567.0], [48.2, 569.0], [48.3, 571.0], [48.4, 571.0], [48.5, 571.0], [48.6, 571.0], [48.7, 571.0], [48.8, 576.0], [48.9, 578.0], [49.0, 582.0], [49.1, 582.0], [49.2, 584.0], [49.3, 586.0], [49.4, 589.0], [49.5, 589.0], [49.6, 589.0], [49.7, 589.0], [49.8, 593.0], [49.9, 593.0], [50.0, 594.0], [50.1, 595.0], [50.2, 595.0], [50.3, 596.0], [50.4, 598.0], [50.5, 598.0], [50.6, 598.0], [50.7, 598.0], [50.8, 599.0], [50.9, 603.0], [51.0, 603.0], [51.1, 604.0], [51.2, 605.0], [51.3, 608.0], [51.4, 608.0], [51.5, 609.0], [51.6, 610.0], [51.7, 610.0], [51.8, 610.0], [51.9, 614.0], [52.0, 616.0], [52.1, 616.0], [52.2, 619.0], [52.3, 621.0], [52.4, 623.0], [52.5, 623.0], [52.6, 624.0], [52.7, 630.0], [52.8, 632.0], [52.9, 632.0], [53.0, 636.0], [53.1, 637.0], [53.2, 638.0], [53.3, 638.0], [53.4, 647.0], [53.5, 650.0], [53.6, 650.0], [53.7, 655.0], [53.8, 656.0], [53.9, 658.0], [54.0, 658.0], [54.1, 659.0], [54.2, 659.0], [54.3, 662.0], [54.4, 662.0], [54.5, 669.0], [54.6, 671.0], [54.7, 671.0], [54.8, 671.0], [54.9, 676.0], [55.0, 681.0], [55.1, 681.0], [55.2, 683.0], [55.3, 683.0], [55.4, 690.0], [55.5, 690.0], [55.6, 699.0], [55.7, 701.0], [55.8, 704.0], [55.9, 704.0], [56.0, 706.0], [56.1, 708.0], [56.2, 711.0], [56.3, 711.0], [56.4, 715.0], [56.5, 716.0], [56.6, 720.0], [56.7, 720.0], [56.8, 721.0], [56.9, 721.0], [57.0, 721.0], [57.1, 726.0], [57.2, 727.0], [57.3, 728.0], [57.4, 728.0], [57.5, 730.0], [57.6, 737.0], [57.7, 741.0], [57.8, 741.0], [57.9, 745.0], [58.0, 746.0], [58.1, 746.0], [58.2, 746.0], [58.3, 750.0], [58.4, 750.0], [58.5, 750.0], [58.6, 750.0], [58.7, 752.0], [58.8, 753.0], [58.9, 753.0], [59.0, 759.0], [59.1, 761.0], [59.2, 761.0], [59.3, 761.0], [59.4, 761.0], [59.5, 762.0], [59.6, 762.0], [59.7, 762.0], [59.8, 763.0], [59.9, 764.0], [60.0, 764.0], [60.1, 764.0], [60.2, 765.0], [60.3, 765.0], [60.4, 765.0], [60.5, 766.0], [60.6, 767.0], [60.7, 768.0], [60.8, 768.0], [60.9, 769.0], [61.0, 769.0], [61.1, 770.0], [61.2, 770.0], [61.3, 773.0], [61.4, 775.0], [61.5, 775.0], [61.6, 775.0], [61.7, 777.0], [61.8, 777.0], [61.9, 777.0], [62.0, 779.0], [62.1, 779.0], [62.2, 780.0], [62.3, 780.0], [62.4, 780.0], [62.5, 781.0], [62.6, 782.0], [62.7, 782.0], [62.8, 782.0], [62.9, 784.0], [63.0, 785.0], [63.1, 785.0], [63.2, 786.0], [63.3, 786.0], [63.4, 786.0], [63.5, 786.0], [63.6, 786.0], [63.7, 787.0], [63.8, 787.0], [63.9, 787.0], [64.0, 787.0], [64.1, 788.0], [64.2, 788.0], [64.3, 789.0], [64.4, 789.0], [64.5, 791.0], [64.6, 791.0], [64.7, 792.0], [64.8, 792.0], [64.9, 793.0], [65.0, 793.0], [65.1, 794.0], [65.2, 794.0], [65.3, 794.0], [65.4, 794.0], [65.5, 796.0], [65.6, 796.0], [65.7, 796.0], [65.8, 797.0], [65.9, 797.0], [66.0, 797.0], [66.1, 797.0], [66.2, 799.0], [66.3, 799.0], [66.4, 799.0], [66.5, 799.0], [66.6, 800.0], [66.7, 800.0], [66.8, 800.0], [66.9, 800.0], [67.0, 801.0], [67.1, 801.0], [67.2, 801.0], [67.3, 802.0], [67.4, 802.0], [67.5, 807.0], [67.6, 807.0], [67.7, 807.0], [67.8, 807.0], [67.9, 807.0], [68.0, 807.0], [68.1, 808.0], [68.2, 808.0], [68.3, 808.0], [68.4, 808.0], [68.5, 809.0], [68.6, 810.0], [68.7, 810.0], [68.8, 810.0], [68.9, 811.0], [69.0, 811.0], [69.1, 811.0], [69.2, 812.0], [69.3, 813.0], [69.4, 815.0], [69.5, 815.0], [69.6, 817.0], [69.7, 818.0], [69.8, 818.0], [69.9, 818.0], [70.0, 819.0], [70.1, 819.0], [70.2, 819.0], [70.3, 819.0], [70.4, 821.0], [70.5, 821.0], [70.6, 821.0], [70.7, 822.0], [70.8, 823.0], [70.9, 823.0], [71.0, 823.0], [71.1, 823.0], [71.2, 824.0], [71.3, 824.0], [71.4, 824.0], [71.5, 825.0], [71.6, 826.0], [71.7, 826.0], [71.8, 827.0], [71.9, 827.0], [72.0, 827.0], [72.1, 827.0], [72.2, 828.0], [72.3, 829.0], [72.4, 829.0], [72.5, 829.0], [72.6, 829.0], [72.7, 830.0], [72.8, 830.0], [72.9, 830.0], [73.0, 831.0], [73.1, 831.0], [73.2, 832.0], [73.3, 832.0], [73.4, 833.0], [73.5, 833.0], [73.6, 833.0], [73.7, 835.0], [73.8, 835.0], [73.9, 835.0], [74.0, 835.0], [74.1, 836.0], [74.2, 836.0], [74.3, 837.0], [74.4, 837.0], [74.5, 837.0], [74.6, 837.0], [74.7, 839.0], [74.8, 839.0], [74.9, 839.0], [75.0, 839.0], [75.1, 839.0], [75.2, 841.0], [75.3, 841.0], [75.4, 842.0], [75.5, 842.0], [75.6, 842.0], [75.7, 843.0], [75.8, 843.0], [75.9, 843.0], [76.0, 844.0], [76.1, 846.0], [76.2, 846.0], [76.3, 846.0], [76.4, 848.0], [76.5, 849.0], [76.6, 849.0], [76.7, 849.0], [76.8, 850.0], [76.9, 851.0], [77.0, 851.0], [77.1, 851.0], [77.2, 852.0], [77.3, 853.0], [77.4, 853.0], [77.5, 854.0], [77.6, 855.0], [77.7, 856.0], [77.8, 856.0], [77.9, 856.0], [78.0, 856.0], [78.1, 857.0], [78.2, 857.0], [78.3, 858.0], [78.4, 859.0], [78.5, 859.0], [78.6, 860.0], [78.7, 862.0], [78.8, 862.0], [78.9, 862.0], [79.0, 863.0], [79.1, 863.0], [79.2, 864.0], [79.3, 864.0], [79.4, 865.0], [79.5, 866.0], [79.6, 866.0], [79.7, 866.0], [79.8, 866.0], [79.9, 866.0], [80.0, 866.0], [80.1, 866.0], [80.2, 867.0], [80.3, 868.0], [80.4, 868.0], [80.5, 868.0], [80.6, 868.0], [80.7, 868.0], [80.8, 868.0], [80.9, 869.0], [81.0, 870.0], [81.1, 870.0], [81.2, 870.0], [81.3, 871.0], [81.4, 871.0], [81.5, 872.0], [81.6, 872.0], [81.7, 872.0], [81.8, 872.0], [81.9, 872.0], [82.0, 873.0], [82.1, 877.0], [82.2, 879.0], [82.3, 879.0], [82.4, 880.0], [82.5, 880.0], [82.6, 880.0], [82.7, 880.0], [82.8, 881.0], [82.9, 881.0], [83.0, 881.0], [83.1, 881.0], [83.2, 882.0], [83.3, 884.0], [83.4, 884.0], [83.5, 885.0], [83.6, 886.0], [83.7, 888.0], [83.8, 888.0], [83.9, 888.0], [84.0, 889.0], [84.1, 890.0], [84.2, 890.0], [84.3, 891.0], [84.4, 892.0], [84.5, 892.0], [84.6, 892.0], [84.7, 893.0], [84.8, 894.0], [84.9, 896.0], [85.0, 896.0], [85.1, 896.0], [85.2, 900.0], [85.3, 900.0], [85.4, 900.0], [85.5, 901.0], [85.6, 901.0], [85.7, 901.0], [85.8, 902.0], [85.9, 905.0], [86.0, 906.0], [86.1, 906.0], [86.2, 908.0], [86.3, 909.0], [86.4, 909.0], [86.5, 909.0], [86.6, 913.0], [86.7, 916.0], [86.8, 916.0], [86.9, 917.0], [87.0, 921.0], [87.1, 922.0], [87.2, 922.0], [87.3, 924.0], [87.4, 926.0], [87.5, 929.0], [87.6, 929.0], [87.7, 936.0], [87.8, 938.0], [87.9, 939.0], [88.0, 939.0], [88.1, 940.0], [88.2, 941.0], [88.3, 941.0], [88.4, 941.0], [88.5, 942.0], [88.6, 943.0], [88.7, 943.0], [88.8, 943.0], [88.9, 949.0], [89.0, 949.0], [89.1, 949.0], [89.2, 950.0], [89.3, 952.0], [89.4, 956.0], [89.5, 956.0], [89.6, 957.0], [89.7, 963.0], [89.8, 965.0], [89.9, 965.0], [90.0, 969.0], [90.1, 970.0], [90.2, 970.0], [90.3, 973.0], [90.4, 975.0], [90.5, 976.0], [90.6, 976.0], [90.7, 976.0], [90.8, 980.0], [90.9, 980.0], [91.0, 980.0], [91.1, 982.0], [91.2, 982.0], [91.3, 984.0], [91.4, 984.0], [91.5, 985.0], [91.6, 989.0], [91.7, 989.0], [91.8, 991.0], [91.9, 993.0], [92.0, 997.0], [92.1, 997.0], [92.2, 999.0], [92.3, 1000.0], [92.4, 1003.0], [92.5, 1003.0], [92.6, 1003.0], [92.7, 1004.0], [92.8, 1011.0], [92.9, 1011.0], [93.0, 1012.0], [93.1, 1014.0], [93.2, 1016.0], [93.3, 1016.0], [93.4, 1020.0], [93.5, 1029.0], [93.6, 1029.0], [93.7, 1033.0], [93.8, 1033.0], [93.9, 1034.0], [94.0, 1034.0], [94.1, 1041.0], [94.2, 1043.0], [94.3, 1044.0], [94.4, 1044.0], [94.5, 1048.0], [94.6, 1053.0], [94.7, 1055.0], [94.8, 1055.0], [94.9, 1056.0], [95.0, 1057.0], [95.1, 1057.0], [95.2, 1066.0], [95.3, 1067.0], [95.4, 1071.0], [95.5, 1071.0], [95.6, 1080.0], [95.7, 1082.0], [95.8, 1087.0], [95.9, 1087.0], [96.0, 1087.0], [96.1, 1090.0], [96.2, 1100.0], [96.3, 1100.0], [96.4, 1118.0], [96.5, 1126.0], [96.6, 1126.0], [96.7, 1126.0], [96.8, 1129.0], [96.9, 1138.0], [97.0, 1138.0], [97.1, 1143.0], [97.2, 1165.0], [97.3, 1180.0], [97.4, 1180.0], [97.5, 1221.0], [97.6, 1222.0], [97.7, 1224.0], [97.8, 1224.0], [97.9, 1252.0], [98.0, 1255.0], [98.1, 1260.0], [98.2, 1260.0], [98.3, 1284.0], [98.4, 1353.0], [98.5, 1353.0], [98.6, 1393.0], [98.7, 1439.0], [98.8, 1467.0], [98.9, 1467.0], [99.0, 1493.0], [99.1, 1550.0], [99.2, 1729.0], [99.3, 1729.0], [99.4, 1730.0], [99.5, 1742.0], [99.6, 1809.0], [99.7, 1809.0], [99.8, 1842.0], [99.9, 2060.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 137.0, "series": [{"data": [[0.0, 41.0], [600.0, 35.0], [700.0, 80.0], [800.0, 137.0], [200.0, 63.0], [900.0, 52.0], [1000.0, 29.0], [1100.0, 9.0], [300.0, 63.0], [1200.0, 7.0], [1300.0, 2.0], [1400.0, 3.0], [1500.0, 1.0], [400.0, 93.0], [100.0, 62.0], [1700.0, 3.0], [1800.0, 2.0], [500.0, 52.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 405.0, "series": [{"data": [[0.0, 323.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 405.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.8644578313253, "minX": 1.60505838E12, "maxY": 9.970223325062038, "series": [{"data": [[1.60505838E12, 9.970223325062038], [1.60505844E12, 9.8644578313253]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505844E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 224.66666666666666, "minX": 1.0, "maxY": 1842.0, "series": [{"data": [[4.0, 607.0], [8.0, 386.66666666666663], [2.0, 789.0], [1.0, 797.0], [9.0, 224.66666666666666], [10.0, 591.1220527045765], [5.0, 1353.0], [6.0, 1842.0], [3.0, 786.0], [7.0, 942.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.922448979591838, 592.865306122449]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2566.1833333333334, "minX": 1.60505838E12, "maxY": 998510.05, "series": [{"data": [[1.60505838E12, 998510.05], [1.60505844E12, 738714.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60505838E12, 3103.85], [1.60505844E12, 2566.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505844E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 567.8436724565756, "minX": 1.60505838E12, "maxY": 623.2379518072297, "series": [{"data": [[1.60505838E12, 567.8436724565756], [1.60505844E12, 623.2379518072297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505844E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 566.6898263027297, "minX": 1.60505838E12, "maxY": 622.2771084337346, "series": [{"data": [[1.60505838E12, 566.6898263027297], [1.60505844E12, 622.2771084337346]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505844E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006024096385542167, "minX": 1.60505838E12, "maxY": 0.19602977667493804, "series": [{"data": [[1.60505838E12, 0.19602977667493804], [1.60505844E12, 0.006024096385542167]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505844E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60505838E12, "maxY": 2060.0, "series": [{"data": [[1.60505838E12, 2060.0], [1.60505844E12, 1842.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60505838E12, 7.6359999036788935], [1.60505844E12, 44.92499801516533]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60505838E12, 7.999600038528442], [1.60505844E12, 48.85710041284561]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60505838E12, 7.837999951839446], [1.60505844E12, 47.12549948394298]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60505838E12, 6.0], [1.60505844E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60505838E12, 532.0], [1.60505844E12, 705.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505844E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 96.0, "minX": 1.0, "maxY": 900.0, "series": [{"data": [[32.0, 290.5], [9.0, 900.0], [11.0, 728.0], [12.0, 815.0], [13.0, 807.0], [14.0, 862.0], [15.0, 784.0], [1.0, 96.0], [16.0, 773.5], [17.0, 779.0], [18.0, 607.5], [21.0, 578.0], [22.0, 432.0], [23.0, 397.0], [25.0, 121.0], [26.0, 212.5], [27.0, 245.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 91.0, "minX": 1.0, "maxY": 898.0, "series": [{"data": [[32.0, 290.0], [9.0, 898.0], [11.0, 719.0], [12.0, 813.5], [13.0, 807.0], [14.0, 861.0], [15.0, 783.0], [1.0, 91.0], [16.0, 771.5], [17.0, 778.0], [18.0, 607.0], [21.0, 577.5], [22.0, 431.5], [23.0, 396.0], [25.0, 120.0], [26.0, 212.0], [27.0, 245.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.366666666666666, "minX": 1.60505838E12, "maxY": 6.883333333333334, "series": [{"data": [[1.60505838E12, 6.883333333333334], [1.60505844E12, 5.366666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505844E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.533333333333333, "minX": 1.60505838E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60505838E12, 6.716666666666667], [1.60505844E12, 5.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505844E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.533333333333333, "minX": 1.60505838E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60505838E12, 6.716666666666667], [1.60505844E12, 5.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505844E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.533333333333333, "minX": 1.60505838E12, "maxY": 6.716666666666667, "series": [{"data": [[1.60505838E12, 6.716666666666667], [1.60505844E12, 5.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505844E12, "title": "Total Transactions Per Second"}},
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

