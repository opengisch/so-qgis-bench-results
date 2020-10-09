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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 8583.0, "series": [{"data": [[0.0, 183.0], [0.1, 186.0], [0.2, 188.0], [0.3, 189.0], [0.4, 190.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 193.0], [0.9, 193.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 198.0], [1.6, 198.0], [1.7, 199.0], [1.8, 199.0], [1.9, 199.0], [2.0, 200.0], [2.1, 201.0], [2.2, 201.0], [2.3, 202.0], [2.4, 203.0], [2.5, 203.0], [2.6, 204.0], [2.7, 205.0], [2.8, 205.0], [2.9, 206.0], [3.0, 207.0], [3.1, 207.0], [3.2, 208.0], [3.3, 209.0], [3.4, 209.0], [3.5, 210.0], [3.6, 211.0], [3.7, 212.0], [3.8, 212.0], [3.9, 213.0], [4.0, 213.0], [4.1, 214.0], [4.2, 215.0], [4.3, 216.0], [4.4, 216.0], [4.5, 217.0], [4.6, 219.0], [4.7, 220.0], [4.8, 221.0], [4.9, 222.0], [5.0, 222.0], [5.1, 223.0], [5.2, 224.0], [5.3, 225.0], [5.4, 226.0], [5.5, 227.0], [5.6, 227.0], [5.7, 229.0], [5.8, 230.0], [5.9, 231.0], [6.0, 232.0], [6.1, 233.0], [6.2, 233.0], [6.3, 234.0], [6.4, 235.0], [6.5, 235.0], [6.6, 236.0], [6.7, 237.0], [6.8, 238.0], [6.9, 238.0], [7.0, 239.0], [7.1, 240.0], [7.2, 241.0], [7.3, 242.0], [7.4, 244.0], [7.5, 246.0], [7.6, 247.0], [7.7, 247.0], [7.8, 248.0], [7.9, 249.0], [8.0, 252.0], [8.1, 252.0], [8.2, 254.0], [8.3, 256.0], [8.4, 257.0], [8.5, 259.0], [8.6, 261.0], [8.7, 262.0], [8.8, 263.0], [8.9, 264.0], [9.0, 266.0], [9.1, 267.0], [9.2, 269.0], [9.3, 270.0], [9.4, 270.0], [9.5, 271.0], [9.6, 272.0], [9.7, 274.0], [9.8, 274.0], [9.9, 275.0], [10.0, 276.0], [10.1, 276.0], [10.2, 277.0], [10.3, 278.0], [10.4, 279.0], [10.5, 279.0], [10.6, 279.0], [10.7, 280.0], [10.8, 281.0], [10.9, 282.0], [11.0, 283.0], [11.1, 284.0], [11.2, 285.0], [11.3, 286.0], [11.4, 287.0], [11.5, 289.0], [11.6, 289.0], [11.7, 290.0], [11.8, 290.0], [11.9, 290.0], [12.0, 292.0], [12.1, 293.0], [12.2, 293.0], [12.3, 294.0], [12.4, 295.0], [12.5, 297.0], [12.6, 299.0], [12.7, 300.0], [12.8, 301.0], [12.9, 301.0], [13.0, 302.0], [13.1, 303.0], [13.2, 304.0], [13.3, 306.0], [13.4, 306.0], [13.5, 307.0], [13.6, 308.0], [13.7, 309.0], [13.8, 310.0], [13.9, 312.0], [14.0, 314.0], [14.1, 316.0], [14.2, 317.0], [14.3, 320.0], [14.4, 321.0], [14.5, 322.0], [14.6, 324.0], [14.7, 326.0], [14.8, 328.0], [14.9, 329.0], [15.0, 330.0], [15.1, 332.0], [15.2, 334.0], [15.3, 336.0], [15.4, 337.0], [15.5, 339.0], [15.6, 341.0], [15.7, 343.0], [15.8, 344.0], [15.9, 345.0], [16.0, 345.0], [16.1, 348.0], [16.2, 349.0], [16.3, 350.0], [16.4, 351.0], [16.5, 354.0], [16.6, 355.0], [16.7, 357.0], [16.8, 360.0], [16.9, 361.0], [17.0, 363.0], [17.1, 364.0], [17.2, 365.0], [17.3, 368.0], [17.4, 370.0], [17.5, 372.0], [17.6, 373.0], [17.7, 376.0], [17.8, 378.0], [17.9, 379.0], [18.0, 381.0], [18.1, 382.0], [18.2, 384.0], [18.3, 385.0], [18.4, 386.0], [18.5, 387.0], [18.6, 388.0], [18.7, 388.0], [18.8, 389.0], [18.9, 391.0], [19.0, 393.0], [19.1, 394.0], [19.2, 395.0], [19.3, 395.0], [19.4, 397.0], [19.5, 398.0], [19.6, 400.0], [19.7, 401.0], [19.8, 401.0], [19.9, 403.0], [20.0, 403.0], [20.1, 404.0], [20.2, 406.0], [20.3, 408.0], [20.4, 408.0], [20.5, 410.0], [20.6, 412.0], [20.7, 413.0], [20.8, 413.0], [20.9, 414.0], [21.0, 415.0], [21.1, 416.0], [21.2, 416.0], [21.3, 418.0], [21.4, 418.0], [21.5, 419.0], [21.6, 420.0], [21.7, 421.0], [21.8, 422.0], [21.9, 423.0], [22.0, 424.0], [22.1, 425.0], [22.2, 425.0], [22.3, 426.0], [22.4, 427.0], [22.5, 428.0], [22.6, 430.0], [22.7, 430.0], [22.8, 430.0], [22.9, 431.0], [23.0, 432.0], [23.1, 433.0], [23.2, 434.0], [23.3, 435.0], [23.4, 436.0], [23.5, 436.0], [23.6, 437.0], [23.7, 438.0], [23.8, 439.0], [23.9, 439.0], [24.0, 440.0], [24.1, 441.0], [24.2, 442.0], [24.3, 443.0], [24.4, 443.0], [24.5, 444.0], [24.6, 445.0], [24.7, 446.0], [24.8, 447.0], [24.9, 447.0], [25.0, 448.0], [25.1, 449.0], [25.2, 450.0], [25.3, 451.0], [25.4, 451.0], [25.5, 452.0], [25.6, 452.0], [25.7, 453.0], [25.8, 454.0], [25.9, 454.0], [26.0, 455.0], [26.1, 456.0], [26.2, 457.0], [26.3, 458.0], [26.4, 459.0], [26.5, 460.0], [26.6, 461.0], [26.7, 461.0], [26.8, 463.0], [26.9, 463.0], [27.0, 464.0], [27.1, 465.0], [27.2, 466.0], [27.3, 467.0], [27.4, 468.0], [27.5, 469.0], [27.6, 470.0], [27.7, 470.0], [27.8, 471.0], [27.9, 472.0], [28.0, 473.0], [28.1, 474.0], [28.2, 475.0], [28.3, 475.0], [28.4, 476.0], [28.5, 477.0], [28.6, 477.0], [28.7, 478.0], [28.8, 480.0], [28.9, 481.0], [29.0, 482.0], [29.1, 483.0], [29.2, 485.0], [29.3, 486.0], [29.4, 488.0], [29.5, 488.0], [29.6, 489.0], [29.7, 490.0], [29.8, 492.0], [29.9, 492.0], [30.0, 493.0], [30.1, 495.0], [30.2, 496.0], [30.3, 497.0], [30.4, 498.0], [30.5, 499.0], [30.6, 500.0], [30.7, 501.0], [30.8, 503.0], [30.9, 504.0], [31.0, 506.0], [31.1, 507.0], [31.2, 508.0], [31.3, 509.0], [31.4, 510.0], [31.5, 511.0], [31.6, 512.0], [31.7, 513.0], [31.8, 514.0], [31.9, 515.0], [32.0, 516.0], [32.1, 517.0], [32.2, 518.0], [32.3, 519.0], [32.4, 520.0], [32.5, 521.0], [32.6, 522.0], [32.7, 524.0], [32.8, 526.0], [32.9, 526.0], [33.0, 529.0], [33.1, 530.0], [33.2, 530.0], [33.3, 531.0], [33.4, 532.0], [33.5, 533.0], [33.6, 533.0], [33.7, 534.0], [33.8, 535.0], [33.9, 535.0], [34.0, 537.0], [34.1, 538.0], [34.2, 538.0], [34.3, 539.0], [34.4, 540.0], [34.5, 541.0], [34.6, 543.0], [34.7, 544.0], [34.8, 545.0], [34.9, 546.0], [35.0, 547.0], [35.1, 548.0], [35.2, 550.0], [35.3, 551.0], [35.4, 551.0], [35.5, 552.0], [35.6, 552.0], [35.7, 553.0], [35.8, 554.0], [35.9, 555.0], [36.0, 556.0], [36.1, 557.0], [36.2, 559.0], [36.3, 560.0], [36.4, 561.0], [36.5, 561.0], [36.6, 562.0], [36.7, 562.0], [36.8, 563.0], [36.9, 564.0], [37.0, 564.0], [37.1, 566.0], [37.2, 567.0], [37.3, 567.0], [37.4, 569.0], [37.5, 569.0], [37.6, 570.0], [37.7, 571.0], [37.8, 572.0], [37.9, 573.0], [38.0, 574.0], [38.1, 575.0], [38.2, 577.0], [38.3, 578.0], [38.4, 579.0], [38.5, 580.0], [38.6, 581.0], [38.7, 582.0], [38.8, 583.0], [38.9, 583.0], [39.0, 584.0], [39.1, 585.0], [39.2, 586.0], [39.3, 587.0], [39.4, 587.0], [39.5, 588.0], [39.6, 589.0], [39.7, 590.0], [39.8, 591.0], [39.9, 591.0], [40.0, 593.0], [40.1, 594.0], [40.2, 594.0], [40.3, 596.0], [40.4, 596.0], [40.5, 597.0], [40.6, 598.0], [40.7, 599.0], [40.8, 599.0], [40.9, 601.0], [41.0, 602.0], [41.1, 603.0], [41.2, 605.0], [41.3, 605.0], [41.4, 606.0], [41.5, 608.0], [41.6, 609.0], [41.7, 610.0], [41.8, 611.0], [41.9, 612.0], [42.0, 614.0], [42.1, 615.0], [42.2, 617.0], [42.3, 617.0], [42.4, 618.0], [42.5, 619.0], [42.6, 622.0], [42.7, 622.0], [42.8, 624.0], [42.9, 625.0], [43.0, 627.0], [43.1, 629.0], [43.2, 630.0], [43.3, 632.0], [43.4, 632.0], [43.5, 635.0], [43.6, 637.0], [43.7, 638.0], [43.8, 641.0], [43.9, 643.0], [44.0, 644.0], [44.1, 644.0], [44.2, 644.0], [44.3, 645.0], [44.4, 645.0], [44.5, 647.0], [44.6, 648.0], [44.7, 649.0], [44.8, 650.0], [44.9, 651.0], [45.0, 652.0], [45.1, 653.0], [45.2, 655.0], [45.3, 657.0], [45.4, 658.0], [45.5, 658.0], [45.6, 661.0], [45.7, 664.0], [45.8, 665.0], [45.9, 666.0], [46.0, 667.0], [46.1, 669.0], [46.2, 670.0], [46.3, 672.0], [46.4, 673.0], [46.5, 674.0], [46.6, 676.0], [46.7, 678.0], [46.8, 680.0], [46.9, 681.0], [47.0, 683.0], [47.1, 685.0], [47.2, 687.0], [47.3, 687.0], [47.4, 688.0], [47.5, 690.0], [47.6, 692.0], [47.7, 692.0], [47.8, 694.0], [47.9, 695.0], [48.0, 697.0], [48.1, 699.0], [48.2, 701.0], [48.3, 701.0], [48.4, 703.0], [48.5, 704.0], [48.6, 706.0], [48.7, 708.0], [48.8, 709.0], [48.9, 710.0], [49.0, 710.0], [49.1, 712.0], [49.2, 713.0], [49.3, 715.0], [49.4, 717.0], [49.5, 720.0], [49.6, 722.0], [49.7, 724.0], [49.8, 725.0], [49.9, 726.0], [50.0, 727.0], [50.1, 728.0], [50.2, 730.0], [50.3, 731.0], [50.4, 733.0], [50.5, 734.0], [50.6, 735.0], [50.7, 737.0], [50.8, 738.0], [50.9, 741.0], [51.0, 742.0], [51.1, 744.0], [51.2, 745.0], [51.3, 746.0], [51.4, 747.0], [51.5, 749.0], [51.6, 751.0], [51.7, 754.0], [51.8, 755.0], [51.9, 757.0], [52.0, 758.0], [52.1, 759.0], [52.2, 761.0], [52.3, 763.0], [52.4, 765.0], [52.5, 767.0], [52.6, 769.0], [52.7, 771.0], [52.8, 774.0], [52.9, 776.0], [53.0, 777.0], [53.1, 778.0], [53.2, 779.0], [53.3, 780.0], [53.4, 782.0], [53.5, 784.0], [53.6, 786.0], [53.7, 789.0], [53.8, 792.0], [53.9, 795.0], [54.0, 796.0], [54.1, 797.0], [54.2, 799.0], [54.3, 800.0], [54.4, 801.0], [54.5, 803.0], [54.6, 804.0], [54.7, 806.0], [54.8, 808.0], [54.9, 810.0], [55.0, 813.0], [55.1, 813.0], [55.2, 814.0], [55.3, 816.0], [55.4, 817.0], [55.5, 819.0], [55.6, 822.0], [55.7, 823.0], [55.8, 824.0], [55.9, 826.0], [56.0, 828.0], [56.1, 830.0], [56.2, 831.0], [56.3, 832.0], [56.4, 834.0], [56.5, 837.0], [56.6, 838.0], [56.7, 840.0], [56.8, 841.0], [56.9, 842.0], [57.0, 843.0], [57.1, 847.0], [57.2, 851.0], [57.3, 852.0], [57.4, 852.0], [57.5, 854.0], [57.6, 857.0], [57.7, 858.0], [57.8, 861.0], [57.9, 863.0], [58.0, 866.0], [58.1, 868.0], [58.2, 871.0], [58.3, 873.0], [58.4, 874.0], [58.5, 875.0], [58.6, 878.0], [58.7, 880.0], [58.8, 881.0], [58.9, 884.0], [59.0, 885.0], [59.1, 888.0], [59.2, 890.0], [59.3, 891.0], [59.4, 893.0], [59.5, 895.0], [59.6, 900.0], [59.7, 901.0], [59.8, 902.0], [59.9, 903.0], [60.0, 904.0], [60.1, 905.0], [60.2, 906.0], [60.3, 909.0], [60.4, 912.0], [60.5, 914.0], [60.6, 914.0], [60.7, 915.0], [60.8, 917.0], [60.9, 918.0], [61.0, 920.0], [61.1, 921.0], [61.2, 921.0], [61.3, 924.0], [61.4, 925.0], [61.5, 927.0], [61.6, 929.0], [61.7, 932.0], [61.8, 933.0], [61.9, 935.0], [62.0, 937.0], [62.1, 938.0], [62.2, 941.0], [62.3, 944.0], [62.4, 945.0], [62.5, 946.0], [62.6, 948.0], [62.7, 951.0], [62.8, 953.0], [62.9, 957.0], [63.0, 959.0], [63.1, 960.0], [63.2, 962.0], [63.3, 963.0], [63.4, 964.0], [63.5, 965.0], [63.6, 966.0], [63.7, 968.0], [63.8, 970.0], [63.9, 972.0], [64.0, 972.0], [64.1, 973.0], [64.2, 975.0], [64.3, 977.0], [64.4, 980.0], [64.5, 981.0], [64.6, 982.0], [64.7, 984.0], [64.8, 985.0], [64.9, 986.0], [65.0, 989.0], [65.1, 990.0], [65.2, 993.0], [65.3, 996.0], [65.4, 997.0], [65.5, 999.0], [65.6, 1000.0], [65.7, 1003.0], [65.8, 1004.0], [65.9, 1004.0], [66.0, 1005.0], [66.1, 1008.0], [66.2, 1011.0], [66.3, 1012.0], [66.4, 1014.0], [66.5, 1015.0], [66.6, 1017.0], [66.7, 1020.0], [66.8, 1023.0], [66.9, 1024.0], [67.0, 1025.0], [67.1, 1028.0], [67.2, 1030.0], [67.3, 1032.0], [67.4, 1033.0], [67.5, 1035.0], [67.6, 1039.0], [67.7, 1040.0], [67.8, 1042.0], [67.9, 1043.0], [68.0, 1044.0], [68.1, 1045.0], [68.2, 1047.0], [68.3, 1050.0], [68.4, 1052.0], [68.5, 1054.0], [68.6, 1054.0], [68.7, 1056.0], [68.8, 1060.0], [68.9, 1061.0], [69.0, 1062.0], [69.1, 1064.0], [69.2, 1068.0], [69.3, 1071.0], [69.4, 1073.0], [69.5, 1075.0], [69.6, 1076.0], [69.7, 1078.0], [69.8, 1080.0], [69.9, 1081.0], [70.0, 1082.0], [70.1, 1085.0], [70.2, 1087.0], [70.3, 1091.0], [70.4, 1092.0], [70.5, 1093.0], [70.6, 1096.0], [70.7, 1098.0], [70.8, 1100.0], [70.9, 1101.0], [71.0, 1102.0], [71.1, 1104.0], [71.2, 1104.0], [71.3, 1106.0], [71.4, 1107.0], [71.5, 1109.0], [71.6, 1111.0], [71.7, 1113.0], [71.8, 1117.0], [71.9, 1119.0], [72.0, 1121.0], [72.1, 1123.0], [72.2, 1125.0], [72.3, 1128.0], [72.4, 1130.0], [72.5, 1131.0], [72.6, 1133.0], [72.7, 1134.0], [72.8, 1136.0], [72.9, 1137.0], [73.0, 1139.0], [73.1, 1141.0], [73.2, 1142.0], [73.3, 1145.0], [73.4, 1147.0], [73.5, 1149.0], [73.6, 1152.0], [73.7, 1154.0], [73.8, 1155.0], [73.9, 1158.0], [74.0, 1161.0], [74.1, 1162.0], [74.2, 1163.0], [74.3, 1164.0], [74.4, 1168.0], [74.5, 1170.0], [74.6, 1173.0], [74.7, 1175.0], [74.8, 1177.0], [74.9, 1180.0], [75.0, 1183.0], [75.1, 1185.0], [75.2, 1186.0], [75.3, 1189.0], [75.4, 1190.0], [75.5, 1191.0], [75.6, 1195.0], [75.7, 1196.0], [75.8, 1198.0], [75.9, 1200.0], [76.0, 1203.0], [76.1, 1206.0], [76.2, 1208.0], [76.3, 1212.0], [76.4, 1214.0], [76.5, 1216.0], [76.6, 1218.0], [76.7, 1219.0], [76.8, 1221.0], [76.9, 1223.0], [77.0, 1228.0], [77.1, 1230.0], [77.2, 1232.0], [77.3, 1237.0], [77.4, 1239.0], [77.5, 1242.0], [77.6, 1245.0], [77.7, 1246.0], [77.8, 1248.0], [77.9, 1250.0], [78.0, 1252.0], [78.1, 1255.0], [78.2, 1257.0], [78.3, 1258.0], [78.4, 1263.0], [78.5, 1266.0], [78.6, 1268.0], [78.7, 1271.0], [78.8, 1276.0], [78.9, 1278.0], [79.0, 1280.0], [79.1, 1282.0], [79.2, 1285.0], [79.3, 1289.0], [79.4, 1291.0], [79.5, 1295.0], [79.6, 1297.0], [79.7, 1299.0], [79.8, 1302.0], [79.9, 1304.0], [80.0, 1308.0], [80.1, 1308.0], [80.2, 1312.0], [80.3, 1313.0], [80.4, 1314.0], [80.5, 1317.0], [80.6, 1319.0], [80.7, 1323.0], [80.8, 1325.0], [80.9, 1327.0], [81.0, 1329.0], [81.1, 1333.0], [81.2, 1336.0], [81.3, 1338.0], [81.4, 1341.0], [81.5, 1344.0], [81.6, 1346.0], [81.7, 1348.0], [81.8, 1349.0], [81.9, 1351.0], [82.0, 1352.0], [82.1, 1353.0], [82.2, 1355.0], [82.3, 1357.0], [82.4, 1358.0], [82.5, 1359.0], [82.6, 1362.0], [82.7, 1363.0], [82.8, 1366.0], [82.9, 1370.0], [83.0, 1371.0], [83.1, 1373.0], [83.2, 1376.0], [83.3, 1379.0], [83.4, 1381.0], [83.5, 1383.0], [83.6, 1384.0], [83.7, 1385.0], [83.8, 1388.0], [83.9, 1392.0], [84.0, 1392.0], [84.1, 1394.0], [84.2, 1397.0], [84.3, 1400.0], [84.4, 1401.0], [84.5, 1403.0], [84.6, 1404.0], [84.7, 1407.0], [84.8, 1409.0], [84.9, 1412.0], [85.0, 1413.0], [85.1, 1415.0], [85.2, 1418.0], [85.3, 1419.0], [85.4, 1423.0], [85.5, 1425.0], [85.6, 1430.0], [85.7, 1432.0], [85.8, 1434.0], [85.9, 1439.0], [86.0, 1442.0], [86.1, 1446.0], [86.2, 1448.0], [86.3, 1451.0], [86.4, 1453.0], [86.5, 1455.0], [86.6, 1459.0], [86.7, 1461.0], [86.8, 1464.0], [86.9, 1469.0], [87.0, 1471.0], [87.1, 1472.0], [87.2, 1476.0], [87.3, 1480.0], [87.4, 1487.0], [87.5, 1491.0], [87.6, 1492.0], [87.7, 1499.0], [87.8, 1505.0], [87.9, 1507.0], [88.0, 1513.0], [88.1, 1517.0], [88.2, 1519.0], [88.3, 1522.0], [88.4, 1525.0], [88.5, 1530.0], [88.6, 1534.0], [88.7, 1538.0], [88.8, 1540.0], [88.9, 1546.0], [89.0, 1554.0], [89.1, 1559.0], [89.2, 1563.0], [89.3, 1567.0], [89.4, 1572.0], [89.5, 1576.0], [89.6, 1580.0], [89.7, 1586.0], [89.8, 1591.0], [89.9, 1596.0], [90.0, 1599.0], [90.1, 1605.0], [90.2, 1607.0], [90.3, 1615.0], [90.4, 1620.0], [90.5, 1626.0], [90.6, 1629.0], [90.7, 1631.0], [90.8, 1635.0], [90.9, 1639.0], [91.0, 1644.0], [91.1, 1652.0], [91.2, 1662.0], [91.3, 1665.0], [91.4, 1671.0], [91.5, 1678.0], [91.6, 1688.0], [91.7, 1701.0], [91.8, 1706.0], [91.9, 1716.0], [92.0, 1723.0], [92.1, 1731.0], [92.2, 1743.0], [92.3, 1750.0], [92.4, 1760.0], [92.5, 1764.0], [92.6, 1770.0], [92.7, 1786.0], [92.8, 1793.0], [92.9, 1806.0], [93.0, 1817.0], [93.1, 1826.0], [93.2, 1835.0], [93.3, 1845.0], [93.4, 1849.0], [93.5, 1853.0], [93.6, 1859.0], [93.7, 1861.0], [93.8, 1873.0], [93.9, 1882.0], [94.0, 1889.0], [94.1, 1893.0], [94.2, 1898.0], [94.3, 1907.0], [94.4, 1919.0], [94.5, 1922.0], [94.6, 1941.0], [94.7, 1947.0], [94.8, 1953.0], [94.9, 1966.0], [95.0, 1978.0], [95.1, 1985.0], [95.2, 1990.0], [95.3, 2000.0], [95.4, 2004.0], [95.5, 2012.0], [95.6, 2027.0], [95.7, 2036.0], [95.8, 2045.0], [95.9, 2051.0], [96.0, 2058.0], [96.1, 2076.0], [96.2, 2085.0], [96.3, 2097.0], [96.4, 2110.0], [96.5, 2125.0], [96.6, 2134.0], [96.7, 2141.0], [96.8, 2151.0], [96.9, 2164.0], [97.0, 2172.0], [97.1, 2191.0], [97.2, 2199.0], [97.3, 2216.0], [97.4, 2230.0], [97.5, 2241.0], [97.6, 2268.0], [97.7, 2284.0], [97.8, 2292.0], [97.9, 2309.0], [98.0, 2354.0], [98.1, 2384.0], [98.2, 2417.0], [98.3, 2453.0], [98.4, 2483.0], [98.5, 2520.0], [98.6, 2558.0], [98.7, 2665.0], [98.8, 2728.0], [98.9, 2813.0], [99.0, 2935.0], [99.1, 3041.0], [99.2, 3158.0], [99.3, 3233.0], [99.4, 3423.0], [99.5, 3583.0], [99.6, 3879.0], [99.7, 4300.0], [99.8, 4562.0], [99.9, 4994.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 568.0, "series": [{"data": [[600.0, 380.0], [700.0, 320.0], [800.0, 275.0], [900.0, 310.0], [1000.0, 272.0], [1100.0, 264.0], [1200.0, 199.0], [1300.0, 237.0], [1400.0, 178.0], [1500.0, 119.0], [1600.0, 86.0], [1700.0, 61.0], [1800.0, 72.0], [1900.0, 56.0], [2000.0, 54.0], [2100.0, 45.0], [2200.0, 33.0], [2300.0, 14.0], [2400.0, 17.0], [2500.0, 12.0], [2600.0, 3.0], [2800.0, 6.0], [2700.0, 7.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 6.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 3.0], [3800.0, 1.0], [4100.0, 2.0], [4200.0, 2.0], [4300.0, 2.0], [4500.0, 2.0], [4600.0, 2.0], [4400.0, 2.0], [4700.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [6200.0, 1.0], [8500.0, 1.0], [100.0, 99.0], [200.0, 560.0], [300.0, 358.0], [400.0, 568.0], [500.0, 533.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2963.0, "series": [{"data": [[0.0, 1589.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2963.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 638.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.885204081632656, "minX": 1.60218738E12, "maxY": 10.0, "series": [{"data": [[1.60218762E12, 10.0], [1.60218744E12, 10.0], [1.6021875E12, 10.0], [1.6021878E12, 9.885204081632656], [1.60218738E12, 10.0], [1.60218768E12, 10.0], [1.60218774E12, 10.0], [1.60218756E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021878E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 685.0, "minX": 1.0, "maxY": 2435.0, "series": [{"data": [[8.0, 1719.0], [4.0, 1155.0], [2.0, 787.0], [1.0, 2435.0], [9.0, 1607.0], [10.0, 879.5308761096103], [5.0, 685.0], [6.0, 808.0], [3.0, 1208.0], [7.0, 1219.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 880.2450394914276]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2952.55, "minX": 1.60218738E12, "maxY": 3458916.033333333, "series": [{"data": [[1.60218762E12, 2928302.9833333334], [1.60218744E12, 2998117.5166666666], [1.6021875E12, 3458916.033333333], [1.6021878E12, 1736766.0], [1.60218738E12, 3163227.7333333334], [1.60218768E12, 3239545.1666666665], [1.60218774E12, 3246813.283333333], [1.60218756E12, 3201265.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218762E12, 4372.383333333333], [1.60218744E12, 5121.95], [1.6021875E12, 5374.766666666666], [1.6021878E12, 2952.55], [1.60218738E12, 4585.166666666667], [1.60218768E12, 5522.283333333334], [1.60218774E12, 5713.6], [1.60218756E12, 4941.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021878E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 797.7912234042544, "minX": 1.60218738E12, "maxY": 984.4581280788177, "series": [{"data": [[1.60218762E12, 984.4581280788177], [1.60218744E12, 864.1168831168831], [1.6021875E12, 854.2708039492237], [1.6021878E12, 962.0790816326531], [1.60218738E12, 933.4218009478668], [1.60218768E12, 806.8902275769748], [1.60218774E12, 797.7912234042544], [1.60218756E12, 906.4466463414632]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021878E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 796.3497340425532, "minX": 1.60218738E12, "maxY": 982.5665024630536, "series": [{"data": [[1.60218762E12, 982.5665024630536], [1.60218744E12, 862.1024531024525], [1.6021875E12, 852.0479548660097], [1.6021878E12, 960.5331632653059], [1.60218738E12, 931.3902053712478], [1.60218768E12, 804.9973226238285], [1.60218774E12, 796.3497340425532], [1.60218756E12, 904.1402439024384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021878E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007653061224489802, "minX": 1.60218738E12, "maxY": 0.17061611374407606, "series": [{"data": [[1.60218762E12, 0.016420361247947463], [1.60218744E12, 0.024531024531024515], [1.6021875E12, 0.012693935119887182], [1.6021878E12, 0.007653061224489802], [1.60218738E12, 0.17061611374407606], [1.60218768E12, 0.014725568942436413], [1.60218774E12, 0.011968085106382979], [1.60218756E12, 0.018292682926829264]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021878E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60218738E12, "maxY": 8583.0, "series": [{"data": [[1.60218762E12, 8583.0], [1.60218744E12, 4601.0], [1.6021875E12, 3371.0], [1.6021878E12, 3465.0], [1.60218738E12, 6243.0], [1.60218768E12, 2442.0], [1.60218774E12, 2743.0], [1.60218756E12, 4562.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218762E12, 203.48999985456467], [1.60218744E12, 193.0], [1.6021875E12, 195.0], [1.6021878E12, 197.073999812603], [1.60218738E12, 200.70599984884262], [1.60218768E12, 193.0], [1.60218774E12, 190.77699982047082], [1.60218756E12, 187.912999843359]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218762E12, 204.0], [1.60218744E12, 193.0], [1.6021875E12, 195.0191000676155], [1.6021878E12, 197.7814000749588], [1.60218738E12, 202.10640024185182], [1.60218768E12, 193.40520007133483], [1.60218774E12, 191.0], [1.60218756E12, 188.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218762E12, 203.79499992728233], [1.60218744E12, 193.0], [1.6021875E12, 195.0], [1.6021878E12, 197.4669999063015], [1.60218738E12, 201.09199969768525], [1.60218768E12, 193.10599991083146], [1.60218774E12, 191.0], [1.60218756E12, 188.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218762E12, 194.0], [1.60218744E12, 183.0], [1.6021875E12, 189.0], [1.6021878E12, 193.0], [1.60218738E12, 196.0], [1.60218768E12, 187.0], [1.60218774E12, 185.0], [1.60218756E12, 185.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218762E12, 829.0], [1.60218744E12, 654.0], [1.6021875E12, 669.0], [1.6021878E12, 831.0], [1.60218738E12, 799.0], [1.60218768E12, 614.0], [1.60218774E12, 646.5], [1.60218756E12, 758.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021878E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 304.0, "minX": 1.0, "maxY": 2587.0, "series": [{"data": [[3.0, 2587.0], [4.0, 1107.5], [5.0, 1451.0], [6.0, 1152.0], [7.0, 1155.0], [8.0, 1081.5], [9.0, 985.5], [10.0, 968.0], [11.0, 792.5], [12.0, 798.5], [13.0, 671.0], [14.0, 645.5], [15.0, 651.5], [16.0, 558.0], [1.0, 2435.0], [17.0, 494.0], [18.0, 492.5], [19.0, 463.0], [20.0, 304.0], [21.0, 428.0], [22.0, 428.5], [23.0, 469.0], [25.0, 424.0], [26.0, 418.0], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 733.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 304.0, "minX": 1.0, "maxY": 2583.0, "series": [{"data": [[3.0, 2583.0], [4.0, 1104.0], [5.0, 1444.0], [6.0, 1146.0], [7.0, 1154.0], [8.0, 1076.0], [9.0, 984.5], [10.0, 964.0], [11.0, 792.0], [12.0, 797.5], [13.0, 671.0], [14.0, 645.0], [15.0, 651.5], [16.0, 558.0], [1.0, 2426.0], [17.0, 492.0], [18.0, 492.5], [19.0, 463.0], [20.0, 304.0], [21.0, 428.0], [22.0, 428.0], [23.0, 469.0], [25.0, 424.0], [26.0, 418.0], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 733.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60218732E12, "maxY": 12.533333333333333, "series": [{"data": [[1.60218762E12, 10.15], [1.60218744E12, 11.55], [1.6021875E12, 11.816666666666666], [1.6021878E12, 6.366666666666666], [1.60218732E12, 0.05], [1.60218738E12, 10.666666666666666], [1.60218768E12, 12.45], [1.60218774E12, 12.533333333333333], [1.60218756E12, 10.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021878E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218738E12, "maxY": 12.533333333333333, "series": [{"data": [[1.60218762E12, 10.15], [1.60218744E12, 11.55], [1.6021875E12, 11.8], [1.6021878E12, 6.533333333333333], [1.60218738E12, 10.55], [1.60218768E12, 12.45], [1.60218774E12, 12.533333333333333], [1.60218756E12, 10.933333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6021875E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6021878E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218738E12, "maxY": 12.533333333333333, "series": [{"data": [[1.60218762E12, 10.15], [1.60218744E12, 11.55], [1.6021875E12, 11.8], [1.6021878E12, 6.533333333333333], [1.60218738E12, 10.55], [1.60218768E12, 12.45], [1.60218774E12, 12.533333333333333], [1.60218756E12, 10.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6021875E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021878E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218738E12, "maxY": 12.533333333333333, "series": [{"data": [[1.60218762E12, 10.15], [1.60218744E12, 11.55], [1.6021875E12, 11.8], [1.6021878E12, 6.533333333333333], [1.60218738E12, 10.55], [1.60218768E12, 12.45], [1.60218774E12, 12.533333333333333], [1.60218756E12, 10.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6021875E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6021878E12, "title": "Total Transactions Per Second"}},
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

