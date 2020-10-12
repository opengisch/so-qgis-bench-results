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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 6283.0, "series": [{"data": [[0.0, 175.0], [0.1, 185.0], [0.2, 189.0], [0.3, 190.0], [0.4, 190.0], [0.5, 191.0], [0.6, 192.0], [0.7, 193.0], [0.8, 193.0], [0.9, 194.0], [1.0, 194.0], [1.1, 196.0], [1.2, 196.0], [1.3, 198.0], [1.4, 198.0], [1.5, 199.0], [1.6, 199.0], [1.7, 200.0], [1.8, 201.0], [1.9, 201.0], [2.0, 202.0], [2.1, 203.0], [2.2, 204.0], [2.3, 205.0], [2.4, 206.0], [2.5, 206.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 211.0], [3.2, 212.0], [3.3, 213.0], [3.4, 213.0], [3.5, 215.0], [3.6, 215.0], [3.7, 216.0], [3.8, 217.0], [3.9, 218.0], [4.0, 218.0], [4.1, 219.0], [4.2, 220.0], [4.3, 220.0], [4.4, 221.0], [4.5, 222.0], [4.6, 223.0], [4.7, 223.0], [4.8, 223.0], [4.9, 224.0], [5.0, 224.0], [5.1, 225.0], [5.2, 225.0], [5.3, 227.0], [5.4, 227.0], [5.5, 228.0], [5.6, 229.0], [5.7, 229.0], [5.8, 230.0], [5.9, 231.0], [6.0, 232.0], [6.1, 233.0], [6.2, 234.0], [6.3, 235.0], [6.4, 236.0], [6.5, 239.0], [6.6, 239.0], [6.7, 241.0], [6.8, 242.0], [6.9, 243.0], [7.0, 244.0], [7.1, 245.0], [7.2, 245.0], [7.3, 246.0], [7.4, 247.0], [7.5, 249.0], [7.6, 251.0], [7.7, 252.0], [7.8, 253.0], [7.9, 255.0], [8.0, 257.0], [8.1, 258.0], [8.2, 259.0], [8.3, 260.0], [8.4, 260.0], [8.5, 262.0], [8.6, 264.0], [8.7, 265.0], [8.8, 267.0], [8.9, 268.0], [9.0, 269.0], [9.1, 269.0], [9.2, 271.0], [9.3, 271.0], [9.4, 272.0], [9.5, 273.0], [9.6, 273.0], [9.7, 274.0], [9.8, 274.0], [9.9, 274.0], [10.0, 275.0], [10.1, 276.0], [10.2, 276.0], [10.3, 277.0], [10.4, 278.0], [10.5, 278.0], [10.6, 279.0], [10.7, 280.0], [10.8, 281.0], [10.9, 282.0], [11.0, 282.0], [11.1, 284.0], [11.2, 285.0], [11.3, 286.0], [11.4, 288.0], [11.5, 289.0], [11.6, 291.0], [11.7, 292.0], [11.8, 293.0], [11.9, 294.0], [12.0, 295.0], [12.1, 296.0], [12.2, 297.0], [12.3, 297.0], [12.4, 299.0], [12.5, 300.0], [12.6, 300.0], [12.7, 301.0], [12.8, 302.0], [12.9, 304.0], [13.0, 306.0], [13.1, 307.0], [13.2, 309.0], [13.3, 310.0], [13.4, 311.0], [13.5, 312.0], [13.6, 314.0], [13.7, 314.0], [13.8, 315.0], [13.9, 316.0], [14.0, 317.0], [14.1, 319.0], [14.2, 320.0], [14.3, 321.0], [14.4, 322.0], [14.5, 322.0], [14.6, 323.0], [14.7, 325.0], [14.8, 326.0], [14.9, 328.0], [15.0, 330.0], [15.1, 331.0], [15.2, 333.0], [15.3, 335.0], [15.4, 335.0], [15.5, 337.0], [15.6, 338.0], [15.7, 339.0], [15.8, 340.0], [15.9, 341.0], [16.0, 343.0], [16.1, 345.0], [16.2, 347.0], [16.3, 348.0], [16.4, 349.0], [16.5, 351.0], [16.6, 352.0], [16.7, 354.0], [16.8, 355.0], [16.9, 356.0], [17.0, 358.0], [17.1, 359.0], [17.2, 361.0], [17.3, 362.0], [17.4, 365.0], [17.5, 367.0], [17.6, 369.0], [17.7, 373.0], [17.8, 374.0], [17.9, 375.0], [18.0, 376.0], [18.1, 378.0], [18.2, 379.0], [18.3, 380.0], [18.4, 382.0], [18.5, 382.0], [18.6, 383.0], [18.7, 384.0], [18.8, 384.0], [18.9, 385.0], [19.0, 386.0], [19.1, 388.0], [19.2, 388.0], [19.3, 389.0], [19.4, 390.0], [19.5, 391.0], [19.6, 392.0], [19.7, 393.0], [19.8, 393.0], [19.9, 394.0], [20.0, 395.0], [20.1, 395.0], [20.2, 397.0], [20.3, 397.0], [20.4, 398.0], [20.5, 398.0], [20.6, 400.0], [20.7, 400.0], [20.8, 401.0], [20.9, 402.0], [21.0, 402.0], [21.1, 404.0], [21.2, 404.0], [21.3, 405.0], [21.4, 406.0], [21.5, 407.0], [21.6, 408.0], [21.7, 408.0], [21.8, 409.0], [21.9, 410.0], [22.0, 411.0], [22.1, 412.0], [22.2, 414.0], [22.3, 415.0], [22.4, 416.0], [22.5, 417.0], [22.6, 417.0], [22.7, 418.0], [22.8, 419.0], [22.9, 419.0], [23.0, 421.0], [23.1, 421.0], [23.2, 421.0], [23.3, 422.0], [23.4, 423.0], [23.5, 425.0], [23.6, 426.0], [23.7, 428.0], [23.8, 428.0], [23.9, 429.0], [24.0, 429.0], [24.1, 430.0], [24.2, 431.0], [24.3, 432.0], [24.4, 432.0], [24.5, 432.0], [24.6, 433.0], [24.7, 434.0], [24.8, 435.0], [24.9, 436.0], [25.0, 436.0], [25.1, 437.0], [25.2, 438.0], [25.3, 439.0], [25.4, 439.0], [25.5, 440.0], [25.6, 441.0], [25.7, 441.0], [25.8, 442.0], [25.9, 443.0], [26.0, 443.0], [26.1, 445.0], [26.2, 445.0], [26.3, 446.0], [26.4, 446.0], [26.5, 447.0], [26.6, 448.0], [26.7, 449.0], [26.8, 449.0], [26.9, 450.0], [27.0, 450.0], [27.1, 451.0], [27.2, 452.0], [27.3, 453.0], [27.4, 454.0], [27.5, 455.0], [27.6, 456.0], [27.7, 456.0], [27.8, 457.0], [27.9, 459.0], [28.0, 460.0], [28.1, 461.0], [28.2, 462.0], [28.3, 463.0], [28.4, 464.0], [28.5, 465.0], [28.6, 466.0], [28.7, 467.0], [28.8, 468.0], [28.9, 469.0], [29.0, 470.0], [29.1, 471.0], [29.2, 473.0], [29.3, 474.0], [29.4, 475.0], [29.5, 476.0], [29.6, 476.0], [29.7, 477.0], [29.8, 479.0], [29.9, 480.0], [30.0, 481.0], [30.1, 482.0], [30.2, 483.0], [30.3, 484.0], [30.4, 485.0], [30.5, 486.0], [30.6, 487.0], [30.7, 488.0], [30.8, 488.0], [30.9, 489.0], [31.0, 491.0], [31.1, 492.0], [31.2, 493.0], [31.3, 493.0], [31.4, 495.0], [31.5, 496.0], [31.6, 497.0], [31.7, 499.0], [31.8, 501.0], [31.9, 501.0], [32.0, 502.0], [32.1, 503.0], [32.2, 505.0], [32.3, 505.0], [32.4, 506.0], [32.5, 508.0], [32.6, 508.0], [32.7, 509.0], [32.8, 510.0], [32.9, 510.0], [33.0, 512.0], [33.1, 513.0], [33.2, 514.0], [33.3, 514.0], [33.4, 515.0], [33.5, 516.0], [33.6, 517.0], [33.7, 519.0], [33.8, 520.0], [33.9, 521.0], [34.0, 524.0], [34.1, 525.0], [34.2, 525.0], [34.3, 526.0], [34.4, 527.0], [34.5, 528.0], [34.6, 529.0], [34.7, 530.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 533.0], [35.2, 534.0], [35.3, 535.0], [35.4, 535.0], [35.5, 536.0], [35.6, 537.0], [35.7, 537.0], [35.8, 538.0], [35.9, 538.0], [36.0, 539.0], [36.1, 540.0], [36.2, 541.0], [36.3, 541.0], [36.4, 542.0], [36.5, 543.0], [36.6, 544.0], [36.7, 544.0], [36.8, 545.0], [36.9, 546.0], [37.0, 547.0], [37.1, 548.0], [37.2, 549.0], [37.3, 550.0], [37.4, 551.0], [37.5, 552.0], [37.6, 554.0], [37.7, 554.0], [37.8, 555.0], [37.9, 556.0], [38.0, 557.0], [38.1, 558.0], [38.2, 559.0], [38.3, 560.0], [38.4, 560.0], [38.5, 561.0], [38.6, 561.0], [38.7, 563.0], [38.8, 564.0], [38.9, 565.0], [39.0, 565.0], [39.1, 567.0], [39.2, 568.0], [39.3, 569.0], [39.4, 569.0], [39.5, 570.0], [39.6, 571.0], [39.7, 572.0], [39.8, 574.0], [39.9, 575.0], [40.0, 576.0], [40.1, 577.0], [40.2, 578.0], [40.3, 579.0], [40.4, 580.0], [40.5, 581.0], [40.6, 583.0], [40.7, 584.0], [40.8, 585.0], [40.9, 585.0], [41.0, 587.0], [41.1, 588.0], [41.2, 589.0], [41.3, 590.0], [41.4, 590.0], [41.5, 592.0], [41.6, 593.0], [41.7, 594.0], [41.8, 595.0], [41.9, 597.0], [42.0, 598.0], [42.1, 599.0], [42.2, 600.0], [42.3, 601.0], [42.4, 602.0], [42.5, 603.0], [42.6, 605.0], [42.7, 607.0], [42.8, 608.0], [42.9, 609.0], [43.0, 611.0], [43.1, 611.0], [43.2, 612.0], [43.3, 614.0], [43.4, 615.0], [43.5, 616.0], [43.6, 617.0], [43.7, 618.0], [43.8, 619.0], [43.9, 621.0], [44.0, 622.0], [44.1, 624.0], [44.2, 624.0], [44.3, 626.0], [44.4, 627.0], [44.5, 628.0], [44.6, 630.0], [44.7, 630.0], [44.8, 631.0], [44.9, 632.0], [45.0, 633.0], [45.1, 634.0], [45.2, 635.0], [45.3, 636.0], [45.4, 638.0], [45.5, 639.0], [45.6, 641.0], [45.7, 642.0], [45.8, 643.0], [45.9, 644.0], [46.0, 645.0], [46.1, 648.0], [46.2, 648.0], [46.3, 649.0], [46.4, 651.0], [46.5, 652.0], [46.6, 653.0], [46.7, 654.0], [46.8, 656.0], [46.9, 658.0], [47.0, 659.0], [47.1, 660.0], [47.2, 662.0], [47.3, 663.0], [47.4, 665.0], [47.5, 667.0], [47.6, 669.0], [47.7, 670.0], [47.8, 671.0], [47.9, 674.0], [48.0, 675.0], [48.1, 676.0], [48.2, 678.0], [48.3, 680.0], [48.4, 681.0], [48.5, 683.0], [48.6, 685.0], [48.7, 687.0], [48.8, 689.0], [48.9, 689.0], [49.0, 692.0], [49.1, 693.0], [49.2, 695.0], [49.3, 696.0], [49.4, 698.0], [49.5, 701.0], [49.6, 703.0], [49.7, 706.0], [49.8, 707.0], [49.9, 710.0], [50.0, 712.0], [50.1, 713.0], [50.2, 715.0], [50.3, 716.0], [50.4, 718.0], [50.5, 719.0], [50.6, 721.0], [50.7, 722.0], [50.8, 724.0], [50.9, 725.0], [51.0, 726.0], [51.1, 728.0], [51.2, 729.0], [51.3, 731.0], [51.4, 733.0], [51.5, 734.0], [51.6, 735.0], [51.7, 736.0], [51.8, 737.0], [51.9, 739.0], [52.0, 741.0], [52.1, 742.0], [52.2, 744.0], [52.3, 746.0], [52.4, 748.0], [52.5, 749.0], [52.6, 751.0], [52.7, 753.0], [52.8, 754.0], [52.9, 756.0], [53.0, 757.0], [53.1, 758.0], [53.2, 760.0], [53.3, 762.0], [53.4, 764.0], [53.5, 766.0], [53.6, 767.0], [53.7, 769.0], [53.8, 771.0], [53.9, 774.0], [54.0, 777.0], [54.1, 777.0], [54.2, 780.0], [54.3, 782.0], [54.4, 784.0], [54.5, 785.0], [54.6, 786.0], [54.7, 788.0], [54.8, 789.0], [54.9, 790.0], [55.0, 792.0], [55.1, 793.0], [55.2, 794.0], [55.3, 796.0], [55.4, 797.0], [55.5, 800.0], [55.6, 802.0], [55.7, 804.0], [55.8, 806.0], [55.9, 808.0], [56.0, 810.0], [56.1, 812.0], [56.2, 813.0], [56.3, 814.0], [56.4, 815.0], [56.5, 816.0], [56.6, 818.0], [56.7, 821.0], [56.8, 823.0], [56.9, 825.0], [57.0, 826.0], [57.1, 829.0], [57.2, 830.0], [57.3, 832.0], [57.4, 833.0], [57.5, 834.0], [57.6, 837.0], [57.7, 840.0], [57.8, 845.0], [57.9, 848.0], [58.0, 849.0], [58.1, 851.0], [58.2, 855.0], [58.3, 856.0], [58.4, 857.0], [58.5, 859.0], [58.6, 862.0], [58.7, 863.0], [58.8, 866.0], [58.9, 867.0], [59.0, 868.0], [59.1, 871.0], [59.2, 873.0], [59.3, 875.0], [59.4, 878.0], [59.5, 881.0], [59.6, 883.0], [59.7, 884.0], [59.8, 885.0], [59.9, 887.0], [60.0, 890.0], [60.1, 891.0], [60.2, 893.0], [60.3, 895.0], [60.4, 896.0], [60.5, 898.0], [60.6, 899.0], [60.7, 901.0], [60.8, 903.0], [60.9, 904.0], [61.0, 907.0], [61.1, 910.0], [61.2, 911.0], [61.3, 912.0], [61.4, 913.0], [61.5, 915.0], [61.6, 918.0], [61.7, 920.0], [61.8, 921.0], [61.9, 922.0], [62.0, 923.0], [62.1, 924.0], [62.2, 927.0], [62.3, 928.0], [62.4, 931.0], [62.5, 932.0], [62.6, 933.0], [62.7, 934.0], [62.8, 936.0], [62.9, 937.0], [63.0, 939.0], [63.1, 940.0], [63.2, 944.0], [63.3, 945.0], [63.4, 947.0], [63.5, 948.0], [63.6, 950.0], [63.7, 952.0], [63.8, 954.0], [63.9, 956.0], [64.0, 958.0], [64.1, 961.0], [64.2, 962.0], [64.3, 964.0], [64.4, 965.0], [64.5, 967.0], [64.6, 969.0], [64.7, 970.0], [64.8, 972.0], [64.9, 975.0], [65.0, 976.0], [65.1, 977.0], [65.2, 980.0], [65.3, 981.0], [65.4, 983.0], [65.5, 985.0], [65.6, 986.0], [65.7, 988.0], [65.8, 991.0], [65.9, 992.0], [66.0, 994.0], [66.1, 995.0], [66.2, 997.0], [66.3, 1000.0], [66.4, 1000.0], [66.5, 1003.0], [66.6, 1003.0], [66.7, 1004.0], [66.8, 1006.0], [66.9, 1009.0], [67.0, 1010.0], [67.1, 1011.0], [67.2, 1013.0], [67.3, 1014.0], [67.4, 1016.0], [67.5, 1019.0], [67.6, 1021.0], [67.7, 1023.0], [67.8, 1026.0], [67.9, 1028.0], [68.0, 1030.0], [68.1, 1031.0], [68.2, 1032.0], [68.3, 1036.0], [68.4, 1038.0], [68.5, 1040.0], [68.6, 1042.0], [68.7, 1042.0], [68.8, 1043.0], [68.9, 1045.0], [69.0, 1047.0], [69.1, 1049.0], [69.2, 1050.0], [69.3, 1051.0], [69.4, 1052.0], [69.5, 1053.0], [69.6, 1055.0], [69.7, 1058.0], [69.8, 1059.0], [69.9, 1060.0], [70.0, 1062.0], [70.1, 1063.0], [70.2, 1065.0], [70.3, 1066.0], [70.4, 1068.0], [70.5, 1069.0], [70.6, 1071.0], [70.7, 1074.0], [70.8, 1074.0], [70.9, 1076.0], [71.0, 1078.0], [71.1, 1080.0], [71.2, 1082.0], [71.3, 1082.0], [71.4, 1084.0], [71.5, 1085.0], [71.6, 1086.0], [71.7, 1087.0], [71.8, 1088.0], [71.9, 1089.0], [72.0, 1090.0], [72.1, 1093.0], [72.2, 1095.0], [72.3, 1097.0], [72.4, 1099.0], [72.5, 1101.0], [72.6, 1103.0], [72.7, 1105.0], [72.8, 1106.0], [72.9, 1108.0], [73.0, 1111.0], [73.1, 1112.0], [73.2, 1113.0], [73.3, 1117.0], [73.4, 1121.0], [73.5, 1122.0], [73.6, 1124.0], [73.7, 1124.0], [73.8, 1126.0], [73.9, 1127.0], [74.0, 1129.0], [74.1, 1131.0], [74.2, 1132.0], [74.3, 1137.0], [74.4, 1140.0], [74.5, 1142.0], [74.6, 1144.0], [74.7, 1146.0], [74.8, 1149.0], [74.9, 1152.0], [75.0, 1155.0], [75.1, 1157.0], [75.2, 1159.0], [75.3, 1161.0], [75.4, 1162.0], [75.5, 1166.0], [75.6, 1169.0], [75.7, 1170.0], [75.8, 1175.0], [75.9, 1179.0], [76.0, 1181.0], [76.1, 1182.0], [76.2, 1190.0], [76.3, 1193.0], [76.4, 1195.0], [76.5, 1196.0], [76.6, 1199.0], [76.7, 1199.0], [76.8, 1201.0], [76.9, 1203.0], [77.0, 1205.0], [77.1, 1208.0], [77.2, 1211.0], [77.3, 1214.0], [77.4, 1220.0], [77.5, 1224.0], [77.6, 1226.0], [77.7, 1228.0], [77.8, 1231.0], [77.9, 1232.0], [78.0, 1236.0], [78.1, 1240.0], [78.2, 1242.0], [78.3, 1251.0], [78.4, 1254.0], [78.5, 1257.0], [78.6, 1259.0], [78.7, 1261.0], [78.8, 1263.0], [78.9, 1265.0], [79.0, 1266.0], [79.1, 1268.0], [79.2, 1271.0], [79.3, 1273.0], [79.4, 1276.0], [79.5, 1277.0], [79.6, 1278.0], [79.7, 1281.0], [79.8, 1284.0], [79.9, 1286.0], [80.0, 1288.0], [80.1, 1290.0], [80.2, 1292.0], [80.3, 1294.0], [80.4, 1295.0], [80.5, 1297.0], [80.6, 1300.0], [80.7, 1301.0], [80.8, 1302.0], [80.9, 1304.0], [81.0, 1306.0], [81.1, 1308.0], [81.2, 1310.0], [81.3, 1313.0], [81.4, 1314.0], [81.5, 1317.0], [81.6, 1318.0], [81.7, 1319.0], [81.8, 1322.0], [81.9, 1325.0], [82.0, 1327.0], [82.1, 1328.0], [82.2, 1335.0], [82.3, 1335.0], [82.4, 1338.0], [82.5, 1339.0], [82.6, 1339.0], [82.7, 1342.0], [82.8, 1344.0], [82.9, 1347.0], [83.0, 1351.0], [83.1, 1354.0], [83.2, 1357.0], [83.3, 1359.0], [83.4, 1361.0], [83.5, 1364.0], [83.6, 1366.0], [83.7, 1369.0], [83.8, 1372.0], [83.9, 1373.0], [84.0, 1374.0], [84.1, 1375.0], [84.2, 1377.0], [84.3, 1379.0], [84.4, 1384.0], [84.5, 1386.0], [84.6, 1389.0], [84.7, 1390.0], [84.8, 1391.0], [84.9, 1393.0], [85.0, 1396.0], [85.1, 1397.0], [85.2, 1398.0], [85.3, 1402.0], [85.4, 1405.0], [85.5, 1408.0], [85.6, 1410.0], [85.7, 1414.0], [85.8, 1416.0], [85.9, 1420.0], [86.0, 1423.0], [86.1, 1425.0], [86.2, 1427.0], [86.3, 1431.0], [86.4, 1434.0], [86.5, 1436.0], [86.6, 1437.0], [86.7, 1439.0], [86.8, 1442.0], [86.9, 1446.0], [87.0, 1449.0], [87.1, 1453.0], [87.2, 1455.0], [87.3, 1461.0], [87.4, 1462.0], [87.5, 1464.0], [87.6, 1466.0], [87.7, 1467.0], [87.8, 1471.0], [87.9, 1476.0], [88.0, 1479.0], [88.1, 1484.0], [88.2, 1486.0], [88.3, 1489.0], [88.4, 1492.0], [88.5, 1498.0], [88.6, 1500.0], [88.7, 1502.0], [88.8, 1508.0], [88.9, 1510.0], [89.0, 1516.0], [89.1, 1519.0], [89.2, 1530.0], [89.3, 1531.0], [89.4, 1536.0], [89.5, 1543.0], [89.6, 1549.0], [89.7, 1552.0], [89.8, 1555.0], [89.9, 1560.0], [90.0, 1566.0], [90.1, 1570.0], [90.2, 1583.0], [90.3, 1585.0], [90.4, 1593.0], [90.5, 1598.0], [90.6, 1604.0], [90.7, 1609.0], [90.8, 1612.0], [90.9, 1615.0], [91.0, 1622.0], [91.1, 1630.0], [91.2, 1633.0], [91.3, 1642.0], [91.4, 1646.0], [91.5, 1650.0], [91.6, 1662.0], [91.7, 1670.0], [91.8, 1678.0], [91.9, 1689.0], [92.0, 1691.0], [92.1, 1699.0], [92.2, 1706.0], [92.3, 1712.0], [92.4, 1718.0], [92.5, 1724.0], [92.6, 1735.0], [92.7, 1747.0], [92.8, 1760.0], [92.9, 1772.0], [93.0, 1777.0], [93.1, 1791.0], [93.2, 1805.0], [93.3, 1807.0], [93.4, 1821.0], [93.5, 1826.0], [93.6, 1831.0], [93.7, 1838.0], [93.8, 1843.0], [93.9, 1848.0], [94.0, 1853.0], [94.1, 1874.0], [94.2, 1877.0], [94.3, 1883.0], [94.4, 1894.0], [94.5, 1903.0], [94.6, 1924.0], [94.7, 1930.0], [94.8, 1937.0], [94.9, 1943.0], [95.0, 1953.0], [95.1, 1962.0], [95.2, 1973.0], [95.3, 1992.0], [95.4, 2013.0], [95.5, 2024.0], [95.6, 2042.0], [95.7, 2052.0], [95.8, 2066.0], [95.9, 2082.0], [96.0, 2094.0], [96.1, 2103.0], [96.2, 2121.0], [96.3, 2137.0], [96.4, 2150.0], [96.5, 2179.0], [96.6, 2191.0], [96.7, 2202.0], [96.8, 2221.0], [96.9, 2237.0], [97.0, 2246.0], [97.1, 2264.0], [97.2, 2269.0], [97.3, 2292.0], [97.4, 2321.0], [97.5, 2366.0], [97.6, 2397.0], [97.7, 2439.0], [97.8, 2468.0], [97.9, 2494.0], [98.0, 2506.0], [98.1, 2529.0], [98.2, 2563.0], [98.3, 2599.0], [98.4, 2628.0], [98.5, 2703.0], [98.6, 2719.0], [98.7, 2750.0], [98.8, 2797.0], [98.9, 2908.0], [99.0, 2991.0], [99.1, 3049.0], [99.2, 3169.0], [99.3, 3257.0], [99.4, 3441.0], [99.5, 3597.0], [99.6, 3731.0], [99.7, 3982.0], [99.8, 4458.0], [99.9, 5070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 578.0, "series": [{"data": [[600.0, 380.0], [700.0, 311.0], [800.0, 267.0], [900.0, 293.0], [1000.0, 319.0], [1100.0, 225.0], [1200.0, 200.0], [1300.0, 240.0], [1400.0, 175.0], [1500.0, 101.0], [1600.0, 81.0], [1700.0, 57.0], [1800.0, 65.0], [1900.0, 46.0], [2000.0, 38.0], [2100.0, 31.0], [2200.0, 34.0], [2300.0, 15.0], [2400.0, 18.0], [2500.0, 18.0], [2600.0, 10.0], [2700.0, 16.0], [2800.0, 3.0], [2900.0, 9.0], [3000.0, 6.0], [3100.0, 4.0], [3200.0, 4.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 6.0], [3700.0, 5.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 2.0], [4200.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5200.0, 2.0], [5500.0, 1.0], [5900.0, 1.0], [6200.0, 1.0], [100.0, 84.0], [200.0, 564.0], [300.0, 421.0], [400.0, 578.0], [500.0, 541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 590.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2950.0, "series": [{"data": [[0.0, 1650.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2950.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 590.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.896313364055297, "minX": 1.60245816E12, "maxY": 10.0, "series": [{"data": [[1.60245816E12, 10.0], [1.60245834E12, 10.0], [1.60245852E12, 10.0], [1.60245822E12, 10.0], [1.6024584E12, 10.0], [1.60245858E12, 9.896313364055297], [1.60245828E12, 10.0], [1.60245846E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.0, "maxY": 2925.0, "series": [{"data": [[8.0, 849.0], [4.0, 1076.0], [2.0, 2925.0], [1.0, 2633.0], [9.0, 1644.0], [10.0, 867.3383516695645], [5.0, 602.0], [6.0, 1044.0], [3.0, 733.0], [7.0, 321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 868.1131021194631]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3275.3, "minX": 1.60245816E12, "maxY": 3630711.7666666666, "series": [{"data": [[1.60245816E12, 2693755.783333333], [1.60245834E12, 3272072.966666667], [1.60245852E12, 3107450.0833333335], [1.60245822E12, 2920552.25], [1.6024584E12, 3036611.5], [1.60245858E12, 2074410.1666666667], [1.60245828E12, 3630711.7666666666], [1.60245846E12, 3237347.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245816E12, 3775.45], [1.60245834E12, 5151.95], [1.60245852E12, 5928.95], [1.60245822E12, 5152.116666666667], [1.6024584E12, 4542.15], [1.60245858E12, 3275.3], [1.60245828E12, 5494.283333333334], [1.60245846E12, 5257.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 762.8503836317124, "minX": 1.60245816E12, "maxY": 956.2080152671757, "series": [{"data": [[1.60245816E12, 956.2080152671757], [1.60245834E12, 878.7771260997065], [1.60245852E12, 762.8503836317124], [1.60245822E12, 854.4171428571427], [1.6024584E12, 938.1347068145798], [1.60245858E12, 953.566820276498], [1.60245828E12, 826.9558011049725], [1.60245846E12, 849.8737727910242]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 761.4117647058829, "minX": 1.60245816E12, "maxY": 953.9942748091603, "series": [{"data": [[1.60245816E12, 953.9942748091603], [1.60245834E12, 876.6422287390028], [1.60245852E12, 761.4117647058829], [1.60245822E12, 852.5714285714292], [1.6024584E12, 936.2599049128365], [1.60245858E12, 952.0161290322577], [1.60245828E12, 824.577348066299], [1.60245846E12, 848.2566619915858]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01402524544179523, "minX": 1.60245816E12, "maxY": 0.16221374045801526, "series": [{"data": [[1.60245816E12, 0.16221374045801526], [1.60245834E12, 0.014662756598240482], [1.60245852E12, 0.019181585677749354], [1.60245822E12, 0.022857142857142895], [1.6024584E12, 0.031695721077654525], [1.60245858E12, 0.020737327188940106], [1.60245828E12, 0.016574585635359112], [1.60245846E12, 0.01402524544179523]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60245816E12, "maxY": 6283.0, "series": [{"data": [[1.60245816E12, 5209.0], [1.60245834E12, 4768.0], [1.60245852E12, 2549.0], [1.60245822E12, 3982.0], [1.6024584E12, 6283.0], [1.60245858E12, 3886.0], [1.60245828E12, 2937.0], [1.60245846E12, 3223.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245816E12, 200.72499987483025], [1.60245834E12, 194.0], [1.60245852E12, 189.04699981331825], [1.60245822E12, 203.0], [1.6024584E12, 196.68799984931945], [1.60245858E12, 191.0], [1.60245828E12, 191.52499982714653], [1.60245846E12, 193.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245816E12, 201.0], [1.60245834E12, 194.0], [1.60245852E12, 189.7517000746727], [1.60245822E12, 203.0], [1.6024584E12, 197.2568000602722], [1.60245858E12, 191.61300008296968], [1.60245828E12, 192.1775000691414], [1.60245846E12, 193.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245816E12, 200.98749993741512], [1.60245834E12, 194.0], [1.60245852E12, 189.43849990665913], [1.60245822E12, 203.0], [1.6024584E12, 197.00399992465972], [1.60245858E12, 191.26499989628792], [1.60245828E12, 191.88749991357327], [1.60245846E12, 193.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245816E12, 197.0], [1.60245834E12, 189.0], [1.60245852E12, 181.0], [1.60245822E12, 194.0], [1.6024584E12, 190.0], [1.60245858E12, 186.0], [1.60245828E12, 175.0], [1.60245846E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245816E12, 806.0], [1.60245834E12, 703.0], [1.60245852E12, 599.5], [1.60245822E12, 645.0], [1.6024584E12, 792.0], [1.60245858E12, 805.5], [1.60245828E12, 658.0], [1.60245846E12, 652.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 2779.0, "series": [{"data": [[2.0, 2779.0], [3.0, 2485.0], [4.0, 1721.5], [5.0, 1126.0], [6.0, 1242.5], [7.0, 910.0], [8.0, 1053.0], [9.0, 979.5], [10.0, 917.0], [11.0, 818.5], [12.0, 805.0], [13.0, 724.0], [14.0, 685.0], [15.0, 568.0], [16.0, 583.0], [17.0, 488.5], [18.0, 505.5], [19.0, 479.0], [20.0, 419.5], [21.0, 431.0], [22.0, 409.5], [23.0, 417.0], [24.0, 406.5], [25.0, 394.0], [26.0, 408.5], [27.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 393.0, "minX": 2.0, "maxY": 2772.5, "series": [{"data": [[2.0, 2772.5], [3.0, 2484.0], [4.0, 1718.0], [5.0, 1124.0], [6.0, 1240.0], [7.0, 909.0], [8.0, 1050.0], [9.0, 977.5], [10.0, 914.0], [11.0, 815.0], [12.0, 803.0], [13.0, 724.0], [14.0, 681.5], [15.0, 567.0], [16.0, 581.0], [17.0, 488.5], [18.0, 505.5], [19.0, 478.5], [20.0, 419.5], [21.0, 431.0], [22.0, 409.5], [23.0, 417.0], [24.0, 406.5], [25.0, 393.0], [26.0, 408.0], [27.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.066666666666666, "minX": 1.60245816E12, "maxY": 13.033333333333333, "series": [{"data": [[1.60245816E12, 8.9], [1.60245834E12, 11.366666666666667], [1.60245852E12, 13.033333333333333], [1.60245822E12, 11.666666666666666], [1.6024584E12, 10.516666666666667], [1.60245858E12, 7.066666666666666], [1.60245828E12, 12.066666666666666], [1.60245846E12, 11.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.233333333333333, "minX": 1.60245816E12, "maxY": 13.033333333333333, "series": [{"data": [[1.60245816E12, 8.733333333333333], [1.60245834E12, 11.366666666666667], [1.60245852E12, 13.033333333333333], [1.60245822E12, 11.666666666666666], [1.6024584E12, 10.516666666666667], [1.60245858E12, 7.233333333333333], [1.60245828E12, 12.066666666666666], [1.60245846E12, 11.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60245858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.233333333333333, "minX": 1.60245816E12, "maxY": 13.033333333333333, "series": [{"data": [[1.60245816E12, 8.733333333333333], [1.60245834E12, 11.366666666666667], [1.60245852E12, 13.033333333333333], [1.60245822E12, 11.666666666666666], [1.6024584E12, 10.516666666666667], [1.60245858E12, 7.233333333333333], [1.60245828E12, 12.066666666666666], [1.60245846E12, 11.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.233333333333333, "minX": 1.60245816E12, "maxY": 13.033333333333333, "series": [{"data": [[1.60245816E12, 8.733333333333333], [1.60245834E12, 11.366666666666667], [1.60245852E12, 13.033333333333333], [1.60245822E12, 11.666666666666666], [1.6024584E12, 10.516666666666667], [1.60245858E12, 7.233333333333333], [1.60245828E12, 12.066666666666666], [1.60245846E12, 11.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60245858E12, "title": "Total Transactions Per Second"}},
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

