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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 5519.0, "series": [{"data": [[0.0, 182.0], [0.1, 185.0], [0.2, 187.0], [0.3, 189.0], [0.4, 189.0], [0.5, 190.0], [0.6, 192.0], [0.7, 193.0], [0.8, 194.0], [0.9, 195.0], [1.0, 196.0], [1.1, 197.0], [1.2, 198.0], [1.3, 199.0], [1.4, 199.0], [1.5, 200.0], [1.6, 201.0], [1.7, 201.0], [1.8, 201.0], [1.9, 202.0], [2.0, 203.0], [2.1, 204.0], [2.2, 205.0], [2.3, 205.0], [2.4, 207.0], [2.5, 207.0], [2.6, 208.0], [2.7, 209.0], [2.8, 209.0], [2.9, 210.0], [3.0, 211.0], [3.1, 211.0], [3.2, 213.0], [3.3, 213.0], [3.4, 214.0], [3.5, 216.0], [3.6, 217.0], [3.7, 219.0], [3.8, 219.0], [3.9, 221.0], [4.0, 221.0], [4.1, 222.0], [4.2, 223.0], [4.3, 224.0], [4.4, 225.0], [4.5, 226.0], [4.6, 227.0], [4.7, 228.0], [4.8, 230.0], [4.9, 231.0], [5.0, 232.0], [5.1, 232.0], [5.2, 235.0], [5.3, 236.0], [5.4, 236.0], [5.5, 237.0], [5.6, 238.0], [5.7, 239.0], [5.8, 240.0], [5.9, 241.0], [6.0, 242.0], [6.1, 243.0], [6.2, 244.0], [6.3, 245.0], [6.4, 247.0], [6.5, 248.0], [6.6, 249.0], [6.7, 250.0], [6.8, 252.0], [6.9, 253.0], [7.0, 255.0], [7.1, 256.0], [7.2, 257.0], [7.3, 260.0], [7.4, 260.0], [7.5, 261.0], [7.6, 263.0], [7.7, 264.0], [7.8, 265.0], [7.9, 267.0], [8.0, 267.0], [8.1, 269.0], [8.2, 270.0], [8.3, 270.0], [8.4, 272.0], [8.5, 273.0], [8.6, 275.0], [8.7, 275.0], [8.8, 276.0], [8.9, 276.0], [9.0, 277.0], [9.1, 277.0], [9.2, 278.0], [9.3, 279.0], [9.4, 280.0], [9.5, 281.0], [9.6, 282.0], [9.7, 283.0], [9.8, 284.0], [9.9, 285.0], [10.0, 286.0], [10.1, 286.0], [10.2, 287.0], [10.3, 288.0], [10.4, 288.0], [10.5, 289.0], [10.6, 291.0], [10.7, 292.0], [10.8, 293.0], [10.9, 294.0], [11.0, 294.0], [11.1, 296.0], [11.2, 297.0], [11.3, 298.0], [11.4, 299.0], [11.5, 300.0], [11.6, 300.0], [11.7, 302.0], [11.8, 302.0], [11.9, 303.0], [12.0, 305.0], [12.1, 306.0], [12.2, 307.0], [12.3, 309.0], [12.4, 311.0], [12.5, 313.0], [12.6, 314.0], [12.7, 315.0], [12.8, 316.0], [12.9, 317.0], [13.0, 318.0], [13.1, 320.0], [13.2, 321.0], [13.3, 321.0], [13.4, 322.0], [13.5, 323.0], [13.6, 324.0], [13.7, 325.0], [13.8, 326.0], [13.9, 327.0], [14.0, 328.0], [14.1, 330.0], [14.2, 332.0], [14.3, 333.0], [14.4, 334.0], [14.5, 335.0], [14.6, 337.0], [14.7, 339.0], [14.8, 342.0], [14.9, 345.0], [15.0, 346.0], [15.1, 347.0], [15.2, 348.0], [15.3, 354.0], [15.4, 355.0], [15.5, 356.0], [15.6, 357.0], [15.7, 360.0], [15.8, 363.0], [15.9, 364.0], [16.0, 365.0], [16.1, 368.0], [16.2, 370.0], [16.3, 371.0], [16.4, 374.0], [16.5, 375.0], [16.6, 376.0], [16.7, 378.0], [16.8, 379.0], [16.9, 380.0], [17.0, 381.0], [17.1, 382.0], [17.2, 383.0], [17.3, 383.0], [17.4, 385.0], [17.5, 386.0], [17.6, 387.0], [17.7, 388.0], [17.8, 388.0], [17.9, 389.0], [18.0, 389.0], [18.1, 389.0], [18.2, 390.0], [18.3, 391.0], [18.4, 392.0], [18.5, 392.0], [18.6, 393.0], [18.7, 393.0], [18.8, 394.0], [18.9, 394.0], [19.0, 394.0], [19.1, 395.0], [19.2, 396.0], [19.3, 396.0], [19.4, 397.0], [19.5, 398.0], [19.6, 399.0], [19.7, 400.0], [19.8, 400.0], [19.9, 401.0], [20.0, 402.0], [20.1, 403.0], [20.2, 403.0], [20.3, 405.0], [20.4, 405.0], [20.5, 406.0], [20.6, 407.0], [20.7, 408.0], [20.8, 409.0], [20.9, 409.0], [21.0, 410.0], [21.1, 410.0], [21.2, 411.0], [21.3, 411.0], [21.4, 412.0], [21.5, 413.0], [21.6, 413.0], [21.7, 415.0], [21.8, 416.0], [21.9, 416.0], [22.0, 417.0], [22.1, 418.0], [22.2, 419.0], [22.3, 419.0], [22.4, 420.0], [22.5, 421.0], [22.6, 422.0], [22.7, 424.0], [22.8, 425.0], [22.9, 425.0], [23.0, 426.0], [23.1, 427.0], [23.2, 428.0], [23.3, 429.0], [23.4, 429.0], [23.5, 430.0], [23.6, 431.0], [23.7, 432.0], [23.8, 433.0], [23.9, 434.0], [24.0, 436.0], [24.1, 437.0], [24.2, 438.0], [24.3, 438.0], [24.4, 439.0], [24.5, 440.0], [24.6, 441.0], [24.7, 442.0], [24.8, 442.0], [24.9, 443.0], [25.0, 443.0], [25.1, 444.0], [25.2, 445.0], [25.3, 446.0], [25.4, 447.0], [25.5, 448.0], [25.6, 449.0], [25.7, 450.0], [25.8, 451.0], [25.9, 451.0], [26.0, 453.0], [26.1, 454.0], [26.2, 455.0], [26.3, 456.0], [26.4, 457.0], [26.5, 457.0], [26.6, 458.0], [26.7, 459.0], [26.8, 459.0], [26.9, 460.0], [27.0, 460.0], [27.1, 461.0], [27.2, 462.0], [27.3, 463.0], [27.4, 464.0], [27.5, 465.0], [27.6, 467.0], [27.7, 467.0], [27.8, 468.0], [27.9, 469.0], [28.0, 470.0], [28.1, 470.0], [28.2, 471.0], [28.3, 472.0], [28.4, 473.0], [28.5, 473.0], [28.6, 474.0], [28.7, 475.0], [28.8, 477.0], [28.9, 477.0], [29.0, 479.0], [29.1, 479.0], [29.2, 480.0], [29.3, 481.0], [29.4, 481.0], [29.5, 483.0], [29.6, 484.0], [29.7, 484.0], [29.8, 485.0], [29.9, 486.0], [30.0, 487.0], [30.1, 488.0], [30.2, 489.0], [30.3, 490.0], [30.4, 492.0], [30.5, 493.0], [30.6, 495.0], [30.7, 496.0], [30.8, 497.0], [30.9, 497.0], [31.0, 498.0], [31.1, 500.0], [31.2, 501.0], [31.3, 501.0], [31.4, 502.0], [31.5, 503.0], [31.6, 504.0], [31.7, 505.0], [31.8, 506.0], [31.9, 506.0], [32.0, 507.0], [32.1, 508.0], [32.2, 509.0], [32.3, 509.0], [32.4, 511.0], [32.5, 513.0], [32.6, 514.0], [32.7, 515.0], [32.8, 517.0], [32.9, 518.0], [33.0, 518.0], [33.1, 520.0], [33.2, 521.0], [33.3, 522.0], [33.4, 523.0], [33.5, 524.0], [33.6, 524.0], [33.7, 525.0], [33.8, 526.0], [33.9, 527.0], [34.0, 527.0], [34.1, 529.0], [34.2, 529.0], [34.3, 530.0], [34.4, 531.0], [34.5, 531.0], [34.6, 531.0], [34.7, 532.0], [34.8, 533.0], [34.9, 534.0], [35.0, 535.0], [35.1, 535.0], [35.2, 536.0], [35.3, 537.0], [35.4, 538.0], [35.5, 538.0], [35.6, 540.0], [35.7, 541.0], [35.8, 541.0], [35.9, 542.0], [36.0, 544.0], [36.1, 545.0], [36.2, 545.0], [36.3, 546.0], [36.4, 547.0], [36.5, 548.0], [36.6, 549.0], [36.7, 549.0], [36.8, 549.0], [36.9, 550.0], [37.0, 551.0], [37.1, 553.0], [37.2, 553.0], [37.3, 554.0], [37.4, 555.0], [37.5, 556.0], [37.6, 556.0], [37.7, 557.0], [37.8, 558.0], [37.9, 560.0], [38.0, 560.0], [38.1, 562.0], [38.2, 563.0], [38.3, 564.0], [38.4, 564.0], [38.5, 565.0], [38.6, 566.0], [38.7, 567.0], [38.8, 568.0], [38.9, 568.0], [39.0, 570.0], [39.1, 571.0], [39.2, 572.0], [39.3, 574.0], [39.4, 575.0], [39.5, 576.0], [39.6, 577.0], [39.7, 578.0], [39.8, 578.0], [39.9, 580.0], [40.0, 580.0], [40.1, 582.0], [40.2, 583.0], [40.3, 584.0], [40.4, 585.0], [40.5, 587.0], [40.6, 588.0], [40.7, 588.0], [40.8, 590.0], [40.9, 590.0], [41.0, 591.0], [41.1, 592.0], [41.2, 593.0], [41.3, 595.0], [41.4, 596.0], [41.5, 596.0], [41.6, 596.0], [41.7, 597.0], [41.8, 598.0], [41.9, 601.0], [42.0, 602.0], [42.1, 602.0], [42.2, 603.0], [42.3, 604.0], [42.4, 605.0], [42.5, 605.0], [42.6, 606.0], [42.7, 608.0], [42.8, 609.0], [42.9, 611.0], [43.0, 611.0], [43.1, 613.0], [43.2, 616.0], [43.3, 618.0], [43.4, 619.0], [43.5, 620.0], [43.6, 620.0], [43.7, 621.0], [43.8, 623.0], [43.9, 623.0], [44.0, 625.0], [44.1, 627.0], [44.2, 628.0], [44.3, 630.0], [44.4, 631.0], [44.5, 632.0], [44.6, 632.0], [44.7, 633.0], [44.8, 634.0], [44.9, 635.0], [45.0, 635.0], [45.1, 636.0], [45.2, 637.0], [45.3, 639.0], [45.4, 640.0], [45.5, 641.0], [45.6, 642.0], [45.7, 643.0], [45.8, 644.0], [45.9, 645.0], [46.0, 646.0], [46.1, 648.0], [46.2, 649.0], [46.3, 650.0], [46.4, 653.0], [46.5, 654.0], [46.6, 655.0], [46.7, 656.0], [46.8, 657.0], [46.9, 660.0], [47.0, 663.0], [47.1, 664.0], [47.2, 666.0], [47.3, 668.0], [47.4, 669.0], [47.5, 670.0], [47.6, 671.0], [47.7, 672.0], [47.8, 674.0], [47.9, 674.0], [48.0, 675.0], [48.1, 677.0], [48.2, 678.0], [48.3, 679.0], [48.4, 680.0], [48.5, 682.0], [48.6, 683.0], [48.7, 684.0], [48.8, 685.0], [48.9, 686.0], [49.0, 689.0], [49.1, 690.0], [49.2, 691.0], [49.3, 694.0], [49.4, 697.0], [49.5, 700.0], [49.6, 701.0], [49.7, 701.0], [49.8, 703.0], [49.9, 705.0], [50.0, 706.0], [50.1, 707.0], [50.2, 709.0], [50.3, 710.0], [50.4, 712.0], [50.5, 713.0], [50.6, 715.0], [50.7, 716.0], [50.8, 717.0], [50.9, 718.0], [51.0, 719.0], [51.1, 720.0], [51.2, 724.0], [51.3, 725.0], [51.4, 727.0], [51.5, 728.0], [51.6, 731.0], [51.7, 732.0], [51.8, 734.0], [51.9, 736.0], [52.0, 739.0], [52.1, 740.0], [52.2, 742.0], [52.3, 743.0], [52.4, 744.0], [52.5, 745.0], [52.6, 746.0], [52.7, 747.0], [52.8, 750.0], [52.9, 751.0], [53.0, 752.0], [53.1, 753.0], [53.2, 755.0], [53.3, 756.0], [53.4, 757.0], [53.5, 759.0], [53.6, 760.0], [53.7, 762.0], [53.8, 763.0], [53.9, 765.0], [54.0, 766.0], [54.1, 768.0], [54.2, 769.0], [54.3, 771.0], [54.4, 773.0], [54.5, 775.0], [54.6, 776.0], [54.7, 779.0], [54.8, 781.0], [54.9, 783.0], [55.0, 784.0], [55.1, 786.0], [55.2, 787.0], [55.3, 791.0], [55.4, 792.0], [55.5, 793.0], [55.6, 795.0], [55.7, 796.0], [55.8, 799.0], [55.9, 802.0], [56.0, 803.0], [56.1, 804.0], [56.2, 806.0], [56.3, 809.0], [56.4, 809.0], [56.5, 811.0], [56.6, 813.0], [56.7, 815.0], [56.8, 818.0], [56.9, 820.0], [57.0, 822.0], [57.1, 823.0], [57.2, 825.0], [57.3, 826.0], [57.4, 828.0], [57.5, 829.0], [57.6, 831.0], [57.7, 834.0], [57.8, 836.0], [57.9, 837.0], [58.0, 838.0], [58.1, 839.0], [58.2, 841.0], [58.3, 842.0], [58.4, 842.0], [58.5, 844.0], [58.6, 845.0], [58.7, 847.0], [58.8, 849.0], [58.9, 852.0], [59.0, 855.0], [59.1, 857.0], [59.2, 859.0], [59.3, 860.0], [59.4, 860.0], [59.5, 861.0], [59.6, 863.0], [59.7, 864.0], [59.8, 865.0], [59.9, 865.0], [60.0, 866.0], [60.1, 869.0], [60.2, 870.0], [60.3, 873.0], [60.4, 875.0], [60.5, 877.0], [60.6, 879.0], [60.7, 882.0], [60.8, 884.0], [60.9, 886.0], [61.0, 888.0], [61.1, 890.0], [61.2, 891.0], [61.3, 893.0], [61.4, 894.0], [61.5, 895.0], [61.6, 898.0], [61.7, 899.0], [61.8, 901.0], [61.9, 904.0], [62.0, 907.0], [62.1, 910.0], [62.2, 912.0], [62.3, 914.0], [62.4, 916.0], [62.5, 917.0], [62.6, 919.0], [62.7, 921.0], [62.8, 923.0], [62.9, 924.0], [63.0, 926.0], [63.1, 928.0], [63.2, 931.0], [63.3, 934.0], [63.4, 935.0], [63.5, 935.0], [63.6, 937.0], [63.7, 939.0], [63.8, 940.0], [63.9, 941.0], [64.0, 944.0], [64.1, 945.0], [64.2, 947.0], [64.3, 948.0], [64.4, 949.0], [64.5, 950.0], [64.6, 952.0], [64.7, 954.0], [64.8, 956.0], [64.9, 959.0], [65.0, 960.0], [65.1, 961.0], [65.2, 964.0], [65.3, 966.0], [65.4, 967.0], [65.5, 968.0], [65.6, 970.0], [65.7, 972.0], [65.8, 972.0], [65.9, 974.0], [66.0, 975.0], [66.1, 976.0], [66.2, 978.0], [66.3, 980.0], [66.4, 981.0], [66.5, 985.0], [66.6, 986.0], [66.7, 989.0], [66.8, 990.0], [66.9, 992.0], [67.0, 993.0], [67.1, 994.0], [67.2, 996.0], [67.3, 998.0], [67.4, 1000.0], [67.5, 1002.0], [67.6, 1004.0], [67.7, 1004.0], [67.8, 1007.0], [67.9, 1009.0], [68.0, 1011.0], [68.1, 1012.0], [68.2, 1013.0], [68.3, 1014.0], [68.4, 1016.0], [68.5, 1017.0], [68.6, 1018.0], [68.7, 1020.0], [68.8, 1021.0], [68.9, 1022.0], [69.0, 1023.0], [69.1, 1025.0], [69.2, 1026.0], [69.3, 1026.0], [69.4, 1028.0], [69.5, 1029.0], [69.6, 1030.0], [69.7, 1031.0], [69.8, 1032.0], [69.9, 1034.0], [70.0, 1035.0], [70.1, 1037.0], [70.2, 1039.0], [70.3, 1040.0], [70.4, 1042.0], [70.5, 1043.0], [70.6, 1044.0], [70.7, 1046.0], [70.8, 1048.0], [70.9, 1049.0], [71.0, 1051.0], [71.1, 1052.0], [71.2, 1053.0], [71.3, 1054.0], [71.4, 1056.0], [71.5, 1058.0], [71.6, 1060.0], [71.7, 1062.0], [71.8, 1063.0], [71.9, 1064.0], [72.0, 1065.0], [72.1, 1067.0], [72.2, 1069.0], [72.3, 1070.0], [72.4, 1074.0], [72.5, 1075.0], [72.6, 1078.0], [72.7, 1082.0], [72.8, 1084.0], [72.9, 1086.0], [73.0, 1088.0], [73.1, 1090.0], [73.2, 1091.0], [73.3, 1092.0], [73.4, 1094.0], [73.5, 1096.0], [73.6, 1096.0], [73.7, 1099.0], [73.8, 1101.0], [73.9, 1104.0], [74.0, 1106.0], [74.1, 1108.0], [74.2, 1109.0], [74.3, 1112.0], [74.4, 1113.0], [74.5, 1116.0], [74.6, 1120.0], [74.7, 1121.0], [74.8, 1124.0], [74.9, 1125.0], [75.0, 1126.0], [75.1, 1128.0], [75.2, 1129.0], [75.3, 1130.0], [75.4, 1133.0], [75.5, 1136.0], [75.6, 1139.0], [75.7, 1140.0], [75.8, 1143.0], [75.9, 1144.0], [76.0, 1145.0], [76.1, 1147.0], [76.2, 1149.0], [76.3, 1150.0], [76.4, 1153.0], [76.5, 1155.0], [76.6, 1157.0], [76.7, 1159.0], [76.8, 1163.0], [76.9, 1168.0], [77.0, 1170.0], [77.1, 1174.0], [77.2, 1177.0], [77.3, 1178.0], [77.4, 1180.0], [77.5, 1182.0], [77.6, 1186.0], [77.7, 1187.0], [77.8, 1190.0], [77.9, 1193.0], [78.0, 1196.0], [78.1, 1200.0], [78.2, 1201.0], [78.3, 1204.0], [78.4, 1206.0], [78.5, 1209.0], [78.6, 1210.0], [78.7, 1213.0], [78.8, 1214.0], [78.9, 1216.0], [79.0, 1218.0], [79.1, 1220.0], [79.2, 1222.0], [79.3, 1225.0], [79.4, 1229.0], [79.5, 1229.0], [79.6, 1231.0], [79.7, 1231.0], [79.8, 1233.0], [79.9, 1236.0], [80.0, 1238.0], [80.1, 1242.0], [80.2, 1243.0], [80.3, 1247.0], [80.4, 1251.0], [80.5, 1254.0], [80.6, 1257.0], [80.7, 1260.0], [80.8, 1266.0], [80.9, 1267.0], [81.0, 1268.0], [81.1, 1270.0], [81.2, 1271.0], [81.3, 1272.0], [81.4, 1274.0], [81.5, 1277.0], [81.6, 1282.0], [81.7, 1285.0], [81.8, 1287.0], [81.9, 1290.0], [82.0, 1291.0], [82.1, 1293.0], [82.2, 1294.0], [82.3, 1300.0], [82.4, 1304.0], [82.5, 1306.0], [82.6, 1308.0], [82.7, 1309.0], [82.8, 1311.0], [82.9, 1316.0], [83.0, 1318.0], [83.1, 1320.0], [83.2, 1322.0], [83.3, 1324.0], [83.4, 1326.0], [83.5, 1327.0], [83.6, 1330.0], [83.7, 1331.0], [83.8, 1332.0], [83.9, 1334.0], [84.0, 1335.0], [84.1, 1338.0], [84.2, 1341.0], [84.3, 1345.0], [84.4, 1347.0], [84.5, 1353.0], [84.6, 1355.0], [84.7, 1356.0], [84.8, 1360.0], [84.9, 1362.0], [85.0, 1364.0], [85.1, 1366.0], [85.2, 1369.0], [85.3, 1371.0], [85.4, 1373.0], [85.5, 1374.0], [85.6, 1376.0], [85.7, 1378.0], [85.8, 1381.0], [85.9, 1382.0], [86.0, 1387.0], [86.1, 1389.0], [86.2, 1391.0], [86.3, 1393.0], [86.4, 1396.0], [86.5, 1399.0], [86.6, 1402.0], [86.7, 1403.0], [86.8, 1406.0], [86.9, 1409.0], [87.0, 1411.0], [87.1, 1413.0], [87.2, 1415.0], [87.3, 1417.0], [87.4, 1420.0], [87.5, 1423.0], [87.6, 1425.0], [87.7, 1427.0], [87.8, 1430.0], [87.9, 1434.0], [88.0, 1438.0], [88.1, 1443.0], [88.2, 1447.0], [88.3, 1449.0], [88.4, 1451.0], [88.5, 1454.0], [88.6, 1457.0], [88.7, 1464.0], [88.8, 1466.0], [88.9, 1472.0], [89.0, 1477.0], [89.1, 1481.0], [89.2, 1486.0], [89.3, 1487.0], [89.4, 1492.0], [89.5, 1495.0], [89.6, 1498.0], [89.7, 1501.0], [89.8, 1506.0], [89.9, 1508.0], [90.0, 1512.0], [90.1, 1518.0], [90.2, 1522.0], [90.3, 1526.0], [90.4, 1532.0], [90.5, 1537.0], [90.6, 1542.0], [90.7, 1550.0], [90.8, 1553.0], [90.9, 1557.0], [91.0, 1560.0], [91.1, 1568.0], [91.2, 1571.0], [91.3, 1574.0], [91.4, 1583.0], [91.5, 1591.0], [91.6, 1596.0], [91.7, 1601.0], [91.8, 1610.0], [91.9, 1619.0], [92.0, 1627.0], [92.1, 1631.0], [92.2, 1637.0], [92.3, 1641.0], [92.4, 1647.0], [92.5, 1652.0], [92.6, 1662.0], [92.7, 1668.0], [92.8, 1678.0], [92.9, 1682.0], [93.0, 1691.0], [93.1, 1700.0], [93.2, 1705.0], [93.3, 1713.0], [93.4, 1722.0], [93.5, 1730.0], [93.6, 1738.0], [93.7, 1743.0], [93.8, 1752.0], [93.9, 1761.0], [94.0, 1774.0], [94.1, 1781.0], [94.2, 1796.0], [94.3, 1812.0], [94.4, 1824.0], [94.5, 1829.0], [94.6, 1844.0], [94.7, 1850.0], [94.8, 1860.0], [94.9, 1869.0], [95.0, 1873.0], [95.1, 1888.0], [95.2, 1898.0], [95.3, 1941.0], [95.4, 1950.0], [95.5, 1958.0], [95.6, 1966.0], [95.7, 1982.0], [95.8, 2002.0], [95.9, 2010.0], [96.0, 2017.0], [96.1, 2032.0], [96.2, 2050.0], [96.3, 2066.0], [96.4, 2079.0], [96.5, 2093.0], [96.6, 2104.0], [96.7, 2117.0], [96.8, 2135.0], [96.9, 2147.0], [97.0, 2158.0], [97.1, 2171.0], [97.2, 2180.0], [97.3, 2186.0], [97.4, 2204.0], [97.5, 2221.0], [97.6, 2240.0], [97.7, 2255.0], [97.8, 2275.0], [97.9, 2301.0], [98.0, 2347.0], [98.1, 2378.0], [98.2, 2423.0], [98.3, 2441.0], [98.4, 2513.0], [98.5, 2553.0], [98.6, 2575.0], [98.7, 2658.0], [98.8, 2672.0], [98.9, 2821.0], [99.0, 3011.0], [99.1, 3169.0], [99.2, 3207.0], [99.3, 3319.0], [99.4, 3412.0], [99.5, 3563.0], [99.6, 3886.0], [99.7, 4095.0], [99.8, 4677.0], [99.9, 4965.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 593.0, "series": [{"data": [[600.0, 396.0], [700.0, 329.0], [800.0, 305.0], [900.0, 294.0], [1000.0, 331.0], [1100.0, 225.0], [1200.0, 218.0], [1300.0, 219.0], [1400.0, 163.0], [1500.0, 105.0], [1600.0, 73.0], [1700.0, 59.0], [1800.0, 51.0], [1900.0, 31.0], [2000.0, 40.0], [2100.0, 42.0], [2300.0, 13.0], [2200.0, 27.0], [2400.0, 12.0], [2500.0, 12.0], [2600.0, 11.0], [2800.0, 4.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 4.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 2.0], [4100.0, 2.0], [4300.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4800.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [4900.0, 3.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [100.0, 75.0], [200.0, 518.0], [300.0, 427.0], [400.0, 593.0], [500.0, 560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 535.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3039.0, "series": [{"data": [[0.0, 1616.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3039.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 535.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.768041237113403, "minX": 1.60401798E12, "maxY": 10.0, "series": [{"data": [[1.60401816E12, 10.0], [1.60401834E12, 10.0], [1.60401804E12, 10.0], [1.60401822E12, 10.0], [1.6040184E12, 10.0], [1.6040181E12, 10.0], [1.60401828E12, 10.0], [1.60401846E12, 9.768041237113403], [1.60401798E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401846E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.0, "maxY": 2553.0, "series": [{"data": [[8.0, 650.0], [4.0, 746.0], [2.0, 2553.0], [1.0, 2527.0], [9.0, 321.0], [10.0, 853.5937077784224], [5.0, 1272.0], [6.0, 633.0], [3.0, 1135.0], [7.0, 838.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 854.1703275529878]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 153.01666666666668, "minX": 1.60401798E12, "maxY": 3707418.8333333335, "series": [{"data": [[1.60401816E12, 3634955.1333333333], [1.60401834E12, 3707418.8333333335], [1.60401804E12, 3195987.1333333333], [1.60401822E12, 3326258.25], [1.6040184E12, 3258702.5], [1.6040181E12, 3264948.15], [1.60401828E12, 2552432.933333333], [1.60401846E12, 906740.2], [1.60401798E12, 125142.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401816E12, 5505.366666666667], [1.60401834E12, 5431.816666666667], [1.60401804E12, 4725.933333333333], [1.60401822E12, 4620.983333333334], [1.6040184E12, 5870.8], [1.6040181E12, 5555.333333333333], [1.60401828E12, 5257.883333333333], [1.60401846E12, 1456.2], [1.60401798E12, 153.01666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401846E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 776.6757105943153, "minX": 1.60401798E12, "maxY": 1805.6000000000001, "series": [{"data": [[1.60401816E12, 822.6496551724136], [1.60401834E12, 823.4071526822569], [1.60401804E12, 909.1758409785926], [1.60401822E12, 971.6914378029074], [1.6040184E12, 776.6757105943153], [1.6040181E12, 804.6795727636849], [1.60401828E12, 822.0123626373625], [1.60401846E12, 1049.6855670103091], [1.60401798E12, 1805.6000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401846E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 775.0568475452201, "minX": 1.60401798E12, "maxY": 1802.15, "series": [{"data": [[1.60401816E12, 820.3972413793103], [1.60401834E12, 821.5502063273735], [1.60401804E12, 907.1085626911309], [1.60401822E12, 969.5848142164787], [1.6040184E12, 775.0568475452201], [1.6040181E12, 802.7036048064082], [1.60401828E12, 820.7651098901109], [1.60401846E12, 1048.0309278350521], [1.60401798E12, 1802.15]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401846E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010309278350515464, "minX": 1.60401798E12, "maxY": 4.25, "series": [{"data": [[1.60401816E12, 0.011034482758620692], [1.60401834E12, 0.0110041265474553], [1.60401804E12, 0.015290519877675837], [1.60401822E12, 0.019386106623586426], [1.6040184E12, 0.01808785529715764], [1.6040181E12, 0.02002670226969292], [1.60401828E12, 0.013736263736263743], [1.60401846E12, 0.010309278350515464], [1.60401798E12, 4.25]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401846E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60401798E12, "maxY": 5519.0, "series": [{"data": [[1.60401816E12, 3879.0], [1.60401834E12, 2496.0], [1.60401804E12, 5453.0], [1.60401822E12, 5519.0], [1.6040184E12, 2972.0], [1.6040181E12, 3954.0], [1.60401828E12, 5277.0], [1.60401846E12, 3514.0], [1.60401798E12, 3605.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401816E12, 195.53399982690811], [1.60401834E12, 190.0], [1.60401804E12, 205.0], [1.60401822E12, 196.5799998521805], [1.6040184E12, 187.0], [1.6040181E12, 200.0], [1.60401828E12, 193.56099982619287], [1.60401846E12, 254.35999665260314], [1.60401798E12, 253.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401816E12, 196.37480013847352], [1.60401834E12, 190.62160020828247], [1.60401804E12, 206.453500187397], [1.60401822E12, 197.0], [1.6040184E12, 187.67250007390976], [1.6040181E12, 200.42500007152557], [1.60401828E12, 194.21710006952287], [1.60401846E12, 266.99600133895876], [1.60401798E12, 253.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401816E12, 195.89699991345407], [1.60401834E12, 190.0], [1.60401804E12, 205.66749976575375], [1.60401822E12, 196.88999992609024], [1.6040184E12, 187.3624999076128], [1.6040181E12, 200.12499991059303], [1.60401828E12, 193.92549991309642], [1.60401846E12, 261.3799983263016], [1.60401798E12, 253.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401816E12, 187.0], [1.60401834E12, 185.0], [1.60401804E12, 190.0], [1.60401822E12, 185.0], [1.6040184E12, 183.0], [1.6040181E12, 188.0], [1.60401828E12, 182.0], [1.60401846E12, 200.0], [1.60401798E12, 253.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401816E12, 685.0], [1.60401834E12, 671.0], [1.60401804E12, 756.5], [1.60401822E12, 826.0], [1.6040184E12, 628.0], [1.6040181E12, 605.0], [1.60401828E12, 706.5], [1.60401846E12, 908.5], [1.60401798E12, 1778.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401846E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 2540.0, "series": [{"data": [[2.0, 2540.0], [4.0, 1331.0], [5.0, 1088.0], [6.0, 1130.0], [7.0, 1021.5], [8.0, 1076.0], [9.0, 998.5], [10.0, 900.0], [11.0, 883.5], [12.0, 759.0], [13.0, 752.5], [14.0, 612.5], [15.0, 636.0], [16.0, 606.0], [1.0, 1135.0], [17.0, 612.5], [18.0, 489.5], [19.0, 410.0], [20.0, 453.5], [21.0, 417.0], [22.0, 409.0], [24.0, 412.5], [25.0, 393.0], [26.0, 424.0], [27.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 393.0, "minX": 1.0, "maxY": 2534.5, "series": [{"data": [[2.0, 2534.5], [4.0, 1323.0], [5.0, 1084.0], [6.0, 1129.0], [7.0, 1021.5], [8.0, 1067.0], [9.0, 996.0], [10.0, 898.5], [11.0, 882.0], [12.0, 757.5], [13.0, 752.0], [14.0, 611.5], [15.0, 636.0], [16.0, 605.0], [1.0, 1135.0], [17.0, 612.0], [18.0, 489.0], [19.0, 409.5], [20.0, 453.0], [21.0, 416.5], [22.0, 409.0], [24.0, 412.0], [25.0, 393.0], [26.0, 423.5], [27.0, 416.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60401798E12, "maxY": 12.9, "series": [{"data": [[1.60401816E12, 12.083333333333334], [1.60401834E12, 12.116666666666667], [1.60401804E12, 10.9], [1.60401822E12, 10.316666666666666], [1.6040184E12, 12.9], [1.6040181E12, 12.483333333333333], [1.60401828E12, 12.133333333333333], [1.60401846E12, 3.066666666666667], [1.60401798E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60401798E12, "maxY": 12.9, "series": [{"data": [[1.60401816E12, 12.083333333333334], [1.60401834E12, 12.116666666666667], [1.60401804E12, 10.9], [1.60401822E12, 10.316666666666666], [1.6040184E12, 12.9], [1.6040181E12, 12.483333333333333], [1.60401828E12, 12.133333333333333], [1.60401846E12, 3.2333333333333334], [1.60401798E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401846E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60401798E12, "maxY": 12.9, "series": [{"data": [[1.60401816E12, 12.083333333333334], [1.60401834E12, 12.116666666666667], [1.60401804E12, 10.9], [1.60401822E12, 10.316666666666666], [1.6040184E12, 12.9], [1.6040181E12, 12.483333333333333], [1.60401828E12, 12.133333333333333], [1.60401846E12, 3.2333333333333334], [1.60401798E12, 0.3333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401846E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60401798E12, "maxY": 12.9, "series": [{"data": [[1.60401816E12, 12.083333333333334], [1.60401834E12, 12.116666666666667], [1.60401804E12, 10.9], [1.60401822E12, 10.316666666666666], [1.6040184E12, 12.9], [1.6040181E12, 12.483333333333333], [1.60401828E12, 12.133333333333333], [1.60401846E12, 3.2333333333333334], [1.60401798E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401846E12, "title": "Total Transactions Per Second"}},
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

