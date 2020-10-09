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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 5724.0, "series": [{"data": [[0.0, 178.0], [0.1, 184.0], [0.2, 186.0], [0.3, 187.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 191.0], [0.8, 192.0], [0.9, 192.0], [1.0, 193.0], [1.1, 194.0], [1.2, 195.0], [1.3, 195.0], [1.4, 195.0], [1.5, 196.0], [1.6, 196.0], [1.7, 197.0], [1.8, 197.0], [1.9, 198.0], [2.0, 198.0], [2.1, 198.0], [2.2, 199.0], [2.3, 199.0], [2.4, 200.0], [2.5, 200.0], [2.6, 201.0], [2.7, 202.0], [2.8, 202.0], [2.9, 203.0], [3.0, 203.0], [3.1, 204.0], [3.2, 205.0], [3.3, 205.0], [3.4, 206.0], [3.5, 207.0], [3.6, 207.0], [3.7, 208.0], [3.8, 209.0], [3.9, 210.0], [4.0, 211.0], [4.1, 211.0], [4.2, 213.0], [4.3, 214.0], [4.4, 214.0], [4.5, 215.0], [4.6, 215.0], [4.7, 217.0], [4.8, 218.0], [4.9, 219.0], [5.0, 219.0], [5.1, 221.0], [5.2, 222.0], [5.3, 223.0], [5.4, 223.0], [5.5, 223.0], [5.6, 224.0], [5.7, 224.0], [5.8, 225.0], [5.9, 226.0], [6.0, 227.0], [6.1, 229.0], [6.2, 230.0], [6.3, 231.0], [6.4, 232.0], [6.5, 234.0], [6.6, 235.0], [6.7, 236.0], [6.8, 238.0], [6.9, 239.0], [7.0, 241.0], [7.1, 242.0], [7.2, 244.0], [7.3, 245.0], [7.4, 246.0], [7.5, 247.0], [7.6, 248.0], [7.7, 249.0], [7.8, 251.0], [7.9, 252.0], [8.0, 253.0], [8.1, 255.0], [8.2, 256.0], [8.3, 258.0], [8.4, 260.0], [8.5, 261.0], [8.6, 262.0], [8.7, 262.0], [8.8, 263.0], [8.9, 264.0], [9.0, 265.0], [9.1, 267.0], [9.2, 269.0], [9.3, 269.0], [9.4, 270.0], [9.5, 270.0], [9.6, 271.0], [9.7, 272.0], [9.8, 273.0], [9.9, 273.0], [10.0, 274.0], [10.1, 275.0], [10.2, 275.0], [10.3, 276.0], [10.4, 276.0], [10.5, 276.0], [10.6, 277.0], [10.7, 278.0], [10.8, 278.0], [10.9, 278.0], [11.0, 279.0], [11.1, 279.0], [11.2, 280.0], [11.3, 281.0], [11.4, 282.0], [11.5, 284.0], [11.6, 285.0], [11.7, 286.0], [11.8, 287.0], [11.9, 287.0], [12.0, 288.0], [12.1, 288.0], [12.2, 289.0], [12.3, 291.0], [12.4, 292.0], [12.5, 293.0], [12.6, 293.0], [12.7, 294.0], [12.8, 296.0], [12.9, 296.0], [13.0, 298.0], [13.1, 299.0], [13.2, 300.0], [13.3, 301.0], [13.4, 303.0], [13.5, 303.0], [13.6, 305.0], [13.7, 306.0], [13.8, 307.0], [13.9, 307.0], [14.0, 308.0], [14.1, 308.0], [14.2, 309.0], [14.3, 310.0], [14.4, 312.0], [14.5, 313.0], [14.6, 313.0], [14.7, 314.0], [14.8, 316.0], [14.9, 317.0], [15.0, 318.0], [15.1, 319.0], [15.2, 321.0], [15.3, 322.0], [15.4, 323.0], [15.5, 324.0], [15.6, 325.0], [15.7, 326.0], [15.8, 327.0], [15.9, 328.0], [16.0, 329.0], [16.1, 330.0], [16.2, 332.0], [16.3, 333.0], [16.4, 334.0], [16.5, 336.0], [16.6, 337.0], [16.7, 338.0], [16.8, 341.0], [16.9, 343.0], [17.0, 345.0], [17.1, 348.0], [17.2, 350.0], [17.3, 353.0], [17.4, 355.0], [17.5, 357.0], [17.6, 359.0], [17.7, 362.0], [17.8, 363.0], [17.9, 367.0], [18.0, 370.0], [18.1, 372.0], [18.2, 375.0], [18.3, 377.0], [18.4, 380.0], [18.5, 382.0], [18.6, 384.0], [18.7, 385.0], [18.8, 386.0], [18.9, 387.0], [19.0, 388.0], [19.1, 389.0], [19.2, 390.0], [19.3, 391.0], [19.4, 393.0], [19.5, 393.0], [19.6, 395.0], [19.7, 396.0], [19.8, 398.0], [19.9, 398.0], [20.0, 400.0], [20.1, 402.0], [20.2, 402.0], [20.3, 403.0], [20.4, 404.0], [20.5, 405.0], [20.6, 406.0], [20.7, 406.0], [20.8, 407.0], [20.9, 407.0], [21.0, 409.0], [21.1, 410.0], [21.2, 411.0], [21.3, 412.0], [21.4, 412.0], [21.5, 414.0], [21.6, 415.0], [21.7, 416.0], [21.8, 417.0], [21.9, 418.0], [22.0, 419.0], [22.1, 420.0], [22.2, 421.0], [22.3, 421.0], [22.4, 422.0], [22.5, 423.0], [22.6, 424.0], [22.7, 424.0], [22.8, 426.0], [22.9, 427.0], [23.0, 427.0], [23.1, 428.0], [23.2, 428.0], [23.3, 429.0], [23.4, 430.0], [23.5, 431.0], [23.6, 433.0], [23.7, 433.0], [23.8, 434.0], [23.9, 435.0], [24.0, 436.0], [24.1, 437.0], [24.2, 438.0], [24.3, 438.0], [24.4, 439.0], [24.5, 439.0], [24.6, 440.0], [24.7, 441.0], [24.8, 442.0], [24.9, 443.0], [25.0, 443.0], [25.1, 444.0], [25.2, 444.0], [25.3, 445.0], [25.4, 446.0], [25.5, 446.0], [25.6, 448.0], [25.7, 449.0], [25.8, 450.0], [25.9, 450.0], [26.0, 451.0], [26.1, 451.0], [26.2, 452.0], [26.3, 453.0], [26.4, 454.0], [26.5, 454.0], [26.6, 455.0], [26.7, 456.0], [26.8, 457.0], [26.9, 457.0], [27.0, 458.0], [27.1, 459.0], [27.2, 460.0], [27.3, 461.0], [27.4, 461.0], [27.5, 462.0], [27.6, 462.0], [27.7, 463.0], [27.8, 464.0], [27.9, 465.0], [28.0, 466.0], [28.1, 467.0], [28.2, 468.0], [28.3, 469.0], [28.4, 469.0], [28.5, 470.0], [28.6, 470.0], [28.7, 471.0], [28.8, 472.0], [28.9, 472.0], [29.0, 473.0], [29.1, 474.0], [29.2, 475.0], [29.3, 476.0], [29.4, 478.0], [29.5, 478.0], [29.6, 479.0], [29.7, 479.0], [29.8, 480.0], [29.9, 480.0], [30.0, 481.0], [30.1, 482.0], [30.2, 483.0], [30.3, 484.0], [30.4, 485.0], [30.5, 487.0], [30.6, 487.0], [30.7, 488.0], [30.8, 489.0], [30.9, 490.0], [31.0, 491.0], [31.1, 492.0], [31.2, 493.0], [31.3, 494.0], [31.4, 495.0], [31.5, 497.0], [31.6, 498.0], [31.7, 499.0], [31.8, 499.0], [31.9, 500.0], [32.0, 502.0], [32.1, 503.0], [32.2, 504.0], [32.3, 504.0], [32.4, 506.0], [32.5, 507.0], [32.6, 507.0], [32.7, 508.0], [32.8, 509.0], [32.9, 510.0], [33.0, 511.0], [33.1, 512.0], [33.2, 513.0], [33.3, 514.0], [33.4, 515.0], [33.5, 516.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 521.0], [34.0, 522.0], [34.1, 523.0], [34.2, 524.0], [34.3, 524.0], [34.4, 525.0], [34.5, 526.0], [34.6, 527.0], [34.7, 529.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 534.0], [35.2, 535.0], [35.3, 536.0], [35.4, 536.0], [35.5, 537.0], [35.6, 538.0], [35.7, 539.0], [35.8, 539.0], [35.9, 540.0], [36.0, 541.0], [36.1, 541.0], [36.2, 542.0], [36.3, 543.0], [36.4, 544.0], [36.5, 546.0], [36.6, 547.0], [36.7, 548.0], [36.8, 549.0], [36.9, 550.0], [37.0, 551.0], [37.1, 551.0], [37.2, 552.0], [37.3, 553.0], [37.4, 554.0], [37.5, 554.0], [37.6, 555.0], [37.7, 557.0], [37.8, 557.0], [37.9, 558.0], [38.0, 559.0], [38.1, 560.0], [38.2, 561.0], [38.3, 562.0], [38.4, 563.0], [38.5, 564.0], [38.6, 565.0], [38.7, 566.0], [38.8, 566.0], [38.9, 568.0], [39.0, 568.0], [39.1, 569.0], [39.2, 570.0], [39.3, 571.0], [39.4, 572.0], [39.5, 573.0], [39.6, 573.0], [39.7, 574.0], [39.8, 575.0], [39.9, 576.0], [40.0, 576.0], [40.1, 578.0], [40.2, 579.0], [40.3, 580.0], [40.4, 582.0], [40.5, 583.0], [40.6, 585.0], [40.7, 586.0], [40.8, 588.0], [40.9, 589.0], [41.0, 589.0], [41.1, 590.0], [41.2, 590.0], [41.3, 591.0], [41.4, 592.0], [41.5, 593.0], [41.6, 595.0], [41.7, 595.0], [41.8, 596.0], [41.9, 597.0], [42.0, 598.0], [42.1, 599.0], [42.2, 600.0], [42.3, 601.0], [42.4, 602.0], [42.5, 604.0], [42.6, 605.0], [42.7, 606.0], [42.8, 606.0], [42.9, 607.0], [43.0, 608.0], [43.1, 609.0], [43.2, 609.0], [43.3, 610.0], [43.4, 611.0], [43.5, 614.0], [43.6, 615.0], [43.7, 616.0], [43.8, 616.0], [43.9, 617.0], [44.0, 619.0], [44.1, 620.0], [44.2, 621.0], [44.3, 622.0], [44.4, 624.0], [44.5, 626.0], [44.6, 627.0], [44.7, 628.0], [44.8, 630.0], [44.9, 631.0], [45.0, 632.0], [45.1, 633.0], [45.2, 634.0], [45.3, 635.0], [45.4, 637.0], [45.5, 637.0], [45.6, 639.0], [45.7, 640.0], [45.8, 642.0], [45.9, 644.0], [46.0, 645.0], [46.1, 647.0], [46.2, 647.0], [46.3, 650.0], [46.4, 652.0], [46.5, 653.0], [46.6, 655.0], [46.7, 656.0], [46.8, 658.0], [46.9, 659.0], [47.0, 661.0], [47.1, 662.0], [47.2, 663.0], [47.3, 666.0], [47.4, 667.0], [47.5, 669.0], [47.6, 671.0], [47.7, 672.0], [47.8, 673.0], [47.9, 674.0], [48.0, 676.0], [48.1, 677.0], [48.2, 679.0], [48.3, 680.0], [48.4, 681.0], [48.5, 682.0], [48.6, 682.0], [48.7, 685.0], [48.8, 686.0], [48.9, 687.0], [49.0, 687.0], [49.1, 690.0], [49.2, 691.0], [49.3, 691.0], [49.4, 694.0], [49.5, 695.0], [49.6, 696.0], [49.7, 697.0], [49.8, 698.0], [49.9, 699.0], [50.0, 700.0], [50.1, 701.0], [50.2, 704.0], [50.3, 706.0], [50.4, 707.0], [50.5, 709.0], [50.6, 710.0], [50.7, 711.0], [50.8, 712.0], [50.9, 713.0], [51.0, 716.0], [51.1, 717.0], [51.2, 720.0], [51.3, 723.0], [51.4, 725.0], [51.5, 726.0], [51.6, 728.0], [51.7, 729.0], [51.8, 731.0], [51.9, 733.0], [52.0, 736.0], [52.1, 738.0], [52.2, 742.0], [52.3, 743.0], [52.4, 745.0], [52.5, 747.0], [52.6, 748.0], [52.7, 750.0], [52.8, 751.0], [52.9, 754.0], [53.0, 758.0], [53.1, 759.0], [53.2, 761.0], [53.3, 762.0], [53.4, 765.0], [53.5, 767.0], [53.6, 770.0], [53.7, 773.0], [53.8, 775.0], [53.9, 777.0], [54.0, 778.0], [54.1, 780.0], [54.2, 781.0], [54.3, 782.0], [54.4, 783.0], [54.5, 785.0], [54.6, 786.0], [54.7, 790.0], [54.8, 791.0], [54.9, 792.0], [55.0, 793.0], [55.1, 794.0], [55.2, 796.0], [55.3, 797.0], [55.4, 799.0], [55.5, 802.0], [55.6, 804.0], [55.7, 806.0], [55.8, 808.0], [55.9, 810.0], [56.0, 811.0], [56.1, 813.0], [56.2, 815.0], [56.3, 816.0], [56.4, 818.0], [56.5, 820.0], [56.6, 822.0], [56.7, 823.0], [56.8, 825.0], [56.9, 828.0], [57.0, 829.0], [57.1, 831.0], [57.2, 832.0], [57.3, 834.0], [57.4, 835.0], [57.5, 839.0], [57.6, 841.0], [57.7, 844.0], [57.8, 846.0], [57.9, 847.0], [58.0, 849.0], [58.1, 851.0], [58.2, 852.0], [58.3, 854.0], [58.4, 855.0], [58.5, 857.0], [58.6, 859.0], [58.7, 861.0], [58.8, 862.0], [58.9, 863.0], [59.0, 865.0], [59.1, 868.0], [59.2, 870.0], [59.3, 871.0], [59.4, 874.0], [59.5, 875.0], [59.6, 877.0], [59.7, 878.0], [59.8, 880.0], [59.9, 881.0], [60.0, 883.0], [60.1, 885.0], [60.2, 886.0], [60.3, 889.0], [60.4, 891.0], [60.5, 892.0], [60.6, 894.0], [60.7, 897.0], [60.8, 900.0], [60.9, 902.0], [61.0, 903.0], [61.1, 905.0], [61.2, 907.0], [61.3, 908.0], [61.4, 909.0], [61.5, 911.0], [61.6, 913.0], [61.7, 914.0], [61.8, 916.0], [61.9, 918.0], [62.0, 919.0], [62.1, 923.0], [62.2, 926.0], [62.3, 927.0], [62.4, 928.0], [62.5, 933.0], [62.6, 934.0], [62.7, 936.0], [62.8, 937.0], [62.9, 939.0], [63.0, 941.0], [63.1, 942.0], [63.2, 943.0], [63.3, 945.0], [63.4, 947.0], [63.5, 950.0], [63.6, 952.0], [63.7, 954.0], [63.8, 956.0], [63.9, 959.0], [64.0, 960.0], [64.1, 962.0], [64.2, 963.0], [64.3, 965.0], [64.4, 967.0], [64.5, 968.0], [64.6, 971.0], [64.7, 972.0], [64.8, 974.0], [64.9, 975.0], [65.0, 977.0], [65.1, 979.0], [65.2, 980.0], [65.3, 981.0], [65.4, 982.0], [65.5, 983.0], [65.6, 984.0], [65.7, 985.0], [65.8, 986.0], [65.9, 988.0], [66.0, 989.0], [66.1, 991.0], [66.2, 992.0], [66.3, 993.0], [66.4, 995.0], [66.5, 997.0], [66.6, 997.0], [66.7, 1000.0], [66.8, 1002.0], [66.9, 1003.0], [67.0, 1006.0], [67.1, 1008.0], [67.2, 1011.0], [67.3, 1013.0], [67.4, 1013.0], [67.5, 1017.0], [67.6, 1019.0], [67.7, 1019.0], [67.8, 1021.0], [67.9, 1021.0], [68.0, 1022.0], [68.1, 1024.0], [68.2, 1025.0], [68.3, 1026.0], [68.4, 1027.0], [68.5, 1028.0], [68.6, 1031.0], [68.7, 1031.0], [68.8, 1034.0], [68.9, 1036.0], [69.0, 1038.0], [69.1, 1041.0], [69.2, 1042.0], [69.3, 1044.0], [69.4, 1046.0], [69.5, 1047.0], [69.6, 1047.0], [69.7, 1048.0], [69.8, 1049.0], [69.9, 1051.0], [70.0, 1055.0], [70.1, 1057.0], [70.2, 1058.0], [70.3, 1060.0], [70.4, 1061.0], [70.5, 1065.0], [70.6, 1067.0], [70.7, 1068.0], [70.8, 1071.0], [70.9, 1075.0], [71.0, 1077.0], [71.1, 1078.0], [71.2, 1080.0], [71.3, 1080.0], [71.4, 1082.0], [71.5, 1083.0], [71.6, 1085.0], [71.7, 1085.0], [71.8, 1087.0], [71.9, 1089.0], [72.0, 1090.0], [72.1, 1092.0], [72.2, 1096.0], [72.3, 1098.0], [72.4, 1099.0], [72.5, 1101.0], [72.6, 1102.0], [72.7, 1103.0], [72.8, 1105.0], [72.9, 1107.0], [73.0, 1108.0], [73.1, 1110.0], [73.2, 1111.0], [73.3, 1113.0], [73.4, 1114.0], [73.5, 1115.0], [73.6, 1118.0], [73.7, 1121.0], [73.8, 1123.0], [73.9, 1126.0], [74.0, 1128.0], [74.1, 1130.0], [74.2, 1132.0], [74.3, 1133.0], [74.4, 1135.0], [74.5, 1137.0], [74.6, 1140.0], [74.7, 1142.0], [74.8, 1144.0], [74.9, 1146.0], [75.0, 1147.0], [75.1, 1148.0], [75.2, 1149.0], [75.3, 1152.0], [75.4, 1153.0], [75.5, 1155.0], [75.6, 1157.0], [75.7, 1160.0], [75.8, 1165.0], [75.9, 1168.0], [76.0, 1171.0], [76.1, 1173.0], [76.2, 1176.0], [76.3, 1177.0], [76.4, 1180.0], [76.5, 1184.0], [76.6, 1185.0], [76.7, 1187.0], [76.8, 1189.0], [76.9, 1192.0], [77.0, 1196.0], [77.1, 1199.0], [77.2, 1201.0], [77.3, 1203.0], [77.4, 1206.0], [77.5, 1207.0], [77.6, 1208.0], [77.7, 1210.0], [77.8, 1212.0], [77.9, 1214.0], [78.0, 1217.0], [78.1, 1218.0], [78.2, 1220.0], [78.3, 1222.0], [78.4, 1224.0], [78.5, 1226.0], [78.6, 1229.0], [78.7, 1233.0], [78.8, 1234.0], [78.9, 1236.0], [79.0, 1239.0], [79.1, 1240.0], [79.2, 1245.0], [79.3, 1248.0], [79.4, 1250.0], [79.5, 1253.0], [79.6, 1254.0], [79.7, 1256.0], [79.8, 1258.0], [79.9, 1259.0], [80.0, 1260.0], [80.1, 1262.0], [80.2, 1265.0], [80.3, 1268.0], [80.4, 1270.0], [80.5, 1272.0], [80.6, 1275.0], [80.7, 1278.0], [80.8, 1280.0], [80.9, 1282.0], [81.0, 1284.0], [81.1, 1287.0], [81.2, 1290.0], [81.3, 1291.0], [81.4, 1293.0], [81.5, 1295.0], [81.6, 1297.0], [81.7, 1298.0], [81.8, 1300.0], [81.9, 1301.0], [82.0, 1305.0], [82.1, 1307.0], [82.2, 1308.0], [82.3, 1310.0], [82.4, 1313.0], [82.5, 1315.0], [82.6, 1317.0], [82.7, 1319.0], [82.8, 1322.0], [82.9, 1324.0], [83.0, 1324.0], [83.1, 1325.0], [83.2, 1328.0], [83.3, 1329.0], [83.4, 1331.0], [83.5, 1333.0], [83.6, 1335.0], [83.7, 1336.0], [83.8, 1339.0], [83.9, 1341.0], [84.0, 1345.0], [84.1, 1349.0], [84.2, 1350.0], [84.3, 1352.0], [84.4, 1354.0], [84.5, 1356.0], [84.6, 1357.0], [84.7, 1359.0], [84.8, 1363.0], [84.9, 1366.0], [85.0, 1367.0], [85.1, 1370.0], [85.2, 1371.0], [85.3, 1373.0], [85.4, 1376.0], [85.5, 1377.0], [85.6, 1382.0], [85.7, 1383.0], [85.8, 1386.0], [85.9, 1389.0], [86.0, 1390.0], [86.1, 1394.0], [86.2, 1398.0], [86.3, 1401.0], [86.4, 1404.0], [86.5, 1406.0], [86.6, 1409.0], [86.7, 1410.0], [86.8, 1413.0], [86.9, 1415.0], [87.0, 1417.0], [87.1, 1420.0], [87.2, 1423.0], [87.3, 1426.0], [87.4, 1428.0], [87.5, 1429.0], [87.6, 1435.0], [87.7, 1439.0], [87.8, 1441.0], [87.9, 1444.0], [88.0, 1449.0], [88.1, 1452.0], [88.2, 1453.0], [88.3, 1455.0], [88.4, 1457.0], [88.5, 1460.0], [88.6, 1462.0], [88.7, 1466.0], [88.8, 1470.0], [88.9, 1472.0], [89.0, 1474.0], [89.1, 1477.0], [89.2, 1480.0], [89.3, 1489.0], [89.4, 1491.0], [89.5, 1498.0], [89.6, 1505.0], [89.7, 1510.0], [89.8, 1515.0], [89.9, 1517.0], [90.0, 1521.0], [90.1, 1525.0], [90.2, 1533.0], [90.3, 1539.0], [90.4, 1542.0], [90.5, 1545.0], [90.6, 1550.0], [90.7, 1551.0], [90.8, 1554.0], [90.9, 1558.0], [91.0, 1566.0], [91.1, 1575.0], [91.2, 1582.0], [91.3, 1592.0], [91.4, 1598.0], [91.5, 1606.0], [91.6, 1613.0], [91.7, 1621.0], [91.8, 1627.0], [91.9, 1630.0], [92.0, 1636.0], [92.1, 1644.0], [92.2, 1655.0], [92.3, 1664.0], [92.4, 1670.0], [92.5, 1684.0], [92.6, 1691.0], [92.7, 1702.0], [92.8, 1707.0], [92.9, 1717.0], [93.0, 1720.0], [93.1, 1725.0], [93.2, 1747.0], [93.3, 1754.0], [93.4, 1762.0], [93.5, 1766.0], [93.6, 1774.0], [93.7, 1783.0], [93.8, 1791.0], [93.9, 1799.0], [94.0, 1807.0], [94.1, 1820.0], [94.2, 1831.0], [94.3, 1840.0], [94.4, 1845.0], [94.5, 1850.0], [94.6, 1870.0], [94.7, 1883.0], [94.8, 1894.0], [94.9, 1899.0], [95.0, 1921.0], [95.1, 1945.0], [95.2, 1957.0], [95.3, 1964.0], [95.4, 1985.0], [95.5, 1996.0], [95.6, 2004.0], [95.7, 2022.0], [95.8, 2033.0], [95.9, 2045.0], [96.0, 2052.0], [96.1, 2072.0], [96.2, 2080.0], [96.3, 2103.0], [96.4, 2111.0], [96.5, 2121.0], [96.6, 2142.0], [96.7, 2161.0], [96.8, 2179.0], [96.9, 2193.0], [97.0, 2205.0], [97.1, 2219.0], [97.2, 2233.0], [97.3, 2250.0], [97.4, 2260.0], [97.5, 2275.0], [97.6, 2299.0], [97.7, 2329.0], [97.8, 2361.0], [97.9, 2387.0], [98.0, 2437.0], [98.1, 2458.0], [98.2, 2485.0], [98.3, 2534.0], [98.4, 2560.0], [98.5, 2609.0], [98.6, 2672.0], [98.7, 2711.0], [98.8, 2838.0], [98.9, 2908.0], [99.0, 2980.0], [99.1, 3116.0], [99.2, 3242.0], [99.3, 3326.0], [99.4, 3449.0], [99.5, 3610.0], [99.6, 3671.0], [99.7, 4145.0], [99.8, 4452.0], [99.9, 5047.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 616.0, "series": [{"data": [[600.0, 407.0], [700.0, 281.0], [800.0, 280.0], [900.0, 306.0], [1000.0, 299.0], [1100.0, 243.0], [1200.0, 239.0], [1300.0, 234.0], [1400.0, 170.0], [1500.0, 99.0], [1600.0, 65.0], [100.0, 123.0], [1700.0, 64.0], [1800.0, 52.0], [1900.0, 32.0], [2000.0, 39.0], [2100.0, 36.0], [2200.0, 33.0], [2300.0, 15.0], [2400.0, 18.0], [2500.0, 13.0], [2600.0, 8.0], [2700.0, 6.0], [2800.0, 4.0], [2900.0, 11.0], [3000.0, 2.0], [3100.0, 4.0], [200.0, 561.0], [3300.0, 5.0], [3200.0, 5.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 6.0], [3800.0, 2.0], [3900.0, 2.0], [4300.0, 2.0], [4100.0, 2.0], [4600.0, 3.0], [4400.0, 2.0], [300.0, 353.0], [4800.0, 1.0], [5000.0, 2.0], [5500.0, 1.0], [5400.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [400.0, 616.0], [500.0, 535.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2988.0, "series": [{"data": [[0.0, 1658.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2988.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 544.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891566265060241, "minX": 1.60218666E12, "maxY": 10.0, "series": [{"data": [[1.60218666E12, 10.0], [1.60218696E12, 10.0], [1.60218702E12, 10.0], [1.60218684E12, 10.0], [1.6021869E12, 10.0], [1.60218672E12, 10.0], [1.60218678E12, 10.0], [1.60218708E12, 9.891566265060241]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218708E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 364.0, "minX": 1.0, "maxY": 2711.0, "series": [{"data": [[8.0, 364.0], [4.0, 600.0], [2.0, 2711.0], [1.0, 2706.0], [9.0, 439.0], [10.0, 858.1287147819371], [5.0, 776.0], [6.0, 1191.0], [3.0, 942.0], [7.0, 803.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 858.6698131381232]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3129.1833333333334, "minX": 1.60218666E12, "maxY": 3710486.3833333333, "series": [{"data": [[1.60218666E12, 2582701.0833333335], [1.60218696E12, 3218995.8833333333], [1.60218702E12, 3211533.2333333334], [1.60218684E12, 3306934.7666666666], [1.6021869E12, 3100317.3333333335], [1.60218672E12, 2944530.316666667], [1.60218678E12, 3710486.3833333333], [1.60218708E12, 1896968.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218666E12, 3649.15], [1.60218696E12, 5476.733333333334], [1.60218702E12, 5768.316666666667], [1.60218684E12, 5242.7], [1.6021869E12, 4569.483333333334], [1.60218672E12, 5179.533333333334], [1.60218678E12, 5568.95], [1.60218708E12, 3129.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218708E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 786.6394736842111, "minX": 1.60218666E12, "maxY": 947.7672583826429, "series": [{"data": [[1.60218666E12, 947.7672583826429], [1.60218696E12, 814.2762803234508], [1.60218702E12, 786.6394736842111], [1.60218684E12, 863.0216138328534], [1.6021869E12, 935.1385826771649], [1.60218672E12, 847.3437499999998], [1.60218678E12, 821.0231607629433], [1.60218708E12, 922.6192771084333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218708E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 785.0934210526317, "minX": 1.60218666E12, "maxY": 945.7593688362912, "series": [{"data": [[1.60218666E12, 945.7593688362912], [1.60218696E12, 812.8463611859833], [1.60218702E12, 785.0934210526317], [1.60218684E12, 861.1123919308351], [1.6021869E12, 933.6173228346462], [1.60218672E12, 845.4957386363641], [1.60218678E12, 818.9059945504092], [1.60218708E12, 920.9469879518073]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218708E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01078167115902964, "minX": 1.60218666E12, "maxY": 0.20710059171597667, "series": [{"data": [[1.60218666E12, 0.20710059171597667], [1.60218696E12, 0.01078167115902964], [1.60218702E12, 0.013157894736842118], [1.60218684E12, 0.01585014409221902], [1.6021869E12, 0.012598425196850394], [1.60218672E12, 0.011363636363636367], [1.60218678E12, 0.012261580381471392], [1.60218708E12, 0.01445783132530119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218708E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60218666E12, "maxY": 5724.0, "series": [{"data": [[1.60218666E12, 5541.0], [1.60218696E12, 4159.0], [1.60218702E12, 3132.0], [1.60218684E12, 4345.0], [1.6021869E12, 5724.0], [1.60218672E12, 4452.0], [1.60218678E12, 2915.0], [1.60218708E12, 3815.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218666E12, 197.57199987888336], [1.60218696E12, 195.0], [1.60218702E12, 185.84899981856347], [1.60218684E12, 188.2549998342991], [1.6021869E12, 197.17199954509735], [1.60218672E12, 196.0349994957447], [1.60218678E12, 193.0], [1.60218708E12, 191.74399990081787]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218666E12, 198.0], [1.60218696E12, 195.0], [1.60218702E12, 186.0], [1.60218684E12, 188.88050006628038], [1.6021869E12, 198.2964000606537], [1.60218672E12, 197.9385002017021], [1.60218678E12, 193.2666000699997], [1.60218708E12, 192.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218666E12, 197.8259999394417], [1.60218696E12, 195.0], [1.60218702E12, 186.0], [1.60218684E12, 188.60249991714954], [1.6021869E12, 198.0419999241829], [1.60218672E12, 197.09249974787235], [1.60218678E12, 193.0], [1.60218708E12, 191.95199995040895]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218666E12, 188.0], [1.60218696E12, 184.0], [1.60218702E12, 178.0], [1.60218684E12, 184.0], [1.6021869E12, 188.0], [1.60218672E12, 186.0], [1.60218678E12, 188.0], [1.60218708E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218666E12, 815.0], [1.60218696E12, 625.5], [1.60218702E12, 615.5], [1.60218684E12, 698.5], [1.6021869E12, 779.0], [1.60218672E12, 674.5], [1.60218678E12, 686.0], [1.60218708E12, 782.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 398.0, "minX": 1.0, "maxY": 2711.0, "series": [{"data": [[3.0, 1807.0], [4.0, 1474.0], [5.0, 882.5], [6.0, 1218.0], [7.0, 1038.0], [8.0, 1064.0], [9.0, 978.0], [10.0, 923.0], [11.0, 773.0], [12.0, 797.0], [13.0, 783.0], [14.0, 660.0], [15.0, 643.5], [1.0, 2711.0], [16.0, 588.5], [17.0, 504.0], [18.0, 498.5], [19.0, 439.0], [20.0, 479.0], [21.0, 448.0], [22.0, 432.0], [23.0, 417.0], [24.0, 435.5], [25.0, 439.0], [26.0, 398.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 473.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 398.0, "minX": 1.0, "maxY": 2706.0, "series": [{"data": [[3.0, 1798.0], [4.0, 1470.5], [5.0, 880.0], [6.0, 1212.0], [7.0, 1036.0], [8.0, 1059.0], [9.0, 976.5], [10.0, 922.0], [11.0, 773.0], [12.0, 791.0], [13.0, 781.0], [14.0, 660.0], [15.0, 642.5], [1.0, 2706.0], [16.0, 588.5], [17.0, 504.0], [18.0, 498.5], [19.0, 439.0], [20.0, 479.0], [21.0, 448.0], [22.0, 432.0], [23.0, 417.0], [24.0, 435.0], [25.0, 439.0], [26.0, 398.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 472.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.75, "minX": 1.60218666E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60218666E12, 8.616666666666667], [1.60218696E12, 12.366666666666667], [1.60218702E12, 12.666666666666666], [1.60218684E12, 11.566666666666666], [1.6021869E12, 10.583333333333334], [1.60218672E12, 11.733333333333333], [1.60218678E12, 12.233333333333333], [1.60218708E12, 6.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218708E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218666E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60218666E12, 8.45], [1.60218696E12, 12.366666666666667], [1.60218702E12, 12.666666666666666], [1.60218684E12, 11.566666666666666], [1.6021869E12, 10.583333333333334], [1.60218672E12, 11.733333333333333], [1.60218678E12, 12.216666666666667], [1.60218708E12, 6.916666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60218678E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218708E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218666E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60218666E12, 8.45], [1.60218696E12, 12.366666666666667], [1.60218702E12, 12.666666666666666], [1.60218684E12, 11.566666666666666], [1.6021869E12, 10.583333333333334], [1.60218672E12, 11.733333333333333], [1.60218678E12, 12.216666666666667], [1.60218708E12, 6.916666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60218678E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218708E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218666E12, "maxY": 12.666666666666666, "series": [{"data": [[1.60218666E12, 8.45], [1.60218696E12, 12.366666666666667], [1.60218702E12, 12.666666666666666], [1.60218684E12, 11.566666666666666], [1.6021869E12, 10.583333333333334], [1.60218672E12, 11.733333333333333], [1.60218678E12, 12.216666666666667], [1.60218708E12, 6.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60218678E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218708E12, "title": "Total Transactions Per Second"}},
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

