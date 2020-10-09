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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 8220.0, "series": [{"data": [[0.0, 182.0], [0.1, 185.0], [0.2, 188.0], [0.3, 190.0], [0.4, 191.0], [0.5, 192.0], [0.6, 192.0], [0.7, 193.0], [0.8, 193.0], [0.9, 194.0], [1.0, 195.0], [1.1, 196.0], [1.2, 196.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 199.0], [1.9, 201.0], [2.0, 201.0], [2.1, 201.0], [2.2, 202.0], [2.3, 203.0], [2.4, 203.0], [2.5, 204.0], [2.6, 204.0], [2.7, 205.0], [2.8, 206.0], [2.9, 207.0], [3.0, 207.0], [3.1, 208.0], [3.2, 210.0], [3.3, 211.0], [3.4, 212.0], [3.5, 212.0], [3.6, 213.0], [3.7, 214.0], [3.8, 215.0], [3.9, 216.0], [4.0, 217.0], [4.1, 218.0], [4.2, 218.0], [4.3, 219.0], [4.4, 220.0], [4.5, 221.0], [4.6, 222.0], [4.7, 223.0], [4.8, 223.0], [4.9, 224.0], [5.0, 224.0], [5.1, 225.0], [5.2, 226.0], [5.3, 227.0], [5.4, 229.0], [5.5, 229.0], [5.6, 230.0], [5.7, 231.0], [5.8, 232.0], [5.9, 234.0], [6.0, 235.0], [6.1, 236.0], [6.2, 236.0], [6.3, 237.0], [6.4, 238.0], [6.5, 239.0], [6.6, 240.0], [6.7, 242.0], [6.8, 242.0], [6.9, 243.0], [7.0, 244.0], [7.1, 246.0], [7.2, 247.0], [7.3, 247.0], [7.4, 249.0], [7.5, 250.0], [7.6, 251.0], [7.7, 255.0], [7.8, 256.0], [7.9, 257.0], [8.0, 259.0], [8.1, 260.0], [8.2, 262.0], [8.3, 264.0], [8.4, 264.0], [8.5, 265.0], [8.6, 267.0], [8.7, 267.0], [8.8, 268.0], [8.9, 269.0], [9.0, 269.0], [9.1, 271.0], [9.2, 271.0], [9.3, 272.0], [9.4, 272.0], [9.5, 273.0], [9.6, 274.0], [9.7, 276.0], [9.8, 277.0], [9.9, 277.0], [10.0, 278.0], [10.1, 279.0], [10.2, 280.0], [10.3, 281.0], [10.4, 281.0], [10.5, 283.0], [10.6, 284.0], [10.7, 285.0], [10.8, 287.0], [10.9, 288.0], [11.0, 289.0], [11.1, 291.0], [11.2, 292.0], [11.3, 293.0], [11.4, 294.0], [11.5, 296.0], [11.6, 297.0], [11.7, 297.0], [11.8, 298.0], [11.9, 299.0], [12.0, 301.0], [12.1, 302.0], [12.2, 303.0], [12.3, 305.0], [12.4, 306.0], [12.5, 307.0], [12.6, 308.0], [12.7, 309.0], [12.8, 310.0], [12.9, 310.0], [13.0, 312.0], [13.1, 312.0], [13.2, 313.0], [13.3, 314.0], [13.4, 315.0], [13.5, 316.0], [13.6, 318.0], [13.7, 319.0], [13.8, 319.0], [13.9, 321.0], [14.0, 322.0], [14.1, 323.0], [14.2, 324.0], [14.3, 325.0], [14.4, 326.0], [14.5, 327.0], [14.6, 328.0], [14.7, 329.0], [14.8, 330.0], [14.9, 331.0], [15.0, 334.0], [15.1, 336.0], [15.2, 338.0], [15.3, 340.0], [15.4, 341.0], [15.5, 343.0], [15.6, 346.0], [15.7, 347.0], [15.8, 349.0], [15.9, 352.0], [16.0, 354.0], [16.1, 356.0], [16.2, 357.0], [16.3, 359.0], [16.4, 362.0], [16.5, 364.0], [16.6, 366.0], [16.7, 369.0], [16.8, 371.0], [16.9, 372.0], [17.0, 374.0], [17.1, 377.0], [17.2, 378.0], [17.3, 380.0], [17.4, 381.0], [17.5, 382.0], [17.6, 383.0], [17.7, 384.0], [17.8, 384.0], [17.9, 386.0], [18.0, 388.0], [18.1, 390.0], [18.2, 390.0], [18.3, 391.0], [18.4, 393.0], [18.5, 395.0], [18.6, 395.0], [18.7, 396.0], [18.8, 397.0], [18.9, 398.0], [19.0, 399.0], [19.1, 401.0], [19.2, 402.0], [19.3, 402.0], [19.4, 403.0], [19.5, 405.0], [19.6, 406.0], [19.7, 407.0], [19.8, 408.0], [19.9, 409.0], [20.0, 410.0], [20.1, 411.0], [20.2, 411.0], [20.3, 412.0], [20.4, 413.0], [20.5, 414.0], [20.6, 415.0], [20.7, 416.0], [20.8, 416.0], [20.9, 418.0], [21.0, 419.0], [21.1, 420.0], [21.2, 421.0], [21.3, 422.0], [21.4, 422.0], [21.5, 423.0], [21.6, 424.0], [21.7, 425.0], [21.8, 426.0], [21.9, 427.0], [22.0, 428.0], [22.1, 429.0], [22.2, 430.0], [22.3, 431.0], [22.4, 431.0], [22.5, 432.0], [22.6, 433.0], [22.7, 434.0], [22.8, 435.0], [22.9, 436.0], [23.0, 436.0], [23.1, 438.0], [23.2, 438.0], [23.3, 439.0], [23.4, 440.0], [23.5, 441.0], [23.6, 442.0], [23.7, 443.0], [23.8, 443.0], [23.9, 444.0], [24.0, 445.0], [24.1, 446.0], [24.2, 447.0], [24.3, 447.0], [24.4, 447.0], [24.5, 448.0], [24.6, 449.0], [24.7, 450.0], [24.8, 451.0], [24.9, 452.0], [25.0, 453.0], [25.1, 453.0], [25.2, 454.0], [25.3, 454.0], [25.4, 455.0], [25.5, 456.0], [25.6, 457.0], [25.7, 457.0], [25.8, 458.0], [25.9, 459.0], [26.0, 459.0], [26.1, 460.0], [26.2, 460.0], [26.3, 462.0], [26.4, 463.0], [26.5, 464.0], [26.6, 465.0], [26.7, 465.0], [26.8, 466.0], [26.9, 466.0], [27.0, 467.0], [27.1, 468.0], [27.2, 469.0], [27.3, 470.0], [27.4, 471.0], [27.5, 471.0], [27.6, 472.0], [27.7, 472.0], [27.8, 474.0], [27.9, 475.0], [28.0, 476.0], [28.1, 476.0], [28.2, 476.0], [28.3, 478.0], [28.4, 479.0], [28.5, 480.0], [28.6, 480.0], [28.7, 482.0], [28.8, 482.0], [28.9, 483.0], [29.0, 483.0], [29.1, 484.0], [29.2, 485.0], [29.3, 485.0], [29.4, 486.0], [29.5, 487.0], [29.6, 488.0], [29.7, 488.0], [29.8, 489.0], [29.9, 490.0], [30.0, 492.0], [30.1, 493.0], [30.2, 493.0], [30.3, 494.0], [30.4, 495.0], [30.5, 496.0], [30.6, 497.0], [30.7, 497.0], [30.8, 498.0], [30.9, 500.0], [31.0, 501.0], [31.1, 502.0], [31.2, 502.0], [31.3, 503.0], [31.4, 505.0], [31.5, 506.0], [31.6, 506.0], [31.7, 506.0], [31.8, 507.0], [31.9, 508.0], [32.0, 509.0], [32.1, 511.0], [32.2, 512.0], [32.3, 513.0], [32.4, 514.0], [32.5, 515.0], [32.6, 516.0], [32.7, 516.0], [32.8, 517.0], [32.9, 518.0], [33.0, 519.0], [33.1, 521.0], [33.2, 521.0], [33.3, 522.0], [33.4, 523.0], [33.5, 523.0], [33.6, 525.0], [33.7, 526.0], [33.8, 527.0], [33.9, 528.0], [34.0, 528.0], [34.1, 529.0], [34.2, 530.0], [34.3, 532.0], [34.4, 533.0], [34.5, 534.0], [34.6, 535.0], [34.7, 536.0], [34.8, 537.0], [34.9, 538.0], [35.0, 539.0], [35.1, 540.0], [35.2, 541.0], [35.3, 541.0], [35.4, 542.0], [35.5, 543.0], [35.6, 545.0], [35.7, 546.0], [35.8, 547.0], [35.9, 548.0], [36.0, 549.0], [36.1, 550.0], [36.2, 552.0], [36.3, 552.0], [36.4, 553.0], [36.5, 554.0], [36.6, 555.0], [36.7, 556.0], [36.8, 558.0], [36.9, 558.0], [37.0, 560.0], [37.1, 560.0], [37.2, 562.0], [37.3, 562.0], [37.4, 563.0], [37.5, 564.0], [37.6, 565.0], [37.7, 565.0], [37.8, 566.0], [37.9, 567.0], [38.0, 567.0], [38.1, 568.0], [38.2, 569.0], [38.3, 570.0], [38.4, 571.0], [38.5, 572.0], [38.6, 573.0], [38.7, 574.0], [38.8, 576.0], [38.9, 577.0], [39.0, 577.0], [39.1, 577.0], [39.2, 579.0], [39.3, 581.0], [39.4, 581.0], [39.5, 582.0], [39.6, 583.0], [39.7, 584.0], [39.8, 584.0], [39.9, 585.0], [40.0, 585.0], [40.1, 586.0], [40.2, 587.0], [40.3, 587.0], [40.4, 589.0], [40.5, 590.0], [40.6, 591.0], [40.7, 592.0], [40.8, 593.0], [40.9, 594.0], [41.0, 594.0], [41.1, 595.0], [41.2, 595.0], [41.3, 596.0], [41.4, 598.0], [41.5, 599.0], [41.6, 600.0], [41.7, 601.0], [41.8, 602.0], [41.9, 604.0], [42.0, 604.0], [42.1, 605.0], [42.2, 606.0], [42.3, 607.0], [42.4, 609.0], [42.5, 609.0], [42.6, 610.0], [42.7, 611.0], [42.8, 612.0], [42.9, 613.0], [43.0, 614.0], [43.1, 615.0], [43.2, 617.0], [43.3, 620.0], [43.4, 621.0], [43.5, 622.0], [43.6, 623.0], [43.7, 624.0], [43.8, 625.0], [43.9, 626.0], [44.0, 627.0], [44.1, 628.0], [44.2, 630.0], [44.3, 631.0], [44.4, 632.0], [44.5, 632.0], [44.6, 633.0], [44.7, 635.0], [44.8, 636.0], [44.9, 637.0], [45.0, 639.0], [45.1, 641.0], [45.2, 642.0], [45.3, 643.0], [45.4, 643.0], [45.5, 645.0], [45.6, 646.0], [45.7, 648.0], [45.8, 650.0], [45.9, 651.0], [46.0, 652.0], [46.1, 654.0], [46.2, 656.0], [46.3, 657.0], [46.4, 658.0], [46.5, 659.0], [46.6, 660.0], [46.7, 661.0], [46.8, 663.0], [46.9, 665.0], [47.0, 667.0], [47.1, 669.0], [47.2, 671.0], [47.3, 673.0], [47.4, 675.0], [47.5, 676.0], [47.6, 677.0], [47.7, 678.0], [47.8, 680.0], [47.9, 681.0], [48.0, 683.0], [48.1, 684.0], [48.2, 686.0], [48.3, 687.0], [48.4, 688.0], [48.5, 689.0], [48.6, 690.0], [48.7, 692.0], [48.8, 693.0], [48.9, 694.0], [49.0, 695.0], [49.1, 695.0], [49.2, 697.0], [49.3, 698.0], [49.4, 701.0], [49.5, 701.0], [49.6, 702.0], [49.7, 705.0], [49.8, 706.0], [49.9, 707.0], [50.0, 708.0], [50.1, 709.0], [50.2, 710.0], [50.3, 711.0], [50.4, 713.0], [50.5, 715.0], [50.6, 716.0], [50.7, 717.0], [50.8, 719.0], [50.9, 721.0], [51.0, 721.0], [51.1, 723.0], [51.2, 725.0], [51.3, 726.0], [51.4, 727.0], [51.5, 730.0], [51.6, 731.0], [51.7, 731.0], [51.8, 732.0], [51.9, 733.0], [52.0, 735.0], [52.1, 736.0], [52.2, 737.0], [52.3, 738.0], [52.4, 739.0], [52.5, 740.0], [52.6, 742.0], [52.7, 744.0], [52.8, 746.0], [52.9, 747.0], [53.0, 750.0], [53.1, 751.0], [53.2, 753.0], [53.3, 754.0], [53.4, 755.0], [53.5, 758.0], [53.6, 760.0], [53.7, 761.0], [53.8, 763.0], [53.9, 764.0], [54.0, 766.0], [54.1, 768.0], [54.2, 769.0], [54.3, 770.0], [54.4, 773.0], [54.5, 774.0], [54.6, 776.0], [54.7, 778.0], [54.8, 780.0], [54.9, 781.0], [55.0, 783.0], [55.1, 785.0], [55.2, 789.0], [55.3, 791.0], [55.4, 792.0], [55.5, 794.0], [55.6, 796.0], [55.7, 797.0], [55.8, 798.0], [55.9, 799.0], [56.0, 801.0], [56.1, 804.0], [56.2, 806.0], [56.3, 808.0], [56.4, 810.0], [56.5, 812.0], [56.6, 814.0], [56.7, 815.0], [56.8, 816.0], [56.9, 819.0], [57.0, 821.0], [57.1, 823.0], [57.2, 826.0], [57.3, 827.0], [57.4, 829.0], [57.5, 830.0], [57.6, 831.0], [57.7, 833.0], [57.8, 834.0], [57.9, 835.0], [58.0, 837.0], [58.1, 838.0], [58.2, 839.0], [58.3, 840.0], [58.4, 842.0], [58.5, 844.0], [58.6, 847.0], [58.7, 848.0], [58.8, 849.0], [58.9, 852.0], [59.0, 854.0], [59.1, 854.0], [59.2, 856.0], [59.3, 859.0], [59.4, 861.0], [59.5, 862.0], [59.6, 865.0], [59.7, 866.0], [59.8, 869.0], [59.9, 871.0], [60.0, 871.0], [60.1, 873.0], [60.2, 876.0], [60.3, 880.0], [60.4, 883.0], [60.5, 884.0], [60.6, 886.0], [60.7, 889.0], [60.8, 893.0], [60.9, 895.0], [61.0, 896.0], [61.1, 898.0], [61.2, 899.0], [61.3, 900.0], [61.4, 901.0], [61.5, 903.0], [61.6, 904.0], [61.7, 906.0], [61.8, 907.0], [61.9, 909.0], [62.0, 911.0], [62.1, 913.0], [62.2, 914.0], [62.3, 916.0], [62.4, 918.0], [62.5, 920.0], [62.6, 921.0], [62.7, 922.0], [62.8, 923.0], [62.9, 927.0], [63.0, 929.0], [63.1, 930.0], [63.2, 931.0], [63.3, 933.0], [63.4, 935.0], [63.5, 938.0], [63.6, 940.0], [63.7, 941.0], [63.8, 942.0], [63.9, 943.0], [64.0, 944.0], [64.1, 946.0], [64.2, 947.0], [64.3, 948.0], [64.4, 950.0], [64.5, 951.0], [64.6, 953.0], [64.7, 954.0], [64.8, 956.0], [64.9, 956.0], [65.0, 959.0], [65.1, 960.0], [65.2, 961.0], [65.3, 963.0], [65.4, 964.0], [65.5, 966.0], [65.6, 968.0], [65.7, 969.0], [65.8, 970.0], [65.9, 972.0], [66.0, 974.0], [66.1, 975.0], [66.2, 978.0], [66.3, 984.0], [66.4, 985.0], [66.5, 987.0], [66.6, 988.0], [66.7, 988.0], [66.8, 989.0], [66.9, 992.0], [67.0, 993.0], [67.1, 995.0], [67.2, 998.0], [67.3, 999.0], [67.4, 1001.0], [67.5, 1001.0], [67.6, 1003.0], [67.7, 1005.0], [67.8, 1007.0], [67.9, 1008.0], [68.0, 1009.0], [68.1, 1010.0], [68.2, 1013.0], [68.3, 1014.0], [68.4, 1016.0], [68.5, 1018.0], [68.6, 1019.0], [68.7, 1022.0], [68.8, 1023.0], [68.9, 1025.0], [69.0, 1026.0], [69.1, 1027.0], [69.2, 1030.0], [69.3, 1032.0], [69.4, 1034.0], [69.5, 1035.0], [69.6, 1036.0], [69.7, 1038.0], [69.8, 1040.0], [69.9, 1041.0], [70.0, 1043.0], [70.1, 1044.0], [70.2, 1046.0], [70.3, 1046.0], [70.4, 1048.0], [70.5, 1050.0], [70.6, 1053.0], [70.7, 1054.0], [70.8, 1057.0], [70.9, 1061.0], [71.0, 1062.0], [71.1, 1063.0], [71.2, 1064.0], [71.3, 1066.0], [71.4, 1068.0], [71.5, 1070.0], [71.6, 1071.0], [71.7, 1072.0], [71.8, 1073.0], [71.9, 1076.0], [72.0, 1078.0], [72.1, 1080.0], [72.2, 1081.0], [72.3, 1083.0], [72.4, 1084.0], [72.5, 1085.0], [72.6, 1087.0], [72.7, 1089.0], [72.8, 1092.0], [72.9, 1093.0], [73.0, 1094.0], [73.1, 1096.0], [73.2, 1099.0], [73.3, 1102.0], [73.4, 1106.0], [73.5, 1109.0], [73.6, 1111.0], [73.7, 1112.0], [73.8, 1114.0], [73.9, 1115.0], [74.0, 1118.0], [74.1, 1118.0], [74.2, 1120.0], [74.3, 1121.0], [74.4, 1123.0], [74.5, 1127.0], [74.6, 1129.0], [74.7, 1131.0], [74.8, 1133.0], [74.9, 1135.0], [75.0, 1136.0], [75.1, 1138.0], [75.2, 1141.0], [75.3, 1143.0], [75.4, 1145.0], [75.5, 1147.0], [75.6, 1150.0], [75.7, 1153.0], [75.8, 1154.0], [75.9, 1156.0], [76.0, 1158.0], [76.1, 1163.0], [76.2, 1164.0], [76.3, 1165.0], [76.4, 1166.0], [76.5, 1169.0], [76.6, 1172.0], [76.7, 1174.0], [76.8, 1175.0], [76.9, 1176.0], [77.0, 1180.0], [77.1, 1181.0], [77.2, 1186.0], [77.3, 1191.0], [77.4, 1195.0], [77.5, 1198.0], [77.6, 1200.0], [77.7, 1202.0], [77.8, 1205.0], [77.9, 1206.0], [78.0, 1208.0], [78.1, 1214.0], [78.2, 1215.0], [78.3, 1218.0], [78.4, 1220.0], [78.5, 1224.0], [78.6, 1226.0], [78.7, 1228.0], [78.8, 1231.0], [78.9, 1233.0], [79.0, 1236.0], [79.1, 1238.0], [79.2, 1242.0], [79.3, 1245.0], [79.4, 1247.0], [79.5, 1250.0], [79.6, 1253.0], [79.7, 1255.0], [79.8, 1258.0], [79.9, 1259.0], [80.0, 1262.0], [80.1, 1267.0], [80.2, 1270.0], [80.3, 1272.0], [80.4, 1275.0], [80.5, 1280.0], [80.6, 1282.0], [80.7, 1283.0], [80.8, 1287.0], [80.9, 1289.0], [81.0, 1291.0], [81.1, 1293.0], [81.2, 1296.0], [81.3, 1299.0], [81.4, 1301.0], [81.5, 1303.0], [81.6, 1308.0], [81.7, 1310.0], [81.8, 1312.0], [81.9, 1312.0], [82.0, 1314.0], [82.1, 1316.0], [82.2, 1317.0], [82.3, 1319.0], [82.4, 1321.0], [82.5, 1323.0], [82.6, 1328.0], [82.7, 1329.0], [82.8, 1332.0], [82.9, 1333.0], [83.0, 1336.0], [83.1, 1339.0], [83.2, 1341.0], [83.3, 1344.0], [83.4, 1347.0], [83.5, 1349.0], [83.6, 1352.0], [83.7, 1354.0], [83.8, 1360.0], [83.9, 1361.0], [84.0, 1363.0], [84.1, 1365.0], [84.2, 1367.0], [84.3, 1368.0], [84.4, 1371.0], [84.5, 1373.0], [84.6, 1376.0], [84.7, 1380.0], [84.8, 1385.0], [84.9, 1388.0], [85.0, 1390.0], [85.1, 1393.0], [85.2, 1395.0], [85.3, 1396.0], [85.4, 1400.0], [85.5, 1403.0], [85.6, 1405.0], [85.7, 1406.0], [85.8, 1408.0], [85.9, 1412.0], [86.0, 1415.0], [86.1, 1418.0], [86.2, 1420.0], [86.3, 1421.0], [86.4, 1424.0], [86.5, 1425.0], [86.6, 1427.0], [86.7, 1431.0], [86.8, 1432.0], [86.9, 1437.0], [87.0, 1441.0], [87.1, 1442.0], [87.2, 1447.0], [87.3, 1449.0], [87.4, 1455.0], [87.5, 1459.0], [87.6, 1461.0], [87.7, 1464.0], [87.8, 1468.0], [87.9, 1472.0], [88.0, 1474.0], [88.1, 1476.0], [88.2, 1479.0], [88.3, 1482.0], [88.4, 1485.0], [88.5, 1491.0], [88.6, 1497.0], [88.7, 1500.0], [88.8, 1503.0], [88.9, 1506.0], [89.0, 1508.0], [89.1, 1515.0], [89.2, 1518.0], [89.3, 1523.0], [89.4, 1529.0], [89.5, 1532.0], [89.6, 1535.0], [89.7, 1539.0], [89.8, 1542.0], [89.9, 1545.0], [90.0, 1547.0], [90.1, 1554.0], [90.2, 1556.0], [90.3, 1564.0], [90.4, 1565.0], [90.5, 1569.0], [90.6, 1575.0], [90.7, 1582.0], [90.8, 1586.0], [90.9, 1590.0], [91.0, 1595.0], [91.1, 1600.0], [91.2, 1605.0], [91.3, 1609.0], [91.4, 1613.0], [91.5, 1621.0], [91.6, 1632.0], [91.7, 1639.0], [91.8, 1645.0], [91.9, 1652.0], [92.0, 1664.0], [92.1, 1667.0], [92.2, 1677.0], [92.3, 1682.0], [92.4, 1688.0], [92.5, 1697.0], [92.6, 1704.0], [92.7, 1718.0], [92.8, 1723.0], [92.9, 1736.0], [93.0, 1744.0], [93.1, 1751.0], [93.2, 1758.0], [93.3, 1770.0], [93.4, 1781.0], [93.5, 1787.0], [93.6, 1798.0], [93.7, 1802.0], [93.8, 1811.0], [93.9, 1822.0], [94.0, 1834.0], [94.1, 1842.0], [94.2, 1849.0], [94.3, 1866.0], [94.4, 1885.0], [94.5, 1889.0], [94.6, 1898.0], [94.7, 1903.0], [94.8, 1915.0], [94.9, 1924.0], [95.0, 1935.0], [95.1, 1955.0], [95.2, 1961.0], [95.3, 1972.0], [95.4, 1983.0], [95.5, 1993.0], [95.6, 2029.0], [95.7, 2037.0], [95.8, 2051.0], [95.9, 2075.0], [96.0, 2082.0], [96.1, 2096.0], [96.2, 2109.0], [96.3, 2118.0], [96.4, 2137.0], [96.5, 2155.0], [96.6, 2168.0], [96.7, 2190.0], [96.8, 2195.0], [96.9, 2215.0], [97.0, 2229.0], [97.1, 2241.0], [97.2, 2258.0], [97.3, 2275.0], [97.4, 2295.0], [97.5, 2302.0], [97.6, 2321.0], [97.7, 2335.0], [97.8, 2381.0], [97.9, 2397.0], [98.0, 2444.0], [98.1, 2476.0], [98.2, 2497.0], [98.3, 2506.0], [98.4, 2541.0], [98.5, 2575.0], [98.6, 2668.0], [98.7, 2728.0], [98.8, 2771.0], [98.9, 2805.0], [99.0, 2888.0], [99.1, 3110.0], [99.2, 3272.0], [99.3, 3365.0], [99.4, 3584.0], [99.5, 3682.0], [99.6, 3849.0], [99.7, 4228.0], [99.8, 4409.0], [99.9, 4857.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 614.0, "series": [{"data": [[600.0, 403.0], [700.0, 341.0], [800.0, 275.0], [900.0, 318.0], [1000.0, 306.0], [1100.0, 227.0], [1200.0, 194.0], [1300.0, 211.0], [1400.0, 170.0], [1500.0, 126.0], [1600.0, 75.0], [1700.0, 55.0], [1800.0, 54.0], [1900.0, 46.0], [2000.0, 31.0], [2100.0, 36.0], [2200.0, 33.0], [2300.0, 24.0], [2400.0, 16.0], [2500.0, 16.0], [2600.0, 6.0], [2700.0, 12.0], [2800.0, 7.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 2.0], [3200.0, 8.0], [3400.0, 3.0], [3500.0, 1.0], [3600.0, 6.0], [3700.0, 4.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 3.0], [4100.0, 1.0], [4300.0, 2.0], [4400.0, 2.0], [4600.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [8200.0, 1.0], [100.0, 94.0], [200.0, 526.0], [300.0, 368.0], [400.0, 614.0], [500.0, 556.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2997.0, "series": [{"data": [[0.0, 1607.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2997.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 586.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.829545454545455, "minX": 1.60223586E12, "maxY": 10.0, "series": [{"data": [[1.60223628E12, 9.829545454545455], [1.60223598E12, 10.0], [1.60223592E12, 10.0], [1.6022361E12, 10.0], [1.60223604E12, 10.0], [1.60223622E12, 10.0], [1.60223616E12, 10.0], [1.60223586E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223628E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 278.0, "minX": 1.0, "maxY": 2397.0, "series": [{"data": [[8.0, 278.0], [4.0, 942.0], [2.0, 1687.0], [1.0, 2397.0], [9.0, 1407.0], [10.0, 863.9689309147075], [5.0, 621.0], [6.0, 773.0], [3.0, 747.0], [7.0, 798.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 864.3299942207694]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1987.2833333333333, "minX": 1.60223586E12, "maxY": 3555435.3833333333, "series": [{"data": [[1.60223628E12, 1364843.9166666667], [1.60223598E12, 3510960.1], [1.60223592E12, 3093709.0833333335], [1.6022361E12, 2655571.7333333334], [1.60223604E12, 3453340.9833333334], [1.60223622E12, 3084753.2333333334], [1.60223616E12, 3555435.3833333333], [1.60223586E12, 3253193.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223628E12, 1987.2833333333333], [1.60223598E12, 5602.95], [1.60223592E12, 5301.166666666667], [1.6022361E12, 4865.05], [1.60223604E12, 4669.116666666667], [1.60223622E12, 5797.85], [1.60223616E12, 5618.35], [1.60223586E12, 4742.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223628E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 784.3494764397896, "minX": 1.60223586E12, "maxY": 1066.060606060606, "series": [{"data": [[1.60223628E12, 1066.060606060606], [1.60223598E12, 810.38700947226], [1.60223592E12, 840.1745810055862], [1.6022361E12, 899.1240768094533], [1.60223604E12, 951.7110754414128], [1.60223622E12, 784.3494764397896], [1.60223616E12, 790.6082337317401], [1.60223586E12, 929.2549618320613]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223628E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 782.8219895287949, "minX": 1.60223586E12, "maxY": 1063.954545454546, "series": [{"data": [[1.60223628E12, 1063.954545454546], [1.60223598E12, 808.4763193504734], [1.60223592E12, 838.2681564245819], [1.6022361E12, 897.5347119645498], [1.60223604E12, 949.2487961476736], [1.60223622E12, 782.8219895287949], [1.60223616E12, 788.8233731739701], [1.60223586E12, 927.1770992366417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223628E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010471204188481676, "minX": 1.60223586E12, "maxY": 0.16183206106870246, "series": [{"data": [[1.60223628E12, 0.022727272727272742], [1.60223598E12, 0.012178619756427624], [1.60223592E12, 0.01955307262569834], [1.6022361E12, 0.022156573116691305], [1.60223604E12, 0.012841091492776895], [1.60223622E12, 0.010471204188481676], [1.60223616E12, 0.011952191235059756], [1.60223586E12, 0.16183206106870246]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223628E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60223586E12, "maxY": 8220.0, "series": [{"data": [[1.60223628E12, 3944.0], [1.60223598E12, 3682.0], [1.60223592E12, 4857.0], [1.6022361E12, 8220.0], [1.60223604E12, 5010.0], [1.60223622E12, 3404.0], [1.60223616E12, 2658.0], [1.60223586E12, 5737.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223628E12, 204.15499981045724], [1.60223598E12, 192.65099982380866], [1.60223592E12, 194.90599965810776], [1.6022361E12, 198.2039996767044], [1.60223604E12, 191.0], [1.60223622E12, 191.88499981760978], [1.60223616E12, 193.7859998202324], [1.60223586E12, 201.71199953079224]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223628E12, 204.87050007581712], [1.60223598E12, 193.31610007047652], [1.60223592E12, 196.09830006837845], [1.6022361E12, 199.42440012931823], [1.60223604E12, 191.17760005950927], [1.60223622E12, 192.0], [1.60223616E12, 194.92920014381409], [1.60223586E12, 202.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223628E12, 204.55249990522861], [1.60223598E12, 193.02049991190432], [1.60223592E12, 195.62299982905387], [1.6022361E12, 198.88199983835221], [1.60223604E12, 191.0], [1.60223622E12, 192.0], [1.60223616E12, 194.3259998202324], [1.60223586E12, 202.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223628E12, 188.0], [1.60223598E12, 187.0], [1.60223592E12, 187.0], [1.6022361E12, 192.0], [1.60223604E12, 185.0], [1.60223622E12, 182.0], [1.60223616E12, 186.0], [1.60223586E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223628E12, 929.0], [1.60223598E12, 642.5], [1.60223592E12, 643.0], [1.6022361E12, 736.0], [1.60223604E12, 814.0], [1.60223622E12, 609.0], [1.60223616E12, 609.0], [1.60223586E12, 748.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223628E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 397.5, "minX": 1.0, "maxY": 2690.0, "series": [{"data": [[2.0, 2690.0], [3.0, 949.0], [4.0, 1494.5], [5.0, 1419.0], [6.0, 1147.5], [7.0, 1037.0], [8.0, 1072.0], [9.0, 959.0], [10.0, 884.5], [11.0, 840.5], [12.0, 721.5], [13.0, 727.0], [14.0, 677.0], [15.0, 645.0], [1.0, 2571.5], [16.0, 577.0], [17.0, 534.0], [18.0, 458.0], [19.0, 470.0], [20.0, 446.0], [21.0, 412.0], [22.0, 436.5], [23.0, 417.0], [24.0, 430.5], [25.0, 432.0], [26.0, 419.0], [27.0, 430.0], [28.0, 397.5], [29.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 1043.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 397.5, "minX": 1.0, "maxY": 2688.5, "series": [{"data": [[2.0, 2688.5], [3.0, 948.0], [4.0, 1493.0], [5.0, 1412.0], [6.0, 1141.0], [7.0, 1035.0], [8.0, 1068.5], [9.0, 956.5], [10.0, 882.0], [11.0, 840.5], [12.0, 719.0], [13.0, 726.0], [14.0, 676.5], [15.0, 645.0], [1.0, 2563.0], [16.0, 576.0], [17.0, 533.0], [18.0, 457.5], [19.0, 469.5], [20.0, 445.5], [21.0, 412.0], [22.0, 436.5], [23.0, 417.0], [24.0, 430.5], [25.0, 432.0], [26.0, 419.0], [27.0, 430.0], [28.0, 397.5], [29.0, 410.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 1043.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6022358E12, "maxY": 12.733333333333333, "series": [{"data": [[1.6022358E12, 0.16666666666666666], [1.60223628E12, 4.233333333333333], [1.60223598E12, 12.316666666666666], [1.60223592E12, 11.933333333333334], [1.6022361E12, 11.283333333333333], [1.60223604E12, 10.383333333333333], [1.60223622E12, 12.733333333333333], [1.60223616E12, 12.55], [1.60223586E12, 10.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223628E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223586E12, "maxY": 12.733333333333333, "series": [{"data": [[1.60223628E12, 4.4], [1.60223598E12, 12.3], [1.60223592E12, 11.933333333333334], [1.6022361E12, 11.283333333333333], [1.60223604E12, 10.383333333333333], [1.60223622E12, 12.733333333333333], [1.60223616E12, 12.55], [1.60223586E12, 10.916666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223598E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223628E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223586E12, "maxY": 12.733333333333333, "series": [{"data": [[1.60223628E12, 4.4], [1.60223598E12, 12.3], [1.60223592E12, 11.933333333333334], [1.6022361E12, 11.283333333333333], [1.60223604E12, 10.383333333333333], [1.60223622E12, 12.733333333333333], [1.60223616E12, 12.55], [1.60223586E12, 10.916666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223598E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223628E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223586E12, "maxY": 12.733333333333333, "series": [{"data": [[1.60223628E12, 4.4], [1.60223598E12, 12.3], [1.60223592E12, 11.933333333333334], [1.6022361E12, 11.283333333333333], [1.60223604E12, 10.383333333333333], [1.60223622E12, 12.733333333333333], [1.60223616E12, 12.55], [1.60223586E12, 10.916666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223598E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223628E12, "title": "Total Transactions Per Second"}},
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

