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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 6112.0, "series": [{"data": [[0.0, 178.0], [0.1, 185.0], [0.2, 187.0], [0.3, 188.0], [0.4, 189.0], [0.5, 190.0], [0.6, 192.0], [0.7, 192.0], [0.8, 193.0], [0.9, 194.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 196.0], [1.5, 196.0], [1.6, 197.0], [1.7, 197.0], [1.8, 198.0], [1.9, 198.0], [2.0, 198.0], [2.1, 198.0], [2.2, 199.0], [2.3, 200.0], [2.4, 200.0], [2.5, 200.0], [2.6, 201.0], [2.7, 201.0], [2.8, 202.0], [2.9, 203.0], [3.0, 203.0], [3.1, 203.0], [3.2, 205.0], [3.3, 205.0], [3.4, 206.0], [3.5, 207.0], [3.6, 208.0], [3.7, 209.0], [3.8, 210.0], [3.9, 210.0], [4.0, 211.0], [4.1, 212.0], [4.2, 213.0], [4.3, 214.0], [4.4, 215.0], [4.5, 216.0], [4.6, 217.0], [4.7, 218.0], [4.8, 219.0], [4.9, 219.0], [5.0, 220.0], [5.1, 220.0], [5.2, 222.0], [5.3, 223.0], [5.4, 226.0], [5.5, 226.0], [5.6, 227.0], [5.7, 228.0], [5.8, 229.0], [5.9, 229.0], [6.0, 230.0], [6.1, 231.0], [6.2, 232.0], [6.3, 233.0], [6.4, 234.0], [6.5, 235.0], [6.6, 235.0], [6.7, 236.0], [6.8, 237.0], [6.9, 239.0], [7.0, 241.0], [7.1, 242.0], [7.2, 242.0], [7.3, 244.0], [7.4, 245.0], [7.5, 246.0], [7.6, 247.0], [7.7, 249.0], [7.8, 250.0], [7.9, 252.0], [8.0, 252.0], [8.1, 253.0], [8.2, 255.0], [8.3, 256.0], [8.4, 257.0], [8.5, 258.0], [8.6, 259.0], [8.7, 260.0], [8.8, 261.0], [8.9, 262.0], [9.0, 263.0], [9.1, 264.0], [9.2, 265.0], [9.3, 265.0], [9.4, 266.0], [9.5, 267.0], [9.6, 268.0], [9.7, 269.0], [9.8, 270.0], [9.9, 272.0], [10.0, 273.0], [10.1, 273.0], [10.2, 274.0], [10.3, 275.0], [10.4, 276.0], [10.5, 276.0], [10.6, 277.0], [10.7, 277.0], [10.8, 278.0], [10.9, 278.0], [11.0, 279.0], [11.1, 280.0], [11.2, 280.0], [11.3, 282.0], [11.4, 282.0], [11.5, 283.0], [11.6, 285.0], [11.7, 285.0], [11.8, 286.0], [11.9, 287.0], [12.0, 288.0], [12.1, 288.0], [12.2, 289.0], [12.3, 290.0], [12.4, 291.0], [12.5, 292.0], [12.6, 294.0], [12.7, 295.0], [12.8, 297.0], [12.9, 298.0], [13.0, 299.0], [13.1, 300.0], [13.2, 301.0], [13.3, 302.0], [13.4, 303.0], [13.5, 304.0], [13.6, 306.0], [13.7, 306.0], [13.8, 306.0], [13.9, 308.0], [14.0, 308.0], [14.1, 309.0], [14.2, 311.0], [14.3, 312.0], [14.4, 313.0], [14.5, 314.0], [14.6, 315.0], [14.7, 317.0], [14.8, 318.0], [14.9, 319.0], [15.0, 319.0], [15.1, 320.0], [15.2, 322.0], [15.3, 323.0], [15.4, 324.0], [15.5, 326.0], [15.6, 327.0], [15.7, 328.0], [15.8, 330.0], [15.9, 332.0], [16.0, 333.0], [16.1, 334.0], [16.2, 335.0], [16.3, 337.0], [16.4, 339.0], [16.5, 343.0], [16.6, 344.0], [16.7, 346.0], [16.8, 350.0], [16.9, 353.0], [17.0, 354.0], [17.1, 356.0], [17.2, 359.0], [17.3, 362.0], [17.4, 364.0], [17.5, 365.0], [17.6, 367.0], [17.7, 369.0], [17.8, 370.0], [17.9, 372.0], [18.0, 374.0], [18.1, 376.0], [18.2, 377.0], [18.3, 378.0], [18.4, 379.0], [18.5, 381.0], [18.6, 382.0], [18.7, 383.0], [18.8, 383.0], [18.9, 384.0], [19.0, 386.0], [19.1, 389.0], [19.2, 389.0], [19.3, 390.0], [19.4, 392.0], [19.5, 393.0], [19.6, 394.0], [19.7, 395.0], [19.8, 396.0], [19.9, 398.0], [20.0, 399.0], [20.1, 400.0], [20.2, 400.0], [20.3, 401.0], [20.4, 402.0], [20.5, 403.0], [20.6, 404.0], [20.7, 404.0], [20.8, 405.0], [20.9, 407.0], [21.0, 409.0], [21.1, 410.0], [21.2, 411.0], [21.3, 412.0], [21.4, 413.0], [21.5, 414.0], [21.6, 416.0], [21.7, 416.0], [21.8, 417.0], [21.9, 418.0], [22.0, 419.0], [22.1, 420.0], [22.2, 421.0], [22.3, 422.0], [22.4, 422.0], [22.5, 423.0], [22.6, 424.0], [22.7, 424.0], [22.8, 425.0], [22.9, 427.0], [23.0, 428.0], [23.1, 429.0], [23.2, 430.0], [23.3, 431.0], [23.4, 431.0], [23.5, 433.0], [23.6, 434.0], [23.7, 434.0], [23.8, 435.0], [23.9, 436.0], [24.0, 437.0], [24.1, 437.0], [24.2, 438.0], [24.3, 439.0], [24.4, 439.0], [24.5, 439.0], [24.6, 440.0], [24.7, 441.0], [24.8, 441.0], [24.9, 442.0], [25.0, 442.0], [25.1, 444.0], [25.2, 445.0], [25.3, 446.0], [25.4, 446.0], [25.5, 447.0], [25.6, 447.0], [25.7, 448.0], [25.8, 449.0], [25.9, 449.0], [26.0, 450.0], [26.1, 451.0], [26.2, 451.0], [26.3, 452.0], [26.4, 453.0], [26.5, 454.0], [26.6, 454.0], [26.7, 455.0], [26.8, 456.0], [26.9, 457.0], [27.0, 459.0], [27.1, 459.0], [27.2, 459.0], [27.3, 461.0], [27.4, 461.0], [27.5, 462.0], [27.6, 463.0], [27.7, 463.0], [27.8, 464.0], [27.9, 465.0], [28.0, 465.0], [28.1, 466.0], [28.2, 467.0], [28.3, 468.0], [28.4, 469.0], [28.5, 470.0], [28.6, 470.0], [28.7, 472.0], [28.8, 472.0], [28.9, 474.0], [29.0, 474.0], [29.1, 474.0], [29.2, 475.0], [29.3, 475.0], [29.4, 477.0], [29.5, 478.0], [29.6, 479.0], [29.7, 480.0], [29.8, 481.0], [29.9, 481.0], [30.0, 483.0], [30.1, 484.0], [30.2, 485.0], [30.3, 487.0], [30.4, 487.0], [30.5, 488.0], [30.6, 488.0], [30.7, 489.0], [30.8, 490.0], [30.9, 491.0], [31.0, 491.0], [31.1, 493.0], [31.2, 494.0], [31.3, 495.0], [31.4, 495.0], [31.5, 497.0], [31.6, 499.0], [31.7, 500.0], [31.8, 501.0], [31.9, 503.0], [32.0, 504.0], [32.1, 504.0], [32.2, 505.0], [32.3, 506.0], [32.4, 506.0], [32.5, 508.0], [32.6, 508.0], [32.7, 509.0], [32.8, 509.0], [32.9, 510.0], [33.0, 514.0], [33.1, 515.0], [33.2, 516.0], [33.3, 517.0], [33.4, 518.0], [33.5, 520.0], [33.6, 522.0], [33.7, 523.0], [33.8, 523.0], [33.9, 525.0], [34.0, 526.0], [34.1, 528.0], [34.2, 529.0], [34.3, 530.0], [34.4, 531.0], [34.5, 533.0], [34.6, 535.0], [34.7, 535.0], [34.8, 536.0], [34.9, 537.0], [35.0, 538.0], [35.1, 541.0], [35.2, 541.0], [35.3, 542.0], [35.4, 542.0], [35.5, 543.0], [35.6, 544.0], [35.7, 545.0], [35.8, 545.0], [35.9, 546.0], [36.0, 547.0], [36.1, 548.0], [36.2, 549.0], [36.3, 550.0], [36.4, 550.0], [36.5, 551.0], [36.6, 552.0], [36.7, 554.0], [36.8, 554.0], [36.9, 555.0], [37.0, 556.0], [37.1, 557.0], [37.2, 557.0], [37.3, 558.0], [37.4, 558.0], [37.5, 559.0], [37.6, 560.0], [37.7, 561.0], [37.8, 561.0], [37.9, 562.0], [38.0, 563.0], [38.1, 564.0], [38.2, 565.0], [38.3, 566.0], [38.4, 567.0], [38.5, 567.0], [38.6, 568.0], [38.7, 569.0], [38.8, 571.0], [38.9, 572.0], [39.0, 573.0], [39.1, 574.0], [39.2, 574.0], [39.3, 575.0], [39.4, 576.0], [39.5, 577.0], [39.6, 578.0], [39.7, 579.0], [39.8, 580.0], [39.9, 581.0], [40.0, 582.0], [40.1, 583.0], [40.2, 584.0], [40.3, 584.0], [40.4, 586.0], [40.5, 587.0], [40.6, 588.0], [40.7, 588.0], [40.8, 589.0], [40.9, 590.0], [41.0, 591.0], [41.1, 592.0], [41.2, 593.0], [41.3, 594.0], [41.4, 596.0], [41.5, 597.0], [41.6, 597.0], [41.7, 598.0], [41.8, 599.0], [41.9, 601.0], [42.0, 602.0], [42.1, 603.0], [42.2, 604.0], [42.3, 606.0], [42.4, 606.0], [42.5, 607.0], [42.6, 607.0], [42.7, 608.0], [42.8, 609.0], [42.9, 610.0], [43.0, 612.0], [43.1, 613.0], [43.2, 613.0], [43.3, 615.0], [43.4, 615.0], [43.5, 617.0], [43.6, 618.0], [43.7, 619.0], [43.8, 620.0], [43.9, 621.0], [44.0, 623.0], [44.1, 624.0], [44.2, 624.0], [44.3, 626.0], [44.4, 627.0], [44.5, 628.0], [44.6, 630.0], [44.7, 631.0], [44.8, 631.0], [44.9, 633.0], [45.0, 633.0], [45.1, 635.0], [45.2, 637.0], [45.3, 638.0], [45.4, 639.0], [45.5, 641.0], [45.6, 642.0], [45.7, 643.0], [45.8, 646.0], [45.9, 647.0], [46.0, 648.0], [46.1, 649.0], [46.2, 650.0], [46.3, 652.0], [46.4, 653.0], [46.5, 653.0], [46.6, 656.0], [46.7, 657.0], [46.8, 658.0], [46.9, 660.0], [47.0, 660.0], [47.1, 662.0], [47.2, 663.0], [47.3, 665.0], [47.4, 667.0], [47.5, 668.0], [47.6, 669.0], [47.7, 670.0], [47.8, 672.0], [47.9, 673.0], [48.0, 674.0], [48.1, 675.0], [48.2, 676.0], [48.3, 678.0], [48.4, 679.0], [48.5, 680.0], [48.6, 681.0], [48.7, 682.0], [48.8, 684.0], [48.9, 686.0], [49.0, 687.0], [49.1, 689.0], [49.2, 690.0], [49.3, 692.0], [49.4, 692.0], [49.5, 694.0], [49.6, 696.0], [49.7, 697.0], [49.8, 700.0], [49.9, 701.0], [50.0, 703.0], [50.1, 706.0], [50.2, 708.0], [50.3, 710.0], [50.4, 710.0], [50.5, 713.0], [50.6, 715.0], [50.7, 719.0], [50.8, 721.0], [50.9, 723.0], [51.0, 725.0], [51.1, 726.0], [51.2, 729.0], [51.3, 730.0], [51.4, 732.0], [51.5, 732.0], [51.6, 734.0], [51.7, 735.0], [51.8, 737.0], [51.9, 738.0], [52.0, 740.0], [52.1, 741.0], [52.2, 743.0], [52.3, 744.0], [52.4, 746.0], [52.5, 748.0], [52.6, 750.0], [52.7, 751.0], [52.8, 754.0], [52.9, 755.0], [53.0, 758.0], [53.1, 759.0], [53.2, 761.0], [53.3, 764.0], [53.4, 766.0], [53.5, 767.0], [53.6, 768.0], [53.7, 770.0], [53.8, 771.0], [53.9, 773.0], [54.0, 774.0], [54.1, 778.0], [54.2, 779.0], [54.3, 780.0], [54.4, 781.0], [54.5, 783.0], [54.6, 784.0], [54.7, 785.0], [54.8, 787.0], [54.9, 788.0], [55.0, 789.0], [55.1, 791.0], [55.2, 794.0], [55.3, 796.0], [55.4, 798.0], [55.5, 800.0], [55.6, 801.0], [55.7, 803.0], [55.8, 804.0], [55.9, 805.0], [56.0, 807.0], [56.1, 809.0], [56.2, 813.0], [56.3, 814.0], [56.4, 816.0], [56.5, 817.0], [56.6, 819.0], [56.7, 822.0], [56.8, 823.0], [56.9, 824.0], [57.0, 827.0], [57.1, 829.0], [57.2, 832.0], [57.3, 834.0], [57.4, 836.0], [57.5, 838.0], [57.6, 840.0], [57.7, 841.0], [57.8, 842.0], [57.9, 844.0], [58.0, 846.0], [58.1, 849.0], [58.2, 853.0], [58.3, 855.0], [58.4, 857.0], [58.5, 860.0], [58.6, 860.0], [58.7, 863.0], [58.8, 867.0], [58.9, 868.0], [59.0, 870.0], [59.1, 873.0], [59.2, 874.0], [59.3, 875.0], [59.4, 876.0], [59.5, 877.0], [59.6, 878.0], [59.7, 880.0], [59.8, 882.0], [59.9, 884.0], [60.0, 886.0], [60.1, 889.0], [60.2, 890.0], [60.3, 892.0], [60.4, 895.0], [60.5, 897.0], [60.6, 898.0], [60.7, 900.0], [60.8, 901.0], [60.9, 904.0], [61.0, 905.0], [61.1, 905.0], [61.2, 907.0], [61.3, 908.0], [61.4, 910.0], [61.5, 911.0], [61.6, 913.0], [61.7, 914.0], [61.8, 915.0], [61.9, 919.0], [62.0, 920.0], [62.1, 921.0], [62.2, 922.0], [62.3, 923.0], [62.4, 924.0], [62.5, 925.0], [62.6, 926.0], [62.7, 928.0], [62.8, 930.0], [62.9, 931.0], [63.0, 932.0], [63.1, 934.0], [63.2, 935.0], [63.3, 936.0], [63.4, 939.0], [63.5, 942.0], [63.6, 944.0], [63.7, 945.0], [63.8, 947.0], [63.9, 949.0], [64.0, 951.0], [64.1, 952.0], [64.2, 955.0], [64.3, 956.0], [64.4, 957.0], [64.5, 960.0], [64.6, 961.0], [64.7, 963.0], [64.8, 964.0], [64.9, 966.0], [65.0, 969.0], [65.1, 973.0], [65.2, 974.0], [65.3, 976.0], [65.4, 979.0], [65.5, 982.0], [65.6, 983.0], [65.7, 984.0], [65.8, 985.0], [65.9, 987.0], [66.0, 989.0], [66.1, 990.0], [66.2, 993.0], [66.3, 995.0], [66.4, 996.0], [66.5, 997.0], [66.6, 998.0], [66.7, 999.0], [66.8, 1000.0], [66.9, 1002.0], [67.0, 1005.0], [67.1, 1007.0], [67.2, 1010.0], [67.3, 1011.0], [67.4, 1013.0], [67.5, 1015.0], [67.6, 1017.0], [67.7, 1018.0], [67.8, 1019.0], [67.9, 1021.0], [68.0, 1023.0], [68.1, 1026.0], [68.2, 1028.0], [68.3, 1029.0], [68.4, 1031.0], [68.5, 1031.0], [68.6, 1033.0], [68.7, 1034.0], [68.8, 1036.0], [68.9, 1038.0], [69.0, 1040.0], [69.1, 1041.0], [69.2, 1043.0], [69.3, 1044.0], [69.4, 1047.0], [69.5, 1048.0], [69.6, 1050.0], [69.7, 1051.0], [69.8, 1053.0], [69.9, 1055.0], [70.0, 1055.0], [70.1, 1056.0], [70.2, 1058.0], [70.3, 1059.0], [70.4, 1061.0], [70.5, 1063.0], [70.6, 1065.0], [70.7, 1066.0], [70.8, 1067.0], [70.9, 1068.0], [71.0, 1070.0], [71.1, 1072.0], [71.2, 1074.0], [71.3, 1077.0], [71.4, 1078.0], [71.5, 1080.0], [71.6, 1081.0], [71.7, 1082.0], [71.8, 1085.0], [71.9, 1087.0], [72.0, 1091.0], [72.1, 1091.0], [72.2, 1093.0], [72.3, 1096.0], [72.4, 1101.0], [72.5, 1102.0], [72.6, 1103.0], [72.7, 1105.0], [72.8, 1107.0], [72.9, 1108.0], [73.0, 1111.0], [73.1, 1111.0], [73.2, 1113.0], [73.3, 1114.0], [73.4, 1116.0], [73.5, 1118.0], [73.6, 1119.0], [73.7, 1122.0], [73.8, 1124.0], [73.9, 1125.0], [74.0, 1126.0], [74.1, 1127.0], [74.2, 1131.0], [74.3, 1134.0], [74.4, 1136.0], [74.5, 1140.0], [74.6, 1141.0], [74.7, 1143.0], [74.8, 1143.0], [74.9, 1147.0], [75.0, 1149.0], [75.1, 1150.0], [75.2, 1155.0], [75.3, 1158.0], [75.4, 1160.0], [75.5, 1162.0], [75.6, 1166.0], [75.7, 1168.0], [75.8, 1170.0], [75.9, 1171.0], [76.0, 1173.0], [76.1, 1175.0], [76.2, 1176.0], [76.3, 1179.0], [76.4, 1182.0], [76.5, 1186.0], [76.6, 1188.0], [76.7, 1188.0], [76.8, 1190.0], [76.9, 1194.0], [77.0, 1198.0], [77.1, 1200.0], [77.2, 1203.0], [77.3, 1206.0], [77.4, 1208.0], [77.5, 1211.0], [77.6, 1214.0], [77.7, 1216.0], [77.8, 1218.0], [77.9, 1220.0], [78.0, 1223.0], [78.1, 1227.0], [78.2, 1228.0], [78.3, 1230.0], [78.4, 1231.0], [78.5, 1233.0], [78.6, 1234.0], [78.7, 1237.0], [78.8, 1239.0], [78.9, 1243.0], [79.0, 1244.0], [79.1, 1248.0], [79.2, 1251.0], [79.3, 1255.0], [79.4, 1256.0], [79.5, 1257.0], [79.6, 1259.0], [79.7, 1261.0], [79.8, 1263.0], [79.9, 1264.0], [80.0, 1266.0], [80.1, 1268.0], [80.2, 1273.0], [80.3, 1275.0], [80.4, 1277.0], [80.5, 1279.0], [80.6, 1280.0], [80.7, 1282.0], [80.8, 1286.0], [80.9, 1289.0], [81.0, 1291.0], [81.1, 1293.0], [81.2, 1298.0], [81.3, 1300.0], [81.4, 1301.0], [81.5, 1305.0], [81.6, 1306.0], [81.7, 1307.0], [81.8, 1311.0], [81.9, 1313.0], [82.0, 1315.0], [82.1, 1316.0], [82.2, 1320.0], [82.3, 1321.0], [82.4, 1323.0], [82.5, 1324.0], [82.6, 1325.0], [82.7, 1329.0], [82.8, 1331.0], [82.9, 1333.0], [83.0, 1336.0], [83.1, 1342.0], [83.2, 1345.0], [83.3, 1349.0], [83.4, 1351.0], [83.5, 1353.0], [83.6, 1355.0], [83.7, 1358.0], [83.8, 1360.0], [83.9, 1362.0], [84.0, 1365.0], [84.1, 1368.0], [84.2, 1370.0], [84.3, 1372.0], [84.4, 1375.0], [84.5, 1376.0], [84.6, 1378.0], [84.7, 1379.0], [84.8, 1381.0], [84.9, 1383.0], [85.0, 1385.0], [85.1, 1387.0], [85.2, 1389.0], [85.3, 1389.0], [85.4, 1392.0], [85.5, 1394.0], [85.6, 1397.0], [85.7, 1400.0], [85.8, 1403.0], [85.9, 1407.0], [86.0, 1409.0], [86.1, 1412.0], [86.2, 1415.0], [86.3, 1420.0], [86.4, 1422.0], [86.5, 1424.0], [86.6, 1426.0], [86.7, 1429.0], [86.8, 1430.0], [86.9, 1432.0], [87.0, 1436.0], [87.1, 1437.0], [87.2, 1441.0], [87.3, 1444.0], [87.4, 1447.0], [87.5, 1454.0], [87.6, 1456.0], [87.7, 1461.0], [87.8, 1464.0], [87.9, 1468.0], [88.0, 1471.0], [88.1, 1474.0], [88.2, 1478.0], [88.3, 1479.0], [88.4, 1481.0], [88.5, 1482.0], [88.6, 1487.0], [88.7, 1493.0], [88.8, 1494.0], [88.9, 1497.0], [89.0, 1500.0], [89.1, 1505.0], [89.2, 1508.0], [89.3, 1510.0], [89.4, 1513.0], [89.5, 1523.0], [89.6, 1531.0], [89.7, 1535.0], [89.8, 1538.0], [89.9, 1540.0], [90.0, 1546.0], [90.1, 1556.0], [90.2, 1562.0], [90.3, 1563.0], [90.4, 1565.0], [90.5, 1571.0], [90.6, 1580.0], [90.7, 1585.0], [90.8, 1589.0], [90.9, 1590.0], [91.0, 1593.0], [91.1, 1601.0], [91.2, 1605.0], [91.3, 1611.0], [91.4, 1614.0], [91.5, 1622.0], [91.6, 1626.0], [91.7, 1634.0], [91.8, 1645.0], [91.9, 1647.0], [92.0, 1655.0], [92.1, 1658.0], [92.2, 1664.0], [92.3, 1669.0], [92.4, 1676.0], [92.5, 1690.0], [92.6, 1694.0], [92.7, 1702.0], [92.8, 1706.0], [92.9, 1712.0], [93.0, 1716.0], [93.1, 1721.0], [93.2, 1731.0], [93.3, 1734.0], [93.4, 1744.0], [93.5, 1753.0], [93.6, 1762.0], [93.7, 1772.0], [93.8, 1785.0], [93.9, 1786.0], [94.0, 1796.0], [94.1, 1802.0], [94.2, 1804.0], [94.3, 1816.0], [94.4, 1825.0], [94.5, 1836.0], [94.6, 1842.0], [94.7, 1848.0], [94.8, 1864.0], [94.9, 1868.0], [95.0, 1874.0], [95.1, 1878.0], [95.2, 1889.0], [95.3, 1900.0], [95.4, 1921.0], [95.5, 1927.0], [95.6, 1944.0], [95.7, 1965.0], [95.8, 1982.0], [95.9, 2003.0], [96.0, 2015.0], [96.1, 2024.0], [96.2, 2033.0], [96.3, 2044.0], [96.4, 2055.0], [96.5, 2062.0], [96.6, 2079.0], [96.7, 2116.0], [96.8, 2130.0], [96.9, 2148.0], [97.0, 2161.0], [97.1, 2176.0], [97.2, 2197.0], [97.3, 2210.0], [97.4, 2231.0], [97.5, 2246.0], [97.6, 2259.0], [97.7, 2272.0], [97.8, 2293.0], [97.9, 2314.0], [98.0, 2363.0], [98.1, 2398.0], [98.2, 2424.0], [98.3, 2459.0], [98.4, 2503.0], [98.5, 2544.0], [98.6, 2581.0], [98.7, 2637.0], [98.8, 2672.0], [98.9, 2752.0], [99.0, 2841.0], [99.1, 2986.0], [99.2, 3115.0], [99.3, 3247.0], [99.4, 3392.0], [99.5, 3557.0], [99.6, 3937.0], [99.7, 4421.0], [99.8, 4703.0], [99.9, 5331.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 602.0, "series": [{"data": [[600.0, 414.0], [700.0, 297.0], [800.0, 269.0], [900.0, 313.0], [1000.0, 293.0], [1100.0, 246.0], [1200.0, 218.0], [1300.0, 227.0], [1400.0, 171.0], [1500.0, 110.0], [1600.0, 81.0], [1700.0, 73.0], [1800.0, 63.0], [1900.0, 32.0], [2000.0, 41.0], [2100.0, 29.0], [2200.0, 32.0], [2300.0, 14.0], [2400.0, 13.0], [2500.0, 13.0], [2600.0, 12.0], [2700.0, 6.0], [2800.0, 6.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 4.0], [3400.0, 3.0], [3500.0, 3.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 4.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 4.0], [4500.0, 1.0], [4700.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5300.0, 3.0], [5500.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [100.0, 119.0], [200.0, 561.0], [300.0, 362.0], [400.0, 602.0], [500.0, 526.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2971.0, "series": [{"data": [[0.0, 1648.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2971.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 571.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.224137931034482, "minX": 1.60218948E12, "maxY": 10.0, "series": [{"data": [[1.60218984E12, 10.0], [1.60218954E12, 10.0], [1.60218972E12, 10.0], [1.6021899E12, 10.0], [1.6021896E12, 10.0], [1.60218978E12, 10.0], [1.60218996E12, 9.224137931034482], [1.60218948E12, 10.0], [1.60218966E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 311.0, "minX": 1.0, "maxY": 2666.0, "series": [{"data": [[8.0, 435.0], [4.0, 1358.0], [2.0, 2647.0], [1.0, 2666.0], [9.0, 311.0], [10.0, 858.8373214974906], [5.0, 863.0], [6.0, 861.0], [3.0, 1154.0], [7.0, 957.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 859.5158928915424]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 444.76666666666665, "minX": 1.60218948E12, "maxY": 3773723.5, "series": [{"data": [[1.60218984E12, 3713524.8666666667], [1.60218954E12, 2651901.4833333334], [1.60218972E12, 3116891.5166666666], [1.6021899E12, 3023904.65], [1.6021896E12, 3773723.5], [1.60218978E12, 2685675.183333333], [1.60218996E12, 249151.91666666666], [1.60218948E12, 1200929.9833333334], [1.60218966E12, 3557224.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218984E12, 5508.466666666666], [1.60218954E12, 5558.4], [1.60218972E12, 4431.1], [1.6021899E12, 5202.466666666666], [1.6021896E12, 5359.983333333334], [1.60218978E12, 5271.616666666667], [1.60218996E12, 444.76666666666665], [1.60218948E12, 1205.0], [1.60218966E12, 5602.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 797.698826597132, "minX": 1.60218948E12, "maxY": 1180.9815950920251, "series": [{"data": [[1.60218984E12, 830.7933884297522], [1.60218954E12, 797.698826597132], [1.60218972E12, 976.8618421052635], [1.6021899E12, 867.9418604651161], [1.6021896E12, 829.5432960893863], [1.60218978E12, 830.7809917355376], [1.60218996E12, 1081.4137931034484], [1.60218948E12, 1180.9815950920251], [1.60218966E12, 816.4519621109608]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 796.3428943937412, "minX": 1.60218948E12, "maxY": 1177.6871165644172, "series": [{"data": [[1.60218984E12, 828.935261707989], [1.60218954E12, 796.3428943937412], [1.60218972E12, 974.7993421052633], [1.6021899E12, 866.2630813953488], [1.6021896E12, 827.350558659218], [1.60218978E12, 829.3595041322307], [1.60218996E12, 1079.9655172413793], [1.60218948E12, 1177.6871165644172], [1.60218966E12, 814.4654939106903]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60218948E12, "maxY": 0.5766871165644168, "series": [{"data": [[1.60218984E12, 0.00964187327823692], [1.60218954E12, 0.013037809647979142], [1.60218972E12, 0.013157894736842106], [1.6021899E12, 0.017441860465116265], [1.6021896E12, 0.01396648044692738], [1.60218978E12, 0.01239669421487604], [1.60218996E12, 0.0], [1.60218948E12, 0.5766871165644168], [1.60218966E12, 0.012178619756427604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60218948E12, "maxY": 6112.0, "series": [{"data": [[1.60218984E12, 3457.0], [1.60218954E12, 5364.0], [1.60218972E12, 5523.0], [1.6021899E12, 3539.0], [1.6021896E12, 4703.0], [1.60218978E12, 6112.0], [1.60218996E12, 2666.0], [1.60218948E12, 5229.0], [1.60218966E12, 4421.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218984E12, 193.0], [1.60218954E12, 192.0], [1.60218972E12, 200.0], [1.6021899E12, 195.2009998357296], [1.6021896E12, 190.90599965810776], [1.60218978E12, 193.5429998266697], [1.60218996E12, 311.0], [1.60218948E12, 233.37999980449678], [1.60218966E12, 190.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218984E12, 193.19730006933213], [1.60218954E12, 192.6032000732422], [1.60218972E12, 200.02910005807877], [1.6021899E12, 195.82110006570815], [1.6021896E12, 192.09830006837845], [1.60218978E12, 194.19730006933213], [1.60218996E12, 311.0], [1.60218948E12, 234.1180000782013], [1.60218966E12, 190.63220014095307]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218984E12, 193.0], [1.60218954E12, 192.29599990844727], [1.60218972E12, 200.0], [1.6021899E12, 195.5454999178648], [1.6021896E12, 191.62299982905387], [1.60218978E12, 193.90649991333484], [1.60218996E12, 311.0], [1.60218948E12, 233.78999990224838], [1.60218966E12, 190.04099982380868]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218984E12, 184.0], [1.60218954E12, 184.0], [1.60218972E12, 194.0], [1.6021899E12, 188.0], [1.6021896E12, 186.0], [1.60218978E12, 178.0], [1.60218996E12, 311.0], [1.60218948E12, 231.0], [1.60218966E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218984E12, 640.5], [1.60218954E12, 639.0], [1.60218972E12, 866.0], [1.6021899E12, 740.0], [1.6021896E12, 647.5], [1.60218978E12, 678.0], [1.60218996E12, 945.0], [1.60218948E12, 993.0], [1.60218966E12, 677.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 2.0, "maxY": 2656.5, "series": [{"data": [[2.0, 2656.5], [3.0, 1073.0], [4.0, 1728.0], [5.0, 1320.0], [6.0, 1233.0], [7.0, 1068.0], [8.0, 1064.0], [9.0, 1004.0], [10.0, 881.0], [11.0, 835.5], [12.0, 804.5], [13.0, 746.0], [14.0, 669.5], [15.0, 590.5], [16.0, 483.0], [17.0, 550.0], [18.0, 463.0], [19.0, 462.0], [20.0, 472.0], [21.0, 416.0], [22.0, 429.5], [23.0, 404.0], [24.0, 458.5], [25.0, 437.0], [26.0, 440.0], [27.0, 449.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 198.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 2.0, "maxY": 2649.5, "series": [{"data": [[2.0, 2649.5], [3.0, 1064.5], [4.0, 1724.0], [5.0, 1318.5], [6.0, 1230.5], [7.0, 1066.0], [8.0, 1060.0], [9.0, 1001.0], [10.0, 880.5], [11.0, 834.0], [12.0, 804.0], [13.0, 746.0], [14.0, 669.5], [15.0, 590.0], [16.0, 482.0], [17.0, 550.0], [18.0, 463.0], [19.0, 462.0], [20.0, 472.0], [21.0, 416.0], [22.0, 429.0], [23.0, 404.0], [24.0, 458.0], [25.0, 437.0], [26.0, 440.0], [27.0, 449.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 198.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.60218948E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60218984E12, 12.1], [1.60218954E12, 12.783333333333333], [1.60218972E12, 10.133333333333333], [1.6021899E12, 11.466666666666667], [1.6021896E12, 11.933333333333334], [1.60218978E12, 12.1], [1.60218996E12, 0.8], [1.60218948E12, 2.8833333333333333], [1.60218966E12, 12.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218948E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60218984E12, 12.1], [1.60218954E12, 12.783333333333333], [1.60218972E12, 10.133333333333333], [1.6021899E12, 11.466666666666667], [1.6021896E12, 11.933333333333334], [1.60218978E12, 12.1], [1.60218996E12, 0.9666666666666667], [1.60218948E12, 2.716666666666667], [1.60218966E12, 12.3]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60218966E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218948E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60218984E12, 12.1], [1.60218954E12, 12.783333333333333], [1.60218972E12, 10.133333333333333], [1.6021899E12, 11.466666666666667], [1.6021896E12, 11.933333333333334], [1.60218978E12, 12.1], [1.60218996E12, 0.9666666666666667], [1.60218948E12, 2.716666666666667], [1.60218966E12, 12.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60218966E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218948E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60218984E12, 12.1], [1.60218954E12, 12.783333333333333], [1.60218972E12, 10.133333333333333], [1.6021899E12, 11.466666666666667], [1.6021896E12, 11.933333333333334], [1.60218978E12, 12.1], [1.60218996E12, 0.9666666666666667], [1.60218948E12, 2.716666666666667], [1.60218966E12, 12.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60218966E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218996E12, "title": "Total Transactions Per Second"}},
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

