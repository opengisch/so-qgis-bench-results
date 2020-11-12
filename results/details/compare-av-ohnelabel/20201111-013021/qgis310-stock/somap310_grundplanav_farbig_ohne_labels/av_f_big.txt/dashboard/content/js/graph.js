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
        data: {"result": {"minY": 125.0, "minX": 0.0, "maxY": 2187.0, "series": [{"data": [[0.0, 125.0], [0.1, 125.0], [0.2, 135.0], [0.3, 138.0], [0.4, 138.0], [0.5, 139.0], [0.6, 140.0], [0.7, 142.0], [0.8, 142.0], [0.9, 143.0], [1.0, 143.0], [1.1, 146.0], [1.2, 146.0], [1.3, 146.0], [1.4, 148.0], [1.5, 149.0], [1.6, 149.0], [1.7, 157.0], [1.8, 157.0], [1.9, 157.0], [2.0, 162.0], [2.1, 164.0], [2.2, 164.0], [2.3, 164.0], [2.4, 167.0], [2.5, 170.0], [2.6, 179.0], [2.7, 179.0], [2.8, 199.0], [2.9, 201.0], [3.0, 202.0], [3.1, 202.0], [3.2, 206.0], [3.3, 211.0], [3.4, 211.0], [3.5, 213.0], [3.6, 217.0], [3.7, 218.0], [3.8, 218.0], [3.9, 218.0], [4.0, 218.0], [4.1, 218.0], [4.2, 218.0], [4.3, 219.0], [4.4, 222.0], [4.5, 222.0], [4.6, 222.0], [4.7, 224.0], [4.8, 225.0], [4.9, 225.0], [5.0, 225.0], [5.1, 228.0], [5.2, 231.0], [5.3, 231.0], [5.4, 231.0], [5.5, 231.0], [5.6, 231.0], [5.7, 231.0], [5.8, 234.0], [5.9, 235.0], [6.0, 240.0], [6.1, 240.0], [6.2, 244.0], [6.3, 245.0], [6.4, 246.0], [6.5, 246.0], [6.6, 246.0], [6.7, 246.0], [6.8, 246.0], [6.9, 246.0], [7.0, 248.0], [7.1, 252.0], [7.2, 252.0], [7.3, 256.0], [7.4, 257.0], [7.5, 260.0], [7.6, 260.0], [7.7, 262.0], [7.8, 270.0], [7.9, 272.0], [8.0, 272.0], [8.1, 278.0], [8.2, 279.0], [8.3, 295.0], [8.4, 295.0], [8.5, 303.0], [8.6, 303.0], [8.7, 303.0], [8.8, 306.0], [8.9, 306.0], [9.0, 308.0], [9.1, 308.0], [9.2, 308.0], [9.3, 310.0], [9.4, 312.0], [9.5, 312.0], [9.6, 312.0], [9.7, 315.0], [9.8, 319.0], [9.9, 319.0], [10.0, 319.0], [10.1, 321.0], [10.2, 321.0], [10.3, 322.0], [10.4, 326.0], [10.5, 327.0], [10.6, 327.0], [10.7, 328.0], [10.8, 329.0], [10.9, 329.0], [11.0, 329.0], [11.1, 333.0], [11.2, 335.0], [11.3, 335.0], [11.4, 335.0], [11.5, 338.0], [11.6, 348.0], [11.7, 348.0], [11.8, 351.0], [11.9, 358.0], [12.0, 370.0], [12.1, 370.0], [12.2, 371.0], [12.3, 377.0], [12.4, 380.0], [12.5, 380.0], [12.6, 383.0], [12.7, 385.0], [12.8, 386.0], [12.9, 386.0], [13.0, 390.0], [13.1, 394.0], [13.2, 395.0], [13.3, 395.0], [13.4, 395.0], [13.5, 395.0], [13.6, 395.0], [13.7, 399.0], [13.8, 399.0], [13.9, 405.0], [14.0, 405.0], [14.1, 411.0], [14.2, 415.0], [14.3, 419.0], [14.4, 419.0], [14.5, 420.0], [14.6, 425.0], [14.7, 428.0], [14.8, 428.0], [14.9, 431.0], [15.0, 431.0], [15.1, 431.0], [15.2, 432.0], [15.3, 436.0], [15.4, 441.0], [15.5, 441.0], [15.6, 443.0], [15.7, 444.0], [15.8, 446.0], [15.9, 446.0], [16.0, 451.0], [16.1, 452.0], [16.2, 455.0], [16.3, 455.0], [16.4, 455.0], [16.5, 456.0], [16.6, 460.0], [16.7, 460.0], [16.8, 461.0], [16.9, 461.0], [17.0, 461.0], [17.1, 463.0], [17.2, 464.0], [17.3, 464.0], [17.4, 464.0], [17.5, 466.0], [17.6, 468.0], [17.7, 468.0], [17.8, 468.0], [17.9, 468.0], [18.0, 469.0], [18.1, 470.0], [18.2, 470.0], [18.3, 470.0], [18.4, 470.0], [18.5, 470.0], [18.6, 470.0], [18.7, 471.0], [18.8, 472.0], [18.9, 472.0], [19.0, 473.0], [19.1, 473.0], [19.2, 473.0], [19.3, 473.0], [19.4, 473.0], [19.5, 474.0], [19.6, 475.0], [19.7, 475.0], [19.8, 475.0], [19.9, 475.0], [20.0, 476.0], [20.1, 476.0], [20.2, 476.0], [20.3, 477.0], [20.4, 477.0], [20.5, 477.0], [20.6, 477.0], [20.7, 478.0], [20.8, 478.0], [20.9, 478.0], [21.0, 478.0], [21.1, 479.0], [21.2, 479.0], [21.3, 482.0], [21.4, 484.0], [21.5, 485.0], [21.6, 485.0], [21.7, 485.0], [21.8, 486.0], [21.9, 486.0], [22.0, 486.0], [22.1, 487.0], [22.2, 488.0], [22.3, 488.0], [22.4, 488.0], [22.5, 489.0], [22.6, 489.0], [22.7, 489.0], [22.8, 490.0], [22.9, 491.0], [23.0, 492.0], [23.1, 492.0], [23.2, 492.0], [23.3, 493.0], [23.4, 493.0], [23.5, 494.0], [23.6, 495.0], [23.7, 495.0], [23.8, 495.0], [23.9, 496.0], [24.0, 496.0], [24.1, 497.0], [24.2, 497.0], [24.3, 497.0], [24.4, 497.0], [24.5, 498.0], [24.6, 498.0], [24.7, 499.0], [24.8, 499.0], [24.9, 499.0], [25.0, 499.0], [25.1, 499.0], [25.2, 500.0], [25.3, 500.0], [25.4, 500.0], [25.5, 500.0], [25.6, 501.0], [25.7, 501.0], [25.8, 502.0], [25.9, 502.0], [26.0, 503.0], [26.1, 503.0], [26.2, 503.0], [26.3, 505.0], [26.4, 505.0], [26.5, 505.0], [26.6, 505.0], [26.7, 506.0], [26.8, 506.0], [26.9, 506.0], [27.0, 508.0], [27.1, 508.0], [27.2, 508.0], [27.3, 509.0], [27.4, 511.0], [27.5, 511.0], [27.6, 511.0], [27.7, 512.0], [27.8, 512.0], [27.9, 512.0], [28.0, 512.0], [28.1, 512.0], [28.2, 513.0], [28.3, 513.0], [28.4, 513.0], [28.5, 513.0], [28.6, 513.0], [28.7, 513.0], [28.8, 513.0], [28.9, 514.0], [29.0, 514.0], [29.1, 514.0], [29.2, 515.0], [29.3, 515.0], [29.4, 516.0], [29.5, 516.0], [29.6, 517.0], [29.7, 519.0], [29.8, 519.0], [29.9, 519.0], [30.0, 520.0], [30.1, 520.0], [30.2, 520.0], [30.3, 520.0], [30.4, 520.0], [30.5, 520.0], [30.6, 520.0], [30.7, 520.0], [30.8, 521.0], [30.9, 521.0], [31.0, 521.0], [31.1, 521.0], [31.2, 522.0], [31.3, 522.0], [31.4, 522.0], [31.5, 523.0], [31.6, 523.0], [31.7, 523.0], [31.8, 523.0], [31.9, 526.0], [32.0, 527.0], [32.1, 527.0], [32.2, 527.0], [32.3, 527.0], [32.4, 527.0], [32.5, 527.0], [32.6, 528.0], [32.7, 528.0], [32.8, 528.0], [32.9, 528.0], [33.0, 529.0], [33.1, 529.0], [33.2, 530.0], [33.3, 530.0], [33.4, 530.0], [33.5, 530.0], [33.6, 530.0], [33.7, 530.0], [33.8, 531.0], [33.9, 531.0], [34.0, 531.0], [34.1, 531.0], [34.2, 533.0], [34.3, 533.0], [34.4, 533.0], [34.5, 534.0], [34.6, 534.0], [34.7, 535.0], [34.8, 535.0], [34.9, 535.0], [35.0, 536.0], [35.1, 536.0], [35.2, 536.0], [35.3, 537.0], [35.4, 538.0], [35.5, 538.0], [35.6, 540.0], [35.7, 540.0], [35.8, 542.0], [35.9, 542.0], [36.0, 542.0], [36.1, 543.0], [36.2, 543.0], [36.3, 543.0], [36.4, 545.0], [36.5, 546.0], [36.6, 547.0], [36.7, 547.0], [36.8, 547.0], [36.9, 548.0], [37.0, 548.0], [37.1, 548.0], [37.2, 548.0], [37.3, 549.0], [37.4, 549.0], [37.5, 550.0], [37.6, 550.0], [37.7, 551.0], [37.8, 551.0], [37.9, 553.0], [38.0, 553.0], [38.1, 555.0], [38.2, 555.0], [38.3, 555.0], [38.4, 555.0], [38.5, 555.0], [38.6, 560.0], [38.7, 565.0], [38.8, 565.0], [38.9, 565.0], [39.0, 570.0], [39.1, 572.0], [39.2, 576.0], [39.3, 576.0], [39.4, 577.0], [39.5, 583.0], [39.6, 583.0], [39.7, 583.0], [39.8, 584.0], [39.9, 602.0], [40.0, 605.0], [40.1, 605.0], [40.2, 606.0], [40.3, 611.0], [40.4, 611.0], [40.5, 613.0], [40.6, 614.0], [40.7, 616.0], [40.8, 616.0], [40.9, 616.0], [41.0, 629.0], [41.1, 629.0], [41.2, 629.0], [41.3, 634.0], [41.4, 638.0], [41.5, 638.0], [41.6, 638.0], [41.7, 640.0], [41.8, 641.0], [41.9, 641.0], [42.0, 646.0], [42.1, 647.0], [42.2, 647.0], [42.3, 647.0], [42.4, 648.0], [42.5, 648.0], [42.6, 650.0], [42.7, 650.0], [42.8, 652.0], [42.9, 654.0], [43.0, 657.0], [43.1, 657.0], [43.2, 659.0], [43.3, 661.0], [43.4, 661.0], [43.5, 662.0], [43.6, 663.0], [43.7, 663.0], [43.8, 663.0], [43.9, 665.0], [44.0, 666.0], [44.1, 666.0], [44.2, 666.0], [44.3, 667.0], [44.4, 668.0], [44.5, 668.0], [44.6, 668.0], [44.7, 672.0], [44.8, 675.0], [44.9, 675.0], [45.0, 675.0], [45.1, 677.0], [45.2, 677.0], [45.3, 677.0], [45.4, 677.0], [45.5, 679.0], [45.6, 681.0], [45.7, 681.0], [45.8, 683.0], [45.9, 684.0], [46.0, 690.0], [46.1, 690.0], [46.2, 694.0], [46.3, 698.0], [46.4, 700.0], [46.5, 700.0], [46.6, 700.0], [46.7, 701.0], [46.8, 701.0], [46.9, 704.0], [47.0, 707.0], [47.1, 709.0], [47.2, 709.0], [47.3, 713.0], [47.4, 716.0], [47.5, 718.0], [47.6, 718.0], [47.7, 720.0], [47.8, 724.0], [47.9, 728.0], [48.0, 728.0], [48.1, 730.0], [48.2, 732.0], [48.3, 733.0], [48.4, 733.0], [48.5, 737.0], [48.6, 742.0], [48.7, 742.0], [48.8, 742.0], [48.9, 742.0], [49.0, 750.0], [49.1, 750.0], [49.2, 750.0], [49.3, 753.0], [49.4, 755.0], [49.5, 755.0], [49.6, 756.0], [49.7, 756.0], [49.8, 758.0], [49.9, 758.0], [50.0, 772.0], [50.1, 778.0], [50.2, 778.0], [50.3, 778.0], [50.4, 778.0], [50.5, 779.0], [50.6, 779.0], [50.7, 783.0], [50.8, 789.0], [50.9, 793.0], [51.0, 793.0], [51.1, 799.0], [51.2, 804.0], [51.3, 805.0], [51.4, 805.0], [51.5, 807.0], [51.6, 812.0], [51.7, 812.0], [51.8, 814.0], [51.9, 817.0], [52.0, 821.0], [52.1, 821.0], [52.2, 823.0], [52.3, 825.0], [52.4, 827.0], [52.5, 827.0], [52.6, 832.0], [52.7, 836.0], [52.8, 836.0], [52.9, 836.0], [53.0, 839.0], [53.1, 841.0], [53.2, 842.0], [53.3, 842.0], [53.4, 843.0], [53.5, 843.0], [53.6, 843.0], [53.7, 844.0], [53.8, 848.0], [53.9, 848.0], [54.0, 848.0], [54.1, 854.0], [54.2, 856.0], [54.3, 857.0], [54.4, 857.0], [54.5, 857.0], [54.6, 857.0], [54.7, 859.0], [54.8, 859.0], [54.9, 866.0], [55.0, 867.0], [55.1, 867.0], [55.2, 868.0], [55.3, 869.0], [55.4, 870.0], [55.5, 870.0], [55.6, 870.0], [55.7, 871.0], [55.8, 876.0], [55.9, 876.0], [56.0, 876.0], [56.1, 876.0], [56.2, 878.0], [56.3, 878.0], [56.4, 884.0], [56.5, 890.0], [56.6, 891.0], [56.7, 891.0], [56.8, 894.0], [56.9, 902.0], [57.0, 902.0], [57.1, 902.0], [57.2, 907.0], [57.3, 913.0], [57.4, 913.0], [57.5, 914.0], [57.6, 917.0], [57.7, 917.0], [57.8, 917.0], [57.9, 917.0], [58.0, 917.0], [58.1, 919.0], [58.2, 919.0], [58.3, 929.0], [58.4, 943.0], [58.5, 943.0], [58.6, 944.0], [58.7, 947.0], [58.8, 947.0], [58.9, 947.0], [59.0, 948.0], [59.1, 948.0], [59.2, 952.0], [59.3, 952.0], [59.4, 953.0], [59.5, 953.0], [59.6, 953.0], [59.7, 953.0], [59.8, 954.0], [59.9, 955.0], [60.0, 955.0], [60.1, 955.0], [60.2, 956.0], [60.3, 957.0], [60.4, 957.0], [60.5, 960.0], [60.6, 962.0], [60.7, 966.0], [60.8, 966.0], [60.9, 968.0], [61.0, 968.0], [61.1, 969.0], [61.2, 969.0], [61.3, 972.0], [61.4, 973.0], [61.5, 973.0], [61.6, 973.0], [61.7, 973.0], [61.8, 973.0], [61.9, 973.0], [62.0, 976.0], [62.1, 976.0], [62.2, 977.0], [62.3, 977.0], [62.4, 978.0], [62.5, 978.0], [62.6, 979.0], [62.7, 979.0], [62.8, 979.0], [62.9, 980.0], [63.0, 982.0], [63.1, 982.0], [63.2, 984.0], [63.3, 984.0], [63.4, 984.0], [63.5, 985.0], [63.6, 985.0], [63.7, 985.0], [63.8, 985.0], [63.9, 986.0], [64.0, 986.0], [64.1, 988.0], [64.2, 988.0], [64.3, 988.0], [64.4, 988.0], [64.5, 989.0], [64.6, 989.0], [64.7, 990.0], [64.8, 991.0], [64.9, 991.0], [65.0, 991.0], [65.1, 991.0], [65.2, 991.0], [65.3, 991.0], [65.4, 992.0], [65.5, 994.0], [65.6, 994.0], [65.7, 994.0], [65.8, 995.0], [65.9, 996.0], [66.0, 996.0], [66.1, 996.0], [66.2, 998.0], [66.3, 1000.0], [66.4, 1000.0], [66.5, 1000.0], [66.6, 1002.0], [66.7, 1002.0], [66.8, 1002.0], [66.9, 1002.0], [67.0, 1002.0], [67.1, 1003.0], [67.2, 1003.0], [67.3, 1004.0], [67.4, 1005.0], [67.5, 1005.0], [67.6, 1005.0], [67.7, 1006.0], [67.8, 1007.0], [67.9, 1007.0], [68.0, 1007.0], [68.1, 1008.0], [68.2, 1009.0], [68.3, 1009.0], [68.4, 1009.0], [68.5, 1009.0], [68.6, 1011.0], [68.7, 1011.0], [68.8, 1013.0], [68.9, 1013.0], [69.0, 1013.0], [69.1, 1013.0], [69.2, 1013.0], [69.3, 1013.0], [69.4, 1014.0], [69.5, 1014.0], [69.6, 1015.0], [69.7, 1015.0], [69.8, 1016.0], [69.9, 1016.0], [70.0, 1017.0], [70.1, 1017.0], [70.2, 1017.0], [70.3, 1017.0], [70.4, 1019.0], [70.5, 1021.0], [70.6, 1021.0], [70.7, 1021.0], [70.8, 1023.0], [70.9, 1025.0], [71.0, 1025.0], [71.1, 1026.0], [71.2, 1029.0], [71.3, 1030.0], [71.4, 1030.0], [71.5, 1030.0], [71.6, 1030.0], [71.7, 1030.0], [71.8, 1031.0], [71.9, 1032.0], [72.0, 1033.0], [72.1, 1033.0], [72.2, 1033.0], [72.3, 1034.0], [72.4, 1034.0], [72.5, 1034.0], [72.6, 1035.0], [72.7, 1035.0], [72.8, 1036.0], [72.9, 1036.0], [73.0, 1036.0], [73.1, 1036.0], [73.2, 1036.0], [73.3, 1036.0], [73.4, 1037.0], [73.5, 1039.0], [73.6, 1039.0], [73.7, 1039.0], [73.8, 1040.0], [73.9, 1042.0], [74.0, 1042.0], [74.1, 1044.0], [74.2, 1045.0], [74.3, 1045.0], [74.4, 1045.0], [74.5, 1045.0], [74.6, 1046.0], [74.7, 1046.0], [74.8, 1046.0], [74.9, 1046.0], [75.0, 1047.0], [75.1, 1047.0], [75.2, 1049.0], [75.3, 1050.0], [75.4, 1051.0], [75.5, 1051.0], [75.6, 1051.0], [75.7, 1052.0], [75.8, 1053.0], [75.9, 1053.0], [76.0, 1053.0], [76.1, 1053.0], [76.2, 1054.0], [76.3, 1054.0], [76.4, 1055.0], [76.5, 1055.0], [76.6, 1057.0], [76.7, 1057.0], [76.8, 1057.0], [76.9, 1058.0], [77.0, 1058.0], [77.1, 1058.0], [77.2, 1058.0], [77.3, 1059.0], [77.4, 1059.0], [77.5, 1059.0], [77.6, 1060.0], [77.7, 1061.0], [77.8, 1061.0], [77.9, 1062.0], [78.0, 1063.0], [78.1, 1063.0], [78.2, 1063.0], [78.3, 1064.0], [78.4, 1064.0], [78.5, 1064.0], [78.6, 1065.0], [78.7, 1065.0], [78.8, 1067.0], [78.9, 1067.0], [79.0, 1069.0], [79.1, 1070.0], [79.2, 1071.0], [79.3, 1071.0], [79.4, 1073.0], [79.5, 1073.0], [79.6, 1074.0], [79.7, 1074.0], [79.8, 1074.0], [79.9, 1075.0], [80.0, 1077.0], [80.1, 1077.0], [80.2, 1077.0], [80.3, 1077.0], [80.4, 1077.0], [80.5, 1080.0], [80.6, 1081.0], [80.7, 1082.0], [80.8, 1082.0], [80.9, 1083.0], [81.0, 1084.0], [81.1, 1084.0], [81.2, 1084.0], [81.3, 1085.0], [81.4, 1085.0], [81.5, 1086.0], [81.6, 1086.0], [81.7, 1087.0], [81.8, 1088.0], [81.9, 1088.0], [82.0, 1088.0], [82.1, 1090.0], [82.2, 1090.0], [82.3, 1090.0], [82.4, 1091.0], [82.5, 1091.0], [82.6, 1091.0], [82.7, 1091.0], [82.8, 1092.0], [82.9, 1092.0], [83.0, 1093.0], [83.1, 1093.0], [83.2, 1093.0], [83.3, 1094.0], [83.4, 1094.0], [83.5, 1094.0], [83.6, 1097.0], [83.7, 1098.0], [83.8, 1098.0], [83.9, 1098.0], [84.0, 1099.0], [84.1, 1100.0], [84.2, 1100.0], [84.3, 1101.0], [84.4, 1102.0], [84.5, 1104.0], [84.6, 1104.0], [84.7, 1104.0], [84.8, 1104.0], [84.9, 1106.0], [85.0, 1106.0], [85.1, 1106.0], [85.2, 1108.0], [85.3, 1108.0], [85.4, 1109.0], [85.5, 1110.0], [85.6, 1112.0], [85.7, 1112.0], [85.8, 1112.0], [85.9, 1113.0], [86.0, 1114.0], [86.1, 1114.0], [86.2, 1118.0], [86.3, 1120.0], [86.4, 1120.0], [86.5, 1120.0], [86.6, 1121.0], [86.7, 1121.0], [86.8, 1121.0], [86.9, 1122.0], [87.0, 1123.0], [87.1, 1124.0], [87.2, 1124.0], [87.3, 1124.0], [87.4, 1127.0], [87.5, 1129.0], [87.6, 1129.0], [87.7, 1130.0], [87.8, 1132.0], [87.9, 1132.0], [88.0, 1132.0], [88.1, 1136.0], [88.2, 1136.0], [88.3, 1136.0], [88.4, 1136.0], [88.5, 1137.0], [88.6, 1138.0], [88.7, 1138.0], [88.8, 1139.0], [88.9, 1140.0], [89.0, 1141.0], [89.1, 1141.0], [89.2, 1141.0], [89.3, 1142.0], [89.4, 1145.0], [89.5, 1145.0], [89.6, 1149.0], [89.7, 1149.0], [89.8, 1151.0], [89.9, 1151.0], [90.0, 1151.0], [90.1, 1152.0], [90.2, 1152.0], [90.3, 1153.0], [90.4, 1159.0], [90.5, 1160.0], [90.6, 1160.0], [90.7, 1164.0], [90.8, 1166.0], [90.9, 1166.0], [91.0, 1166.0], [91.1, 1167.0], [91.2, 1171.0], [91.3, 1175.0], [91.4, 1175.0], [91.5, 1178.0], [91.6, 1180.0], [91.7, 1180.0], [91.8, 1185.0], [91.9, 1188.0], [92.0, 1190.0], [92.1, 1190.0], [92.2, 1196.0], [92.3, 1198.0], [92.4, 1202.0], [92.5, 1202.0], [92.6, 1204.0], [92.7, 1204.0], [92.8, 1208.0], [92.9, 1208.0], [93.0, 1209.0], [93.1, 1210.0], [93.2, 1212.0], [93.3, 1212.0], [93.4, 1213.0], [93.5, 1214.0], [93.6, 1214.0], [93.7, 1219.0], [93.8, 1220.0], [93.9, 1221.0], [94.0, 1221.0], [94.1, 1223.0], [94.2, 1230.0], [94.3, 1232.0], [94.4, 1232.0], [94.5, 1234.0], [94.6, 1241.0], [94.7, 1243.0], [94.8, 1243.0], [94.9, 1243.0], [95.0, 1244.0], [95.1, 1244.0], [95.2, 1246.0], [95.3, 1248.0], [95.4, 1249.0], [95.5, 1249.0], [95.6, 1257.0], [95.7, 1260.0], [95.8, 1264.0], [95.9, 1264.0], [96.0, 1295.0], [96.1, 1298.0], [96.2, 1308.0], [96.3, 1308.0], [96.4, 1308.0], [96.5, 1309.0], [96.6, 1312.0], [96.7, 1312.0], [96.8, 1313.0], [96.9, 1315.0], [97.0, 1315.0], [97.1, 1318.0], [97.2, 1325.0], [97.3, 1334.0], [97.4, 1334.0], [97.5, 1346.0], [97.6, 1354.0], [97.7, 1360.0], [97.8, 1360.0], [97.9, 1378.0], [98.0, 1380.0], [98.1, 1395.0], [98.2, 1395.0], [98.3, 1405.0], [98.4, 1406.0], [98.5, 1406.0], [98.6, 1413.0], [98.7, 1413.0], [98.8, 1440.0], [98.9, 1440.0], [99.0, 1440.0], [99.1, 1444.0], [99.2, 1507.0], [99.3, 1507.0], [99.4, 1514.0], [99.5, 1691.0], [99.6, 1936.0], [99.7, 1936.0], [99.8, 1975.0], [99.9, 2187.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 131.0, "series": [{"data": [[2100.0, 1.0], [600.0, 48.0], [700.0, 35.0], [200.0, 41.0], [800.0, 42.0], [900.0, 69.0], [1000.0, 131.0], [1100.0, 61.0], [1200.0, 28.0], [300.0, 40.0], [1300.0, 15.0], [1400.0, 7.0], [1500.0, 2.0], [100.0, 21.0], [400.0, 83.0], [1600.0, 1.0], [1900.0, 2.0], [500.0, 108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 541.0, "series": [{"data": [[0.0, 188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 541.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.307692307692308, "minX": 1.60505832E12, "maxY": 9.98656716417911, "series": [{"data": [[1.60505832E12, 9.98656716417911], [1.60505838E12, 9.307692307692308]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505838E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.0, "maxY": 1053.0, "series": [{"data": [[8.0, 613.0], [4.0, 461.0], [2.0, 1053.0], [1.0, 1046.0], [9.0, 449.3333333333333], [5.0, 357.5], [10.0, 772.8171745152353], [6.0, 256.0], [3.0, 456.0], [7.0, 202.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.9265306122449, 768.3496598639459]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 490.26666666666665, "minX": 1.60505832E12, "maxY": 1572215.9166666667, "series": [{"data": [[1.60505832E12, 1572215.9166666667], [1.60505838E12, 165204.08333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60505832E12, 5179.766666666666], [1.60505838E12, 490.26666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505838E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 647.1076923076923, "minX": 1.60505832E12, "maxY": 780.1119402985082, "series": [{"data": [[1.60505832E12, 780.1119402985082], [1.60505838E12, 647.1076923076923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505838E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 645.8923076923077, "minX": 1.60505832E12, "maxY": 779.0000000000002, "series": [{"data": [[1.60505832E12, 779.0000000000002], [1.60505838E12, 645.8923076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505838E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60505832E12, "maxY": 0.14029850746268654, "series": [{"data": [[1.60505832E12, 0.14029850746268654], [1.60505838E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505838E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 125.0, "minX": 1.60505832E12, "maxY": 2187.0, "series": [{"data": [[1.60505832E12, 1975.0], [1.60505838E12, 2187.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60505832E12, 142.03899984002112], [1.60505838E12, 143.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60505832E12, 142.64290006399153], [1.60505838E12, 143.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60505832E12, 142.37449992001058], [1.60505838E12, 143.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60505832E12, 125.0], [1.60505838E12, 143.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60505832E12, 804.5], [1.60505838E12, 469.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505838E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 395.0, "minX": 2.0, "maxY": 1049.5, "series": [{"data": [[8.0, 713.5], [2.0, 1049.5], [9.0, 1011.0], [10.0, 989.5], [11.0, 1003.0], [12.0, 1000.0], [13.0, 899.0], [14.0, 615.0], [15.0, 654.5], [16.0, 516.0], [17.0, 621.5], [18.0, 510.5], [19.0, 503.0], [20.0, 445.0], [22.0, 531.5], [23.0, 395.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 395.0, "minX": 2.0, "maxY": 1048.0, "series": [{"data": [[8.0, 711.5], [2.0, 1048.0], [9.0, 1007.0], [10.0, 988.5], [11.0, 1001.5], [12.0, 1000.0], [13.0, 896.5], [14.0, 613.5], [15.0, 654.5], [16.0, 515.5], [17.0, 621.5], [18.0, 510.0], [19.0, 501.0], [20.0, 444.5], [22.0, 531.5], [23.0, 395.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60505832E12, "maxY": 11.333333333333334, "series": [{"data": [[1.60505832E12, 11.333333333333334], [1.60505838E12, 0.9166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505838E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60505832E12, "maxY": 11.166666666666666, "series": [{"data": [[1.60505832E12, 11.166666666666666], [1.60505838E12, 1.0833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505838E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60505832E12, "maxY": 11.166666666666666, "series": [{"data": [[1.60505832E12, 11.166666666666666], [1.60505838E12, 1.0833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505838E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60505832E12, "maxY": 11.166666666666666, "series": [{"data": [[1.60505832E12, 11.166666666666666], [1.60505838E12, 1.0833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505838E12, "title": "Total Transactions Per Second"}},
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

