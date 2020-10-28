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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 3620.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 195.0], [0.3, 203.0], [0.4, 203.0], [0.5, 206.0], [0.6, 207.0], [0.7, 208.0], [0.8, 208.0], [0.9, 214.0], [1.0, 219.0], [1.1, 220.0], [1.2, 220.0], [1.3, 225.0], [1.4, 227.0], [1.5, 231.0], [1.6, 231.0], [1.7, 237.0], [1.8, 238.0], [1.9, 238.0], [2.0, 239.0], [2.1, 240.0], [2.2, 242.0], [2.3, 242.0], [2.4, 248.0], [2.5, 249.0], [2.6, 255.0], [2.7, 255.0], [2.8, 255.0], [2.9, 259.0], [3.0, 262.0], [3.1, 262.0], [3.2, 263.0], [3.3, 264.0], [3.4, 264.0], [3.5, 264.0], [3.6, 272.0], [3.7, 273.0], [3.8, 273.0], [3.9, 274.0], [4.0, 275.0], [4.1, 275.0], [4.2, 275.0], [4.3, 278.0], [4.4, 278.0], [4.5, 279.0], [4.6, 279.0], [4.7, 280.0], [4.8, 288.0], [4.9, 288.0], [5.0, 288.0], [5.1, 288.0], [5.2, 295.0], [5.3, 295.0], [5.4, 298.0], [5.5, 299.0], [5.6, 299.0], [5.7, 299.0], [5.8, 299.0], [5.9, 301.0], [6.0, 301.0], [6.1, 301.0], [6.2, 301.0], [6.3, 304.0], [6.4, 306.0], [6.5, 306.0], [6.6, 306.0], [6.7, 306.0], [6.8, 306.0], [6.9, 307.0], [7.0, 308.0], [7.1, 310.0], [7.2, 310.0], [7.3, 312.0], [7.4, 313.0], [7.5, 314.0], [7.6, 314.0], [7.7, 316.0], [7.8, 316.0], [7.9, 319.0], [8.0, 319.0], [8.1, 320.0], [8.2, 322.0], [8.3, 324.0], [8.4, 324.0], [8.5, 326.0], [8.6, 327.0], [8.7, 327.0], [8.8, 328.0], [8.9, 337.0], [9.0, 338.0], [9.1, 338.0], [9.2, 340.0], [9.3, 342.0], [9.4, 344.0], [9.5, 344.0], [9.6, 347.0], [9.7, 347.0], [9.8, 348.0], [9.9, 348.0], [10.0, 348.0], [10.1, 349.0], [10.2, 349.0], [10.3, 354.0], [10.4, 354.0], [10.5, 355.0], [10.6, 355.0], [10.7, 359.0], [10.8, 360.0], [10.9, 365.0], [11.0, 365.0], [11.1, 366.0], [11.2, 376.0], [11.3, 377.0], [11.4, 377.0], [11.5, 384.0], [11.6, 384.0], [11.7, 384.0], [11.8, 385.0], [11.9, 385.0], [12.0, 390.0], [12.1, 390.0], [12.2, 392.0], [12.3, 397.0], [12.4, 400.0], [12.5, 400.0], [12.6, 401.0], [12.7, 402.0], [12.8, 402.0], [12.9, 402.0], [13.0, 403.0], [13.1, 404.0], [13.2, 404.0], [13.3, 404.0], [13.4, 409.0], [13.5, 412.0], [13.6, 412.0], [13.7, 413.0], [13.8, 414.0], [13.9, 415.0], [14.0, 415.0], [14.1, 424.0], [14.2, 424.0], [14.3, 424.0], [14.4, 424.0], [14.5, 425.0], [14.6, 426.0], [14.7, 427.0], [14.8, 427.0], [14.9, 427.0], [15.0, 428.0], [15.1, 428.0], [15.2, 428.0], [15.3, 429.0], [15.4, 432.0], [15.5, 432.0], [15.6, 432.0], [15.7, 433.0], [15.8, 435.0], [15.9, 435.0], [16.0, 435.0], [16.1, 436.0], [16.2, 437.0], [16.3, 437.0], [16.4, 437.0], [16.5, 437.0], [16.6, 439.0], [16.7, 439.0], [16.8, 439.0], [16.9, 443.0], [17.0, 443.0], [17.1, 444.0], [17.2, 446.0], [17.3, 446.0], [17.4, 446.0], [17.5, 449.0], [17.6, 450.0], [17.7, 450.0], [17.8, 450.0], [17.9, 451.0], [18.0, 454.0], [18.1, 454.0], [18.2, 454.0], [18.3, 456.0], [18.4, 456.0], [18.5, 456.0], [18.6, 457.0], [18.7, 463.0], [18.8, 464.0], [18.9, 464.0], [19.0, 465.0], [19.1, 467.0], [19.2, 470.0], [19.3, 470.0], [19.4, 471.0], [19.5, 473.0], [19.6, 474.0], [19.7, 474.0], [19.8, 475.0], [19.9, 476.0], [20.0, 478.0], [20.1, 478.0], [20.2, 478.0], [20.3, 482.0], [20.4, 482.0], [20.5, 483.0], [20.6, 485.0], [20.7, 487.0], [20.8, 487.0], [20.9, 489.0], [21.0, 489.0], [21.1, 489.0], [21.2, 489.0], [21.3, 490.0], [21.4, 491.0], [21.5, 492.0], [21.6, 492.0], [21.7, 493.0], [21.8, 493.0], [21.9, 493.0], [22.0, 493.0], [22.1, 494.0], [22.2, 494.0], [22.3, 494.0], [22.4, 498.0], [22.5, 501.0], [22.6, 503.0], [22.7, 503.0], [22.8, 503.0], [22.9, 504.0], [23.0, 508.0], [23.1, 508.0], [23.2, 510.0], [23.3, 512.0], [23.4, 512.0], [23.5, 512.0], [23.6, 513.0], [23.7, 513.0], [23.8, 513.0], [23.9, 514.0], [24.0, 514.0], [24.1, 517.0], [24.2, 517.0], [24.3, 517.0], [24.4, 521.0], [24.5, 521.0], [24.6, 521.0], [24.7, 524.0], [24.8, 524.0], [24.9, 525.0], [25.0, 525.0], [25.1, 527.0], [25.2, 530.0], [25.3, 530.0], [25.4, 531.0], [25.5, 535.0], [25.6, 535.0], [25.7, 535.0], [25.8, 535.0], [25.9, 536.0], [26.0, 537.0], [26.1, 537.0], [26.2, 538.0], [26.3, 546.0], [26.4, 548.0], [26.5, 548.0], [26.6, 549.0], [26.7, 550.0], [26.8, 550.0], [26.9, 551.0], [27.0, 554.0], [27.1, 555.0], [27.2, 555.0], [27.3, 555.0], [27.4, 556.0], [27.5, 558.0], [27.6, 558.0], [27.7, 559.0], [27.8, 560.0], [27.9, 560.0], [28.0, 560.0], [28.1, 560.0], [28.2, 561.0], [28.3, 561.0], [28.4, 561.0], [28.5, 562.0], [28.6, 563.0], [28.7, 563.0], [28.8, 563.0], [28.9, 564.0], [29.0, 564.0], [29.1, 564.0], [29.2, 564.0], [29.3, 565.0], [29.4, 566.0], [29.5, 566.0], [29.6, 567.0], [29.7, 567.0], [29.8, 568.0], [29.9, 568.0], [30.0, 568.0], [30.1, 569.0], [30.2, 569.0], [30.3, 570.0], [30.4, 574.0], [30.5, 575.0], [30.6, 575.0], [30.7, 575.0], [30.8, 575.0], [30.9, 576.0], [31.0, 576.0], [31.1, 578.0], [31.2, 578.0], [31.3, 580.0], [31.4, 580.0], [31.5, 583.0], [31.6, 583.0], [31.7, 583.0], [31.8, 584.0], [31.9, 586.0], [32.0, 586.0], [32.1, 586.0], [32.2, 588.0], [32.3, 588.0], [32.4, 589.0], [32.5, 589.0], [32.6, 592.0], [32.7, 592.0], [32.8, 593.0], [32.9, 593.0], [33.0, 596.0], [33.1, 597.0], [33.2, 600.0], [33.3, 600.0], [33.4, 601.0], [33.5, 601.0], [33.6, 601.0], [33.7, 604.0], [33.8, 604.0], [33.9, 604.0], [34.0, 604.0], [34.1, 604.0], [34.2, 605.0], [34.3, 605.0], [34.4, 605.0], [34.5, 606.0], [34.6, 606.0], [34.7, 607.0], [34.8, 607.0], [34.9, 607.0], [35.0, 609.0], [35.1, 609.0], [35.2, 609.0], [35.3, 609.0], [35.4, 610.0], [35.5, 610.0], [35.6, 611.0], [35.7, 612.0], [35.8, 617.0], [35.9, 617.0], [36.0, 617.0], [36.1, 617.0], [36.2, 618.0], [36.3, 618.0], [36.4, 620.0], [36.5, 623.0], [36.6, 624.0], [36.7, 624.0], [36.8, 624.0], [36.9, 626.0], [37.0, 626.0], [37.1, 627.0], [37.2, 630.0], [37.3, 631.0], [37.4, 631.0], [37.5, 631.0], [37.6, 631.0], [37.7, 634.0], [37.8, 634.0], [37.9, 635.0], [38.0, 636.0], [38.1, 642.0], [38.2, 642.0], [38.3, 645.0], [38.4, 645.0], [38.5, 645.0], [38.6, 646.0], [38.7, 647.0], [38.8, 649.0], [38.9, 649.0], [39.0, 650.0], [39.1, 650.0], [39.2, 651.0], [39.3, 651.0], [39.4, 652.0], [39.5, 653.0], [39.6, 657.0], [39.7, 657.0], [39.8, 659.0], [39.9, 659.0], [40.0, 659.0], [40.1, 659.0], [40.2, 660.0], [40.3, 664.0], [40.4, 664.0], [40.5, 664.0], [40.6, 665.0], [40.7, 667.0], [40.8, 667.0], [40.9, 668.0], [41.0, 668.0], [41.1, 669.0], [41.2, 669.0], [41.3, 670.0], [41.4, 671.0], [41.5, 677.0], [41.6, 677.0], [41.7, 677.0], [41.8, 681.0], [41.9, 681.0], [42.0, 681.0], [42.1, 681.0], [42.2, 681.0], [42.3, 681.0], [42.4, 682.0], [42.5, 684.0], [42.6, 685.0], [42.7, 685.0], [42.8, 686.0], [42.9, 692.0], [43.0, 693.0], [43.1, 693.0], [43.2, 700.0], [43.3, 702.0], [43.4, 702.0], [43.5, 703.0], [43.6, 704.0], [43.7, 705.0], [43.8, 705.0], [43.9, 707.0], [44.0, 707.0], [44.1, 708.0], [44.2, 708.0], [44.3, 709.0], [44.4, 709.0], [44.5, 713.0], [44.6, 713.0], [44.7, 713.0], [44.8, 713.0], [44.9, 715.0], [45.0, 715.0], [45.1, 715.0], [45.2, 716.0], [45.3, 716.0], [45.4, 716.0], [45.5, 716.0], [45.6, 717.0], [45.7, 717.0], [45.8, 718.0], [45.9, 719.0], [46.0, 721.0], [46.1, 721.0], [46.2, 722.0], [46.3, 722.0], [46.4, 735.0], [46.5, 735.0], [46.6, 736.0], [46.7, 736.0], [46.8, 736.0], [46.9, 736.0], [47.0, 737.0], [47.1, 738.0], [47.2, 738.0], [47.3, 738.0], [47.4, 740.0], [47.5, 741.0], [47.6, 741.0], [47.7, 744.0], [47.8, 746.0], [47.9, 746.0], [48.0, 746.0], [48.1, 747.0], [48.2, 750.0], [48.3, 751.0], [48.4, 751.0], [48.5, 752.0], [48.6, 756.0], [48.7, 756.0], [48.8, 757.0], [48.9, 760.0], [49.0, 760.0], [49.1, 760.0], [49.2, 763.0], [49.3, 764.0], [49.4, 765.0], [49.5, 765.0], [49.6, 768.0], [49.7, 771.0], [49.8, 772.0], [49.9, 772.0], [50.0, 773.0], [50.1, 775.0], [50.2, 775.0], [50.3, 776.0], [50.4, 779.0], [50.5, 785.0], [50.6, 785.0], [50.7, 786.0], [50.8, 788.0], [50.9, 788.0], [51.0, 788.0], [51.1, 793.0], [51.2, 793.0], [51.3, 794.0], [51.4, 794.0], [51.5, 797.0], [51.6, 798.0], [51.7, 798.0], [51.8, 800.0], [51.9, 801.0], [52.0, 806.0], [52.1, 806.0], [52.2, 806.0], [52.3, 808.0], [52.4, 814.0], [52.5, 814.0], [52.6, 815.0], [52.7, 816.0], [52.8, 823.0], [52.9, 823.0], [53.0, 824.0], [53.1, 825.0], [53.2, 826.0], [53.3, 826.0], [53.4, 827.0], [53.5, 831.0], [53.6, 831.0], [53.7, 832.0], [53.8, 833.0], [53.9, 834.0], [54.0, 834.0], [54.1, 835.0], [54.2, 835.0], [54.3, 835.0], [54.4, 835.0], [54.5, 836.0], [54.6, 838.0], [54.7, 843.0], [54.8, 843.0], [54.9, 843.0], [55.0, 844.0], [55.1, 844.0], [55.2, 845.0], [55.3, 847.0], [55.4, 853.0], [55.5, 853.0], [55.6, 854.0], [55.7, 854.0], [55.8, 857.0], [55.9, 857.0], [56.0, 861.0], [56.1, 861.0], [56.2, 861.0], [56.3, 861.0], [56.4, 864.0], [56.5, 864.0], [56.6, 865.0], [56.7, 865.0], [56.8, 866.0], [56.9, 870.0], [57.0, 870.0], [57.1, 872.0], [57.2, 873.0], [57.3, 874.0], [57.4, 874.0], [57.5, 874.0], [57.6, 874.0], [57.7, 875.0], [57.8, 875.0], [57.9, 875.0], [58.0, 878.0], [58.1, 879.0], [58.2, 879.0], [58.3, 880.0], [58.4, 880.0], [58.5, 880.0], [58.6, 883.0], [58.7, 884.0], [58.8, 889.0], [58.9, 889.0], [59.0, 890.0], [59.1, 890.0], [59.2, 894.0], [59.3, 894.0], [59.4, 894.0], [59.5, 896.0], [59.6, 897.0], [59.7, 897.0], [59.8, 898.0], [59.9, 898.0], [60.0, 900.0], [60.1, 900.0], [60.2, 900.0], [60.3, 901.0], [60.4, 901.0], [60.5, 903.0], [60.6, 903.0], [60.7, 906.0], [60.8, 906.0], [60.9, 911.0], [61.0, 917.0], [61.1, 920.0], [61.2, 920.0], [61.3, 922.0], [61.4, 923.0], [61.5, 924.0], [61.6, 924.0], [61.7, 924.0], [61.8, 926.0], [61.9, 926.0], [62.0, 927.0], [62.1, 927.0], [62.2, 927.0], [62.3, 927.0], [62.4, 934.0], [62.5, 934.0], [62.6, 934.0], [62.7, 934.0], [62.8, 938.0], [62.9, 939.0], [63.0, 940.0], [63.1, 940.0], [63.2, 942.0], [63.3, 944.0], [63.4, 944.0], [63.5, 944.0], [63.6, 945.0], [63.7, 948.0], [63.8, 948.0], [63.9, 949.0], [64.0, 955.0], [64.1, 957.0], [64.2, 957.0], [64.3, 957.0], [64.4, 959.0], [64.5, 962.0], [64.6, 962.0], [64.7, 962.0], [64.8, 968.0], [64.9, 968.0], [65.0, 968.0], [65.1, 969.0], [65.2, 970.0], [65.3, 970.0], [65.4, 972.0], [65.5, 973.0], [65.6, 974.0], [65.7, 974.0], [65.8, 975.0], [65.9, 975.0], [66.0, 977.0], [66.1, 977.0], [66.2, 978.0], [66.3, 978.0], [66.4, 984.0], [66.5, 984.0], [66.6, 987.0], [66.7, 988.0], [66.8, 988.0], [66.9, 988.0], [67.0, 988.0], [67.1, 989.0], [67.2, 989.0], [67.3, 989.0], [67.4, 991.0], [67.5, 994.0], [67.6, 994.0], [67.7, 995.0], [67.8, 999.0], [67.9, 1000.0], [68.0, 1000.0], [68.1, 1000.0], [68.2, 1000.0], [68.3, 1000.0], [68.4, 1000.0], [68.5, 1001.0], [68.6, 1002.0], [68.7, 1002.0], [68.8, 1010.0], [68.9, 1011.0], [69.0, 1012.0], [69.1, 1012.0], [69.2, 1012.0], [69.3, 1020.0], [69.4, 1021.0], [69.5, 1021.0], [69.6, 1022.0], [69.7, 1026.0], [69.8, 1029.0], [69.9, 1029.0], [70.0, 1029.0], [70.1, 1033.0], [70.2, 1033.0], [70.3, 1035.0], [70.4, 1037.0], [70.5, 1039.0], [70.6, 1039.0], [70.7, 1039.0], [70.8, 1040.0], [70.9, 1041.0], [71.0, 1041.0], [71.1, 1048.0], [71.2, 1051.0], [71.3, 1051.0], [71.4, 1051.0], [71.5, 1052.0], [71.6, 1054.0], [71.7, 1054.0], [71.8, 1056.0], [71.9, 1057.0], [72.0, 1062.0], [72.1, 1062.0], [72.2, 1070.0], [72.3, 1072.0], [72.4, 1074.0], [72.5, 1074.0], [72.6, 1074.0], [72.7, 1076.0], [72.8, 1076.0], [72.9, 1076.0], [73.0, 1077.0], [73.1, 1079.0], [73.2, 1080.0], [73.3, 1080.0], [73.4, 1080.0], [73.5, 1085.0], [73.6, 1085.0], [73.7, 1092.0], [73.8, 1097.0], [73.9, 1103.0], [74.0, 1103.0], [74.1, 1106.0], [74.2, 1106.0], [74.3, 1109.0], [74.4, 1109.0], [74.5, 1109.0], [74.6, 1110.0], [74.7, 1111.0], [74.8, 1111.0], [74.9, 1113.0], [75.0, 1113.0], [75.1, 1113.0], [75.2, 1116.0], [75.3, 1119.0], [75.4, 1120.0], [75.5, 1120.0], [75.6, 1125.0], [75.7, 1126.0], [75.8, 1126.0], [75.9, 1126.0], [76.0, 1128.0], [76.1, 1134.0], [76.2, 1135.0], [76.3, 1135.0], [76.4, 1135.0], [76.5, 1138.0], [76.6, 1140.0], [76.7, 1140.0], [76.8, 1140.0], [76.9, 1140.0], [77.0, 1140.0], [77.1, 1141.0], [77.2, 1141.0], [77.3, 1146.0], [77.4, 1146.0], [77.5, 1147.0], [77.6, 1147.0], [77.7, 1147.0], [77.8, 1147.0], [77.9, 1148.0], [78.0, 1154.0], [78.1, 1158.0], [78.2, 1158.0], [78.3, 1158.0], [78.4, 1159.0], [78.5, 1159.0], [78.6, 1160.0], [78.7, 1165.0], [78.8, 1166.0], [78.9, 1166.0], [79.0, 1168.0], [79.1, 1168.0], [79.2, 1168.0], [79.3, 1168.0], [79.4, 1168.0], [79.5, 1169.0], [79.6, 1171.0], [79.7, 1171.0], [79.8, 1171.0], [79.9, 1175.0], [80.0, 1179.0], [80.1, 1179.0], [80.2, 1180.0], [80.3, 1181.0], [80.4, 1181.0], [80.5, 1181.0], [80.6, 1183.0], [80.7, 1185.0], [80.8, 1185.0], [80.9, 1187.0], [81.0, 1187.0], [81.1, 1189.0], [81.2, 1189.0], [81.3, 1190.0], [81.4, 1193.0], [81.5, 1198.0], [81.6, 1198.0], [81.7, 1200.0], [81.8, 1200.0], [81.9, 1200.0], [82.0, 1202.0], [82.1, 1203.0], [82.2, 1204.0], [82.3, 1204.0], [82.4, 1204.0], [82.5, 1205.0], [82.6, 1206.0], [82.7, 1206.0], [82.8, 1207.0], [82.9, 1211.0], [83.0, 1211.0], [83.1, 1211.0], [83.2, 1213.0], [83.3, 1214.0], [83.4, 1214.0], [83.5, 1215.0], [83.6, 1219.0], [83.7, 1219.0], [83.8, 1219.0], [83.9, 1221.0], [84.0, 1222.0], [84.1, 1222.0], [84.2, 1222.0], [84.3, 1222.0], [84.4, 1223.0], [84.5, 1233.0], [84.6, 1233.0], [84.7, 1234.0], [84.8, 1237.0], [84.9, 1237.0], [85.0, 1237.0], [85.1, 1240.0], [85.2, 1244.0], [85.3, 1244.0], [85.4, 1246.0], [85.5, 1254.0], [85.6, 1255.0], [85.7, 1255.0], [85.8, 1255.0], [85.9, 1259.0], [86.0, 1268.0], [86.1, 1268.0], [86.2, 1269.0], [86.3, 1275.0], [86.4, 1278.0], [86.5, 1278.0], [86.6, 1280.0], [86.7, 1280.0], [86.8, 1280.0], [86.9, 1286.0], [87.0, 1286.0], [87.1, 1290.0], [87.2, 1290.0], [87.3, 1292.0], [87.4, 1292.0], [87.5, 1293.0], [87.6, 1293.0], [87.7, 1302.0], [87.8, 1302.0], [87.9, 1304.0], [88.0, 1304.0], [88.1, 1306.0], [88.2, 1306.0], [88.3, 1311.0], [88.4, 1311.0], [88.5, 1314.0], [88.6, 1316.0], [88.7, 1316.0], [88.8, 1317.0], [88.9, 1328.0], [89.0, 1330.0], [89.1, 1330.0], [89.2, 1330.0], [89.3, 1331.0], [89.4, 1338.0], [89.5, 1338.0], [89.6, 1339.0], [89.7, 1344.0], [89.8, 1347.0], [89.9, 1347.0], [90.0, 1358.0], [90.1, 1361.0], [90.2, 1361.0], [90.3, 1364.0], [90.4, 1368.0], [90.5, 1375.0], [90.6, 1375.0], [90.7, 1380.0], [90.8, 1383.0], [90.9, 1384.0], [91.0, 1384.0], [91.1, 1386.0], [91.2, 1392.0], [91.3, 1393.0], [91.4, 1393.0], [91.5, 1395.0], [91.6, 1403.0], [91.7, 1403.0], [91.8, 1413.0], [91.9, 1418.0], [92.0, 1425.0], [92.1, 1425.0], [92.2, 1446.0], [92.3, 1450.0], [92.4, 1460.0], [92.5, 1460.0], [92.6, 1462.0], [92.7, 1474.0], [92.8, 1477.0], [92.9, 1477.0], [93.0, 1491.0], [93.1, 1501.0], [93.2, 1502.0], [93.3, 1502.0], [93.4, 1514.0], [93.5, 1514.0], [93.6, 1514.0], [93.7, 1518.0], [93.8, 1519.0], [93.9, 1522.0], [94.0, 1522.0], [94.1, 1525.0], [94.2, 1525.0], [94.3, 1534.0], [94.4, 1534.0], [94.5, 1547.0], [94.6, 1612.0], [94.7, 1612.0], [94.8, 1612.0], [94.9, 1648.0], [95.0, 1650.0], [95.1, 1650.0], [95.2, 1652.0], [95.3, 1666.0], [95.4, 1667.0], [95.5, 1667.0], [95.6, 1670.0], [95.7, 1690.0], [95.8, 1701.0], [95.9, 1701.0], [96.0, 1701.0], [96.1, 1738.0], [96.2, 1762.0], [96.3, 1762.0], [96.4, 1776.0], [96.5, 1797.0], [96.6, 1808.0], [96.7, 1808.0], [96.8, 1814.0], [96.9, 1818.0], [97.0, 1818.0], [97.1, 1899.0], [97.2, 1916.0], [97.3, 1922.0], [97.4, 1922.0], [97.5, 2009.0], [97.6, 2012.0], [97.7, 2203.0], [97.8, 2203.0], [97.9, 2209.0], [98.0, 2253.0], [98.1, 2354.0], [98.2, 2354.0], [98.3, 2806.0], [98.4, 2833.0], [98.5, 2833.0], [98.6, 2864.0], [98.7, 2875.0], [98.8, 2947.0], [98.9, 2947.0], [99.0, 3012.0], [99.1, 3067.0], [99.2, 3086.0], [99.3, 3086.0], [99.4, 3308.0], [99.5, 3386.0], [99.6, 3441.0], [99.7, 3441.0], [99.8, 3493.0], [99.9, 3620.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 79.0, "series": [{"data": [[600.0, 73.0], [700.0, 63.0], [800.0, 61.0], [900.0, 58.0], [1000.0, 44.0], [1100.0, 57.0], [1200.0, 44.0], [1300.0, 29.0], [1400.0, 11.0], [1500.0, 11.0], [100.0, 2.0], [1600.0, 9.0], [1700.0, 6.0], [1800.0, 4.0], [1900.0, 2.0], [2000.0, 2.0], [2200.0, 3.0], [2300.0, 1.0], [2800.0, 4.0], [2900.0, 1.0], [3000.0, 3.0], [200.0, 41.0], [3300.0, 2.0], [3400.0, 2.0], [3600.0, 1.0], [300.0, 48.0], [400.0, 74.0], [500.0, 79.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 519.0, "series": [{"data": [[0.0, 165.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 519.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.930926216640502, "minX": 1.60384008E12, "maxY": 10.0, "series": [{"data": [[1.60384008E12, 10.0], [1.60384014E12, 9.930926216640502]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384014E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 298.0, "minX": 1.0, "maxY": 1438.0, "series": [{"data": [[8.0, 298.0], [2.0, 1128.0], [1.0, 1116.0], [9.0, 617.0], [10.0, 859.6997245179061], [5.0, 1438.0], [6.0, 610.0], [3.0, 1138.0], [7.0, 1000.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 861.1224489795917]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 741.5333333333333, "minX": 1.60384008E12, "maxY": 1455886.8333333333, "series": [{"data": [[1.60384008E12, 379888.88333333336], [1.60384014E12, 1455886.8333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384008E12, 741.5333333333333], [1.60384014E12, 4781.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384014E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 826.2653061224495, "minX": 1.60384008E12, "maxY": 1087.6938775510203, "series": [{"data": [[1.60384008E12, 1087.6938775510203], [1.60384014E12, 826.2653061224495]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384014E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 825.0957613814751, "minX": 1.60384008E12, "maxY": 1085.7857142857135, "series": [{"data": [[1.60384008E12, 1085.7857142857135], [1.60384014E12, 825.0957613814751]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384014E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018838304552590265, "minX": 1.60384008E12, "maxY": 0.7959183673469391, "series": [{"data": [[1.60384008E12, 0.7959183673469391], [1.60384014E12, 0.018838304552590265]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384014E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60384008E12, "maxY": 3620.0, "series": [{"data": [[1.60384008E12, 3620.0], [1.60384014E12, 3493.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384008E12, 191.0], [1.60384014E12, 212.4519990873337]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384008E12, 191.0], [1.60384014E12, 215.5810003042221]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384008E12, 191.0], [1.60384014E12, 214.30499961972237]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384008E12, 191.0], [1.60384014E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384008E12, 717.0], [1.60384014E12, 793.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384014E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 495.5, "minX": 5.0, "maxY": 1183.5, "series": [{"data": [[8.0, 981.0], [9.0, 1183.5], [10.0, 920.0], [11.0, 968.0], [12.0, 810.0], [13.0, 737.5], [14.0, 559.0], [15.0, 598.0], [16.0, 495.5], [17.0, 575.0], [19.0, 586.0], [5.0, 1128.0], [7.0, 988.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 495.0, "minX": 5.0, "maxY": 1182.5, "series": [{"data": [[8.0, 979.5], [9.0, 1182.5], [10.0, 916.5], [11.0, 968.0], [12.0, 808.5], [13.0, 737.0], [14.0, 558.0], [15.0, 597.0], [16.0, 495.0], [17.0, 575.0], [19.0, 585.0], [5.0, 1127.0], [7.0, 987.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.60384008E12, "maxY": 10.45, "series": [{"data": [[1.60384008E12, 1.8], [1.60384014E12, 10.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60384008E12, "maxY": 10.616666666666667, "series": [{"data": [[1.60384008E12, 1.6333333333333333], [1.60384014E12, 10.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384014E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60384008E12, "maxY": 10.616666666666667, "series": [{"data": [[1.60384008E12, 1.6333333333333333], [1.60384014E12, 10.616666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384014E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60384008E12, "maxY": 10.616666666666667, "series": [{"data": [[1.60384008E12, 1.6333333333333333], [1.60384014E12, 10.616666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384014E12, "title": "Total Transactions Per Second"}},
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

