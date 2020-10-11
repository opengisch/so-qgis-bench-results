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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3740.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 184.0], [0.3, 191.0], [0.4, 191.0], [0.5, 192.0], [0.6, 194.0], [0.7, 205.0], [0.8, 205.0], [0.9, 205.0], [1.0, 211.0], [1.1, 211.0], [1.2, 211.0], [1.3, 213.0], [1.4, 215.0], [1.5, 216.0], [1.6, 216.0], [1.7, 219.0], [1.8, 222.0], [1.9, 222.0], [2.0, 223.0], [2.1, 230.0], [2.2, 240.0], [2.3, 240.0], [2.4, 241.0], [2.5, 242.0], [2.6, 243.0], [2.7, 243.0], [2.8, 246.0], [2.9, 248.0], [3.0, 250.0], [3.1, 250.0], [3.2, 252.0], [3.3, 256.0], [3.4, 256.0], [3.5, 258.0], [3.6, 260.0], [3.7, 261.0], [3.8, 261.0], [3.9, 261.0], [4.0, 265.0], [4.1, 269.0], [4.2, 269.0], [4.3, 274.0], [4.4, 274.0], [4.5, 276.0], [4.6, 276.0], [4.7, 278.0], [4.8, 279.0], [4.9, 279.0], [5.0, 279.0], [5.1, 280.0], [5.2, 281.0], [5.3, 281.0], [5.4, 281.0], [5.5, 282.0], [5.6, 282.0], [5.7, 282.0], [5.8, 285.0], [5.9, 285.0], [6.0, 287.0], [6.1, 287.0], [6.2, 288.0], [6.3, 288.0], [6.4, 289.0], [6.5, 289.0], [6.6, 294.0], [6.7, 296.0], [6.8, 296.0], [6.9, 296.0], [7.0, 296.0], [7.1, 298.0], [7.2, 298.0], [7.3, 298.0], [7.4, 299.0], [7.5, 303.0], [7.6, 303.0], [7.7, 310.0], [7.8, 313.0], [7.9, 317.0], [8.0, 317.0], [8.1, 318.0], [8.2, 319.0], [8.3, 320.0], [8.4, 320.0], [8.5, 323.0], [8.6, 323.0], [8.7, 323.0], [8.8, 328.0], [8.9, 333.0], [9.0, 333.0], [9.1, 333.0], [9.2, 339.0], [9.3, 339.0], [9.4, 340.0], [9.5, 340.0], [9.6, 342.0], [9.7, 345.0], [9.8, 347.0], [9.9, 347.0], [10.0, 348.0], [10.1, 353.0], [10.2, 353.0], [10.3, 357.0], [10.4, 364.0], [10.5, 365.0], [10.6, 365.0], [10.7, 366.0], [10.8, 368.0], [10.9, 369.0], [11.0, 369.0], [11.1, 370.0], [11.2, 370.0], [11.3, 372.0], [11.4, 372.0], [11.5, 385.0], [11.6, 385.0], [11.7, 385.0], [11.8, 386.0], [11.9, 388.0], [12.0, 393.0], [12.1, 393.0], [12.2, 395.0], [12.3, 395.0], [12.4, 396.0], [12.5, 396.0], [12.6, 396.0], [12.7, 400.0], [12.8, 400.0], [12.9, 400.0], [13.0, 400.0], [13.1, 402.0], [13.2, 404.0], [13.3, 404.0], [13.4, 405.0], [13.5, 408.0], [13.6, 408.0], [13.7, 408.0], [13.8, 408.0], [13.9, 409.0], [14.0, 409.0], [14.1, 409.0], [14.2, 412.0], [14.3, 414.0], [14.4, 414.0], [14.5, 415.0], [14.6, 415.0], [14.7, 415.0], [14.8, 415.0], [14.9, 417.0], [15.0, 422.0], [15.1, 422.0], [15.2, 423.0], [15.3, 423.0], [15.4, 425.0], [15.5, 425.0], [15.6, 426.0], [15.7, 429.0], [15.8, 429.0], [15.9, 429.0], [16.0, 430.0], [16.1, 432.0], [16.2, 432.0], [16.3, 432.0], [16.4, 433.0], [16.5, 434.0], [16.6, 434.0], [16.7, 434.0], [16.8, 436.0], [16.9, 436.0], [17.0, 436.0], [17.1, 439.0], [17.2, 440.0], [17.3, 440.0], [17.4, 440.0], [17.5, 442.0], [17.6, 444.0], [17.7, 445.0], [17.8, 445.0], [17.9, 446.0], [18.0, 447.0], [18.1, 448.0], [18.2, 448.0], [18.3, 450.0], [18.4, 451.0], [18.5, 451.0], [18.6, 454.0], [18.7, 454.0], [18.8, 455.0], [18.9, 455.0], [19.0, 456.0], [19.1, 456.0], [19.2, 459.0], [19.3, 459.0], [19.4, 462.0], [19.5, 463.0], [19.6, 467.0], [19.7, 467.0], [19.8, 470.0], [19.9, 473.0], [20.0, 474.0], [20.1, 474.0], [20.2, 477.0], [20.3, 477.0], [20.4, 477.0], [20.5, 480.0], [20.6, 482.0], [20.7, 482.0], [20.8, 482.0], [20.9, 482.0], [21.0, 483.0], [21.1, 483.0], [21.2, 483.0], [21.3, 486.0], [21.4, 487.0], [21.5, 491.0], [21.6, 491.0], [21.7, 494.0], [21.8, 498.0], [21.9, 498.0], [22.0, 498.0], [22.1, 499.0], [22.2, 500.0], [22.3, 500.0], [22.4, 509.0], [22.5, 509.0], [22.6, 509.0], [22.7, 509.0], [22.8, 511.0], [22.9, 511.0], [23.0, 513.0], [23.1, 513.0], [23.2, 513.0], [23.3, 516.0], [23.4, 516.0], [23.5, 516.0], [23.6, 518.0], [23.7, 519.0], [23.8, 519.0], [23.9, 519.0], [24.0, 520.0], [24.1, 521.0], [24.2, 521.0], [24.3, 523.0], [24.4, 523.0], [24.5, 524.0], [24.6, 524.0], [24.7, 528.0], [24.8, 528.0], [24.9, 528.0], [25.0, 528.0], [25.1, 528.0], [25.2, 530.0], [25.3, 530.0], [25.4, 530.0], [25.5, 530.0], [25.6, 531.0], [25.7, 531.0], [25.8, 533.0], [25.9, 533.0], [26.0, 535.0], [26.1, 535.0], [26.2, 540.0], [26.3, 540.0], [26.4, 541.0], [26.5, 541.0], [26.6, 545.0], [26.7, 548.0], [26.8, 548.0], [26.9, 550.0], [27.0, 551.0], [27.1, 551.0], [27.2, 551.0], [27.3, 552.0], [27.4, 554.0], [27.5, 554.0], [27.6, 554.0], [27.7, 555.0], [27.8, 556.0], [27.9, 559.0], [28.0, 559.0], [28.1, 559.0], [28.2, 560.0], [28.3, 562.0], [28.4, 562.0], [28.5, 563.0], [28.6, 563.0], [28.7, 563.0], [28.8, 565.0], [28.9, 565.0], [29.0, 566.0], [29.1, 566.0], [29.2, 567.0], [29.3, 567.0], [29.4, 569.0], [29.5, 569.0], [29.6, 571.0], [29.7, 572.0], [29.8, 573.0], [29.9, 573.0], [30.0, 579.0], [30.1, 580.0], [30.2, 580.0], [30.3, 582.0], [30.4, 583.0], [30.5, 584.0], [30.6, 584.0], [30.7, 586.0], [30.8, 588.0], [30.9, 590.0], [31.0, 590.0], [31.1, 591.0], [31.2, 591.0], [31.3, 591.0], [31.4, 591.0], [31.5, 592.0], [31.6, 593.0], [31.7, 593.0], [31.8, 594.0], [31.9, 595.0], [32.0, 599.0], [32.1, 599.0], [32.2, 600.0], [32.3, 601.0], [32.4, 603.0], [32.5, 603.0], [32.6, 604.0], [32.7, 604.0], [32.8, 604.0], [32.9, 604.0], [33.0, 605.0], [33.1, 605.0], [33.2, 606.0], [33.3, 606.0], [33.4, 606.0], [33.5, 606.0], [33.6, 606.0], [33.7, 609.0], [33.8, 610.0], [33.9, 612.0], [34.0, 612.0], [34.1, 612.0], [34.2, 613.0], [34.3, 613.0], [34.4, 613.0], [34.5, 613.0], [34.6, 614.0], [34.7, 615.0], [34.8, 615.0], [34.9, 616.0], [35.0, 617.0], [35.1, 617.0], [35.2, 619.0], [35.3, 624.0], [35.4, 625.0], [35.5, 625.0], [35.6, 628.0], [35.7, 629.0], [35.8, 630.0], [35.9, 630.0], [36.0, 630.0], [36.1, 630.0], [36.2, 631.0], [36.3, 631.0], [36.4, 634.0], [36.5, 635.0], [36.6, 636.0], [36.7, 636.0], [36.8, 637.0], [36.9, 637.0], [37.0, 637.0], [37.1, 638.0], [37.2, 641.0], [37.3, 641.0], [37.4, 641.0], [37.5, 642.0], [37.6, 646.0], [37.7, 647.0], [37.8, 647.0], [37.9, 647.0], [38.0, 648.0], [38.1, 648.0], [38.2, 648.0], [38.3, 649.0], [38.4, 651.0], [38.5, 651.0], [38.6, 652.0], [38.7, 652.0], [38.8, 652.0], [38.9, 652.0], [39.0, 654.0], [39.1, 656.0], [39.2, 658.0], [39.3, 658.0], [39.4, 658.0], [39.5, 658.0], [39.6, 660.0], [39.7, 660.0], [39.8, 665.0], [39.9, 666.0], [40.0, 667.0], [40.1, 667.0], [40.2, 667.0], [40.3, 671.0], [40.4, 671.0], [40.5, 676.0], [40.6, 682.0], [40.7, 683.0], [40.8, 683.0], [40.9, 683.0], [41.0, 688.0], [41.1, 688.0], [41.2, 688.0], [41.3, 689.0], [41.4, 691.0], [41.5, 693.0], [41.6, 693.0], [41.7, 694.0], [41.8, 696.0], [41.9, 696.0], [42.0, 697.0], [42.1, 698.0], [42.2, 699.0], [42.3, 699.0], [42.4, 699.0], [42.5, 701.0], [42.6, 707.0], [42.7, 707.0], [42.8, 707.0], [42.9, 712.0], [43.0, 714.0], [43.1, 714.0], [43.2, 715.0], [43.3, 716.0], [43.4, 716.0], [43.5, 718.0], [43.6, 718.0], [43.7, 718.0], [43.8, 718.0], [43.9, 720.0], [44.0, 721.0], [44.1, 725.0], [44.2, 725.0], [44.3, 729.0], [44.4, 729.0], [44.5, 729.0], [44.6, 729.0], [44.7, 729.0], [44.8, 735.0], [44.9, 737.0], [45.0, 737.0], [45.1, 737.0], [45.2, 739.0], [45.3, 739.0], [45.4, 743.0], [45.5, 749.0], [45.6, 754.0], [45.7, 754.0], [45.8, 754.0], [45.9, 757.0], [46.0, 758.0], [46.1, 758.0], [46.2, 759.0], [46.3, 761.0], [46.4, 761.0], [46.5, 761.0], [46.6, 761.0], [46.7, 762.0], [46.8, 762.0], [46.9, 768.0], [47.0, 768.0], [47.1, 769.0], [47.2, 769.0], [47.3, 772.0], [47.4, 773.0], [47.5, 775.0], [47.6, 775.0], [47.7, 776.0], [47.8, 779.0], [47.9, 779.0], [48.0, 779.0], [48.1, 785.0], [48.2, 789.0], [48.3, 790.0], [48.4, 790.0], [48.5, 791.0], [48.6, 792.0], [48.7, 792.0], [48.8, 795.0], [48.9, 797.0], [49.0, 799.0], [49.1, 799.0], [49.2, 801.0], [49.3, 802.0], [49.4, 802.0], [49.5, 802.0], [49.6, 803.0], [49.7, 803.0], [49.8, 808.0], [49.9, 808.0], [50.0, 809.0], [50.1, 816.0], [50.2, 816.0], [50.3, 819.0], [50.4, 819.0], [50.5, 819.0], [50.6, 819.0], [50.7, 820.0], [50.8, 821.0], [50.9, 823.0], [51.0, 823.0], [51.1, 826.0], [51.2, 826.0], [51.3, 827.0], [51.4, 827.0], [51.5, 830.0], [51.6, 833.0], [51.7, 833.0], [51.8, 833.0], [51.9, 834.0], [52.0, 840.0], [52.1, 840.0], [52.2, 840.0], [52.3, 842.0], [52.4, 843.0], [52.5, 843.0], [52.6, 846.0], [52.7, 848.0], [52.8, 849.0], [52.9, 849.0], [53.0, 851.0], [53.1, 851.0], [53.2, 855.0], [53.3, 855.0], [53.4, 858.0], [53.5, 859.0], [53.6, 859.0], [53.7, 860.0], [53.8, 862.0], [53.9, 863.0], [54.0, 863.0], [54.1, 864.0], [54.2, 865.0], [54.3, 870.0], [54.4, 870.0], [54.5, 873.0], [54.6, 874.0], [54.7, 874.0], [54.8, 874.0], [54.9, 878.0], [55.0, 878.0], [55.1, 878.0], [55.2, 880.0], [55.3, 880.0], [55.4, 882.0], [55.5, 882.0], [55.6, 885.0], [55.7, 885.0], [55.8, 891.0], [55.9, 891.0], [56.0, 892.0], [56.1, 893.0], [56.2, 893.0], [56.3, 893.0], [56.4, 894.0], [56.5, 897.0], [56.6, 899.0], [56.7, 899.0], [56.8, 902.0], [56.9, 904.0], [57.0, 904.0], [57.1, 906.0], [57.2, 906.0], [57.3, 912.0], [57.4, 912.0], [57.5, 915.0], [57.6, 917.0], [57.7, 919.0], [57.8, 919.0], [57.9, 919.0], [58.0, 919.0], [58.1, 920.0], [58.2, 920.0], [58.3, 920.0], [58.4, 921.0], [58.5, 921.0], [58.6, 921.0], [58.7, 924.0], [58.8, 924.0], [58.9, 924.0], [59.0, 930.0], [59.1, 931.0], [59.2, 932.0], [59.3, 932.0], [59.4, 933.0], [59.5, 936.0], [59.6, 936.0], [59.7, 936.0], [59.8, 939.0], [59.9, 940.0], [60.0, 940.0], [60.1, 940.0], [60.2, 941.0], [60.3, 942.0], [60.4, 942.0], [60.5, 944.0], [60.6, 946.0], [60.7, 947.0], [60.8, 947.0], [60.9, 949.0], [61.0, 949.0], [61.1, 949.0], [61.2, 949.0], [61.3, 951.0], [61.4, 951.0], [61.5, 955.0], [61.6, 955.0], [61.7, 956.0], [61.8, 958.0], [61.9, 958.0], [62.0, 964.0], [62.1, 965.0], [62.2, 965.0], [62.3, 965.0], [62.4, 966.0], [62.5, 968.0], [62.6, 968.0], [62.7, 968.0], [62.8, 971.0], [62.9, 972.0], [63.0, 973.0], [63.1, 973.0], [63.2, 977.0], [63.3, 979.0], [63.4, 979.0], [63.5, 983.0], [63.6, 983.0], [63.7, 983.0], [63.8, 983.0], [63.9, 984.0], [64.0, 991.0], [64.1, 992.0], [64.2, 992.0], [64.3, 993.0], [64.4, 994.0], [64.5, 995.0], [64.6, 995.0], [64.7, 996.0], [64.8, 998.0], [64.9, 999.0], [65.0, 999.0], [65.1, 1002.0], [65.2, 1002.0], [65.3, 1002.0], [65.4, 1003.0], [65.5, 1003.0], [65.6, 1009.0], [65.7, 1009.0], [65.8, 1010.0], [65.9, 1010.0], [66.0, 1010.0], [66.1, 1010.0], [66.2, 1011.0], [66.3, 1015.0], [66.4, 1019.0], [66.5, 1019.0], [66.6, 1020.0], [66.7, 1024.0], [66.8, 1024.0], [66.9, 1028.0], [67.0, 1028.0], [67.1, 1031.0], [67.2, 1031.0], [67.3, 1032.0], [67.4, 1037.0], [67.5, 1038.0], [67.6, 1038.0], [67.7, 1040.0], [67.8, 1041.0], [67.9, 1042.0], [68.0, 1042.0], [68.1, 1042.0], [68.2, 1043.0], [68.3, 1043.0], [68.4, 1043.0], [68.5, 1044.0], [68.6, 1046.0], [68.7, 1046.0], [68.8, 1046.0], [68.9, 1047.0], [69.0, 1047.0], [69.1, 1047.0], [69.2, 1053.0], [69.3, 1058.0], [69.4, 1058.0], [69.5, 1058.0], [69.6, 1061.0], [69.7, 1061.0], [69.8, 1063.0], [69.9, 1063.0], [70.0, 1063.0], [70.1, 1063.0], [70.2, 1063.0], [70.3, 1064.0], [70.4, 1065.0], [70.5, 1066.0], [70.6, 1066.0], [70.7, 1067.0], [70.8, 1068.0], [70.9, 1069.0], [71.0, 1069.0], [71.1, 1072.0], [71.2, 1075.0], [71.3, 1076.0], [71.4, 1076.0], [71.5, 1076.0], [71.6, 1080.0], [71.7, 1080.0], [71.8, 1081.0], [71.9, 1082.0], [72.0, 1083.0], [72.1, 1083.0], [72.2, 1083.0], [72.3, 1086.0], [72.4, 1087.0], [72.5, 1087.0], [72.6, 1090.0], [72.7, 1094.0], [72.8, 1094.0], [72.9, 1094.0], [73.0, 1094.0], [73.1, 1094.0], [73.2, 1097.0], [73.3, 1097.0], [73.4, 1099.0], [73.5, 1099.0], [73.6, 1099.0], [73.7, 1101.0], [73.8, 1102.0], [73.9, 1104.0], [74.0, 1104.0], [74.1, 1105.0], [74.2, 1106.0], [74.3, 1106.0], [74.4, 1106.0], [74.5, 1107.0], [74.6, 1108.0], [74.7, 1108.0], [74.8, 1108.0], [74.9, 1111.0], [75.0, 1111.0], [75.1, 1111.0], [75.2, 1111.0], [75.3, 1114.0], [75.4, 1117.0], [75.5, 1117.0], [75.6, 1118.0], [75.7, 1118.0], [75.8, 1118.0], [75.9, 1118.0], [76.0, 1118.0], [76.1, 1120.0], [76.2, 1124.0], [76.3, 1124.0], [76.4, 1124.0], [76.5, 1125.0], [76.6, 1126.0], [76.7, 1126.0], [76.8, 1128.0], [76.9, 1131.0], [77.0, 1131.0], [77.1, 1132.0], [77.2, 1133.0], [77.3, 1134.0], [77.4, 1134.0], [77.5, 1139.0], [77.6, 1140.0], [77.7, 1145.0], [77.8, 1145.0], [77.9, 1147.0], [78.0, 1149.0], [78.1, 1149.0], [78.2, 1149.0], [78.3, 1150.0], [78.4, 1151.0], [78.5, 1151.0], [78.6, 1151.0], [78.7, 1154.0], [78.8, 1156.0], [78.9, 1156.0], [79.0, 1156.0], [79.1, 1156.0], [79.2, 1159.0], [79.3, 1159.0], [79.4, 1163.0], [79.5, 1177.0], [79.6, 1178.0], [79.7, 1178.0], [79.8, 1180.0], [79.9, 1182.0], [80.0, 1182.0], [80.1, 1182.0], [80.2, 1184.0], [80.3, 1185.0], [80.4, 1185.0], [80.5, 1186.0], [80.6, 1186.0], [80.7, 1187.0], [80.8, 1187.0], [80.9, 1187.0], [81.0, 1189.0], [81.1, 1191.0], [81.2, 1191.0], [81.3, 1193.0], [81.4, 1194.0], [81.5, 1194.0], [81.6, 1194.0], [81.7, 1196.0], [81.8, 1199.0], [81.9, 1199.0], [82.0, 1200.0], [82.1, 1201.0], [82.2, 1202.0], [82.3, 1202.0], [82.4, 1209.0], [82.5, 1210.0], [82.6, 1211.0], [82.7, 1211.0], [82.8, 1212.0], [82.9, 1212.0], [83.0, 1215.0], [83.1, 1215.0], [83.2, 1215.0], [83.3, 1216.0], [83.4, 1216.0], [83.5, 1218.0], [83.6, 1220.0], [83.7, 1221.0], [83.8, 1221.0], [83.9, 1228.0], [84.0, 1230.0], [84.1, 1232.0], [84.2, 1232.0], [84.3, 1232.0], [84.4, 1234.0], [84.5, 1238.0], [84.6, 1238.0], [84.7, 1246.0], [84.8, 1248.0], [84.9, 1249.0], [85.0, 1249.0], [85.1, 1251.0], [85.2, 1252.0], [85.3, 1252.0], [85.4, 1255.0], [85.5, 1261.0], [85.6, 1265.0], [85.7, 1265.0], [85.8, 1267.0], [85.9, 1269.0], [86.0, 1274.0], [86.1, 1274.0], [86.2, 1275.0], [86.3, 1279.0], [86.4, 1280.0], [86.5, 1280.0], [86.6, 1281.0], [86.7, 1281.0], [86.8, 1281.0], [86.9, 1283.0], [87.0, 1287.0], [87.1, 1287.0], [87.2, 1287.0], [87.3, 1291.0], [87.4, 1292.0], [87.5, 1293.0], [87.6, 1293.0], [87.7, 1294.0], [87.8, 1295.0], [87.9, 1305.0], [88.0, 1305.0], [88.1, 1308.0], [88.2, 1309.0], [88.3, 1312.0], [88.4, 1312.0], [88.5, 1322.0], [88.6, 1330.0], [88.7, 1330.0], [88.8, 1331.0], [88.9, 1333.0], [89.0, 1334.0], [89.1, 1334.0], [89.2, 1336.0], [89.3, 1339.0], [89.4, 1339.0], [89.5, 1339.0], [89.6, 1339.0], [89.7, 1341.0], [89.8, 1346.0], [89.9, 1346.0], [90.0, 1348.0], [90.1, 1352.0], [90.2, 1352.0], [90.3, 1354.0], [90.4, 1355.0], [90.5, 1355.0], [90.6, 1355.0], [90.7, 1358.0], [90.8, 1360.0], [90.9, 1365.0], [91.0, 1365.0], [91.1, 1365.0], [91.2, 1370.0], [91.3, 1378.0], [91.4, 1378.0], [91.5, 1382.0], [91.6, 1387.0], [91.7, 1387.0], [91.8, 1387.0], [91.9, 1396.0], [92.0, 1397.0], [92.1, 1397.0], [92.2, 1401.0], [92.3, 1406.0], [92.4, 1406.0], [92.5, 1406.0], [92.6, 1410.0], [92.7, 1413.0], [92.8, 1429.0], [92.9, 1429.0], [93.0, 1442.0], [93.1, 1442.0], [93.2, 1458.0], [93.3, 1458.0], [93.4, 1460.0], [93.5, 1461.0], [93.6, 1461.0], [93.7, 1473.0], [93.8, 1474.0], [93.9, 1487.0], [94.0, 1487.0], [94.1, 1490.0], [94.2, 1498.0], [94.3, 1499.0], [94.4, 1499.0], [94.5, 1515.0], [94.6, 1516.0], [94.7, 1530.0], [94.8, 1530.0], [94.9, 1531.0], [95.0, 1538.0], [95.1, 1538.0], [95.2, 1542.0], [95.3, 1544.0], [95.4, 1545.0], [95.5, 1545.0], [95.6, 1550.0], [95.7, 1562.0], [95.8, 1563.0], [95.9, 1563.0], [96.0, 1582.0], [96.1, 1616.0], [96.2, 1648.0], [96.3, 1648.0], [96.4, 1721.0], [96.5, 1723.0], [96.6, 1787.0], [96.7, 1787.0], [96.8, 1800.0], [96.9, 1811.0], [97.0, 1811.0], [97.1, 1861.0], [97.2, 1862.0], [97.3, 1870.0], [97.4, 1870.0], [97.5, 1877.0], [97.6, 1892.0], [97.7, 1916.0], [97.8, 1916.0], [97.9, 1933.0], [98.0, 1973.0], [98.1, 1994.0], [98.2, 1994.0], [98.3, 2524.0], [98.4, 2551.0], [98.5, 2551.0], [98.6, 2590.0], [98.7, 2607.0], [98.8, 2746.0], [98.9, 2746.0], [99.0, 2800.0], [99.1, 2812.0], [99.2, 2933.0], [99.3, 2933.0], [99.4, 2988.0], [99.5, 3003.0], [99.6, 3047.0], [99.7, 3047.0], [99.8, 3622.0], [99.9, 3740.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 76.0, "series": [{"data": [[600.0, 76.0], [700.0, 49.0], [800.0, 56.0], [900.0, 61.0], [1000.0, 63.0], [1100.0, 61.0], [1200.0, 44.0], [1300.0, 31.0], [1400.0, 17.0], [1500.0, 12.0], [100.0, 5.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 7.0], [1900.0, 4.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 2.0], [200.0, 50.0], [3700.0, 1.0], [3600.0, 1.0], [300.0, 38.0], [400.0, 70.0], [500.0, 73.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 530.0, "series": [{"data": [[0.0, 164.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 530.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.884615384615385, "minX": 1.60237302E12, "maxY": 10.0, "series": [{"data": [[1.60237308E12, 9.884615384615385], [1.60237302E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237308E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 995.0, "series": [{"data": [[8.0, 614.0], [4.0, 592.0], [2.0, 651.0], [1.0, 973.0], [9.0, 554.0], [10.0, 863.7672176308545], [5.0, 593.0], [6.0, 619.0], [3.0, 995.0], [7.0, 573.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 861.5768707482997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2596.7166666666667, "minX": 1.60237302E12, "maxY": 933590.1833333333, "series": [{"data": [[1.60237308E12, 933590.1833333333], [1.60237302E12, 902187.4833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237308E12, 2926.3166666666666], [1.60237302E12, 2596.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237308E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 826.0410256410258, "minX": 1.60237302E12, "maxY": 901.747826086957, "series": [{"data": [[1.60237308E12, 826.0410256410258], [1.60237302E12, 901.747826086957]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237308E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 824.9179487179485, "minX": 1.60237302E12, "maxY": 900.5565217391309, "series": [{"data": [[1.60237308E12, 824.9179487179485], [1.60237302E12, 900.5565217391309]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237308E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02820512820512821, "minX": 1.60237302E12, "maxY": 0.2927536231884056, "series": [{"data": [[1.60237308E12, 0.02820512820512821], [1.60237302E12, 0.2927536231884056]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237308E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60237302E12, "maxY": 3740.0, "series": [{"data": [[1.60237308E12, 3740.0], [1.60237302E12, 3047.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237308E12, 191.51899990677833], [1.60237302E12, 216.68399950504303]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237308E12, 191.87090003728866], [1.60237302E12, 218.5524001979828]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237308E12, 191.71449995338918], [1.60237302E12, 217.72199975252153]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237308E12, 182.0], [1.60237302E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237308E12, 770.5], [1.60237302E12, 843.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 467.0, "minX": 2.0, "maxY": 2800.0, "series": [{"data": [[8.0, 954.0], [2.0, 812.0], [9.0, 994.0], [10.0, 1021.5], [11.0, 1006.5], [3.0, 2800.0], [12.0, 918.5], [13.0, 785.0], [14.0, 745.0], [15.0, 649.0], [16.0, 558.0], [17.0, 619.0], [18.0, 602.5], [19.0, 467.0], [7.0, 1261.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 466.0, "minX": 2.0, "maxY": 2799.0, "series": [{"data": [[8.0, 952.5], [2.0, 812.0], [9.0, 994.0], [10.0, 1020.5], [11.0, 1005.5], [3.0, 2799.0], [12.0, 917.5], [13.0, 780.0], [14.0, 744.0], [15.0, 649.0], [16.0, 557.0], [17.0, 619.0], [18.0, 600.0], [19.0, 466.0], [7.0, 1261.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60237302E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60237308E12, 6.333333333333333], [1.60237302E12, 5.916666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237308E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60237302E12, "maxY": 6.5, "series": [{"data": [[1.60237308E12, 6.5], [1.60237302E12, 5.75]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237308E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60237302E12, "maxY": 6.5, "series": [{"data": [[1.60237308E12, 6.5], [1.60237302E12, 5.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237308E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60237302E12, "maxY": 6.5, "series": [{"data": [[1.60237308E12, 6.5], [1.60237302E12, 5.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237308E12, "title": "Total Transactions Per Second"}},
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

