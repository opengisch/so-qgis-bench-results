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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3335.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 189.0], [0.3, 192.0], [0.4, 192.0], [0.5, 195.0], [0.6, 200.0], [0.7, 206.0], [0.8, 206.0], [0.9, 213.0], [1.0, 214.0], [1.1, 214.0], [1.2, 214.0], [1.3, 223.0], [1.4, 226.0], [1.5, 226.0], [1.6, 226.0], [1.7, 230.0], [1.8, 257.0], [1.9, 257.0], [2.0, 261.0], [2.1, 265.0], [2.2, 265.0], [2.3, 265.0], [2.4, 267.0], [2.5, 269.0], [2.6, 269.0], [2.7, 269.0], [2.8, 271.0], [2.9, 276.0], [3.0, 277.0], [3.1, 277.0], [3.2, 277.0], [3.3, 280.0], [3.4, 280.0], [3.5, 282.0], [3.6, 283.0], [3.7, 283.0], [3.8, 283.0], [3.9, 284.0], [4.0, 285.0], [4.1, 287.0], [4.2, 287.0], [4.3, 288.0], [4.4, 289.0], [4.5, 297.0], [4.6, 297.0], [4.7, 301.0], [4.8, 303.0], [4.9, 309.0], [5.0, 309.0], [5.1, 310.0], [5.2, 310.0], [5.3, 310.0], [5.4, 312.0], [5.5, 313.0], [5.6, 318.0], [5.7, 318.0], [5.8, 318.0], [5.9, 322.0], [6.0, 334.0], [6.1, 334.0], [6.2, 334.0], [6.3, 338.0], [6.4, 341.0], [6.5, 341.0], [6.6, 341.0], [6.7, 341.0], [6.8, 341.0], [6.9, 343.0], [7.0, 346.0], [7.1, 348.0], [7.2, 348.0], [7.3, 350.0], [7.4, 350.0], [7.5, 350.0], [7.6, 350.0], [7.7, 352.0], [7.8, 355.0], [7.9, 355.0], [8.0, 355.0], [8.1, 356.0], [8.2, 357.0], [8.3, 359.0], [8.4, 359.0], [8.5, 360.0], [8.6, 360.0], [8.7, 360.0], [8.8, 361.0], [8.9, 363.0], [9.0, 365.0], [9.1, 365.0], [9.2, 365.0], [9.3, 370.0], [9.4, 372.0], [9.5, 372.0], [9.6, 374.0], [9.7, 381.0], [9.8, 381.0], [9.9, 381.0], [10.0, 383.0], [10.1, 389.0], [10.2, 389.0], [10.3, 390.0], [10.4, 391.0], [10.5, 391.0], [10.6, 391.0], [10.7, 391.0], [10.8, 394.0], [10.9, 395.0], [11.0, 395.0], [11.1, 395.0], [11.2, 400.0], [11.3, 401.0], [11.4, 401.0], [11.5, 403.0], [11.6, 403.0], [11.7, 403.0], [11.8, 404.0], [11.9, 414.0], [12.0, 417.0], [12.1, 417.0], [12.2, 418.0], [12.3, 419.0], [12.4, 419.0], [12.5, 419.0], [12.6, 420.0], [12.7, 420.0], [12.8, 421.0], [12.9, 421.0], [13.0, 424.0], [13.1, 425.0], [13.2, 427.0], [13.3, 427.0], [13.4, 427.0], [13.5, 432.0], [13.6, 432.0], [13.7, 434.0], [13.8, 435.0], [13.9, 435.0], [14.0, 435.0], [14.1, 440.0], [14.2, 441.0], [14.3, 445.0], [14.4, 445.0], [14.5, 451.0], [14.6, 452.0], [14.7, 452.0], [14.8, 452.0], [14.9, 452.0], [15.0, 453.0], [15.1, 453.0], [15.2, 456.0], [15.3, 459.0], [15.4, 460.0], [15.5, 460.0], [15.6, 462.0], [15.7, 463.0], [15.8, 464.0], [15.9, 464.0], [16.0, 465.0], [16.1, 470.0], [16.2, 471.0], [16.3, 471.0], [16.4, 473.0], [16.5, 474.0], [16.6, 474.0], [16.7, 474.0], [16.8, 476.0], [16.9, 476.0], [17.0, 476.0], [17.1, 477.0], [17.2, 478.0], [17.3, 480.0], [17.4, 480.0], [17.5, 483.0], [17.6, 485.0], [17.7, 486.0], [17.8, 486.0], [17.9, 488.0], [18.0, 489.0], [18.1, 489.0], [18.2, 489.0], [18.3, 490.0], [18.4, 492.0], [18.5, 492.0], [18.6, 493.0], [18.7, 497.0], [18.8, 499.0], [18.9, 499.0], [19.0, 500.0], [19.1, 501.0], [19.2, 502.0], [19.3, 502.0], [19.4, 502.0], [19.5, 502.0], [19.6, 503.0], [19.7, 503.0], [19.8, 504.0], [19.9, 507.0], [20.0, 509.0], [20.1, 509.0], [20.2, 509.0], [20.3, 509.0], [20.4, 509.0], [20.5, 510.0], [20.6, 510.0], [20.7, 512.0], [20.8, 512.0], [20.9, 514.0], [21.0, 516.0], [21.1, 518.0], [21.2, 518.0], [21.3, 519.0], [21.4, 522.0], [21.5, 522.0], [21.6, 522.0], [21.7, 523.0], [21.8, 524.0], [21.9, 524.0], [22.0, 524.0], [22.1, 525.0], [22.2, 528.0], [22.3, 528.0], [22.4, 529.0], [22.5, 530.0], [22.6, 531.0], [22.7, 531.0], [22.8, 532.0], [22.9, 534.0], [23.0, 536.0], [23.1, 536.0], [23.2, 538.0], [23.3, 538.0], [23.4, 538.0], [23.5, 539.0], [23.6, 541.0], [23.7, 543.0], [23.8, 543.0], [23.9, 543.0], [24.0, 544.0], [24.1, 546.0], [24.2, 546.0], [24.3, 546.0], [24.4, 548.0], [24.5, 548.0], [24.6, 548.0], [24.7, 548.0], [24.8, 548.0], [24.9, 548.0], [25.0, 548.0], [25.1, 549.0], [25.2, 550.0], [25.3, 550.0], [25.4, 551.0], [25.5, 551.0], [25.6, 551.0], [25.7, 551.0], [25.8, 552.0], [25.9, 552.0], [26.0, 552.0], [26.1, 552.0], [26.2, 553.0], [26.3, 553.0], [26.4, 554.0], [26.5, 554.0], [26.6, 555.0], [26.7, 556.0], [26.8, 556.0], [26.9, 556.0], [27.0, 557.0], [27.1, 557.0], [27.2, 557.0], [27.3, 557.0], [27.4, 558.0], [27.5, 559.0], [27.6, 559.0], [27.7, 560.0], [27.8, 561.0], [27.9, 562.0], [28.0, 562.0], [28.1, 562.0], [28.2, 562.0], [28.3, 563.0], [28.4, 563.0], [28.5, 563.0], [28.6, 563.0], [28.7, 563.0], [28.8, 565.0], [28.9, 566.0], [29.0, 566.0], [29.1, 566.0], [29.2, 570.0], [29.3, 570.0], [29.4, 570.0], [29.5, 570.0], [29.6, 572.0], [29.7, 572.0], [29.8, 573.0], [29.9, 573.0], [30.0, 573.0], [30.1, 573.0], [30.2, 573.0], [30.3, 574.0], [30.4, 574.0], [30.5, 575.0], [30.6, 575.0], [30.7, 577.0], [30.8, 577.0], [30.9, 580.0], [31.0, 580.0], [31.1, 580.0], [31.2, 584.0], [31.3, 584.0], [31.4, 584.0], [31.5, 584.0], [31.6, 590.0], [31.7, 590.0], [31.8, 591.0], [31.9, 591.0], [32.0, 592.0], [32.1, 592.0], [32.2, 593.0], [32.3, 593.0], [32.4, 595.0], [32.5, 595.0], [32.6, 596.0], [32.7, 596.0], [32.8, 597.0], [32.9, 597.0], [33.0, 598.0], [33.1, 599.0], [33.2, 600.0], [33.3, 600.0], [33.4, 600.0], [33.5, 601.0], [33.6, 601.0], [33.7, 602.0], [33.8, 602.0], [33.9, 606.0], [34.0, 606.0], [34.1, 606.0], [34.2, 609.0], [34.3, 610.0], [34.4, 610.0], [34.5, 611.0], [34.6, 615.0], [34.7, 617.0], [34.8, 617.0], [34.9, 618.0], [35.0, 620.0], [35.1, 620.0], [35.2, 623.0], [35.3, 623.0], [35.4, 627.0], [35.5, 627.0], [35.6, 629.0], [35.7, 631.0], [35.8, 632.0], [35.9, 632.0], [36.0, 634.0], [36.1, 635.0], [36.2, 636.0], [36.3, 636.0], [36.4, 639.0], [36.5, 642.0], [36.6, 642.0], [36.7, 642.0], [36.8, 643.0], [36.9, 645.0], [37.0, 645.0], [37.1, 646.0], [37.2, 648.0], [37.3, 649.0], [37.4, 649.0], [37.5, 649.0], [37.6, 649.0], [37.7, 650.0], [37.8, 650.0], [37.9, 651.0], [38.0, 651.0], [38.1, 655.0], [38.2, 655.0], [38.3, 655.0], [38.4, 655.0], [38.5, 655.0], [38.6, 656.0], [38.7, 658.0], [38.8, 659.0], [38.9, 659.0], [39.0, 661.0], [39.1, 661.0], [39.2, 662.0], [39.3, 662.0], [39.4, 665.0], [39.5, 666.0], [39.6, 668.0], [39.7, 668.0], [39.8, 669.0], [39.9, 674.0], [40.0, 675.0], [40.1, 675.0], [40.2, 676.0], [40.3, 677.0], [40.4, 677.0], [40.5, 677.0], [40.6, 678.0], [40.7, 679.0], [40.8, 679.0], [40.9, 679.0], [41.0, 680.0], [41.1, 681.0], [41.2, 681.0], [41.3, 681.0], [41.4, 684.0], [41.5, 686.0], [41.6, 686.0], [41.7, 695.0], [41.8, 695.0], [41.9, 695.0], [42.0, 697.0], [42.1, 697.0], [42.2, 697.0], [42.3, 697.0], [42.4, 698.0], [42.5, 699.0], [42.6, 701.0], [42.7, 701.0], [42.8, 701.0], [42.9, 701.0], [43.0, 705.0], [43.1, 705.0], [43.2, 706.0], [43.3, 709.0], [43.4, 709.0], [43.5, 710.0], [43.6, 710.0], [43.7, 711.0], [43.8, 711.0], [43.9, 713.0], [44.0, 715.0], [44.1, 715.0], [44.2, 715.0], [44.3, 716.0], [44.4, 717.0], [44.5, 719.0], [44.6, 719.0], [44.7, 721.0], [44.8, 723.0], [44.9, 723.0], [45.0, 723.0], [45.1, 724.0], [45.2, 725.0], [45.3, 725.0], [45.4, 730.0], [45.5, 731.0], [45.6, 731.0], [45.7, 731.0], [45.8, 731.0], [45.9, 732.0], [46.0, 732.0], [46.1, 732.0], [46.2, 732.0], [46.3, 733.0], [46.4, 735.0], [46.5, 735.0], [46.6, 736.0], [46.7, 738.0], [46.8, 738.0], [46.9, 741.0], [47.0, 743.0], [47.1, 744.0], [47.2, 744.0], [47.3, 744.0], [47.4, 745.0], [47.5, 745.0], [47.6, 745.0], [47.7, 746.0], [47.8, 747.0], [47.9, 749.0], [48.0, 749.0], [48.1, 756.0], [48.2, 756.0], [48.3, 758.0], [48.4, 758.0], [48.5, 758.0], [48.6, 758.0], [48.7, 758.0], [48.8, 763.0], [48.9, 766.0], [49.0, 767.0], [49.1, 767.0], [49.2, 768.0], [49.3, 769.0], [49.4, 770.0], [49.5, 770.0], [49.6, 770.0], [49.7, 770.0], [49.8, 771.0], [49.9, 771.0], [50.0, 773.0], [50.1, 773.0], [50.2, 773.0], [50.3, 773.0], [50.4, 774.0], [50.5, 774.0], [50.6, 774.0], [50.7, 777.0], [50.8, 778.0], [50.9, 780.0], [51.0, 780.0], [51.1, 782.0], [51.2, 782.0], [51.3, 783.0], [51.4, 783.0], [51.5, 784.0], [51.6, 784.0], [51.7, 784.0], [51.8, 785.0], [51.9, 785.0], [52.0, 787.0], [52.1, 787.0], [52.2, 788.0], [52.3, 788.0], [52.4, 789.0], [52.5, 789.0], [52.6, 792.0], [52.7, 792.0], [52.8, 794.0], [52.9, 794.0], [53.0, 795.0], [53.1, 796.0], [53.2, 796.0], [53.3, 796.0], [53.4, 799.0], [53.5, 803.0], [53.6, 803.0], [53.7, 806.0], [53.8, 808.0], [53.9, 808.0], [54.0, 808.0], [54.1, 809.0], [54.2, 811.0], [54.3, 813.0], [54.4, 813.0], [54.5, 816.0], [54.6, 818.0], [54.7, 820.0], [54.8, 820.0], [54.9, 821.0], [55.0, 822.0], [55.1, 822.0], [55.2, 822.0], [55.3, 825.0], [55.4, 825.0], [55.5, 825.0], [55.6, 825.0], [55.7, 827.0], [55.8, 830.0], [55.9, 830.0], [56.0, 833.0], [56.1, 835.0], [56.2, 836.0], [56.3, 836.0], [56.4, 839.0], [56.5, 843.0], [56.6, 843.0], [56.7, 843.0], [56.8, 843.0], [56.9, 846.0], [57.0, 846.0], [57.1, 846.0], [57.2, 848.0], [57.3, 851.0], [57.4, 851.0], [57.5, 857.0], [57.6, 858.0], [57.7, 859.0], [57.8, 859.0], [57.9, 862.0], [58.0, 865.0], [58.1, 865.0], [58.2, 865.0], [58.3, 867.0], [58.4, 868.0], [58.5, 868.0], [58.6, 869.0], [58.7, 869.0], [58.8, 870.0], [58.9, 870.0], [59.0, 870.0], [59.1, 872.0], [59.2, 872.0], [59.3, 872.0], [59.4, 872.0], [59.5, 873.0], [59.6, 873.0], [59.7, 873.0], [59.8, 873.0], [59.9, 874.0], [60.0, 878.0], [60.1, 878.0], [60.2, 881.0], [60.3, 882.0], [60.4, 882.0], [60.5, 883.0], [60.6, 884.0], [60.7, 884.0], [60.8, 884.0], [60.9, 888.0], [61.0, 888.0], [61.1, 888.0], [61.2, 888.0], [61.3, 890.0], [61.4, 891.0], [61.5, 892.0], [61.6, 892.0], [61.7, 896.0], [61.8, 899.0], [61.9, 899.0], [62.0, 899.0], [62.1, 901.0], [62.2, 903.0], [62.3, 903.0], [62.4, 904.0], [62.5, 904.0], [62.6, 905.0], [62.7, 905.0], [62.8, 905.0], [62.9, 906.0], [63.0, 906.0], [63.1, 906.0], [63.2, 907.0], [63.3, 908.0], [63.4, 908.0], [63.5, 910.0], [63.6, 910.0], [63.7, 911.0], [63.8, 911.0], [63.9, 912.0], [64.0, 912.0], [64.1, 913.0], [64.2, 913.0], [64.3, 915.0], [64.4, 918.0], [64.5, 924.0], [64.6, 924.0], [64.7, 925.0], [64.8, 927.0], [64.9, 928.0], [65.0, 928.0], [65.1, 929.0], [65.2, 930.0], [65.3, 930.0], [65.4, 935.0], [65.5, 938.0], [65.6, 940.0], [65.7, 940.0], [65.8, 945.0], [65.9, 946.0], [66.0, 946.0], [66.1, 946.0], [66.2, 952.0], [66.3, 952.0], [66.4, 952.0], [66.5, 952.0], [66.6, 958.0], [66.7, 959.0], [66.8, 959.0], [66.9, 963.0], [67.0, 964.0], [67.1, 964.0], [67.2, 964.0], [67.3, 964.0], [67.4, 965.0], [67.5, 965.0], [67.6, 965.0], [67.7, 966.0], [67.8, 968.0], [67.9, 969.0], [68.0, 969.0], [68.1, 969.0], [68.2, 969.0], [68.3, 970.0], [68.4, 970.0], [68.5, 973.0], [68.6, 978.0], [68.7, 978.0], [68.8, 978.0], [68.9, 978.0], [69.0, 985.0], [69.1, 985.0], [69.2, 986.0], [69.3, 987.0], [69.4, 989.0], [69.5, 989.0], [69.6, 990.0], [69.7, 990.0], [69.8, 991.0], [69.9, 991.0], [70.0, 993.0], [70.1, 993.0], [70.2, 993.0], [70.3, 994.0], [70.4, 997.0], [70.5, 999.0], [70.6, 999.0], [70.7, 999.0], [70.8, 1000.0], [70.9, 1000.0], [71.0, 1000.0], [71.1, 1000.0], [71.2, 1001.0], [71.3, 1003.0], [71.4, 1003.0], [71.5, 1003.0], [71.6, 1007.0], [71.7, 1007.0], [71.8, 1010.0], [71.9, 1011.0], [72.0, 1012.0], [72.1, 1012.0], [72.2, 1012.0], [72.3, 1013.0], [72.4, 1015.0], [72.5, 1015.0], [72.6, 1016.0], [72.7, 1017.0], [72.8, 1018.0], [72.9, 1018.0], [73.0, 1018.0], [73.1, 1022.0], [73.2, 1023.0], [73.3, 1023.0], [73.4, 1024.0], [73.5, 1025.0], [73.6, 1025.0], [73.7, 1027.0], [73.8, 1028.0], [73.9, 1030.0], [74.0, 1030.0], [74.1, 1032.0], [74.2, 1034.0], [74.3, 1039.0], [74.4, 1039.0], [74.5, 1042.0], [74.6, 1044.0], [74.7, 1045.0], [74.8, 1045.0], [74.9, 1048.0], [75.0, 1049.0], [75.1, 1049.0], [75.2, 1050.0], [75.3, 1052.0], [75.4, 1053.0], [75.5, 1053.0], [75.6, 1053.0], [75.7, 1053.0], [75.8, 1054.0], [75.9, 1054.0], [76.0, 1054.0], [76.1, 1055.0], [76.2, 1056.0], [76.3, 1056.0], [76.4, 1062.0], [76.5, 1067.0], [76.6, 1068.0], [76.7, 1068.0], [76.8, 1071.0], [76.9, 1071.0], [77.0, 1071.0], [77.1, 1075.0], [77.2, 1077.0], [77.3, 1078.0], [77.4, 1078.0], [77.5, 1079.0], [77.6, 1079.0], [77.7, 1082.0], [77.8, 1082.0], [77.9, 1082.0], [78.0, 1082.0], [78.1, 1083.0], [78.2, 1083.0], [78.3, 1085.0], [78.4, 1088.0], [78.5, 1088.0], [78.6, 1089.0], [78.7, 1092.0], [78.8, 1092.0], [78.9, 1092.0], [79.0, 1093.0], [79.1, 1094.0], [79.2, 1094.0], [79.3, 1094.0], [79.4, 1097.0], [79.5, 1098.0], [79.6, 1099.0], [79.7, 1099.0], [79.8, 1101.0], [79.9, 1103.0], [80.0, 1104.0], [80.1, 1104.0], [80.2, 1104.0], [80.3, 1107.0], [80.4, 1107.0], [80.5, 1107.0], [80.6, 1108.0], [80.7, 1108.0], [80.8, 1108.0], [80.9, 1109.0], [81.0, 1112.0], [81.1, 1113.0], [81.2, 1113.0], [81.3, 1115.0], [81.4, 1120.0], [81.5, 1120.0], [81.6, 1120.0], [81.7, 1121.0], [81.8, 1122.0], [81.9, 1122.0], [82.0, 1125.0], [82.1, 1127.0], [82.2, 1127.0], [82.3, 1127.0], [82.4, 1129.0], [82.5, 1130.0], [82.6, 1135.0], [82.7, 1135.0], [82.8, 1136.0], [82.9, 1140.0], [83.0, 1141.0], [83.1, 1141.0], [83.2, 1149.0], [83.3, 1151.0], [83.4, 1151.0], [83.5, 1153.0], [83.6, 1154.0], [83.7, 1158.0], [83.8, 1158.0], [83.9, 1159.0], [84.0, 1159.0], [84.1, 1160.0], [84.2, 1160.0], [84.3, 1163.0], [84.4, 1166.0], [84.5, 1170.0], [84.6, 1170.0], [84.7, 1172.0], [84.8, 1176.0], [84.9, 1180.0], [85.0, 1180.0], [85.1, 1180.0], [85.2, 1181.0], [85.3, 1181.0], [85.4, 1181.0], [85.5, 1187.0], [85.6, 1188.0], [85.7, 1188.0], [85.8, 1193.0], [85.9, 1199.0], [86.0, 1202.0], [86.1, 1202.0], [86.2, 1202.0], [86.3, 1203.0], [86.4, 1206.0], [86.5, 1206.0], [86.6, 1207.0], [86.7, 1209.0], [86.8, 1209.0], [86.9, 1214.0], [87.0, 1218.0], [87.1, 1220.0], [87.2, 1220.0], [87.3, 1221.0], [87.4, 1225.0], [87.5, 1228.0], [87.6, 1228.0], [87.7, 1228.0], [87.8, 1229.0], [87.9, 1230.0], [88.0, 1230.0], [88.1, 1231.0], [88.2, 1234.0], [88.3, 1237.0], [88.4, 1237.0], [88.5, 1238.0], [88.6, 1240.0], [88.7, 1240.0], [88.8, 1250.0], [88.9, 1253.0], [89.0, 1255.0], [89.1, 1255.0], [89.2, 1257.0], [89.3, 1259.0], [89.4, 1264.0], [89.5, 1264.0], [89.6, 1264.0], [89.7, 1266.0], [89.8, 1267.0], [89.9, 1267.0], [90.0, 1271.0], [90.1, 1276.0], [90.2, 1276.0], [90.3, 1276.0], [90.4, 1276.0], [90.5, 1288.0], [90.6, 1288.0], [90.7, 1291.0], [90.8, 1303.0], [90.9, 1305.0], [91.0, 1305.0], [91.1, 1305.0], [91.2, 1306.0], [91.3, 1308.0], [91.4, 1308.0], [91.5, 1313.0], [91.6, 1315.0], [91.7, 1315.0], [91.8, 1325.0], [91.9, 1329.0], [92.0, 1330.0], [92.1, 1330.0], [92.2, 1330.0], [92.3, 1333.0], [92.4, 1333.0], [92.5, 1333.0], [92.6, 1333.0], [92.7, 1341.0], [92.8, 1341.0], [92.9, 1341.0], [93.0, 1352.0], [93.1, 1361.0], [93.2, 1363.0], [93.3, 1363.0], [93.4, 1376.0], [93.5, 1378.0], [93.6, 1378.0], [93.7, 1382.0], [93.8, 1390.0], [93.9, 1400.0], [94.0, 1400.0], [94.1, 1402.0], [94.2, 1405.0], [94.3, 1407.0], [94.4, 1407.0], [94.5, 1432.0], [94.6, 1435.0], [94.7, 1443.0], [94.8, 1443.0], [94.9, 1446.0], [95.0, 1460.0], [95.1, 1460.0], [95.2, 1474.0], [95.3, 1498.0], [95.4, 1509.0], [95.5, 1509.0], [95.6, 1519.0], [95.7, 1527.0], [95.8, 1559.0], [95.9, 1559.0], [96.0, 1620.0], [96.1, 1622.0], [96.2, 1630.0], [96.3, 1630.0], [96.4, 1631.0], [96.5, 1663.0], [96.6, 1676.0], [96.7, 1676.0], [96.8, 1701.0], [96.9, 1738.0], [97.0, 1738.0], [97.1, 1750.0], [97.2, 1770.0], [97.3, 1796.0], [97.4, 1796.0], [97.5, 1860.0], [97.6, 1951.0], [97.7, 1953.0], [97.8, 1953.0], [97.9, 2177.0], [98.0, 2416.0], [98.1, 2534.0], [98.2, 2534.0], [98.3, 2769.0], [98.4, 2783.0], [98.5, 2783.0], [98.6, 2824.0], [98.7, 2843.0], [98.8, 2889.0], [98.9, 2889.0], [99.0, 2936.0], [99.1, 2959.0], [99.2, 2994.0], [99.3, 2994.0], [99.4, 3005.0], [99.5, 3069.0], [99.6, 3164.0], [99.7, 3164.0], [99.8, 3185.0], [99.9, 3335.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 105.0, "series": [{"data": [[600.0, 69.0], [700.0, 80.0], [800.0, 63.0], [900.0, 64.0], [1000.0, 66.0], [1100.0, 46.0], [1200.0, 35.0], [1300.0, 23.0], [1400.0, 11.0], [1500.0, 4.0], [100.0, 4.0], [1600.0, 6.0], [1700.0, 5.0], [1800.0, 1.0], [1900.0, 2.0], [2100.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2800.0, 3.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 30.0], [3300.0, 1.0], [300.0, 48.0], [400.0, 57.0], [500.0, 105.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 34.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 561.0, "series": [{"data": [[0.0, 140.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 561.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 34.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93343195266272, "minX": 1.60218798E12, "maxY": 10.0, "series": [{"data": [[1.60218798E12, 10.0], [1.60218804E12, 9.93343195266272]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218804E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 269.0, "minX": 1.0, "maxY": 865.0, "series": [{"data": [[8.0, 269.0], [4.0, 593.0], [2.0, 580.0], [1.0, 865.0], [9.0, 719.0], [10.0, 842.1074380165292], [5.0, 680.0], [6.0, 560.0], [3.0, 497.0], [7.0, 563.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 839.0421768707484]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 443.6, "minX": 1.60218798E12, "maxY": 1657448.6, "series": [{"data": [[1.60218798E12, 178328.56666666668], [1.60218804E12, 1657448.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218798E12, 443.6], [1.60218804E12, 5079.433333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218804E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 817.6242603550297, "minX": 1.60218798E12, "maxY": 1084.4406779661022, "series": [{"data": [[1.60218798E12, 1084.4406779661022], [1.60218804E12, 817.6242603550297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218804E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 816.5843195266274, "minX": 1.60218798E12, "maxY": 1083.2542372881355, "series": [{"data": [[1.60218798E12, 1083.2542372881355], [1.60218804E12, 816.5843195266274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218804E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.017751479289940832, "minX": 1.60218798E12, "maxY": 1.8474576271186447, "series": [{"data": [[1.60218798E12, 1.8474576271186447], [1.60218804E12, 0.017751479289940832]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218804E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60218798E12, "maxY": 3335.0, "series": [{"data": [[1.60218798E12, 3164.0], [1.60218804E12, 3335.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218798E12, 189.0], [1.60218804E12, 213.09299983859063]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218798E12, 189.0], [1.60218804E12, 213.70230006456376]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218798E12, 189.0], [1.60218804E12, 213.4314999192953]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218798E12, 189.0], [1.60218804E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218798E12, 679.0], [1.60218804E12, 779.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218804E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 386.5, "minX": 1.0, "maxY": 2936.0, "series": [{"data": [[8.0, 963.0], [9.0, 950.5], [10.0, 995.5], [11.0, 859.0], [12.0, 893.5], [13.0, 715.0], [14.0, 730.0], [15.0, 596.5], [16.0, 696.0], [1.0, 865.0], [17.0, 595.0], [18.0, 561.5], [19.0, 565.0], [5.0, 2936.0], [20.0, 386.5], [21.0, 552.0], [6.0, 576.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 386.0, "minX": 1.0, "maxY": 2934.0, "series": [{"data": [[8.0, 962.0], [9.0, 949.0], [10.0, 994.5], [11.0, 858.0], [12.0, 892.0], [13.0, 715.0], [14.0, 729.0], [15.0, 596.0], [16.0, 694.5], [1.0, 864.0], [17.0, 594.0], [18.0, 561.5], [19.0, 564.0], [5.0, 2934.0], [20.0, 386.0], [21.0, 552.0], [6.0, 576.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60218798E12, "maxY": 11.1, "series": [{"data": [[1.60218798E12, 1.15], [1.60218804E12, 11.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218804E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60218798E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60218798E12, 0.9833333333333333], [1.60218804E12, 11.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218804E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60218798E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60218798E12, 0.9833333333333333], [1.60218804E12, 11.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218804E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9833333333333333, "minX": 1.60218798E12, "maxY": 11.266666666666667, "series": [{"data": [[1.60218798E12, 0.9833333333333333], [1.60218804E12, 11.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218804E12, "title": "Total Transactions Per Second"}},
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

