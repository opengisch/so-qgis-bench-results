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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 5778.0, "series": [{"data": [[0.0, 181.0], [0.1, 188.0], [0.2, 191.0], [0.3, 193.0], [0.4, 194.0], [0.5, 195.0], [0.6, 196.0], [0.7, 197.0], [0.8, 198.0], [0.9, 198.0], [1.0, 200.0], [1.1, 200.0], [1.2, 201.0], [1.3, 201.0], [1.4, 202.0], [1.5, 203.0], [1.6, 204.0], [1.7, 204.0], [1.8, 205.0], [1.9, 206.0], [2.0, 206.0], [2.1, 207.0], [2.2, 208.0], [2.3, 209.0], [2.4, 210.0], [2.5, 211.0], [2.6, 212.0], [2.7, 213.0], [2.8, 214.0], [2.9, 214.0], [3.0, 215.0], [3.1, 216.0], [3.2, 216.0], [3.3, 217.0], [3.4, 218.0], [3.5, 219.0], [3.6, 220.0], [3.7, 220.0], [3.8, 221.0], [3.9, 222.0], [4.0, 222.0], [4.1, 223.0], [4.2, 223.0], [4.3, 224.0], [4.4, 226.0], [4.5, 226.0], [4.6, 227.0], [4.7, 229.0], [4.8, 229.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 233.0], [5.4, 234.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 238.0], [6.0, 239.0], [6.1, 240.0], [6.2, 240.0], [6.3, 242.0], [6.4, 243.0], [6.5, 244.0], [6.6, 246.0], [6.7, 247.0], [6.8, 247.0], [6.9, 249.0], [7.0, 250.0], [7.1, 251.0], [7.2, 253.0], [7.3, 255.0], [7.4, 257.0], [7.5, 257.0], [7.6, 258.0], [7.7, 260.0], [7.8, 262.0], [7.9, 263.0], [8.0, 265.0], [8.1, 266.0], [8.2, 267.0], [8.3, 269.0], [8.4, 270.0], [8.5, 270.0], [8.6, 271.0], [8.7, 272.0], [8.8, 273.0], [8.9, 273.0], [9.0, 274.0], [9.1, 275.0], [9.2, 275.0], [9.3, 276.0], [9.4, 277.0], [9.5, 278.0], [9.6, 279.0], [9.7, 280.0], [9.8, 281.0], [9.9, 282.0], [10.0, 282.0], [10.1, 283.0], [10.2, 285.0], [10.3, 286.0], [10.4, 286.0], [10.5, 287.0], [10.6, 288.0], [10.7, 289.0], [10.8, 290.0], [10.9, 290.0], [11.0, 291.0], [11.1, 293.0], [11.2, 293.0], [11.3, 294.0], [11.4, 295.0], [11.5, 296.0], [11.6, 297.0], [11.7, 298.0], [11.8, 299.0], [11.9, 301.0], [12.0, 302.0], [12.1, 302.0], [12.2, 304.0], [12.3, 305.0], [12.4, 305.0], [12.5, 306.0], [12.6, 307.0], [12.7, 308.0], [12.8, 309.0], [12.9, 311.0], [13.0, 311.0], [13.1, 312.0], [13.2, 312.0], [13.3, 313.0], [13.4, 314.0], [13.5, 315.0], [13.6, 315.0], [13.7, 317.0], [13.8, 317.0], [13.9, 320.0], [14.0, 320.0], [14.1, 321.0], [14.2, 322.0], [14.3, 323.0], [14.4, 324.0], [14.5, 324.0], [14.6, 326.0], [14.7, 328.0], [14.8, 330.0], [14.9, 330.0], [15.0, 332.0], [15.1, 334.0], [15.2, 335.0], [15.3, 337.0], [15.4, 338.0], [15.5, 340.0], [15.6, 342.0], [15.7, 343.0], [15.8, 344.0], [15.9, 345.0], [16.0, 346.0], [16.1, 347.0], [16.2, 348.0], [16.3, 348.0], [16.4, 350.0], [16.5, 353.0], [16.6, 353.0], [16.7, 355.0], [16.8, 357.0], [16.9, 361.0], [17.0, 365.0], [17.1, 366.0], [17.2, 368.0], [17.3, 371.0], [17.4, 372.0], [17.5, 373.0], [17.6, 375.0], [17.7, 376.0], [17.8, 377.0], [17.9, 378.0], [18.0, 380.0], [18.1, 381.0], [18.2, 382.0], [18.3, 383.0], [18.4, 384.0], [18.5, 385.0], [18.6, 386.0], [18.7, 387.0], [18.8, 387.0], [18.9, 388.0], [19.0, 390.0], [19.1, 390.0], [19.2, 391.0], [19.3, 393.0], [19.4, 393.0], [19.5, 394.0], [19.6, 395.0], [19.7, 395.0], [19.8, 396.0], [19.9, 397.0], [20.0, 398.0], [20.1, 398.0], [20.2, 399.0], [20.3, 400.0], [20.4, 401.0], [20.5, 402.0], [20.6, 404.0], [20.7, 404.0], [20.8, 406.0], [20.9, 406.0], [21.0, 407.0], [21.1, 409.0], [21.2, 409.0], [21.3, 410.0], [21.4, 411.0], [21.5, 411.0], [21.6, 412.0], [21.7, 413.0], [21.8, 414.0], [21.9, 416.0], [22.0, 418.0], [22.1, 419.0], [22.2, 421.0], [22.3, 421.0], [22.4, 422.0], [22.5, 423.0], [22.6, 423.0], [22.7, 424.0], [22.8, 425.0], [22.9, 425.0], [23.0, 427.0], [23.1, 428.0], [23.2, 428.0], [23.3, 428.0], [23.4, 429.0], [23.5, 430.0], [23.6, 431.0], [23.7, 432.0], [23.8, 433.0], [23.9, 434.0], [24.0, 435.0], [24.1, 436.0], [24.2, 437.0], [24.3, 437.0], [24.4, 439.0], [24.5, 440.0], [24.6, 441.0], [24.7, 442.0], [24.8, 443.0], [24.9, 443.0], [25.0, 444.0], [25.1, 446.0], [25.2, 447.0], [25.3, 447.0], [25.4, 448.0], [25.5, 450.0], [25.6, 450.0], [25.7, 451.0], [25.8, 452.0], [25.9, 452.0], [26.0, 453.0], [26.1, 454.0], [26.2, 456.0], [26.3, 457.0], [26.4, 458.0], [26.5, 459.0], [26.6, 460.0], [26.7, 461.0], [26.8, 461.0], [26.9, 462.0], [27.0, 464.0], [27.1, 464.0], [27.2, 465.0], [27.3, 465.0], [27.4, 466.0], [27.5, 467.0], [27.6, 469.0], [27.7, 470.0], [27.8, 471.0], [27.9, 473.0], [28.0, 474.0], [28.1, 475.0], [28.2, 475.0], [28.3, 476.0], [28.4, 477.0], [28.5, 478.0], [28.6, 478.0], [28.7, 479.0], [28.8, 481.0], [28.9, 482.0], [29.0, 484.0], [29.1, 485.0], [29.2, 486.0], [29.3, 486.0], [29.4, 486.0], [29.5, 487.0], [29.6, 488.0], [29.7, 489.0], [29.8, 489.0], [29.9, 490.0], [30.0, 492.0], [30.1, 493.0], [30.2, 494.0], [30.3, 495.0], [30.4, 496.0], [30.5, 497.0], [30.6, 498.0], [30.7, 499.0], [30.8, 500.0], [30.9, 503.0], [31.0, 504.0], [31.1, 505.0], [31.2, 505.0], [31.3, 507.0], [31.4, 508.0], [31.5, 509.0], [31.6, 510.0], [31.7, 512.0], [31.8, 512.0], [31.9, 513.0], [32.0, 514.0], [32.1, 515.0], [32.2, 517.0], [32.3, 518.0], [32.4, 520.0], [32.5, 520.0], [32.6, 522.0], [32.7, 524.0], [32.8, 525.0], [32.9, 526.0], [33.0, 528.0], [33.1, 529.0], [33.2, 530.0], [33.3, 531.0], [33.4, 532.0], [33.5, 532.0], [33.6, 533.0], [33.7, 535.0], [33.8, 536.0], [33.9, 536.0], [34.0, 537.0], [34.1, 538.0], [34.2, 538.0], [34.3, 540.0], [34.4, 541.0], [34.5, 543.0], [34.6, 544.0], [34.7, 546.0], [34.8, 548.0], [34.9, 548.0], [35.0, 549.0], [35.1, 550.0], [35.2, 551.0], [35.3, 552.0], [35.4, 553.0], [35.5, 553.0], [35.6, 554.0], [35.7, 554.0], [35.8, 555.0], [35.9, 556.0], [36.0, 556.0], [36.1, 557.0], [36.2, 559.0], [36.3, 559.0], [36.4, 560.0], [36.5, 561.0], [36.6, 562.0], [36.7, 563.0], [36.8, 564.0], [36.9, 565.0], [37.0, 565.0], [37.1, 566.0], [37.2, 567.0], [37.3, 568.0], [37.4, 569.0], [37.5, 570.0], [37.6, 571.0], [37.7, 571.0], [37.8, 571.0], [37.9, 573.0], [38.0, 574.0], [38.1, 574.0], [38.2, 575.0], [38.3, 575.0], [38.4, 577.0], [38.5, 578.0], [38.6, 579.0], [38.7, 579.0], [38.8, 581.0], [38.9, 582.0], [39.0, 582.0], [39.1, 583.0], [39.2, 584.0], [39.3, 585.0], [39.4, 586.0], [39.5, 587.0], [39.6, 587.0], [39.7, 588.0], [39.8, 590.0], [39.9, 591.0], [40.0, 592.0], [40.1, 593.0], [40.2, 594.0], [40.3, 595.0], [40.4, 596.0], [40.5, 597.0], [40.6, 597.0], [40.7, 598.0], [40.8, 600.0], [40.9, 601.0], [41.0, 602.0], [41.1, 603.0], [41.2, 605.0], [41.3, 608.0], [41.4, 608.0], [41.5, 610.0], [41.6, 611.0], [41.7, 612.0], [41.8, 613.0], [41.9, 613.0], [42.0, 615.0], [42.1, 616.0], [42.2, 616.0], [42.3, 618.0], [42.4, 619.0], [42.5, 621.0], [42.6, 623.0], [42.7, 624.0], [42.8, 625.0], [42.9, 627.0], [43.0, 628.0], [43.1, 630.0], [43.2, 631.0], [43.3, 632.0], [43.4, 633.0], [43.5, 634.0], [43.6, 636.0], [43.7, 638.0], [43.8, 639.0], [43.9, 639.0], [44.0, 640.0], [44.1, 641.0], [44.2, 642.0], [44.3, 643.0], [44.4, 645.0], [44.5, 645.0], [44.6, 648.0], [44.7, 649.0], [44.8, 651.0], [44.9, 653.0], [45.0, 653.0], [45.1, 654.0], [45.2, 655.0], [45.3, 656.0], [45.4, 659.0], [45.5, 661.0], [45.6, 663.0], [45.7, 664.0], [45.8, 666.0], [45.9, 668.0], [46.0, 669.0], [46.1, 670.0], [46.2, 673.0], [46.3, 675.0], [46.4, 676.0], [46.5, 679.0], [46.6, 680.0], [46.7, 682.0], [46.8, 684.0], [46.9, 684.0], [47.0, 685.0], [47.1, 687.0], [47.2, 688.0], [47.3, 689.0], [47.4, 690.0], [47.5, 691.0], [47.6, 691.0], [47.7, 693.0], [47.8, 695.0], [47.9, 696.0], [48.0, 698.0], [48.1, 699.0], [48.2, 701.0], [48.3, 703.0], [48.4, 703.0], [48.5, 707.0], [48.6, 708.0], [48.7, 710.0], [48.8, 711.0], [48.9, 712.0], [49.0, 713.0], [49.1, 716.0], [49.2, 717.0], [49.3, 717.0], [49.4, 718.0], [49.5, 720.0], [49.6, 721.0], [49.7, 723.0], [49.8, 725.0], [49.9, 726.0], [50.0, 728.0], [50.1, 730.0], [50.2, 731.0], [50.3, 733.0], [50.4, 734.0], [50.5, 735.0], [50.6, 737.0], [50.7, 738.0], [50.8, 740.0], [50.9, 741.0], [51.0, 744.0], [51.1, 745.0], [51.2, 747.0], [51.3, 749.0], [51.4, 751.0], [51.5, 751.0], [51.6, 752.0], [51.7, 754.0], [51.8, 755.0], [51.9, 757.0], [52.0, 758.0], [52.1, 760.0], [52.2, 762.0], [52.3, 766.0], [52.4, 768.0], [52.5, 770.0], [52.6, 771.0], [52.7, 773.0], [52.8, 774.0], [52.9, 776.0], [53.0, 777.0], [53.1, 779.0], [53.2, 782.0], [53.3, 785.0], [53.4, 787.0], [53.5, 789.0], [53.6, 791.0], [53.7, 792.0], [53.8, 793.0], [53.9, 794.0], [54.0, 796.0], [54.1, 798.0], [54.2, 800.0], [54.3, 803.0], [54.4, 805.0], [54.5, 808.0], [54.6, 809.0], [54.7, 810.0], [54.8, 813.0], [54.9, 815.0], [55.0, 816.0], [55.1, 818.0], [55.2, 819.0], [55.3, 819.0], [55.4, 821.0], [55.5, 823.0], [55.6, 824.0], [55.7, 827.0], [55.8, 829.0], [55.9, 830.0], [56.0, 832.0], [56.1, 833.0], [56.2, 837.0], [56.3, 838.0], [56.4, 839.0], [56.5, 841.0], [56.6, 843.0], [56.7, 845.0], [56.8, 846.0], [56.9, 848.0], [57.0, 848.0], [57.1, 851.0], [57.2, 852.0], [57.3, 853.0], [57.4, 855.0], [57.5, 856.0], [57.6, 857.0], [57.7, 858.0], [57.8, 859.0], [57.9, 861.0], [58.0, 862.0], [58.1, 864.0], [58.2, 866.0], [58.3, 869.0], [58.4, 870.0], [58.5, 872.0], [58.6, 874.0], [58.7, 876.0], [58.8, 877.0], [58.9, 877.0], [59.0, 879.0], [59.1, 879.0], [59.2, 881.0], [59.3, 883.0], [59.4, 884.0], [59.5, 886.0], [59.6, 888.0], [59.7, 890.0], [59.8, 891.0], [59.9, 893.0], [60.0, 896.0], [60.1, 898.0], [60.2, 899.0], [60.3, 900.0], [60.4, 901.0], [60.5, 902.0], [60.6, 905.0], [60.7, 906.0], [60.8, 908.0], [60.9, 910.0], [61.0, 912.0], [61.1, 913.0], [61.2, 913.0], [61.3, 915.0], [61.4, 915.0], [61.5, 918.0], [61.6, 920.0], [61.7, 921.0], [61.8, 923.0], [61.9, 925.0], [62.0, 928.0], [62.1, 929.0], [62.2, 931.0], [62.3, 932.0], [62.4, 934.0], [62.5, 935.0], [62.6, 937.0], [62.7, 938.0], [62.8, 941.0], [62.9, 943.0], [63.0, 944.0], [63.1, 945.0], [63.2, 947.0], [63.3, 948.0], [63.4, 950.0], [63.5, 951.0], [63.6, 952.0], [63.7, 954.0], [63.8, 956.0], [63.9, 957.0], [64.0, 958.0], [64.1, 960.0], [64.2, 961.0], [64.3, 965.0], [64.4, 966.0], [64.5, 969.0], [64.6, 971.0], [64.7, 973.0], [64.8, 975.0], [64.9, 976.0], [65.0, 978.0], [65.1, 980.0], [65.2, 983.0], [65.3, 985.0], [65.4, 987.0], [65.5, 990.0], [65.6, 991.0], [65.7, 992.0], [65.8, 995.0], [65.9, 996.0], [66.0, 999.0], [66.1, 999.0], [66.2, 1001.0], [66.3, 1002.0], [66.4, 1004.0], [66.5, 1006.0], [66.6, 1007.0], [66.7, 1009.0], [66.8, 1011.0], [66.9, 1013.0], [67.0, 1014.0], [67.1, 1017.0], [67.2, 1020.0], [67.3, 1022.0], [67.4, 1024.0], [67.5, 1026.0], [67.6, 1027.0], [67.7, 1029.0], [67.8, 1031.0], [67.9, 1032.0], [68.0, 1034.0], [68.1, 1036.0], [68.2, 1038.0], [68.3, 1040.0], [68.4, 1042.0], [68.5, 1043.0], [68.6, 1044.0], [68.7, 1047.0], [68.8, 1050.0], [68.9, 1052.0], [69.0, 1055.0], [69.1, 1058.0], [69.2, 1059.0], [69.3, 1062.0], [69.4, 1063.0], [69.5, 1064.0], [69.6, 1066.0], [69.7, 1069.0], [69.8, 1070.0], [69.9, 1072.0], [70.0, 1074.0], [70.1, 1077.0], [70.2, 1079.0], [70.3, 1080.0], [70.4, 1082.0], [70.5, 1083.0], [70.6, 1085.0], [70.7, 1086.0], [70.8, 1087.0], [70.9, 1090.0], [71.0, 1091.0], [71.1, 1092.0], [71.2, 1096.0], [71.3, 1098.0], [71.4, 1100.0], [71.5, 1102.0], [71.6, 1104.0], [71.7, 1106.0], [71.8, 1107.0], [71.9, 1109.0], [72.0, 1110.0], [72.1, 1113.0], [72.2, 1115.0], [72.3, 1117.0], [72.4, 1119.0], [72.5, 1121.0], [72.6, 1123.0], [72.7, 1126.0], [72.8, 1127.0], [72.9, 1131.0], [73.0, 1133.0], [73.1, 1135.0], [73.2, 1135.0], [73.3, 1137.0], [73.4, 1140.0], [73.5, 1141.0], [73.6, 1142.0], [73.7, 1144.0], [73.8, 1146.0], [73.9, 1147.0], [74.0, 1149.0], [74.1, 1151.0], [74.2, 1153.0], [74.3, 1157.0], [74.4, 1158.0], [74.5, 1160.0], [74.6, 1163.0], [74.7, 1167.0], [74.8, 1171.0], [74.9, 1172.0], [75.0, 1174.0], [75.1, 1177.0], [75.2, 1180.0], [75.3, 1183.0], [75.4, 1185.0], [75.5, 1186.0], [75.6, 1188.0], [75.7, 1189.0], [75.8, 1192.0], [75.9, 1196.0], [76.0, 1199.0], [76.1, 1204.0], [76.2, 1206.0], [76.3, 1207.0], [76.4, 1210.0], [76.5, 1213.0], [76.6, 1216.0], [76.7, 1218.0], [76.8, 1220.0], [76.9, 1223.0], [77.0, 1225.0], [77.1, 1228.0], [77.2, 1230.0], [77.3, 1232.0], [77.4, 1235.0], [77.5, 1240.0], [77.6, 1242.0], [77.7, 1244.0], [77.8, 1248.0], [77.9, 1250.0], [78.0, 1256.0], [78.1, 1260.0], [78.2, 1263.0], [78.3, 1265.0], [78.4, 1268.0], [78.5, 1271.0], [78.6, 1272.0], [78.7, 1274.0], [78.8, 1276.0], [78.9, 1278.0], [79.0, 1283.0], [79.1, 1287.0], [79.2, 1292.0], [79.3, 1293.0], [79.4, 1295.0], [79.5, 1297.0], [79.6, 1300.0], [79.7, 1301.0], [79.8, 1304.0], [79.9, 1305.0], [80.0, 1306.0], [80.1, 1308.0], [80.2, 1309.0], [80.3, 1312.0], [80.4, 1314.0], [80.5, 1315.0], [80.6, 1317.0], [80.7, 1320.0], [80.8, 1322.0], [80.9, 1323.0], [81.0, 1325.0], [81.1, 1326.0], [81.2, 1328.0], [81.3, 1329.0], [81.4, 1330.0], [81.5, 1331.0], [81.6, 1334.0], [81.7, 1336.0], [81.8, 1337.0], [81.9, 1340.0], [82.0, 1341.0], [82.1, 1342.0], [82.2, 1345.0], [82.3, 1346.0], [82.4, 1348.0], [82.5, 1351.0], [82.6, 1352.0], [82.7, 1356.0], [82.8, 1359.0], [82.9, 1360.0], [83.0, 1361.0], [83.1, 1365.0], [83.2, 1370.0], [83.3, 1377.0], [83.4, 1378.0], [83.5, 1382.0], [83.6, 1383.0], [83.7, 1386.0], [83.8, 1388.0], [83.9, 1390.0], [84.0, 1392.0], [84.1, 1396.0], [84.2, 1399.0], [84.3, 1402.0], [84.4, 1405.0], [84.5, 1408.0], [84.6, 1411.0], [84.7, 1413.0], [84.8, 1416.0], [84.9, 1418.0], [85.0, 1421.0], [85.1, 1423.0], [85.2, 1427.0], [85.3, 1430.0], [85.4, 1433.0], [85.5, 1437.0], [85.6, 1440.0], [85.7, 1444.0], [85.8, 1446.0], [85.9, 1449.0], [86.0, 1451.0], [86.1, 1453.0], [86.2, 1457.0], [86.3, 1460.0], [86.4, 1462.0], [86.5, 1465.0], [86.6, 1467.0], [86.7, 1469.0], [86.8, 1474.0], [86.9, 1478.0], [87.0, 1480.0], [87.1, 1482.0], [87.2, 1486.0], [87.3, 1488.0], [87.4, 1492.0], [87.5, 1496.0], [87.6, 1502.0], [87.7, 1504.0], [87.8, 1506.0], [87.9, 1511.0], [88.0, 1514.0], [88.1, 1515.0], [88.2, 1520.0], [88.3, 1526.0], [88.4, 1531.0], [88.5, 1534.0], [88.6, 1536.0], [88.7, 1539.0], [88.8, 1543.0], [88.9, 1549.0], [89.0, 1554.0], [89.1, 1557.0], [89.2, 1560.0], [89.3, 1562.0], [89.4, 1569.0], [89.5, 1575.0], [89.6, 1578.0], [89.7, 1582.0], [89.8, 1591.0], [89.9, 1593.0], [90.0, 1596.0], [90.1, 1602.0], [90.2, 1608.0], [90.3, 1612.0], [90.4, 1617.0], [90.5, 1621.0], [90.6, 1631.0], [90.7, 1635.0], [90.8, 1651.0], [90.9, 1654.0], [91.0, 1658.0], [91.1, 1665.0], [91.2, 1671.0], [91.3, 1675.0], [91.4, 1683.0], [91.5, 1690.0], [91.6, 1697.0], [91.7, 1699.0], [91.8, 1708.0], [91.9, 1714.0], [92.0, 1728.0], [92.1, 1737.0], [92.2, 1744.0], [92.3, 1754.0], [92.4, 1760.0], [92.5, 1765.0], [92.6, 1772.0], [92.7, 1786.0], [92.8, 1791.0], [92.9, 1796.0], [93.0, 1800.0], [93.1, 1811.0], [93.2, 1823.0], [93.3, 1832.0], [93.4, 1836.0], [93.5, 1855.0], [93.6, 1861.0], [93.7, 1872.0], [93.8, 1885.0], [93.9, 1891.0], [94.0, 1896.0], [94.1, 1903.0], [94.2, 1907.0], [94.3, 1915.0], [94.4, 1928.0], [94.5, 1934.0], [94.6, 1939.0], [94.7, 1946.0], [94.8, 1956.0], [94.9, 1967.0], [95.0, 1977.0], [95.1, 1992.0], [95.2, 2014.0], [95.3, 2037.0], [95.4, 2040.0], [95.5, 2049.0], [95.6, 2055.0], [95.7, 2065.0], [95.8, 2077.0], [95.9, 2090.0], [96.0, 2108.0], [96.1, 2122.0], [96.2, 2132.0], [96.3, 2149.0], [96.4, 2161.0], [96.5, 2174.0], [96.6, 2193.0], [96.7, 2200.0], [96.8, 2211.0], [96.9, 2228.0], [97.0, 2251.0], [97.1, 2265.0], [97.2, 2292.0], [97.3, 2309.0], [97.4, 2326.0], [97.5, 2350.0], [97.6, 2367.0], [97.7, 2379.0], [97.8, 2397.0], [97.9, 2427.0], [98.0, 2450.0], [98.1, 2475.0], [98.2, 2486.0], [98.3, 2509.0], [98.4, 2577.0], [98.5, 2628.0], [98.6, 2685.0], [98.7, 2719.0], [98.8, 2760.0], [98.9, 2842.0], [99.0, 2891.0], [99.1, 2989.0], [99.2, 3065.0], [99.3, 3231.0], [99.4, 3380.0], [99.5, 3543.0], [99.6, 3701.0], [99.7, 4085.0], [99.8, 4220.0], [99.9, 4927.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 565.0, "series": [{"data": [[600.0, 380.0], [700.0, 314.0], [800.0, 318.0], [900.0, 302.0], [1000.0, 273.0], [1100.0, 242.0], [1200.0, 185.0], [1300.0, 239.0], [1400.0, 174.0], [1500.0, 131.0], [1600.0, 85.0], [1700.0, 66.0], [1800.0, 55.0], [1900.0, 56.0], [2000.0, 43.0], [2100.0, 38.0], [2300.0, 29.0], [2200.0, 29.0], [2400.0, 25.0], [2500.0, 9.0], [2600.0, 10.0], [2700.0, 9.0], [2800.0, 10.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 3.0], [3300.0, 1.0], [3200.0, 6.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 3.0], [3900.0, 2.0], [4000.0, 1.0], [4300.0, 1.0], [4200.0, 2.0], [4100.0, 4.0], [4500.0, 1.0], [4800.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [100.0, 51.0], [200.0, 565.0], [300.0, 433.0], [400.0, 546.0], [500.0, 522.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 645.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2946.0, "series": [{"data": [[0.0, 1599.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2946.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 645.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.423076923076923, "minX": 1.60263E12, "maxY": 10.0, "series": [{"data": [[1.60263012E12, 10.0], [1.6026303E12, 10.0], [1.60263024E12, 10.0], [1.60263042E12, 10.0], [1.60263036E12, 10.0], [1.60263006E12, 10.0], [1.60263E12, 10.0], [1.60263048E12, 9.423076923076923], [1.60263018E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 330.0, "minX": 1.0, "maxY": 3231.0, "series": [{"data": [[8.0, 639.0], [4.0, 1855.0], [2.0, 914.0], [1.0, 3231.0], [9.0, 330.0], [10.0, 879.3730939972982], [5.0, 879.0], [6.0, 1382.0], [3.0, 636.0], [7.0, 2014.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 880.1371868978808]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 594.5333333333333, "minX": 1.60263E12, "maxY": 3821577.55, "series": [{"data": [[1.60263012E12, 3712202.6333333333], [1.6026303E12, 2553160.9166666665], [1.60263024E12, 3084015.1666666665], [1.60263042E12, 3041722.9166666665], [1.60263036E12, 3821577.55], [1.60263006E12, 2519921.6333333333], [1.60263E12, 1573480.0666666667], [1.60263048E12, 350224.38333333336], [1.60263018E12, 3316296.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263012E12, 5194.0], [1.6026303E12, 5195.566666666667], [1.60263024E12, 4414.55], [1.60263042E12, 5313.733333333334], [1.60263036E12, 5437.85], [1.60263006E12, 5231.4], [1.60263E12, 1893.9], [1.60263048E12, 594.5333333333333], [1.60263018E12, 5301.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 833.640167364016, "minX": 1.60263E12, "maxY": 1146.5384615384614, "series": [{"data": [[1.60263012E12, 860.2586705202316], [1.6026303E12, 833.640167364016], [1.60263024E12, 992.4446280991732], [1.60263042E12, 848.2361308677098], [1.60263036E12, 837.7192737430171], [1.60263006E12, 834.8414464534071], [1.60263E12, 1107.7279693486582], [1.60263048E12, 1146.5384615384614], [1.60263018E12, 857.7238912732481]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 832.3933054393302, "minX": 1.60263E12, "maxY": 1145.1923076923076, "series": [{"data": [[1.60263012E12, 857.6199421965316], [1.6026303E12, 832.3933054393302], [1.60263024E12, 990.568595041322], [1.60263042E12, 846.7197724039827], [1.60263036E12, 836.0055865921787], [1.60263006E12, 833.2712100139081], [1.60263E12, 1104.9080459770107], [1.60263048E12, 1145.1923076923076], [1.60263018E12, 855.6237482117323]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263E12, "maxY": 0.3678160919540234, "series": [{"data": [[1.60263012E12, 0.017341040462427723], [1.6026303E12, 0.012552301255230124], [1.60263024E12, 0.028099173553719013], [1.60263042E12, 0.018492176386913226], [1.60263036E12, 0.015363128491620097], [1.60263006E12, 0.015299026425591087], [1.60263E12, 0.3678160919540234], [1.60263048E12, 0.0], [1.60263018E12, 0.01716738197424892]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60263E12, "maxY": 5778.0, "series": [{"data": [[1.60263012E12, 4927.0], [1.6026303E12, 5552.0], [1.60263024E12, 5203.0], [1.60263042E12, 3709.0], [1.60263036E12, 2690.0], [1.60263006E12, 5778.0], [1.60263E12, 4852.0], [1.60263048E12, 3497.0], [1.60263018E12, 3978.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263012E12, 195.23699983477593], [1.6026303E12, 200.0], [1.60263024E12, 198.36199956655503], [1.60263042E12, 193.0], [1.60263036E12, 193.90599965810776], [1.60263006E12, 206.91999931335448], [1.60263E12, 205.35799993753434], [1.60263048E12, 276.0], [1.60263018E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263012E12, 195.86070006608963], [1.6026303E12, 200.10820006847382], [1.60263024E12, 199.998200173378], [1.60263042E12, 193.0], [1.60263036E12, 195.09830006837845], [1.60263006E12, 209.38400020599366], [1.60263E12, 205.59380002498628], [1.60263048E12, 276.0], [1.60263018E12, 198.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263012E12, 195.58349991738797], [1.6026303E12, 200.0], [1.60263024E12, 199.27099978327752], [1.60263042E12, 193.0], [1.60263036E12, 194.62299982905387], [1.60263006E12, 208.35999965667725], [1.60263E12, 205.48899996876716], [1.60263048E12, 276.0], [1.60263018E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263012E12, 187.0], [1.6026303E12, 194.0], [1.60263024E12, 194.0], [1.60263042E12, 187.0], [1.60263036E12, 181.0], [1.60263006E12, 196.0], [1.60263E12, 201.0], [1.60263048E12, 276.0], [1.60263018E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263012E12, 644.5], [1.6026303E12, 711.0], [1.60263024E12, 884.0], [1.60263042E12, 699.0], [1.60263036E12, 659.5], [1.60263006E12, 691.0], [1.60263E12, 901.0], [1.60263048E12, 949.5], [1.60263018E12, 730.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 386.0, "minX": 1.0, "maxY": 2719.0, "series": [{"data": [[3.0, 1980.5], [4.0, 1619.0], [5.0, 1496.0], [6.0, 1158.0], [7.0, 1141.0], [8.0, 1023.0], [9.0, 985.0], [10.0, 942.0], [11.0, 843.5], [12.0, 753.0], [13.0, 691.0], [14.0, 711.0], [15.0, 626.0], [1.0, 2719.0], [16.0, 499.0], [17.0, 520.0], [18.0, 507.0], [19.0, 454.5], [20.0, 552.0], [21.0, 402.0], [22.0, 448.0], [23.0, 442.0], [24.0, 421.5], [25.0, 412.0], [26.0, 404.5], [28.0, 395.5], [29.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 386.0, "minX": 1.0, "maxY": 2714.0, "series": [{"data": [[3.0, 1978.0], [4.0, 1612.5], [5.0, 1481.0], [6.0, 1156.5], [7.0, 1139.0], [8.0, 1022.5], [9.0, 982.0], [10.0, 941.0], [11.0, 842.0], [12.0, 752.0], [13.0, 689.5], [14.0, 711.0], [15.0, 623.0], [1.0, 2714.0], [16.0, 499.0], [17.0, 520.0], [18.0, 507.0], [19.0, 454.5], [20.0, 551.5], [21.0, 401.0], [22.0, 448.0], [23.0, 442.0], [24.0, 421.0], [25.0, 412.0], [26.0, 404.5], [28.0, 395.5], [29.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.60263E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60263012E12, 11.533333333333333], [1.6026303E12, 11.95], [1.60263024E12, 10.083333333333334], [1.60263042E12, 11.716666666666667], [1.60263036E12, 11.933333333333334], [1.60263006E12, 11.983333333333333], [1.60263E12, 4.516666666666667], [1.60263048E12, 1.1333333333333333], [1.60263018E12, 11.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.60263E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60263012E12, 11.533333333333333], [1.6026303E12, 11.95], [1.60263024E12, 10.083333333333334], [1.60263042E12, 11.716666666666667], [1.60263036E12, 11.933333333333334], [1.60263006E12, 11.983333333333333], [1.60263E12, 4.35], [1.60263048E12, 1.3], [1.60263018E12, 11.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.60263E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60263012E12, 11.533333333333333], [1.6026303E12, 11.95], [1.60263024E12, 10.083333333333334], [1.60263042E12, 11.716666666666667], [1.60263036E12, 11.933333333333334], [1.60263006E12, 11.983333333333333], [1.60263E12, 4.35], [1.60263048E12, 1.3], [1.60263018E12, 11.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.60263E12, "maxY": 11.983333333333333, "series": [{"data": [[1.60263012E12, 11.533333333333333], [1.6026303E12, 11.95], [1.60263024E12, 10.083333333333334], [1.60263042E12, 11.716666666666667], [1.60263036E12, 11.933333333333334], [1.60263006E12, 11.983333333333333], [1.60263E12, 4.35], [1.60263048E12, 1.3], [1.60263018E12, 11.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263048E12, "title": "Total Transactions Per Second"}},
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

