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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 5929.0, "series": [{"data": [[0.0, 186.0], [0.1, 190.0], [0.2, 192.0], [0.3, 194.0], [0.4, 195.0], [0.5, 195.0], [0.6, 196.0], [0.7, 197.0], [0.8, 197.0], [0.9, 198.0], [1.0, 199.0], [1.1, 200.0], [1.2, 201.0], [1.3, 202.0], [1.4, 203.0], [1.5, 203.0], [1.6, 204.0], [1.7, 205.0], [1.8, 205.0], [1.9, 206.0], [2.0, 207.0], [2.1, 208.0], [2.2, 208.0], [2.3, 209.0], [2.4, 210.0], [2.5, 211.0], [2.6, 213.0], [2.7, 214.0], [2.8, 215.0], [2.9, 217.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 219.0], [3.4, 220.0], [3.5, 221.0], [3.6, 221.0], [3.7, 222.0], [3.8, 223.0], [3.9, 223.0], [4.0, 224.0], [4.1, 225.0], [4.2, 225.0], [4.3, 226.0], [4.4, 227.0], [4.5, 227.0], [4.6, 228.0], [4.7, 229.0], [4.8, 230.0], [4.9, 231.0], [5.0, 231.0], [5.1, 232.0], [5.2, 233.0], [5.3, 233.0], [5.4, 234.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 237.0], [6.0, 238.0], [6.1, 239.0], [6.2, 240.0], [6.3, 241.0], [6.4, 242.0], [6.5, 242.0], [6.6, 243.0], [6.7, 244.0], [6.8, 246.0], [6.9, 247.0], [7.0, 249.0], [7.1, 249.0], [7.2, 250.0], [7.3, 251.0], [7.4, 254.0], [7.5, 256.0], [7.6, 257.0], [7.7, 259.0], [7.8, 260.0], [7.9, 261.0], [8.0, 262.0], [8.1, 264.0], [8.2, 265.0], [8.3, 266.0], [8.4, 267.0], [8.5, 268.0], [8.6, 269.0], [8.7, 269.0], [8.8, 270.0], [8.9, 271.0], [9.0, 271.0], [9.1, 272.0], [9.2, 273.0], [9.3, 274.0], [9.4, 274.0], [9.5, 275.0], [9.6, 276.0], [9.7, 276.0], [9.8, 278.0], [9.9, 278.0], [10.0, 279.0], [10.1, 279.0], [10.2, 280.0], [10.3, 281.0], [10.4, 282.0], [10.5, 283.0], [10.6, 284.0], [10.7, 285.0], [10.8, 286.0], [10.9, 286.0], [11.0, 288.0], [11.1, 289.0], [11.2, 290.0], [11.3, 291.0], [11.4, 291.0], [11.5, 292.0], [11.6, 293.0], [11.7, 294.0], [11.8, 295.0], [11.9, 297.0], [12.0, 298.0], [12.1, 299.0], [12.2, 301.0], [12.3, 302.0], [12.4, 303.0], [12.5, 304.0], [12.6, 306.0], [12.7, 308.0], [12.8, 309.0], [12.9, 310.0], [13.0, 311.0], [13.1, 313.0], [13.2, 314.0], [13.3, 314.0], [13.4, 315.0], [13.5, 316.0], [13.6, 317.0], [13.7, 318.0], [13.8, 319.0], [13.9, 319.0], [14.0, 320.0], [14.1, 321.0], [14.2, 322.0], [14.3, 323.0], [14.4, 324.0], [14.5, 325.0], [14.6, 327.0], [14.7, 327.0], [14.8, 329.0], [14.9, 331.0], [15.0, 333.0], [15.1, 333.0], [15.2, 335.0], [15.3, 338.0], [15.4, 341.0], [15.5, 342.0], [15.6, 344.0], [15.7, 345.0], [15.8, 347.0], [15.9, 348.0], [16.0, 349.0], [16.1, 350.0], [16.2, 351.0], [16.3, 353.0], [16.4, 356.0], [16.5, 357.0], [16.6, 359.0], [16.7, 360.0], [16.8, 362.0], [16.9, 363.0], [17.0, 365.0], [17.1, 366.0], [17.2, 367.0], [17.3, 368.0], [17.4, 372.0], [17.5, 373.0], [17.6, 375.0], [17.7, 376.0], [17.8, 378.0], [17.9, 379.0], [18.0, 380.0], [18.1, 382.0], [18.2, 383.0], [18.3, 385.0], [18.4, 386.0], [18.5, 387.0], [18.6, 388.0], [18.7, 388.0], [18.8, 389.0], [18.9, 390.0], [19.0, 391.0], [19.1, 392.0], [19.2, 393.0], [19.3, 394.0], [19.4, 394.0], [19.5, 396.0], [19.6, 397.0], [19.7, 397.0], [19.8, 398.0], [19.9, 399.0], [20.0, 400.0], [20.1, 401.0], [20.2, 402.0], [20.3, 402.0], [20.4, 403.0], [20.5, 404.0], [20.6, 405.0], [20.7, 406.0], [20.8, 407.0], [20.9, 408.0], [21.0, 408.0], [21.1, 408.0], [21.2, 410.0], [21.3, 410.0], [21.4, 411.0], [21.5, 412.0], [21.6, 413.0], [21.7, 414.0], [21.8, 416.0], [21.9, 417.0], [22.0, 418.0], [22.1, 419.0], [22.2, 420.0], [22.3, 421.0], [22.4, 423.0], [22.5, 425.0], [22.6, 426.0], [22.7, 426.0], [22.8, 427.0], [22.9, 428.0], [23.0, 429.0], [23.1, 429.0], [23.2, 430.0], [23.3, 432.0], [23.4, 432.0], [23.5, 433.0], [23.6, 433.0], [23.7, 435.0], [23.8, 436.0], [23.9, 436.0], [24.0, 436.0], [24.1, 437.0], [24.2, 437.0], [24.3, 438.0], [24.4, 439.0], [24.5, 439.0], [24.6, 440.0], [24.7, 440.0], [24.8, 441.0], [24.9, 441.0], [25.0, 441.0], [25.1, 442.0], [25.2, 443.0], [25.3, 444.0], [25.4, 445.0], [25.5, 445.0], [25.6, 446.0], [25.7, 447.0], [25.8, 448.0], [25.9, 448.0], [26.0, 449.0], [26.1, 450.0], [26.2, 451.0], [26.3, 452.0], [26.4, 453.0], [26.5, 454.0], [26.6, 456.0], [26.7, 456.0], [26.8, 457.0], [26.9, 459.0], [27.0, 459.0], [27.1, 460.0], [27.2, 461.0], [27.3, 462.0], [27.4, 463.0], [27.5, 464.0], [27.6, 465.0], [27.7, 465.0], [27.8, 466.0], [27.9, 467.0], [28.0, 468.0], [28.1, 469.0], [28.2, 469.0], [28.3, 470.0], [28.4, 471.0], [28.5, 473.0], [28.6, 474.0], [28.7, 475.0], [28.8, 476.0], [28.9, 477.0], [29.0, 479.0], [29.1, 480.0], [29.2, 481.0], [29.3, 481.0], [29.4, 482.0], [29.5, 484.0], [29.6, 484.0], [29.7, 486.0], [29.8, 487.0], [29.9, 487.0], [30.0, 488.0], [30.1, 489.0], [30.2, 489.0], [30.3, 490.0], [30.4, 491.0], [30.5, 492.0], [30.6, 493.0], [30.7, 494.0], [30.8, 495.0], [30.9, 496.0], [31.0, 497.0], [31.1, 499.0], [31.2, 500.0], [31.3, 501.0], [31.4, 502.0], [31.5, 503.0], [31.6, 504.0], [31.7, 505.0], [31.8, 507.0], [31.9, 507.0], [32.0, 508.0], [32.1, 510.0], [32.2, 512.0], [32.3, 514.0], [32.4, 515.0], [32.5, 516.0], [32.6, 516.0], [32.7, 517.0], [32.8, 518.0], [32.9, 519.0], [33.0, 520.0], [33.1, 521.0], [33.2, 522.0], [33.3, 523.0], [33.4, 524.0], [33.5, 525.0], [33.6, 526.0], [33.7, 526.0], [33.8, 527.0], [33.9, 528.0], [34.0, 528.0], [34.1, 529.0], [34.2, 529.0], [34.3, 530.0], [34.4, 531.0], [34.5, 532.0], [34.6, 532.0], [34.7, 533.0], [34.8, 535.0], [34.9, 536.0], [35.0, 538.0], [35.1, 539.0], [35.2, 539.0], [35.3, 542.0], [35.4, 542.0], [35.5, 543.0], [35.6, 543.0], [35.7, 545.0], [35.8, 546.0], [35.9, 546.0], [36.0, 547.0], [36.1, 548.0], [36.2, 548.0], [36.3, 549.0], [36.4, 550.0], [36.5, 551.0], [36.6, 551.0], [36.7, 552.0], [36.8, 553.0], [36.9, 554.0], [37.0, 555.0], [37.1, 556.0], [37.2, 556.0], [37.3, 558.0], [37.4, 558.0], [37.5, 559.0], [37.6, 560.0], [37.7, 561.0], [37.8, 562.0], [37.9, 563.0], [38.0, 564.0], [38.1, 565.0], [38.2, 566.0], [38.3, 567.0], [38.4, 568.0], [38.5, 568.0], [38.6, 569.0], [38.7, 571.0], [38.8, 572.0], [38.9, 573.0], [39.0, 574.0], [39.1, 575.0], [39.2, 575.0], [39.3, 576.0], [39.4, 577.0], [39.5, 578.0], [39.6, 579.0], [39.7, 579.0], [39.8, 580.0], [39.9, 580.0], [40.0, 581.0], [40.1, 582.0], [40.2, 584.0], [40.3, 585.0], [40.4, 586.0], [40.5, 586.0], [40.6, 587.0], [40.7, 588.0], [40.8, 589.0], [40.9, 589.0], [41.0, 590.0], [41.1, 590.0], [41.2, 591.0], [41.3, 592.0], [41.4, 593.0], [41.5, 594.0], [41.6, 595.0], [41.7, 595.0], [41.8, 597.0], [41.9, 597.0], [42.0, 598.0], [42.1, 599.0], [42.2, 599.0], [42.3, 600.0], [42.4, 601.0], [42.5, 603.0], [42.6, 603.0], [42.7, 605.0], [42.8, 607.0], [42.9, 608.0], [43.0, 609.0], [43.1, 611.0], [43.2, 612.0], [43.3, 613.0], [43.4, 615.0], [43.5, 617.0], [43.6, 618.0], [43.7, 619.0], [43.8, 620.0], [43.9, 622.0], [44.0, 623.0], [44.1, 625.0], [44.2, 626.0], [44.3, 627.0], [44.4, 628.0], [44.5, 629.0], [44.6, 630.0], [44.7, 631.0], [44.8, 632.0], [44.9, 632.0], [45.0, 633.0], [45.1, 635.0], [45.2, 635.0], [45.3, 637.0], [45.4, 638.0], [45.5, 639.0], [45.6, 640.0], [45.7, 642.0], [45.8, 643.0], [45.9, 645.0], [46.0, 646.0], [46.1, 647.0], [46.2, 648.0], [46.3, 650.0], [46.4, 653.0], [46.5, 654.0], [46.6, 656.0], [46.7, 657.0], [46.8, 658.0], [46.9, 660.0], [47.0, 662.0], [47.1, 663.0], [47.2, 665.0], [47.3, 666.0], [47.4, 667.0], [47.5, 668.0], [47.6, 669.0], [47.7, 670.0], [47.8, 672.0], [47.9, 673.0], [48.0, 675.0], [48.1, 676.0], [48.2, 678.0], [48.3, 678.0], [48.4, 679.0], [48.5, 681.0], [48.6, 684.0], [48.7, 686.0], [48.8, 689.0], [48.9, 689.0], [49.0, 691.0], [49.1, 694.0], [49.2, 696.0], [49.3, 698.0], [49.4, 699.0], [49.5, 700.0], [49.6, 702.0], [49.7, 703.0], [49.8, 704.0], [49.9, 706.0], [50.0, 707.0], [50.1, 709.0], [50.2, 712.0], [50.3, 714.0], [50.4, 716.0], [50.5, 717.0], [50.6, 719.0], [50.7, 720.0], [50.8, 721.0], [50.9, 722.0], [51.0, 725.0], [51.1, 727.0], [51.2, 729.0], [51.3, 731.0], [51.4, 732.0], [51.5, 734.0], [51.6, 737.0], [51.7, 738.0], [51.8, 740.0], [51.9, 741.0], [52.0, 742.0], [52.1, 744.0], [52.2, 746.0], [52.3, 748.0], [52.4, 749.0], [52.5, 752.0], [52.6, 755.0], [52.7, 756.0], [52.8, 758.0], [52.9, 760.0], [53.0, 762.0], [53.1, 763.0], [53.2, 766.0], [53.3, 767.0], [53.4, 768.0], [53.5, 769.0], [53.6, 771.0], [53.7, 773.0], [53.8, 774.0], [53.9, 776.0], [54.0, 778.0], [54.1, 780.0], [54.2, 783.0], [54.3, 785.0], [54.4, 786.0], [54.5, 788.0], [54.6, 791.0], [54.7, 792.0], [54.8, 795.0], [54.9, 797.0], [55.0, 798.0], [55.1, 801.0], [55.2, 804.0], [55.3, 806.0], [55.4, 808.0], [55.5, 810.0], [55.6, 813.0], [55.7, 814.0], [55.8, 816.0], [55.9, 820.0], [56.0, 822.0], [56.1, 824.0], [56.2, 826.0], [56.3, 827.0], [56.4, 828.0], [56.5, 829.0], [56.6, 830.0], [56.7, 832.0], [56.8, 833.0], [56.9, 834.0], [57.0, 838.0], [57.1, 840.0], [57.2, 841.0], [57.3, 843.0], [57.4, 846.0], [57.5, 848.0], [57.6, 850.0], [57.7, 852.0], [57.8, 853.0], [57.9, 855.0], [58.0, 855.0], [58.1, 857.0], [58.2, 857.0], [58.3, 859.0], [58.4, 860.0], [58.5, 861.0], [58.6, 865.0], [58.7, 866.0], [58.8, 867.0], [58.9, 870.0], [59.0, 872.0], [59.1, 874.0], [59.2, 875.0], [59.3, 876.0], [59.4, 877.0], [59.5, 878.0], [59.6, 881.0], [59.7, 883.0], [59.8, 884.0], [59.9, 886.0], [60.0, 889.0], [60.1, 891.0], [60.2, 892.0], [60.3, 893.0], [60.4, 895.0], [60.5, 896.0], [60.6, 899.0], [60.7, 902.0], [60.8, 903.0], [60.9, 905.0], [61.0, 906.0], [61.1, 908.0], [61.2, 910.0], [61.3, 912.0], [61.4, 914.0], [61.5, 915.0], [61.6, 918.0], [61.7, 919.0], [61.8, 919.0], [61.9, 920.0], [62.0, 921.0], [62.1, 921.0], [62.2, 923.0], [62.3, 925.0], [62.4, 925.0], [62.5, 927.0], [62.6, 928.0], [62.7, 929.0], [62.8, 931.0], [62.9, 933.0], [63.0, 935.0], [63.1, 938.0], [63.2, 941.0], [63.3, 942.0], [63.4, 944.0], [63.5, 946.0], [63.6, 947.0], [63.7, 949.0], [63.8, 950.0], [63.9, 950.0], [64.0, 952.0], [64.1, 954.0], [64.2, 957.0], [64.3, 960.0], [64.4, 962.0], [64.5, 963.0], [64.6, 965.0], [64.7, 966.0], [64.8, 967.0], [64.9, 969.0], [65.0, 971.0], [65.1, 972.0], [65.2, 973.0], [65.3, 976.0], [65.4, 977.0], [65.5, 979.0], [65.6, 981.0], [65.7, 984.0], [65.8, 986.0], [65.9, 988.0], [66.0, 989.0], [66.1, 991.0], [66.2, 993.0], [66.3, 994.0], [66.4, 996.0], [66.5, 997.0], [66.6, 999.0], [66.7, 1001.0], [66.8, 1003.0], [66.9, 1006.0], [67.0, 1007.0], [67.1, 1008.0], [67.2, 1009.0], [67.3, 1010.0], [67.4, 1011.0], [67.5, 1012.0], [67.6, 1014.0], [67.7, 1017.0], [67.8, 1019.0], [67.9, 1020.0], [68.0, 1021.0], [68.1, 1022.0], [68.2, 1024.0], [68.3, 1025.0], [68.4, 1027.0], [68.5, 1029.0], [68.6, 1032.0], [68.7, 1035.0], [68.8, 1035.0], [68.9, 1036.0], [69.0, 1038.0], [69.1, 1039.0], [69.2, 1040.0], [69.3, 1041.0], [69.4, 1043.0], [69.5, 1045.0], [69.6, 1048.0], [69.7, 1049.0], [69.8, 1052.0], [69.9, 1054.0], [70.0, 1056.0], [70.1, 1058.0], [70.2, 1059.0], [70.3, 1061.0], [70.4, 1062.0], [70.5, 1064.0], [70.6, 1066.0], [70.7, 1067.0], [70.8, 1068.0], [70.9, 1070.0], [71.0, 1071.0], [71.1, 1073.0], [71.2, 1074.0], [71.3, 1075.0], [71.4, 1078.0], [71.5, 1080.0], [71.6, 1081.0], [71.7, 1082.0], [71.8, 1084.0], [71.9, 1087.0], [72.0, 1088.0], [72.1, 1091.0], [72.2, 1093.0], [72.3, 1095.0], [72.4, 1097.0], [72.5, 1101.0], [72.6, 1103.0], [72.7, 1103.0], [72.8, 1104.0], [72.9, 1105.0], [73.0, 1105.0], [73.1, 1108.0], [73.2, 1111.0], [73.3, 1112.0], [73.4, 1113.0], [73.5, 1115.0], [73.6, 1116.0], [73.7, 1118.0], [73.8, 1119.0], [73.9, 1121.0], [74.0, 1123.0], [74.1, 1125.0], [74.2, 1127.0], [74.3, 1129.0], [74.4, 1133.0], [74.5, 1135.0], [74.6, 1138.0], [74.7, 1140.0], [74.8, 1142.0], [74.9, 1144.0], [75.0, 1146.0], [75.1, 1147.0], [75.2, 1148.0], [75.3, 1151.0], [75.4, 1152.0], [75.5, 1156.0], [75.6, 1157.0], [75.7, 1159.0], [75.8, 1161.0], [75.9, 1162.0], [76.0, 1164.0], [76.1, 1166.0], [76.2, 1167.0], [76.3, 1169.0], [76.4, 1172.0], [76.5, 1174.0], [76.6, 1176.0], [76.7, 1177.0], [76.8, 1178.0], [76.9, 1182.0], [77.0, 1185.0], [77.1, 1187.0], [77.2, 1192.0], [77.3, 1195.0], [77.4, 1196.0], [77.5, 1201.0], [77.6, 1205.0], [77.7, 1207.0], [77.8, 1210.0], [77.9, 1213.0], [78.0, 1215.0], [78.1, 1217.0], [78.2, 1219.0], [78.3, 1221.0], [78.4, 1225.0], [78.5, 1227.0], [78.6, 1229.0], [78.7, 1232.0], [78.8, 1236.0], [78.9, 1238.0], [79.0, 1245.0], [79.1, 1247.0], [79.2, 1249.0], [79.3, 1251.0], [79.4, 1253.0], [79.5, 1258.0], [79.6, 1260.0], [79.7, 1261.0], [79.8, 1263.0], [79.9, 1266.0], [80.0, 1268.0], [80.1, 1270.0], [80.2, 1275.0], [80.3, 1276.0], [80.4, 1280.0], [80.5, 1282.0], [80.6, 1283.0], [80.7, 1284.0], [80.8, 1286.0], [80.9, 1287.0], [81.0, 1289.0], [81.1, 1292.0], [81.2, 1293.0], [81.3, 1294.0], [81.4, 1296.0], [81.5, 1297.0], [81.6, 1302.0], [81.7, 1303.0], [81.8, 1306.0], [81.9, 1308.0], [82.0, 1311.0], [82.1, 1314.0], [82.2, 1316.0], [82.3, 1318.0], [82.4, 1319.0], [82.5, 1322.0], [82.6, 1324.0], [82.7, 1328.0], [82.8, 1331.0], [82.9, 1334.0], [83.0, 1337.0], [83.1, 1338.0], [83.2, 1341.0], [83.3, 1344.0], [83.4, 1345.0], [83.5, 1350.0], [83.6, 1352.0], [83.7, 1354.0], [83.8, 1356.0], [83.9, 1358.0], [84.0, 1360.0], [84.1, 1364.0], [84.2, 1368.0], [84.3, 1369.0], [84.4, 1371.0], [84.5, 1373.0], [84.6, 1376.0], [84.7, 1379.0], [84.8, 1383.0], [84.9, 1387.0], [85.0, 1390.0], [85.1, 1392.0], [85.2, 1396.0], [85.3, 1400.0], [85.4, 1403.0], [85.5, 1407.0], [85.6, 1412.0], [85.7, 1414.0], [85.8, 1421.0], [85.9, 1424.0], [86.0, 1426.0], [86.1, 1429.0], [86.2, 1430.0], [86.3, 1432.0], [86.4, 1437.0], [86.5, 1440.0], [86.6, 1441.0], [86.7, 1444.0], [86.8, 1446.0], [86.9, 1448.0], [87.0, 1451.0], [87.1, 1454.0], [87.2, 1464.0], [87.3, 1466.0], [87.4, 1468.0], [87.5, 1470.0], [87.6, 1475.0], [87.7, 1478.0], [87.8, 1481.0], [87.9, 1484.0], [88.0, 1487.0], [88.1, 1490.0], [88.2, 1495.0], [88.3, 1500.0], [88.4, 1508.0], [88.5, 1513.0], [88.6, 1517.0], [88.7, 1518.0], [88.8, 1520.0], [88.9, 1523.0], [89.0, 1530.0], [89.1, 1534.0], [89.2, 1543.0], [89.3, 1547.0], [89.4, 1549.0], [89.5, 1556.0], [89.6, 1559.0], [89.7, 1563.0], [89.8, 1567.0], [89.9, 1568.0], [90.0, 1576.0], [90.1, 1581.0], [90.2, 1585.0], [90.3, 1590.0], [90.4, 1598.0], [90.5, 1603.0], [90.6, 1607.0], [90.7, 1611.0], [90.8, 1615.0], [90.9, 1626.0], [91.0, 1633.0], [91.1, 1648.0], [91.2, 1655.0], [91.3, 1660.0], [91.4, 1664.0], [91.5, 1668.0], [91.6, 1674.0], [91.7, 1679.0], [91.8, 1685.0], [91.9, 1687.0], [92.0, 1695.0], [92.1, 1706.0], [92.2, 1717.0], [92.3, 1727.0], [92.4, 1737.0], [92.5, 1743.0], [92.6, 1750.0], [92.7, 1764.0], [92.8, 1772.0], [92.9, 1776.0], [93.0, 1781.0], [93.1, 1789.0], [93.2, 1805.0], [93.3, 1811.0], [93.4, 1818.0], [93.5, 1824.0], [93.6, 1831.0], [93.7, 1833.0], [93.8, 1848.0], [93.9, 1852.0], [94.0, 1857.0], [94.1, 1869.0], [94.2, 1871.0], [94.3, 1879.0], [94.4, 1890.0], [94.5, 1898.0], [94.6, 1913.0], [94.7, 1922.0], [94.8, 1927.0], [94.9, 1939.0], [95.0, 1949.0], [95.1, 1959.0], [95.2, 1968.0], [95.3, 1980.0], [95.4, 1987.0], [95.5, 2002.0], [95.6, 2010.0], [95.7, 2018.0], [95.8, 2037.0], [95.9, 2050.0], [96.0, 2059.0], [96.1, 2072.0], [96.2, 2085.0], [96.3, 2099.0], [96.4, 2111.0], [96.5, 2118.0], [96.6, 2131.0], [96.7, 2152.0], [96.8, 2163.0], [96.9, 2170.0], [97.0, 2176.0], [97.1, 2181.0], [97.2, 2196.0], [97.3, 2210.0], [97.4, 2230.0], [97.5, 2248.0], [97.6, 2267.0], [97.7, 2286.0], [97.8, 2322.0], [97.9, 2339.0], [98.0, 2355.0], [98.1, 2377.0], [98.2, 2387.0], [98.3, 2419.0], [98.4, 2489.0], [98.5, 2517.0], [98.6, 2551.0], [98.7, 2565.0], [98.8, 2596.0], [98.9, 2670.0], [99.0, 2826.0], [99.1, 2916.0], [99.2, 2979.0], [99.3, 3108.0], [99.4, 3251.0], [99.5, 3539.0], [99.6, 3667.0], [99.7, 4480.0], [99.8, 4758.0], [99.9, 5250.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 579.0, "series": [{"data": [[600.0, 374.0], [700.0, 291.0], [800.0, 289.0], [900.0, 313.0], [1000.0, 302.0], [1100.0, 261.0], [1200.0, 209.0], [1300.0, 195.0], [1400.0, 156.0], [1500.0, 110.0], [1600.0, 84.0], [1700.0, 60.0], [1800.0, 69.0], [1900.0, 51.0], [2000.0, 42.0], [2100.0, 48.0], [2300.0, 26.0], [2200.0, 27.0], [2400.0, 9.0], [2500.0, 20.0], [2600.0, 6.0], [2700.0, 3.0], [2800.0, 4.0], [2900.0, 8.0], [3000.0, 4.0], [3100.0, 4.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 3.0], [3500.0, 4.0], [3600.0, 2.0], [3700.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4700.0, 4.0], [4900.0, 2.0], [5100.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5600.0, 3.0], [5900.0, 1.0], [100.0, 54.0], [200.0, 575.0], [300.0, 407.0], [400.0, 579.0], [500.0, 577.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 607.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2960.0, "series": [{"data": [[0.0, 1623.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2960.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 607.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.666666666666666, "minX": 1.60237164E12, "maxY": 10.0, "series": [{"data": [[1.60237194E12, 10.0], [1.60237176E12, 10.0], [1.60237182E12, 10.0], [1.60237212E12, 9.666666666666666], [1.60237164E12, 10.0], [1.6023717E12, 10.0], [1.602372E12, 10.0], [1.60237206E12, 10.0], [1.60237188E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237212E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 614.0, "minX": 1.0, "maxY": 2399.0, "series": [{"data": [[4.0, 1163.0], [2.0, 2268.0], [1.0, 2399.0], [9.0, 1194.0], [10.0, 864.8040918741572], [5.0, 614.0], [6.0, 755.0], [3.0, 761.0], [7.0, 1228.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996148, 865.534874759154]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 995.2, "minX": 1.60237164E12, "maxY": 3630243.45, "series": [{"data": [[1.60237194E12, 2618341.8333333335], [1.60237176E12, 3485669.7], [1.60237182E12, 3529827.283333333], [1.60237212E12, 624857.8833333333], [1.60237164E12, 991430.75], [1.6023717E12, 2743648.05], [1.602372E12, 3630243.45], [1.60237206E12, 3141450.25], [1.60237188E12, 3207690.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237194E12, 5124.15], [1.60237176E12, 5473.833333333333], [1.60237182E12, 5629.533333333334], [1.60237212E12, 995.2], [1.60237164E12, 997.4833333333333], [1.6023717E12, 5027.083333333333], [1.602372E12, 5452.983333333334], [1.60237206E12, 5396.9], [1.60237188E12, 4480.166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237212E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 808.8223418573352, "minX": 1.60237164E12, "maxY": 1186.9179104477607, "series": [{"data": [[1.60237194E12, 849.4042553191491], [1.60237176E12, 812.8823529411759], [1.60237182E12, 808.8223418573352], [1.60237212E12, 1040.2348484848487], [1.60237164E12, 1186.9179104477607], [1.6023717E12, 865.5845272206308], [1.602372E12, 816.9215955983491], [1.60237206E12, 846.8946629213478], [1.60237188E12, 987.9884868421054]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237212E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 806.7281292059225, "minX": 1.60237164E12, "maxY": 1183.8134328358208, "series": [{"data": [[1.60237194E12, 847.8865248226961], [1.60237176E12, 810.6210670314631], [1.60237182E12, 806.7281292059225], [1.60237212E12, 1038.75], [1.60237164E12, 1183.8134328358208], [1.6023717E12, 863.7879656160459], [1.602372E12, 815.0852819807432], [1.60237206E12, 845.3792134831456], [1.60237188E12, 985.6842105263162]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237212E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60237164E12, "maxY": 0.6641791044776124, "series": [{"data": [[1.60237194E12, 0.009929078014184396], [1.60237176E12, 0.015047879616963085], [1.60237182E12, 0.009421265141318975], [1.60237212E12, 0.0], [1.60237164E12, 0.6641791044776124], [1.6023717E12, 0.012893982808022932], [1.602372E12, 0.019257221458046772], [1.60237206E12, 0.012640449438202249], [1.60237188E12, 0.018092105263157878]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237212E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60237164E12, "maxY": 5929.0, "series": [{"data": [[1.60237194E12, 5661.0], [1.60237176E12, 3667.0], [1.60237182E12, 5124.0], [1.60237212E12, 3209.0], [1.60237164E12, 3601.0], [1.6023717E12, 5929.0], [1.602372E12, 2979.0], [1.60237206E12, 3729.0], [1.60237188E12, 5693.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237194E12, 201.7699991583824], [1.60237176E12, 204.1759996509552], [1.60237182E12, 193.0], [1.60237212E12, 210.54599942922593], [1.60237164E12, 214.1249975860119], [1.6023717E12, 199.0], [1.602372E12, 195.0], [1.60237206E12, 201.8339996600151], [1.60237188E12, 204.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237194E12, 204.94700033664702], [1.60237176E12, 205.24680006980896], [1.60237182E12, 193.73120014190673], [1.60237212E12, 212.70060022830964], [1.60237164E12, 223.23750096559525], [1.6023717E12, 199.0], [1.602372E12, 195.0], [1.60237206E12, 203.0], [1.60237188E12, 204.05820011615754]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237194E12, 203.5349995791912], [1.60237176E12, 204.9079998254776], [1.60237182E12, 193.13599982261658], [1.60237212E12, 211.74299971461295], [1.60237164E12, 219.18749879300594], [1.6023717E12, 199.0], [1.602372E12, 195.0], [1.60237206E12, 202.54699983000756], [1.60237188E12, 204.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237194E12, 192.0], [1.60237176E12, 186.0], [1.60237182E12, 188.0], [1.60237212E12, 207.0], [1.60237164E12, 198.0], [1.6023717E12, 193.0], [1.602372E12, 190.0], [1.60237206E12, 189.0], [1.60237188E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237194E12, 720.0], [1.60237176E12, 630.0], [1.60237182E12, 613.0], [1.60237212E12, 921.0], [1.60237164E12, 1046.5], [1.6023717E12, 722.0], [1.602372E12, 634.0], [1.60237206E12, 700.5], [1.60237188E12, 854.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 401.0, "minX": 1.0, "maxY": 2471.0, "series": [{"data": [[2.0, 2471.0], [3.0, 1434.0], [4.0, 1456.0], [5.0, 1103.0], [6.0, 1209.5], [7.0, 1167.0], [8.0, 1026.0], [9.0, 998.0], [10.0, 919.0], [11.0, 862.5], [12.0, 769.5], [13.0, 671.0], [14.0, 626.0], [15.0, 634.0], [16.0, 558.0], [1.0, 2257.5], [17.0, 479.5], [18.0, 462.0], [19.0, 436.0], [20.0, 467.0], [21.0, 401.0], [22.0, 440.0], [23.0, 477.0], [24.0, 415.0], [25.0, 409.0], [26.0, 420.0], [27.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 401.0, "minX": 1.0, "maxY": 2469.5, "series": [{"data": [[2.0, 2469.5], [3.0, 1433.0], [4.0, 1449.5], [5.0, 1096.0], [6.0, 1204.5], [7.0, 1165.0], [8.0, 1024.0], [9.0, 994.0], [10.0, 918.5], [11.0, 860.5], [12.0, 767.5], [13.0, 670.0], [14.0, 625.0], [15.0, 633.5], [16.0, 556.5], [1.0, 2249.0], [17.0, 479.0], [18.0, 461.0], [19.0, 436.0], [20.0, 467.0], [21.0, 401.0], [22.0, 440.0], [23.0, 476.0], [24.0, 415.0], [25.0, 409.0], [26.0, 420.0], [27.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.033333333333333, "minX": 1.60237164E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60237194E12, 11.75], [1.60237176E12, 12.183333333333334], [1.60237182E12, 12.383333333333333], [1.60237212E12, 2.033333333333333], [1.60237164E12, 2.4], [1.6023717E12, 11.633333333333333], [1.602372E12, 12.116666666666667], [1.60237206E12, 11.866666666666667], [1.60237188E12, 10.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237212E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60237164E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60237194E12, 11.75], [1.60237176E12, 12.183333333333334], [1.60237182E12, 12.383333333333333], [1.60237212E12, 2.2], [1.60237164E12, 2.2333333333333334], [1.6023717E12, 11.633333333333333], [1.602372E12, 12.116666666666667], [1.60237206E12, 11.866666666666667], [1.60237188E12, 10.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237212E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60237164E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60237194E12, 11.75], [1.60237176E12, 12.183333333333334], [1.60237182E12, 12.383333333333333], [1.60237212E12, 2.2], [1.60237164E12, 2.2333333333333334], [1.6023717E12, 11.633333333333333], [1.602372E12, 12.116666666666667], [1.60237206E12, 11.866666666666667], [1.60237188E12, 10.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237212E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60237164E12, "maxY": 12.383333333333333, "series": [{"data": [[1.60237194E12, 11.75], [1.60237176E12, 12.183333333333334], [1.60237182E12, 12.383333333333333], [1.60237212E12, 2.2], [1.60237164E12, 2.2333333333333334], [1.6023717E12, 11.633333333333333], [1.602372E12, 12.116666666666667], [1.60237206E12, 11.866666666666667], [1.60237188E12, 10.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237212E12, "title": "Total Transactions Per Second"}},
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

