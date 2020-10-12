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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 6873.0, "series": [{"data": [[0.0, 177.0], [0.1, 186.0], [0.2, 188.0], [0.3, 190.0], [0.4, 193.0], [0.5, 194.0], [0.6, 195.0], [0.7, 197.0], [0.8, 198.0], [0.9, 199.0], [1.0, 199.0], [1.1, 200.0], [1.2, 201.0], [1.3, 201.0], [1.4, 202.0], [1.5, 203.0], [1.6, 204.0], [1.7, 205.0], [1.8, 206.0], [1.9, 208.0], [2.0, 209.0], [2.1, 210.0], [2.2, 212.0], [2.3, 213.0], [2.4, 214.0], [2.5, 215.0], [2.6, 216.0], [2.7, 217.0], [2.8, 217.0], [2.9, 218.0], [3.0, 219.0], [3.1, 220.0], [3.2, 221.0], [3.3, 222.0], [3.4, 223.0], [3.5, 224.0], [3.6, 224.0], [3.7, 225.0], [3.8, 226.0], [3.9, 227.0], [4.0, 227.0], [4.1, 228.0], [4.2, 228.0], [4.3, 229.0], [4.4, 230.0], [4.5, 231.0], [4.6, 231.0], [4.7, 231.0], [4.8, 232.0], [4.9, 232.0], [5.0, 234.0], [5.1, 234.0], [5.2, 235.0], [5.3, 236.0], [5.4, 237.0], [5.5, 238.0], [5.6, 238.0], [5.7, 239.0], [5.8, 240.0], [5.9, 241.0], [6.0, 243.0], [6.1, 244.0], [6.2, 244.0], [6.3, 246.0], [6.4, 247.0], [6.5, 248.0], [6.6, 249.0], [6.7, 250.0], [6.8, 252.0], [6.9, 253.0], [7.0, 254.0], [7.1, 254.0], [7.2, 255.0], [7.3, 256.0], [7.4, 258.0], [7.5, 259.0], [7.6, 260.0], [7.7, 260.0], [7.8, 261.0], [7.9, 263.0], [8.0, 264.0], [8.1, 265.0], [8.2, 267.0], [8.3, 267.0], [8.4, 268.0], [8.5, 269.0], [8.6, 269.0], [8.7, 271.0], [8.8, 272.0], [8.9, 272.0], [9.0, 273.0], [9.1, 274.0], [9.2, 274.0], [9.3, 275.0], [9.4, 276.0], [9.5, 277.0], [9.6, 277.0], [9.7, 278.0], [9.8, 279.0], [9.9, 280.0], [10.0, 280.0], [10.1, 281.0], [10.2, 282.0], [10.3, 284.0], [10.4, 284.0], [10.5, 285.0], [10.6, 286.0], [10.7, 287.0], [10.8, 287.0], [10.9, 288.0], [11.0, 289.0], [11.1, 290.0], [11.2, 291.0], [11.3, 292.0], [11.4, 293.0], [11.5, 294.0], [11.6, 296.0], [11.7, 297.0], [11.8, 297.0], [11.9, 298.0], [12.0, 300.0], [12.1, 301.0], [12.2, 302.0], [12.3, 303.0], [12.4, 304.0], [12.5, 305.0], [12.6, 306.0], [12.7, 307.0], [12.8, 308.0], [12.9, 309.0], [13.0, 310.0], [13.1, 311.0], [13.2, 311.0], [13.3, 313.0], [13.4, 314.0], [13.5, 315.0], [13.6, 316.0], [13.7, 317.0], [13.8, 318.0], [13.9, 320.0], [14.0, 321.0], [14.1, 322.0], [14.2, 322.0], [14.3, 324.0], [14.4, 325.0], [14.5, 326.0], [14.6, 328.0], [14.7, 328.0], [14.8, 329.0], [14.9, 330.0], [15.0, 331.0], [15.1, 332.0], [15.2, 333.0], [15.3, 335.0], [15.4, 336.0], [15.5, 337.0], [15.6, 339.0], [15.7, 340.0], [15.8, 341.0], [15.9, 343.0], [16.0, 345.0], [16.1, 346.0], [16.2, 348.0], [16.3, 350.0], [16.4, 352.0], [16.5, 354.0], [16.6, 355.0], [16.7, 358.0], [16.8, 361.0], [16.9, 362.0], [17.0, 364.0], [17.1, 365.0], [17.2, 367.0], [17.3, 369.0], [17.4, 373.0], [17.5, 374.0], [17.6, 376.0], [17.7, 378.0], [17.8, 379.0], [17.9, 380.0], [18.0, 380.0], [18.1, 381.0], [18.2, 382.0], [18.3, 384.0], [18.4, 384.0], [18.5, 388.0], [18.6, 389.0], [18.7, 390.0], [18.8, 391.0], [18.9, 393.0], [19.0, 394.0], [19.1, 395.0], [19.2, 396.0], [19.3, 396.0], [19.4, 397.0], [19.5, 398.0], [19.6, 399.0], [19.7, 400.0], [19.8, 401.0], [19.9, 402.0], [20.0, 403.0], [20.1, 404.0], [20.2, 405.0], [20.3, 406.0], [20.4, 407.0], [20.5, 408.0], [20.6, 409.0], [20.7, 410.0], [20.8, 411.0], [20.9, 413.0], [21.0, 413.0], [21.1, 414.0], [21.2, 416.0], [21.3, 417.0], [21.4, 418.0], [21.5, 419.0], [21.6, 420.0], [21.7, 421.0], [21.8, 422.0], [21.9, 423.0], [22.0, 425.0], [22.1, 426.0], [22.2, 427.0], [22.3, 428.0], [22.4, 429.0], [22.5, 429.0], [22.6, 430.0], [22.7, 430.0], [22.8, 431.0], [22.9, 432.0], [23.0, 432.0], [23.1, 433.0], [23.2, 434.0], [23.3, 435.0], [23.4, 435.0], [23.5, 436.0], [23.6, 437.0], [23.7, 439.0], [23.8, 440.0], [23.9, 441.0], [24.0, 441.0], [24.1, 442.0], [24.2, 442.0], [24.3, 443.0], [24.4, 445.0], [24.5, 446.0], [24.6, 446.0], [24.7, 447.0], [24.8, 447.0], [24.9, 448.0], [25.0, 448.0], [25.1, 450.0], [25.2, 451.0], [25.3, 452.0], [25.4, 453.0], [25.5, 453.0], [25.6, 453.0], [25.7, 454.0], [25.8, 455.0], [25.9, 455.0], [26.0, 456.0], [26.1, 457.0], [26.2, 457.0], [26.3, 458.0], [26.4, 459.0], [26.5, 460.0], [26.6, 460.0], [26.7, 461.0], [26.8, 461.0], [26.9, 463.0], [27.0, 464.0], [27.1, 465.0], [27.2, 465.0], [27.3, 466.0], [27.4, 466.0], [27.5, 467.0], [27.6, 468.0], [27.7, 468.0], [27.8, 468.0], [27.9, 469.0], [28.0, 470.0], [28.1, 471.0], [28.2, 471.0], [28.3, 472.0], [28.4, 473.0], [28.5, 474.0], [28.6, 475.0], [28.7, 476.0], [28.8, 477.0], [28.9, 477.0], [29.0, 478.0], [29.1, 479.0], [29.2, 480.0], [29.3, 481.0], [29.4, 482.0], [29.5, 483.0], [29.6, 484.0], [29.7, 485.0], [29.8, 486.0], [29.9, 486.0], [30.0, 487.0], [30.1, 489.0], [30.2, 490.0], [30.3, 491.0], [30.4, 491.0], [30.5, 492.0], [30.6, 493.0], [30.7, 494.0], [30.8, 495.0], [30.9, 496.0], [31.0, 497.0], [31.1, 498.0], [31.2, 499.0], [31.3, 500.0], [31.4, 500.0], [31.5, 501.0], [31.6, 501.0], [31.7, 502.0], [31.8, 504.0], [31.9, 505.0], [32.0, 506.0], [32.1, 507.0], [32.2, 508.0], [32.3, 510.0], [32.4, 510.0], [32.5, 511.0], [32.6, 512.0], [32.7, 513.0], [32.8, 513.0], [32.9, 514.0], [33.0, 515.0], [33.1, 515.0], [33.2, 517.0], [33.3, 518.0], [33.4, 519.0], [33.5, 521.0], [33.6, 521.0], [33.7, 522.0], [33.8, 523.0], [33.9, 525.0], [34.0, 525.0], [34.1, 527.0], [34.2, 528.0], [34.3, 530.0], [34.4, 530.0], [34.5, 531.0], [34.6, 532.0], [34.7, 532.0], [34.8, 534.0], [34.9, 535.0], [35.0, 537.0], [35.1, 537.0], [35.2, 538.0], [35.3, 539.0], [35.4, 539.0], [35.5, 540.0], [35.6, 542.0], [35.7, 543.0], [35.8, 543.0], [35.9, 544.0], [36.0, 546.0], [36.1, 547.0], [36.2, 547.0], [36.3, 548.0], [36.4, 549.0], [36.5, 550.0], [36.6, 551.0], [36.7, 552.0], [36.8, 553.0], [36.9, 553.0], [37.0, 554.0], [37.1, 555.0], [37.2, 556.0], [37.3, 557.0], [37.4, 558.0], [37.5, 559.0], [37.6, 559.0], [37.7, 559.0], [37.8, 560.0], [37.9, 562.0], [38.0, 563.0], [38.1, 564.0], [38.2, 565.0], [38.3, 566.0], [38.4, 566.0], [38.5, 567.0], [38.6, 567.0], [38.7, 568.0], [38.8, 570.0], [38.9, 570.0], [39.0, 571.0], [39.1, 573.0], [39.2, 574.0], [39.3, 575.0], [39.4, 576.0], [39.5, 577.0], [39.6, 578.0], [39.7, 580.0], [39.8, 580.0], [39.9, 582.0], [40.0, 582.0], [40.1, 583.0], [40.2, 584.0], [40.3, 584.0], [40.4, 585.0], [40.5, 586.0], [40.6, 586.0], [40.7, 587.0], [40.8, 588.0], [40.9, 589.0], [41.0, 590.0], [41.1, 593.0], [41.2, 593.0], [41.3, 594.0], [41.4, 596.0], [41.5, 597.0], [41.6, 598.0], [41.7, 599.0], [41.8, 599.0], [41.9, 600.0], [42.0, 600.0], [42.1, 601.0], [42.2, 602.0], [42.3, 604.0], [42.4, 605.0], [42.5, 606.0], [42.6, 607.0], [42.7, 608.0], [42.8, 610.0], [42.9, 612.0], [43.0, 613.0], [43.1, 613.0], [43.2, 614.0], [43.3, 616.0], [43.4, 617.0], [43.5, 619.0], [43.6, 619.0], [43.7, 621.0], [43.8, 621.0], [43.9, 622.0], [44.0, 623.0], [44.1, 625.0], [44.2, 627.0], [44.3, 627.0], [44.4, 629.0], [44.5, 630.0], [44.6, 631.0], [44.7, 632.0], [44.8, 633.0], [44.9, 634.0], [45.0, 634.0], [45.1, 635.0], [45.2, 637.0], [45.3, 639.0], [45.4, 641.0], [45.5, 642.0], [45.6, 643.0], [45.7, 643.0], [45.8, 645.0], [45.9, 646.0], [46.0, 647.0], [46.1, 648.0], [46.2, 650.0], [46.3, 651.0], [46.4, 652.0], [46.5, 654.0], [46.6, 654.0], [46.7, 655.0], [46.8, 656.0], [46.9, 658.0], [47.0, 659.0], [47.1, 660.0], [47.2, 660.0], [47.3, 661.0], [47.4, 663.0], [47.5, 664.0], [47.6, 666.0], [47.7, 667.0], [47.8, 671.0], [47.9, 674.0], [48.0, 675.0], [48.1, 676.0], [48.2, 677.0], [48.3, 677.0], [48.4, 679.0], [48.5, 680.0], [48.6, 681.0], [48.7, 683.0], [48.8, 684.0], [48.9, 685.0], [49.0, 686.0], [49.1, 689.0], [49.2, 691.0], [49.3, 691.0], [49.4, 692.0], [49.5, 694.0], [49.6, 695.0], [49.7, 696.0], [49.8, 697.0], [49.9, 698.0], [50.0, 699.0], [50.1, 701.0], [50.2, 703.0], [50.3, 705.0], [50.4, 707.0], [50.5, 708.0], [50.6, 709.0], [50.7, 710.0], [50.8, 712.0], [50.9, 713.0], [51.0, 713.0], [51.1, 715.0], [51.2, 718.0], [51.3, 720.0], [51.4, 721.0], [51.5, 723.0], [51.6, 725.0], [51.7, 727.0], [51.8, 729.0], [51.9, 731.0], [52.0, 733.0], [52.1, 735.0], [52.2, 736.0], [52.3, 737.0], [52.4, 738.0], [52.5, 739.0], [52.6, 742.0], [52.7, 743.0], [52.8, 745.0], [52.9, 746.0], [53.0, 748.0], [53.1, 751.0], [53.2, 752.0], [53.3, 754.0], [53.4, 756.0], [53.5, 759.0], [53.6, 762.0], [53.7, 764.0], [53.8, 765.0], [53.9, 767.0], [54.0, 771.0], [54.1, 773.0], [54.2, 776.0], [54.3, 778.0], [54.4, 779.0], [54.5, 780.0], [54.6, 781.0], [54.7, 783.0], [54.8, 786.0], [54.9, 787.0], [55.0, 789.0], [55.1, 792.0], [55.2, 793.0], [55.3, 795.0], [55.4, 797.0], [55.5, 798.0], [55.6, 800.0], [55.7, 801.0], [55.8, 803.0], [55.9, 804.0], [56.0, 806.0], [56.1, 807.0], [56.2, 809.0], [56.3, 811.0], [56.4, 812.0], [56.5, 814.0], [56.6, 815.0], [56.7, 816.0], [56.8, 819.0], [56.9, 821.0], [57.0, 822.0], [57.1, 823.0], [57.2, 824.0], [57.3, 827.0], [57.4, 828.0], [57.5, 830.0], [57.6, 831.0], [57.7, 833.0], [57.8, 834.0], [57.9, 836.0], [58.0, 838.0], [58.1, 840.0], [58.2, 842.0], [58.3, 843.0], [58.4, 844.0], [58.5, 846.0], [58.6, 847.0], [58.7, 847.0], [58.8, 849.0], [58.9, 850.0], [59.0, 853.0], [59.1, 855.0], [59.2, 856.0], [59.3, 857.0], [59.4, 859.0], [59.5, 860.0], [59.6, 862.0], [59.7, 865.0], [59.8, 866.0], [59.9, 868.0], [60.0, 868.0], [60.1, 872.0], [60.2, 875.0], [60.3, 877.0], [60.4, 879.0], [60.5, 879.0], [60.6, 882.0], [60.7, 884.0], [60.8, 885.0], [60.9, 885.0], [61.0, 887.0], [61.1, 890.0], [61.2, 891.0], [61.3, 892.0], [61.4, 894.0], [61.5, 894.0], [61.6, 898.0], [61.7, 899.0], [61.8, 901.0], [61.9, 903.0], [62.0, 904.0], [62.1, 905.0], [62.2, 908.0], [62.3, 910.0], [62.4, 911.0], [62.5, 913.0], [62.6, 914.0], [62.7, 917.0], [62.8, 920.0], [62.9, 922.0], [63.0, 923.0], [63.1, 926.0], [63.2, 928.0], [63.3, 931.0], [63.4, 932.0], [63.5, 934.0], [63.6, 934.0], [63.7, 937.0], [63.8, 938.0], [63.9, 939.0], [64.0, 941.0], [64.1, 943.0], [64.2, 944.0], [64.3, 945.0], [64.4, 947.0], [64.5, 949.0], [64.6, 949.0], [64.7, 951.0], [64.8, 952.0], [64.9, 954.0], [65.0, 955.0], [65.1, 957.0], [65.2, 958.0], [65.3, 960.0], [65.4, 962.0], [65.5, 963.0], [65.6, 964.0], [65.7, 965.0], [65.8, 967.0], [65.9, 969.0], [66.0, 970.0], [66.1, 972.0], [66.2, 973.0], [66.3, 976.0], [66.4, 978.0], [66.5, 979.0], [66.6, 980.0], [66.7, 981.0], [66.8, 982.0], [66.9, 985.0], [67.0, 985.0], [67.1, 988.0], [67.2, 989.0], [67.3, 991.0], [67.4, 993.0], [67.5, 994.0], [67.6, 995.0], [67.7, 996.0], [67.8, 997.0], [67.9, 999.0], [68.0, 1001.0], [68.1, 1002.0], [68.2, 1004.0], [68.3, 1005.0], [68.4, 1008.0], [68.5, 1009.0], [68.6, 1011.0], [68.7, 1012.0], [68.8, 1013.0], [68.9, 1014.0], [69.0, 1015.0], [69.1, 1017.0], [69.2, 1019.0], [69.3, 1021.0], [69.4, 1023.0], [69.5, 1024.0], [69.6, 1026.0], [69.7, 1027.0], [69.8, 1028.0], [69.9, 1030.0], [70.0, 1031.0], [70.1, 1034.0], [70.2, 1036.0], [70.3, 1039.0], [70.4, 1040.0], [70.5, 1043.0], [70.6, 1048.0], [70.7, 1048.0], [70.8, 1050.0], [70.9, 1053.0], [71.0, 1054.0], [71.1, 1055.0], [71.2, 1058.0], [71.3, 1061.0], [71.4, 1062.0], [71.5, 1066.0], [71.6, 1069.0], [71.7, 1070.0], [71.8, 1071.0], [71.9, 1073.0], [72.0, 1074.0], [72.1, 1075.0], [72.2, 1077.0], [72.3, 1079.0], [72.4, 1080.0], [72.5, 1082.0], [72.6, 1083.0], [72.7, 1086.0], [72.8, 1088.0], [72.9, 1089.0], [73.0, 1091.0], [73.1, 1093.0], [73.2, 1096.0], [73.3, 1098.0], [73.4, 1099.0], [73.5, 1102.0], [73.6, 1103.0], [73.7, 1107.0], [73.8, 1110.0], [73.9, 1111.0], [74.0, 1112.0], [74.1, 1114.0], [74.2, 1116.0], [74.3, 1117.0], [74.4, 1118.0], [74.5, 1120.0], [74.6, 1123.0], [74.7, 1124.0], [74.8, 1127.0], [74.9, 1129.0], [75.0, 1130.0], [75.1, 1133.0], [75.2, 1136.0], [75.3, 1138.0], [75.4, 1142.0], [75.5, 1145.0], [75.6, 1147.0], [75.7, 1151.0], [75.8, 1155.0], [75.9, 1157.0], [76.0, 1159.0], [76.1, 1161.0], [76.2, 1163.0], [76.3, 1165.0], [76.4, 1168.0], [76.5, 1170.0], [76.6, 1173.0], [76.7, 1176.0], [76.8, 1178.0], [76.9, 1181.0], [77.0, 1183.0], [77.1, 1184.0], [77.2, 1187.0], [77.3, 1189.0], [77.4, 1197.0], [77.5, 1201.0], [77.6, 1204.0], [77.7, 1208.0], [77.8, 1211.0], [77.9, 1214.0], [78.0, 1218.0], [78.1, 1220.0], [78.2, 1222.0], [78.3, 1226.0], [78.4, 1230.0], [78.5, 1232.0], [78.6, 1233.0], [78.7, 1235.0], [78.8, 1237.0], [78.9, 1238.0], [79.0, 1244.0], [79.1, 1245.0], [79.2, 1248.0], [79.3, 1250.0], [79.4, 1251.0], [79.5, 1254.0], [79.6, 1258.0], [79.7, 1262.0], [79.8, 1263.0], [79.9, 1265.0], [80.0, 1267.0], [80.1, 1269.0], [80.2, 1270.0], [80.3, 1272.0], [80.4, 1276.0], [80.5, 1277.0], [80.6, 1277.0], [80.7, 1280.0], [80.8, 1281.0], [80.9, 1283.0], [81.0, 1285.0], [81.1, 1289.0], [81.2, 1291.0], [81.3, 1293.0], [81.4, 1295.0], [81.5, 1297.0], [81.6, 1299.0], [81.7, 1301.0], [81.8, 1306.0], [81.9, 1308.0], [82.0, 1311.0], [82.1, 1313.0], [82.2, 1315.0], [82.3, 1318.0], [82.4, 1319.0], [82.5, 1322.0], [82.6, 1324.0], [82.7, 1326.0], [82.8, 1329.0], [82.9, 1330.0], [83.0, 1331.0], [83.1, 1335.0], [83.2, 1338.0], [83.3, 1342.0], [83.4, 1345.0], [83.5, 1348.0], [83.6, 1350.0], [83.7, 1352.0], [83.8, 1355.0], [83.9, 1357.0], [84.0, 1358.0], [84.1, 1360.0], [84.2, 1360.0], [84.3, 1363.0], [84.4, 1367.0], [84.5, 1369.0], [84.6, 1372.0], [84.7, 1374.0], [84.8, 1379.0], [84.9, 1380.0], [85.0, 1382.0], [85.1, 1384.0], [85.2, 1386.0], [85.3, 1387.0], [85.4, 1390.0], [85.5, 1393.0], [85.6, 1396.0], [85.7, 1398.0], [85.8, 1399.0], [85.9, 1401.0], [86.0, 1405.0], [86.1, 1408.0], [86.2, 1415.0], [86.3, 1418.0], [86.4, 1420.0], [86.5, 1422.0], [86.6, 1424.0], [86.7, 1426.0], [86.8, 1430.0], [86.9, 1431.0], [87.0, 1432.0], [87.1, 1435.0], [87.2, 1440.0], [87.3, 1445.0], [87.4, 1447.0], [87.5, 1449.0], [87.6, 1452.0], [87.7, 1459.0], [87.8, 1463.0], [87.9, 1467.0], [88.0, 1476.0], [88.1, 1481.0], [88.2, 1483.0], [88.3, 1487.0], [88.4, 1489.0], [88.5, 1490.0], [88.6, 1492.0], [88.7, 1495.0], [88.8, 1498.0], [88.9, 1500.0], [89.0, 1502.0], [89.1, 1512.0], [89.2, 1519.0], [89.3, 1529.0], [89.4, 1531.0], [89.5, 1536.0], [89.6, 1539.0], [89.7, 1547.0], [89.8, 1552.0], [89.9, 1560.0], [90.0, 1563.0], [90.1, 1566.0], [90.2, 1569.0], [90.3, 1574.0], [90.4, 1576.0], [90.5, 1580.0], [90.6, 1593.0], [90.7, 1596.0], [90.8, 1601.0], [90.9, 1608.0], [91.0, 1611.0], [91.1, 1618.0], [91.2, 1623.0], [91.3, 1626.0], [91.4, 1629.0], [91.5, 1633.0], [91.6, 1640.0], [91.7, 1647.0], [91.8, 1656.0], [91.9, 1664.0], [92.0, 1676.0], [92.1, 1680.0], [92.2, 1688.0], [92.3, 1691.0], [92.4, 1699.0], [92.5, 1702.0], [92.6, 1710.0], [92.7, 1714.0], [92.8, 1720.0], [92.9, 1724.0], [93.0, 1733.0], [93.1, 1735.0], [93.2, 1742.0], [93.3, 1751.0], [93.4, 1758.0], [93.5, 1763.0], [93.6, 1772.0], [93.7, 1780.0], [93.8, 1784.0], [93.9, 1800.0], [94.0, 1804.0], [94.1, 1813.0], [94.2, 1831.0], [94.3, 1854.0], [94.4, 1870.0], [94.5, 1875.0], [94.6, 1895.0], [94.7, 1906.0], [94.8, 1914.0], [94.9, 1920.0], [95.0, 1930.0], [95.1, 1933.0], [95.2, 1938.0], [95.3, 1948.0], [95.4, 1967.0], [95.5, 1973.0], [95.6, 1979.0], [95.7, 1983.0], [95.8, 2000.0], [95.9, 2009.0], [96.0, 2032.0], [96.1, 2049.0], [96.2, 2059.0], [96.3, 2068.0], [96.4, 2085.0], [96.5, 2095.0], [96.6, 2106.0], [96.7, 2116.0], [96.8, 2129.0], [96.9, 2150.0], [97.0, 2158.0], [97.1, 2180.0], [97.2, 2209.0], [97.3, 2232.0], [97.4, 2251.0], [97.5, 2268.0], [97.6, 2289.0], [97.7, 2314.0], [97.8, 2339.0], [97.9, 2376.0], [98.0, 2418.0], [98.1, 2476.0], [98.2, 2499.0], [98.3, 2517.0], [98.4, 2564.0], [98.5, 2612.0], [98.6, 2671.0], [98.7, 2703.0], [98.8, 2750.0], [98.9, 2822.0], [99.0, 2910.0], [99.1, 3078.0], [99.2, 3209.0], [99.3, 3312.0], [99.4, 3373.0], [99.5, 3482.0], [99.6, 3641.0], [99.7, 3904.0], [99.8, 4702.0], [99.9, 5248.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 603.0, "series": [{"data": [[600.0, 423.0], [700.0, 288.0], [800.0, 319.0], [900.0, 323.0], [1000.0, 284.0], [1100.0, 212.0], [1200.0, 214.0], [1300.0, 219.0], [1400.0, 157.0], [1500.0, 100.0], [1600.0, 85.0], [1700.0, 76.0], [1800.0, 39.0], [1900.0, 60.0], [2000.0, 38.0], [2100.0, 32.0], [2200.0, 27.0], [2300.0, 15.0], [2400.0, 13.0], [2500.0, 13.0], [2600.0, 11.0], [2700.0, 9.0], [2800.0, 8.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 8.0], [3200.0, 4.0], [3400.0, 6.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 1.0], [3800.0, 3.0], [3900.0, 2.0], [4300.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5000.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5400.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6800.0, 1.0], [100.0, 54.0], [200.0, 568.0], [300.0, 399.0], [400.0, 603.0], [500.0, 549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 575.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2984.0, "series": [{"data": [[0.0, 1631.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2984.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 575.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.919354838709678, "minX": 1.6024596E12, "maxY": 10.0, "series": [{"data": [[1.6024599E12, 10.0], [1.60245972E12, 10.0], [1.60246002E12, 9.919354838709678], [1.60245984E12, 10.0], [1.60245966E12, 10.0], [1.60245996E12, 10.0], [1.60245978E12, 10.0], [1.6024596E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246002E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 271.0, "minX": 1.0, "maxY": 2815.0, "series": [{"data": [[8.0, 271.0], [4.0, 1311.0], [2.0, 1053.0], [1.0, 2815.0], [9.0, 413.0], [10.0, 860.0386025863737], [5.0, 622.0], [6.0, 1122.0], [3.0, 1250.0], [7.0, 605.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 860.370327552987]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2803.2166666666667, "minX": 1.6024596E12, "maxY": 3867532.7333333334, "series": [{"data": [[1.6024599E12, 2925826.283333333], [1.60245972E12, 3867532.7333333334], [1.60246002E12, 2377284.7666666666], [1.60245984E12, 3301436.0], [1.60245966E12, 2775484.216666667], [1.60245996E12, 3397690.75], [1.60245978E12, 3239569.433333333], [1.6024596E12, 2087511.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024599E12, 5095.666666666667], [1.60245972E12, 5299.0], [1.60246002E12, 4207.866666666667], [1.60245984E12, 4776.55], [1.60245966E12, 5457.45], [1.60245996E12, 5636.15], [1.60245978E12, 5301.433333333333], [1.6024596E12, 2803.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246002E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 803.4770889487874, "minX": 1.6024596E12, "maxY": 1000.0025641025644, "series": [{"data": [[1.6024599E12, 861.8400576368873], [1.60245972E12, 857.7099999999995], [1.60246002E12, 860.098566308243], [1.60245984E12, 917.975720789075], [1.60245966E12, 807.1340482573728], [1.60245996E12, 803.4770889487874], [1.60245978E12, 846.8245363766048], [1.6024596E12, 1000.0025641025644]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246002E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 801.750673854448, "minX": 1.6024596E12, "maxY": 997.6641025641026, "series": [{"data": [[1.6024599E12, 860.233429394813], [1.60245972E12, 855.2042857142866], [1.60246002E12, 858.5053763440861], [1.60245984E12, 915.8937784522005], [1.60245966E12, 805.3927613941014], [1.60245996E12, 801.750673854448], [1.60245978E12, 844.7574893009978], [1.6024596E12, 997.6641025641026]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246002E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012544802867383513, "minX": 1.6024596E12, "maxY": 0.22820512820512812, "series": [{"data": [[1.6024599E12, 0.01585014409221902], [1.60245972E12, 0.0142857142857143], [1.60246002E12, 0.012544802867383513], [1.60245984E12, 0.013657056145675268], [1.60245966E12, 0.018766756032171615], [1.60245996E12, 0.014824797843665772], [1.60245978E12, 0.019971469329529267], [1.6024596E12, 0.22820512820512812]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246002E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.6024596E12, "maxY": 6873.0, "series": [{"data": [[1.6024599E12, 3641.0], [1.60245972E12, 3846.0], [1.60246002E12, 3603.0], [1.60245984E12, 6873.0], [1.60245966E12, 4465.0], [1.60245996E12, 3488.0], [1.60245978E12, 5402.0], [1.6024596E12, 6028.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024599E12, 204.27499917149544], [1.60245972E12, 188.0], [1.60246002E12, 196.0], [1.60245984E12, 207.6999992132187], [1.60245966E12, 200.7229998219013], [1.60245996E12, 198.37399964571], [1.60245978E12, 201.0], [1.6024596E12, 193.51899990677833]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024599E12, 207.40250033140182], [1.60245972E12, 188.0], [1.60246002E12, 196.0], [1.60245984E12, 210.67000031471252], [1.60245966E12, 201.0], [1.60245996E12, 199.0], [1.60245978E12, 201.0], [1.6024596E12, 193.87090003728866]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024599E12, 206.01249958574772], [1.60245972E12, 188.0], [1.60246002E12, 196.0], [1.60245984E12, 209.34999960660934], [1.60245966E12, 201.0], [1.60245996E12, 199.0], [1.60245978E12, 201.0], [1.6024596E12, 193.71449995338918]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024599E12, 197.0], [1.60245972E12, 177.0], [1.60246002E12, 180.0], [1.60245984E12, 199.0], [1.60245966E12, 191.0], [1.60245996E12, 188.0], [1.60245978E12, 197.0], [1.6024596E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024599E12, 694.0], [1.60245972E12, 660.0], [1.60246002E12, 710.5], [1.60245984E12, 786.0], [1.60245966E12, 636.5], [1.60245996E12, 646.0], [1.60245978E12, 683.0], [1.6024596E12, 865.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246002E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 395.5, "minX": 1.0, "maxY": 2859.0, "series": [{"data": [[2.0, 2859.0], [3.0, 692.5], [4.0, 1281.5], [5.0, 1199.5], [6.0, 1085.5], [7.0, 1208.0], [8.0, 1012.5], [9.0, 945.5], [10.0, 926.5], [11.0, 857.0], [12.0, 799.5], [13.0, 707.5], [14.0, 628.0], [15.0, 573.0], [16.0, 557.0], [1.0, 2815.0], [17.0, 500.0], [18.0, 482.5], [19.0, 460.0], [20.0, 514.5], [21.0, 436.0], [22.0, 429.0], [23.0, 442.0], [24.0, 434.5], [25.0, 409.5], [27.0, 439.0], [28.0, 395.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 395.5, "minX": 1.0, "maxY": 2850.5, "series": [{"data": [[2.0, 2850.5], [3.0, 690.5], [4.0, 1269.5], [5.0, 1196.5], [6.0, 1078.0], [7.0, 1199.0], [8.0, 1009.0], [9.0, 942.0], [10.0, 925.0], [11.0, 854.0], [12.0, 796.0], [13.0, 707.0], [14.0, 628.0], [15.0, 571.0], [16.0, 557.0], [1.0, 2803.0], [17.0, 499.0], [18.0, 482.0], [19.0, 460.0], [20.0, 512.5], [21.0, 435.0], [22.0, 429.0], [23.0, 442.0], [24.0, 434.5], [25.0, 409.0], [27.0, 439.0], [28.0, 395.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6024596E12, "maxY": 12.433333333333334, "series": [{"data": [[1.6024599E12, 11.566666666666666], [1.60245972E12, 11.666666666666666], [1.60246002E12, 9.133333333333333], [1.60245984E12, 10.983333333333333], [1.60245966E12, 12.433333333333334], [1.60245996E12, 12.366666666666667], [1.60245978E12, 11.683333333333334], [1.6024596E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246002E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.6024596E12, "maxY": 12.433333333333334, "series": [{"data": [[1.6024599E12, 11.566666666666666], [1.60245972E12, 11.666666666666666], [1.60246002E12, 9.3], [1.60245984E12, 10.983333333333333], [1.60245966E12, 12.433333333333334], [1.60245996E12, 12.366666666666667], [1.60245978E12, 11.683333333333334], [1.6024596E12, 6.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246002E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.6024596E12, "maxY": 12.433333333333334, "series": [{"data": [[1.6024599E12, 11.566666666666666], [1.60245972E12, 11.666666666666666], [1.60246002E12, 9.3], [1.60245984E12, 10.983333333333333], [1.60245966E12, 12.433333333333334], [1.60245996E12, 12.366666666666667], [1.60245978E12, 11.683333333333334], [1.6024596E12, 6.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246002E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.6024596E12, "maxY": 12.433333333333334, "series": [{"data": [[1.6024599E12, 11.566666666666666], [1.60245972E12, 11.666666666666666], [1.60246002E12, 9.3], [1.60245984E12, 10.983333333333333], [1.60245966E12, 12.433333333333334], [1.60245996E12, 12.366666666666667], [1.60245978E12, 11.683333333333334], [1.6024596E12, 6.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246002E12, "title": "Total Transactions Per Second"}},
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

