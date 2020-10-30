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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 8501.0, "series": [{"data": [[0.0, 183.0], [0.1, 187.0], [0.2, 189.0], [0.3, 190.0], [0.4, 193.0], [0.5, 193.0], [0.6, 194.0], [0.7, 195.0], [0.8, 197.0], [0.9, 197.0], [1.0, 198.0], [1.1, 199.0], [1.2, 199.0], [1.3, 201.0], [1.4, 201.0], [1.5, 201.0], [1.6, 202.0], [1.7, 204.0], [1.8, 205.0], [1.9, 205.0], [2.0, 206.0], [2.1, 206.0], [2.2, 207.0], [2.3, 208.0], [2.4, 208.0], [2.5, 208.0], [2.6, 209.0], [2.7, 211.0], [2.8, 212.0], [2.9, 212.0], [3.0, 213.0], [3.1, 214.0], [3.2, 215.0], [3.3, 216.0], [3.4, 216.0], [3.5, 218.0], [3.6, 218.0], [3.7, 219.0], [3.8, 219.0], [3.9, 220.0], [4.0, 221.0], [4.1, 222.0], [4.2, 223.0], [4.3, 225.0], [4.4, 225.0], [4.5, 227.0], [4.6, 228.0], [4.7, 228.0], [4.8, 229.0], [4.9, 229.0], [5.0, 230.0], [5.1, 231.0], [5.2, 231.0], [5.3, 232.0], [5.4, 233.0], [5.5, 234.0], [5.6, 234.0], [5.7, 235.0], [5.8, 236.0], [5.9, 236.0], [6.0, 237.0], [6.1, 238.0], [6.2, 239.0], [6.3, 240.0], [6.4, 241.0], [6.5, 242.0], [6.6, 243.0], [6.7, 244.0], [6.8, 244.0], [6.9, 246.0], [7.0, 247.0], [7.1, 249.0], [7.2, 249.0], [7.3, 250.0], [7.4, 251.0], [7.5, 252.0], [7.6, 252.0], [7.7, 253.0], [7.8, 254.0], [7.9, 255.0], [8.0, 256.0], [8.1, 257.0], [8.2, 259.0], [8.3, 260.0], [8.4, 261.0], [8.5, 263.0], [8.6, 265.0], [8.7, 267.0], [8.8, 267.0], [8.9, 268.0], [9.0, 269.0], [9.1, 270.0], [9.2, 270.0], [9.3, 271.0], [9.4, 272.0], [9.5, 273.0], [9.6, 273.0], [9.7, 274.0], [9.8, 274.0], [9.9, 275.0], [10.0, 276.0], [10.1, 277.0], [10.2, 278.0], [10.3, 279.0], [10.4, 280.0], [10.5, 281.0], [10.6, 281.0], [10.7, 282.0], [10.8, 283.0], [10.9, 284.0], [11.0, 285.0], [11.1, 285.0], [11.2, 286.0], [11.3, 286.0], [11.4, 287.0], [11.5, 288.0], [11.6, 289.0], [11.7, 289.0], [11.8, 290.0], [11.9, 291.0], [12.0, 291.0], [12.1, 292.0], [12.2, 293.0], [12.3, 294.0], [12.4, 294.0], [12.5, 295.0], [12.6, 296.0], [12.7, 297.0], [12.8, 298.0], [12.9, 299.0], [13.0, 299.0], [13.1, 301.0], [13.2, 302.0], [13.3, 303.0], [13.4, 304.0], [13.5, 305.0], [13.6, 306.0], [13.7, 307.0], [13.8, 309.0], [13.9, 310.0], [14.0, 311.0], [14.1, 312.0], [14.2, 314.0], [14.3, 316.0], [14.4, 318.0], [14.5, 318.0], [14.6, 319.0], [14.7, 320.0], [14.8, 321.0], [14.9, 321.0], [15.0, 323.0], [15.1, 323.0], [15.2, 325.0], [15.3, 326.0], [15.4, 326.0], [15.5, 328.0], [15.6, 329.0], [15.7, 330.0], [15.8, 331.0], [15.9, 333.0], [16.0, 333.0], [16.1, 334.0], [16.2, 336.0], [16.3, 336.0], [16.4, 340.0], [16.5, 341.0], [16.6, 342.0], [16.7, 345.0], [16.8, 346.0], [16.9, 349.0], [17.0, 352.0], [17.1, 353.0], [17.2, 355.0], [17.3, 357.0], [17.4, 358.0], [17.5, 359.0], [17.6, 360.0], [17.7, 362.0], [17.8, 366.0], [17.9, 369.0], [18.0, 370.0], [18.1, 373.0], [18.2, 374.0], [18.3, 375.0], [18.4, 376.0], [18.5, 377.0], [18.6, 378.0], [18.7, 380.0], [18.8, 381.0], [18.9, 382.0], [19.0, 382.0], [19.1, 383.0], [19.2, 384.0], [19.3, 385.0], [19.4, 385.0], [19.5, 386.0], [19.6, 387.0], [19.7, 387.0], [19.8, 388.0], [19.9, 389.0], [20.0, 389.0], [20.1, 391.0], [20.2, 392.0], [20.3, 394.0], [20.4, 395.0], [20.5, 396.0], [20.6, 397.0], [20.7, 398.0], [20.8, 400.0], [20.9, 400.0], [21.0, 401.0], [21.1, 401.0], [21.2, 403.0], [21.3, 405.0], [21.4, 406.0], [21.5, 406.0], [21.6, 407.0], [21.7, 408.0], [21.8, 408.0], [21.9, 409.0], [22.0, 409.0], [22.1, 410.0], [22.2, 411.0], [22.3, 411.0], [22.4, 412.0], [22.5, 413.0], [22.6, 414.0], [22.7, 414.0], [22.8, 415.0], [22.9, 416.0], [23.0, 417.0], [23.1, 418.0], [23.2, 420.0], [23.3, 421.0], [23.4, 421.0], [23.5, 422.0], [23.6, 424.0], [23.7, 425.0], [23.8, 425.0], [23.9, 426.0], [24.0, 427.0], [24.1, 428.0], [24.2, 428.0], [24.3, 430.0], [24.4, 431.0], [24.5, 431.0], [24.6, 432.0], [24.7, 434.0], [24.8, 435.0], [24.9, 435.0], [25.0, 436.0], [25.1, 437.0], [25.2, 438.0], [25.3, 439.0], [25.4, 440.0], [25.5, 440.0], [25.6, 441.0], [25.7, 441.0], [25.8, 442.0], [25.9, 442.0], [26.0, 443.0], [26.1, 444.0], [26.2, 446.0], [26.3, 446.0], [26.4, 447.0], [26.5, 448.0], [26.6, 449.0], [26.7, 450.0], [26.8, 451.0], [26.9, 452.0], [27.0, 453.0], [27.1, 454.0], [27.2, 455.0], [27.3, 456.0], [27.4, 456.0], [27.5, 457.0], [27.6, 458.0], [27.7, 460.0], [27.8, 462.0], [27.9, 463.0], [28.0, 463.0], [28.1, 464.0], [28.2, 465.0], [28.3, 466.0], [28.4, 466.0], [28.5, 468.0], [28.6, 469.0], [28.7, 470.0], [28.8, 471.0], [28.9, 471.0], [29.0, 472.0], [29.1, 472.0], [29.2, 474.0], [29.3, 475.0], [29.4, 476.0], [29.5, 477.0], [29.6, 477.0], [29.7, 478.0], [29.8, 479.0], [29.9, 479.0], [30.0, 480.0], [30.1, 481.0], [30.2, 482.0], [30.3, 483.0], [30.4, 483.0], [30.5, 484.0], [30.6, 486.0], [30.7, 487.0], [30.8, 488.0], [30.9, 489.0], [31.0, 490.0], [31.1, 491.0], [31.2, 491.0], [31.3, 495.0], [31.4, 495.0], [31.5, 495.0], [31.6, 497.0], [31.7, 498.0], [31.8, 499.0], [31.9, 500.0], [32.0, 501.0], [32.1, 503.0], [32.2, 504.0], [32.3, 504.0], [32.4, 505.0], [32.5, 507.0], [32.6, 508.0], [32.7, 509.0], [32.8, 511.0], [32.9, 511.0], [33.0, 512.0], [33.1, 513.0], [33.2, 514.0], [33.3, 514.0], [33.4, 515.0], [33.5, 517.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 520.0], [34.0, 521.0], [34.1, 522.0], [34.2, 523.0], [34.3, 525.0], [34.4, 525.0], [34.5, 525.0], [34.6, 527.0], [34.7, 528.0], [34.8, 529.0], [34.9, 530.0], [35.0, 531.0], [35.1, 532.0], [35.2, 534.0], [35.3, 535.0], [35.4, 536.0], [35.5, 538.0], [35.6, 539.0], [35.7, 540.0], [35.8, 541.0], [35.9, 542.0], [36.0, 543.0], [36.1, 544.0], [36.2, 545.0], [36.3, 546.0], [36.4, 547.0], [36.5, 547.0], [36.6, 548.0], [36.7, 548.0], [36.8, 549.0], [36.9, 550.0], [37.0, 551.0], [37.1, 552.0], [37.2, 553.0], [37.3, 555.0], [37.4, 556.0], [37.5, 557.0], [37.6, 557.0], [37.7, 558.0], [37.8, 558.0], [37.9, 559.0], [38.0, 559.0], [38.1, 560.0], [38.2, 561.0], [38.3, 562.0], [38.4, 562.0], [38.5, 563.0], [38.6, 564.0], [38.7, 564.0], [38.8, 565.0], [38.9, 566.0], [39.0, 567.0], [39.1, 568.0], [39.2, 568.0], [39.3, 570.0], [39.4, 571.0], [39.5, 572.0], [39.6, 572.0], [39.7, 573.0], [39.8, 575.0], [39.9, 576.0], [40.0, 577.0], [40.1, 578.0], [40.2, 579.0], [40.3, 580.0], [40.4, 580.0], [40.5, 581.0], [40.6, 582.0], [40.7, 583.0], [40.8, 584.0], [40.9, 584.0], [41.0, 585.0], [41.1, 587.0], [41.2, 588.0], [41.3, 589.0], [41.4, 590.0], [41.5, 592.0], [41.6, 594.0], [41.7, 594.0], [41.8, 594.0], [41.9, 595.0], [42.0, 596.0], [42.1, 597.0], [42.2, 598.0], [42.3, 599.0], [42.4, 599.0], [42.5, 600.0], [42.6, 601.0], [42.7, 602.0], [42.8, 605.0], [42.9, 607.0], [43.0, 608.0], [43.1, 609.0], [43.2, 610.0], [43.3, 611.0], [43.4, 613.0], [43.5, 614.0], [43.6, 616.0], [43.7, 618.0], [43.8, 618.0], [43.9, 620.0], [44.0, 621.0], [44.1, 623.0], [44.2, 623.0], [44.3, 624.0], [44.4, 626.0], [44.5, 627.0], [44.6, 627.0], [44.7, 629.0], [44.8, 631.0], [44.9, 633.0], [45.0, 634.0], [45.1, 635.0], [45.2, 638.0], [45.3, 639.0], [45.4, 640.0], [45.5, 642.0], [45.6, 643.0], [45.7, 644.0], [45.8, 645.0], [45.9, 646.0], [46.0, 646.0], [46.1, 647.0], [46.2, 648.0], [46.3, 650.0], [46.4, 651.0], [46.5, 651.0], [46.6, 653.0], [46.7, 654.0], [46.8, 655.0], [46.9, 656.0], [47.0, 657.0], [47.1, 658.0], [47.2, 659.0], [47.3, 660.0], [47.4, 664.0], [47.5, 665.0], [47.6, 666.0], [47.7, 667.0], [47.8, 669.0], [47.9, 670.0], [48.0, 672.0], [48.1, 673.0], [48.2, 675.0], [48.3, 676.0], [48.4, 677.0], [48.5, 678.0], [48.6, 679.0], [48.7, 680.0], [48.8, 681.0], [48.9, 684.0], [49.0, 687.0], [49.1, 688.0], [49.2, 690.0], [49.3, 691.0], [49.4, 692.0], [49.5, 694.0], [49.6, 695.0], [49.7, 696.0], [49.8, 697.0], [49.9, 698.0], [50.0, 699.0], [50.1, 699.0], [50.2, 701.0], [50.3, 703.0], [50.4, 704.0], [50.5, 706.0], [50.6, 707.0], [50.7, 709.0], [50.8, 712.0], [50.9, 714.0], [51.0, 716.0], [51.1, 717.0], [51.2, 719.0], [51.3, 720.0], [51.4, 722.0], [51.5, 724.0], [51.6, 727.0], [51.7, 729.0], [51.8, 731.0], [51.9, 733.0], [52.0, 735.0], [52.1, 737.0], [52.2, 738.0], [52.3, 740.0], [52.4, 742.0], [52.5, 744.0], [52.6, 746.0], [52.7, 748.0], [52.8, 749.0], [52.9, 750.0], [53.0, 752.0], [53.1, 753.0], [53.2, 755.0], [53.3, 757.0], [53.4, 759.0], [53.5, 760.0], [53.6, 762.0], [53.7, 765.0], [53.8, 767.0], [53.9, 770.0], [54.0, 771.0], [54.1, 773.0], [54.2, 774.0], [54.3, 777.0], [54.4, 779.0], [54.5, 780.0], [54.6, 782.0], [54.7, 784.0], [54.8, 784.0], [54.9, 786.0], [55.0, 787.0], [55.1, 789.0], [55.2, 790.0], [55.3, 793.0], [55.4, 796.0], [55.5, 798.0], [55.6, 799.0], [55.7, 801.0], [55.8, 803.0], [55.9, 804.0], [56.0, 807.0], [56.1, 809.0], [56.2, 810.0], [56.3, 812.0], [56.4, 813.0], [56.5, 814.0], [56.6, 816.0], [56.7, 817.0], [56.8, 818.0], [56.9, 820.0], [57.0, 824.0], [57.1, 825.0], [57.2, 827.0], [57.3, 828.0], [57.4, 830.0], [57.5, 832.0], [57.6, 834.0], [57.7, 835.0], [57.8, 836.0], [57.9, 838.0], [58.0, 840.0], [58.1, 843.0], [58.2, 845.0], [58.3, 846.0], [58.4, 847.0], [58.5, 850.0], [58.6, 852.0], [58.7, 854.0], [58.8, 855.0], [58.9, 856.0], [59.0, 859.0], [59.1, 860.0], [59.2, 863.0], [59.3, 865.0], [59.4, 866.0], [59.5, 869.0], [59.6, 871.0], [59.7, 873.0], [59.8, 875.0], [59.9, 876.0], [60.0, 878.0], [60.1, 881.0], [60.2, 882.0], [60.3, 883.0], [60.4, 887.0], [60.5, 888.0], [60.6, 890.0], [60.7, 891.0], [60.8, 894.0], [60.9, 894.0], [61.0, 895.0], [61.1, 897.0], [61.2, 899.0], [61.3, 900.0], [61.4, 901.0], [61.5, 902.0], [61.6, 903.0], [61.7, 905.0], [61.8, 909.0], [61.9, 910.0], [62.0, 911.0], [62.1, 912.0], [62.2, 914.0], [62.3, 915.0], [62.4, 916.0], [62.5, 918.0], [62.6, 918.0], [62.7, 920.0], [62.8, 921.0], [62.9, 922.0], [63.0, 924.0], [63.1, 926.0], [63.2, 927.0], [63.3, 928.0], [63.4, 929.0], [63.5, 931.0], [63.6, 933.0], [63.7, 935.0], [63.8, 936.0], [63.9, 937.0], [64.0, 939.0], [64.1, 943.0], [64.2, 944.0], [64.3, 946.0], [64.4, 948.0], [64.5, 948.0], [64.6, 951.0], [64.7, 953.0], [64.8, 953.0], [64.9, 955.0], [65.0, 957.0], [65.1, 959.0], [65.2, 959.0], [65.3, 963.0], [65.4, 964.0], [65.5, 966.0], [65.6, 968.0], [65.7, 970.0], [65.8, 971.0], [65.9, 973.0], [66.0, 973.0], [66.1, 974.0], [66.2, 975.0], [66.3, 977.0], [66.4, 979.0], [66.5, 980.0], [66.6, 981.0], [66.7, 982.0], [66.8, 982.0], [66.9, 985.0], [67.0, 986.0], [67.1, 988.0], [67.2, 989.0], [67.3, 991.0], [67.4, 993.0], [67.5, 994.0], [67.6, 995.0], [67.7, 997.0], [67.8, 998.0], [67.9, 1000.0], [68.0, 1002.0], [68.1, 1003.0], [68.2, 1006.0], [68.3, 1008.0], [68.4, 1009.0], [68.5, 1012.0], [68.6, 1014.0], [68.7, 1016.0], [68.8, 1017.0], [68.9, 1019.0], [69.0, 1020.0], [69.1, 1022.0], [69.2, 1024.0], [69.3, 1025.0], [69.4, 1027.0], [69.5, 1029.0], [69.6, 1030.0], [69.7, 1031.0], [69.8, 1033.0], [69.9, 1034.0], [70.0, 1036.0], [70.1, 1039.0], [70.2, 1041.0], [70.3, 1042.0], [70.4, 1043.0], [70.5, 1045.0], [70.6, 1048.0], [70.7, 1051.0], [70.8, 1052.0], [70.9, 1055.0], [71.0, 1056.0], [71.1, 1059.0], [71.2, 1060.0], [71.3, 1061.0], [71.4, 1063.0], [71.5, 1065.0], [71.6, 1068.0], [71.7, 1070.0], [71.8, 1071.0], [71.9, 1073.0], [72.0, 1075.0], [72.1, 1077.0], [72.2, 1081.0], [72.3, 1085.0], [72.4, 1087.0], [72.5, 1089.0], [72.6, 1091.0], [72.7, 1093.0], [72.8, 1095.0], [72.9, 1096.0], [73.0, 1099.0], [73.1, 1100.0], [73.2, 1102.0], [73.3, 1104.0], [73.4, 1107.0], [73.5, 1107.0], [73.6, 1109.0], [73.7, 1111.0], [73.8, 1111.0], [73.9, 1113.0], [74.0, 1114.0], [74.1, 1116.0], [74.2, 1119.0], [74.3, 1122.0], [74.4, 1123.0], [74.5, 1125.0], [74.6, 1126.0], [74.7, 1130.0], [74.8, 1132.0], [74.9, 1134.0], [75.0, 1137.0], [75.1, 1138.0], [75.2, 1140.0], [75.3, 1141.0], [75.4, 1144.0], [75.5, 1146.0], [75.6, 1148.0], [75.7, 1151.0], [75.8, 1154.0], [75.9, 1156.0], [76.0, 1159.0], [76.1, 1162.0], [76.2, 1166.0], [76.3, 1169.0], [76.4, 1172.0], [76.5, 1174.0], [76.6, 1177.0], [76.7, 1179.0], [76.8, 1181.0], [76.9, 1184.0], [77.0, 1187.0], [77.1, 1189.0], [77.2, 1195.0], [77.3, 1198.0], [77.4, 1201.0], [77.5, 1202.0], [77.6, 1205.0], [77.7, 1207.0], [77.8, 1208.0], [77.9, 1210.0], [78.0, 1211.0], [78.1, 1212.0], [78.2, 1215.0], [78.3, 1216.0], [78.4, 1218.0], [78.5, 1226.0], [78.6, 1227.0], [78.7, 1230.0], [78.8, 1232.0], [78.9, 1236.0], [79.0, 1238.0], [79.1, 1241.0], [79.2, 1245.0], [79.3, 1247.0], [79.4, 1251.0], [79.5, 1253.0], [79.6, 1257.0], [79.7, 1259.0], [79.8, 1260.0], [79.9, 1262.0], [80.0, 1265.0], [80.1, 1269.0], [80.2, 1271.0], [80.3, 1273.0], [80.4, 1275.0], [80.5, 1277.0], [80.6, 1282.0], [80.7, 1284.0], [80.8, 1287.0], [80.9, 1288.0], [81.0, 1291.0], [81.1, 1293.0], [81.2, 1297.0], [81.3, 1299.0], [81.4, 1300.0], [81.5, 1302.0], [81.6, 1305.0], [81.7, 1307.0], [81.8, 1310.0], [81.9, 1311.0], [82.0, 1315.0], [82.1, 1316.0], [82.2, 1318.0], [82.3, 1320.0], [82.4, 1322.0], [82.5, 1325.0], [82.6, 1327.0], [82.7, 1330.0], [82.8, 1331.0], [82.9, 1335.0], [83.0, 1338.0], [83.1, 1341.0], [83.2, 1342.0], [83.3, 1346.0], [83.4, 1349.0], [83.5, 1350.0], [83.6, 1351.0], [83.7, 1353.0], [83.8, 1355.0], [83.9, 1356.0], [84.0, 1358.0], [84.1, 1359.0], [84.2, 1361.0], [84.3, 1363.0], [84.4, 1365.0], [84.5, 1367.0], [84.6, 1369.0], [84.7, 1372.0], [84.8, 1377.0], [84.9, 1378.0], [85.0, 1380.0], [85.1, 1382.0], [85.2, 1386.0], [85.3, 1388.0], [85.4, 1390.0], [85.5, 1391.0], [85.6, 1395.0], [85.7, 1398.0], [85.8, 1402.0], [85.9, 1405.0], [86.0, 1408.0], [86.1, 1409.0], [86.2, 1411.0], [86.3, 1412.0], [86.4, 1415.0], [86.5, 1417.0], [86.6, 1420.0], [86.7, 1422.0], [86.8, 1425.0], [86.9, 1428.0], [87.0, 1428.0], [87.1, 1431.0], [87.2, 1435.0], [87.3, 1440.0], [87.4, 1443.0], [87.5, 1447.0], [87.6, 1450.0], [87.7, 1453.0], [87.8, 1455.0], [87.9, 1460.0], [88.0, 1463.0], [88.1, 1464.0], [88.2, 1468.0], [88.3, 1471.0], [88.4, 1476.0], [88.5, 1480.0], [88.6, 1483.0], [88.7, 1486.0], [88.8, 1490.0], [88.9, 1498.0], [89.0, 1504.0], [89.1, 1507.0], [89.2, 1513.0], [89.3, 1514.0], [89.4, 1518.0], [89.5, 1522.0], [89.6, 1525.0], [89.7, 1531.0], [89.8, 1535.0], [89.9, 1541.0], [90.0, 1550.0], [90.1, 1554.0], [90.2, 1562.0], [90.3, 1566.0], [90.4, 1572.0], [90.5, 1575.0], [90.6, 1581.0], [90.7, 1585.0], [90.8, 1592.0], [90.9, 1598.0], [91.0, 1603.0], [91.1, 1608.0], [91.2, 1612.0], [91.3, 1616.0], [91.4, 1625.0], [91.5, 1631.0], [91.6, 1635.0], [91.7, 1642.0], [91.8, 1649.0], [91.9, 1655.0], [92.0, 1666.0], [92.1, 1669.0], [92.2, 1678.0], [92.3, 1687.0], [92.4, 1691.0], [92.5, 1709.0], [92.6, 1716.0], [92.7, 1728.0], [92.8, 1733.0], [92.9, 1742.0], [93.0, 1752.0], [93.1, 1757.0], [93.2, 1766.0], [93.3, 1776.0], [93.4, 1778.0], [93.5, 1791.0], [93.6, 1801.0], [93.7, 1816.0], [93.8, 1826.0], [93.9, 1833.0], [94.0, 1842.0], [94.1, 1845.0], [94.2, 1856.0], [94.3, 1863.0], [94.4, 1880.0], [94.5, 1884.0], [94.6, 1898.0], [94.7, 1905.0], [94.8, 1913.0], [94.9, 1923.0], [95.0, 1935.0], [95.1, 1951.0], [95.2, 1959.0], [95.3, 1976.0], [95.4, 1992.0], [95.5, 2002.0], [95.6, 2018.0], [95.7, 2029.0], [95.8, 2045.0], [95.9, 2056.0], [96.0, 2068.0], [96.1, 2077.0], [96.2, 2093.0], [96.3, 2097.0], [96.4, 2124.0], [96.5, 2137.0], [96.6, 2143.0], [96.7, 2157.0], [96.8, 2165.0], [96.9, 2177.0], [97.0, 2187.0], [97.1, 2193.0], [97.2, 2204.0], [97.3, 2227.0], [97.4, 2250.0], [97.5, 2269.0], [97.6, 2298.0], [97.7, 2307.0], [97.8, 2347.0], [97.9, 2401.0], [98.0, 2425.0], [98.1, 2444.0], [98.2, 2467.0], [98.3, 2500.0], [98.4, 2524.0], [98.5, 2576.0], [98.6, 2600.0], [98.7, 2651.0], [98.8, 2680.0], [98.9, 2709.0], [99.0, 2862.0], [99.1, 3055.0], [99.2, 3132.0], [99.3, 3228.0], [99.4, 3470.0], [99.5, 3616.0], [99.6, 3767.0], [99.7, 4120.0], [99.8, 4422.0], [99.9, 4785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 612.0, "series": [{"data": [[600.0, 398.0], [700.0, 284.0], [800.0, 295.0], [900.0, 341.0], [1000.0, 268.0], [1100.0, 224.0], [1200.0, 209.0], [1300.0, 226.0], [1400.0, 166.0], [1500.0, 104.0], [1600.0, 79.0], [1700.0, 58.0], [1800.0, 54.0], [1900.0, 43.0], [2000.0, 45.0], [2100.0, 44.0], [2300.0, 14.0], [2200.0, 25.0], [2400.0, 20.0], [2500.0, 16.0], [2600.0, 13.0], [2700.0, 8.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 6.0], [3200.0, 4.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 5.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 4.0], [4200.0, 2.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 1.0], [8500.0, 1.0], [100.0, 63.0], [200.0, 612.0], [300.0, 404.0], [400.0, 576.0], [500.0, 549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 574.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2959.0, "series": [{"data": [[0.0, 1657.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2959.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 574.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.683453237410072, "minX": 1.6040187E12, "maxY": 10.0, "series": [{"data": [[1.60401912E12, 10.0], [1.60401882E12, 10.0], [1.604019E12, 10.0], [1.6040187E12, 10.0], [1.60401918E12, 9.683453237410072], [1.60401888E12, 10.0], [1.60401906E12, 10.0], [1.60401876E12, 10.0], [1.60401894E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 330.0, "minX": 1.0, "maxY": 2347.0, "series": [{"data": [[8.0, 1410.0], [4.0, 562.0], [2.0, 1113.0], [1.0, 2347.0], [10.0, 857.6233114627574], [5.0, 572.0], [6.0, 330.0], [3.0, 749.0], [7.0, 1096.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 857.8772639691733]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 743.8666666666667, "minX": 1.6040187E12, "maxY": 3675954.1333333333, "series": [{"data": [[1.60401912E12, 3139935.566666667], [1.60401882E12, 3350993.7], [1.604019E12, 2717873.85], [1.6040187E12, 647838.2666666667], [1.60401918E12, 661343.1], [1.60401888E12, 3675954.1333333333], [1.60401906E12, 3658598.7], [1.60401876E12, 2948026.783333333], [1.60401894E12, 3171550.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401912E12, 5406.466666666666], [1.60401882E12, 5807.0], [1.604019E12, 5338.433333333333], [1.6040187E12, 743.8666666666667], [1.60401918E12, 1047.1166666666666], [1.60401888E12, 5434.4], [1.60401906E12, 5500.133333333333], [1.60401876E12, 4588.6], [1.60401894E12, 4711.316666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 771.8097686375319, "minX": 1.6040187E12, "maxY": 1215.438775510204, "series": [{"data": [[1.60401912E12, 840.220196353436], [1.60401882E12, 771.8097686375319], [1.604019E12, 819.0572987721691], [1.6040187E12, 1215.438775510204], [1.60401918E12, 991.0143884892093], [1.60401888E12, 840.6270949720669], [1.60401906E12, 812.1114130434786], [1.60401876E12, 938.7968750000005], [1.60401894E12, 934.3359497645208]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 769.748071979435, "minX": 1.6040187E12, "maxY": 1212.5102040816328, "series": [{"data": [[1.60401912E12, 838.3197755960731], [1.60401882E12, 769.748071979435], [1.604019E12, 817.5429740791279], [1.6040187E12, 1212.5102040816328], [1.60401918E12, 989.0575539568347], [1.60401888E12, 838.3743016759781], [1.60401906E12, 810.0258152173915], [1.60401876E12, 936.8234374999995], [1.60401894E12, 932.2448979591832]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6040187E12, "maxY": 0.8877551020408159, "series": [{"data": [[1.60401912E12, 0.015427769985974778], [1.60401882E12, 0.016709511568123402], [1.604019E12, 0.015006821282401115], [1.6040187E12, 0.8877551020408159], [1.60401918E12, 0.0], [1.60401888E12, 0.016759776536312852], [1.60401906E12, 0.01766304347826088], [1.60401876E12, 0.01718750000000001], [1.60401894E12, 0.014128728414442713]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.6040187E12, "maxY": 8501.0, "series": [{"data": [[1.60401912E12, 3705.0], [1.60401882E12, 3901.0], [1.604019E12, 5258.0], [1.6040187E12, 3616.0], [1.60401918E12, 2576.0], [1.60401888E12, 4276.0], [1.60401906E12, 3312.0], [1.60401876E12, 5342.0], [1.60401894E12, 8501.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401912E12, 192.42599982976913], [1.60401882E12, 199.0], [1.604019E12, 201.0], [1.6040187E12, 209.0], [1.60401918E12, 243.29999816417694], [1.60401888E12, 194.45299982905388], [1.60401906E12, 191.89899947285653], [1.60401876E12, 208.30699954152107], [1.60401894E12, 197.74199984788893]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401912E12, 193.0], [1.60401882E12, 199.0], [1.604019E12, 201.0], [1.6040187E12, 209.0], [1.60401918E12, 250.23000073432922], [1.60401888E12, 195.0], [1.60401906E12, 193.2963000702858], [1.60401876E12, 209.34590006113052], [1.60401894E12, 198.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401912E12, 192.78299991488456], [1.60401882E12, 199.0], [1.604019E12, 201.0], [1.6040187E12, 209.0], [1.60401918E12, 247.14999908208847], [1.60401888E12, 194.81149991452693], [1.60401906E12, 193.00149991214275], [1.60401876E12, 209.08949992358686], [1.60401894E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401912E12, 183.0], [1.60401882E12, 192.0], [1.604019E12, 193.0], [1.6040187E12, 209.0], [1.60401918E12, 229.0], [1.60401888E12, 186.0], [1.60401906E12, 184.0], [1.60401876E12, 197.0], [1.60401894E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401912E12, 691.0], [1.60401882E12, 593.0], [1.604019E12, 679.0], [1.6040187E12, 950.5], [1.60401918E12, 914.0], [1.60401888E12, 728.0], [1.60401906E12, 622.0], [1.60401876E12, 810.5], [1.60401894E12, 787.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 1843.0, "series": [{"data": [[2.0, 1829.5], [3.0, 1843.0], [4.0, 1448.5], [5.0, 1238.0], [6.0, 1245.0], [7.0, 1064.0], [8.0, 1009.5], [9.0, 982.0], [10.0, 915.5], [11.0, 845.0], [12.0, 780.0], [13.0, 738.0], [14.0, 683.0], [15.0, 610.5], [1.0, 1623.0], [16.0, 582.0], [17.0, 539.0], [18.0, 473.5], [19.0, 424.5], [20.0, 446.5], [21.0, 424.0], [22.0, 417.0], [23.0, 401.0], [24.0, 421.0], [25.0, 436.0], [26.0, 410.0], [27.0, 389.0], [28.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 1841.0, "series": [{"data": [[2.0, 1826.5], [3.0, 1841.0], [4.0, 1445.0], [5.0, 1235.0], [6.0, 1243.5], [7.0, 1063.0], [8.0, 1008.5], [9.0, 980.0], [10.0, 912.5], [11.0, 843.0], [12.0, 779.0], [13.0, 738.0], [14.0, 683.0], [15.0, 610.5], [1.0, 1617.0], [16.0, 581.5], [17.0, 539.0], [18.0, 473.0], [19.0, 424.5], [20.0, 446.5], [21.0, 424.0], [22.0, 417.0], [23.0, 401.0], [24.0, 420.5], [25.0, 436.0], [26.0, 410.0], [27.0, 389.0], [28.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.6040187E12, "maxY": 12.966666666666667, "series": [{"data": [[1.60401912E12, 11.883333333333333], [1.60401882E12, 12.966666666666667], [1.604019E12, 12.216666666666667], [1.6040187E12, 1.8], [1.60401918E12, 2.15], [1.60401888E12, 11.933333333333334], [1.60401906E12, 12.266666666666667], [1.60401876E12, 10.666666666666666], [1.60401894E12, 10.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.6040187E12, "maxY": 12.966666666666667, "series": [{"data": [[1.60401912E12, 11.883333333333333], [1.60401882E12, 12.966666666666667], [1.604019E12, 12.216666666666667], [1.6040187E12, 1.6333333333333333], [1.60401918E12, 2.316666666666667], [1.60401888E12, 11.933333333333334], [1.60401906E12, 12.266666666666667], [1.60401876E12, 10.666666666666666], [1.60401894E12, 10.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.6040187E12, "maxY": 12.966666666666667, "series": [{"data": [[1.60401912E12, 11.883333333333333], [1.60401882E12, 12.966666666666667], [1.604019E12, 12.216666666666667], [1.6040187E12, 1.6333333333333333], [1.60401918E12, 2.316666666666667], [1.60401888E12, 11.933333333333334], [1.60401906E12, 12.266666666666667], [1.60401876E12, 10.666666666666666], [1.60401894E12, 10.616666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.6040187E12, "maxY": 12.966666666666667, "series": [{"data": [[1.60401912E12, 11.883333333333333], [1.60401882E12, 12.966666666666667], [1.604019E12, 12.216666666666667], [1.6040187E12, 1.6333333333333333], [1.60401918E12, 2.316666666666667], [1.60401888E12, 11.933333333333334], [1.60401906E12, 12.266666666666667], [1.60401876E12, 10.666666666666666], [1.60401894E12, 10.616666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401918E12, "title": "Total Transactions Per Second"}},
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

