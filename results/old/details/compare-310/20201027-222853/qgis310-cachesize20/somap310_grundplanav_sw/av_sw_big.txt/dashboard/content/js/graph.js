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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 6015.0, "series": [{"data": [[0.0, 184.0], [0.1, 190.0], [0.2, 194.0], [0.3, 196.0], [0.4, 197.0], [0.5, 198.0], [0.6, 201.0], [0.7, 203.0], [0.8, 204.0], [0.9, 204.0], [1.0, 205.0], [1.1, 207.0], [1.2, 207.0], [1.3, 208.0], [1.4, 209.0], [1.5, 210.0], [1.6, 210.0], [1.7, 211.0], [1.8, 212.0], [1.9, 213.0], [2.0, 214.0], [2.1, 215.0], [2.2, 217.0], [2.3, 218.0], [2.4, 220.0], [2.5, 221.0], [2.6, 222.0], [2.7, 223.0], [2.8, 224.0], [2.9, 224.0], [3.0, 225.0], [3.1, 226.0], [3.2, 227.0], [3.3, 227.0], [3.4, 228.0], [3.5, 229.0], [3.6, 229.0], [3.7, 230.0], [3.8, 231.0], [3.9, 231.0], [4.0, 232.0], [4.1, 232.0], [4.2, 233.0], [4.3, 234.0], [4.4, 235.0], [4.5, 236.0], [4.6, 238.0], [4.7, 240.0], [4.8, 241.0], [4.9, 243.0], [5.0, 244.0], [5.1, 244.0], [5.2, 245.0], [5.3, 245.0], [5.4, 246.0], [5.5, 247.0], [5.6, 247.0], [5.7, 248.0], [5.8, 249.0], [5.9, 249.0], [6.0, 250.0], [6.1, 253.0], [6.2, 254.0], [6.3, 257.0], [6.4, 258.0], [6.5, 259.0], [6.6, 261.0], [6.7, 262.0], [6.8, 262.0], [6.9, 263.0], [7.0, 265.0], [7.1, 267.0], [7.2, 267.0], [7.3, 268.0], [7.4, 270.0], [7.5, 271.0], [7.6, 272.0], [7.7, 272.0], [7.8, 273.0], [7.9, 275.0], [8.0, 275.0], [8.1, 277.0], [8.2, 278.0], [8.3, 279.0], [8.4, 281.0], [8.5, 283.0], [8.6, 284.0], [8.7, 285.0], [8.8, 286.0], [8.9, 287.0], [9.0, 288.0], [9.1, 289.0], [9.2, 290.0], [9.3, 291.0], [9.4, 291.0], [9.5, 292.0], [9.6, 292.0], [9.7, 293.0], [9.8, 293.0], [9.9, 294.0], [10.0, 295.0], [10.1, 296.0], [10.2, 297.0], [10.3, 297.0], [10.4, 298.0], [10.5, 299.0], [10.6, 300.0], [10.7, 301.0], [10.8, 303.0], [10.9, 304.0], [11.0, 305.0], [11.1, 306.0], [11.2, 307.0], [11.3, 308.0], [11.4, 309.0], [11.5, 310.0], [11.6, 311.0], [11.7, 312.0], [11.8, 312.0], [11.9, 313.0], [12.0, 313.0], [12.1, 314.0], [12.2, 315.0], [12.3, 315.0], [12.4, 316.0], [12.5, 317.0], [12.6, 318.0], [12.7, 320.0], [12.8, 322.0], [12.9, 323.0], [13.0, 325.0], [13.1, 326.0], [13.2, 328.0], [13.3, 330.0], [13.4, 330.0], [13.5, 331.0], [13.6, 333.0], [13.7, 334.0], [13.8, 334.0], [13.9, 336.0], [14.0, 338.0], [14.1, 338.0], [14.2, 340.0], [14.3, 342.0], [14.4, 342.0], [14.5, 345.0], [14.6, 345.0], [14.7, 346.0], [14.8, 348.0], [14.9, 350.0], [15.0, 352.0], [15.1, 353.0], [15.2, 355.0], [15.3, 357.0], [15.4, 357.0], [15.5, 359.0], [15.6, 361.0], [15.7, 364.0], [15.8, 367.0], [15.9, 369.0], [16.0, 370.0], [16.1, 372.0], [16.2, 373.0], [16.3, 377.0], [16.4, 377.0], [16.5, 379.0], [16.6, 381.0], [16.7, 382.0], [16.8, 385.0], [16.9, 386.0], [17.0, 388.0], [17.1, 391.0], [17.2, 393.0], [17.3, 394.0], [17.4, 394.0], [17.5, 395.0], [17.6, 397.0], [17.7, 399.0], [17.8, 400.0], [17.9, 401.0], [18.0, 402.0], [18.1, 403.0], [18.2, 404.0], [18.3, 405.0], [18.4, 406.0], [18.5, 408.0], [18.6, 409.0], [18.7, 409.0], [18.8, 410.0], [18.9, 412.0], [19.0, 413.0], [19.1, 414.0], [19.2, 415.0], [19.3, 416.0], [19.4, 417.0], [19.5, 418.0], [19.6, 418.0], [19.7, 419.0], [19.8, 420.0], [19.9, 421.0], [20.0, 422.0], [20.1, 424.0], [20.2, 426.0], [20.3, 426.0], [20.4, 427.0], [20.5, 428.0], [20.6, 429.0], [20.7, 430.0], [20.8, 431.0], [20.9, 431.0], [21.0, 432.0], [21.1, 433.0], [21.2, 434.0], [21.3, 435.0], [21.4, 435.0], [21.5, 436.0], [21.6, 437.0], [21.7, 438.0], [21.8, 439.0], [21.9, 440.0], [22.0, 440.0], [22.1, 441.0], [22.2, 442.0], [22.3, 442.0], [22.4, 443.0], [22.5, 444.0], [22.6, 445.0], [22.7, 447.0], [22.8, 448.0], [22.9, 449.0], [23.0, 451.0], [23.1, 451.0], [23.2, 453.0], [23.3, 453.0], [23.4, 453.0], [23.5, 454.0], [23.6, 455.0], [23.7, 456.0], [23.8, 457.0], [23.9, 458.0], [24.0, 459.0], [24.1, 460.0], [24.2, 462.0], [24.3, 463.0], [24.4, 463.0], [24.5, 464.0], [24.6, 464.0], [24.7, 465.0], [24.8, 466.0], [24.9, 466.0], [25.0, 467.0], [25.1, 467.0], [25.2, 468.0], [25.3, 469.0], [25.4, 470.0], [25.5, 471.0], [25.6, 472.0], [25.7, 472.0], [25.8, 473.0], [25.9, 474.0], [26.0, 475.0], [26.1, 476.0], [26.2, 477.0], [26.3, 478.0], [26.4, 479.0], [26.5, 479.0], [26.6, 481.0], [26.7, 482.0], [26.8, 482.0], [26.9, 484.0], [27.0, 484.0], [27.1, 485.0], [27.2, 486.0], [27.3, 487.0], [27.4, 488.0], [27.5, 489.0], [27.6, 490.0], [27.7, 490.0], [27.8, 491.0], [27.9, 492.0], [28.0, 493.0], [28.1, 493.0], [28.2, 494.0], [28.3, 495.0], [28.4, 496.0], [28.5, 499.0], [28.6, 499.0], [28.7, 500.0], [28.8, 502.0], [28.9, 503.0], [29.0, 503.0], [29.1, 504.0], [29.2, 505.0], [29.3, 506.0], [29.4, 506.0], [29.5, 508.0], [29.6, 509.0], [29.7, 510.0], [29.8, 511.0], [29.9, 511.0], [30.0, 512.0], [30.1, 513.0], [30.2, 514.0], [30.3, 514.0], [30.4, 515.0], [30.5, 516.0], [30.6, 517.0], [30.7, 518.0], [30.8, 519.0], [30.9, 520.0], [31.0, 521.0], [31.1, 522.0], [31.2, 523.0], [31.3, 523.0], [31.4, 524.0], [31.5, 525.0], [31.6, 527.0], [31.7, 529.0], [31.8, 529.0], [31.9, 531.0], [32.0, 532.0], [32.1, 534.0], [32.2, 536.0], [32.3, 537.0], [32.4, 538.0], [32.5, 539.0], [32.6, 540.0], [32.7, 541.0], [32.8, 542.0], [32.9, 543.0], [33.0, 544.0], [33.1, 546.0], [33.2, 547.0], [33.3, 549.0], [33.4, 550.0], [33.5, 550.0], [33.6, 551.0], [33.7, 552.0], [33.8, 553.0], [33.9, 553.0], [34.0, 555.0], [34.1, 556.0], [34.2, 557.0], [34.3, 558.0], [34.4, 559.0], [34.5, 559.0], [34.6, 560.0], [34.7, 561.0], [34.8, 562.0], [34.9, 562.0], [35.0, 563.0], [35.1, 563.0], [35.2, 564.0], [35.3, 566.0], [35.4, 567.0], [35.5, 568.0], [35.6, 569.0], [35.7, 570.0], [35.8, 571.0], [35.9, 572.0], [36.0, 573.0], [36.1, 573.0], [36.2, 574.0], [36.3, 575.0], [36.4, 576.0], [36.5, 577.0], [36.6, 578.0], [36.7, 580.0], [36.8, 580.0], [36.9, 582.0], [37.0, 583.0], [37.1, 584.0], [37.2, 584.0], [37.3, 586.0], [37.4, 586.0], [37.5, 588.0], [37.6, 589.0], [37.7, 590.0], [37.8, 591.0], [37.9, 592.0], [38.0, 593.0], [38.1, 593.0], [38.2, 595.0], [38.3, 596.0], [38.4, 597.0], [38.5, 598.0], [38.6, 600.0], [38.7, 602.0], [38.8, 603.0], [38.9, 604.0], [39.0, 606.0], [39.1, 606.0], [39.2, 607.0], [39.3, 607.0], [39.4, 608.0], [39.5, 610.0], [39.6, 611.0], [39.7, 613.0], [39.8, 613.0], [39.9, 615.0], [40.0, 616.0], [40.1, 617.0], [40.2, 618.0], [40.3, 618.0], [40.4, 619.0], [40.5, 620.0], [40.6, 621.0], [40.7, 623.0], [40.8, 624.0], [40.9, 626.0], [41.0, 627.0], [41.1, 629.0], [41.2, 629.0], [41.3, 631.0], [41.4, 631.0], [41.5, 632.0], [41.6, 633.0], [41.7, 635.0], [41.8, 636.0], [41.9, 637.0], [42.0, 637.0], [42.1, 639.0], [42.2, 640.0], [42.3, 640.0], [42.4, 641.0], [42.5, 643.0], [42.6, 644.0], [42.7, 644.0], [42.8, 646.0], [42.9, 647.0], [43.0, 648.0], [43.1, 650.0], [43.2, 651.0], [43.3, 652.0], [43.4, 654.0], [43.5, 655.0], [43.6, 657.0], [43.7, 658.0], [43.8, 659.0], [43.9, 660.0], [44.0, 661.0], [44.1, 661.0], [44.2, 662.0], [44.3, 664.0], [44.4, 665.0], [44.5, 666.0], [44.6, 669.0], [44.7, 670.0], [44.8, 671.0], [44.9, 673.0], [45.0, 673.0], [45.1, 674.0], [45.2, 675.0], [45.3, 676.0], [45.4, 677.0], [45.5, 677.0], [45.6, 679.0], [45.7, 679.0], [45.8, 682.0], [45.9, 683.0], [46.0, 685.0], [46.1, 686.0], [46.2, 687.0], [46.3, 689.0], [46.4, 690.0], [46.5, 692.0], [46.6, 694.0], [46.7, 695.0], [46.8, 697.0], [46.9, 698.0], [47.0, 700.0], [47.1, 701.0], [47.2, 702.0], [47.3, 704.0], [47.4, 705.0], [47.5, 707.0], [47.6, 707.0], [47.7, 708.0], [47.8, 710.0], [47.9, 712.0], [48.0, 713.0], [48.1, 715.0], [48.2, 717.0], [48.3, 718.0], [48.4, 720.0], [48.5, 722.0], [48.6, 723.0], [48.7, 724.0], [48.8, 725.0], [48.9, 726.0], [49.0, 727.0], [49.1, 729.0], [49.2, 730.0], [49.3, 731.0], [49.4, 732.0], [49.5, 732.0], [49.6, 734.0], [49.7, 735.0], [49.8, 736.0], [49.9, 738.0], [50.0, 739.0], [50.1, 743.0], [50.2, 744.0], [50.3, 745.0], [50.4, 748.0], [50.5, 748.0], [50.6, 751.0], [50.7, 753.0], [50.8, 755.0], [50.9, 758.0], [51.0, 760.0], [51.1, 765.0], [51.2, 767.0], [51.3, 767.0], [51.4, 770.0], [51.5, 772.0], [51.6, 772.0], [51.7, 774.0], [51.8, 776.0], [51.9, 778.0], [52.0, 779.0], [52.1, 780.0], [52.2, 781.0], [52.3, 782.0], [52.4, 784.0], [52.5, 785.0], [52.6, 786.0], [52.7, 790.0], [52.8, 792.0], [52.9, 793.0], [53.0, 793.0], [53.1, 794.0], [53.2, 796.0], [53.3, 797.0], [53.4, 798.0], [53.5, 801.0], [53.6, 801.0], [53.7, 805.0], [53.8, 807.0], [53.9, 808.0], [54.0, 809.0], [54.1, 812.0], [54.2, 813.0], [54.3, 815.0], [54.4, 817.0], [54.5, 819.0], [54.6, 820.0], [54.7, 822.0], [54.8, 823.0], [54.9, 826.0], [55.0, 827.0], [55.1, 830.0], [55.2, 831.0], [55.3, 835.0], [55.4, 836.0], [55.5, 838.0], [55.6, 839.0], [55.7, 841.0], [55.8, 842.0], [55.9, 842.0], [56.0, 845.0], [56.1, 846.0], [56.2, 847.0], [56.3, 851.0], [56.4, 853.0], [56.5, 856.0], [56.6, 857.0], [56.7, 859.0], [56.8, 861.0], [56.9, 862.0], [57.0, 863.0], [57.1, 865.0], [57.2, 867.0], [57.3, 869.0], [57.4, 871.0], [57.5, 872.0], [57.6, 874.0], [57.7, 875.0], [57.8, 877.0], [57.9, 878.0], [58.0, 883.0], [58.1, 884.0], [58.2, 884.0], [58.3, 886.0], [58.4, 889.0], [58.5, 890.0], [58.6, 892.0], [58.7, 894.0], [58.8, 897.0], [58.9, 899.0], [59.0, 901.0], [59.1, 902.0], [59.2, 903.0], [59.3, 904.0], [59.4, 908.0], [59.5, 909.0], [59.6, 912.0], [59.7, 914.0], [59.8, 916.0], [59.9, 917.0], [60.0, 920.0], [60.1, 922.0], [60.2, 923.0], [60.3, 923.0], [60.4, 925.0], [60.5, 926.0], [60.6, 928.0], [60.7, 930.0], [60.8, 932.0], [60.9, 934.0], [61.0, 936.0], [61.1, 938.0], [61.2, 939.0], [61.3, 942.0], [61.4, 945.0], [61.5, 947.0], [61.6, 948.0], [61.7, 949.0], [61.8, 950.0], [61.9, 951.0], [62.0, 953.0], [62.1, 955.0], [62.2, 957.0], [62.3, 958.0], [62.4, 961.0], [62.5, 963.0], [62.6, 965.0], [62.7, 967.0], [62.8, 968.0], [62.9, 969.0], [63.0, 970.0], [63.1, 971.0], [63.2, 971.0], [63.3, 973.0], [63.4, 974.0], [63.5, 975.0], [63.6, 978.0], [63.7, 979.0], [63.8, 981.0], [63.9, 982.0], [64.0, 984.0], [64.1, 987.0], [64.2, 988.0], [64.3, 991.0], [64.4, 992.0], [64.5, 994.0], [64.6, 996.0], [64.7, 997.0], [64.8, 1000.0], [64.9, 1003.0], [65.0, 1004.0], [65.1, 1006.0], [65.2, 1007.0], [65.3, 1008.0], [65.4, 1009.0], [65.5, 1010.0], [65.6, 1011.0], [65.7, 1012.0], [65.8, 1014.0], [65.9, 1015.0], [66.0, 1017.0], [66.1, 1018.0], [66.2, 1020.0], [66.3, 1020.0], [66.4, 1022.0], [66.5, 1024.0], [66.6, 1025.0], [66.7, 1026.0], [66.8, 1029.0], [66.9, 1032.0], [67.0, 1033.0], [67.1, 1034.0], [67.2, 1037.0], [67.3, 1038.0], [67.4, 1040.0], [67.5, 1041.0], [67.6, 1043.0], [67.7, 1044.0], [67.8, 1045.0], [67.9, 1048.0], [68.0, 1049.0], [68.1, 1051.0], [68.2, 1052.0], [68.3, 1054.0], [68.4, 1055.0], [68.5, 1056.0], [68.6, 1057.0], [68.7, 1059.0], [68.8, 1061.0], [68.9, 1063.0], [69.0, 1065.0], [69.1, 1068.0], [69.2, 1069.0], [69.3, 1070.0], [69.4, 1072.0], [69.5, 1073.0], [69.6, 1075.0], [69.7, 1076.0], [69.8, 1078.0], [69.9, 1079.0], [70.0, 1080.0], [70.1, 1081.0], [70.2, 1082.0], [70.3, 1083.0], [70.4, 1085.0], [70.5, 1086.0], [70.6, 1088.0], [70.7, 1090.0], [70.8, 1093.0], [70.9, 1094.0], [71.0, 1096.0], [71.1, 1097.0], [71.2, 1099.0], [71.3, 1100.0], [71.4, 1102.0], [71.5, 1105.0], [71.6, 1107.0], [71.7, 1109.0], [71.8, 1110.0], [71.9, 1111.0], [72.0, 1112.0], [72.1, 1114.0], [72.2, 1116.0], [72.3, 1118.0], [72.4, 1119.0], [72.5, 1122.0], [72.6, 1126.0], [72.7, 1127.0], [72.8, 1128.0], [72.9, 1130.0], [73.0, 1133.0], [73.1, 1135.0], [73.2, 1139.0], [73.3, 1140.0], [73.4, 1141.0], [73.5, 1144.0], [73.6, 1145.0], [73.7, 1147.0], [73.8, 1148.0], [73.9, 1150.0], [74.0, 1154.0], [74.1, 1157.0], [74.2, 1158.0], [74.3, 1162.0], [74.4, 1165.0], [74.5, 1166.0], [74.6, 1168.0], [74.7, 1171.0], [74.8, 1174.0], [74.9, 1177.0], [75.0, 1180.0], [75.1, 1182.0], [75.2, 1185.0], [75.3, 1188.0], [75.4, 1191.0], [75.5, 1195.0], [75.6, 1197.0], [75.7, 1199.0], [75.8, 1202.0], [75.9, 1203.0], [76.0, 1206.0], [76.1, 1208.0], [76.2, 1212.0], [76.3, 1213.0], [76.4, 1215.0], [76.5, 1219.0], [76.6, 1222.0], [76.7, 1222.0], [76.8, 1226.0], [76.9, 1229.0], [77.0, 1231.0], [77.1, 1234.0], [77.2, 1235.0], [77.3, 1237.0], [77.4, 1240.0], [77.5, 1242.0], [77.6, 1246.0], [77.7, 1248.0], [77.8, 1251.0], [77.9, 1256.0], [78.0, 1259.0], [78.1, 1260.0], [78.2, 1261.0], [78.3, 1266.0], [78.4, 1272.0], [78.5, 1273.0], [78.6, 1276.0], [78.7, 1277.0], [78.8, 1278.0], [78.9, 1279.0], [79.0, 1282.0], [79.1, 1283.0], [79.2, 1290.0], [79.3, 1293.0], [79.4, 1296.0], [79.5, 1299.0], [79.6, 1302.0], [79.7, 1305.0], [79.8, 1309.0], [79.9, 1311.0], [80.0, 1313.0], [80.1, 1317.0], [80.2, 1320.0], [80.3, 1321.0], [80.4, 1324.0], [80.5, 1326.0], [80.6, 1328.0], [80.7, 1330.0], [80.8, 1335.0], [80.9, 1338.0], [81.0, 1341.0], [81.1, 1342.0], [81.2, 1344.0], [81.3, 1346.0], [81.4, 1349.0], [81.5, 1350.0], [81.6, 1355.0], [81.7, 1357.0], [81.8, 1361.0], [81.9, 1365.0], [82.0, 1367.0], [82.1, 1370.0], [82.2, 1375.0], [82.3, 1376.0], [82.4, 1381.0], [82.5, 1384.0], [82.6, 1384.0], [82.7, 1386.0], [82.8, 1389.0], [82.9, 1391.0], [83.0, 1396.0], [83.1, 1398.0], [83.2, 1400.0], [83.3, 1401.0], [83.4, 1402.0], [83.5, 1404.0], [83.6, 1406.0], [83.7, 1409.0], [83.8, 1410.0], [83.9, 1411.0], [84.0, 1417.0], [84.1, 1419.0], [84.2, 1420.0], [84.3, 1424.0], [84.4, 1425.0], [84.5, 1427.0], [84.6, 1428.0], [84.7, 1432.0], [84.8, 1435.0], [84.9, 1437.0], [85.0, 1438.0], [85.1, 1440.0], [85.2, 1442.0], [85.3, 1447.0], [85.4, 1450.0], [85.5, 1452.0], [85.6, 1454.0], [85.7, 1456.0], [85.8, 1462.0], [85.9, 1465.0], [86.0, 1468.0], [86.1, 1474.0], [86.2, 1476.0], [86.3, 1478.0], [86.4, 1478.0], [86.5, 1479.0], [86.6, 1486.0], [86.7, 1489.0], [86.8, 1491.0], [86.9, 1494.0], [87.0, 1499.0], [87.1, 1501.0], [87.2, 1504.0], [87.3, 1505.0], [87.4, 1510.0], [87.5, 1514.0], [87.6, 1519.0], [87.7, 1522.0], [87.8, 1524.0], [87.9, 1529.0], [88.0, 1532.0], [88.1, 1536.0], [88.2, 1543.0], [88.3, 1548.0], [88.4, 1555.0], [88.5, 1563.0], [88.6, 1567.0], [88.7, 1572.0], [88.8, 1573.0], [88.9, 1581.0], [89.0, 1586.0], [89.1, 1592.0], [89.2, 1595.0], [89.3, 1598.0], [89.4, 1600.0], [89.5, 1605.0], [89.6, 1612.0], [89.7, 1618.0], [89.8, 1621.0], [89.9, 1623.0], [90.0, 1630.0], [90.1, 1633.0], [90.2, 1638.0], [90.3, 1641.0], [90.4, 1646.0], [90.5, 1651.0], [90.6, 1655.0], [90.7, 1662.0], [90.8, 1664.0], [90.9, 1671.0], [91.0, 1682.0], [91.1, 1686.0], [91.2, 1696.0], [91.3, 1703.0], [91.4, 1705.0], [91.5, 1711.0], [91.6, 1713.0], [91.7, 1723.0], [91.8, 1734.0], [91.9, 1741.0], [92.0, 1753.0], [92.1, 1757.0], [92.2, 1763.0], [92.3, 1772.0], [92.4, 1777.0], [92.5, 1781.0], [92.6, 1783.0], [92.7, 1788.0], [92.8, 1795.0], [92.9, 1800.0], [93.0, 1810.0], [93.1, 1818.0], [93.2, 1832.0], [93.3, 1838.0], [93.4, 1843.0], [93.5, 1857.0], [93.6, 1866.0], [93.7, 1875.0], [93.8, 1887.0], [93.9, 1895.0], [94.0, 1907.0], [94.1, 1914.0], [94.2, 1923.0], [94.3, 1936.0], [94.4, 1947.0], [94.5, 1953.0], [94.6, 1963.0], [94.7, 1966.0], [94.8, 1983.0], [94.9, 1990.0], [95.0, 1998.0], [95.1, 2010.0], [95.2, 2013.0], [95.3, 2016.0], [95.4, 2021.0], [95.5, 2031.0], [95.6, 2038.0], [95.7, 2064.0], [95.8, 2087.0], [95.9, 2100.0], [96.0, 2109.0], [96.1, 2119.0], [96.2, 2127.0], [96.3, 2139.0], [96.4, 2146.0], [96.5, 2163.0], [96.6, 2177.0], [96.7, 2190.0], [96.8, 2204.0], [96.9, 2215.0], [97.0, 2236.0], [97.1, 2258.0], [97.2, 2264.0], [97.3, 2277.0], [97.4, 2305.0], [97.5, 2318.0], [97.6, 2336.0], [97.7, 2352.0], [97.8, 2371.0], [97.9, 2390.0], [98.0, 2402.0], [98.1, 2458.0], [98.2, 2493.0], [98.3, 2502.0], [98.4, 2543.0], [98.5, 2640.0], [98.6, 2694.0], [98.7, 2732.0], [98.8, 2796.0], [98.9, 2824.0], [99.0, 2930.0], [99.1, 3006.0], [99.2, 3135.0], [99.3, 3338.0], [99.4, 3431.0], [99.5, 3536.0], [99.6, 3657.0], [99.7, 4264.0], [99.8, 4642.0], [99.9, 5134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 566.0, "series": [{"data": [[600.0, 436.0], [700.0, 334.0], [800.0, 286.0], [900.0, 303.0], [1000.0, 338.0], [1100.0, 230.0], [1200.0, 197.0], [1300.0, 190.0], [1400.0, 199.0], [1500.0, 122.0], [1600.0, 97.0], [1700.0, 86.0], [1800.0, 54.0], [1900.0, 56.0], [2000.0, 46.0], [2100.0, 46.0], [2300.0, 30.0], [2200.0, 31.0], [2400.0, 16.0], [2500.0, 11.0], [2600.0, 8.0], [2800.0, 9.0], [2700.0, 9.0], [2900.0, 6.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 4.0], [3200.0, 3.0], [3400.0, 4.0], [3500.0, 7.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4100.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [4400.0, 1.0], [4700.0, 2.0], [5100.0, 1.0], [4900.0, 2.0], [5400.0, 1.0], [5600.0, 3.0], [6000.0, 1.0], [100.0, 29.0], [200.0, 518.0], [300.0, 372.0], [400.0, 566.0], [500.0, 518.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 672.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3028.0, "series": [{"data": [[0.0, 1490.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3028.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 672.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.905063291139241, "minX": 1.6038402E12, "maxY": 10.0, "series": [{"data": [[1.6038405E12, 10.0], [1.60384032E12, 10.0], [1.60384038E12, 10.0], [1.6038402E12, 10.0], [1.60384026E12, 10.0], [1.60384056E12, 10.0], [1.60384062E12, 9.905063291139241], [1.60384044E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 1.0, "maxY": 2814.0, "series": [{"data": [[8.0, 499.0], [4.0, 1177.0], [2.0, 1411.0], [1.0, 2814.0], [9.0, 382.0], [10.0, 896.6589461493917], [5.0, 551.0], [6.0, 1202.0], [3.0, 1080.0], [7.0, 546.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 896.9657032755294]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3577.5, "minX": 1.6038402E12, "maxY": 3322621.2666666666, "series": [{"data": [[1.6038405E12, 3123257.783333333], [1.60384032E12, 3322621.2666666666], [1.60384038E12, 3136614.75], [1.6038402E12, 3135031.4166666665], [1.60384026E12, 2922527.183333333], [1.60384056E12, 3081437.9166666665], [1.60384062E12, 2192436.216666667], [1.60384044E12, 3058563.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038405E12, 5095.616666666667], [1.60384032E12, 5013.533333333334], [1.60384038E12, 5059.183333333333], [1.6038402E12, 4527.05], [1.60384026E12, 4988.516666666666], [1.60384056E12, 5772.083333333333], [1.60384062E12, 3577.5], [1.60384044E12, 4543.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 792.5177398160314, "minX": 1.6038402E12, "maxY": 973.5488000000007, "series": [{"data": [[1.6038405E12, 872.2543352601156], [1.60384032E12, 900.9304084720122], [1.60384038E12, 897.2865671641795], [1.6038402E12, 973.5488000000007], [1.60384026E12, 892.5059171597629], [1.60384056E12, 792.5177398160314], [1.60384062E12, 942.2405063291131], [1.60384044E12, 940.451664025356]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 791.0013140604469, "minX": 1.6038402E12, "maxY": 971.4431999999998, "series": [{"data": [[1.6038405E12, 870.582369942197], [1.60384032E12, 898.9046898638437], [1.60384038E12, 895.3895522388057], [1.6038402E12, 971.4431999999998], [1.60384026E12, 890.4792899408285], [1.60384056E12, 791.0013140604469], [1.60384062E12, 940.5970464135021], [1.60384044E12, 938.7036450079236]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010548523206751061, "minX": 1.6038402E12, "maxY": 0.17759999999999984, "series": [{"data": [[1.6038405E12, 0.020231213872832374], [1.60384032E12, 0.015128593040847196], [1.60384038E12, 0.017910447761194045], [1.6038402E12, 0.17759999999999984], [1.60384026E12, 0.03106508875739647], [1.60384056E12, 0.01576872536136664], [1.60384062E12, 0.010548523206751061], [1.60384044E12, 0.014263074484944535]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.6038402E12, "maxY": 6015.0, "series": [{"data": [[1.6038405E12, 4477.0], [1.60384032E12, 3006.0], [1.60384038E12, 4710.0], [1.6038402E12, 5494.0], [1.60384026E12, 4983.0], [1.60384056E12, 3226.0], [1.60384062E12, 3712.0], [1.60384044E12, 6015.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038405E12, 199.0], [1.60384032E12, 209.7479990530014], [1.60384038E12, 198.2339990401268], [1.6038402E12, 216.0], [1.60384026E12, 212.18599967718126], [1.60384056E12, 199.71599963665008], [1.60384062E12, 204.0], [1.60384044E12, 207.68799984931945]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038405E12, 199.0], [1.60384032E12, 211.10760012626648], [1.60384038E12, 201.85740038394928], [1.6038402E12, 216.98700029850005], [1.60384026E12, 213.40460012912752], [1.60384056E12, 200.54380007267], [1.60384062E12, 204.0], [1.60384044E12, 208.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038405E12, 199.0], [1.60384032E12, 210.5779998421669], [1.60384038E12, 200.2469995200634], [1.6038402E12, 216.0], [1.60384026E12, 212.8629998385906], [1.60384056E12, 200.23899990916252], [1.60384062E12, 204.0], [1.60384044E12, 208.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038405E12, 192.0], [1.60384032E12, 194.0], [1.60384038E12, 185.0], [1.6038402E12, 207.0], [1.60384026E12, 198.0], [1.60384056E12, 184.0], [1.60384062E12, 186.0], [1.60384044E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038405E12, 685.5], [1.60384032E12, 731.0], [1.60384038E12, 722.5], [1.6038402E12, 820.0], [1.60384026E12, 675.0], [1.60384056E12, 650.0], [1.60384062E12, 828.5], [1.60384044E12, 806.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 430.5, "minX": 1.0, "maxY": 2814.0, "series": [{"data": [[2.0, 1380.0], [3.0, 1974.0], [4.0, 2000.0], [5.0, 1591.0], [6.0, 1117.5], [7.0, 1242.0], [8.0, 1012.5], [9.0, 955.0], [10.0, 838.5], [11.0, 939.0], [12.0, 802.5], [13.0, 750.0], [14.0, 631.0], [15.0, 615.0], [16.0, 552.0], [1.0, 2814.0], [17.0, 516.0], [18.0, 473.0], [19.0, 482.0], [20.0, 459.0], [21.0, 466.5], [22.0, 430.5], [23.0, 441.0], [24.0, 436.0], [26.0, 438.5], [27.0, 433.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 430.5, "minX": 1.0, "maxY": 2802.0, "series": [{"data": [[2.0, 1375.5], [3.0, 1969.0], [4.0, 1996.5], [5.0, 1589.5], [6.0, 1116.0], [7.0, 1241.0], [8.0, 1011.0], [9.0, 955.0], [10.0, 837.5], [11.0, 935.0], [12.0, 800.5], [13.0, 744.0], [14.0, 631.0], [15.0, 615.0], [16.0, 552.0], [1.0, 2802.0], [17.0, 516.0], [18.0, 472.5], [19.0, 482.0], [20.0, 459.0], [21.0, 465.5], [22.0, 430.5], [23.0, 441.0], [24.0, 435.5], [26.0, 438.0], [27.0, 433.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60384014E12, "maxY": 12.683333333333334, "series": [{"data": [[1.6038405E12, 11.533333333333333], [1.60384032E12, 11.016666666666667], [1.60384038E12, 11.166666666666666], [1.6038402E12, 10.416666666666666], [1.60384026E12, 11.266666666666667], [1.60384056E12, 12.683333333333334], [1.60384014E12, 0.16666666666666666], [1.60384062E12, 7.733333333333333], [1.60384044E12, 10.516666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384062E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.9, "minX": 1.6038402E12, "maxY": 12.683333333333334, "series": [{"data": [[1.6038405E12, 11.533333333333333], [1.60384032E12, 11.016666666666667], [1.60384038E12, 11.166666666666666], [1.6038402E12, 10.416666666666666], [1.60384026E12, 11.266666666666667], [1.60384056E12, 12.683333333333334], [1.60384062E12, 7.9], [1.60384044E12, 10.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.9, "minX": 1.6038402E12, "maxY": 12.683333333333334, "series": [{"data": [[1.6038405E12, 11.533333333333333], [1.60384032E12, 11.016666666666667], [1.60384038E12, 11.166666666666666], [1.6038402E12, 10.416666666666666], [1.60384026E12, 11.266666666666667], [1.60384056E12, 12.683333333333334], [1.60384062E12, 7.9], [1.60384044E12, 10.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.9, "minX": 1.6038402E12, "maxY": 12.683333333333334, "series": [{"data": [[1.6038405E12, 11.533333333333333], [1.60384032E12, 11.016666666666667], [1.60384038E12, 11.166666666666666], [1.6038402E12, 10.416666666666666], [1.60384026E12, 11.266666666666667], [1.60384056E12, 12.683333333333334], [1.60384062E12, 7.9], [1.60384044E12, 10.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384062E12, "title": "Total Transactions Per Second"}},
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

