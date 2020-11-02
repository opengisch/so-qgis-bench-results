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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 3554.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 187.0], [0.3, 190.0], [0.4, 190.0], [0.5, 197.0], [0.6, 197.0], [0.7, 212.0], [0.8, 212.0], [0.9, 215.0], [1.0, 215.0], [1.1, 216.0], [1.2, 216.0], [1.3, 221.0], [1.4, 222.0], [1.5, 222.0], [1.6, 222.0], [1.7, 223.0], [1.8, 224.0], [1.9, 224.0], [2.0, 225.0], [2.1, 226.0], [2.2, 229.0], [2.3, 229.0], [2.4, 230.0], [2.5, 246.0], [2.6, 255.0], [2.7, 255.0], [2.8, 257.0], [2.9, 266.0], [3.0, 266.0], [3.1, 266.0], [3.2, 266.0], [3.3, 268.0], [3.4, 268.0], [3.5, 269.0], [3.6, 273.0], [3.7, 276.0], [3.8, 276.0], [3.9, 278.0], [4.0, 278.0], [4.1, 278.0], [4.2, 278.0], [4.3, 279.0], [4.4, 281.0], [4.5, 290.0], [4.6, 290.0], [4.7, 292.0], [4.8, 293.0], [4.9, 294.0], [5.0, 294.0], [5.1, 303.0], [5.2, 306.0], [5.3, 306.0], [5.4, 308.0], [5.5, 310.0], [5.6, 312.0], [5.7, 312.0], [5.8, 317.0], [5.9, 322.0], [6.0, 330.0], [6.1, 330.0], [6.2, 331.0], [6.3, 331.0], [6.4, 332.0], [6.5, 332.0], [6.6, 333.0], [6.7, 339.0], [6.8, 339.0], [6.9, 347.0], [7.0, 352.0], [7.1, 354.0], [7.2, 354.0], [7.3, 355.0], [7.4, 357.0], [7.5, 359.0], [7.6, 359.0], [7.7, 360.0], [7.8, 362.0], [7.9, 362.0], [8.0, 362.0], [8.1, 365.0], [8.2, 366.0], [8.3, 367.0], [8.4, 367.0], [8.5, 367.0], [8.6, 369.0], [8.7, 369.0], [8.8, 380.0], [8.9, 384.0], [9.0, 388.0], [9.1, 388.0], [9.2, 393.0], [9.3, 394.0], [9.4, 405.0], [9.5, 405.0], [9.6, 408.0], [9.7, 410.0], [9.8, 410.0], [9.9, 410.0], [10.0, 411.0], [10.1, 411.0], [10.2, 411.0], [10.3, 411.0], [10.4, 412.0], [10.5, 412.0], [10.6, 412.0], [10.7, 412.0], [10.8, 413.0], [10.9, 416.0], [11.0, 416.0], [11.1, 416.0], [11.2, 420.0], [11.3, 421.0], [11.4, 421.0], [11.5, 423.0], [11.6, 425.0], [11.7, 425.0], [11.8, 430.0], [11.9, 431.0], [12.0, 433.0], [12.1, 433.0], [12.2, 434.0], [12.3, 438.0], [12.4, 439.0], [12.5, 439.0], [12.6, 442.0], [12.7, 444.0], [12.8, 448.0], [12.9, 448.0], [13.0, 448.0], [13.1, 452.0], [13.2, 453.0], [13.3, 453.0], [13.4, 454.0], [13.5, 455.0], [13.6, 455.0], [13.7, 456.0], [13.8, 456.0], [13.9, 457.0], [14.0, 457.0], [14.1, 460.0], [14.2, 460.0], [14.3, 460.0], [14.4, 460.0], [14.5, 462.0], [14.6, 462.0], [14.7, 466.0], [14.8, 466.0], [14.9, 466.0], [15.0, 468.0], [15.1, 468.0], [15.2, 470.0], [15.3, 470.0], [15.4, 473.0], [15.5, 473.0], [15.6, 474.0], [15.7, 479.0], [15.8, 479.0], [15.9, 479.0], [16.0, 480.0], [16.1, 480.0], [16.2, 481.0], [16.3, 481.0], [16.4, 483.0], [16.5, 484.0], [16.6, 485.0], [16.7, 485.0], [16.8, 488.0], [16.9, 489.0], [17.0, 489.0], [17.1, 491.0], [17.2, 494.0], [17.3, 495.0], [17.4, 495.0], [17.5, 495.0], [17.6, 498.0], [17.7, 500.0], [17.8, 500.0], [17.9, 501.0], [18.0, 505.0], [18.1, 505.0], [18.2, 505.0], [18.3, 508.0], [18.4, 509.0], [18.5, 509.0], [18.6, 510.0], [18.7, 511.0], [18.8, 511.0], [18.9, 511.0], [19.0, 516.0], [19.1, 517.0], [19.2, 518.0], [19.3, 518.0], [19.4, 522.0], [19.5, 525.0], [19.6, 525.0], [19.7, 525.0], [19.8, 525.0], [19.9, 525.0], [20.0, 526.0], [20.1, 526.0], [20.2, 529.0], [20.3, 530.0], [20.4, 530.0], [20.5, 533.0], [20.6, 534.0], [20.7, 537.0], [20.8, 537.0], [20.9, 537.0], [21.0, 538.0], [21.1, 540.0], [21.2, 540.0], [21.3, 544.0], [21.4, 544.0], [21.5, 549.0], [21.6, 549.0], [21.7, 551.0], [21.8, 551.0], [21.9, 551.0], [22.0, 552.0], [22.1, 552.0], [22.2, 553.0], [22.3, 553.0], [22.4, 555.0], [22.5, 555.0], [22.6, 556.0], [22.7, 556.0], [22.8, 557.0], [22.9, 558.0], [23.0, 559.0], [23.1, 559.0], [23.2, 561.0], [23.3, 561.0], [23.4, 561.0], [23.5, 562.0], [23.6, 562.0], [23.7, 562.0], [23.8, 562.0], [23.9, 563.0], [24.0, 565.0], [24.1, 566.0], [24.2, 566.0], [24.3, 568.0], [24.4, 569.0], [24.5, 570.0], [24.6, 570.0], [24.7, 570.0], [24.8, 571.0], [24.9, 571.0], [25.0, 571.0], [25.1, 574.0], [25.2, 576.0], [25.3, 576.0], [25.4, 578.0], [25.5, 579.0], [25.6, 579.0], [25.7, 579.0], [25.8, 583.0], [25.9, 583.0], [26.0, 583.0], [26.1, 583.0], [26.2, 587.0], [26.3, 587.0], [26.4, 588.0], [26.5, 588.0], [26.6, 589.0], [26.7, 590.0], [26.8, 590.0], [26.9, 591.0], [27.0, 592.0], [27.1, 593.0], [27.2, 593.0], [27.3, 594.0], [27.4, 594.0], [27.5, 595.0], [27.6, 595.0], [27.7, 595.0], [27.8, 596.0], [27.9, 598.0], [28.0, 598.0], [28.1, 599.0], [28.2, 600.0], [28.3, 601.0], [28.4, 601.0], [28.5, 605.0], [28.6, 605.0], [28.7, 605.0], [28.8, 606.0], [28.9, 606.0], [29.0, 608.0], [29.1, 608.0], [29.2, 609.0], [29.3, 613.0], [29.4, 615.0], [29.5, 615.0], [29.6, 616.0], [29.7, 618.0], [29.8, 618.0], [29.9, 618.0], [30.0, 619.0], [30.1, 619.0], [30.2, 619.0], [30.3, 620.0], [30.4, 620.0], [30.5, 621.0], [30.6, 621.0], [30.7, 625.0], [30.8, 625.0], [30.9, 627.0], [31.0, 627.0], [31.1, 630.0], [31.2, 630.0], [31.3, 631.0], [31.4, 631.0], [31.5, 631.0], [31.6, 634.0], [31.7, 634.0], [31.8, 634.0], [31.9, 635.0], [32.0, 636.0], [32.1, 636.0], [32.2, 637.0], [32.3, 639.0], [32.4, 639.0], [32.5, 639.0], [32.6, 640.0], [32.7, 644.0], [32.8, 644.0], [32.9, 644.0], [33.0, 646.0], [33.1, 647.0], [33.2, 647.0], [33.3, 647.0], [33.4, 648.0], [33.5, 648.0], [33.6, 648.0], [33.7, 650.0], [33.8, 650.0], [33.9, 651.0], [34.0, 651.0], [34.1, 652.0], [34.2, 653.0], [34.3, 656.0], [34.4, 656.0], [34.5, 656.0], [34.6, 657.0], [34.7, 658.0], [34.8, 658.0], [34.9, 659.0], [35.0, 659.0], [35.1, 659.0], [35.2, 659.0], [35.3, 661.0], [35.4, 662.0], [35.5, 662.0], [35.6, 662.0], [35.7, 667.0], [35.8, 667.0], [35.9, 667.0], [36.0, 669.0], [36.1, 671.0], [36.2, 672.0], [36.3, 672.0], [36.4, 673.0], [36.5, 675.0], [36.6, 676.0], [36.7, 676.0], [36.8, 676.0], [36.9, 677.0], [37.0, 677.0], [37.1, 678.0], [37.2, 679.0], [37.3, 681.0], [37.4, 681.0], [37.5, 686.0], [37.6, 688.0], [37.7, 691.0], [37.8, 691.0], [37.9, 691.0], [38.0, 692.0], [38.1, 693.0], [38.2, 693.0], [38.3, 695.0], [38.4, 698.0], [38.5, 698.0], [38.6, 702.0], [38.7, 704.0], [38.8, 705.0], [38.9, 705.0], [39.0, 713.0], [39.1, 714.0], [39.2, 714.0], [39.3, 714.0], [39.4, 715.0], [39.5, 715.0], [39.6, 715.0], [39.7, 715.0], [39.8, 715.0], [39.9, 717.0], [40.0, 720.0], [40.1, 720.0], [40.2, 723.0], [40.3, 725.0], [40.4, 725.0], [40.5, 726.0], [40.6, 727.0], [40.7, 727.0], [40.8, 727.0], [40.9, 728.0], [41.0, 728.0], [41.1, 730.0], [41.2, 730.0], [41.3, 731.0], [41.4, 732.0], [41.5, 733.0], [41.6, 733.0], [41.7, 733.0], [41.8, 734.0], [41.9, 734.0], [42.0, 735.0], [42.1, 735.0], [42.2, 738.0], [42.3, 738.0], [42.4, 739.0], [42.5, 740.0], [42.6, 740.0], [42.7, 740.0], [42.8, 741.0], [42.9, 742.0], [43.0, 742.0], [43.1, 742.0], [43.2, 744.0], [43.3, 747.0], [43.4, 747.0], [43.5, 748.0], [43.6, 748.0], [43.7, 752.0], [43.8, 752.0], [43.9, 755.0], [44.0, 757.0], [44.1, 760.0], [44.2, 760.0], [44.3, 761.0], [44.4, 762.0], [44.5, 762.0], [44.6, 762.0], [44.7, 764.0], [44.8, 765.0], [44.9, 769.0], [45.0, 769.0], [45.1, 769.0], [45.2, 772.0], [45.3, 772.0], [45.4, 772.0], [45.5, 772.0], [45.6, 773.0], [45.7, 773.0], [45.8, 774.0], [45.9, 776.0], [46.0, 777.0], [46.1, 777.0], [46.2, 779.0], [46.3, 779.0], [46.4, 782.0], [46.5, 782.0], [46.6, 783.0], [46.7, 790.0], [46.8, 790.0], [46.9, 791.0], [47.0, 791.0], [47.1, 791.0], [47.2, 791.0], [47.3, 793.0], [47.4, 795.0], [47.5, 796.0], [47.6, 796.0], [47.7, 797.0], [47.8, 801.0], [47.9, 802.0], [48.0, 802.0], [48.1, 805.0], [48.2, 805.0], [48.3, 806.0], [48.4, 806.0], [48.5, 808.0], [48.6, 808.0], [48.7, 808.0], [48.8, 808.0], [48.9, 809.0], [49.0, 812.0], [49.1, 812.0], [49.2, 814.0], [49.3, 816.0], [49.4, 816.0], [49.5, 816.0], [49.6, 817.0], [49.7, 819.0], [49.8, 820.0], [49.9, 820.0], [50.0, 822.0], [50.1, 822.0], [50.2, 822.0], [50.3, 826.0], [50.4, 829.0], [50.5, 831.0], [50.6, 831.0], [50.7, 834.0], [50.8, 835.0], [50.9, 835.0], [51.0, 835.0], [51.1, 835.0], [51.2, 838.0], [51.3, 840.0], [51.4, 840.0], [51.5, 841.0], [51.6, 841.0], [51.7, 841.0], [51.8, 842.0], [51.9, 842.0], [52.0, 842.0], [52.1, 842.0], [52.2, 843.0], [52.3, 846.0], [52.4, 847.0], [52.5, 847.0], [52.6, 849.0], [52.7, 849.0], [52.8, 851.0], [52.9, 851.0], [53.0, 853.0], [53.1, 853.0], [53.2, 854.0], [53.3, 854.0], [53.4, 856.0], [53.5, 857.0], [53.6, 857.0], [53.7, 858.0], [53.8, 859.0], [53.9, 859.0], [54.0, 859.0], [54.1, 861.0], [54.2, 862.0], [54.3, 866.0], [54.4, 866.0], [54.5, 866.0], [54.6, 866.0], [54.7, 869.0], [54.8, 869.0], [54.9, 870.0], [55.0, 870.0], [55.1, 870.0], [55.2, 871.0], [55.3, 873.0], [55.4, 875.0], [55.5, 875.0], [55.6, 877.0], [55.7, 881.0], [55.8, 882.0], [55.9, 882.0], [56.0, 882.0], [56.1, 882.0], [56.2, 883.0], [56.3, 883.0], [56.4, 886.0], [56.5, 888.0], [56.6, 892.0], [56.7, 892.0], [56.8, 893.0], [56.9, 894.0], [57.0, 894.0], [57.1, 896.0], [57.2, 899.0], [57.3, 899.0], [57.4, 899.0], [57.5, 900.0], [57.6, 901.0], [57.7, 901.0], [57.8, 901.0], [57.9, 901.0], [58.0, 903.0], [58.1, 904.0], [58.2, 904.0], [58.3, 905.0], [58.4, 908.0], [58.5, 908.0], [58.6, 910.0], [58.7, 912.0], [58.8, 913.0], [58.9, 913.0], [59.0, 913.0], [59.1, 913.0], [59.2, 914.0], [59.3, 914.0], [59.4, 915.0], [59.5, 918.0], [59.6, 919.0], [59.7, 919.0], [59.8, 920.0], [59.9, 920.0], [60.0, 920.0], [60.1, 920.0], [60.2, 929.0], [60.3, 932.0], [60.4, 932.0], [60.5, 933.0], [60.6, 938.0], [60.7, 939.0], [60.8, 939.0], [60.9, 941.0], [61.0, 941.0], [61.1, 941.0], [61.2, 941.0], [61.3, 946.0], [61.4, 948.0], [61.5, 948.0], [61.6, 948.0], [61.7, 949.0], [61.8, 949.0], [61.9, 949.0], [62.0, 950.0], [62.1, 952.0], [62.2, 954.0], [62.3, 954.0], [62.4, 955.0], [62.5, 957.0], [62.6, 957.0], [62.7, 957.0], [62.8, 958.0], [62.9, 958.0], [63.0, 958.0], [63.1, 958.0], [63.2, 959.0], [63.3, 963.0], [63.4, 963.0], [63.5, 963.0], [63.6, 965.0], [63.7, 966.0], [63.8, 966.0], [63.9, 967.0], [64.0, 969.0], [64.1, 972.0], [64.2, 972.0], [64.3, 973.0], [64.4, 973.0], [64.5, 973.0], [64.6, 973.0], [64.7, 974.0], [64.8, 975.0], [64.9, 976.0], [65.0, 976.0], [65.1, 979.0], [65.2, 980.0], [65.3, 980.0], [65.4, 984.0], [65.5, 985.0], [65.6, 989.0], [65.7, 989.0], [65.8, 991.0], [65.9, 992.0], [66.0, 992.0], [66.1, 992.0], [66.2, 994.0], [66.3, 994.0], [66.4, 997.0], [66.5, 997.0], [66.6, 997.0], [66.7, 998.0], [66.8, 998.0], [66.9, 999.0], [67.0, 1000.0], [67.1, 1002.0], [67.2, 1002.0], [67.3, 1005.0], [67.4, 1006.0], [67.5, 1009.0], [67.6, 1009.0], [67.7, 1010.0], [67.8, 1011.0], [67.9, 1011.0], [68.0, 1011.0], [68.1, 1015.0], [68.2, 1015.0], [68.3, 1017.0], [68.4, 1017.0], [68.5, 1017.0], [68.6, 1019.0], [68.7, 1019.0], [68.8, 1020.0], [68.9, 1027.0], [69.0, 1029.0], [69.1, 1029.0], [69.2, 1033.0], [69.3, 1033.0], [69.4, 1035.0], [69.5, 1035.0], [69.6, 1035.0], [69.7, 1037.0], [69.8, 1040.0], [69.9, 1040.0], [70.0, 1041.0], [70.1, 1041.0], [70.2, 1041.0], [70.3, 1042.0], [70.4, 1044.0], [70.5, 1050.0], [70.6, 1050.0], [70.7, 1052.0], [70.8, 1052.0], [70.9, 1056.0], [71.0, 1056.0], [71.1, 1056.0], [71.2, 1056.0], [71.3, 1056.0], [71.4, 1056.0], [71.5, 1056.0], [71.6, 1059.0], [71.7, 1059.0], [71.8, 1063.0], [71.9, 1064.0], [72.0, 1065.0], [72.1, 1065.0], [72.2, 1066.0], [72.3, 1066.0], [72.4, 1066.0], [72.5, 1066.0], [72.6, 1067.0], [72.7, 1068.0], [72.8, 1069.0], [72.9, 1069.0], [73.0, 1076.0], [73.1, 1080.0], [73.2, 1083.0], [73.3, 1083.0], [73.4, 1083.0], [73.5, 1087.0], [73.6, 1087.0], [73.7, 1089.0], [73.8, 1090.0], [73.9, 1092.0], [74.0, 1092.0], [74.1, 1094.0], [74.2, 1095.0], [74.3, 1096.0], [74.4, 1096.0], [74.5, 1096.0], [74.6, 1097.0], [74.7, 1098.0], [74.8, 1098.0], [74.9, 1100.0], [75.0, 1101.0], [75.1, 1101.0], [75.2, 1101.0], [75.3, 1102.0], [75.4, 1104.0], [75.5, 1104.0], [75.6, 1110.0], [75.7, 1111.0], [75.8, 1113.0], [75.9, 1113.0], [76.0, 1114.0], [76.1, 1117.0], [76.2, 1117.0], [76.3, 1117.0], [76.4, 1118.0], [76.5, 1120.0], [76.6, 1122.0], [76.7, 1122.0], [76.8, 1124.0], [76.9, 1124.0], [77.0, 1124.0], [77.1, 1128.0], [77.2, 1133.0], [77.3, 1135.0], [77.4, 1135.0], [77.5, 1146.0], [77.6, 1146.0], [77.7, 1148.0], [77.8, 1148.0], [77.9, 1149.0], [78.0, 1150.0], [78.1, 1151.0], [78.2, 1151.0], [78.3, 1151.0], [78.4, 1153.0], [78.5, 1153.0], [78.6, 1153.0], [78.7, 1154.0], [78.8, 1154.0], [78.9, 1154.0], [79.0, 1162.0], [79.1, 1162.0], [79.2, 1164.0], [79.3, 1164.0], [79.4, 1164.0], [79.5, 1164.0], [79.6, 1165.0], [79.7, 1165.0], [79.8, 1167.0], [79.9, 1168.0], [80.0, 1169.0], [80.1, 1169.0], [80.2, 1170.0], [80.3, 1171.0], [80.4, 1171.0], [80.5, 1172.0], [80.6, 1177.0], [80.7, 1178.0], [80.8, 1178.0], [80.9, 1180.0], [81.0, 1180.0], [81.1, 1183.0], [81.2, 1183.0], [81.3, 1184.0], [81.4, 1189.0], [81.5, 1191.0], [81.6, 1191.0], [81.7, 1196.0], [81.8, 1197.0], [81.9, 1197.0], [82.0, 1209.0], [82.1, 1211.0], [82.2, 1211.0], [82.3, 1211.0], [82.4, 1212.0], [82.5, 1212.0], [82.6, 1214.0], [82.7, 1214.0], [82.8, 1214.0], [82.9, 1216.0], [83.0, 1216.0], [83.1, 1216.0], [83.2, 1216.0], [83.3, 1217.0], [83.4, 1217.0], [83.5, 1219.0], [83.6, 1222.0], [83.7, 1223.0], [83.8, 1223.0], [83.9, 1224.0], [84.0, 1229.0], [84.1, 1230.0], [84.2, 1230.0], [84.3, 1232.0], [84.4, 1236.0], [84.5, 1238.0], [84.6, 1238.0], [84.7, 1239.0], [84.8, 1239.0], [84.9, 1240.0], [85.0, 1240.0], [85.1, 1242.0], [85.2, 1242.0], [85.3, 1242.0], [85.4, 1249.0], [85.5, 1249.0], [85.6, 1250.0], [85.7, 1250.0], [85.8, 1252.0], [85.9, 1260.0], [86.0, 1263.0], [86.1, 1263.0], [86.2, 1264.0], [86.3, 1265.0], [86.4, 1267.0], [86.5, 1267.0], [86.6, 1267.0], [86.7, 1268.0], [86.8, 1268.0], [86.9, 1277.0], [87.0, 1277.0], [87.1, 1278.0], [87.2, 1278.0], [87.3, 1279.0], [87.4, 1283.0], [87.5, 1292.0], [87.6, 1292.0], [87.7, 1293.0], [87.8, 1296.0], [87.9, 1308.0], [88.0, 1308.0], [88.1, 1314.0], [88.2, 1320.0], [88.3, 1321.0], [88.4, 1321.0], [88.5, 1323.0], [88.6, 1326.0], [88.7, 1326.0], [88.8, 1327.0], [88.9, 1331.0], [89.0, 1335.0], [89.1, 1335.0], [89.2, 1340.0], [89.3, 1342.0], [89.4, 1345.0], [89.5, 1345.0], [89.6, 1346.0], [89.7, 1347.0], [89.8, 1348.0], [89.9, 1348.0], [90.0, 1348.0], [90.1, 1348.0], [90.2, 1348.0], [90.3, 1349.0], [90.4, 1357.0], [90.5, 1369.0], [90.6, 1369.0], [90.7, 1369.0], [90.8, 1372.0], [90.9, 1373.0], [91.0, 1373.0], [91.1, 1374.0], [91.2, 1375.0], [91.3, 1381.0], [91.4, 1381.0], [91.5, 1381.0], [91.6, 1381.0], [91.7, 1381.0], [91.8, 1382.0], [91.9, 1383.0], [92.0, 1399.0], [92.1, 1399.0], [92.2, 1406.0], [92.3, 1406.0], [92.4, 1408.0], [92.5, 1408.0], [92.6, 1410.0], [92.7, 1416.0], [92.8, 1424.0], [92.9, 1424.0], [93.0, 1430.0], [93.1, 1437.0], [93.2, 1438.0], [93.3, 1438.0], [93.4, 1438.0], [93.5, 1450.0], [93.6, 1450.0], [93.7, 1463.0], [93.8, 1476.0], [93.9, 1476.0], [94.0, 1476.0], [94.1, 1487.0], [94.2, 1506.0], [94.3, 1511.0], [94.4, 1511.0], [94.5, 1513.0], [94.6, 1528.0], [94.7, 1529.0], [94.8, 1529.0], [94.9, 1533.0], [95.0, 1535.0], [95.1, 1535.0], [95.2, 1539.0], [95.3, 1546.0], [95.4, 1562.0], [95.5, 1562.0], [95.6, 1563.0], [95.7, 1568.0], [95.8, 1579.0], [95.9, 1579.0], [96.0, 1597.0], [96.1, 1602.0], [96.2, 1613.0], [96.3, 1613.0], [96.4, 1621.0], [96.5, 1636.0], [96.6, 1638.0], [96.7, 1638.0], [96.8, 1708.0], [96.9, 1783.0], [97.0, 1783.0], [97.1, 1783.0], [97.2, 1800.0], [97.3, 1814.0], [97.4, 1814.0], [97.5, 1829.0], [97.6, 2147.0], [97.7, 2481.0], [97.8, 2481.0], [97.9, 2517.0], [98.0, 2655.0], [98.1, 2686.0], [98.2, 2686.0], [98.3, 2758.0], [98.4, 2985.0], [98.5, 2985.0], [98.6, 3114.0], [98.7, 3134.0], [98.8, 3160.0], [98.9, 3160.0], [99.0, 3276.0], [99.1, 3282.0], [99.2, 3298.0], [99.3, 3298.0], [99.4, 3370.0], [99.5, 3376.0], [99.6, 3398.0], [99.7, 3398.0], [99.8, 3459.0], [99.9, 3554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 76.0], [700.0, 68.0], [800.0, 71.0], [900.0, 70.0], [1000.0, 58.0], [1100.0, 52.0], [1200.0, 44.0], [1300.0, 31.0], [1400.0, 15.0], [1500.0, 14.0], [100.0, 5.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 3.0], [2100.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3100.0, 3.0], [3300.0, 3.0], [200.0, 32.0], [3200.0, 3.0], [3400.0, 1.0], [3500.0, 1.0], [300.0, 32.0], [400.0, 61.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 561.0, "series": [{"data": [[0.0, 131.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 561.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.928457869634343, "minX": 1.60422786E12, "maxY": 10.0, "series": [{"data": [[1.60422786E12, 10.0], [1.60422792E12, 9.928457869634343]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 355.0, "minX": 1.0, "maxY": 2655.0, "series": [{"data": [[8.0, 2655.0], [4.0, 1214.0], [2.0, 526.0], [1.0, 963.0], [9.0, 355.0], [10.0, 885.0426997245181], [5.0, 589.0], [6.0, 1102.0], [3.0, 605.0], [7.0, 616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 885.9401360544219]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 802.9333333333333, "minX": 1.60422786E12, "maxY": 1438380.95, "series": [{"data": [[1.60422786E12, 397428.68333333335], [1.60422792E12, 1438380.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422786E12, 802.9333333333333], [1.60422792E12, 4720.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 848.2257551669319, "minX": 1.60422786E12, "maxY": 1109.7358490566044, "series": [{"data": [[1.60422786E12, 1109.7358490566044], [1.60422792E12, 848.2257551669319]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 847.001589825119, "minX": 1.60422786E12, "maxY": 1108.2075471698115, "series": [{"data": [[1.60422786E12, 1108.2075471698115], [1.60422792E12, 847.001589825119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019077901430842606, "minX": 1.60422786E12, "maxY": 1.1320754716981136, "series": [{"data": [[1.60422786E12, 1.1320754716981136], [1.60422792E12, 0.019077901430842606]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60422786E12, "maxY": 3554.0, "series": [{"data": [[1.60422786E12, 3554.0], [1.60422792E12, 3398.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422786E12, 187.0], [1.60422792E12, 220.35999879837036]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422786E12, 187.17790003061293], [1.60422792E12, 223.47400012016297]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422786E12, 187.04949996173383], [1.60422792E12, 222.87999939918518]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422786E12, 187.0], [1.60422792E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422786E12, 859.0], [1.60422792E12, 816.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 505.0, "minX": 5.0, "maxY": 1071.5, "series": [{"data": [[8.0, 1071.5], [9.0, 991.0], [10.0, 1005.5], [11.0, 881.0], [12.0, 842.0], [13.0, 774.0], [14.0, 638.0], [15.0, 571.0], [16.0, 599.0], [17.0, 711.0], [19.0, 505.0], [5.0, 605.0], [7.0, 985.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 505.0, "minX": 5.0, "maxY": 1071.0, "series": [{"data": [[8.0, 1071.0], [9.0, 991.0], [10.0, 1005.0], [11.0, 881.0], [12.0, 840.5], [13.0, 772.0], [14.0, 638.0], [15.0, 571.0], [16.0, 599.0], [17.0, 710.5], [19.0, 505.0], [5.0, 605.0], [7.0, 985.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60422786E12, "maxY": 10.316666666666666, "series": [{"data": [[1.60422786E12, 1.9333333333333333], [1.60422792E12, 10.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60422786E12, "maxY": 10.483333333333333, "series": [{"data": [[1.60422786E12, 1.7666666666666666], [1.60422792E12, 10.483333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60422786E12, "maxY": 10.483333333333333, "series": [{"data": [[1.60422786E12, 1.7666666666666666], [1.60422792E12, 10.483333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60422786E12, "maxY": 10.483333333333333, "series": [{"data": [[1.60422786E12, 1.7666666666666666], [1.60422792E12, 10.483333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422792E12, "title": "Total Transactions Per Second"}},
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

