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
        data: {"result": {"minY": 129.0, "minX": 0.0, "maxY": 2798.0, "series": [{"data": [[0.0, 129.0], [0.1, 129.0], [0.2, 130.0], [0.3, 131.0], [0.4, 131.0], [0.5, 132.0], [0.6, 133.0], [0.7, 134.0], [0.8, 134.0], [0.9, 138.0], [1.0, 140.0], [1.1, 142.0], [1.2, 142.0], [1.3, 143.0], [1.4, 152.0], [1.5, 153.0], [1.6, 153.0], [1.7, 153.0], [1.8, 154.0], [1.9, 154.0], [2.0, 156.0], [2.1, 157.0], [2.2, 159.0], [2.3, 159.0], [2.4, 163.0], [2.5, 179.0], [2.6, 183.0], [2.7, 183.0], [2.8, 186.0], [2.9, 188.0], [3.0, 197.0], [3.1, 197.0], [3.2, 207.0], [3.3, 218.0], [3.4, 218.0], [3.5, 218.0], [3.6, 219.0], [3.7, 219.0], [3.8, 219.0], [3.9, 222.0], [4.0, 222.0], [4.1, 224.0], [4.2, 224.0], [4.3, 225.0], [4.4, 228.0], [4.5, 228.0], [4.6, 228.0], [4.7, 228.0], [4.8, 232.0], [4.9, 232.0], [5.0, 232.0], [5.1, 236.0], [5.2, 237.0], [5.3, 237.0], [5.4, 242.0], [5.5, 248.0], [5.6, 249.0], [5.7, 249.0], [5.8, 254.0], [5.9, 255.0], [6.0, 256.0], [6.1, 256.0], [6.2, 258.0], [6.3, 258.0], [6.4, 260.0], [6.5, 260.0], [6.6, 261.0], [6.7, 265.0], [6.8, 265.0], [6.9, 276.0], [7.0, 282.0], [7.1, 286.0], [7.2, 286.0], [7.3, 290.0], [7.4, 291.0], [7.5, 294.0], [7.6, 294.0], [7.7, 305.0], [7.8, 308.0], [7.9, 309.0], [8.0, 309.0], [8.1, 309.0], [8.2, 310.0], [8.3, 311.0], [8.4, 311.0], [8.5, 311.0], [8.6, 314.0], [8.7, 314.0], [8.8, 317.0], [8.9, 318.0], [9.0, 320.0], [9.1, 320.0], [9.2, 320.0], [9.3, 322.0], [9.4, 324.0], [9.5, 324.0], [9.6, 324.0], [9.7, 324.0], [9.8, 328.0], [9.9, 328.0], [10.0, 328.0], [10.1, 329.0], [10.2, 329.0], [10.3, 329.0], [10.4, 331.0], [10.5, 332.0], [10.6, 332.0], [10.7, 333.0], [10.8, 333.0], [10.9, 338.0], [11.0, 338.0], [11.1, 341.0], [11.2, 349.0], [11.3, 350.0], [11.4, 350.0], [11.5, 352.0], [11.6, 353.0], [11.7, 353.0], [11.8, 362.0], [11.9, 362.0], [12.0, 370.0], [12.1, 370.0], [12.2, 377.0], [12.3, 380.0], [12.4, 381.0], [12.5, 381.0], [12.6, 382.0], [12.7, 388.0], [12.8, 389.0], [12.9, 389.0], [13.0, 391.0], [13.1, 393.0], [13.2, 395.0], [13.3, 395.0], [13.4, 399.0], [13.5, 400.0], [13.6, 400.0], [13.7, 401.0], [13.8, 403.0], [13.9, 406.0], [14.0, 406.0], [14.1, 408.0], [14.2, 409.0], [14.3, 410.0], [14.4, 410.0], [14.5, 412.0], [14.6, 423.0], [14.7, 424.0], [14.8, 424.0], [14.9, 428.0], [15.0, 429.0], [15.1, 429.0], [15.2, 433.0], [15.3, 434.0], [15.4, 439.0], [15.5, 439.0], [15.6, 439.0], [15.7, 440.0], [15.8, 441.0], [15.9, 441.0], [16.0, 447.0], [16.1, 454.0], [16.2, 455.0], [16.3, 455.0], [16.4, 455.0], [16.5, 455.0], [16.6, 456.0], [16.7, 456.0], [16.8, 458.0], [16.9, 458.0], [17.0, 458.0], [17.1, 459.0], [17.2, 459.0], [17.3, 460.0], [17.4, 460.0], [17.5, 460.0], [17.6, 460.0], [17.7, 465.0], [17.8, 465.0], [17.9, 466.0], [18.0, 466.0], [18.1, 469.0], [18.2, 469.0], [18.3, 470.0], [18.4, 471.0], [18.5, 471.0], [18.6, 473.0], [18.7, 474.0], [18.8, 475.0], [18.9, 475.0], [19.0, 475.0], [19.1, 475.0], [19.2, 476.0], [19.3, 476.0], [19.4, 477.0], [19.5, 478.0], [19.6, 478.0], [19.7, 478.0], [19.8, 479.0], [19.9, 480.0], [20.0, 480.0], [20.1, 480.0], [20.2, 480.0], [20.3, 481.0], [20.4, 481.0], [20.5, 482.0], [20.6, 484.0], [20.7, 484.0], [20.8, 484.0], [20.9, 484.0], [21.0, 485.0], [21.1, 485.0], [21.2, 485.0], [21.3, 487.0], [21.4, 487.0], [21.5, 488.0], [21.6, 488.0], [21.7, 489.0], [21.8, 490.0], [21.9, 490.0], [22.0, 490.0], [22.1, 490.0], [22.2, 492.0], [22.3, 492.0], [22.4, 492.0], [22.5, 492.0], [22.6, 492.0], [22.7, 492.0], [22.8, 493.0], [22.9, 493.0], [23.0, 493.0], [23.1, 493.0], [23.2, 494.0], [23.3, 495.0], [23.4, 495.0], [23.5, 496.0], [23.6, 496.0], [23.7, 496.0], [23.8, 496.0], [23.9, 499.0], [24.0, 499.0], [24.1, 499.0], [24.2, 499.0], [24.3, 500.0], [24.4, 500.0], [24.5, 500.0], [24.6, 500.0], [24.7, 501.0], [24.8, 502.0], [24.9, 502.0], [25.0, 502.0], [25.1, 504.0], [25.2, 504.0], [25.3, 504.0], [25.4, 506.0], [25.5, 506.0], [25.6, 507.0], [25.7, 507.0], [25.8, 507.0], [25.9, 508.0], [26.0, 508.0], [26.1, 508.0], [26.2, 509.0], [26.3, 509.0], [26.4, 509.0], [26.5, 509.0], [26.6, 509.0], [26.7, 512.0], [26.8, 512.0], [26.9, 513.0], [27.0, 513.0], [27.1, 514.0], [27.2, 514.0], [27.3, 515.0], [27.4, 515.0], [27.5, 515.0], [27.6, 515.0], [27.7, 515.0], [27.8, 516.0], [27.9, 516.0], [28.0, 516.0], [28.1, 516.0], [28.2, 516.0], [28.3, 516.0], [28.4, 516.0], [28.5, 517.0], [28.6, 517.0], [28.7, 517.0], [28.8, 518.0], [28.9, 518.0], [29.0, 518.0], [29.1, 518.0], [29.2, 518.0], [29.3, 519.0], [29.4, 519.0], [29.5, 519.0], [29.6, 519.0], [29.7, 520.0], [29.8, 521.0], [29.9, 521.0], [30.0, 521.0], [30.1, 522.0], [30.2, 522.0], [30.3, 523.0], [30.4, 523.0], [30.5, 523.0], [30.6, 523.0], [30.7, 525.0], [30.8, 525.0], [30.9, 525.0], [31.0, 525.0], [31.1, 526.0], [31.2, 526.0], [31.3, 528.0], [31.4, 528.0], [31.5, 528.0], [31.6, 529.0], [31.7, 529.0], [31.8, 529.0], [31.9, 529.0], [32.0, 530.0], [32.1, 530.0], [32.2, 531.0], [32.3, 533.0], [32.4, 533.0], [32.5, 533.0], [32.6, 533.0], [32.7, 534.0], [32.8, 534.0], [32.9, 534.0], [33.0, 534.0], [33.1, 537.0], [33.2, 537.0], [33.3, 537.0], [33.4, 537.0], [33.5, 537.0], [33.6, 537.0], [33.7, 538.0], [33.8, 539.0], [33.9, 540.0], [34.0, 540.0], [34.1, 540.0], [34.2, 540.0], [34.3, 542.0], [34.4, 542.0], [34.5, 544.0], [34.6, 544.0], [34.7, 545.0], [34.8, 545.0], [34.9, 546.0], [35.0, 546.0], [35.1, 546.0], [35.2, 546.0], [35.3, 547.0], [35.4, 547.0], [35.5, 547.0], [35.6, 548.0], [35.7, 549.0], [35.8, 550.0], [35.9, 550.0], [36.0, 553.0], [36.1, 553.0], [36.2, 553.0], [36.3, 553.0], [36.4, 558.0], [36.5, 558.0], [36.6, 559.0], [36.7, 559.0], [36.8, 560.0], [36.9, 560.0], [37.0, 560.0], [37.1, 561.0], [37.2, 563.0], [37.3, 565.0], [37.4, 565.0], [37.5, 565.0], [37.6, 566.0], [37.7, 570.0], [37.8, 570.0], [37.9, 570.0], [38.0, 571.0], [38.1, 573.0], [38.2, 573.0], [38.3, 574.0], [38.4, 577.0], [38.5, 577.0], [38.6, 577.0], [38.7, 578.0], [38.8, 580.0], [38.9, 580.0], [39.0, 583.0], [39.1, 583.0], [39.2, 586.0], [39.3, 586.0], [39.4, 586.0], [39.5, 594.0], [39.6, 596.0], [39.7, 596.0], [39.8, 599.0], [39.9, 602.0], [40.0, 607.0], [40.1, 607.0], [40.2, 608.0], [40.3, 609.0], [40.4, 609.0], [40.5, 612.0], [40.6, 616.0], [40.7, 618.0], [40.8, 618.0], [40.9, 623.0], [41.0, 625.0], [41.1, 626.0], [41.2, 626.0], [41.3, 626.0], [41.4, 628.0], [41.5, 631.0], [41.6, 631.0], [41.7, 633.0], [41.8, 636.0], [41.9, 636.0], [42.0, 637.0], [42.1, 638.0], [42.2, 643.0], [42.3, 643.0], [42.4, 643.0], [42.5, 644.0], [42.6, 644.0], [42.7, 644.0], [42.8, 646.0], [42.9, 648.0], [43.0, 652.0], [43.1, 652.0], [43.2, 653.0], [43.3, 656.0], [43.4, 656.0], [43.5, 659.0], [43.6, 659.0], [43.7, 660.0], [43.8, 660.0], [43.9, 662.0], [44.0, 665.0], [44.1, 666.0], [44.2, 666.0], [44.3, 666.0], [44.4, 668.0], [44.5, 669.0], [44.6, 669.0], [44.7, 673.0], [44.8, 674.0], [44.9, 682.0], [45.0, 682.0], [45.1, 682.0], [45.2, 683.0], [45.3, 683.0], [45.4, 685.0], [45.5, 687.0], [45.6, 689.0], [45.7, 689.0], [45.8, 696.0], [45.9, 698.0], [46.0, 709.0], [46.1, 709.0], [46.2, 709.0], [46.3, 710.0], [46.4, 711.0], [46.5, 711.0], [46.6, 715.0], [46.7, 717.0], [46.8, 717.0], [46.9, 717.0], [47.0, 722.0], [47.1, 727.0], [47.2, 727.0], [47.3, 727.0], [47.4, 734.0], [47.5, 737.0], [47.6, 737.0], [47.7, 741.0], [47.8, 744.0], [47.9, 745.0], [48.0, 745.0], [48.1, 750.0], [48.2, 750.0], [48.3, 751.0], [48.4, 751.0], [48.5, 757.0], [48.6, 761.0], [48.7, 761.0], [48.8, 762.0], [48.9, 765.0], [49.0, 765.0], [49.1, 765.0], [49.2, 771.0], [49.3, 771.0], [49.4, 772.0], [49.5, 772.0], [49.6, 786.0], [49.7, 787.0], [49.8, 790.0], [49.9, 790.0], [50.0, 791.0], [50.1, 792.0], [50.2, 792.0], [50.3, 795.0], [50.4, 800.0], [50.5, 803.0], [50.6, 803.0], [50.7, 804.0], [50.8, 807.0], [50.9, 810.0], [51.0, 810.0], [51.1, 812.0], [51.2, 820.0], [51.3, 821.0], [51.4, 821.0], [51.5, 825.0], [51.6, 827.0], [51.7, 827.0], [51.8, 828.0], [51.9, 828.0], [52.0, 830.0], [52.1, 830.0], [52.2, 830.0], [52.3, 831.0], [52.4, 832.0], [52.5, 832.0], [52.6, 835.0], [52.7, 835.0], [52.8, 836.0], [52.9, 836.0], [53.0, 838.0], [53.1, 840.0], [53.2, 841.0], [53.3, 841.0], [53.4, 842.0], [53.5, 842.0], [53.6, 842.0], [53.7, 844.0], [53.8, 849.0], [53.9, 851.0], [54.0, 851.0], [54.1, 856.0], [54.2, 858.0], [54.3, 861.0], [54.4, 861.0], [54.5, 865.0], [54.6, 867.0], [54.7, 867.0], [54.8, 867.0], [54.9, 869.0], [55.0, 870.0], [55.1, 870.0], [55.2, 870.0], [55.3, 872.0], [55.4, 874.0], [55.5, 874.0], [55.6, 879.0], [55.7, 880.0], [55.8, 882.0], [55.9, 882.0], [56.0, 885.0], [56.1, 885.0], [56.2, 892.0], [56.3, 892.0], [56.4, 892.0], [56.5, 898.0], [56.6, 908.0], [56.7, 908.0], [56.8, 920.0], [56.9, 931.0], [57.0, 931.0], [57.1, 936.0], [57.2, 936.0], [57.3, 936.0], [57.4, 936.0], [57.5, 939.0], [57.6, 940.0], [57.7, 941.0], [57.8, 941.0], [57.9, 947.0], [58.0, 950.0], [58.1, 955.0], [58.2, 955.0], [58.3, 958.0], [58.4, 958.0], [58.5, 958.0], [58.6, 960.0], [58.7, 967.0], [58.8, 967.0], [58.9, 967.0], [59.0, 968.0], [59.1, 969.0], [59.2, 971.0], [59.3, 971.0], [59.4, 972.0], [59.5, 974.0], [59.6, 975.0], [59.7, 975.0], [59.8, 975.0], [59.9, 976.0], [60.0, 976.0], [60.1, 976.0], [60.2, 977.0], [60.3, 978.0], [60.4, 978.0], [60.5, 982.0], [60.6, 982.0], [60.7, 984.0], [60.8, 984.0], [60.9, 985.0], [61.0, 986.0], [61.1, 986.0], [61.2, 986.0], [61.3, 987.0], [61.4, 991.0], [61.5, 994.0], [61.6, 994.0], [61.7, 995.0], [61.8, 995.0], [61.9, 995.0], [62.0, 995.0], [62.1, 996.0], [62.2, 997.0], [62.3, 997.0], [62.4, 997.0], [62.5, 998.0], [62.6, 999.0], [62.7, 999.0], [62.8, 1000.0], [62.9, 1002.0], [63.0, 1003.0], [63.1, 1003.0], [63.2, 1003.0], [63.3, 1003.0], [63.4, 1003.0], [63.5, 1004.0], [63.6, 1004.0], [63.7, 1005.0], [63.8, 1005.0], [63.9, 1007.0], [64.0, 1007.0], [64.1, 1009.0], [64.2, 1009.0], [64.3, 1010.0], [64.4, 1010.0], [64.5, 1010.0], [64.6, 1010.0], [64.7, 1011.0], [64.8, 1011.0], [64.9, 1012.0], [65.0, 1012.0], [65.1, 1012.0], [65.2, 1012.0], [65.3, 1012.0], [65.4, 1013.0], [65.5, 1013.0], [65.6, 1013.0], [65.7, 1013.0], [65.8, 1014.0], [65.9, 1015.0], [66.0, 1016.0], [66.1, 1016.0], [66.2, 1017.0], [66.3, 1018.0], [66.4, 1019.0], [66.5, 1019.0], [66.6, 1019.0], [66.7, 1019.0], [66.8, 1019.0], [66.9, 1019.0], [67.0, 1020.0], [67.1, 1020.0], [67.2, 1020.0], [67.3, 1021.0], [67.4, 1021.0], [67.5, 1023.0], [67.6, 1023.0], [67.7, 1024.0], [67.8, 1024.0], [67.9, 1024.0], [68.0, 1024.0], [68.1, 1025.0], [68.2, 1025.0], [68.3, 1026.0], [68.4, 1026.0], [68.5, 1026.0], [68.6, 1027.0], [68.7, 1027.0], [68.8, 1027.0], [68.9, 1027.0], [69.0, 1030.0], [69.1, 1030.0], [69.2, 1034.0], [69.3, 1034.0], [69.4, 1035.0], [69.5, 1035.0], [69.6, 1036.0], [69.7, 1037.0], [69.8, 1037.0], [69.9, 1037.0], [70.0, 1037.0], [70.1, 1038.0], [70.2, 1038.0], [70.3, 1038.0], [70.4, 1038.0], [70.5, 1038.0], [70.6, 1038.0], [70.7, 1039.0], [70.8, 1039.0], [70.9, 1041.0], [71.0, 1041.0], [71.1, 1042.0], [71.2, 1043.0], [71.3, 1045.0], [71.4, 1045.0], [71.5, 1045.0], [71.6, 1045.0], [71.7, 1045.0], [71.8, 1045.0], [71.9, 1047.0], [72.0, 1049.0], [72.1, 1049.0], [72.2, 1050.0], [72.3, 1050.0], [72.4, 1051.0], [72.5, 1051.0], [72.6, 1051.0], [72.7, 1052.0], [72.8, 1052.0], [72.9, 1052.0], [73.0, 1054.0], [73.1, 1054.0], [73.2, 1055.0], [73.3, 1055.0], [73.4, 1055.0], [73.5, 1056.0], [73.6, 1056.0], [73.7, 1056.0], [73.8, 1056.0], [73.9, 1057.0], [74.0, 1057.0], [74.1, 1057.0], [74.2, 1058.0], [74.3, 1060.0], [74.4, 1060.0], [74.5, 1061.0], [74.6, 1061.0], [74.7, 1061.0], [74.8, 1061.0], [74.9, 1061.0], [75.0, 1062.0], [75.1, 1062.0], [75.2, 1062.0], [75.3, 1063.0], [75.4, 1064.0], [75.5, 1064.0], [75.6, 1064.0], [75.7, 1065.0], [75.8, 1065.0], [75.9, 1065.0], [76.0, 1065.0], [76.1, 1066.0], [76.2, 1067.0], [76.3, 1067.0], [76.4, 1067.0], [76.5, 1070.0], [76.6, 1070.0], [76.7, 1070.0], [76.8, 1071.0], [76.9, 1073.0], [77.0, 1073.0], [77.1, 1073.0], [77.2, 1073.0], [77.3, 1074.0], [77.4, 1074.0], [77.5, 1075.0], [77.6, 1075.0], [77.7, 1076.0], [77.8, 1076.0], [77.9, 1076.0], [78.0, 1077.0], [78.1, 1079.0], [78.2, 1079.0], [78.3, 1079.0], [78.4, 1080.0], [78.5, 1080.0], [78.6, 1083.0], [78.7, 1084.0], [78.8, 1084.0], [78.9, 1084.0], [79.0, 1085.0], [79.1, 1085.0], [79.2, 1085.0], [79.3, 1085.0], [79.4, 1086.0], [79.5, 1087.0], [79.6, 1088.0], [79.7, 1088.0], [79.8, 1089.0], [79.9, 1090.0], [80.0, 1090.0], [80.1, 1090.0], [80.2, 1092.0], [80.3, 1094.0], [80.4, 1094.0], [80.5, 1094.0], [80.6, 1094.0], [80.7, 1098.0], [80.8, 1098.0], [80.9, 1098.0], [81.0, 1098.0], [81.1, 1099.0], [81.2, 1099.0], [81.3, 1101.0], [81.4, 1101.0], [81.5, 1102.0], [81.6, 1102.0], [81.7, 1103.0], [81.8, 1104.0], [81.9, 1104.0], [82.0, 1105.0], [82.1, 1106.0], [82.2, 1107.0], [82.3, 1107.0], [82.4, 1107.0], [82.5, 1107.0], [82.6, 1109.0], [82.7, 1109.0], [82.8, 1109.0], [82.9, 1109.0], [83.0, 1110.0], [83.1, 1110.0], [83.2, 1111.0], [83.3, 1112.0], [83.4, 1112.0], [83.5, 1116.0], [83.6, 1118.0], [83.7, 1119.0], [83.8, 1119.0], [83.9, 1120.0], [84.0, 1120.0], [84.1, 1120.0], [84.2, 1120.0], [84.3, 1122.0], [84.4, 1122.0], [84.5, 1124.0], [84.6, 1124.0], [84.7, 1126.0], [84.8, 1126.0], [84.9, 1129.0], [85.0, 1129.0], [85.1, 1131.0], [85.2, 1132.0], [85.3, 1132.0], [85.4, 1139.0], [85.5, 1139.0], [85.6, 1140.0], [85.7, 1140.0], [85.8, 1140.0], [85.9, 1141.0], [86.0, 1147.0], [86.1, 1147.0], [86.2, 1147.0], [86.3, 1147.0], [86.4, 1148.0], [86.5, 1148.0], [86.6, 1148.0], [86.7, 1149.0], [86.8, 1149.0], [86.9, 1149.0], [87.0, 1150.0], [87.1, 1157.0], [87.2, 1157.0], [87.3, 1162.0], [87.4, 1163.0], [87.5, 1163.0], [87.6, 1163.0], [87.7, 1165.0], [87.8, 1167.0], [87.9, 1173.0], [88.0, 1173.0], [88.1, 1175.0], [88.2, 1175.0], [88.3, 1177.0], [88.4, 1177.0], [88.5, 1177.0], [88.6, 1178.0], [88.7, 1178.0], [88.8, 1179.0], [88.9, 1179.0], [89.0, 1181.0], [89.1, 1181.0], [89.2, 1181.0], [89.3, 1182.0], [89.4, 1183.0], [89.5, 1183.0], [89.6, 1188.0], [89.7, 1189.0], [89.8, 1189.0], [89.9, 1189.0], [90.0, 1190.0], [90.1, 1191.0], [90.2, 1191.0], [90.3, 1198.0], [90.4, 1199.0], [90.5, 1200.0], [90.6, 1200.0], [90.7, 1201.0], [90.8, 1203.0], [90.9, 1207.0], [91.0, 1207.0], [91.1, 1212.0], [91.2, 1217.0], [91.3, 1224.0], [91.4, 1224.0], [91.5, 1225.0], [91.6, 1227.0], [91.7, 1227.0], [91.8, 1228.0], [91.9, 1229.0], [92.0, 1229.0], [92.1, 1229.0], [92.2, 1232.0], [92.3, 1240.0], [92.4, 1249.0], [92.5, 1249.0], [92.6, 1250.0], [92.7, 1250.0], [92.8, 1253.0], [92.9, 1253.0], [93.0, 1255.0], [93.1, 1262.0], [93.2, 1273.0], [93.3, 1273.0], [93.4, 1280.0], [93.5, 1281.0], [93.6, 1281.0], [93.7, 1283.0], [93.8, 1284.0], [93.9, 1300.0], [94.0, 1300.0], [94.1, 1311.0], [94.2, 1314.0], [94.3, 1326.0], [94.4, 1326.0], [94.5, 1326.0], [94.6, 1338.0], [94.7, 1358.0], [94.8, 1358.0], [94.9, 1362.0], [95.0, 1372.0], [95.1, 1372.0], [95.2, 1377.0], [95.3, 1378.0], [95.4, 1398.0], [95.5, 1398.0], [95.6, 1399.0], [95.7, 1401.0], [95.8, 1424.0], [95.9, 1424.0], [96.0, 1427.0], [96.1, 1428.0], [96.2, 1434.0], [96.3, 1434.0], [96.4, 1437.0], [96.5, 1437.0], [96.6, 1440.0], [96.7, 1440.0], [96.8, 1469.0], [96.9, 1470.0], [97.0, 1470.0], [97.1, 1496.0], [97.2, 1517.0], [97.3, 1583.0], [97.4, 1583.0], [97.5, 1586.0], [97.6, 1693.0], [97.7, 1725.0], [97.8, 1725.0], [97.9, 1815.0], [98.0, 1817.0], [98.1, 1881.0], [98.2, 1881.0], [98.3, 1919.0], [98.4, 1962.0], [98.5, 1962.0], [98.6, 1977.0], [98.7, 2032.0], [98.8, 2060.0], [98.9, 2060.0], [99.0, 2073.0], [99.1, 2089.0], [99.2, 2100.0], [99.3, 2100.0], [99.4, 2325.0], [99.5, 2481.0], [99.6, 2567.0], [99.7, 2567.0], [99.8, 2598.0], [99.9, 2798.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 136.0, "series": [{"data": [[600.0, 45.0], [700.0, 32.0], [800.0, 46.0], [900.0, 45.0], [1000.0, 136.0], [1100.0, 68.0], [1200.0, 25.0], [1300.0, 13.0], [1400.0, 11.0], [1500.0, 3.0], [100.0, 23.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 4.0], [2100.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2700.0, 1.0], [200.0, 33.0], [300.0, 43.0], [400.0, 79.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 533.0, "series": [{"data": [[0.0, 181.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 533.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.908536585365857, "minX": 1.6026327E12, "maxY": 10.0, "series": [{"data": [[1.6026327E12, 10.0], [1.60263276E12, 9.908536585365857]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.0, "maxY": 1919.0, "series": [{"data": [[8.0, 507.0], [4.0, 516.0], [2.0, 1919.0], [1.0, 1881.0], [9.0, 1035.0], [10.0, 799.2245179063358], [5.0, 469.0], [6.0, 249.0], [3.0, 466.0], [7.0, 455.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 799.6380952380949]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1887.1, "minX": 1.6026327E12, "maxY": 1061229.95, "series": [{"data": [[1.6026327E12, 675688.9166666666], [1.60263276E12, 1061229.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6026327E12, 1887.1], [1.60263276E12, 3782.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 749.3414634146343, "minX": 1.6026327E12, "maxY": 901.4732510288064, "series": [{"data": [[1.6026327E12, 901.4732510288064], [1.60263276E12, 749.3414634146343]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 748.3516260162595, "minX": 1.6026327E12, "maxY": 900.1934156378603, "series": [{"data": [[1.6026327E12, 900.1934156378603], [1.60263276E12, 748.3516260162595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0060975609756097554, "minX": 1.6026327E12, "maxY": 0.41563786008230424, "series": [{"data": [[1.6026327E12, 0.41563786008230424], [1.60263276E12, 0.0060975609756097554]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263276E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 129.0, "minX": 1.6026327E12, "maxY": 2798.0, "series": [{"data": [[1.6026327E12, 2798.0], [1.60263276E12, 2032.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6026327E12, 131.19599994182587], [1.60263276E12, 141.31099964737894]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6026327E12, 131.41560002326966], [1.60263276E12, 142.64210014104845]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6026327E12, 131.31799997091292], [1.60263276E12, 142.05049982368945]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6026327E12, 130.0], [1.60263276E12, 129.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6026327E12, 985.0], [1.60263276E12, 709.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 410.0, "minX": 1.0, "maxY": 1881.0, "series": [{"data": [[8.0, 994.0], [9.0, 986.0], [10.0, 1022.5], [11.0, 1016.5], [12.0, 980.0], [13.0, 770.5], [14.0, 490.0], [15.0, 554.0], [4.0, 648.0], [16.0, 722.0], [1.0, 1881.0], [17.0, 639.5], [19.0, 495.0], [20.0, 458.5], [23.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 409.0, "minX": 1.0, "maxY": 1879.0, "series": [{"data": [[8.0, 992.0], [9.0, 985.0], [10.0, 1022.0], [11.0, 1015.5], [12.0, 979.5], [13.0, 768.5], [14.0, 489.5], [15.0, 553.5], [4.0, 648.0], [16.0, 720.5], [1.0, 1879.0], [17.0, 639.0], [19.0, 494.5], [20.0, 458.0], [23.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.216666666666667, "minX": 1.6026327E12, "maxY": 8.033333333333333, "series": [{"data": [[1.6026327E12, 4.216666666666667], [1.60263276E12, 8.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.6026327E12, "maxY": 8.2, "series": [{"data": [[1.6026327E12, 4.05], [1.60263276E12, 8.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.6026327E12, "maxY": 8.2, "series": [{"data": [[1.6026327E12, 4.05], [1.60263276E12, 8.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.6026327E12, "maxY": 8.2, "series": [{"data": [[1.6026327E12, 4.05], [1.60263276E12, 8.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263276E12, "title": "Total Transactions Per Second"}},
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

