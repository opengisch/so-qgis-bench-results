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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 3666.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 174.0], [0.3, 180.0], [0.4, 180.0], [0.5, 183.0], [0.6, 189.0], [0.7, 200.0], [0.8, 200.0], [0.9, 200.0], [1.0, 205.0], [1.1, 206.0], [1.2, 206.0], [1.3, 208.0], [1.4, 208.0], [1.5, 208.0], [1.6, 208.0], [1.7, 212.0], [1.8, 214.0], [1.9, 214.0], [2.0, 215.0], [2.1, 223.0], [2.2, 228.0], [2.3, 228.0], [2.4, 228.0], [2.5, 232.0], [2.6, 235.0], [2.7, 235.0], [2.8, 235.0], [2.9, 250.0], [3.0, 252.0], [3.1, 252.0], [3.2, 259.0], [3.3, 261.0], [3.4, 261.0], [3.5, 266.0], [3.6, 267.0], [3.7, 268.0], [3.8, 268.0], [3.9, 269.0], [4.0, 274.0], [4.1, 275.0], [4.2, 275.0], [4.3, 275.0], [4.4, 276.0], [4.5, 280.0], [4.6, 280.0], [4.7, 280.0], [4.8, 283.0], [4.9, 284.0], [5.0, 284.0], [5.1, 285.0], [5.2, 288.0], [5.3, 288.0], [5.4, 291.0], [5.5, 292.0], [5.6, 295.0], [5.7, 295.0], [5.8, 295.0], [5.9, 297.0], [6.0, 299.0], [6.1, 299.0], [6.2, 299.0], [6.3, 300.0], [6.4, 303.0], [6.5, 303.0], [6.6, 303.0], [6.7, 304.0], [6.8, 304.0], [6.9, 305.0], [7.0, 306.0], [7.1, 306.0], [7.2, 306.0], [7.3, 309.0], [7.4, 310.0], [7.5, 312.0], [7.6, 312.0], [7.7, 313.0], [7.8, 313.0], [7.9, 316.0], [8.0, 316.0], [8.1, 316.0], [8.2, 317.0], [8.3, 317.0], [8.4, 317.0], [8.5, 322.0], [8.6, 323.0], [8.7, 323.0], [8.8, 325.0], [8.9, 329.0], [9.0, 335.0], [9.1, 335.0], [9.2, 338.0], [9.3, 339.0], [9.4, 340.0], [9.5, 340.0], [9.6, 345.0], [9.7, 348.0], [9.8, 348.0], [9.9, 348.0], [10.0, 351.0], [10.1, 353.0], [10.2, 353.0], [10.3, 353.0], [10.4, 357.0], [10.5, 358.0], [10.6, 358.0], [10.7, 358.0], [10.8, 365.0], [10.9, 365.0], [11.0, 365.0], [11.1, 367.0], [11.2, 372.0], [11.3, 372.0], [11.4, 372.0], [11.5, 378.0], [11.6, 381.0], [11.7, 381.0], [11.8, 382.0], [11.9, 383.0], [12.0, 384.0], [12.1, 384.0], [12.2, 386.0], [12.3, 387.0], [12.4, 387.0], [12.5, 387.0], [12.6, 392.0], [12.7, 401.0], [12.8, 403.0], [12.9, 403.0], [13.0, 403.0], [13.1, 409.0], [13.2, 409.0], [13.3, 409.0], [13.4, 412.0], [13.5, 418.0], [13.6, 418.0], [13.7, 419.0], [13.8, 420.0], [13.9, 422.0], [14.0, 422.0], [14.1, 422.0], [14.2, 422.0], [14.3, 423.0], [14.4, 423.0], [14.5, 425.0], [14.6, 426.0], [14.7, 436.0], [14.8, 436.0], [14.9, 437.0], [15.0, 437.0], [15.1, 437.0], [15.2, 437.0], [15.3, 438.0], [15.4, 439.0], [15.5, 439.0], [15.6, 440.0], [15.7, 441.0], [15.8, 441.0], [15.9, 441.0], [16.0, 443.0], [16.1, 446.0], [16.2, 450.0], [16.3, 450.0], [16.4, 450.0], [16.5, 451.0], [16.6, 453.0], [16.7, 453.0], [16.8, 455.0], [16.9, 455.0], [17.0, 455.0], [17.1, 455.0], [17.2, 457.0], [17.3, 459.0], [17.4, 459.0], [17.5, 460.0], [17.6, 462.0], [17.7, 467.0], [17.8, 467.0], [17.9, 467.0], [18.0, 467.0], [18.1, 472.0], [18.2, 472.0], [18.3, 473.0], [18.4, 476.0], [18.5, 476.0], [18.6, 477.0], [18.7, 477.0], [18.8, 477.0], [18.9, 477.0], [19.0, 480.0], [19.1, 484.0], [19.2, 484.0], [19.3, 484.0], [19.4, 486.0], [19.5, 489.0], [19.6, 494.0], [19.7, 494.0], [19.8, 500.0], [19.9, 505.0], [20.0, 505.0], [20.1, 505.0], [20.2, 507.0], [20.3, 507.0], [20.4, 507.0], [20.5, 508.0], [20.6, 509.0], [20.7, 514.0], [20.8, 514.0], [20.9, 514.0], [21.0, 514.0], [21.1, 518.0], [21.2, 518.0], [21.3, 519.0], [21.4, 521.0], [21.5, 521.0], [21.6, 521.0], [21.7, 523.0], [21.8, 524.0], [21.9, 524.0], [22.0, 525.0], [22.1, 529.0], [22.2, 531.0], [22.3, 531.0], [22.4, 531.0], [22.5, 531.0], [22.6, 532.0], [22.7, 532.0], [22.8, 536.0], [22.9, 537.0], [23.0, 537.0], [23.1, 537.0], [23.2, 537.0], [23.3, 538.0], [23.4, 538.0], [23.5, 539.0], [23.6, 539.0], [23.7, 539.0], [23.8, 539.0], [23.9, 541.0], [24.0, 543.0], [24.1, 543.0], [24.2, 543.0], [24.3, 544.0], [24.4, 544.0], [24.5, 545.0], [24.6, 545.0], [24.7, 546.0], [24.8, 549.0], [24.9, 550.0], [25.0, 550.0], [25.1, 550.0], [25.2, 551.0], [25.3, 551.0], [25.4, 551.0], [25.5, 552.0], [25.6, 552.0], [25.7, 552.0], [25.8, 552.0], [25.9, 553.0], [26.0, 553.0], [26.1, 553.0], [26.2, 554.0], [26.3, 555.0], [26.4, 555.0], [26.5, 555.0], [26.6, 555.0], [26.7, 555.0], [26.8, 555.0], [26.9, 556.0], [27.0, 557.0], [27.1, 558.0], [27.2, 558.0], [27.3, 559.0], [27.4, 559.0], [27.5, 560.0], [27.6, 560.0], [27.7, 560.0], [27.8, 563.0], [27.9, 563.0], [28.0, 563.0], [28.1, 563.0], [28.2, 563.0], [28.3, 563.0], [28.4, 563.0], [28.5, 564.0], [28.6, 564.0], [28.7, 564.0], [28.8, 566.0], [28.9, 566.0], [29.0, 566.0], [29.1, 566.0], [29.2, 566.0], [29.3, 567.0], [29.4, 569.0], [29.5, 569.0], [29.6, 570.0], [29.7, 570.0], [29.8, 570.0], [29.9, 570.0], [30.0, 571.0], [30.1, 571.0], [30.2, 571.0], [30.3, 572.0], [30.4, 573.0], [30.5, 574.0], [30.6, 574.0], [30.7, 576.0], [30.8, 577.0], [30.9, 579.0], [31.0, 579.0], [31.1, 580.0], [31.2, 580.0], [31.3, 580.0], [31.4, 580.0], [31.5, 582.0], [31.6, 582.0], [31.7, 582.0], [31.8, 585.0], [31.9, 585.0], [32.0, 589.0], [32.1, 589.0], [32.2, 590.0], [32.3, 592.0], [32.4, 592.0], [32.5, 592.0], [32.6, 593.0], [32.7, 594.0], [32.8, 594.0], [32.9, 594.0], [33.0, 595.0], [33.1, 597.0], [33.2, 598.0], [33.3, 598.0], [33.4, 598.0], [33.5, 599.0], [33.6, 599.0], [33.7, 599.0], [33.8, 599.0], [33.9, 602.0], [34.0, 602.0], [34.1, 603.0], [34.2, 605.0], [34.3, 605.0], [34.4, 605.0], [34.5, 606.0], [34.6, 606.0], [34.7, 608.0], [34.8, 608.0], [34.9, 608.0], [35.0, 609.0], [35.1, 609.0], [35.2, 611.0], [35.3, 612.0], [35.4, 612.0], [35.5, 612.0], [35.6, 612.0], [35.7, 614.0], [35.8, 619.0], [35.9, 619.0], [36.0, 624.0], [36.1, 624.0], [36.2, 624.0], [36.3, 624.0], [36.4, 626.0], [36.5, 628.0], [36.6, 628.0], [36.7, 628.0], [36.8, 628.0], [36.9, 628.0], [37.0, 628.0], [37.1, 629.0], [37.2, 631.0], [37.3, 631.0], [37.4, 631.0], [37.5, 631.0], [37.6, 632.0], [37.7, 634.0], [37.8, 634.0], [37.9, 636.0], [38.0, 638.0], [38.1, 643.0], [38.2, 643.0], [38.3, 644.0], [38.4, 645.0], [38.5, 645.0], [38.6, 646.0], [38.7, 647.0], [38.8, 647.0], [38.9, 647.0], [39.0, 648.0], [39.1, 650.0], [39.2, 652.0], [39.3, 652.0], [39.4, 652.0], [39.5, 657.0], [39.6, 658.0], [39.7, 658.0], [39.8, 659.0], [39.9, 661.0], [40.0, 661.0], [40.1, 661.0], [40.2, 662.0], [40.3, 664.0], [40.4, 664.0], [40.5, 669.0], [40.6, 670.0], [40.7, 670.0], [40.8, 670.0], [40.9, 673.0], [41.0, 675.0], [41.1, 676.0], [41.2, 676.0], [41.3, 676.0], [41.4, 682.0], [41.5, 690.0], [41.6, 690.0], [41.7, 691.0], [41.8, 691.0], [41.9, 691.0], [42.0, 692.0], [42.1, 692.0], [42.2, 692.0], [42.3, 692.0], [42.4, 695.0], [42.5, 698.0], [42.6, 700.0], [42.7, 700.0], [42.8, 701.0], [42.9, 703.0], [43.0, 703.0], [43.1, 703.0], [43.2, 703.0], [43.3, 705.0], [43.4, 705.0], [43.5, 709.0], [43.6, 713.0], [43.7, 715.0], [43.8, 715.0], [43.9, 716.0], [44.0, 719.0], [44.1, 720.0], [44.2, 720.0], [44.3, 720.0], [44.4, 721.0], [44.5, 722.0], [44.6, 722.0], [44.7, 723.0], [44.8, 723.0], [44.9, 724.0], [45.0, 724.0], [45.1, 727.0], [45.2, 729.0], [45.3, 729.0], [45.4, 729.0], [45.5, 731.0], [45.6, 734.0], [45.7, 734.0], [45.8, 734.0], [45.9, 735.0], [46.0, 737.0], [46.1, 737.0], [46.2, 740.0], [46.3, 742.0], [46.4, 742.0], [46.5, 742.0], [46.6, 748.0], [46.7, 748.0], [46.8, 748.0], [46.9, 751.0], [47.0, 754.0], [47.1, 754.0], [47.2, 754.0], [47.3, 758.0], [47.4, 761.0], [47.5, 762.0], [47.6, 762.0], [47.7, 763.0], [47.8, 765.0], [47.9, 766.0], [48.0, 766.0], [48.1, 768.0], [48.2, 770.0], [48.3, 771.0], [48.4, 771.0], [48.5, 773.0], [48.6, 779.0], [48.7, 779.0], [48.8, 782.0], [48.9, 785.0], [49.0, 790.0], [49.1, 790.0], [49.2, 798.0], [49.3, 798.0], [49.4, 799.0], [49.5, 799.0], [49.6, 799.0], [49.7, 799.0], [49.8, 804.0], [49.9, 804.0], [50.0, 804.0], [50.1, 805.0], [50.2, 805.0], [50.3, 806.0], [50.4, 807.0], [50.5, 807.0], [50.6, 807.0], [50.7, 809.0], [50.8, 809.0], [50.9, 810.0], [51.0, 810.0], [51.1, 811.0], [51.2, 818.0], [51.3, 821.0], [51.4, 821.0], [51.5, 821.0], [51.6, 823.0], [51.7, 823.0], [51.8, 824.0], [51.9, 826.0], [52.0, 827.0], [52.1, 827.0], [52.2, 829.0], [52.3, 830.0], [52.4, 831.0], [52.5, 831.0], [52.6, 835.0], [52.7, 837.0], [52.8, 837.0], [52.9, 837.0], [53.0, 837.0], [53.1, 838.0], [53.2, 840.0], [53.3, 840.0], [53.4, 843.0], [53.5, 843.0], [53.6, 843.0], [53.7, 843.0], [53.8, 844.0], [53.9, 844.0], [54.0, 844.0], [54.1, 845.0], [54.2, 846.0], [54.3, 847.0], [54.4, 847.0], [54.5, 849.0], [54.6, 851.0], [54.7, 853.0], [54.8, 853.0], [54.9, 855.0], [55.0, 856.0], [55.1, 856.0], [55.2, 857.0], [55.3, 857.0], [55.4, 857.0], [55.5, 857.0], [55.6, 858.0], [55.7, 858.0], [55.8, 859.0], [55.9, 859.0], [56.0, 860.0], [56.1, 863.0], [56.2, 864.0], [56.3, 864.0], [56.4, 865.0], [56.5, 866.0], [56.6, 869.0], [56.7, 869.0], [56.8, 874.0], [56.9, 874.0], [57.0, 874.0], [57.1, 876.0], [57.2, 876.0], [57.3, 877.0], [57.4, 877.0], [57.5, 877.0], [57.6, 879.0], [57.7, 880.0], [57.8, 880.0], [57.9, 882.0], [58.0, 883.0], [58.1, 883.0], [58.2, 883.0], [58.3, 884.0], [58.4, 885.0], [58.5, 885.0], [58.6, 887.0], [58.7, 887.0], [58.8, 888.0], [58.9, 888.0], [59.0, 889.0], [59.1, 890.0], [59.2, 890.0], [59.3, 890.0], [59.4, 891.0], [59.5, 891.0], [59.6, 892.0], [59.7, 892.0], [59.8, 894.0], [59.9, 894.0], [60.0, 895.0], [60.1, 895.0], [60.2, 897.0], [60.3, 900.0], [60.4, 900.0], [60.5, 900.0], [60.6, 903.0], [60.7, 904.0], [60.8, 904.0], [60.9, 906.0], [61.0, 906.0], [61.1, 907.0], [61.2, 907.0], [61.3, 908.0], [61.4, 910.0], [61.5, 910.0], [61.6, 910.0], [61.7, 910.0], [61.8, 911.0], [61.9, 911.0], [62.0, 915.0], [62.1, 918.0], [62.2, 918.0], [62.3, 918.0], [62.4, 920.0], [62.5, 920.0], [62.6, 920.0], [62.7, 920.0], [62.8, 923.0], [62.9, 923.0], [63.0, 923.0], [63.1, 923.0], [63.2, 934.0], [63.3, 935.0], [63.4, 935.0], [63.5, 936.0], [63.6, 936.0], [63.7, 937.0], [63.8, 937.0], [63.9, 937.0], [64.0, 938.0], [64.1, 940.0], [64.2, 940.0], [64.3, 941.0], [64.4, 942.0], [64.5, 948.0], [64.6, 948.0], [64.7, 951.0], [64.8, 952.0], [64.9, 953.0], [65.0, 953.0], [65.1, 954.0], [65.2, 955.0], [65.3, 955.0], [65.4, 958.0], [65.5, 961.0], [65.6, 962.0], [65.7, 962.0], [65.8, 962.0], [65.9, 963.0], [66.0, 964.0], [66.1, 964.0], [66.2, 964.0], [66.3, 964.0], [66.4, 967.0], [66.5, 967.0], [66.6, 968.0], [66.7, 970.0], [66.8, 970.0], [66.9, 970.0], [67.0, 971.0], [67.1, 971.0], [67.2, 971.0], [67.3, 971.0], [67.4, 974.0], [67.5, 975.0], [67.6, 975.0], [67.7, 977.0], [67.8, 977.0], [67.9, 982.0], [68.0, 982.0], [68.1, 982.0], [68.2, 982.0], [68.3, 983.0], [68.4, 983.0], [68.5, 985.0], [68.6, 986.0], [68.7, 986.0], [68.8, 987.0], [68.9, 988.0], [69.0, 988.0], [69.1, 988.0], [69.2, 992.0], [69.3, 997.0], [69.4, 998.0], [69.5, 998.0], [69.6, 999.0], [69.7, 999.0], [69.8, 1002.0], [69.9, 1002.0], [70.0, 1004.0], [70.1, 1005.0], [70.2, 1005.0], [70.3, 1005.0], [70.4, 1010.0], [70.5, 1011.0], [70.6, 1011.0], [70.7, 1013.0], [70.8, 1017.0], [70.9, 1017.0], [71.0, 1017.0], [71.1, 1018.0], [71.2, 1024.0], [71.3, 1024.0], [71.4, 1024.0], [71.5, 1027.0], [71.6, 1028.0], [71.7, 1028.0], [71.8, 1029.0], [71.9, 1030.0], [72.0, 1031.0], [72.1, 1031.0], [72.2, 1033.0], [72.3, 1036.0], [72.4, 1040.0], [72.5, 1040.0], [72.6, 1043.0], [72.7, 1043.0], [72.8, 1044.0], [72.9, 1044.0], [73.0, 1045.0], [73.1, 1045.0], [73.2, 1049.0], [73.3, 1049.0], [73.4, 1050.0], [73.5, 1052.0], [73.6, 1052.0], [73.7, 1053.0], [73.8, 1053.0], [73.9, 1054.0], [74.0, 1054.0], [74.1, 1054.0], [74.2, 1055.0], [74.3, 1060.0], [74.4, 1060.0], [74.5, 1060.0], [74.6, 1066.0], [74.7, 1068.0], [74.8, 1068.0], [74.9, 1069.0], [75.0, 1069.0], [75.1, 1069.0], [75.2, 1070.0], [75.3, 1072.0], [75.4, 1073.0], [75.5, 1073.0], [75.6, 1073.0], [75.7, 1074.0], [75.8, 1074.0], [75.9, 1074.0], [76.0, 1075.0], [76.1, 1078.0], [76.2, 1080.0], [76.3, 1080.0], [76.4, 1086.0], [76.5, 1087.0], [76.6, 1089.0], [76.7, 1089.0], [76.8, 1090.0], [76.9, 1092.0], [77.0, 1092.0], [77.1, 1092.0], [77.2, 1092.0], [77.3, 1093.0], [77.4, 1093.0], [77.5, 1094.0], [77.6, 1095.0], [77.7, 1097.0], [77.8, 1097.0], [77.9, 1103.0], [78.0, 1104.0], [78.1, 1108.0], [78.2, 1108.0], [78.3, 1113.0], [78.4, 1115.0], [78.5, 1115.0], [78.6, 1116.0], [78.7, 1117.0], [78.8, 1117.0], [78.9, 1117.0], [79.0, 1119.0], [79.1, 1120.0], [79.2, 1124.0], [79.3, 1124.0], [79.4, 1125.0], [79.5, 1126.0], [79.6, 1127.0], [79.7, 1127.0], [79.8, 1129.0], [79.9, 1130.0], [80.0, 1130.0], [80.1, 1130.0], [80.2, 1133.0], [80.3, 1136.0], [80.4, 1136.0], [80.5, 1140.0], [80.6, 1140.0], [80.7, 1140.0], [80.8, 1140.0], [80.9, 1142.0], [81.0, 1144.0], [81.1, 1147.0], [81.2, 1147.0], [81.3, 1148.0], [81.4, 1150.0], [81.5, 1156.0], [81.6, 1156.0], [81.7, 1156.0], [81.8, 1157.0], [81.9, 1157.0], [82.0, 1158.0], [82.1, 1159.0], [82.2, 1160.0], [82.3, 1160.0], [82.4, 1161.0], [82.5, 1163.0], [82.6, 1165.0], [82.7, 1165.0], [82.8, 1165.0], [82.9, 1167.0], [83.0, 1169.0], [83.1, 1169.0], [83.2, 1169.0], [83.3, 1171.0], [83.4, 1171.0], [83.5, 1171.0], [83.6, 1172.0], [83.7, 1173.0], [83.8, 1173.0], [83.9, 1188.0], [84.0, 1189.0], [84.1, 1191.0], [84.2, 1191.0], [84.3, 1194.0], [84.4, 1195.0], [84.5, 1196.0], [84.6, 1196.0], [84.7, 1205.0], [84.8, 1206.0], [84.9, 1206.0], [85.0, 1206.0], [85.1, 1209.0], [85.2, 1209.0], [85.3, 1209.0], [85.4, 1209.0], [85.5, 1213.0], [85.6, 1215.0], [85.7, 1215.0], [85.8, 1215.0], [85.9, 1216.0], [86.0, 1220.0], [86.1, 1220.0], [86.2, 1224.0], [86.3, 1226.0], [86.4, 1226.0], [86.5, 1226.0], [86.6, 1228.0], [86.7, 1229.0], [86.8, 1229.0], [86.9, 1230.0], [87.0, 1233.0], [87.1, 1234.0], [87.2, 1234.0], [87.3, 1235.0], [87.4, 1240.0], [87.5, 1241.0], [87.6, 1241.0], [87.7, 1244.0], [87.8, 1249.0], [87.9, 1251.0], [88.0, 1251.0], [88.1, 1256.0], [88.2, 1258.0], [88.3, 1258.0], [88.4, 1258.0], [88.5, 1266.0], [88.6, 1271.0], [88.7, 1271.0], [88.8, 1272.0], [88.9, 1278.0], [89.0, 1279.0], [89.1, 1279.0], [89.2, 1280.0], [89.3, 1283.0], [89.4, 1285.0], [89.5, 1285.0], [89.6, 1291.0], [89.7, 1295.0], [89.8, 1299.0], [89.9, 1299.0], [90.0, 1300.0], [90.1, 1310.0], [90.2, 1310.0], [90.3, 1313.0], [90.4, 1314.0], [90.5, 1317.0], [90.6, 1317.0], [90.7, 1319.0], [90.8, 1325.0], [90.9, 1330.0], [91.0, 1330.0], [91.1, 1332.0], [91.2, 1339.0], [91.3, 1341.0], [91.4, 1341.0], [91.5, 1341.0], [91.6, 1341.0], [91.7, 1341.0], [91.8, 1344.0], [91.9, 1347.0], [92.0, 1352.0], [92.1, 1352.0], [92.2, 1353.0], [92.3, 1357.0], [92.4, 1359.0], [92.5, 1359.0], [92.6, 1367.0], [92.7, 1384.0], [92.8, 1398.0], [92.9, 1398.0], [93.0, 1402.0], [93.1, 1409.0], [93.2, 1419.0], [93.3, 1419.0], [93.4, 1422.0], [93.5, 1431.0], [93.6, 1431.0], [93.7, 1432.0], [93.8, 1433.0], [93.9, 1433.0], [94.0, 1433.0], [94.1, 1450.0], [94.2, 1454.0], [94.3, 1457.0], [94.4, 1457.0], [94.5, 1465.0], [94.6, 1471.0], [94.7, 1492.0], [94.8, 1492.0], [94.9, 1494.0], [95.0, 1514.0], [95.1, 1514.0], [95.2, 1519.0], [95.3, 1523.0], [95.4, 1526.0], [95.5, 1526.0], [95.6, 1530.0], [95.7, 1547.0], [95.8, 1549.0], [95.9, 1549.0], [96.0, 1589.0], [96.1, 1597.0], [96.2, 1628.0], [96.3, 1628.0], [96.4, 1654.0], [96.5, 1681.0], [96.6, 1723.0], [96.7, 1723.0], [96.8, 1854.0], [96.9, 1908.0], [97.0, 1908.0], [97.1, 1908.0], [97.2, 1924.0], [97.3, 1987.0], [97.4, 1987.0], [97.5, 1988.0], [97.6, 2059.0], [97.7, 2111.0], [97.8, 2111.0], [97.9, 2183.0], [98.0, 2210.0], [98.1, 2237.0], [98.2, 2237.0], [98.3, 2457.0], [98.4, 2641.0], [98.5, 2641.0], [98.6, 2790.0], [98.7, 2841.0], [98.8, 2867.0], [98.9, 2867.0], [99.0, 3027.0], [99.1, 3032.0], [99.2, 3044.0], [99.3, 3044.0], [99.4, 3086.0], [99.5, 3090.0], [99.6, 3255.0], [99.7, 3255.0], [99.8, 3285.0], [99.9, 3666.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 104.0, "series": [{"data": [[600.0, 64.0], [700.0, 53.0], [800.0, 77.0], [900.0, 70.0], [1000.0, 59.0], [1100.0, 50.0], [1200.0, 39.0], [1300.0, 22.0], [1400.0, 15.0], [1500.0, 9.0], [100.0, 5.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 5.0], [2000.0, 1.0], [2100.0, 2.0], [2200.0, 2.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [3000.0, 5.0], [200.0, 41.0], [3200.0, 2.0], [3600.0, 1.0], [300.0, 47.0], [400.0, 52.0], [500.0, 104.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 552.0, "series": [{"data": [[0.0, 146.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 552.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 37.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.924496644295305, "minX": 1.6021887E12, "maxY": 10.0, "series": [{"data": [[1.60218876E12, 9.924496644295305], [1.6021887E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 1070.0, "series": [{"data": [[8.0, 582.0], [4.0, 631.0], [2.0, 664.0], [1.0, 942.0], [9.0, 1070.0], [10.0, 848.717630853995], [5.0, 567.0], [6.0, 531.0], [3.0, 977.0], [7.0, 288.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 846.8312925170073]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1052.5833333333333, "minX": 1.6021887E12, "maxY": 1361555.85, "series": [{"data": [[1.60218876E12, 1361555.85], [1.6021887E12, 474218.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218876E12, 4470.45], [1.6021887E12, 1052.5833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 811.1040268456379, "minX": 1.6021887E12, "maxY": 1000.0215827338125, "series": [{"data": [[1.60218876E12, 811.1040268456379], [1.6021887E12, 1000.0215827338125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 810.1140939597311, "minX": 1.6021887E12, "maxY": 998.7841726618708, "series": [{"data": [[1.60218876E12, 810.1140939597311], [1.6021887E12, 998.7841726618708]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.028523489932885917, "minX": 1.6021887E12, "maxY": 0.7482014388489208, "series": [{"data": [[1.60218876E12, 0.028523489932885917], [1.6021887E12, 0.7482014388489208]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.6021887E12, "maxY": 3666.0, "series": [{"data": [[1.60218876E12, 3090.0], [1.6021887E12, 3666.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218876E12, 205.3729998576641], [1.6021887E12, 171.0399998664856]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218876E12, 205.91030005693435], [1.6021887E12, 171.54400005340577]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218876E12, 205.67149992883205], [1.6021887E12, 171.3199999332428]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218876E12, 180.0], [1.6021887E12, 170.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218876E12, 805.5], [1.6021887E12, 762.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 500.5, "minX": 2.0, "maxY": 2347.0, "series": [{"data": [[2.0, 2347.0], [8.0, 1109.5], [9.0, 986.5], [10.0, 972.0], [11.0, 937.0], [12.0, 851.0], [3.0, 942.0], [13.0, 805.5], [14.0, 701.5], [15.0, 619.0], [16.0, 558.0], [17.0, 606.0], [18.0, 533.5], [19.0, 602.0], [6.0, 500.5], [7.0, 1073.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 500.5, "minX": 2.0, "maxY": 2345.0, "series": [{"data": [[2.0, 2345.0], [8.0, 1108.0], [9.0, 985.5], [10.0, 970.5], [11.0, 937.0], [12.0, 850.0], [3.0, 942.0], [13.0, 804.5], [14.0, 701.0], [15.0, 618.0], [16.0, 558.0], [17.0, 606.0], [18.0, 533.5], [19.0, 601.0], [6.0, 500.5], [7.0, 1072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6021887E12, "maxY": 9.766666666666667, "series": [{"data": [[1.60218876E12, 9.766666666666667], [1.6021887E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6021887E12, "maxY": 9.933333333333334, "series": [{"data": [[1.60218876E12, 9.933333333333334], [1.6021887E12, 2.316666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6021887E12, "maxY": 9.933333333333334, "series": [{"data": [[1.60218876E12, 9.933333333333334], [1.6021887E12, 2.316666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.316666666666667, "minX": 1.6021887E12, "maxY": 9.933333333333334, "series": [{"data": [[1.60218876E12, 9.933333333333334], [1.6021887E12, 2.316666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218876E12, "title": "Total Transactions Per Second"}},
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

