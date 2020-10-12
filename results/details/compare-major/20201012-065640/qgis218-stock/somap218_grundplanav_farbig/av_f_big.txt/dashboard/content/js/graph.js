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
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 9109.0, "series": [{"data": [[0.0, 220.0], [0.1, 220.0], [0.2, 221.0], [0.3, 224.0], [0.4, 224.0], [0.5, 227.0], [0.6, 228.0], [0.7, 230.0], [0.8, 230.0], [0.9, 230.0], [1.0, 232.0], [1.1, 232.0], [1.2, 232.0], [1.3, 232.0], [1.4, 235.0], [1.5, 243.0], [1.6, 243.0], [1.7, 248.0], [1.8, 252.0], [1.9, 252.0], [2.0, 252.0], [2.1, 254.0], [2.2, 257.0], [2.3, 257.0], [2.4, 257.0], [2.5, 258.0], [2.6, 258.0], [2.7, 258.0], [2.8, 260.0], [2.9, 264.0], [3.0, 265.0], [3.1, 265.0], [3.2, 267.0], [3.3, 270.0], [3.4, 270.0], [3.5, 273.0], [3.6, 273.0], [3.7, 275.0], [3.8, 275.0], [3.9, 279.0], [4.0, 281.0], [4.1, 283.0], [4.2, 283.0], [4.3, 292.0], [4.4, 295.0], [4.5, 297.0], [4.6, 297.0], [4.7, 298.0], [4.8, 301.0], [4.9, 305.0], [5.0, 305.0], [5.1, 312.0], [5.2, 314.0], [5.3, 314.0], [5.4, 329.0], [5.5, 329.0], [5.6, 329.0], [5.7, 329.0], [5.8, 332.0], [5.9, 336.0], [6.0, 336.0], [6.1, 336.0], [6.2, 342.0], [6.3, 343.0], [6.4, 346.0], [6.5, 346.0], [6.6, 350.0], [6.7, 353.0], [6.8, 353.0], [6.9, 353.0], [7.0, 354.0], [7.1, 356.0], [7.2, 356.0], [7.3, 358.0], [7.4, 359.0], [7.5, 359.0], [7.6, 359.0], [7.7, 360.0], [7.8, 360.0], [7.9, 361.0], [8.0, 361.0], [8.1, 364.0], [8.2, 368.0], [8.3, 369.0], [8.4, 369.0], [8.5, 371.0], [8.6, 371.0], [8.7, 371.0], [8.8, 372.0], [8.9, 376.0], [9.0, 377.0], [9.1, 377.0], [9.2, 384.0], [9.3, 384.0], [9.4, 385.0], [9.5, 385.0], [9.6, 389.0], [9.7, 391.0], [9.8, 392.0], [9.9, 392.0], [10.0, 393.0], [10.1, 394.0], [10.2, 394.0], [10.3, 394.0], [10.4, 394.0], [10.5, 395.0], [10.6, 395.0], [10.7, 402.0], [10.8, 403.0], [10.9, 404.0], [11.0, 404.0], [11.1, 406.0], [11.2, 406.0], [11.3, 406.0], [11.4, 406.0], [11.5, 406.0], [11.6, 408.0], [11.7, 408.0], [11.8, 409.0], [11.9, 409.0], [12.0, 410.0], [12.1, 410.0], [12.2, 413.0], [12.3, 416.0], [12.4, 416.0], [12.5, 416.0], [12.6, 418.0], [12.7, 420.0], [12.8, 420.0], [12.9, 420.0], [13.0, 421.0], [13.1, 421.0], [13.2, 422.0], [13.3, 422.0], [13.4, 422.0], [13.5, 425.0], [13.6, 425.0], [13.7, 425.0], [13.8, 428.0], [13.9, 428.0], [14.0, 428.0], [14.1, 430.0], [14.2, 433.0], [14.3, 433.0], [14.4, 433.0], [14.5, 433.0], [14.6, 433.0], [14.7, 434.0], [14.8, 434.0], [14.9, 434.0], [15.0, 435.0], [15.1, 435.0], [15.2, 435.0], [15.3, 436.0], [15.4, 438.0], [15.5, 438.0], [15.6, 439.0], [15.7, 439.0], [15.8, 440.0], [15.9, 440.0], [16.0, 442.0], [16.1, 442.0], [16.2, 442.0], [16.3, 442.0], [16.4, 443.0], [16.5, 444.0], [16.6, 445.0], [16.7, 445.0], [16.8, 446.0], [16.9, 446.0], [17.0, 446.0], [17.1, 447.0], [17.2, 447.0], [17.3, 448.0], [17.4, 448.0], [17.5, 449.0], [17.6, 450.0], [17.7, 451.0], [17.8, 451.0], [17.9, 452.0], [18.0, 452.0], [18.1, 453.0], [18.2, 453.0], [18.3, 453.0], [18.4, 454.0], [18.5, 454.0], [18.6, 454.0], [18.7, 454.0], [18.8, 454.0], [18.9, 454.0], [19.0, 455.0], [19.1, 455.0], [19.2, 455.0], [19.3, 455.0], [19.4, 456.0], [19.5, 457.0], [19.6, 457.0], [19.7, 457.0], [19.8, 459.0], [19.9, 461.0], [20.0, 461.0], [20.1, 461.0], [20.2, 463.0], [20.3, 464.0], [20.4, 464.0], [20.5, 465.0], [20.6, 466.0], [20.7, 467.0], [20.8, 467.0], [20.9, 468.0], [21.0, 469.0], [21.1, 469.0], [21.2, 469.0], [21.3, 471.0], [21.4, 471.0], [21.5, 472.0], [21.6, 472.0], [21.7, 474.0], [21.8, 474.0], [21.9, 474.0], [22.0, 476.0], [22.1, 476.0], [22.2, 478.0], [22.3, 478.0], [22.4, 480.0], [22.5, 480.0], [22.6, 480.0], [22.7, 480.0], [22.8, 480.0], [22.9, 481.0], [23.0, 481.0], [23.1, 481.0], [23.2, 483.0], [23.3, 484.0], [23.4, 484.0], [23.5, 485.0], [23.6, 485.0], [23.7, 486.0], [23.8, 486.0], [23.9, 487.0], [24.0, 488.0], [24.1, 489.0], [24.2, 489.0], [24.3, 491.0], [24.4, 494.0], [24.5, 494.0], [24.6, 494.0], [24.7, 494.0], [24.8, 495.0], [24.9, 495.0], [25.0, 495.0], [25.1, 496.0], [25.2, 496.0], [25.3, 496.0], [25.4, 497.0], [25.5, 498.0], [25.6, 498.0], [25.7, 498.0], [25.8, 500.0], [25.9, 500.0], [26.0, 500.0], [26.1, 500.0], [26.2, 501.0], [26.3, 502.0], [26.4, 502.0], [26.5, 502.0], [26.6, 503.0], [26.7, 504.0], [26.8, 504.0], [26.9, 505.0], [27.0, 506.0], [27.1, 507.0], [27.2, 507.0], [27.3, 507.0], [27.4, 507.0], [27.5, 508.0], [27.6, 508.0], [27.7, 510.0], [27.8, 510.0], [27.9, 510.0], [28.0, 510.0], [28.1, 511.0], [28.2, 511.0], [28.3, 513.0], [28.4, 513.0], [28.5, 515.0], [28.6, 516.0], [28.7, 516.0], [28.8, 519.0], [28.9, 520.0], [29.0, 521.0], [29.1, 521.0], [29.2, 522.0], [29.3, 523.0], [29.4, 523.0], [29.5, 523.0], [29.6, 523.0], [29.7, 524.0], [29.8, 524.0], [29.9, 524.0], [30.0, 525.0], [30.1, 525.0], [30.2, 525.0], [30.3, 526.0], [30.4, 527.0], [30.5, 528.0], [30.6, 528.0], [30.7, 528.0], [30.8, 529.0], [30.9, 531.0], [31.0, 531.0], [31.1, 532.0], [31.2, 535.0], [31.3, 538.0], [31.4, 538.0], [31.5, 540.0], [31.6, 540.0], [31.7, 540.0], [31.8, 540.0], [31.9, 540.0], [32.0, 541.0], [32.1, 541.0], [32.2, 544.0], [32.3, 544.0], [32.4, 544.0], [32.5, 544.0], [32.6, 545.0], [32.7, 545.0], [32.8, 546.0], [32.9, 546.0], [33.0, 549.0], [33.1, 549.0], [33.2, 550.0], [33.3, 550.0], [33.4, 551.0], [33.5, 551.0], [33.6, 551.0], [33.7, 551.0], [33.8, 552.0], [33.9, 552.0], [34.0, 552.0], [34.1, 553.0], [34.2, 554.0], [34.3, 555.0], [34.4, 555.0], [34.5, 555.0], [34.6, 557.0], [34.7, 558.0], [34.8, 558.0], [34.9, 558.0], [35.0, 558.0], [35.1, 558.0], [35.2, 559.0], [35.3, 559.0], [35.4, 560.0], [35.5, 560.0], [35.6, 561.0], [35.7, 561.0], [35.8, 561.0], [35.9, 561.0], [36.0, 562.0], [36.1, 562.0], [36.2, 563.0], [36.3, 563.0], [36.4, 563.0], [36.5, 563.0], [36.6, 566.0], [36.7, 566.0], [36.8, 566.0], [36.9, 566.0], [37.0, 566.0], [37.1, 568.0], [37.2, 568.0], [37.3, 569.0], [37.4, 569.0], [37.5, 570.0], [37.6, 573.0], [37.7, 573.0], [37.8, 573.0], [37.9, 574.0], [38.0, 575.0], [38.1, 575.0], [38.2, 575.0], [38.3, 576.0], [38.4, 579.0], [38.5, 579.0], [38.6, 579.0], [38.7, 583.0], [38.8, 583.0], [38.9, 583.0], [39.0, 584.0], [39.1, 584.0], [39.2, 586.0], [39.3, 586.0], [39.4, 587.0], [39.5, 590.0], [39.6, 592.0], [39.7, 592.0], [39.8, 593.0], [39.9, 595.0], [40.0, 598.0], [40.1, 598.0], [40.2, 599.0], [40.3, 601.0], [40.4, 601.0], [40.5, 601.0], [40.6, 603.0], [40.7, 603.0], [40.8, 603.0], [40.9, 605.0], [41.0, 608.0], [41.1, 610.0], [41.2, 610.0], [41.3, 611.0], [41.4, 612.0], [41.5, 613.0], [41.6, 613.0], [41.7, 615.0], [41.8, 615.0], [41.9, 615.0], [42.0, 616.0], [42.1, 616.0], [42.2, 616.0], [42.3, 616.0], [42.4, 619.0], [42.5, 619.0], [42.6, 619.0], [42.7, 619.0], [42.8, 621.0], [42.9, 623.0], [43.0, 625.0], [43.1, 625.0], [43.2, 627.0], [43.3, 630.0], [43.4, 630.0], [43.5, 630.0], [43.6, 630.0], [43.7, 631.0], [43.8, 631.0], [43.9, 633.0], [44.0, 633.0], [44.1, 635.0], [44.2, 635.0], [44.3, 635.0], [44.4, 636.0], [44.5, 637.0], [44.6, 637.0], [44.7, 637.0], [44.8, 637.0], [44.9, 637.0], [45.0, 637.0], [45.1, 638.0], [45.2, 639.0], [45.3, 639.0], [45.4, 642.0], [45.5, 643.0], [45.6, 644.0], [45.7, 644.0], [45.8, 646.0], [45.9, 646.0], [46.0, 646.0], [46.1, 646.0], [46.2, 647.0], [46.3, 650.0], [46.4, 650.0], [46.5, 650.0], [46.6, 651.0], [46.7, 651.0], [46.8, 651.0], [46.9, 655.0], [47.0, 657.0], [47.1, 658.0], [47.2, 658.0], [47.3, 659.0], [47.4, 659.0], [47.5, 659.0], [47.6, 659.0], [47.7, 663.0], [47.8, 663.0], [47.9, 666.0], [48.0, 666.0], [48.1, 667.0], [48.2, 668.0], [48.3, 669.0], [48.4, 669.0], [48.5, 670.0], [48.6, 673.0], [48.7, 673.0], [48.8, 675.0], [48.9, 677.0], [49.0, 679.0], [49.1, 679.0], [49.2, 679.0], [49.3, 681.0], [49.4, 683.0], [49.5, 683.0], [49.6, 685.0], [49.7, 689.0], [49.8, 690.0], [49.9, 690.0], [50.0, 694.0], [50.1, 695.0], [50.2, 695.0], [50.3, 698.0], [50.4, 698.0], [50.5, 700.0], [50.6, 700.0], [50.7, 701.0], [50.8, 701.0], [50.9, 701.0], [51.0, 701.0], [51.1, 704.0], [51.2, 704.0], [51.3, 705.0], [51.4, 705.0], [51.5, 707.0], [51.6, 708.0], [51.7, 708.0], [51.8, 712.0], [51.9, 714.0], [52.0, 714.0], [52.1, 714.0], [52.2, 718.0], [52.3, 721.0], [52.4, 722.0], [52.5, 722.0], [52.6, 725.0], [52.7, 725.0], [52.8, 725.0], [52.9, 725.0], [53.0, 730.0], [53.1, 730.0], [53.2, 731.0], [53.3, 731.0], [53.4, 732.0], [53.5, 732.0], [53.6, 732.0], [53.7, 733.0], [53.8, 733.0], [53.9, 737.0], [54.0, 737.0], [54.1, 737.0], [54.2, 740.0], [54.3, 740.0], [54.4, 740.0], [54.5, 742.0], [54.6, 744.0], [54.7, 746.0], [54.8, 746.0], [54.9, 749.0], [55.0, 749.0], [55.1, 749.0], [55.2, 751.0], [55.3, 753.0], [55.4, 755.0], [55.5, 755.0], [55.6, 756.0], [55.7, 757.0], [55.8, 758.0], [55.9, 758.0], [56.0, 758.0], [56.1, 758.0], [56.2, 759.0], [56.3, 759.0], [56.4, 759.0], [56.5, 760.0], [56.6, 763.0], [56.7, 763.0], [56.8, 763.0], [56.9, 764.0], [57.0, 764.0], [57.1, 768.0], [57.2, 769.0], [57.3, 770.0], [57.4, 770.0], [57.5, 773.0], [57.6, 774.0], [57.7, 774.0], [57.8, 774.0], [57.9, 778.0], [58.0, 780.0], [58.1, 787.0], [58.2, 787.0], [58.3, 793.0], [58.4, 793.0], [58.5, 793.0], [58.6, 794.0], [58.7, 795.0], [58.8, 797.0], [58.9, 797.0], [59.0, 799.0], [59.1, 799.0], [59.2, 802.0], [59.3, 802.0], [59.4, 803.0], [59.5, 804.0], [59.6, 809.0], [59.7, 809.0], [59.8, 811.0], [59.9, 811.0], [60.0, 812.0], [60.1, 812.0], [60.2, 814.0], [60.3, 820.0], [60.4, 820.0], [60.5, 821.0], [60.6, 823.0], [60.7, 823.0], [60.8, 823.0], [60.9, 824.0], [61.0, 826.0], [61.1, 828.0], [61.2, 828.0], [61.3, 831.0], [61.4, 831.0], [61.5, 838.0], [61.6, 838.0], [61.7, 840.0], [61.8, 840.0], [61.9, 840.0], [62.0, 843.0], [62.1, 843.0], [62.2, 850.0], [62.3, 850.0], [62.4, 852.0], [62.5, 854.0], [62.6, 858.0], [62.7, 858.0], [62.8, 859.0], [62.9, 860.0], [63.0, 860.0], [63.1, 860.0], [63.2, 864.0], [63.3, 864.0], [63.4, 864.0], [63.5, 865.0], [63.6, 866.0], [63.7, 874.0], [63.8, 874.0], [63.9, 882.0], [64.0, 886.0], [64.1, 891.0], [64.2, 891.0], [64.3, 893.0], [64.4, 894.0], [64.5, 895.0], [64.6, 895.0], [64.7, 896.0], [64.8, 896.0], [64.9, 898.0], [65.0, 898.0], [65.1, 898.0], [65.2, 900.0], [65.3, 900.0], [65.4, 901.0], [65.5, 902.0], [65.6, 903.0], [65.7, 903.0], [65.8, 903.0], [65.9, 903.0], [66.0, 903.0], [66.1, 903.0], [66.2, 907.0], [66.3, 911.0], [66.4, 915.0], [66.5, 915.0], [66.6, 915.0], [66.7, 917.0], [66.8, 917.0], [66.9, 917.0], [67.0, 921.0], [67.1, 924.0], [67.2, 924.0], [67.3, 927.0], [67.4, 931.0], [67.5, 935.0], [67.6, 935.0], [67.7, 938.0], [67.8, 941.0], [67.9, 942.0], [68.0, 942.0], [68.1, 944.0], [68.2, 948.0], [68.3, 951.0], [68.4, 951.0], [68.5, 952.0], [68.6, 955.0], [68.7, 955.0], [68.8, 956.0], [68.9, 961.0], [69.0, 961.0], [69.1, 961.0], [69.2, 967.0], [69.3, 975.0], [69.4, 980.0], [69.5, 980.0], [69.6, 980.0], [69.7, 981.0], [69.8, 986.0], [69.9, 986.0], [70.0, 987.0], [70.1, 989.0], [70.2, 989.0], [70.3, 991.0], [70.4, 993.0], [70.5, 995.0], [70.6, 995.0], [70.7, 995.0], [70.8, 996.0], [70.9, 999.0], [71.0, 999.0], [71.1, 1000.0], [71.2, 1004.0], [71.3, 1005.0], [71.4, 1005.0], [71.5, 1006.0], [71.6, 1007.0], [71.7, 1007.0], [71.8, 1009.0], [71.9, 1010.0], [72.0, 1020.0], [72.1, 1020.0], [72.2, 1022.0], [72.3, 1029.0], [72.4, 1037.0], [72.5, 1037.0], [72.6, 1037.0], [72.7, 1040.0], [72.8, 1041.0], [72.9, 1041.0], [73.0, 1042.0], [73.1, 1042.0], [73.2, 1044.0], [73.3, 1044.0], [73.4, 1045.0], [73.5, 1047.0], [73.6, 1047.0], [73.7, 1050.0], [73.8, 1054.0], [73.9, 1059.0], [74.0, 1059.0], [74.1, 1060.0], [74.2, 1061.0], [74.3, 1062.0], [74.4, 1062.0], [74.5, 1065.0], [74.6, 1067.0], [74.7, 1067.0], [74.8, 1067.0], [74.9, 1068.0], [75.0, 1070.0], [75.1, 1070.0], [75.2, 1072.0], [75.3, 1077.0], [75.4, 1081.0], [75.5, 1081.0], [75.6, 1081.0], [75.7, 1087.0], [75.8, 1092.0], [75.9, 1092.0], [76.0, 1093.0], [76.1, 1095.0], [76.2, 1105.0], [76.3, 1105.0], [76.4, 1105.0], [76.5, 1108.0], [76.6, 1108.0], [76.7, 1108.0], [76.8, 1109.0], [76.9, 1111.0], [77.0, 1111.0], [77.1, 1116.0], [77.2, 1116.0], [77.3, 1118.0], [77.4, 1118.0], [77.5, 1121.0], [77.6, 1122.0], [77.7, 1129.0], [77.8, 1129.0], [77.9, 1132.0], [78.0, 1141.0], [78.1, 1142.0], [78.2, 1142.0], [78.3, 1147.0], [78.4, 1150.0], [78.5, 1150.0], [78.6, 1165.0], [78.7, 1166.0], [78.8, 1168.0], [78.9, 1168.0], [79.0, 1173.0], [79.1, 1175.0], [79.2, 1184.0], [79.3, 1184.0], [79.4, 1189.0], [79.5, 1191.0], [79.6, 1195.0], [79.7, 1195.0], [79.8, 1197.0], [79.9, 1200.0], [80.0, 1203.0], [80.1, 1203.0], [80.2, 1203.0], [80.3, 1204.0], [80.4, 1204.0], [80.5, 1208.0], [80.6, 1214.0], [80.7, 1214.0], [80.8, 1214.0], [80.9, 1215.0], [81.0, 1219.0], [81.1, 1223.0], [81.2, 1223.0], [81.3, 1229.0], [81.4, 1233.0], [81.5, 1233.0], [81.6, 1233.0], [81.7, 1236.0], [81.8, 1240.0], [81.9, 1240.0], [82.0, 1243.0], [82.1, 1243.0], [82.2, 1257.0], [82.3, 1257.0], [82.4, 1258.0], [82.5, 1261.0], [82.6, 1265.0], [82.7, 1265.0], [82.8, 1274.0], [82.9, 1276.0], [83.0, 1276.0], [83.1, 1276.0], [83.2, 1283.0], [83.3, 1289.0], [83.4, 1289.0], [83.5, 1290.0], [83.6, 1300.0], [83.7, 1307.0], [83.8, 1307.0], [83.9, 1307.0], [84.0, 1307.0], [84.1, 1316.0], [84.2, 1316.0], [84.3, 1317.0], [84.4, 1317.0], [84.5, 1319.0], [84.6, 1319.0], [84.7, 1320.0], [84.8, 1322.0], [84.9, 1338.0], [85.0, 1338.0], [85.1, 1341.0], [85.2, 1343.0], [85.3, 1343.0], [85.4, 1355.0], [85.5, 1370.0], [85.6, 1374.0], [85.7, 1374.0], [85.8, 1375.0], [85.9, 1378.0], [86.0, 1386.0], [86.1, 1386.0], [86.2, 1386.0], [86.3, 1386.0], [86.4, 1396.0], [86.5, 1396.0], [86.6, 1398.0], [86.7, 1416.0], [86.8, 1416.0], [86.9, 1418.0], [87.0, 1418.0], [87.1, 1426.0], [87.2, 1426.0], [87.3, 1438.0], [87.4, 1441.0], [87.5, 1459.0], [87.6, 1459.0], [87.7, 1463.0], [87.8, 1464.0], [87.9, 1464.0], [88.0, 1464.0], [88.1, 1470.0], [88.2, 1478.0], [88.3, 1484.0], [88.4, 1484.0], [88.5, 1486.0], [88.6, 1491.0], [88.7, 1491.0], [88.8, 1494.0], [88.9, 1497.0], [89.0, 1505.0], [89.1, 1505.0], [89.2, 1511.0], [89.3, 1512.0], [89.4, 1516.0], [89.5, 1516.0], [89.6, 1518.0], [89.7, 1521.0], [89.8, 1527.0], [89.9, 1527.0], [90.0, 1527.0], [90.1, 1533.0], [90.2, 1533.0], [90.3, 1537.0], [90.4, 1542.0], [90.5, 1544.0], [90.6, 1544.0], [90.7, 1552.0], [90.8, 1558.0], [90.9, 1562.0], [91.0, 1562.0], [91.1, 1579.0], [91.2, 1590.0], [91.3, 1591.0], [91.4, 1591.0], [91.5, 1601.0], [91.6, 1612.0], [91.7, 1612.0], [91.8, 1614.0], [91.9, 1627.0], [92.0, 1628.0], [92.1, 1628.0], [92.2, 1636.0], [92.3, 1642.0], [92.4, 1653.0], [92.5, 1653.0], [92.6, 1661.0], [92.7, 1662.0], [92.8, 1685.0], [92.9, 1685.0], [93.0, 1685.0], [93.1, 1699.0], [93.2, 1701.0], [93.3, 1701.0], [93.4, 1714.0], [93.5, 1718.0], [93.6, 1718.0], [93.7, 1726.0], [93.8, 1730.0], [93.9, 1751.0], [94.0, 1751.0], [94.1, 1764.0], [94.2, 1795.0], [94.3, 1802.0], [94.4, 1802.0], [94.5, 1803.0], [94.6, 1805.0], [94.7, 1824.0], [94.8, 1824.0], [94.9, 1831.0], [95.0, 1846.0], [95.1, 1846.0], [95.2, 1879.0], [95.3, 1881.0], [95.4, 1882.0], [95.5, 1882.0], [95.6, 1895.0], [95.7, 1928.0], [95.8, 1964.0], [95.9, 1964.0], [96.0, 2014.0], [96.1, 2021.0], [96.2, 2032.0], [96.3, 2032.0], [96.4, 2062.0], [96.5, 2077.0], [96.6, 2108.0], [96.7, 2108.0], [96.8, 2114.0], [96.9, 2177.0], [97.0, 2177.0], [97.1, 2192.0], [97.2, 2226.0], [97.3, 2240.0], [97.4, 2240.0], [97.5, 2292.0], [97.6, 2328.0], [97.7, 2344.0], [97.8, 2344.0], [97.9, 2404.0], [98.0, 2490.0], [98.1, 2508.0], [98.2, 2508.0], [98.3, 2604.0], [98.4, 2721.0], [98.5, 2721.0], [98.6, 2766.0], [98.7, 2796.0], [98.8, 2951.0], [98.9, 2951.0], [99.0, 3087.0], [99.1, 3133.0], [99.2, 3241.0], [99.3, 3241.0], [99.4, 5694.0], [99.5, 5824.0], [99.6, 5956.0], [99.7, 5956.0], [99.8, 7261.0], [99.9, 9109.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 111.0, "series": [{"data": [[9100.0, 1.0], [600.0, 75.0], [700.0, 64.0], [800.0, 44.0], [900.0, 43.0], [1000.0, 38.0], [1100.0, 27.0], [1200.0, 27.0], [1300.0, 23.0], [1400.0, 17.0], [1500.0, 18.0], [1600.0, 13.0], [1700.0, 8.0], [1800.0, 10.0], [1900.0, 2.0], [2000.0, 5.0], [2100.0, 4.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 35.0], [3200.0, 1.0], [300.0, 43.0], [5600.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [400.0, 111.0], [7200.0, 1.0], [500.0, 107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 81.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 192.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 81.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.899777282850778, "minX": 1.60248594E12, "maxY": 10.0, "series": [{"data": [[1.602486E12, 9.899777282850778], [1.60248594E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 471.0, "minX": 1.0, "maxY": 5956.0, "series": [{"data": [[8.0, 471.0], [4.0, 5694.0], [2.0, 5956.0], [1.0, 1418.0], [9.0, 502.0], [10.0, 864.4641873278234], [5.0, 551.0], [6.0, 1054.0], [3.0, 3241.0], [7.0, 698.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 880.525170068027]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2164.3166666666666, "minX": 1.60248594E12, "maxY": 1270337.9666666666, "series": [{"data": [[1.602486E12, 1270337.9666666666], [1.60248594E12, 925314.5166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602486E12, 3358.7166666666667], [1.60248594E12, 2164.3166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 861.2293986636973, "minX": 1.60248594E12, "maxY": 910.8181818181814, "series": [{"data": [[1.602486E12, 861.2293986636973], [1.60248594E12, 910.8181818181814]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 859.7706013363033, "minX": 1.60248594E12, "maxY": 909.4020979020981, "series": [{"data": [[1.602486E12, 859.7706013363033], [1.60248594E12, 909.4020979020981]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015590200445434299, "minX": 1.60248594E12, "maxY": 0.3601398601398603, "series": [{"data": [[1.602486E12, 0.015590200445434299], [1.60248594E12, 0.3601398601398603]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.60248594E12, "maxY": 9109.0, "series": [{"data": [[1.602486E12, 9109.0], [1.60248594E12, 7261.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602486E12, 227.04999989271164], [1.60248594E12, 247.82599849462508]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602486E12, 227.45500004291534], [1.60248594E12, 253.50860060214995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602486E12, 227.27499994635582], [1.60248594E12, 250.98299924731253]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602486E12, 220.0], [1.60248594E12, 232.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602486E12, 651.0], [1.60248594E12, 759.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 329.0, "minX": 1.0, "maxY": 1463.0, "series": [{"data": [[8.0, 899.5], [9.0, 841.5], [10.0, 862.0], [11.0, 630.0], [3.0, 1463.0], [12.0, 815.5], [13.0, 920.5], [14.0, 722.0], [15.0, 544.0], [16.0, 618.0], [4.0, 799.0], [1.0, 1418.0], [17.0, 670.0], [18.0, 509.0], [20.0, 487.5], [5.0, 1108.0], [21.0, 329.0], [6.0, 1414.0], [7.0, 701.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 328.0, "minX": 1.0, "maxY": 1461.0, "series": [{"data": [[8.0, 898.5], [9.0, 840.5], [10.0, 861.5], [11.0, 627.5], [3.0, 1461.0], [12.0, 814.5], [13.0, 919.5], [14.0, 721.0], [15.0, 543.0], [16.0, 617.5], [4.0, 790.5], [1.0, 1418.0], [17.0, 669.0], [18.0, 508.0], [20.0, 487.5], [5.0, 1107.0], [21.0, 328.0], [6.0, 1412.0], [7.0, 701.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.60248594E12, "maxY": 7.316666666666666, "series": [{"data": [[1.602486E12, 7.316666666666666], [1.60248594E12, 4.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60248594E12, "maxY": 7.483333333333333, "series": [{"data": [[1.602486E12, 7.483333333333333], [1.60248594E12, 4.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60248594E12, "maxY": 7.483333333333333, "series": [{"data": [[1.602486E12, 7.483333333333333], [1.60248594E12, 4.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.60248594E12, "maxY": 7.483333333333333, "series": [{"data": [[1.602486E12, 7.483333333333333], [1.60248594E12, 4.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602486E12, "title": "Total Transactions Per Second"}},
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

