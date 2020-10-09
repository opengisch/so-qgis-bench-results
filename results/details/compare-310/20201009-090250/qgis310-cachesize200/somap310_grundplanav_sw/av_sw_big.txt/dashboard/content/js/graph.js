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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 6137.0, "series": [{"data": [[0.0, 180.0], [0.1, 187.0], [0.2, 190.0], [0.3, 192.0], [0.4, 194.0], [0.5, 195.0], [0.6, 196.0], [0.7, 197.0], [0.8, 197.0], [0.9, 198.0], [1.0, 199.0], [1.1, 200.0], [1.2, 201.0], [1.3, 202.0], [1.4, 202.0], [1.5, 203.0], [1.6, 204.0], [1.7, 205.0], [1.8, 206.0], [1.9, 206.0], [2.0, 207.0], [2.1, 207.0], [2.2, 208.0], [2.3, 208.0], [2.4, 209.0], [2.5, 210.0], [2.6, 211.0], [2.7, 212.0], [2.8, 213.0], [2.9, 214.0], [3.0, 215.0], [3.1, 216.0], [3.2, 217.0], [3.3, 218.0], [3.4, 219.0], [3.5, 220.0], [3.6, 220.0], [3.7, 221.0], [3.8, 221.0], [3.9, 222.0], [4.0, 223.0], [4.1, 223.0], [4.2, 224.0], [4.3, 225.0], [4.4, 226.0], [4.5, 226.0], [4.6, 227.0], [4.7, 228.0], [4.8, 229.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 234.0], [5.4, 235.0], [5.5, 237.0], [5.6, 238.0], [5.7, 239.0], [5.8, 241.0], [5.9, 242.0], [6.0, 243.0], [6.1, 244.0], [6.2, 245.0], [6.3, 246.0], [6.4, 248.0], [6.5, 249.0], [6.6, 250.0], [6.7, 252.0], [6.8, 254.0], [6.9, 255.0], [7.0, 255.0], [7.1, 256.0], [7.2, 258.0], [7.3, 260.0], [7.4, 262.0], [7.5, 263.0], [7.6, 265.0], [7.7, 266.0], [7.8, 266.0], [7.9, 267.0], [8.0, 267.0], [8.1, 268.0], [8.2, 269.0], [8.3, 271.0], [8.4, 272.0], [8.5, 273.0], [8.6, 274.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 278.0], [9.1, 279.0], [9.2, 279.0], [9.3, 281.0], [9.4, 282.0], [9.5, 283.0], [9.6, 284.0], [9.7, 285.0], [9.8, 286.0], [9.9, 287.0], [10.0, 289.0], [10.1, 289.0], [10.2, 290.0], [10.3, 291.0], [10.4, 292.0], [10.5, 293.0], [10.6, 293.0], [10.7, 294.0], [10.8, 295.0], [10.9, 296.0], [11.0, 297.0], [11.1, 297.0], [11.2, 299.0], [11.3, 300.0], [11.4, 302.0], [11.5, 303.0], [11.6, 304.0], [11.7, 305.0], [11.8, 306.0], [11.9, 307.0], [12.0, 308.0], [12.1, 309.0], [12.2, 309.0], [12.3, 311.0], [12.4, 312.0], [12.5, 312.0], [12.6, 314.0], [12.7, 315.0], [12.8, 315.0], [12.9, 316.0], [13.0, 318.0], [13.1, 319.0], [13.2, 320.0], [13.3, 321.0], [13.4, 323.0], [13.5, 324.0], [13.6, 325.0], [13.7, 326.0], [13.8, 327.0], [13.9, 328.0], [14.0, 329.0], [14.1, 330.0], [14.2, 332.0], [14.3, 333.0], [14.4, 334.0], [14.5, 335.0], [14.6, 335.0], [14.7, 337.0], [14.8, 340.0], [14.9, 340.0], [15.0, 343.0], [15.1, 344.0], [15.2, 345.0], [15.3, 346.0], [15.4, 347.0], [15.5, 349.0], [15.6, 351.0], [15.7, 353.0], [15.8, 354.0], [15.9, 358.0], [16.0, 359.0], [16.1, 360.0], [16.2, 362.0], [16.3, 366.0], [16.4, 368.0], [16.5, 371.0], [16.6, 373.0], [16.7, 374.0], [16.8, 376.0], [16.9, 377.0], [17.0, 378.0], [17.1, 380.0], [17.2, 381.0], [17.3, 383.0], [17.4, 384.0], [17.5, 386.0], [17.6, 388.0], [17.7, 388.0], [17.8, 389.0], [17.9, 391.0], [18.0, 392.0], [18.1, 394.0], [18.2, 395.0], [18.3, 396.0], [18.4, 397.0], [18.5, 398.0], [18.6, 398.0], [18.7, 400.0], [18.8, 402.0], [18.9, 403.0], [19.0, 403.0], [19.1, 404.0], [19.2, 406.0], [19.3, 407.0], [19.4, 408.0], [19.5, 409.0], [19.6, 410.0], [19.7, 411.0], [19.8, 412.0], [19.9, 413.0], [20.0, 413.0], [20.1, 414.0], [20.2, 415.0], [20.3, 416.0], [20.4, 417.0], [20.5, 418.0], [20.6, 419.0], [20.7, 419.0], [20.8, 421.0], [20.9, 422.0], [21.0, 423.0], [21.1, 423.0], [21.2, 424.0], [21.3, 425.0], [21.4, 427.0], [21.5, 427.0], [21.6, 427.0], [21.7, 429.0], [21.8, 430.0], [21.9, 431.0], [22.0, 432.0], [22.1, 433.0], [22.2, 434.0], [22.3, 435.0], [22.4, 436.0], [22.5, 437.0], [22.6, 438.0], [22.7, 439.0], [22.8, 440.0], [22.9, 440.0], [23.0, 441.0], [23.1, 442.0], [23.2, 442.0], [23.3, 444.0], [23.4, 445.0], [23.5, 445.0], [23.6, 446.0], [23.7, 446.0], [23.8, 447.0], [23.9, 448.0], [24.0, 449.0], [24.1, 450.0], [24.2, 451.0], [24.3, 451.0], [24.4, 452.0], [24.5, 453.0], [24.6, 453.0], [24.7, 454.0], [24.8, 455.0], [24.9, 457.0], [25.0, 458.0], [25.1, 460.0], [25.2, 461.0], [25.3, 461.0], [25.4, 462.0], [25.5, 463.0], [25.6, 464.0], [25.7, 465.0], [25.8, 466.0], [25.9, 466.0], [26.0, 467.0], [26.1, 468.0], [26.2, 469.0], [26.3, 469.0], [26.4, 469.0], [26.5, 470.0], [26.6, 471.0], [26.7, 472.0], [26.8, 473.0], [26.9, 474.0], [27.0, 475.0], [27.1, 476.0], [27.2, 477.0], [27.3, 478.0], [27.4, 478.0], [27.5, 479.0], [27.6, 480.0], [27.7, 480.0], [27.8, 481.0], [27.9, 482.0], [28.0, 482.0], [28.1, 483.0], [28.2, 484.0], [28.3, 485.0], [28.4, 485.0], [28.5, 486.0], [28.6, 487.0], [28.7, 488.0], [28.8, 491.0], [28.9, 492.0], [29.0, 493.0], [29.1, 494.0], [29.2, 495.0], [29.3, 496.0], [29.4, 497.0], [29.5, 499.0], [29.6, 500.0], [29.7, 501.0], [29.8, 502.0], [29.9, 504.0], [30.0, 504.0], [30.1, 505.0], [30.2, 506.0], [30.3, 507.0], [30.4, 508.0], [30.5, 509.0], [30.6, 509.0], [30.7, 510.0], [30.8, 511.0], [30.9, 513.0], [31.0, 514.0], [31.1, 515.0], [31.2, 516.0], [31.3, 517.0], [31.4, 518.0], [31.5, 520.0], [31.6, 521.0], [31.7, 522.0], [31.8, 523.0], [31.9, 523.0], [32.0, 526.0], [32.1, 527.0], [32.2, 528.0], [32.3, 529.0], [32.4, 530.0], [32.5, 532.0], [32.6, 532.0], [32.7, 533.0], [32.8, 534.0], [32.9, 535.0], [33.0, 536.0], [33.1, 537.0], [33.2, 538.0], [33.3, 539.0], [33.4, 540.0], [33.5, 541.0], [33.6, 542.0], [33.7, 542.0], [33.8, 543.0], [33.9, 543.0], [34.0, 544.0], [34.1, 545.0], [34.2, 546.0], [34.3, 547.0], [34.4, 548.0], [34.5, 549.0], [34.6, 550.0], [34.7, 552.0], [34.8, 552.0], [34.9, 554.0], [35.0, 555.0], [35.1, 556.0], [35.2, 558.0], [35.3, 559.0], [35.4, 560.0], [35.5, 562.0], [35.6, 563.0], [35.7, 563.0], [35.8, 564.0], [35.9, 565.0], [36.0, 565.0], [36.1, 566.0], [36.2, 567.0], [36.3, 567.0], [36.4, 569.0], [36.5, 570.0], [36.6, 571.0], [36.7, 572.0], [36.8, 572.0], [36.9, 573.0], [37.0, 574.0], [37.1, 575.0], [37.2, 576.0], [37.3, 576.0], [37.4, 578.0], [37.5, 578.0], [37.6, 579.0], [37.7, 580.0], [37.8, 580.0], [37.9, 581.0], [38.0, 582.0], [38.1, 582.0], [38.2, 583.0], [38.3, 585.0], [38.4, 586.0], [38.5, 586.0], [38.6, 588.0], [38.7, 591.0], [38.8, 592.0], [38.9, 593.0], [39.0, 593.0], [39.1, 594.0], [39.2, 595.0], [39.3, 598.0], [39.4, 599.0], [39.5, 601.0], [39.6, 601.0], [39.7, 602.0], [39.8, 603.0], [39.9, 605.0], [40.0, 607.0], [40.1, 608.0], [40.2, 609.0], [40.3, 610.0], [40.4, 611.0], [40.5, 612.0], [40.6, 612.0], [40.7, 613.0], [40.8, 614.0], [40.9, 616.0], [41.0, 617.0], [41.1, 618.0], [41.2, 619.0], [41.3, 620.0], [41.4, 621.0], [41.5, 622.0], [41.6, 623.0], [41.7, 624.0], [41.8, 625.0], [41.9, 627.0], [42.0, 628.0], [42.1, 628.0], [42.2, 629.0], [42.3, 630.0], [42.4, 631.0], [42.5, 631.0], [42.6, 632.0], [42.7, 634.0], [42.8, 634.0], [42.9, 635.0], [43.0, 636.0], [43.1, 637.0], [43.2, 638.0], [43.3, 639.0], [43.4, 640.0], [43.5, 640.0], [43.6, 641.0], [43.7, 641.0], [43.8, 642.0], [43.9, 643.0], [44.0, 645.0], [44.1, 646.0], [44.2, 647.0], [44.3, 650.0], [44.4, 651.0], [44.5, 653.0], [44.6, 654.0], [44.7, 656.0], [44.8, 657.0], [44.9, 659.0], [45.0, 659.0], [45.1, 661.0], [45.2, 662.0], [45.3, 664.0], [45.4, 664.0], [45.5, 665.0], [45.6, 667.0], [45.7, 667.0], [45.8, 668.0], [45.9, 669.0], [46.0, 670.0], [46.1, 672.0], [46.2, 673.0], [46.3, 674.0], [46.4, 675.0], [46.5, 676.0], [46.6, 678.0], [46.7, 680.0], [46.8, 680.0], [46.9, 680.0], [47.0, 681.0], [47.1, 683.0], [47.2, 684.0], [47.3, 685.0], [47.4, 686.0], [47.5, 688.0], [47.6, 688.0], [47.7, 689.0], [47.8, 691.0], [47.9, 691.0], [48.0, 692.0], [48.1, 694.0], [48.2, 696.0], [48.3, 697.0], [48.4, 700.0], [48.5, 700.0], [48.6, 702.0], [48.7, 705.0], [48.8, 707.0], [48.9, 708.0], [49.0, 710.0], [49.1, 711.0], [49.2, 712.0], [49.3, 713.0], [49.4, 715.0], [49.5, 717.0], [49.6, 719.0], [49.7, 720.0], [49.8, 722.0], [49.9, 723.0], [50.0, 726.0], [50.1, 727.0], [50.2, 728.0], [50.3, 729.0], [50.4, 730.0], [50.5, 731.0], [50.6, 733.0], [50.7, 735.0], [50.8, 736.0], [50.9, 738.0], [51.0, 740.0], [51.1, 742.0], [51.2, 743.0], [51.3, 744.0], [51.4, 746.0], [51.5, 747.0], [51.6, 748.0], [51.7, 749.0], [51.8, 751.0], [51.9, 752.0], [52.0, 754.0], [52.1, 754.0], [52.2, 757.0], [52.3, 757.0], [52.4, 759.0], [52.5, 760.0], [52.6, 761.0], [52.7, 763.0], [52.8, 764.0], [52.9, 766.0], [53.0, 767.0], [53.1, 770.0], [53.2, 771.0], [53.3, 773.0], [53.4, 775.0], [53.5, 777.0], [53.6, 778.0], [53.7, 780.0], [53.8, 781.0], [53.9, 783.0], [54.0, 785.0], [54.1, 786.0], [54.2, 789.0], [54.3, 790.0], [54.4, 791.0], [54.5, 793.0], [54.6, 795.0], [54.7, 796.0], [54.8, 798.0], [54.9, 798.0], [55.0, 801.0], [55.1, 803.0], [55.2, 805.0], [55.3, 806.0], [55.4, 807.0], [55.5, 810.0], [55.6, 811.0], [55.7, 812.0], [55.8, 813.0], [55.9, 815.0], [56.0, 817.0], [56.1, 818.0], [56.2, 821.0], [56.3, 822.0], [56.4, 823.0], [56.5, 826.0], [56.6, 829.0], [56.7, 831.0], [56.8, 834.0], [56.9, 835.0], [57.0, 836.0], [57.1, 838.0], [57.2, 840.0], [57.3, 842.0], [57.4, 845.0], [57.5, 847.0], [57.6, 850.0], [57.7, 851.0], [57.8, 852.0], [57.9, 854.0], [58.0, 855.0], [58.1, 857.0], [58.2, 858.0], [58.3, 859.0], [58.4, 861.0], [58.5, 862.0], [58.6, 863.0], [58.7, 865.0], [58.8, 867.0], [58.9, 869.0], [59.0, 871.0], [59.1, 873.0], [59.2, 875.0], [59.3, 877.0], [59.4, 878.0], [59.5, 880.0], [59.6, 880.0], [59.7, 882.0], [59.8, 882.0], [59.9, 886.0], [60.0, 887.0], [60.1, 890.0], [60.2, 892.0], [60.3, 893.0], [60.4, 896.0], [60.5, 897.0], [60.6, 898.0], [60.7, 898.0], [60.8, 900.0], [60.9, 902.0], [61.0, 903.0], [61.1, 905.0], [61.2, 905.0], [61.3, 907.0], [61.4, 909.0], [61.5, 912.0], [61.6, 915.0], [61.7, 915.0], [61.8, 916.0], [61.9, 918.0], [62.0, 920.0], [62.1, 921.0], [62.2, 923.0], [62.3, 924.0], [62.4, 926.0], [62.5, 927.0], [62.6, 929.0], [62.7, 930.0], [62.8, 931.0], [62.9, 934.0], [63.0, 935.0], [63.1, 937.0], [63.2, 938.0], [63.3, 940.0], [63.4, 941.0], [63.5, 942.0], [63.6, 944.0], [63.7, 945.0], [63.8, 946.0], [63.9, 948.0], [64.0, 950.0], [64.1, 953.0], [64.2, 955.0], [64.3, 957.0], [64.4, 958.0], [64.5, 959.0], [64.6, 961.0], [64.7, 962.0], [64.8, 963.0], [64.9, 964.0], [65.0, 966.0], [65.1, 967.0], [65.2, 968.0], [65.3, 969.0], [65.4, 971.0], [65.5, 973.0], [65.6, 975.0], [65.7, 976.0], [65.8, 978.0], [65.9, 980.0], [66.0, 980.0], [66.1, 982.0], [66.2, 985.0], [66.3, 987.0], [66.4, 988.0], [66.5, 990.0], [66.6, 990.0], [66.7, 994.0], [66.8, 996.0], [66.9, 999.0], [67.0, 1000.0], [67.1, 1003.0], [67.2, 1005.0], [67.3, 1006.0], [67.4, 1009.0], [67.5, 1012.0], [67.6, 1016.0], [67.7, 1016.0], [67.8, 1019.0], [67.9, 1020.0], [68.0, 1021.0], [68.1, 1024.0], [68.2, 1027.0], [68.3, 1029.0], [68.4, 1032.0], [68.5, 1033.0], [68.6, 1036.0], [68.7, 1037.0], [68.8, 1039.0], [68.9, 1041.0], [69.0, 1043.0], [69.1, 1045.0], [69.2, 1046.0], [69.3, 1048.0], [69.4, 1049.0], [69.5, 1050.0], [69.6, 1051.0], [69.7, 1053.0], [69.8, 1056.0], [69.9, 1056.0], [70.0, 1060.0], [70.1, 1061.0], [70.2, 1064.0], [70.3, 1066.0], [70.4, 1067.0], [70.5, 1068.0], [70.6, 1070.0], [70.7, 1071.0], [70.8, 1073.0], [70.9, 1074.0], [71.0, 1077.0], [71.1, 1078.0], [71.2, 1080.0], [71.3, 1081.0], [71.4, 1083.0], [71.5, 1086.0], [71.6, 1088.0], [71.7, 1090.0], [71.8, 1091.0], [71.9, 1093.0], [72.0, 1094.0], [72.1, 1096.0], [72.2, 1097.0], [72.3, 1100.0], [72.4, 1101.0], [72.5, 1104.0], [72.6, 1105.0], [72.7, 1107.0], [72.8, 1109.0], [72.9, 1110.0], [73.0, 1110.0], [73.1, 1111.0], [73.2, 1112.0], [73.3, 1116.0], [73.4, 1118.0], [73.5, 1120.0], [73.6, 1121.0], [73.7, 1124.0], [73.8, 1126.0], [73.9, 1128.0], [74.0, 1130.0], [74.1, 1131.0], [74.2, 1132.0], [74.3, 1135.0], [74.4, 1138.0], [74.5, 1140.0], [74.6, 1141.0], [74.7, 1142.0], [74.8, 1144.0], [74.9, 1146.0], [75.0, 1149.0], [75.1, 1150.0], [75.2, 1152.0], [75.3, 1153.0], [75.4, 1156.0], [75.5, 1157.0], [75.6, 1160.0], [75.7, 1161.0], [75.8, 1162.0], [75.9, 1164.0], [76.0, 1167.0], [76.1, 1169.0], [76.2, 1171.0], [76.3, 1175.0], [76.4, 1177.0], [76.5, 1183.0], [76.6, 1185.0], [76.7, 1187.0], [76.8, 1190.0], [76.9, 1193.0], [77.0, 1195.0], [77.1, 1197.0], [77.2, 1200.0], [77.3, 1203.0], [77.4, 1205.0], [77.5, 1207.0], [77.6, 1210.0], [77.7, 1213.0], [77.8, 1216.0], [77.9, 1220.0], [78.0, 1223.0], [78.1, 1226.0], [78.2, 1228.0], [78.3, 1231.0], [78.4, 1233.0], [78.5, 1236.0], [78.6, 1239.0], [78.7, 1242.0], [78.8, 1245.0], [78.9, 1248.0], [79.0, 1250.0], [79.1, 1252.0], [79.2, 1255.0], [79.3, 1258.0], [79.4, 1260.0], [79.5, 1263.0], [79.6, 1265.0], [79.7, 1272.0], [79.8, 1273.0], [79.9, 1278.0], [80.0, 1280.0], [80.1, 1283.0], [80.2, 1288.0], [80.3, 1291.0], [80.4, 1293.0], [80.5, 1295.0], [80.6, 1298.0], [80.7, 1301.0], [80.8, 1302.0], [80.9, 1304.0], [81.0, 1305.0], [81.1, 1307.0], [81.2, 1309.0], [81.3, 1311.0], [81.4, 1315.0], [81.5, 1317.0], [81.6, 1321.0], [81.7, 1324.0], [81.8, 1326.0], [81.9, 1328.0], [82.0, 1331.0], [82.1, 1333.0], [82.2, 1336.0], [82.3, 1338.0], [82.4, 1341.0], [82.5, 1342.0], [82.6, 1347.0], [82.7, 1349.0], [82.8, 1350.0], [82.9, 1351.0], [83.0, 1353.0], [83.1, 1354.0], [83.2, 1355.0], [83.3, 1361.0], [83.4, 1364.0], [83.5, 1368.0], [83.6, 1370.0], [83.7, 1372.0], [83.8, 1376.0], [83.9, 1377.0], [84.0, 1379.0], [84.1, 1381.0], [84.2, 1383.0], [84.3, 1386.0], [84.4, 1388.0], [84.5, 1391.0], [84.6, 1394.0], [84.7, 1397.0], [84.8, 1400.0], [84.9, 1402.0], [85.0, 1404.0], [85.1, 1405.0], [85.2, 1407.0], [85.3, 1408.0], [85.4, 1411.0], [85.5, 1413.0], [85.6, 1417.0], [85.7, 1419.0], [85.8, 1420.0], [85.9, 1422.0], [86.0, 1424.0], [86.1, 1429.0], [86.2, 1431.0], [86.3, 1434.0], [86.4, 1436.0], [86.5, 1440.0], [86.6, 1445.0], [86.7, 1449.0], [86.8, 1452.0], [86.9, 1454.0], [87.0, 1456.0], [87.1, 1459.0], [87.2, 1461.0], [87.3, 1466.0], [87.4, 1471.0], [87.5, 1478.0], [87.6, 1482.0], [87.7, 1487.0], [87.8, 1491.0], [87.9, 1494.0], [88.0, 1496.0], [88.1, 1498.0], [88.2, 1501.0], [88.3, 1505.0], [88.4, 1512.0], [88.5, 1516.0], [88.6, 1524.0], [88.7, 1527.0], [88.8, 1530.0], [88.9, 1533.0], [89.0, 1535.0], [89.1, 1544.0], [89.2, 1551.0], [89.3, 1554.0], [89.4, 1556.0], [89.5, 1566.0], [89.6, 1572.0], [89.7, 1578.0], [89.8, 1582.0], [89.9, 1588.0], [90.0, 1598.0], [90.1, 1604.0], [90.2, 1610.0], [90.3, 1615.0], [90.4, 1623.0], [90.5, 1632.0], [90.6, 1635.0], [90.7, 1643.0], [90.8, 1646.0], [90.9, 1651.0], [91.0, 1654.0], [91.1, 1660.0], [91.2, 1670.0], [91.3, 1677.0], [91.4, 1685.0], [91.5, 1690.0], [91.6, 1696.0], [91.7, 1706.0], [91.8, 1712.0], [91.9, 1724.0], [92.0, 1732.0], [92.1, 1739.0], [92.2, 1747.0], [92.3, 1752.0], [92.4, 1761.0], [92.5, 1765.0], [92.6, 1772.0], [92.7, 1779.0], [92.8, 1784.0], [92.9, 1790.0], [93.0, 1794.0], [93.1, 1801.0], [93.2, 1807.0], [93.3, 1813.0], [93.4, 1823.0], [93.5, 1827.0], [93.6, 1832.0], [93.7, 1839.0], [93.8, 1854.0], [93.9, 1859.0], [94.0, 1864.0], [94.1, 1873.0], [94.2, 1882.0], [94.3, 1894.0], [94.4, 1898.0], [94.5, 1907.0], [94.6, 1913.0], [94.7, 1924.0], [94.8, 1939.0], [94.9, 1949.0], [95.0, 1959.0], [95.1, 1965.0], [95.2, 1977.0], [95.3, 1992.0], [95.4, 2000.0], [95.5, 2009.0], [95.6, 2015.0], [95.7, 2029.0], [95.8, 2054.0], [95.9, 2069.0], [96.0, 2074.0], [96.1, 2088.0], [96.2, 2095.0], [96.3, 2107.0], [96.4, 2118.0], [96.5, 2129.0], [96.6, 2135.0], [96.7, 2142.0], [96.8, 2157.0], [96.9, 2172.0], [97.0, 2177.0], [97.1, 2195.0], [97.2, 2218.0], [97.3, 2227.0], [97.4, 2239.0], [97.5, 2247.0], [97.6, 2268.0], [97.7, 2294.0], [97.8, 2326.0], [97.9, 2358.0], [98.0, 2374.0], [98.1, 2406.0], [98.2, 2446.0], [98.3, 2464.0], [98.4, 2489.0], [98.5, 2561.0], [98.6, 2630.0], [98.7, 2673.0], [98.8, 2743.0], [98.9, 2760.0], [99.0, 2859.0], [99.1, 2901.0], [99.2, 3001.0], [99.3, 3127.0], [99.4, 3188.0], [99.5, 3434.0], [99.6, 3751.0], [99.7, 3999.0], [99.8, 4329.0], [99.9, 4466.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 564.0, "series": [{"data": [[600.0, 466.0], [700.0, 339.0], [800.0, 303.0], [900.0, 319.0], [1000.0, 277.0], [1100.0, 257.0], [1200.0, 179.0], [1300.0, 214.0], [1400.0, 176.0], [1500.0, 96.0], [1600.0, 85.0], [100.0, 53.0], [1700.0, 75.0], [1800.0, 69.0], [1900.0, 50.0], [2000.0, 45.0], [2100.0, 46.0], [2200.0, 30.0], [2300.0, 19.0], [2400.0, 18.0], [2500.0, 6.0], [2600.0, 10.0], [2800.0, 8.0], [2700.0, 11.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 7.0], [3200.0, 4.0], [200.0, 530.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 1.0], [4300.0, 3.0], [4200.0, 1.0], [4400.0, 3.0], [300.0, 386.0], [4800.0, 2.0], [4700.0, 1.0], [5000.0, 1.0], [6100.0, 1.0], [400.0, 564.0], [500.0, 513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3039.0, "series": [{"data": [[0.0, 1537.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3039.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 614.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.825581395348836, "minX": 1.60223724E12, "maxY": 10.0, "series": [{"data": [[1.60223754E12, 10.0], [1.60223736E12, 10.0], [1.60223742E12, 10.0], [1.60223724E12, 10.0], [1.60223772E12, 9.825581395348836], [1.6022373E12, 10.0], [1.6022376E12, 10.0], [1.60223766E12, 10.0], [1.60223748E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223772E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 3019.0, "series": [{"data": [[8.0, 2946.0], [4.0, 1685.0], [2.0, 3019.0], [1.0, 2705.0], [9.0, 274.0], [10.0, 873.0225781551532], [5.0, 945.0], [6.0, 717.0], [3.0, 761.0], [7.0, 859.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 874.1887882874212]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 344.81666666666666, "minX": 1.60223724E12, "maxY": 3561397.033333333, "series": [{"data": [[1.60223754E12, 2549540.0], [1.60223736E12, 3230638.9833333334], [1.60223742E12, 3480198.033333333], [1.60223724E12, 273141.6], [1.60223772E12, 1337087.0666666667], [1.6022373E12, 3108867.85], [1.6022376E12, 3561397.033333333], [1.60223766E12, 3015625.933333333], [1.60223748E12, 3416184.2333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223754E12, 5252.716666666666], [1.60223736E12, 5430.9], [1.60223742E12, 5435.366666666667], [1.60223724E12, 344.81666666666666], [1.60223772E12, 1941.5666666666666], [1.6022373E12, 4681.383333333333], [1.6022376E12, 5209.75], [1.60223766E12, 5699.25], [1.60223748E12, 4588.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223772E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 798.0359520639148, "minX": 1.60223724E12, "maxY": 1344.533333333333, "series": [{"data": [[1.60223754E12, 827.4725274725267], [1.60223736E12, 821.4726775956279], [1.60223742E12, 831.5097765363132], [1.60223724E12, 1344.533333333333], [1.60223772E12, 1097.197674418605], [1.6022373E12, 923.2865947611702], [1.6022376E12, 853.3209169054437], [1.60223766E12, 798.0359520639148], [1.60223748E12, 978.9869706840396]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223772E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 796.5233022636486, "minX": 1.60223724E12, "maxY": 1341.933333333333, "series": [{"data": [[1.60223754E12, 826.0535714285711], [1.60223736E12, 819.5915300546437], [1.60223742E12, 829.4636871508385], [1.60223724E12, 1341.933333333333], [1.60223772E12, 1095.0891472868223], [1.6022373E12, 921.2619414483821], [1.6022376E12, 851.4598853868192], [1.60223766E12, 796.5233022636486], [1.60223748E12, 976.7328990228016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223772E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0038759689922480646, "minX": 1.60223724E12, "maxY": 2.866666666666668, "series": [{"data": [[1.60223754E12, 0.013736263736263733], [1.60223736E12, 0.021857923497267766], [1.60223742E12, 0.0111731843575419], [1.60223724E12, 2.866666666666668], [1.60223772E12, 0.0038759689922480646], [1.6022373E12, 0.0184899845916795], [1.6022376E12, 0.020057306590257878], [1.60223766E12, 0.01331557922769641], [1.60223748E12, 0.016286644951140065]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223772E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.60223724E12, "maxY": 6137.0, "series": [{"data": [[1.60223754E12, 4868.0], [1.60223736E12, 4075.0], [1.60223742E12, 2962.0], [1.60223724E12, 4101.0], [1.60223772E12, 3755.0], [1.6022373E12, 5043.0], [1.6022376E12, 2865.0], [1.60223766E12, 2885.0], [1.60223748E12, 6137.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223754E12, 196.56099982619287], [1.60223736E12, 194.59699982523918], [1.60223742E12, 194.0], [1.60223724E12, 214.0], [1.60223772E12, 249.25399790048598], [1.6022373E12, 206.84999984502792], [1.6022376E12, 200.0], [1.60223766E12, 200.0], [1.60223748E12, 196.53499985337257]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223754E12, 197.21710006952287], [1.60223736E12, 195.0], [1.60223742E12, 194.26520020484924], [1.60223724E12, 214.0], [1.60223772E12, 257.1794008398056], [1.6022373E12, 207.0], [1.6022376E12, 200.0], [1.60223766E12, 200.88960014343263], [1.60223748E12, 197.17700011730193]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223754E12, 196.92549991309642], [1.60223736E12, 194.9634999126196], [1.60223742E12, 194.0], [1.60223724E12, 214.0], [1.60223772E12, 253.65699895024298], [1.6022373E12, 207.0], [1.6022376E12, 200.0], [1.60223766E12, 200.28799982070922], [1.60223748E12, 196.8424999266863]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223754E12, 186.0], [1.60223736E12, 190.0], [1.60223742E12, 180.0], [1.60223724E12, 214.0], [1.60223772E12, 229.0], [1.6022373E12, 196.0], [1.6022376E12, 192.0], [1.60223766E12, 190.0], [1.60223748E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223754E12, 731.0], [1.60223736E12, 612.0], [1.60223742E12, 700.0], [1.60223724E12, 758.0], [1.60223772E12, 1006.0], [1.6022373E12, 794.0], [1.6022376E12, 693.5], [1.60223766E12, 635.0], [1.60223748E12, 850.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223772E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 2866.0, "series": [{"data": [[2.0, 2179.5], [3.0, 1315.0], [4.0, 1202.5], [5.0, 995.0], [6.0, 1187.0], [7.0, 1116.5], [8.0, 1067.0], [9.0, 907.0], [10.0, 917.0], [11.0, 862.0], [12.0, 811.5], [13.0, 712.0], [14.0, 696.0], [15.0, 617.5], [1.0, 2866.0], [16.0, 646.0], [17.0, 504.0], [18.0, 511.5], [19.0, 478.0], [20.0, 471.0], [21.0, 462.0], [22.0, 451.0], [23.0, 445.5], [24.0, 397.5], [25.0, 427.0], [26.0, 436.0], [28.0, 412.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 228.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 2862.0, "series": [{"data": [[2.0, 2177.5], [3.0, 1313.5], [4.0, 1198.0], [5.0, 992.5], [6.0, 1185.0], [7.0, 1110.0], [8.0, 1058.5], [9.0, 907.0], [10.0, 915.0], [11.0, 859.5], [12.0, 810.5], [13.0, 711.0], [14.0, 696.0], [15.0, 617.5], [1.0, 2862.0], [16.0, 645.5], [17.0, 504.0], [18.0, 511.5], [19.0, 477.0], [20.0, 470.5], [21.0, 462.0], [22.0, 451.0], [23.0, 445.5], [24.0, 397.0], [25.0, 427.0], [26.0, 436.0], [28.0, 412.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 228.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60223724E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60223754E12, 12.133333333333333], [1.60223736E12, 12.2], [1.60223742E12, 11.933333333333334], [1.60223724E12, 0.9166666666666666], [1.60223772E12, 4.133333333333334], [1.6022373E12, 10.816666666666666], [1.6022376E12, 11.633333333333333], [1.60223766E12, 12.516666666666667], [1.60223748E12, 10.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223772E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223724E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60223754E12, 12.133333333333333], [1.60223736E12, 12.2], [1.60223742E12, 11.916666666666666], [1.60223724E12, 0.75], [1.60223772E12, 4.3], [1.6022373E12, 10.816666666666666], [1.6022376E12, 11.633333333333333], [1.60223766E12, 12.516666666666667], [1.60223748E12, 10.233333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223742E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223772E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223724E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60223754E12, 12.133333333333333], [1.60223736E12, 12.2], [1.60223742E12, 11.916666666666666], [1.60223724E12, 0.75], [1.60223772E12, 4.3], [1.6022373E12, 10.816666666666666], [1.6022376E12, 11.633333333333333], [1.60223766E12, 12.516666666666667], [1.60223748E12, 10.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223742E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223772E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223724E12, "maxY": 12.516666666666667, "series": [{"data": [[1.60223754E12, 12.133333333333333], [1.60223736E12, 12.2], [1.60223742E12, 11.916666666666666], [1.60223724E12, 0.75], [1.60223772E12, 4.3], [1.6022373E12, 10.816666666666666], [1.6022376E12, 11.633333333333333], [1.60223766E12, 12.516666666666667], [1.60223748E12, 10.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223742E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223772E12, "title": "Total Transactions Per Second"}},
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

