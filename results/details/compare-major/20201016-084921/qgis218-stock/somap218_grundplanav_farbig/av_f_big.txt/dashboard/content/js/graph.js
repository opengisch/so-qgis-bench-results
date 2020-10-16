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
        data: {"result": {"minY": 222.0, "minX": 0.0, "maxY": 9472.0, "series": [{"data": [[0.0, 222.0], [0.1, 222.0], [0.2, 225.0], [0.3, 227.0], [0.4, 227.0], [0.5, 229.0], [0.6, 230.0], [0.7, 242.0], [0.8, 242.0], [0.9, 242.0], [1.0, 243.0], [1.1, 244.0], [1.2, 244.0], [1.3, 245.0], [1.4, 248.0], [1.5, 248.0], [1.6, 248.0], [1.7, 250.0], [1.8, 250.0], [1.9, 250.0], [2.0, 251.0], [2.1, 267.0], [2.2, 270.0], [2.3, 270.0], [2.4, 270.0], [2.5, 272.0], [2.6, 281.0], [2.7, 281.0], [2.8, 282.0], [2.9, 290.0], [3.0, 290.0], [3.1, 290.0], [3.2, 295.0], [3.3, 297.0], [3.4, 297.0], [3.5, 298.0], [3.6, 299.0], [3.7, 300.0], [3.8, 300.0], [3.9, 307.0], [4.0, 311.0], [4.1, 318.0], [4.2, 318.0], [4.3, 321.0], [4.4, 324.0], [4.5, 328.0], [4.6, 328.0], [4.7, 329.0], [4.8, 333.0], [4.9, 333.0], [5.0, 333.0], [5.1, 335.0], [5.2, 342.0], [5.3, 342.0], [5.4, 342.0], [5.5, 344.0], [5.6, 345.0], [5.7, 345.0], [5.8, 351.0], [5.9, 352.0], [6.0, 354.0], [6.1, 354.0], [6.2, 356.0], [6.3, 358.0], [6.4, 358.0], [6.5, 358.0], [6.6, 359.0], [6.7, 360.0], [6.8, 360.0], [6.9, 361.0], [7.0, 363.0], [7.1, 367.0], [7.2, 367.0], [7.3, 368.0], [7.4, 370.0], [7.5, 373.0], [7.6, 373.0], [7.7, 376.0], [7.8, 376.0], [7.9, 381.0], [8.0, 381.0], [8.1, 382.0], [8.2, 383.0], [8.3, 385.0], [8.4, 385.0], [8.5, 385.0], [8.6, 391.0], [8.7, 391.0], [8.8, 392.0], [8.9, 396.0], [9.0, 399.0], [9.1, 399.0], [9.2, 400.0], [9.3, 400.0], [9.4, 402.0], [9.5, 402.0], [9.6, 403.0], [9.7, 404.0], [9.8, 404.0], [9.9, 404.0], [10.0, 405.0], [10.1, 406.0], [10.2, 406.0], [10.3, 407.0], [10.4, 408.0], [10.5, 409.0], [10.6, 409.0], [10.7, 409.0], [10.8, 410.0], [10.9, 410.0], [11.0, 410.0], [11.1, 415.0], [11.2, 416.0], [11.3, 416.0], [11.4, 416.0], [11.5, 416.0], [11.6, 422.0], [11.7, 422.0], [11.8, 423.0], [11.9, 429.0], [12.0, 429.0], [12.1, 429.0], [12.2, 431.0], [12.3, 431.0], [12.4, 432.0], [12.5, 432.0], [12.6, 433.0], [12.7, 434.0], [12.8, 435.0], [12.9, 435.0], [13.0, 436.0], [13.1, 437.0], [13.2, 437.0], [13.3, 437.0], [13.4, 439.0], [13.5, 442.0], [13.6, 442.0], [13.7, 444.0], [13.8, 447.0], [13.9, 447.0], [14.0, 447.0], [14.1, 448.0], [14.2, 449.0], [14.3, 450.0], [14.4, 450.0], [14.5, 453.0], [14.6, 455.0], [14.7, 455.0], [14.8, 455.0], [14.9, 456.0], [15.0, 456.0], [15.1, 456.0], [15.2, 459.0], [15.3, 460.0], [15.4, 460.0], [15.5, 460.0], [15.6, 461.0], [15.7, 462.0], [15.8, 462.0], [15.9, 462.0], [16.0, 462.0], [16.1, 463.0], [16.2, 463.0], [16.3, 463.0], [16.4, 469.0], [16.5, 471.0], [16.6, 471.0], [16.7, 471.0], [16.8, 472.0], [16.9, 472.0], [17.0, 472.0], [17.1, 473.0], [17.2, 474.0], [17.3, 475.0], [17.4, 475.0], [17.5, 476.0], [17.6, 477.0], [17.7, 478.0], [17.8, 478.0], [17.9, 479.0], [18.0, 479.0], [18.1, 481.0], [18.2, 481.0], [18.3, 483.0], [18.4, 484.0], [18.5, 484.0], [18.6, 484.0], [18.7, 485.0], [18.8, 486.0], [18.9, 486.0], [19.0, 486.0], [19.1, 488.0], [19.2, 489.0], [19.3, 489.0], [19.4, 489.0], [19.5, 489.0], [19.6, 489.0], [19.7, 489.0], [19.8, 490.0], [19.9, 490.0], [20.0, 490.0], [20.1, 490.0], [20.2, 490.0], [20.3, 491.0], [20.4, 491.0], [20.5, 492.0], [20.6, 494.0], [20.7, 495.0], [20.8, 495.0], [20.9, 496.0], [21.0, 500.0], [21.1, 501.0], [21.2, 501.0], [21.3, 502.0], [21.4, 502.0], [21.5, 505.0], [21.6, 505.0], [21.7, 505.0], [21.8, 505.0], [21.9, 505.0], [22.0, 506.0], [22.1, 506.0], [22.2, 506.0], [22.3, 506.0], [22.4, 507.0], [22.5, 507.0], [22.6, 508.0], [22.7, 508.0], [22.8, 508.0], [22.9, 509.0], [23.0, 509.0], [23.1, 509.0], [23.2, 509.0], [23.3, 510.0], [23.4, 510.0], [23.5, 511.0], [23.6, 513.0], [23.7, 513.0], [23.8, 513.0], [23.9, 513.0], [24.0, 515.0], [24.1, 515.0], [24.2, 515.0], [24.3, 516.0], [24.4, 516.0], [24.5, 518.0], [24.6, 518.0], [24.7, 519.0], [24.8, 519.0], [24.9, 520.0], [25.0, 520.0], [25.1, 520.0], [25.2, 524.0], [25.3, 524.0], [25.4, 524.0], [25.5, 524.0], [25.6, 524.0], [25.7, 524.0], [25.8, 525.0], [25.9, 526.0], [26.0, 527.0], [26.1, 527.0], [26.2, 529.0], [26.3, 529.0], [26.4, 531.0], [26.5, 531.0], [26.6, 531.0], [26.7, 534.0], [26.8, 534.0], [26.9, 534.0], [27.0, 535.0], [27.1, 536.0], [27.2, 536.0], [27.3, 537.0], [27.4, 538.0], [27.5, 539.0], [27.6, 539.0], [27.7, 540.0], [27.8, 542.0], [27.9, 542.0], [28.0, 542.0], [28.1, 543.0], [28.2, 543.0], [28.3, 544.0], [28.4, 544.0], [28.5, 546.0], [28.6, 546.0], [28.7, 546.0], [28.8, 546.0], [28.9, 547.0], [29.0, 551.0], [29.1, 551.0], [29.2, 552.0], [29.3, 552.0], [29.4, 552.0], [29.5, 552.0], [29.6, 553.0], [29.7, 554.0], [29.8, 556.0], [29.9, 556.0], [30.0, 557.0], [30.1, 557.0], [30.2, 557.0], [30.3, 558.0], [30.4, 558.0], [30.5, 562.0], [30.6, 562.0], [30.7, 562.0], [30.8, 564.0], [30.9, 564.0], [31.0, 564.0], [31.1, 564.0], [31.2, 565.0], [31.3, 566.0], [31.4, 566.0], [31.5, 566.0], [31.6, 567.0], [31.7, 567.0], [31.8, 571.0], [31.9, 572.0], [32.0, 573.0], [32.1, 573.0], [32.2, 576.0], [32.3, 576.0], [32.4, 577.0], [32.5, 577.0], [32.6, 577.0], [32.7, 578.0], [32.8, 579.0], [32.9, 579.0], [33.0, 579.0], [33.1, 580.0], [33.2, 580.0], [33.3, 580.0], [33.4, 582.0], [33.5, 583.0], [33.6, 583.0], [33.7, 584.0], [33.8, 586.0], [33.9, 587.0], [34.0, 587.0], [34.1, 588.0], [34.2, 589.0], [34.3, 592.0], [34.4, 592.0], [34.5, 592.0], [34.6, 593.0], [34.7, 594.0], [34.8, 594.0], [34.9, 596.0], [35.0, 598.0], [35.1, 598.0], [35.2, 600.0], [35.3, 601.0], [35.4, 601.0], [35.5, 601.0], [35.6, 601.0], [35.7, 603.0], [35.8, 605.0], [35.9, 605.0], [36.0, 607.0], [36.1, 607.0], [36.2, 608.0], [36.3, 608.0], [36.4, 609.0], [36.5, 609.0], [36.6, 612.0], [36.7, 612.0], [36.8, 614.0], [36.9, 616.0], [37.0, 616.0], [37.1, 616.0], [37.2, 618.0], [37.3, 620.0], [37.4, 620.0], [37.5, 622.0], [37.6, 622.0], [37.7, 622.0], [37.8, 622.0], [37.9, 623.0], [38.0, 628.0], [38.1, 628.0], [38.2, 628.0], [38.3, 629.0], [38.4, 632.0], [38.5, 632.0], [38.6, 633.0], [38.7, 634.0], [38.8, 634.0], [38.9, 634.0], [39.0, 637.0], [39.1, 637.0], [39.2, 640.0], [39.3, 640.0], [39.4, 641.0], [39.5, 641.0], [39.6, 646.0], [39.7, 646.0], [39.8, 647.0], [39.9, 648.0], [40.0, 648.0], [40.1, 648.0], [40.2, 649.0], [40.3, 650.0], [40.4, 650.0], [40.5, 650.0], [40.6, 651.0], [40.7, 652.0], [40.8, 652.0], [40.9, 652.0], [41.0, 653.0], [41.1, 654.0], [41.2, 654.0], [41.3, 654.0], [41.4, 656.0], [41.5, 658.0], [41.6, 658.0], [41.7, 660.0], [41.8, 661.0], [41.9, 661.0], [42.0, 662.0], [42.1, 663.0], [42.2, 663.0], [42.3, 663.0], [42.4, 663.0], [42.5, 664.0], [42.6, 666.0], [42.7, 666.0], [42.8, 666.0], [42.9, 666.0], [43.0, 668.0], [43.1, 668.0], [43.2, 668.0], [43.3, 669.0], [43.4, 669.0], [43.5, 673.0], [43.6, 673.0], [43.7, 673.0], [43.8, 673.0], [43.9, 674.0], [44.0, 675.0], [44.1, 677.0], [44.2, 677.0], [44.3, 678.0], [44.4, 679.0], [44.5, 679.0], [44.6, 679.0], [44.7, 679.0], [44.8, 680.0], [44.9, 682.0], [45.0, 682.0], [45.1, 683.0], [45.2, 684.0], [45.3, 684.0], [45.4, 688.0], [45.5, 693.0], [45.6, 693.0], [45.7, 693.0], [45.8, 693.0], [45.9, 694.0], [46.0, 695.0], [46.1, 695.0], [46.2, 695.0], [46.3, 696.0], [46.4, 697.0], [46.5, 697.0], [46.6, 697.0], [46.7, 698.0], [46.8, 698.0], [46.9, 700.0], [47.0, 703.0], [47.1, 704.0], [47.2, 704.0], [47.3, 704.0], [47.4, 708.0], [47.5, 710.0], [47.6, 710.0], [47.7, 715.0], [47.8, 719.0], [47.9, 720.0], [48.0, 720.0], [48.1, 723.0], [48.2, 723.0], [48.3, 724.0], [48.4, 724.0], [48.5, 725.0], [48.6, 725.0], [48.7, 725.0], [48.8, 726.0], [48.9, 726.0], [49.0, 727.0], [49.1, 727.0], [49.2, 730.0], [49.3, 730.0], [49.4, 732.0], [49.5, 732.0], [49.6, 733.0], [49.7, 734.0], [49.8, 736.0], [49.9, 736.0], [50.0, 736.0], [50.1, 736.0], [50.2, 736.0], [50.3, 738.0], [50.4, 738.0], [50.5, 739.0], [50.6, 739.0], [50.7, 739.0], [50.8, 743.0], [50.9, 743.0], [51.0, 743.0], [51.1, 749.0], [51.2, 750.0], [51.3, 751.0], [51.4, 751.0], [51.5, 752.0], [51.6, 756.0], [51.7, 756.0], [51.8, 757.0], [51.9, 759.0], [52.0, 761.0], [52.1, 761.0], [52.2, 761.0], [52.3, 762.0], [52.4, 763.0], [52.5, 763.0], [52.6, 765.0], [52.7, 765.0], [52.8, 765.0], [52.9, 765.0], [53.0, 769.0], [53.1, 770.0], [53.2, 770.0], [53.3, 770.0], [53.4, 770.0], [53.5, 775.0], [53.6, 775.0], [53.7, 775.0], [53.8, 779.0], [53.9, 780.0], [54.0, 780.0], [54.1, 781.0], [54.2, 782.0], [54.3, 782.0], [54.4, 782.0], [54.5, 783.0], [54.6, 785.0], [54.7, 787.0], [54.8, 787.0], [54.9, 788.0], [55.0, 790.0], [55.1, 790.0], [55.2, 795.0], [55.3, 797.0], [55.4, 798.0], [55.5, 798.0], [55.6, 802.0], [55.7, 805.0], [55.8, 805.0], [55.9, 805.0], [56.0, 810.0], [56.1, 813.0], [56.2, 813.0], [56.3, 813.0], [56.4, 814.0], [56.5, 815.0], [56.6, 816.0], [56.7, 816.0], [56.8, 819.0], [56.9, 820.0], [57.0, 820.0], [57.1, 820.0], [57.2, 821.0], [57.3, 823.0], [57.4, 823.0], [57.5, 824.0], [57.6, 825.0], [57.7, 826.0], [57.8, 826.0], [57.9, 831.0], [58.0, 834.0], [58.1, 836.0], [58.2, 836.0], [58.3, 845.0], [58.4, 847.0], [58.5, 847.0], [58.6, 847.0], [58.7, 851.0], [58.8, 852.0], [58.9, 852.0], [59.0, 853.0], [59.1, 856.0], [59.2, 862.0], [59.3, 862.0], [59.4, 863.0], [59.5, 866.0], [59.6, 866.0], [59.7, 866.0], [59.8, 867.0], [59.9, 871.0], [60.0, 871.0], [60.1, 871.0], [60.2, 874.0], [60.3, 875.0], [60.4, 875.0], [60.5, 879.0], [60.6, 880.0], [60.7, 883.0], [60.8, 883.0], [60.9, 888.0], [61.0, 890.0], [61.1, 895.0], [61.2, 895.0], [61.3, 898.0], [61.4, 899.0], [61.5, 903.0], [61.6, 903.0], [61.7, 905.0], [61.8, 906.0], [61.9, 906.0], [62.0, 908.0], [62.1, 911.0], [62.2, 917.0], [62.3, 917.0], [62.4, 921.0], [62.5, 923.0], [62.6, 923.0], [62.7, 923.0], [62.8, 935.0], [62.9, 935.0], [63.0, 936.0], [63.1, 936.0], [63.2, 938.0], [63.3, 940.0], [63.4, 940.0], [63.5, 944.0], [63.6, 944.0], [63.7, 944.0], [63.8, 944.0], [63.9, 946.0], [64.0, 948.0], [64.1, 950.0], [64.2, 950.0], [64.3, 951.0], [64.4, 951.0], [64.5, 952.0], [64.6, 952.0], [64.7, 957.0], [64.8, 961.0], [64.9, 963.0], [65.0, 963.0], [65.1, 964.0], [65.2, 967.0], [65.3, 967.0], [65.4, 970.0], [65.5, 971.0], [65.6, 972.0], [65.7, 972.0], [65.8, 975.0], [65.9, 976.0], [66.0, 978.0], [66.1, 978.0], [66.2, 986.0], [66.3, 987.0], [66.4, 987.0], [66.5, 987.0], [66.6, 990.0], [66.7, 992.0], [66.8, 992.0], [66.9, 993.0], [67.0, 994.0], [67.1, 995.0], [67.2, 995.0], [67.3, 997.0], [67.4, 1000.0], [67.5, 1002.0], [67.6, 1002.0], [67.7, 1002.0], [67.8, 1003.0], [67.9, 1004.0], [68.0, 1004.0], [68.1, 1005.0], [68.2, 1006.0], [68.3, 1007.0], [68.4, 1007.0], [68.5, 1008.0], [68.6, 1012.0], [68.7, 1012.0], [68.8, 1013.0], [68.9, 1014.0], [69.0, 1015.0], [69.1, 1015.0], [69.2, 1018.0], [69.3, 1021.0], [69.4, 1023.0], [69.5, 1023.0], [69.6, 1026.0], [69.7, 1028.0], [69.8, 1029.0], [69.9, 1029.0], [70.0, 1032.0], [70.1, 1032.0], [70.2, 1032.0], [70.3, 1032.0], [70.4, 1035.0], [70.5, 1038.0], [70.6, 1038.0], [70.7, 1039.0], [70.8, 1041.0], [70.9, 1042.0], [71.0, 1042.0], [71.1, 1045.0], [71.2, 1046.0], [71.3, 1047.0], [71.4, 1047.0], [71.5, 1049.0], [71.6, 1050.0], [71.7, 1050.0], [71.8, 1051.0], [71.9, 1053.0], [72.0, 1054.0], [72.1, 1054.0], [72.2, 1057.0], [72.3, 1059.0], [72.4, 1067.0], [72.5, 1067.0], [72.6, 1069.0], [72.7, 1073.0], [72.8, 1076.0], [72.9, 1076.0], [73.0, 1078.0], [73.1, 1079.0], [73.2, 1081.0], [73.3, 1081.0], [73.4, 1085.0], [73.5, 1088.0], [73.6, 1088.0], [73.7, 1096.0], [73.8, 1106.0], [73.9, 1107.0], [74.0, 1107.0], [74.1, 1109.0], [74.2, 1111.0], [74.3, 1112.0], [74.4, 1112.0], [74.5, 1114.0], [74.6, 1116.0], [74.7, 1118.0], [74.8, 1118.0], [74.9, 1120.0], [75.0, 1127.0], [75.1, 1127.0], [75.2, 1128.0], [75.3, 1132.0], [75.4, 1132.0], [75.5, 1132.0], [75.6, 1139.0], [75.7, 1141.0], [75.8, 1146.0], [75.9, 1146.0], [76.0, 1150.0], [76.1, 1151.0], [76.2, 1158.0], [76.3, 1158.0], [76.4, 1159.0], [76.5, 1162.0], [76.6, 1170.0], [76.7, 1170.0], [76.8, 1170.0], [76.9, 1173.0], [77.0, 1173.0], [77.1, 1176.0], [77.2, 1176.0], [77.3, 1177.0], [77.4, 1177.0], [77.5, 1182.0], [77.6, 1189.0], [77.7, 1191.0], [77.8, 1191.0], [77.9, 1193.0], [78.0, 1195.0], [78.1, 1197.0], [78.2, 1197.0], [78.3, 1198.0], [78.4, 1198.0], [78.5, 1198.0], [78.6, 1199.0], [78.7, 1201.0], [78.8, 1203.0], [78.9, 1203.0], [79.0, 1206.0], [79.1, 1211.0], [79.2, 1219.0], [79.3, 1219.0], [79.4, 1221.0], [79.5, 1226.0], [79.6, 1229.0], [79.7, 1229.0], [79.8, 1230.0], [79.9, 1248.0], [80.0, 1252.0], [80.1, 1252.0], [80.2, 1260.0], [80.3, 1261.0], [80.4, 1261.0], [80.5, 1262.0], [80.6, 1264.0], [80.7, 1264.0], [80.8, 1264.0], [80.9, 1270.0], [81.0, 1273.0], [81.1, 1282.0], [81.2, 1282.0], [81.3, 1283.0], [81.4, 1286.0], [81.5, 1292.0], [81.6, 1292.0], [81.7, 1294.0], [81.8, 1305.0], [81.9, 1305.0], [82.0, 1311.0], [82.1, 1312.0], [82.2, 1316.0], [82.3, 1316.0], [82.4, 1320.0], [82.5, 1321.0], [82.6, 1322.0], [82.7, 1322.0], [82.8, 1324.0], [82.9, 1329.0], [83.0, 1330.0], [83.1, 1330.0], [83.2, 1332.0], [83.3, 1334.0], [83.4, 1334.0], [83.5, 1335.0], [83.6, 1339.0], [83.7, 1340.0], [83.8, 1340.0], [83.9, 1345.0], [84.0, 1356.0], [84.1, 1371.0], [84.2, 1371.0], [84.3, 1371.0], [84.4, 1372.0], [84.5, 1373.0], [84.6, 1373.0], [84.7, 1385.0], [84.8, 1386.0], [84.9, 1392.0], [85.0, 1392.0], [85.1, 1393.0], [85.2, 1397.0], [85.3, 1397.0], [85.4, 1408.0], [85.5, 1418.0], [85.6, 1419.0], [85.7, 1419.0], [85.8, 1421.0], [85.9, 1426.0], [86.0, 1438.0], [86.1, 1438.0], [86.2, 1439.0], [86.3, 1451.0], [86.4, 1453.0], [86.5, 1453.0], [86.6, 1457.0], [86.7, 1458.0], [86.8, 1458.0], [86.9, 1458.0], [87.0, 1461.0], [87.1, 1464.0], [87.2, 1464.0], [87.3, 1465.0], [87.4, 1478.0], [87.5, 1485.0], [87.6, 1485.0], [87.7, 1485.0], [87.8, 1486.0], [87.9, 1487.0], [88.0, 1487.0], [88.1, 1487.0], [88.2, 1489.0], [88.3, 1489.0], [88.4, 1489.0], [88.5, 1496.0], [88.6, 1498.0], [88.7, 1498.0], [88.8, 1502.0], [88.9, 1505.0], [89.0, 1513.0], [89.1, 1513.0], [89.2, 1514.0], [89.3, 1520.0], [89.4, 1523.0], [89.5, 1523.0], [89.6, 1536.0], [89.7, 1543.0], [89.8, 1574.0], [89.9, 1574.0], [90.0, 1578.0], [90.1, 1583.0], [90.2, 1583.0], [90.3, 1583.0], [90.4, 1603.0], [90.5, 1605.0], [90.6, 1605.0], [90.7, 1606.0], [90.8, 1614.0], [90.9, 1623.0], [91.0, 1623.0], [91.1, 1626.0], [91.2, 1628.0], [91.3, 1637.0], [91.4, 1637.0], [91.5, 1638.0], [91.6, 1673.0], [91.7, 1673.0], [91.8, 1677.0], [91.9, 1681.0], [92.0, 1689.0], [92.1, 1689.0], [92.2, 1698.0], [92.3, 1698.0], [92.4, 1717.0], [92.5, 1717.0], [92.6, 1720.0], [92.7, 1728.0], [92.8, 1728.0], [92.9, 1728.0], [93.0, 1731.0], [93.1, 1746.0], [93.2, 1765.0], [93.3, 1765.0], [93.4, 1775.0], [93.5, 1778.0], [93.6, 1778.0], [93.7, 1791.0], [93.8, 1802.0], [93.9, 1802.0], [94.0, 1802.0], [94.1, 1806.0], [94.2, 1821.0], [94.3, 1830.0], [94.4, 1830.0], [94.5, 1830.0], [94.6, 1851.0], [94.7, 1891.0], [94.8, 1891.0], [94.9, 1914.0], [95.0, 1916.0], [95.1, 1916.0], [95.2, 1935.0], [95.3, 1943.0], [95.4, 1954.0], [95.5, 1954.0], [95.6, 1958.0], [95.7, 1970.0], [95.8, 1989.0], [95.9, 1989.0], [96.0, 1993.0], [96.1, 1998.0], [96.2, 1998.0], [96.3, 1998.0], [96.4, 2016.0], [96.5, 2032.0], [96.6, 2094.0], [96.7, 2094.0], [96.8, 2173.0], [96.9, 2181.0], [97.0, 2181.0], [97.1, 2219.0], [97.2, 2220.0], [97.3, 2372.0], [97.4, 2372.0], [97.5, 2401.0], [97.6, 2425.0], [97.7, 2569.0], [97.8, 2569.0], [97.9, 2593.0], [98.0, 2625.0], [98.1, 2665.0], [98.2, 2665.0], [98.3, 2706.0], [98.4, 2826.0], [98.5, 2826.0], [98.6, 2939.0], [98.7, 3128.0], [98.8, 3142.0], [98.9, 3142.0], [99.0, 3185.0], [99.1, 3539.0], [99.2, 3635.0], [99.3, 3635.0], [99.4, 4334.0], [99.5, 4368.0], [99.6, 5494.0], [99.7, 5494.0], [99.8, 8959.0], [99.9, 9472.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 104.0, "series": [{"data": [[8900.0, 1.0], [600.0, 86.0], [9400.0, 1.0], [700.0, 64.0], [800.0, 44.0], [900.0, 43.0], [1000.0, 47.0], [1100.0, 36.0], [1200.0, 23.0], [1300.0, 26.0], [1400.0, 25.0], [1500.0, 12.0], [1600.0, 15.0], [1700.0, 10.0], [1800.0, 8.0], [1900.0, 11.0], [2000.0, 3.0], [2100.0, 2.0], [2300.0, 1.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [200.0, 27.0], [3500.0, 1.0], [3600.0, 1.0], [4300.0, 2.0], [300.0, 40.0], [5400.0, 1.0], [400.0, 87.0], [500.0, 104.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 83.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 497.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 497.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 83.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.859813084112151, "minX": 1.60283832E12, "maxY": 10.0, "series": [{"data": [[1.60283838E12, 9.859813084112151], [1.60283832E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283838E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 385.0, "minX": 1.0, "maxY": 3128.0, "series": [{"data": [[8.0, 546.0], [4.0, 525.0], [2.0, 3128.0], [1.0, 1262.0], [9.0, 385.0], [10.0, 920.9517906336085], [5.0, 513.0], [6.0, 558.0], [3.0, 1051.0], [7.0, 546.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 921.2585034013604]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2415.483333333333, "minX": 1.60283832E12, "maxY": 1272530.95, "series": [{"data": [[1.60283838E12, 922998.3], [1.60283832E12, 1272530.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283838E12, 2415.483333333333], [1.60283832E12, 3107.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283838E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 905.7415458937195, "minX": 1.60283832E12, "maxY": 941.2710280373824, "series": [{"data": [[1.60283838E12, 941.2710280373824], [1.60283832E12, 905.7415458937195]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283838E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 904.3429951690827, "minX": 1.60283832E12, "maxY": 939.9221183800624, "series": [{"data": [[1.60283838E12, 939.9221183800624], [1.60283832E12, 904.3429951690827]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283838E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.024922118380062284, "minX": 1.60283832E12, "maxY": 0.19565217391304354, "series": [{"data": [[1.60283838E12, 0.024922118380062284], [1.60283832E12, 0.19565217391304354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283838E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.60283832E12, "maxY": 9472.0, "series": [{"data": [[1.60283838E12, 9472.0], [1.60283832E12, 8959.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283838E12, 315.653998234272], [1.60283832E12, 228.46999980211257]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283838E12, 319.87800030708314], [1.60283832E12, 229.10850003957748]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283838E12, 318.5899996161461], [1.60283832E12, 228.8849999010563]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283838E12, 248.0], [1.60283832E12, 222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283838E12, 749.0], [1.60283832E12, 731.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283838E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 420.5, "minX": 4.0, "maxY": 1461.5, "series": [{"data": [[8.0, 670.5], [9.0, 813.0], [10.0, 935.5], [11.0, 866.0], [12.0, 639.5], [13.0, 719.0], [14.0, 560.0], [15.0, 662.0], [4.0, 1461.5], [16.0, 420.5], [17.0, 524.0], [5.0, 1088.0], [6.0, 1249.0], [7.0, 1054.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 420.5, "minX": 4.0, "maxY": 1460.0, "series": [{"data": [[8.0, 670.0], [9.0, 812.0], [10.0, 935.0], [11.0, 865.0], [12.0, 639.0], [13.0, 718.5], [14.0, 560.0], [15.0, 661.0], [4.0, 1460.0], [16.0, 420.5], [17.0, 524.0], [5.0, 1086.0], [6.0, 1247.5], [7.0, 1048.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.183333333333334, "minX": 1.60283832E12, "maxY": 7.066666666666666, "series": [{"data": [[1.60283838E12, 5.183333333333334], [1.60283832E12, 7.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283838E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.35, "minX": 1.60283832E12, "maxY": 6.9, "series": [{"data": [[1.60283838E12, 5.35], [1.60283832E12, 6.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283838E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.35, "minX": 1.60283832E12, "maxY": 6.9, "series": [{"data": [[1.60283838E12, 5.35], [1.60283832E12, 6.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283838E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.35, "minX": 1.60283832E12, "maxY": 6.9, "series": [{"data": [[1.60283838E12, 5.35], [1.60283832E12, 6.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283838E12, "title": "Total Transactions Per Second"}},
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

