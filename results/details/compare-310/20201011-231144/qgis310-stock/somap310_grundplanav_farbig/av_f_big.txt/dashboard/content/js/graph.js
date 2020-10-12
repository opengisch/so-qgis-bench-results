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
        data: {"result": {"minY": 193.0, "minX": 0.0, "maxY": 3342.0, "series": [{"data": [[0.0, 193.0], [0.1, 193.0], [0.2, 194.0], [0.3, 197.0], [0.4, 197.0], [0.5, 198.0], [0.6, 199.0], [0.7, 200.0], [0.8, 200.0], [0.9, 202.0], [1.0, 208.0], [1.1, 209.0], [1.2, 209.0], [1.3, 211.0], [1.4, 211.0], [1.5, 212.0], [1.6, 212.0], [1.7, 217.0], [1.8, 222.0], [1.9, 222.0], [2.0, 231.0], [2.1, 233.0], [2.2, 233.0], [2.3, 233.0], [2.4, 233.0], [2.5, 237.0], [2.6, 254.0], [2.7, 254.0], [2.8, 255.0], [2.9, 256.0], [3.0, 257.0], [3.1, 257.0], [3.2, 259.0], [3.3, 260.0], [3.4, 260.0], [3.5, 261.0], [3.6, 261.0], [3.7, 264.0], [3.8, 264.0], [3.9, 268.0], [4.0, 269.0], [4.1, 270.0], [4.2, 270.0], [4.3, 271.0], [4.4, 274.0], [4.5, 278.0], [4.6, 278.0], [4.7, 278.0], [4.8, 280.0], [4.9, 280.0], [5.0, 280.0], [5.1, 282.0], [5.2, 283.0], [5.3, 283.0], [5.4, 286.0], [5.5, 287.0], [5.6, 291.0], [5.7, 291.0], [5.8, 293.0], [5.9, 294.0], [6.0, 294.0], [6.1, 294.0], [6.2, 295.0], [6.3, 300.0], [6.4, 307.0], [6.5, 307.0], [6.6, 308.0], [6.7, 309.0], [6.8, 309.0], [6.9, 311.0], [7.0, 315.0], [7.1, 315.0], [7.2, 315.0], [7.3, 319.0], [7.4, 325.0], [7.5, 325.0], [7.6, 325.0], [7.7, 327.0], [7.8, 327.0], [7.9, 328.0], [8.0, 328.0], [8.1, 334.0], [8.2, 342.0], [8.3, 344.0], [8.4, 344.0], [8.5, 345.0], [8.6, 347.0], [8.7, 347.0], [8.8, 353.0], [8.9, 354.0], [9.0, 354.0], [9.1, 354.0], [9.2, 355.0], [9.3, 355.0], [9.4, 361.0], [9.5, 361.0], [9.6, 364.0], [9.7, 366.0], [9.8, 367.0], [9.9, 367.0], [10.0, 367.0], [10.1, 367.0], [10.2, 367.0], [10.3, 368.0], [10.4, 369.0], [10.5, 374.0], [10.6, 374.0], [10.7, 378.0], [10.8, 379.0], [10.9, 380.0], [11.0, 380.0], [11.1, 381.0], [11.2, 382.0], [11.3, 384.0], [11.4, 384.0], [11.5, 387.0], [11.6, 389.0], [11.7, 389.0], [11.8, 389.0], [11.9, 390.0], [12.0, 394.0], [12.1, 394.0], [12.2, 397.0], [12.3, 397.0], [12.4, 398.0], [12.5, 398.0], [12.6, 399.0], [12.7, 399.0], [12.8, 399.0], [12.9, 399.0], [13.0, 402.0], [13.1, 403.0], [13.2, 404.0], [13.3, 404.0], [13.4, 405.0], [13.5, 405.0], [13.6, 405.0], [13.7, 409.0], [13.8, 409.0], [13.9, 412.0], [14.0, 412.0], [14.1, 412.0], [14.2, 413.0], [14.3, 413.0], [14.4, 413.0], [14.5, 414.0], [14.6, 414.0], [14.7, 414.0], [14.8, 414.0], [14.9, 416.0], [15.0, 418.0], [15.1, 418.0], [15.2, 419.0], [15.3, 420.0], [15.4, 421.0], [15.5, 421.0], [15.6, 421.0], [15.7, 424.0], [15.8, 425.0], [15.9, 425.0], [16.0, 428.0], [16.1, 431.0], [16.2, 432.0], [16.3, 432.0], [16.4, 433.0], [16.5, 436.0], [16.6, 437.0], [16.7, 437.0], [16.8, 438.0], [16.9, 438.0], [17.0, 438.0], [17.1, 439.0], [17.2, 444.0], [17.3, 445.0], [17.4, 445.0], [17.5, 446.0], [17.6, 450.0], [17.7, 453.0], [17.8, 453.0], [17.9, 455.0], [18.0, 457.0], [18.1, 458.0], [18.2, 458.0], [18.3, 461.0], [18.4, 461.0], [18.5, 461.0], [18.6, 464.0], [18.7, 466.0], [18.8, 466.0], [18.9, 466.0], [19.0, 467.0], [19.1, 468.0], [19.2, 469.0], [19.3, 469.0], [19.4, 469.0], [19.5, 471.0], [19.6, 472.0], [19.7, 472.0], [19.8, 474.0], [19.9, 476.0], [20.0, 477.0], [20.1, 477.0], [20.2, 477.0], [20.3, 478.0], [20.4, 478.0], [20.5, 479.0], [20.6, 479.0], [20.7, 480.0], [20.8, 480.0], [20.9, 480.0], [21.0, 481.0], [21.1, 484.0], [21.2, 484.0], [21.3, 485.0], [21.4, 485.0], [21.5, 486.0], [21.6, 486.0], [21.7, 491.0], [21.8, 492.0], [21.9, 492.0], [22.0, 492.0], [22.1, 493.0], [22.2, 495.0], [22.3, 495.0], [22.4, 496.0], [22.5, 499.0], [22.6, 500.0], [22.7, 500.0], [22.8, 509.0], [22.9, 510.0], [23.0, 510.0], [23.1, 510.0], [23.2, 510.0], [23.3, 512.0], [23.4, 512.0], [23.5, 517.0], [23.6, 522.0], [23.7, 522.0], [23.8, 522.0], [23.9, 523.0], [24.0, 525.0], [24.1, 526.0], [24.2, 526.0], [24.3, 529.0], [24.4, 529.0], [24.5, 529.0], [24.6, 529.0], [24.7, 530.0], [24.8, 530.0], [24.9, 530.0], [25.0, 530.0], [25.1, 531.0], [25.2, 533.0], [25.3, 533.0], [25.4, 535.0], [25.5, 536.0], [25.6, 537.0], [25.7, 537.0], [25.8, 537.0], [25.9, 537.0], [26.0, 537.0], [26.1, 537.0], [26.2, 543.0], [26.3, 545.0], [26.4, 546.0], [26.5, 546.0], [26.6, 546.0], [26.7, 546.0], [26.8, 546.0], [26.9, 547.0], [27.0, 548.0], [27.1, 548.0], [27.2, 548.0], [27.3, 548.0], [27.4, 549.0], [27.5, 552.0], [27.6, 552.0], [27.7, 555.0], [27.8, 556.0], [27.9, 558.0], [28.0, 558.0], [28.1, 558.0], [28.2, 558.0], [28.3, 558.0], [28.4, 558.0], [28.5, 562.0], [28.6, 563.0], [28.7, 563.0], [28.8, 563.0], [28.9, 563.0], [29.0, 565.0], [29.1, 565.0], [29.2, 565.0], [29.3, 566.0], [29.4, 566.0], [29.5, 566.0], [29.6, 567.0], [29.7, 567.0], [29.8, 568.0], [29.9, 568.0], [30.0, 568.0], [30.1, 568.0], [30.2, 568.0], [30.3, 569.0], [30.4, 569.0], [30.5, 569.0], [30.6, 569.0], [30.7, 571.0], [30.8, 571.0], [30.9, 572.0], [31.0, 572.0], [31.1, 572.0], [31.2, 573.0], [31.3, 573.0], [31.4, 573.0], [31.5, 573.0], [31.6, 574.0], [31.7, 574.0], [31.8, 574.0], [31.9, 574.0], [32.0, 576.0], [32.1, 576.0], [32.2, 576.0], [32.3, 578.0], [32.4, 580.0], [32.5, 580.0], [32.6, 584.0], [32.7, 587.0], [32.8, 587.0], [32.9, 587.0], [33.0, 589.0], [33.1, 590.0], [33.2, 590.0], [33.3, 590.0], [33.4, 592.0], [33.5, 593.0], [33.6, 593.0], [33.7, 594.0], [33.8, 594.0], [33.9, 596.0], [34.0, 596.0], [34.1, 596.0], [34.2, 596.0], [34.3, 596.0], [34.4, 596.0], [34.5, 598.0], [34.6, 603.0], [34.7, 605.0], [34.8, 605.0], [34.9, 605.0], [35.0, 606.0], [35.1, 606.0], [35.2, 606.0], [35.3, 610.0], [35.4, 611.0], [35.5, 611.0], [35.6, 611.0], [35.7, 613.0], [35.8, 619.0], [35.9, 619.0], [36.0, 619.0], [36.1, 620.0], [36.2, 620.0], [36.3, 620.0], [36.4, 621.0], [36.5, 621.0], [36.6, 621.0], [36.7, 621.0], [36.8, 621.0], [36.9, 622.0], [37.0, 622.0], [37.1, 624.0], [37.2, 624.0], [37.3, 627.0], [37.4, 627.0], [37.5, 629.0], [37.6, 632.0], [37.7, 632.0], [37.8, 632.0], [37.9, 633.0], [38.0, 635.0], [38.1, 636.0], [38.2, 636.0], [38.3, 636.0], [38.4, 639.0], [38.5, 639.0], [38.6, 639.0], [38.7, 639.0], [38.8, 641.0], [38.9, 641.0], [39.0, 644.0], [39.1, 646.0], [39.2, 648.0], [39.3, 648.0], [39.4, 648.0], [39.5, 649.0], [39.6, 649.0], [39.7, 649.0], [39.8, 650.0], [39.9, 651.0], [40.0, 652.0], [40.1, 652.0], [40.2, 655.0], [40.3, 655.0], [40.4, 655.0], [40.5, 657.0], [40.6, 657.0], [40.7, 659.0], [40.8, 659.0], [40.9, 659.0], [41.0, 660.0], [41.1, 661.0], [41.2, 661.0], [41.3, 662.0], [41.4, 670.0], [41.5, 671.0], [41.6, 671.0], [41.7, 673.0], [41.8, 675.0], [41.9, 675.0], [42.0, 675.0], [42.1, 677.0], [42.2, 679.0], [42.3, 679.0], [42.4, 679.0], [42.5, 682.0], [42.6, 683.0], [42.7, 683.0], [42.8, 685.0], [42.9, 687.0], [43.0, 688.0], [43.1, 688.0], [43.2, 688.0], [43.3, 695.0], [43.4, 695.0], [43.5, 697.0], [43.6, 698.0], [43.7, 699.0], [43.8, 699.0], [43.9, 699.0], [44.0, 699.0], [44.1, 700.0], [44.2, 700.0], [44.3, 700.0], [44.4, 700.0], [44.5, 701.0], [44.6, 701.0], [44.7, 703.0], [44.8, 703.0], [44.9, 705.0], [45.0, 705.0], [45.1, 709.0], [45.2, 710.0], [45.3, 710.0], [45.4, 711.0], [45.5, 712.0], [45.6, 714.0], [45.7, 714.0], [45.8, 718.0], [45.9, 719.0], [46.0, 722.0], [46.1, 722.0], [46.2, 732.0], [46.3, 733.0], [46.4, 736.0], [46.5, 736.0], [46.6, 738.0], [46.7, 738.0], [46.8, 738.0], [46.9, 739.0], [47.0, 743.0], [47.1, 745.0], [47.2, 745.0], [47.3, 751.0], [47.4, 751.0], [47.5, 753.0], [47.6, 753.0], [47.7, 755.0], [47.8, 757.0], [47.9, 757.0], [48.0, 757.0], [48.1, 758.0], [48.2, 759.0], [48.3, 759.0], [48.4, 759.0], [48.5, 761.0], [48.6, 763.0], [48.7, 763.0], [48.8, 764.0], [48.9, 771.0], [49.0, 774.0], [49.1, 774.0], [49.2, 775.0], [49.3, 775.0], [49.4, 775.0], [49.5, 775.0], [49.6, 777.0], [49.7, 781.0], [49.8, 784.0], [49.9, 784.0], [50.0, 784.0], [50.1, 788.0], [50.2, 788.0], [50.3, 790.0], [50.4, 794.0], [50.5, 798.0], [50.6, 798.0], [50.7, 798.0], [50.8, 801.0], [50.9, 801.0], [51.0, 801.0], [51.1, 804.0], [51.2, 809.0], [51.3, 811.0], [51.4, 811.0], [51.5, 812.0], [51.6, 815.0], [51.7, 815.0], [51.8, 817.0], [51.9, 819.0], [52.0, 819.0], [52.1, 819.0], [52.2, 831.0], [52.3, 831.0], [52.4, 833.0], [52.5, 833.0], [52.6, 836.0], [52.7, 836.0], [52.8, 841.0], [52.9, 841.0], [53.0, 843.0], [53.1, 844.0], [53.2, 846.0], [53.3, 846.0], [53.4, 848.0], [53.5, 848.0], [53.6, 848.0], [53.7, 849.0], [53.8, 850.0], [53.9, 852.0], [54.0, 852.0], [54.1, 852.0], [54.2, 855.0], [54.3, 857.0], [54.4, 857.0], [54.5, 858.0], [54.6, 861.0], [54.7, 861.0], [54.8, 861.0], [54.9, 869.0], [55.0, 871.0], [55.1, 871.0], [55.2, 871.0], [55.3, 874.0], [55.4, 874.0], [55.5, 874.0], [55.6, 876.0], [55.7, 878.0], [55.8, 879.0], [55.9, 879.0], [56.0, 880.0], [56.1, 881.0], [56.2, 883.0], [56.3, 883.0], [56.4, 883.0], [56.5, 883.0], [56.6, 884.0], [56.7, 884.0], [56.8, 888.0], [56.9, 888.0], [57.0, 888.0], [57.1, 888.0], [57.2, 889.0], [57.3, 892.0], [57.4, 892.0], [57.5, 897.0], [57.6, 897.0], [57.7, 900.0], [57.8, 900.0], [57.9, 903.0], [58.0, 904.0], [58.1, 904.0], [58.2, 904.0], [58.3, 905.0], [58.4, 906.0], [58.5, 906.0], [58.6, 906.0], [58.7, 907.0], [58.8, 907.0], [58.9, 907.0], [59.0, 908.0], [59.1, 909.0], [59.2, 909.0], [59.3, 909.0], [59.4, 913.0], [59.5, 913.0], [59.6, 914.0], [59.7, 914.0], [59.8, 914.0], [59.9, 914.0], [60.0, 916.0], [60.1, 916.0], [60.2, 918.0], [60.3, 925.0], [60.4, 925.0], [60.5, 925.0], [60.6, 925.0], [60.7, 926.0], [60.8, 926.0], [60.9, 927.0], [61.0, 930.0], [61.1, 932.0], [61.2, 932.0], [61.3, 935.0], [61.4, 937.0], [61.5, 939.0], [61.6, 939.0], [61.7, 939.0], [61.8, 940.0], [61.9, 940.0], [62.0, 948.0], [62.1, 948.0], [62.2, 949.0], [62.3, 949.0], [62.4, 950.0], [62.5, 951.0], [62.6, 954.0], [62.7, 954.0], [62.8, 954.0], [62.9, 955.0], [63.0, 956.0], [63.1, 956.0], [63.2, 958.0], [63.3, 958.0], [63.4, 958.0], [63.5, 959.0], [63.6, 965.0], [63.7, 968.0], [63.8, 968.0], [63.9, 969.0], [64.0, 969.0], [64.1, 970.0], [64.2, 970.0], [64.3, 973.0], [64.4, 977.0], [64.5, 977.0], [64.6, 977.0], [64.7, 978.0], [64.8, 979.0], [64.9, 981.0], [65.0, 981.0], [65.1, 984.0], [65.2, 985.0], [65.3, 985.0], [65.4, 988.0], [65.5, 990.0], [65.6, 990.0], [65.7, 990.0], [65.8, 991.0], [65.9, 991.0], [66.0, 994.0], [66.1, 994.0], [66.2, 995.0], [66.3, 1001.0], [66.4, 1001.0], [66.5, 1001.0], [66.6, 1002.0], [66.7, 1005.0], [66.8, 1005.0], [66.9, 1007.0], [67.0, 1008.0], [67.1, 1008.0], [67.2, 1008.0], [67.3, 1008.0], [67.4, 1010.0], [67.5, 1012.0], [67.6, 1012.0], [67.7, 1013.0], [67.8, 1014.0], [67.9, 1016.0], [68.0, 1016.0], [68.1, 1018.0], [68.2, 1018.0], [68.3, 1018.0], [68.4, 1018.0], [68.5, 1019.0], [68.6, 1020.0], [68.7, 1020.0], [68.8, 1020.0], [68.9, 1024.0], [69.0, 1024.0], [69.1, 1024.0], [69.2, 1025.0], [69.3, 1025.0], [69.4, 1027.0], [69.5, 1027.0], [69.6, 1029.0], [69.7, 1029.0], [69.8, 1031.0], [69.9, 1031.0], [70.0, 1033.0], [70.1, 1035.0], [70.2, 1035.0], [70.3, 1036.0], [70.4, 1040.0], [70.5, 1040.0], [70.6, 1040.0], [70.7, 1042.0], [70.8, 1047.0], [70.9, 1048.0], [71.0, 1048.0], [71.1, 1054.0], [71.2, 1054.0], [71.3, 1055.0], [71.4, 1055.0], [71.5, 1055.0], [71.6, 1056.0], [71.7, 1056.0], [71.8, 1058.0], [71.9, 1058.0], [72.0, 1059.0], [72.1, 1059.0], [72.2, 1061.0], [72.3, 1061.0], [72.4, 1062.0], [72.5, 1062.0], [72.6, 1066.0], [72.7, 1075.0], [72.8, 1075.0], [72.9, 1075.0], [73.0, 1078.0], [73.1, 1081.0], [73.2, 1084.0], [73.3, 1084.0], [73.4, 1090.0], [73.5, 1091.0], [73.6, 1091.0], [73.7, 1098.0], [73.8, 1099.0], [73.9, 1099.0], [74.0, 1099.0], [74.1, 1100.0], [74.2, 1103.0], [74.3, 1103.0], [74.4, 1103.0], [74.5, 1103.0], [74.6, 1105.0], [74.7, 1105.0], [74.8, 1105.0], [74.9, 1106.0], [75.0, 1107.0], [75.1, 1107.0], [75.2, 1109.0], [75.3, 1109.0], [75.4, 1112.0], [75.5, 1112.0], [75.6, 1113.0], [75.7, 1113.0], [75.8, 1114.0], [75.9, 1114.0], [76.0, 1115.0], [76.1, 1115.0], [76.2, 1117.0], [76.3, 1117.0], [76.4, 1121.0], [76.5, 1121.0], [76.6, 1121.0], [76.7, 1121.0], [76.8, 1122.0], [76.9, 1124.0], [77.0, 1124.0], [77.1, 1125.0], [77.2, 1125.0], [77.3, 1134.0], [77.4, 1134.0], [77.5, 1135.0], [77.6, 1135.0], [77.7, 1137.0], [77.8, 1137.0], [77.9, 1142.0], [78.0, 1142.0], [78.1, 1143.0], [78.2, 1143.0], [78.3, 1144.0], [78.4, 1145.0], [78.5, 1145.0], [78.6, 1146.0], [78.7, 1146.0], [78.8, 1146.0], [78.9, 1146.0], [79.0, 1147.0], [79.1, 1148.0], [79.2, 1149.0], [79.3, 1149.0], [79.4, 1149.0], [79.5, 1152.0], [79.6, 1153.0], [79.7, 1153.0], [79.8, 1153.0], [79.9, 1160.0], [80.0, 1161.0], [80.1, 1161.0], [80.2, 1164.0], [80.3, 1166.0], [80.4, 1166.0], [80.5, 1167.0], [80.6, 1168.0], [80.7, 1171.0], [80.8, 1171.0], [80.9, 1171.0], [81.0, 1175.0], [81.1, 1177.0], [81.2, 1177.0], [81.3, 1182.0], [81.4, 1182.0], [81.5, 1182.0], [81.6, 1182.0], [81.7, 1185.0], [81.8, 1187.0], [81.9, 1187.0], [82.0, 1196.0], [82.1, 1196.0], [82.2, 1197.0], [82.3, 1197.0], [82.4, 1198.0], [82.5, 1200.0], [82.6, 1202.0], [82.7, 1202.0], [82.8, 1202.0], [82.9, 1205.0], [83.0, 1205.0], [83.1, 1205.0], [83.2, 1208.0], [83.3, 1211.0], [83.4, 1211.0], [83.5, 1211.0], [83.6, 1211.0], [83.7, 1214.0], [83.8, 1214.0], [83.9, 1216.0], [84.0, 1217.0], [84.1, 1217.0], [84.2, 1217.0], [84.3, 1221.0], [84.4, 1229.0], [84.5, 1233.0], [84.6, 1233.0], [84.7, 1240.0], [84.8, 1257.0], [84.9, 1258.0], [85.0, 1258.0], [85.1, 1258.0], [85.2, 1261.0], [85.3, 1261.0], [85.4, 1261.0], [85.5, 1272.0], [85.6, 1275.0], [85.7, 1275.0], [85.8, 1275.0], [85.9, 1276.0], [86.0, 1277.0], [86.1, 1277.0], [86.2, 1279.0], [86.3, 1280.0], [86.4, 1281.0], [86.5, 1281.0], [86.6, 1283.0], [86.7, 1287.0], [86.8, 1287.0], [86.9, 1289.0], [87.0, 1291.0], [87.1, 1292.0], [87.2, 1292.0], [87.3, 1293.0], [87.4, 1295.0], [87.5, 1296.0], [87.6, 1296.0], [87.7, 1298.0], [87.8, 1307.0], [87.9, 1309.0], [88.0, 1309.0], [88.1, 1309.0], [88.2, 1312.0], [88.3, 1318.0], [88.4, 1318.0], [88.5, 1322.0], [88.6, 1322.0], [88.7, 1322.0], [88.8, 1330.0], [88.9, 1339.0], [89.0, 1340.0], [89.1, 1340.0], [89.2, 1340.0], [89.3, 1340.0], [89.4, 1341.0], [89.5, 1341.0], [89.6, 1344.0], [89.7, 1347.0], [89.8, 1347.0], [89.9, 1347.0], [90.0, 1350.0], [90.1, 1360.0], [90.2, 1360.0], [90.3, 1361.0], [90.4, 1365.0], [90.5, 1365.0], [90.6, 1365.0], [90.7, 1375.0], [90.8, 1378.0], [90.9, 1385.0], [91.0, 1385.0], [91.1, 1388.0], [91.2, 1394.0], [91.3, 1401.0], [91.4, 1401.0], [91.5, 1402.0], [91.6, 1405.0], [91.7, 1405.0], [91.8, 1405.0], [91.9, 1407.0], [92.0, 1411.0], [92.1, 1411.0], [92.2, 1425.0], [92.3, 1432.0], [92.4, 1435.0], [92.5, 1435.0], [92.6, 1441.0], [92.7, 1442.0], [92.8, 1443.0], [92.9, 1443.0], [93.0, 1463.0], [93.1, 1477.0], [93.2, 1478.0], [93.3, 1478.0], [93.4, 1484.0], [93.5, 1485.0], [93.6, 1485.0], [93.7, 1493.0], [93.8, 1499.0], [93.9, 1499.0], [94.0, 1499.0], [94.1, 1500.0], [94.2, 1503.0], [94.3, 1506.0], [94.4, 1506.0], [94.5, 1513.0], [94.6, 1516.0], [94.7, 1517.0], [94.8, 1517.0], [94.9, 1535.0], [95.0, 1558.0], [95.1, 1558.0], [95.2, 1569.0], [95.3, 1623.0], [95.4, 1628.0], [95.5, 1628.0], [95.6, 1634.0], [95.7, 1650.0], [95.8, 1657.0], [95.9, 1657.0], [96.0, 1674.0], [96.1, 1680.0], [96.2, 1753.0], [96.3, 1753.0], [96.4, 1758.0], [96.5, 1777.0], [96.6, 1791.0], [96.7, 1791.0], [96.8, 1803.0], [96.9, 1817.0], [97.0, 1817.0], [97.1, 1879.0], [97.2, 1893.0], [97.3, 1904.0], [97.4, 1904.0], [97.5, 1909.0], [97.6, 1936.0], [97.7, 1982.0], [97.8, 1982.0], [97.9, 2114.0], [98.0, 2179.0], [98.1, 2218.0], [98.2, 2218.0], [98.3, 2360.0], [98.4, 2489.0], [98.5, 2489.0], [98.6, 2571.0], [98.7, 2651.0], [98.8, 2675.0], [98.9, 2675.0], [99.0, 2778.0], [99.1, 2838.0], [99.2, 2885.0], [99.3, 2885.0], [99.4, 3115.0], [99.5, 3136.0], [99.6, 3143.0], [99.7, 3143.0], [99.8, 3319.0], [99.9, 3342.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 88.0, "series": [{"data": [[600.0, 70.0], [700.0, 49.0], [800.0, 51.0], [900.0, 63.0], [1000.0, 57.0], [1100.0, 62.0], [1200.0, 39.0], [1300.0, 26.0], [1400.0, 20.0], [1500.0, 9.0], [100.0, 5.0], [1600.0, 7.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 4.0], [2100.0, 2.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [3100.0, 3.0], [200.0, 41.0], [3300.0, 2.0], [300.0, 49.0], [400.0, 71.0], [500.0, 88.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 525.0, "series": [{"data": [[0.0, 167.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 525.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.022222222222222, "minX": 1.6024581E12, "maxY": 10.0, "series": [{"data": [[1.60245816E12, 9.022222222222222], [1.6024581E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 1879.0, "series": [{"data": [[8.0, 270.0], [4.0, 1018.0], [2.0, 1024.0], [1.0, 909.0], [10.0, 855.8514442916102], [5.0, 1879.0], [6.0, 546.0], [3.0, 568.0], [7.0, 619.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 855.8326530612252]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 328.4, "minX": 1.6024581E12, "maxY": 1674256.7666666666, "series": [{"data": [[1.60245816E12, 161514.9], [1.6024581E12, 1674256.7666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245816E12, 328.4], [1.6024581E12, 5194.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 827.9555555555556, "minX": 1.6024581E12, "maxY": 857.650724637682, "series": [{"data": [[1.60245816E12, 827.9555555555556], [1.6024581E12, 857.650724637682]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 826.3333333333335, "minX": 1.6024581E12, "maxY": 856.4753623188413, "series": [{"data": [[1.60245816E12, 826.3333333333335], [1.6024581E12, 856.4753623188413]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.1173913043478264, "minX": 1.6024581E12, "maxY": 0.1777777777777778, "series": [{"data": [[1.60245816E12, 0.1777777777777778], [1.6024581E12, 0.1173913043478264]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.6024581E12, "maxY": 3342.0, "series": [{"data": [[1.60245816E12, 2179.0], [1.6024581E12, 3342.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245816E12, 217.0], [1.6024581E12, 200.43799967050552]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245816E12, 217.0], [1.6024581E12, 201.6818001317978]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245816E12, 217.0], [1.6024581E12, 201.12899983525276]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245816E12, 217.0], [1.6024581E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245816E12, 619.0], [1.6024581E12, 799.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 409.0, "minX": 4.0, "maxY": 1234.0, "series": [{"data": [[8.0, 961.5], [9.0, 959.5], [10.0, 998.0], [11.0, 914.0], [12.0, 897.0], [13.0, 775.0], [14.0, 681.5], [15.0, 642.0], [16.0, 657.0], [4.0, 963.5], [17.0, 576.0], [18.0, 654.5], [19.0, 409.0], [20.0, 567.0], [6.0, 1234.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 409.0, "minX": 4.0, "maxY": 1228.0, "series": [{"data": [[8.0, 960.0], [9.0, 957.5], [10.0, 997.5], [11.0, 914.0], [12.0, 896.0], [13.0, 774.0], [14.0, 680.5], [15.0, 641.5], [16.0, 656.0], [4.0, 962.0], [17.0, 576.0], [18.0, 654.5], [19.0, 409.0], [20.0, 567.0], [6.0, 1228.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60245804E12, "maxY": 11.583333333333334, "series": [{"data": [[1.60245816E12, 0.5833333333333334], [1.60245804E12, 0.08333333333333333], [1.6024581E12, 11.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.6024581E12, "maxY": 11.5, "series": [{"data": [[1.60245816E12, 0.75], [1.6024581E12, 11.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.6024581E12, "maxY": 11.5, "series": [{"data": [[1.60245816E12, 0.75], [1.6024581E12, 11.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.6024581E12, "maxY": 11.5, "series": [{"data": [[1.60245816E12, 0.75], [1.6024581E12, 11.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245816E12, "title": "Total Transactions Per Second"}},
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

