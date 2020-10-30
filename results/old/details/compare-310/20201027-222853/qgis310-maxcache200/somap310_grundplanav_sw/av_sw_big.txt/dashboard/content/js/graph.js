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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 5906.0, "series": [{"data": [[0.0, 186.0], [0.1, 193.0], [0.2, 195.0], [0.3, 196.0], [0.4, 196.0], [0.5, 197.0], [0.6, 198.0], [0.7, 201.0], [0.8, 202.0], [0.9, 203.0], [1.0, 204.0], [1.1, 205.0], [1.2, 205.0], [1.3, 206.0], [1.4, 206.0], [1.5, 208.0], [1.6, 208.0], [1.7, 211.0], [1.8, 212.0], [1.9, 213.0], [2.0, 214.0], [2.1, 216.0], [2.2, 217.0], [2.3, 218.0], [2.4, 218.0], [2.5, 219.0], [2.6, 220.0], [2.7, 221.0], [2.8, 221.0], [2.9, 222.0], [3.0, 222.0], [3.1, 223.0], [3.2, 224.0], [3.3, 225.0], [3.4, 226.0], [3.5, 228.0], [3.6, 228.0], [3.7, 229.0], [3.8, 229.0], [3.9, 230.0], [4.0, 231.0], [4.1, 231.0], [4.2, 232.0], [4.3, 233.0], [4.4, 234.0], [4.5, 235.0], [4.6, 235.0], [4.7, 236.0], [4.8, 238.0], [4.9, 239.0], [5.0, 239.0], [5.1, 240.0], [5.2, 240.0], [5.3, 241.0], [5.4, 242.0], [5.5, 243.0], [5.6, 244.0], [5.7, 245.0], [5.8, 246.0], [5.9, 247.0], [6.0, 248.0], [6.1, 249.0], [6.2, 250.0], [6.3, 252.0], [6.4, 253.0], [6.5, 254.0], [6.6, 256.0], [6.7, 257.0], [6.8, 258.0], [6.9, 260.0], [7.0, 261.0], [7.1, 262.0], [7.2, 263.0], [7.3, 265.0], [7.4, 266.0], [7.5, 268.0], [7.6, 269.0], [7.7, 270.0], [7.8, 271.0], [7.9, 272.0], [8.0, 273.0], [8.1, 274.0], [8.2, 275.0], [8.3, 276.0], [8.4, 277.0], [8.5, 278.0], [8.6, 279.0], [8.7, 279.0], [8.8, 280.0], [8.9, 280.0], [9.0, 281.0], [9.1, 281.0], [9.2, 282.0], [9.3, 283.0], [9.4, 285.0], [9.5, 286.0], [9.6, 286.0], [9.7, 287.0], [9.8, 288.0], [9.9, 289.0], [10.0, 289.0], [10.1, 290.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 293.0], [10.6, 295.0], [10.7, 295.0], [10.8, 296.0], [10.9, 297.0], [11.0, 299.0], [11.1, 300.0], [11.2, 302.0], [11.3, 302.0], [11.4, 302.0], [11.5, 303.0], [11.6, 304.0], [11.7, 306.0], [11.8, 307.0], [11.9, 308.0], [12.0, 309.0], [12.1, 311.0], [12.2, 312.0], [12.3, 313.0], [12.4, 315.0], [12.5, 316.0], [12.6, 317.0], [12.7, 319.0], [12.8, 320.0], [12.9, 321.0], [13.0, 322.0], [13.1, 323.0], [13.2, 323.0], [13.3, 324.0], [13.4, 325.0], [13.5, 326.0], [13.6, 328.0], [13.7, 329.0], [13.8, 331.0], [13.9, 333.0], [14.0, 333.0], [14.1, 335.0], [14.2, 338.0], [14.3, 340.0], [14.4, 340.0], [14.5, 342.0], [14.6, 344.0], [14.7, 345.0], [14.8, 347.0], [14.9, 348.0], [15.0, 350.0], [15.1, 353.0], [15.2, 354.0], [15.3, 356.0], [15.4, 357.0], [15.5, 359.0], [15.6, 361.0], [15.7, 363.0], [15.8, 364.0], [15.9, 366.0], [16.0, 368.0], [16.1, 370.0], [16.2, 374.0], [16.3, 376.0], [16.4, 379.0], [16.5, 381.0], [16.6, 383.0], [16.7, 384.0], [16.8, 385.0], [16.9, 387.0], [17.0, 388.0], [17.1, 389.0], [17.2, 390.0], [17.3, 391.0], [17.4, 392.0], [17.5, 393.0], [17.6, 394.0], [17.7, 395.0], [17.8, 396.0], [17.9, 397.0], [18.0, 398.0], [18.1, 399.0], [18.2, 399.0], [18.3, 401.0], [18.4, 402.0], [18.5, 403.0], [18.6, 403.0], [18.7, 405.0], [18.8, 405.0], [18.9, 406.0], [19.0, 407.0], [19.1, 408.0], [19.2, 409.0], [19.3, 411.0], [19.4, 412.0], [19.5, 412.0], [19.6, 413.0], [19.7, 414.0], [19.8, 415.0], [19.9, 416.0], [20.0, 417.0], [20.1, 418.0], [20.2, 418.0], [20.3, 419.0], [20.4, 420.0], [20.5, 421.0], [20.6, 423.0], [20.7, 425.0], [20.8, 426.0], [20.9, 426.0], [21.0, 427.0], [21.1, 429.0], [21.2, 430.0], [21.3, 430.0], [21.4, 431.0], [21.5, 432.0], [21.6, 433.0], [21.7, 434.0], [21.8, 434.0], [21.9, 436.0], [22.0, 436.0], [22.1, 437.0], [22.2, 438.0], [22.3, 439.0], [22.4, 440.0], [22.5, 442.0], [22.6, 442.0], [22.7, 443.0], [22.8, 444.0], [22.9, 445.0], [23.0, 445.0], [23.1, 447.0], [23.2, 449.0], [23.3, 449.0], [23.4, 450.0], [23.5, 450.0], [23.6, 452.0], [23.7, 452.0], [23.8, 453.0], [23.9, 454.0], [24.0, 455.0], [24.1, 455.0], [24.2, 456.0], [24.3, 456.0], [24.4, 457.0], [24.5, 457.0], [24.6, 458.0], [24.7, 458.0], [24.8, 459.0], [24.9, 460.0], [25.0, 460.0], [25.1, 461.0], [25.2, 462.0], [25.3, 462.0], [25.4, 463.0], [25.5, 464.0], [25.6, 464.0], [25.7, 465.0], [25.8, 466.0], [25.9, 467.0], [26.0, 468.0], [26.1, 469.0], [26.2, 469.0], [26.3, 470.0], [26.4, 471.0], [26.5, 471.0], [26.6, 473.0], [26.7, 473.0], [26.8, 474.0], [26.9, 475.0], [27.0, 476.0], [27.1, 477.0], [27.2, 477.0], [27.3, 478.0], [27.4, 479.0], [27.5, 479.0], [27.6, 480.0], [27.7, 480.0], [27.8, 481.0], [27.9, 482.0], [28.0, 482.0], [28.1, 483.0], [28.2, 484.0], [28.3, 485.0], [28.4, 485.0], [28.5, 485.0], [28.6, 486.0], [28.7, 488.0], [28.8, 488.0], [28.9, 489.0], [29.0, 490.0], [29.1, 491.0], [29.2, 492.0], [29.3, 492.0], [29.4, 493.0], [29.5, 494.0], [29.6, 494.0], [29.7, 495.0], [29.8, 496.0], [29.9, 498.0], [30.0, 499.0], [30.1, 501.0], [30.2, 502.0], [30.3, 504.0], [30.4, 505.0], [30.5, 506.0], [30.6, 508.0], [30.7, 510.0], [30.8, 511.0], [30.9, 512.0], [31.0, 514.0], [31.1, 514.0], [31.2, 516.0], [31.3, 516.0], [31.4, 517.0], [31.5, 518.0], [31.6, 520.0], [31.7, 520.0], [31.8, 521.0], [31.9, 522.0], [32.0, 523.0], [32.1, 526.0], [32.2, 527.0], [32.3, 527.0], [32.4, 528.0], [32.5, 529.0], [32.6, 530.0], [32.7, 531.0], [32.8, 532.0], [32.9, 534.0], [33.0, 534.0], [33.1, 535.0], [33.2, 535.0], [33.3, 537.0], [33.4, 537.0], [33.5, 538.0], [33.6, 539.0], [33.7, 540.0], [33.8, 541.0], [33.9, 542.0], [34.0, 544.0], [34.1, 544.0], [34.2, 546.0], [34.3, 547.0], [34.4, 547.0], [34.5, 548.0], [34.6, 549.0], [34.7, 550.0], [34.8, 550.0], [34.9, 552.0], [35.0, 553.0], [35.1, 553.0], [35.2, 554.0], [35.3, 555.0], [35.4, 555.0], [35.5, 557.0], [35.6, 557.0], [35.7, 559.0], [35.8, 560.0], [35.9, 561.0], [36.0, 562.0], [36.1, 563.0], [36.2, 563.0], [36.3, 564.0], [36.4, 564.0], [36.5, 565.0], [36.6, 566.0], [36.7, 567.0], [36.8, 568.0], [36.9, 569.0], [37.0, 569.0], [37.1, 570.0], [37.2, 571.0], [37.3, 573.0], [37.4, 574.0], [37.5, 574.0], [37.6, 575.0], [37.7, 576.0], [37.8, 577.0], [37.9, 578.0], [38.0, 579.0], [38.1, 581.0], [38.2, 581.0], [38.3, 583.0], [38.4, 584.0], [38.5, 585.0], [38.6, 586.0], [38.7, 587.0], [38.8, 588.0], [38.9, 589.0], [39.0, 589.0], [39.1, 591.0], [39.2, 591.0], [39.3, 592.0], [39.4, 592.0], [39.5, 593.0], [39.6, 594.0], [39.7, 595.0], [39.8, 597.0], [39.9, 598.0], [40.0, 599.0], [40.1, 600.0], [40.2, 601.0], [40.3, 602.0], [40.4, 604.0], [40.5, 605.0], [40.6, 605.0], [40.7, 607.0], [40.8, 607.0], [40.9, 608.0], [41.0, 608.0], [41.1, 610.0], [41.2, 611.0], [41.3, 612.0], [41.4, 613.0], [41.5, 614.0], [41.6, 616.0], [41.7, 617.0], [41.8, 618.0], [41.9, 619.0], [42.0, 619.0], [42.1, 620.0], [42.2, 621.0], [42.3, 622.0], [42.4, 623.0], [42.5, 625.0], [42.6, 627.0], [42.7, 628.0], [42.8, 630.0], [42.9, 631.0], [43.0, 631.0], [43.1, 632.0], [43.2, 633.0], [43.3, 634.0], [43.4, 635.0], [43.5, 636.0], [43.6, 637.0], [43.7, 638.0], [43.8, 640.0], [43.9, 641.0], [44.0, 642.0], [44.1, 643.0], [44.2, 645.0], [44.3, 646.0], [44.4, 647.0], [44.5, 648.0], [44.6, 649.0], [44.7, 650.0], [44.8, 652.0], [44.9, 653.0], [45.0, 654.0], [45.1, 655.0], [45.2, 656.0], [45.3, 657.0], [45.4, 658.0], [45.5, 660.0], [45.6, 661.0], [45.7, 663.0], [45.8, 664.0], [45.9, 666.0], [46.0, 667.0], [46.1, 668.0], [46.2, 669.0], [46.3, 671.0], [46.4, 673.0], [46.5, 674.0], [46.6, 675.0], [46.7, 676.0], [46.8, 676.0], [46.9, 678.0], [47.0, 680.0], [47.1, 681.0], [47.2, 682.0], [47.3, 684.0], [47.4, 687.0], [47.5, 688.0], [47.6, 689.0], [47.7, 690.0], [47.8, 692.0], [47.9, 693.0], [48.0, 694.0], [48.1, 695.0], [48.2, 696.0], [48.3, 699.0], [48.4, 701.0], [48.5, 702.0], [48.6, 705.0], [48.7, 706.0], [48.8, 707.0], [48.9, 709.0], [49.0, 712.0], [49.1, 713.0], [49.2, 714.0], [49.3, 715.0], [49.4, 717.0], [49.5, 718.0], [49.6, 721.0], [49.7, 722.0], [49.8, 724.0], [49.9, 725.0], [50.0, 726.0], [50.1, 727.0], [50.2, 728.0], [50.3, 729.0], [50.4, 731.0], [50.5, 732.0], [50.6, 734.0], [50.7, 736.0], [50.8, 738.0], [50.9, 739.0], [51.0, 742.0], [51.1, 744.0], [51.2, 745.0], [51.3, 748.0], [51.4, 749.0], [51.5, 751.0], [51.6, 752.0], [51.7, 752.0], [51.8, 754.0], [51.9, 756.0], [52.0, 758.0], [52.1, 759.0], [52.2, 760.0], [52.3, 760.0], [52.4, 763.0], [52.5, 765.0], [52.6, 765.0], [52.7, 768.0], [52.8, 769.0], [52.9, 770.0], [53.0, 772.0], [53.1, 773.0], [53.2, 775.0], [53.3, 778.0], [53.4, 779.0], [53.5, 781.0], [53.6, 782.0], [53.7, 785.0], [53.8, 785.0], [53.9, 787.0], [54.0, 788.0], [54.1, 790.0], [54.2, 792.0], [54.3, 794.0], [54.4, 797.0], [54.5, 798.0], [54.6, 801.0], [54.7, 802.0], [54.8, 803.0], [54.9, 805.0], [55.0, 806.0], [55.1, 808.0], [55.2, 809.0], [55.3, 811.0], [55.4, 813.0], [55.5, 814.0], [55.6, 816.0], [55.7, 817.0], [55.8, 819.0], [55.9, 820.0], [56.0, 821.0], [56.1, 823.0], [56.2, 823.0], [56.3, 824.0], [56.4, 826.0], [56.5, 828.0], [56.6, 829.0], [56.7, 829.0], [56.8, 830.0], [56.9, 833.0], [57.0, 834.0], [57.1, 838.0], [57.2, 839.0], [57.3, 841.0], [57.4, 843.0], [57.5, 846.0], [57.6, 847.0], [57.7, 848.0], [57.8, 850.0], [57.9, 851.0], [58.0, 852.0], [58.1, 853.0], [58.2, 854.0], [58.3, 856.0], [58.4, 857.0], [58.5, 859.0], [58.6, 860.0], [58.7, 862.0], [58.8, 864.0], [58.9, 865.0], [59.0, 867.0], [59.1, 868.0], [59.2, 870.0], [59.3, 872.0], [59.4, 874.0], [59.5, 875.0], [59.6, 877.0], [59.7, 879.0], [59.8, 880.0], [59.9, 882.0], [60.0, 883.0], [60.1, 884.0], [60.2, 886.0], [60.3, 887.0], [60.4, 887.0], [60.5, 889.0], [60.6, 891.0], [60.7, 893.0], [60.8, 894.0], [60.9, 896.0], [61.0, 898.0], [61.1, 900.0], [61.2, 902.0], [61.3, 903.0], [61.4, 906.0], [61.5, 908.0], [61.6, 909.0], [61.7, 912.0], [61.8, 913.0], [61.9, 914.0], [62.0, 914.0], [62.1, 916.0], [62.2, 920.0], [62.3, 921.0], [62.4, 923.0], [62.5, 924.0], [62.6, 927.0], [62.7, 928.0], [62.8, 930.0], [62.9, 933.0], [63.0, 934.0], [63.1, 937.0], [63.2, 940.0], [63.3, 943.0], [63.4, 945.0], [63.5, 946.0], [63.6, 948.0], [63.7, 950.0], [63.8, 951.0], [63.9, 953.0], [64.0, 953.0], [64.1, 957.0], [64.2, 958.0], [64.3, 961.0], [64.4, 962.0], [64.5, 964.0], [64.6, 968.0], [64.7, 969.0], [64.8, 971.0], [64.9, 973.0], [65.0, 975.0], [65.1, 976.0], [65.2, 977.0], [65.3, 982.0], [65.4, 983.0], [65.5, 986.0], [65.6, 989.0], [65.7, 990.0], [65.8, 991.0], [65.9, 993.0], [66.0, 994.0], [66.1, 995.0], [66.2, 997.0], [66.3, 999.0], [66.4, 1001.0], [66.5, 1005.0], [66.6, 1007.0], [66.7, 1009.0], [66.8, 1011.0], [66.9, 1012.0], [67.0, 1014.0], [67.1, 1016.0], [67.2, 1019.0], [67.3, 1020.0], [67.4, 1022.0], [67.5, 1024.0], [67.6, 1025.0], [67.7, 1027.0], [67.8, 1028.0], [67.9, 1030.0], [68.0, 1031.0], [68.1, 1032.0], [68.2, 1035.0], [68.3, 1037.0], [68.4, 1038.0], [68.5, 1041.0], [68.6, 1042.0], [68.7, 1044.0], [68.8, 1045.0], [68.9, 1047.0], [69.0, 1049.0], [69.1, 1050.0], [69.2, 1052.0], [69.3, 1053.0], [69.4, 1057.0], [69.5, 1058.0], [69.6, 1060.0], [69.7, 1061.0], [69.8, 1064.0], [69.9, 1065.0], [70.0, 1068.0], [70.1, 1069.0], [70.2, 1071.0], [70.3, 1072.0], [70.4, 1074.0], [70.5, 1075.0], [70.6, 1077.0], [70.7, 1078.0], [70.8, 1079.0], [70.9, 1080.0], [71.0, 1081.0], [71.1, 1084.0], [71.2, 1084.0], [71.3, 1087.0], [71.4, 1087.0], [71.5, 1089.0], [71.6, 1090.0], [71.7, 1092.0], [71.8, 1092.0], [71.9, 1094.0], [72.0, 1098.0], [72.1, 1099.0], [72.2, 1101.0], [72.3, 1102.0], [72.4, 1104.0], [72.5, 1107.0], [72.6, 1108.0], [72.7, 1109.0], [72.8, 1114.0], [72.9, 1116.0], [73.0, 1118.0], [73.1, 1120.0], [73.2, 1122.0], [73.3, 1125.0], [73.4, 1125.0], [73.5, 1126.0], [73.6, 1127.0], [73.7, 1130.0], [73.8, 1132.0], [73.9, 1133.0], [74.0, 1135.0], [74.1, 1137.0], [74.2, 1139.0], [74.3, 1141.0], [74.4, 1143.0], [74.5, 1144.0], [74.6, 1147.0], [74.7, 1148.0], [74.8, 1153.0], [74.9, 1157.0], [75.0, 1158.0], [75.1, 1161.0], [75.2, 1162.0], [75.3, 1165.0], [75.4, 1166.0], [75.5, 1169.0], [75.6, 1170.0], [75.7, 1171.0], [75.8, 1173.0], [75.9, 1175.0], [76.0, 1178.0], [76.1, 1179.0], [76.2, 1183.0], [76.3, 1187.0], [76.4, 1189.0], [76.5, 1194.0], [76.6, 1196.0], [76.7, 1197.0], [76.8, 1199.0], [76.9, 1202.0], [77.0, 1204.0], [77.1, 1206.0], [77.2, 1208.0], [77.3, 1211.0], [77.4, 1212.0], [77.5, 1216.0], [77.6, 1218.0], [77.7, 1220.0], [77.8, 1222.0], [77.9, 1228.0], [78.0, 1230.0], [78.1, 1231.0], [78.2, 1233.0], [78.3, 1235.0], [78.4, 1237.0], [78.5, 1240.0], [78.6, 1242.0], [78.7, 1245.0], [78.8, 1247.0], [78.9, 1249.0], [79.0, 1251.0], [79.1, 1252.0], [79.2, 1254.0], [79.3, 1256.0], [79.4, 1261.0], [79.5, 1262.0], [79.6, 1266.0], [79.7, 1271.0], [79.8, 1272.0], [79.9, 1274.0], [80.0, 1276.0], [80.1, 1278.0], [80.2, 1279.0], [80.3, 1282.0], [80.4, 1285.0], [80.5, 1289.0], [80.6, 1291.0], [80.7, 1293.0], [80.8, 1295.0], [80.9, 1297.0], [81.0, 1299.0], [81.1, 1300.0], [81.2, 1303.0], [81.3, 1306.0], [81.4, 1307.0], [81.5, 1311.0], [81.6, 1313.0], [81.7, 1314.0], [81.8, 1316.0], [81.9, 1319.0], [82.0, 1320.0], [82.1, 1321.0], [82.2, 1323.0], [82.3, 1325.0], [82.4, 1328.0], [82.5, 1332.0], [82.6, 1334.0], [82.7, 1338.0], [82.8, 1340.0], [82.9, 1341.0], [83.0, 1342.0], [83.1, 1345.0], [83.2, 1349.0], [83.3, 1350.0], [83.4, 1352.0], [83.5, 1355.0], [83.6, 1358.0], [83.7, 1362.0], [83.8, 1364.0], [83.9, 1365.0], [84.0, 1366.0], [84.1, 1368.0], [84.2, 1369.0], [84.3, 1371.0], [84.4, 1373.0], [84.5, 1376.0], [84.6, 1380.0], [84.7, 1383.0], [84.8, 1388.0], [84.9, 1391.0], [85.0, 1393.0], [85.1, 1394.0], [85.2, 1396.0], [85.3, 1398.0], [85.4, 1399.0], [85.5, 1401.0], [85.6, 1405.0], [85.7, 1407.0], [85.8, 1413.0], [85.9, 1417.0], [86.0, 1420.0], [86.1, 1421.0], [86.2, 1423.0], [86.3, 1425.0], [86.4, 1428.0], [86.5, 1432.0], [86.6, 1433.0], [86.7, 1436.0], [86.8, 1439.0], [86.9, 1445.0], [87.0, 1450.0], [87.1, 1453.0], [87.2, 1460.0], [87.3, 1463.0], [87.4, 1467.0], [87.5, 1471.0], [87.6, 1475.0], [87.7, 1480.0], [87.8, 1484.0], [87.9, 1485.0], [88.0, 1489.0], [88.1, 1493.0], [88.2, 1499.0], [88.3, 1503.0], [88.4, 1506.0], [88.5, 1508.0], [88.6, 1511.0], [88.7, 1515.0], [88.8, 1521.0], [88.9, 1526.0], [89.0, 1529.0], [89.1, 1535.0], [89.2, 1539.0], [89.3, 1544.0], [89.4, 1549.0], [89.5, 1552.0], [89.6, 1555.0], [89.7, 1560.0], [89.8, 1566.0], [89.9, 1569.0], [90.0, 1573.0], [90.1, 1581.0], [90.2, 1584.0], [90.3, 1592.0], [90.4, 1596.0], [90.5, 1600.0], [90.6, 1608.0], [90.7, 1616.0], [90.8, 1623.0], [90.9, 1628.0], [91.0, 1634.0], [91.1, 1639.0], [91.2, 1645.0], [91.3, 1653.0], [91.4, 1661.0], [91.5, 1664.0], [91.6, 1682.0], [91.7, 1685.0], [91.8, 1692.0], [91.9, 1695.0], [92.0, 1701.0], [92.1, 1703.0], [92.2, 1709.0], [92.3, 1714.0], [92.4, 1723.0], [92.5, 1731.0], [92.6, 1738.0], [92.7, 1751.0], [92.8, 1755.0], [92.9, 1759.0], [93.0, 1770.0], [93.1, 1777.0], [93.2, 1786.0], [93.3, 1793.0], [93.4, 1802.0], [93.5, 1806.0], [93.6, 1811.0], [93.7, 1816.0], [93.8, 1822.0], [93.9, 1824.0], [94.0, 1830.0], [94.1, 1839.0], [94.2, 1856.0], [94.3, 1875.0], [94.4, 1879.0], [94.5, 1894.0], [94.6, 1912.0], [94.7, 1923.0], [94.8, 1934.0], [94.9, 1937.0], [95.0, 1955.0], [95.1, 1965.0], [95.2, 1974.0], [95.3, 1986.0], [95.4, 2007.0], [95.5, 2015.0], [95.6, 2026.0], [95.7, 2038.0], [95.8, 2052.0], [95.9, 2065.0], [96.0, 2094.0], [96.1, 2106.0], [96.2, 2109.0], [96.3, 2121.0], [96.4, 2135.0], [96.5, 2143.0], [96.6, 2151.0], [96.7, 2160.0], [96.8, 2176.0], [96.9, 2194.0], [97.0, 2205.0], [97.1, 2223.0], [97.2, 2233.0], [97.3, 2245.0], [97.4, 2254.0], [97.5, 2266.0], [97.6, 2299.0], [97.7, 2317.0], [97.8, 2336.0], [97.9, 2368.0], [98.0, 2404.0], [98.1, 2449.0], [98.2, 2487.0], [98.3, 2518.0], [98.4, 2563.0], [98.5, 2596.0], [98.6, 2613.0], [98.7, 2684.0], [98.8, 2731.0], [98.9, 2756.0], [99.0, 2818.0], [99.1, 2847.0], [99.2, 2919.0], [99.3, 3102.0], [99.4, 3162.0], [99.5, 3322.0], [99.6, 3676.0], [99.7, 4124.0], [99.8, 4478.0], [99.9, 5010.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 611.0, "series": [{"data": [[600.0, 431.0], [700.0, 323.0], [800.0, 338.0], [900.0, 272.0], [1000.0, 301.0], [1100.0, 246.0], [1200.0, 216.0], [1300.0, 232.0], [1400.0, 142.0], [1500.0, 117.0], [1600.0, 78.0], [100.0, 35.0], [1700.0, 71.0], [1800.0, 63.0], [1900.0, 39.0], [2000.0, 39.0], [2100.0, 45.0], [2200.0, 36.0], [2300.0, 18.0], [2400.0, 15.0], [2500.0, 13.0], [2600.0, 12.0], [2800.0, 8.0], [2700.0, 12.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 10.0], [200.0, 538.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 2.0], [3900.0, 1.0], [4100.0, 3.0], [4300.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [300.0, 373.0], [4700.0, 1.0], [5000.0, 3.0], [5300.0, 2.0], [5400.0, 1.0], [5900.0, 1.0], [400.0, 611.0], [500.0, 521.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 609.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3020.0, "series": [{"data": [[0.0, 1561.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3020.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 609.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.813278008298754, "minX": 1.60383942E12, "maxY": 10.0, "series": [{"data": [[1.60383954E12, 10.0], [1.60383984E12, 10.0], [1.60383942E12, 10.0], [1.6038399E12, 9.813278008298754], [1.60383972E12, 10.0], [1.60383978E12, 10.0], [1.6038396E12, 10.0], [1.60383966E12, 10.0], [1.60383948E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038399E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 324.0, "minX": 1.0, "maxY": 2824.0, "series": [{"data": [[8.0, 324.0], [4.0, 871.0], [2.0, 2756.0], [1.0, 2824.0], [9.0, 1158.0], [10.0, 873.747346072189], [5.0, 1202.0], [6.0, 886.0], [3.0, 1874.0], [7.0, 2049.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 874.9188824662833]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 578.1833333333333, "minX": 1.60383942E12, "maxY": 3669518.8833333333, "series": [{"data": [[1.60383954E12, 3226936.2333333334], [1.60383984E12, 3069055.4833333334], [1.60383942E12, 508503.1], [1.6038399E12, 1225986.0166666666], [1.60383972E12, 2435937.3], [1.60383978E12, 3669518.8833333333], [1.6038396E12, 3562971.3666666667], [1.60383966E12, 3234623.55], [1.60383948E12, 3039096.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383954E12, 5482.766666666666], [1.60383984E12, 5746.0], [1.60383942E12, 578.1833333333333], [1.6038399E12, 1811.1333333333334], [1.60383972E12, 5048.0], [1.60383978E12, 5338.916666666667], [1.6038396E12, 5367.0], [1.60383966E12, 4593.666666666667], [1.60383948E12, 4611.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038399E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 787.8137384412154, "minX": 1.60383942E12, "maxY": 1234.526315789474, "series": [{"data": [[1.60383954E12, 810.6037991858892], [1.60383984E12, 787.8137384412154], [1.60383942E12, 1234.526315789474], [1.6038399E12, 1060.659751037344], [1.60383972E12, 849.1642857142858], [1.60383978E12, 840.5706293706303], [1.6038396E12, 845.8868458274392], [1.60383966E12, 979.7435064935066], [1.60383948E12, 936.9875195007794]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038399E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.2787318361951, "minX": 1.60383942E12, "maxY": 1231.276315789474, "series": [{"data": [[1.60383954E12, 808.7014925373135], [1.60383984E12, 786.2787318361951], [1.60383942E12, 1231.276315789474], [1.6038399E12, 1058.6929460580911], [1.60383972E12, 847.9157142857147], [1.60383978E12, 838.7230769230772], [1.6038396E12, 843.7963224893911], [1.60383966E12, 977.2207792207796], [1.60383948E12, 934.7862714508573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038399E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60383942E12, "maxY": 1.394736842105263, "series": [{"data": [[1.60383954E12, 0.016282225237449127], [1.60383984E12, 0.01849405548216644], [1.60383942E12, 1.394736842105263], [1.6038399E12, 0.0], [1.60383972E12, 0.01142857142857143], [1.60383978E12, 0.01958041958041959], [1.6038396E12, 0.014144271570014142], [1.60383966E12, 0.017857142857142853], [1.60383948E12, 0.018720748829953195]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038399E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60383942E12, "maxY": 5906.0, "series": [{"data": [[1.60383954E12, 4652.0], [1.60383984E12, 3162.0], [1.60383942E12, 3757.0], [1.6038399E12, 3687.0], [1.60383972E12, 5368.0], [1.60383978E12, 2641.0], [1.6038396E12, 3112.0], [1.60383966E12, 5906.0], [1.60383948E12, 5010.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383954E12, 214.20999912023544], [1.60383984E12, 195.82199981927872], [1.60383942E12, 226.0], [1.6038399E12, 250.42399953842164], [1.60383972E12, 206.85399899721145], [1.60383978E12, 202.77599931716918], [1.6038396E12, 196.0], [1.60383966E12, 200.10599970579148], [1.60383948E12, 219.77799984693527]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383954E12, 216.91860021114348], [1.60383984E12, 196.5042000722885], [1.60383942E12, 226.0], [1.6038399E12, 252.16640018463136], [1.60383972E12, 210.6394004011154], [1.60383978E12, 205.0], [1.6038396E12, 196.00920006752014], [1.60383966E12, 201.32490017652512], [1.60383948E12, 220.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383954E12, 216.03299973607062], [1.60383984E12, 196.20099990963936], [1.60383942E12, 226.0], [1.6038399E12, 251.39199976921083], [1.60383972E12, 208.95699949860574], [1.60383978E12, 204.20799965858458], [1.6038396E12, 196.0], [1.60383966E12, 200.72299985289573], [1.60383948E12, 220.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383954E12, 195.0], [1.60383984E12, 186.0], [1.60383942E12, 226.0], [1.6038399E12, 221.0], [1.60383972E12, 192.0], [1.60383978E12, 193.0], [1.6038396E12, 193.0], [1.60383966E12, 195.0], [1.60383948E12, 201.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383954E12, 618.0], [1.60383984E12, 623.0], [1.60383942E12, 959.0], [1.6038399E12, 914.0], [1.60383972E12, 759.0], [1.60383978E12, 659.0], [1.6038396E12, 691.0], [1.60383966E12, 822.5], [1.60383948E12, 809.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038399E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 402.0, "minX": 2.0, "maxY": 2257.5, "series": [{"data": [[2.0, 2257.5], [3.0, 1653.5], [4.0, 981.5], [5.0, 1537.0], [6.0, 1309.0], [7.0, 1130.0], [8.0, 993.5], [9.0, 952.0], [10.0, 932.5], [11.0, 816.0], [12.0, 748.5], [13.0, 773.0], [14.0, 664.5], [15.0, 668.0], [16.0, 545.0], [17.0, 519.5], [18.0, 474.5], [19.0, 569.0], [20.0, 457.5], [21.0, 437.0], [22.0, 433.5], [23.0, 427.0], [24.0, 426.0], [25.0, 438.5], [26.0, 425.5], [28.0, 402.0], [29.0, 406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 401.5, "minX": 2.0, "maxY": 2251.0, "series": [{"data": [[2.0, 2251.0], [3.0, 1648.5], [4.0, 974.5], [5.0, 1533.0], [6.0, 1306.0], [7.0, 1127.0], [8.0, 990.5], [9.0, 950.5], [10.0, 931.0], [11.0, 815.0], [12.0, 745.5], [13.0, 773.0], [14.0, 663.5], [15.0, 668.0], [16.0, 545.0], [17.0, 519.5], [18.0, 474.0], [19.0, 568.0], [20.0, 457.5], [21.0, 437.0], [22.0, 433.0], [23.0, 427.0], [24.0, 426.0], [25.0, 438.5], [26.0, 425.5], [28.0, 401.5], [29.0, 406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.60383942E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60383954E12, 12.283333333333333], [1.60383984E12, 12.616666666666667], [1.60383942E12, 1.4333333333333333], [1.6038399E12, 3.85], [1.60383972E12, 11.666666666666666], [1.60383978E12, 11.916666666666666], [1.6038396E12, 11.783333333333333], [1.60383966E12, 10.266666666666667], [1.60383948E12, 10.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038399E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2666666666666666, "minX": 1.60383942E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60383954E12, 12.283333333333333], [1.60383984E12, 12.616666666666667], [1.60383942E12, 1.2666666666666666], [1.6038399E12, 4.016666666666667], [1.60383972E12, 11.666666666666666], [1.60383978E12, 11.916666666666666], [1.6038396E12, 11.783333333333333], [1.60383966E12, 10.266666666666667], [1.60383948E12, 10.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038399E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2666666666666666, "minX": 1.60383942E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60383954E12, 12.283333333333333], [1.60383984E12, 12.616666666666667], [1.60383942E12, 1.2666666666666666], [1.6038399E12, 4.016666666666667], [1.60383972E12, 11.666666666666666], [1.60383978E12, 11.916666666666666], [1.6038396E12, 11.783333333333333], [1.60383966E12, 10.266666666666667], [1.60383948E12, 10.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038399E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2666666666666666, "minX": 1.60383942E12, "maxY": 12.616666666666667, "series": [{"data": [[1.60383954E12, 12.283333333333333], [1.60383984E12, 12.616666666666667], [1.60383942E12, 1.2666666666666666], [1.6038399E12, 4.016666666666667], [1.60383972E12, 11.666666666666666], [1.60383978E12, 11.916666666666666], [1.6038396E12, 11.783333333333333], [1.60383966E12, 10.266666666666667], [1.60383948E12, 10.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038399E12, "title": "Total Transactions Per Second"}},
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

