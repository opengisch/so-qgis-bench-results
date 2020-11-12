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
        data: {"result": {"minY": 225.0, "minX": 0.0, "maxY": 9059.0, "series": [{"data": [[0.0, 225.0], [0.1, 225.0], [0.2, 228.0], [0.3, 233.0], [0.4, 233.0], [0.5, 234.0], [0.6, 235.0], [0.7, 237.0], [0.8, 237.0], [0.9, 239.0], [1.0, 246.0], [1.1, 246.0], [1.2, 246.0], [1.3, 246.0], [1.4, 247.0], [1.5, 249.0], [1.6, 249.0], [1.7, 251.0], [1.8, 252.0], [1.9, 252.0], [2.0, 254.0], [2.1, 255.0], [2.2, 256.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 259.0], [2.7, 259.0], [2.8, 265.0], [2.9, 266.0], [3.0, 269.0], [3.1, 269.0], [3.2, 271.0], [3.3, 271.0], [3.4, 271.0], [3.5, 271.0], [3.6, 276.0], [3.7, 277.0], [3.8, 277.0], [3.9, 278.0], [4.0, 278.0], [4.1, 291.0], [4.2, 291.0], [4.3, 294.0], [4.4, 294.0], [4.5, 299.0], [4.6, 299.0], [4.7, 301.0], [4.8, 303.0], [4.9, 304.0], [5.0, 304.0], [5.1, 306.0], [5.2, 312.0], [5.3, 312.0], [5.4, 312.0], [5.5, 327.0], [5.6, 330.0], [5.7, 330.0], [5.8, 338.0], [5.9, 338.0], [6.0, 339.0], [6.1, 339.0], [6.2, 342.0], [6.3, 343.0], [6.4, 344.0], [6.5, 344.0], [6.6, 345.0], [6.7, 347.0], [6.8, 347.0], [6.9, 348.0], [7.0, 349.0], [7.1, 349.0], [7.2, 349.0], [7.3, 350.0], [7.4, 353.0], [7.5, 353.0], [7.6, 353.0], [7.7, 358.0], [7.8, 359.0], [7.9, 359.0], [8.0, 359.0], [8.1, 359.0], [8.2, 359.0], [8.3, 360.0], [8.4, 360.0], [8.5, 361.0], [8.6, 363.0], [8.7, 363.0], [8.8, 363.0], [8.9, 363.0], [9.0, 363.0], [9.1, 363.0], [9.2, 363.0], [9.3, 364.0], [9.4, 365.0], [9.5, 365.0], [9.6, 366.0], [9.7, 366.0], [9.8, 368.0], [9.9, 368.0], [10.0, 368.0], [10.1, 369.0], [10.2, 369.0], [10.3, 369.0], [10.4, 371.0], [10.5, 375.0], [10.6, 375.0], [10.7, 375.0], [10.8, 377.0], [10.9, 377.0], [11.0, 377.0], [11.1, 377.0], [11.2, 379.0], [11.3, 380.0], [11.4, 380.0], [11.5, 381.0], [11.6, 381.0], [11.7, 381.0], [11.8, 387.0], [11.9, 388.0], [12.0, 388.0], [12.1, 388.0], [12.2, 391.0], [12.3, 391.0], [12.4, 393.0], [12.5, 393.0], [12.6, 393.0], [12.7, 394.0], [12.8, 395.0], [12.9, 395.0], [13.0, 395.0], [13.1, 395.0], [13.2, 396.0], [13.3, 396.0], [13.4, 396.0], [13.5, 398.0], [13.6, 398.0], [13.7, 398.0], [13.8, 399.0], [13.9, 399.0], [14.0, 399.0], [14.1, 400.0], [14.2, 401.0], [14.3, 405.0], [14.4, 405.0], [14.5, 407.0], [14.6, 408.0], [14.7, 408.0], [14.8, 408.0], [14.9, 409.0], [15.0, 412.0], [15.1, 412.0], [15.2, 412.0], [15.3, 412.0], [15.4, 413.0], [15.5, 413.0], [15.6, 414.0], [15.7, 414.0], [15.8, 415.0], [15.9, 415.0], [16.0, 415.0], [16.1, 415.0], [16.2, 415.0], [16.3, 415.0], [16.4, 416.0], [16.5, 418.0], [16.6, 418.0], [16.7, 418.0], [16.8, 418.0], [16.9, 418.0], [17.0, 418.0], [17.1, 420.0], [17.2, 421.0], [17.3, 422.0], [17.4, 422.0], [17.5, 422.0], [17.6, 423.0], [17.7, 423.0], [17.8, 423.0], [17.9, 424.0], [18.0, 427.0], [18.1, 428.0], [18.2, 428.0], [18.3, 429.0], [18.4, 430.0], [18.5, 430.0], [18.6, 432.0], [18.7, 433.0], [18.8, 433.0], [18.9, 433.0], [19.0, 434.0], [19.1, 434.0], [19.2, 436.0], [19.3, 436.0], [19.4, 437.0], [19.5, 438.0], [19.6, 439.0], [19.7, 439.0], [19.8, 440.0], [19.9, 440.0], [20.0, 440.0], [20.1, 441.0], [20.2, 442.0], [20.3, 442.0], [20.4, 442.0], [20.5, 443.0], [20.6, 444.0], [20.7, 444.0], [20.8, 444.0], [20.9, 445.0], [21.0, 445.0], [21.1, 446.0], [21.2, 446.0], [21.3, 450.0], [21.4, 450.0], [21.5, 450.0], [21.6, 450.0], [21.7, 451.0], [21.8, 452.0], [21.9, 452.0], [22.0, 453.0], [22.1, 453.0], [22.2, 453.0], [22.3, 453.0], [22.4, 456.0], [22.5, 456.0], [22.6, 457.0], [22.7, 457.0], [22.8, 458.0], [22.9, 461.0], [23.0, 462.0], [23.1, 462.0], [23.2, 466.0], [23.3, 467.0], [23.4, 467.0], [23.5, 467.0], [23.6, 468.0], [23.7, 469.0], [23.8, 469.0], [23.9, 470.0], [24.0, 470.0], [24.1, 470.0], [24.2, 470.0], [24.3, 470.0], [24.4, 471.0], [24.5, 473.0], [24.6, 473.0], [24.7, 474.0], [24.8, 475.0], [24.9, 478.0], [25.0, 478.0], [25.1, 478.0], [25.2, 479.0], [25.3, 479.0], [25.4, 479.0], [25.5, 480.0], [25.6, 480.0], [25.7, 480.0], [25.8, 481.0], [25.9, 484.0], [26.0, 484.0], [26.1, 484.0], [26.2, 485.0], [26.3, 487.0], [26.4, 488.0], [26.5, 488.0], [26.6, 491.0], [26.7, 492.0], [26.8, 492.0], [26.9, 493.0], [27.0, 496.0], [27.1, 497.0], [27.2, 497.0], [27.3, 498.0], [27.4, 498.0], [27.5, 500.0], [27.6, 500.0], [27.7, 500.0], [27.8, 501.0], [27.9, 502.0], [28.0, 502.0], [28.1, 505.0], [28.2, 506.0], [28.3, 506.0], [28.4, 506.0], [28.5, 507.0], [28.6, 507.0], [28.7, 507.0], [28.8, 509.0], [28.9, 510.0], [29.0, 510.0], [29.1, 510.0], [29.2, 510.0], [29.3, 511.0], [29.4, 511.0], [29.5, 511.0], [29.6, 512.0], [29.7, 514.0], [29.8, 515.0], [29.9, 515.0], [30.0, 516.0], [30.1, 519.0], [30.2, 519.0], [30.3, 520.0], [30.4, 521.0], [30.5, 521.0], [30.6, 521.0], [30.7, 522.0], [30.8, 523.0], [30.9, 524.0], [31.0, 524.0], [31.1, 525.0], [31.2, 525.0], [31.3, 526.0], [31.4, 526.0], [31.5, 528.0], [31.6, 530.0], [31.7, 530.0], [31.8, 532.0], [31.9, 533.0], [32.0, 533.0], [32.1, 533.0], [32.2, 534.0], [32.3, 535.0], [32.4, 536.0], [32.5, 536.0], [32.6, 537.0], [32.7, 538.0], [32.8, 538.0], [32.9, 538.0], [33.0, 540.0], [33.1, 542.0], [33.2, 543.0], [33.3, 543.0], [33.4, 546.0], [33.5, 546.0], [33.6, 546.0], [33.7, 546.0], [33.8, 546.0], [33.9, 547.0], [34.0, 547.0], [34.1, 550.0], [34.2, 553.0], [34.3, 555.0], [34.4, 555.0], [34.5, 556.0], [34.6, 558.0], [34.7, 558.0], [34.8, 558.0], [34.9, 559.0], [35.0, 562.0], [35.1, 562.0], [35.2, 562.0], [35.3, 564.0], [35.4, 564.0], [35.5, 564.0], [35.6, 565.0], [35.7, 566.0], [35.8, 567.0], [35.9, 567.0], [36.0, 568.0], [36.1, 572.0], [36.2, 573.0], [36.3, 573.0], [36.4, 574.0], [36.5, 575.0], [36.6, 575.0], [36.7, 575.0], [36.8, 577.0], [36.9, 580.0], [37.0, 580.0], [37.1, 580.0], [37.2, 580.0], [37.3, 581.0], [37.4, 581.0], [37.5, 582.0], [37.6, 585.0], [37.7, 586.0], [37.8, 586.0], [37.9, 586.0], [38.0, 587.0], [38.1, 588.0], [38.2, 588.0], [38.3, 589.0], [38.4, 591.0], [38.5, 591.0], [38.6, 592.0], [38.7, 592.0], [38.8, 592.0], [38.9, 592.0], [39.0, 593.0], [39.1, 593.0], [39.2, 597.0], [39.3, 597.0], [39.4, 597.0], [39.5, 597.0], [39.6, 600.0], [39.7, 600.0], [39.8, 601.0], [39.9, 602.0], [40.0, 603.0], [40.1, 603.0], [40.2, 604.0], [40.3, 605.0], [40.4, 605.0], [40.5, 606.0], [40.6, 607.0], [40.7, 607.0], [40.8, 607.0], [40.9, 608.0], [41.0, 608.0], [41.1, 609.0], [41.2, 609.0], [41.3, 609.0], [41.4, 611.0], [41.5, 611.0], [41.6, 611.0], [41.7, 611.0], [41.8, 612.0], [41.9, 612.0], [42.0, 612.0], [42.1, 613.0], [42.2, 615.0], [42.3, 615.0], [42.4, 616.0], [42.5, 616.0], [42.6, 616.0], [42.7, 616.0], [42.8, 617.0], [42.9, 618.0], [43.0, 619.0], [43.1, 619.0], [43.2, 620.0], [43.3, 620.0], [43.4, 620.0], [43.5, 623.0], [43.6, 624.0], [43.7, 624.0], [43.8, 624.0], [43.9, 626.0], [44.0, 627.0], [44.1, 627.0], [44.2, 627.0], [44.3, 628.0], [44.4, 629.0], [44.5, 630.0], [44.6, 630.0], [44.7, 631.0], [44.8, 633.0], [44.9, 634.0], [45.0, 634.0], [45.1, 636.0], [45.2, 637.0], [45.3, 637.0], [45.4, 637.0], [45.5, 639.0], [45.6, 640.0], [45.7, 640.0], [45.8, 641.0], [45.9, 642.0], [46.0, 642.0], [46.1, 642.0], [46.2, 643.0], [46.3, 643.0], [46.4, 646.0], [46.5, 646.0], [46.6, 647.0], [46.7, 652.0], [46.8, 652.0], [46.9, 652.0], [47.0, 654.0], [47.1, 654.0], [47.2, 654.0], [47.3, 655.0], [47.4, 656.0], [47.5, 656.0], [47.6, 656.0], [47.7, 659.0], [47.8, 659.0], [47.9, 660.0], [48.0, 660.0], [48.1, 662.0], [48.2, 663.0], [48.3, 665.0], [48.4, 665.0], [48.5, 667.0], [48.6, 667.0], [48.7, 667.0], [48.8, 668.0], [48.9, 668.0], [49.0, 669.0], [49.1, 669.0], [49.2, 670.0], [49.3, 671.0], [49.4, 671.0], [49.5, 671.0], [49.6, 672.0], [49.7, 673.0], [49.8, 675.0], [49.9, 675.0], [50.0, 675.0], [50.1, 675.0], [50.2, 675.0], [50.3, 678.0], [50.4, 678.0], [50.5, 679.0], [50.6, 679.0], [50.7, 679.0], [50.8, 681.0], [50.9, 684.0], [51.0, 684.0], [51.1, 684.0], [51.2, 685.0], [51.3, 689.0], [51.4, 689.0], [51.5, 690.0], [51.6, 691.0], [51.7, 691.0], [51.8, 693.0], [51.9, 694.0], [52.0, 696.0], [52.1, 696.0], [52.2, 698.0], [52.3, 700.0], [52.4, 702.0], [52.5, 702.0], [52.6, 703.0], [52.7, 704.0], [52.8, 708.0], [52.9, 708.0], [53.0, 709.0], [53.1, 715.0], [53.2, 720.0], [53.3, 720.0], [53.4, 720.0], [53.5, 721.0], [53.6, 721.0], [53.7, 723.0], [53.8, 725.0], [53.9, 729.0], [54.0, 729.0], [54.1, 730.0], [54.2, 730.0], [54.3, 731.0], [54.4, 731.0], [54.5, 732.0], [54.6, 735.0], [54.7, 736.0], [54.8, 736.0], [54.9, 741.0], [55.0, 742.0], [55.1, 742.0], [55.2, 742.0], [55.3, 743.0], [55.4, 744.0], [55.5, 744.0], [55.6, 745.0], [55.7, 746.0], [55.8, 748.0], [55.9, 748.0], [56.0, 748.0], [56.1, 750.0], [56.2, 750.0], [56.3, 750.0], [56.4, 751.0], [56.5, 752.0], [56.6, 755.0], [56.7, 755.0], [56.8, 759.0], [56.9, 762.0], [57.0, 762.0], [57.1, 767.0], [57.2, 769.0], [57.3, 769.0], [57.4, 769.0], [57.5, 771.0], [57.6, 772.0], [57.7, 775.0], [57.8, 775.0], [57.9, 777.0], [58.0, 778.0], [58.1, 782.0], [58.2, 782.0], [58.3, 782.0], [58.4, 784.0], [58.5, 784.0], [58.6, 784.0], [58.7, 784.0], [58.8, 791.0], [58.9, 791.0], [59.0, 795.0], [59.1, 798.0], [59.2, 799.0], [59.3, 799.0], [59.4, 800.0], [59.5, 800.0], [59.6, 803.0], [59.7, 803.0], [59.8, 806.0], [59.9, 808.0], [60.0, 808.0], [60.1, 808.0], [60.2, 810.0], [60.3, 813.0], [60.4, 813.0], [60.5, 813.0], [60.6, 814.0], [60.7, 815.0], [60.8, 815.0], [60.9, 815.0], [61.0, 820.0], [61.1, 821.0], [61.2, 821.0], [61.3, 822.0], [61.4, 822.0], [61.5, 823.0], [61.6, 823.0], [61.7, 824.0], [61.8, 828.0], [61.9, 828.0], [62.0, 829.0], [62.1, 831.0], [62.2, 831.0], [62.3, 831.0], [62.4, 837.0], [62.5, 839.0], [62.6, 847.0], [62.7, 847.0], [62.8, 849.0], [62.9, 851.0], [63.0, 854.0], [63.1, 854.0], [63.2, 856.0], [63.3, 857.0], [63.4, 857.0], [63.5, 861.0], [63.6, 861.0], [63.7, 862.0], [63.8, 862.0], [63.9, 867.0], [64.0, 867.0], [64.1, 868.0], [64.2, 868.0], [64.3, 869.0], [64.4, 873.0], [64.5, 874.0], [64.6, 874.0], [64.7, 876.0], [64.8, 878.0], [64.9, 882.0], [65.0, 882.0], [65.1, 884.0], [65.2, 885.0], [65.3, 885.0], [65.4, 886.0], [65.5, 886.0], [65.6, 889.0], [65.7, 889.0], [65.8, 893.0], [65.9, 896.0], [66.0, 900.0], [66.1, 900.0], [66.2, 901.0], [66.3, 901.0], [66.4, 902.0], [66.5, 902.0], [66.6, 903.0], [66.7, 904.0], [66.8, 904.0], [66.9, 908.0], [67.0, 908.0], [67.1, 910.0], [67.2, 910.0], [67.3, 916.0], [67.4, 917.0], [67.5, 922.0], [67.6, 922.0], [67.7, 924.0], [67.8, 926.0], [67.9, 927.0], [68.0, 927.0], [68.1, 927.0], [68.2, 927.0], [68.3, 929.0], [68.4, 929.0], [68.5, 931.0], [68.6, 932.0], [68.7, 932.0], [68.8, 934.0], [68.9, 935.0], [69.0, 938.0], [69.1, 938.0], [69.2, 938.0], [69.3, 939.0], [69.4, 942.0], [69.5, 942.0], [69.6, 949.0], [69.7, 950.0], [69.8, 953.0], [69.9, 953.0], [70.0, 954.0], [70.1, 955.0], [70.2, 955.0], [70.3, 957.0], [70.4, 960.0], [70.5, 963.0], [70.6, 963.0], [70.7, 967.0], [70.8, 972.0], [70.9, 973.0], [71.0, 973.0], [71.1, 974.0], [71.2, 975.0], [71.3, 975.0], [71.4, 975.0], [71.5, 977.0], [71.6, 977.0], [71.7, 977.0], [71.8, 978.0], [71.9, 980.0], [72.0, 982.0], [72.1, 982.0], [72.2, 985.0], [72.3, 989.0], [72.4, 990.0], [72.5, 990.0], [72.6, 992.0], [72.7, 995.0], [72.8, 996.0], [72.9, 996.0], [73.0, 998.0], [73.1, 1000.0], [73.2, 1002.0], [73.3, 1002.0], [73.4, 1002.0], [73.5, 1009.0], [73.6, 1009.0], [73.7, 1016.0], [73.8, 1019.0], [73.9, 1021.0], [74.0, 1021.0], [74.1, 1026.0], [74.2, 1028.0], [74.3, 1029.0], [74.4, 1029.0], [74.5, 1032.0], [74.6, 1033.0], [74.7, 1034.0], [74.8, 1034.0], [74.9, 1036.0], [75.0, 1043.0], [75.1, 1043.0], [75.2, 1043.0], [75.3, 1045.0], [75.4, 1045.0], [75.5, 1045.0], [75.6, 1047.0], [75.7, 1060.0], [75.8, 1060.0], [75.9, 1060.0], [76.0, 1062.0], [76.1, 1062.0], [76.2, 1075.0], [76.3, 1075.0], [76.4, 1075.0], [76.5, 1079.0], [76.6, 1084.0], [76.7, 1084.0], [76.8, 1091.0], [76.9, 1092.0], [77.0, 1092.0], [77.1, 1092.0], [77.2, 1095.0], [77.3, 1097.0], [77.4, 1097.0], [77.5, 1097.0], [77.6, 1099.0], [77.7, 1099.0], [77.8, 1099.0], [77.9, 1101.0], [78.0, 1105.0], [78.1, 1105.0], [78.2, 1105.0], [78.3, 1106.0], [78.4, 1114.0], [78.5, 1114.0], [78.6, 1120.0], [78.7, 1120.0], [78.8, 1122.0], [78.9, 1122.0], [79.0, 1124.0], [79.1, 1125.0], [79.2, 1128.0], [79.3, 1128.0], [79.4, 1130.0], [79.5, 1130.0], [79.6, 1131.0], [79.7, 1131.0], [79.8, 1132.0], [79.9, 1139.0], [80.0, 1150.0], [80.1, 1150.0], [80.2, 1152.0], [80.3, 1154.0], [80.4, 1154.0], [80.5, 1158.0], [80.6, 1159.0], [80.7, 1159.0], [80.8, 1159.0], [80.9, 1167.0], [81.0, 1169.0], [81.1, 1169.0], [81.2, 1169.0], [81.3, 1173.0], [81.4, 1175.0], [81.5, 1183.0], [81.6, 1183.0], [81.7, 1183.0], [81.8, 1186.0], [81.9, 1186.0], [82.0, 1191.0], [82.1, 1191.0], [82.2, 1191.0], [82.3, 1191.0], [82.4, 1192.0], [82.5, 1200.0], [82.6, 1201.0], [82.7, 1201.0], [82.8, 1203.0], [82.9, 1206.0], [83.0, 1210.0], [83.1, 1210.0], [83.2, 1211.0], [83.3, 1212.0], [83.4, 1212.0], [83.5, 1212.0], [83.6, 1215.0], [83.7, 1219.0], [83.8, 1219.0], [83.9, 1223.0], [84.0, 1224.0], [84.1, 1227.0], [84.2, 1227.0], [84.3, 1227.0], [84.4, 1229.0], [84.5, 1238.0], [84.6, 1238.0], [84.7, 1245.0], [84.8, 1248.0], [84.9, 1259.0], [85.0, 1259.0], [85.1, 1269.0], [85.2, 1271.0], [85.3, 1271.0], [85.4, 1274.0], [85.5, 1278.0], [85.6, 1279.0], [85.7, 1279.0], [85.8, 1279.0], [85.9, 1290.0], [86.0, 1291.0], [86.1, 1291.0], [86.2, 1307.0], [86.3, 1307.0], [86.4, 1308.0], [86.5, 1308.0], [86.6, 1318.0], [86.7, 1320.0], [86.8, 1320.0], [86.9, 1326.0], [87.0, 1339.0], [87.1, 1341.0], [87.2, 1341.0], [87.3, 1348.0], [87.4, 1356.0], [87.5, 1356.0], [87.6, 1356.0], [87.7, 1365.0], [87.8, 1378.0], [87.9, 1381.0], [88.0, 1381.0], [88.1, 1386.0], [88.2, 1386.0], [88.3, 1386.0], [88.4, 1386.0], [88.5, 1390.0], [88.6, 1396.0], [88.7, 1396.0], [88.8, 1400.0], [88.9, 1410.0], [89.0, 1420.0], [89.1, 1420.0], [89.2, 1424.0], [89.3, 1433.0], [89.4, 1434.0], [89.5, 1434.0], [89.6, 1440.0], [89.7, 1440.0], [89.8, 1456.0], [89.9, 1456.0], [90.0, 1465.0], [90.1, 1467.0], [90.2, 1467.0], [90.3, 1477.0], [90.4, 1479.0], [90.5, 1480.0], [90.6, 1480.0], [90.7, 1481.0], [90.8, 1489.0], [90.9, 1490.0], [91.0, 1490.0], [91.1, 1491.0], [91.2, 1492.0], [91.3, 1494.0], [91.4, 1494.0], [91.5, 1503.0], [91.6, 1520.0], [91.7, 1520.0], [91.8, 1521.0], [91.9, 1524.0], [92.0, 1529.0], [92.1, 1529.0], [92.2, 1529.0], [92.3, 1539.0], [92.4, 1541.0], [92.5, 1541.0], [92.6, 1561.0], [92.7, 1565.0], [92.8, 1571.0], [92.9, 1571.0], [93.0, 1573.0], [93.1, 1592.0], [93.2, 1595.0], [93.3, 1595.0], [93.4, 1603.0], [93.5, 1604.0], [93.6, 1604.0], [93.7, 1617.0], [93.8, 1621.0], [93.9, 1621.0], [94.0, 1621.0], [94.1, 1629.0], [94.2, 1635.0], [94.3, 1646.0], [94.4, 1646.0], [94.5, 1647.0], [94.6, 1647.0], [94.7, 1653.0], [94.8, 1653.0], [94.9, 1674.0], [95.0, 1692.0], [95.1, 1692.0], [95.2, 1693.0], [95.3, 1739.0], [95.4, 1743.0], [95.5, 1743.0], [95.6, 1769.0], [95.7, 1775.0], [95.8, 1780.0], [95.9, 1780.0], [96.0, 1855.0], [96.1, 1881.0], [96.2, 1932.0], [96.3, 1932.0], [96.4, 1971.0], [96.5, 2017.0], [96.6, 2031.0], [96.7, 2031.0], [96.8, 2070.0], [96.9, 2103.0], [97.0, 2103.0], [97.1, 2174.0], [97.2, 2211.0], [97.3, 2239.0], [97.4, 2239.0], [97.5, 2336.0], [97.6, 2371.0], [97.7, 2372.0], [97.8, 2372.0], [97.9, 2379.0], [98.0, 2424.0], [98.1, 2548.0], [98.2, 2548.0], [98.3, 2553.0], [98.4, 2574.0], [98.5, 2574.0], [98.6, 2648.0], [98.7, 3014.0], [98.8, 3091.0], [98.9, 3091.0], [99.0, 3121.0], [99.1, 3252.0], [99.2, 3335.0], [99.3, 3335.0], [99.4, 4651.0], [99.5, 4673.0], [99.6, 5692.0], [99.7, 5692.0], [99.8, 8338.0], [99.9, 9059.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 99.0, "series": [{"data": [[8300.0, 1.0], [9000.0, 1.0], [600.0, 93.0], [700.0, 52.0], [800.0, 49.0], [900.0, 52.0], [1000.0, 35.0], [1100.0, 34.0], [1200.0, 27.0], [1300.0, 19.0], [1400.0, 20.0], [1500.0, 14.0], [1600.0, 14.0], [1700.0, 5.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 2.0], [2300.0, 4.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 34.0], [3300.0, 1.0], [3200.0, 1.0], [4600.0, 2.0], [300.0, 69.0], [5600.0, 1.0], [400.0, 99.0], [500.0, 89.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 468.0, "series": [{"data": [[0.0, 204.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 468.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.882506527415142, "minX": 1.60507398E12, "maxY": 10.0, "series": [{"data": [[1.60507404E12, 9.882506527415142], [1.60507398E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507404E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 369.0, "minX": 1.0, "maxY": 3014.0, "series": [{"data": [[8.0, 369.0], [4.0, 1410.0], [2.0, 1339.0], [1.0, 1307.0], [9.0, 422.0], [10.0, 849.924242424241], [5.0, 498.0], [6.0, 886.0], [3.0, 3014.0], [7.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 852.8503401360531]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2648.116666666667, "minX": 1.60507398E12, "maxY": 1122206.6333333333, "series": [{"data": [[1.60507404E12, 1122206.6333333333], [1.60507398E12, 1073828.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507404E12, 2874.9166666666665], [1.60507398E12, 2648.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507404E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 840.571022727273, "minX": 1.60507398E12, "maxY": 864.1357702349868, "series": [{"data": [[1.60507404E12, 864.1357702349868], [1.60507398E12, 840.571022727273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507404E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 839.119318181818, "minX": 1.60507398E12, "maxY": 862.6762402088774, "series": [{"data": [[1.60507404E12, 862.6762402088774], [1.60507398E12, 839.119318181818]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507404E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.023498694516971275, "minX": 1.60507398E12, "maxY": 0.24431818181818185, "series": [{"data": [[1.60507404E12, 0.023498694516971275], [1.60507398E12, 0.24431818181818185]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507404E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.60507398E12, "maxY": 9059.0, "series": [{"data": [[1.60507404E12, 8338.0], [1.60507398E12, 9059.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507404E12, 236.82399963378907], [1.60507398E12, 238.59299924254418]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507404E12, 238.20640014648438], [1.60507398E12, 241.45230030298234]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507404E12, 237.59199981689454], [1.60507398E12, 240.18149962127208]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507404E12, 225.0], [1.60507398E12, 233.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507404E12, 684.0], [1.60507398E12, 668.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507404E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 393.0, "minX": 2.0, "maxY": 1323.0, "series": [{"data": [[8.0, 612.0], [2.0, 1323.0], [9.0, 810.0], [10.0, 897.0], [11.0, 808.0], [12.0, 762.0], [13.0, 684.0], [14.0, 622.0], [15.0, 678.0], [4.0, 1247.5], [16.0, 393.0], [17.0, 510.0], [18.0, 500.5], [5.0, 1169.0], [20.0, 472.0], [21.0, 453.0], [6.0, 1245.0], [7.0, 857.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 393.0, "minX": 2.0, "maxY": 1322.5, "series": [{"data": [[8.0, 611.0], [2.0, 1322.5], [9.0, 809.0], [10.0, 894.5], [11.0, 807.0], [12.0, 761.5], [13.0, 683.0], [14.0, 621.5], [15.0, 678.0], [4.0, 1246.0], [16.0, 393.0], [17.0, 509.0], [18.0, 500.5], [5.0, 1168.0], [20.0, 471.5], [21.0, 453.0], [6.0, 1244.0], [7.0, 856.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.033333333333333, "minX": 1.60507398E12, "maxY": 6.216666666666667, "series": [{"data": [[1.60507404E12, 6.216666666666667], [1.60507398E12, 6.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507404E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.866666666666666, "minX": 1.60507398E12, "maxY": 6.383333333333334, "series": [{"data": [[1.60507404E12, 6.383333333333334], [1.60507398E12, 5.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507404E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.866666666666666, "minX": 1.60507398E12, "maxY": 6.383333333333334, "series": [{"data": [[1.60507404E12, 6.383333333333334], [1.60507398E12, 5.866666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507404E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.866666666666666, "minX": 1.60507398E12, "maxY": 6.383333333333334, "series": [{"data": [[1.60507404E12, 6.383333333333334], [1.60507398E12, 5.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507404E12, "title": "Total Transactions Per Second"}},
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

