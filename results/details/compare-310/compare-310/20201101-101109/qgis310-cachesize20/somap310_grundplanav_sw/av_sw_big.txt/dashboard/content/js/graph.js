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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 8433.0, "series": [{"data": [[0.0, 184.0], [0.1, 189.0], [0.2, 194.0], [0.3, 195.0], [0.4, 196.0], [0.5, 196.0], [0.6, 198.0], [0.7, 198.0], [0.8, 200.0], [0.9, 201.0], [1.0, 202.0], [1.1, 203.0], [1.2, 204.0], [1.3, 205.0], [1.4, 205.0], [1.5, 206.0], [1.6, 206.0], [1.7, 208.0], [1.8, 209.0], [1.9, 210.0], [2.0, 211.0], [2.1, 212.0], [2.2, 213.0], [2.3, 214.0], [2.4, 215.0], [2.5, 216.0], [2.6, 218.0], [2.7, 219.0], [2.8, 219.0], [2.9, 220.0], [3.0, 221.0], [3.1, 221.0], [3.2, 223.0], [3.3, 224.0], [3.4, 224.0], [3.5, 225.0], [3.6, 225.0], [3.7, 226.0], [3.8, 227.0], [3.9, 228.0], [4.0, 229.0], [4.1, 230.0], [4.2, 230.0], [4.3, 231.0], [4.4, 231.0], [4.5, 232.0], [4.6, 233.0], [4.7, 233.0], [4.8, 234.0], [4.9, 235.0], [5.0, 235.0], [5.1, 236.0], [5.2, 236.0], [5.3, 237.0], [5.4, 238.0], [5.5, 238.0], [5.6, 240.0], [5.7, 240.0], [5.8, 242.0], [5.9, 243.0], [6.0, 243.0], [6.1, 245.0], [6.2, 246.0], [6.3, 247.0], [6.4, 248.0], [6.5, 250.0], [6.6, 251.0], [6.7, 251.0], [6.8, 254.0], [6.9, 255.0], [7.0, 257.0], [7.1, 259.0], [7.2, 260.0], [7.3, 261.0], [7.4, 263.0], [7.5, 265.0], [7.6, 266.0], [7.7, 267.0], [7.8, 269.0], [7.9, 269.0], [8.0, 271.0], [8.1, 273.0], [8.2, 273.0], [8.3, 275.0], [8.4, 275.0], [8.5, 276.0], [8.6, 278.0], [8.7, 278.0], [8.8, 279.0], [8.9, 279.0], [9.0, 280.0], [9.1, 281.0], [9.2, 282.0], [9.3, 282.0], [9.4, 283.0], [9.5, 284.0], [9.6, 285.0], [9.7, 286.0], [9.8, 287.0], [9.9, 287.0], [10.0, 288.0], [10.1, 290.0], [10.2, 291.0], [10.3, 293.0], [10.4, 293.0], [10.5, 295.0], [10.6, 296.0], [10.7, 297.0], [10.8, 298.0], [10.9, 299.0], [11.0, 300.0], [11.1, 301.0], [11.2, 302.0], [11.3, 303.0], [11.4, 303.0], [11.5, 305.0], [11.6, 307.0], [11.7, 308.0], [11.8, 310.0], [11.9, 311.0], [12.0, 312.0], [12.1, 312.0], [12.2, 313.0], [12.3, 314.0], [12.4, 314.0], [12.5, 315.0], [12.6, 316.0], [12.7, 317.0], [12.8, 318.0], [12.9, 318.0], [13.0, 320.0], [13.1, 321.0], [13.2, 322.0], [13.3, 322.0], [13.4, 323.0], [13.5, 323.0], [13.6, 324.0], [13.7, 326.0], [13.8, 326.0], [13.9, 328.0], [14.0, 328.0], [14.1, 329.0], [14.2, 331.0], [14.3, 332.0], [14.4, 332.0], [14.5, 334.0], [14.6, 334.0], [14.7, 336.0], [14.8, 338.0], [14.9, 339.0], [15.0, 340.0], [15.1, 340.0], [15.2, 342.0], [15.3, 345.0], [15.4, 346.0], [15.5, 348.0], [15.6, 350.0], [15.7, 351.0], [15.8, 352.0], [15.9, 353.0], [16.0, 354.0], [16.1, 355.0], [16.2, 357.0], [16.3, 359.0], [16.4, 362.0], [16.5, 364.0], [16.6, 366.0], [16.7, 367.0], [16.8, 368.0], [16.9, 370.0], [17.0, 373.0], [17.1, 373.0], [17.2, 378.0], [17.3, 379.0], [17.4, 380.0], [17.5, 381.0], [17.6, 383.0], [17.7, 385.0], [17.8, 386.0], [17.9, 387.0], [18.0, 389.0], [18.1, 390.0], [18.2, 392.0], [18.3, 393.0], [18.4, 394.0], [18.5, 395.0], [18.6, 396.0], [18.7, 397.0], [18.8, 397.0], [18.9, 398.0], [19.0, 400.0], [19.1, 402.0], [19.2, 403.0], [19.3, 404.0], [19.4, 405.0], [19.5, 407.0], [19.6, 408.0], [19.7, 408.0], [19.8, 410.0], [19.9, 411.0], [20.0, 412.0], [20.1, 413.0], [20.2, 414.0], [20.3, 415.0], [20.4, 416.0], [20.5, 416.0], [20.6, 417.0], [20.7, 418.0], [20.8, 418.0], [20.9, 419.0], [21.0, 420.0], [21.1, 421.0], [21.2, 422.0], [21.3, 423.0], [21.4, 424.0], [21.5, 425.0], [21.6, 427.0], [21.7, 427.0], [21.8, 428.0], [21.9, 429.0], [22.0, 430.0], [22.1, 431.0], [22.2, 433.0], [22.3, 434.0], [22.4, 435.0], [22.5, 436.0], [22.6, 437.0], [22.7, 438.0], [22.8, 438.0], [22.9, 440.0], [23.0, 440.0], [23.1, 441.0], [23.2, 442.0], [23.3, 442.0], [23.4, 443.0], [23.5, 444.0], [23.6, 444.0], [23.7, 445.0], [23.8, 447.0], [23.9, 447.0], [24.0, 448.0], [24.1, 449.0], [24.2, 450.0], [24.3, 452.0], [24.4, 452.0], [24.5, 453.0], [24.6, 454.0], [24.7, 454.0], [24.8, 455.0], [24.9, 455.0], [25.0, 456.0], [25.1, 458.0], [25.2, 459.0], [25.3, 460.0], [25.4, 462.0], [25.5, 463.0], [25.6, 464.0], [25.7, 465.0], [25.8, 466.0], [25.9, 466.0], [26.0, 467.0], [26.1, 467.0], [26.2, 468.0], [26.3, 469.0], [26.4, 470.0], [26.5, 471.0], [26.6, 472.0], [26.7, 473.0], [26.8, 473.0], [26.9, 475.0], [27.0, 476.0], [27.1, 477.0], [27.2, 478.0], [27.3, 479.0], [27.4, 480.0], [27.5, 481.0], [27.6, 481.0], [27.7, 482.0], [27.8, 483.0], [27.9, 485.0], [28.0, 485.0], [28.1, 486.0], [28.2, 488.0], [28.3, 489.0], [28.4, 489.0], [28.5, 490.0], [28.6, 491.0], [28.7, 492.0], [28.8, 493.0], [28.9, 494.0], [29.0, 496.0], [29.1, 498.0], [29.2, 499.0], [29.3, 501.0], [29.4, 503.0], [29.5, 504.0], [29.6, 504.0], [29.7, 506.0], [29.8, 507.0], [29.9, 508.0], [30.0, 509.0], [30.1, 510.0], [30.2, 511.0], [30.3, 512.0], [30.4, 513.0], [30.5, 514.0], [30.6, 515.0], [30.7, 516.0], [30.8, 518.0], [30.9, 518.0], [31.0, 519.0], [31.1, 520.0], [31.2, 521.0], [31.3, 522.0], [31.4, 523.0], [31.5, 524.0], [31.6, 525.0], [31.7, 526.0], [31.8, 526.0], [31.9, 528.0], [32.0, 529.0], [32.1, 530.0], [32.2, 531.0], [32.3, 533.0], [32.4, 535.0], [32.5, 536.0], [32.6, 537.0], [32.7, 538.0], [32.8, 538.0], [32.9, 539.0], [33.0, 540.0], [33.1, 540.0], [33.2, 541.0], [33.3, 543.0], [33.4, 544.0], [33.5, 545.0], [33.6, 545.0], [33.7, 547.0], [33.8, 548.0], [33.9, 548.0], [34.0, 549.0], [34.1, 550.0], [34.2, 551.0], [34.3, 551.0], [34.4, 552.0], [34.5, 553.0], [34.6, 554.0], [34.7, 555.0], [34.8, 557.0], [34.9, 558.0], [35.0, 559.0], [35.1, 560.0], [35.2, 561.0], [35.3, 562.0], [35.4, 562.0], [35.5, 564.0], [35.6, 565.0], [35.7, 565.0], [35.8, 566.0], [35.9, 566.0], [36.0, 567.0], [36.1, 568.0], [36.2, 568.0], [36.3, 569.0], [36.4, 570.0], [36.5, 571.0], [36.6, 572.0], [36.7, 573.0], [36.8, 575.0], [36.9, 576.0], [37.0, 577.0], [37.1, 578.0], [37.2, 579.0], [37.3, 580.0], [37.4, 581.0], [37.5, 582.0], [37.6, 582.0], [37.7, 583.0], [37.8, 584.0], [37.9, 585.0], [38.0, 586.0], [38.1, 587.0], [38.2, 588.0], [38.3, 589.0], [38.4, 589.0], [38.5, 591.0], [38.6, 592.0], [38.7, 593.0], [38.8, 594.0], [38.9, 595.0], [39.0, 595.0], [39.1, 596.0], [39.2, 597.0], [39.3, 598.0], [39.4, 598.0], [39.5, 600.0], [39.6, 601.0], [39.7, 602.0], [39.8, 602.0], [39.9, 603.0], [40.0, 604.0], [40.1, 605.0], [40.2, 606.0], [40.3, 607.0], [40.4, 607.0], [40.5, 610.0], [40.6, 610.0], [40.7, 612.0], [40.8, 613.0], [40.9, 614.0], [41.0, 615.0], [41.1, 616.0], [41.2, 617.0], [41.3, 617.0], [41.4, 619.0], [41.5, 620.0], [41.6, 621.0], [41.7, 623.0], [41.8, 624.0], [41.9, 625.0], [42.0, 626.0], [42.1, 627.0], [42.2, 628.0], [42.3, 630.0], [42.4, 630.0], [42.5, 631.0], [42.6, 632.0], [42.7, 632.0], [42.8, 633.0], [42.9, 635.0], [43.0, 636.0], [43.1, 638.0], [43.2, 640.0], [43.3, 640.0], [43.4, 642.0], [43.5, 643.0], [43.6, 645.0], [43.7, 647.0], [43.8, 648.0], [43.9, 649.0], [44.0, 650.0], [44.1, 652.0], [44.2, 653.0], [44.3, 656.0], [44.4, 658.0], [44.5, 659.0], [44.6, 661.0], [44.7, 662.0], [44.8, 662.0], [44.9, 663.0], [45.0, 664.0], [45.1, 665.0], [45.2, 665.0], [45.3, 667.0], [45.4, 667.0], [45.5, 668.0], [45.6, 669.0], [45.7, 670.0], [45.8, 671.0], [45.9, 672.0], [46.0, 673.0], [46.1, 674.0], [46.2, 675.0], [46.3, 676.0], [46.4, 678.0], [46.5, 680.0], [46.6, 682.0], [46.7, 683.0], [46.8, 684.0], [46.9, 686.0], [47.0, 688.0], [47.1, 690.0], [47.2, 692.0], [47.3, 693.0], [47.4, 694.0], [47.5, 697.0], [47.6, 699.0], [47.7, 700.0], [47.8, 702.0], [47.9, 704.0], [48.0, 704.0], [48.1, 706.0], [48.2, 706.0], [48.3, 708.0], [48.4, 709.0], [48.5, 711.0], [48.6, 712.0], [48.7, 713.0], [48.8, 715.0], [48.9, 718.0], [49.0, 720.0], [49.1, 721.0], [49.2, 723.0], [49.3, 724.0], [49.4, 725.0], [49.5, 729.0], [49.6, 731.0], [49.7, 733.0], [49.8, 737.0], [49.9, 738.0], [50.0, 740.0], [50.1, 741.0], [50.2, 743.0], [50.3, 745.0], [50.4, 746.0], [50.5, 747.0], [50.6, 749.0], [50.7, 750.0], [50.8, 752.0], [50.9, 753.0], [51.0, 755.0], [51.1, 757.0], [51.2, 759.0], [51.3, 760.0], [51.4, 761.0], [51.5, 761.0], [51.6, 763.0], [51.7, 765.0], [51.8, 768.0], [51.9, 769.0], [52.0, 772.0], [52.1, 774.0], [52.2, 776.0], [52.3, 778.0], [52.4, 779.0], [52.5, 780.0], [52.6, 783.0], [52.7, 786.0], [52.8, 787.0], [52.9, 788.0], [53.0, 790.0], [53.1, 792.0], [53.2, 795.0], [53.3, 796.0], [53.4, 798.0], [53.5, 800.0], [53.6, 801.0], [53.7, 803.0], [53.8, 805.0], [53.9, 808.0], [54.0, 810.0], [54.1, 812.0], [54.2, 812.0], [54.3, 813.0], [54.4, 816.0], [54.5, 819.0], [54.6, 820.0], [54.7, 822.0], [54.8, 824.0], [54.9, 825.0], [55.0, 827.0], [55.1, 827.0], [55.2, 828.0], [55.3, 830.0], [55.4, 832.0], [55.5, 835.0], [55.6, 837.0], [55.7, 839.0], [55.8, 841.0], [55.9, 845.0], [56.0, 846.0], [56.1, 847.0], [56.2, 849.0], [56.3, 851.0], [56.4, 853.0], [56.5, 855.0], [56.6, 857.0], [56.7, 859.0], [56.8, 860.0], [56.9, 862.0], [57.0, 864.0], [57.1, 864.0], [57.2, 866.0], [57.3, 869.0], [57.4, 871.0], [57.5, 873.0], [57.6, 874.0], [57.7, 878.0], [57.8, 881.0], [57.9, 882.0], [58.0, 884.0], [58.1, 885.0], [58.2, 885.0], [58.3, 886.0], [58.4, 888.0], [58.5, 889.0], [58.6, 890.0], [58.7, 892.0], [58.8, 894.0], [58.9, 895.0], [59.0, 899.0], [59.1, 900.0], [59.2, 903.0], [59.3, 904.0], [59.4, 906.0], [59.5, 908.0], [59.6, 910.0], [59.7, 912.0], [59.8, 913.0], [59.9, 914.0], [60.0, 916.0], [60.1, 918.0], [60.2, 920.0], [60.3, 923.0], [60.4, 925.0], [60.5, 927.0], [60.6, 929.0], [60.7, 931.0], [60.8, 932.0], [60.9, 934.0], [61.0, 936.0], [61.1, 937.0], [61.2, 939.0], [61.3, 941.0], [61.4, 943.0], [61.5, 944.0], [61.6, 946.0], [61.7, 948.0], [61.8, 950.0], [61.9, 951.0], [62.0, 953.0], [62.1, 956.0], [62.2, 959.0], [62.3, 960.0], [62.4, 962.0], [62.5, 963.0], [62.6, 965.0], [62.7, 969.0], [62.8, 970.0], [62.9, 971.0], [63.0, 972.0], [63.1, 974.0], [63.2, 977.0], [63.3, 978.0], [63.4, 979.0], [63.5, 980.0], [63.6, 982.0], [63.7, 984.0], [63.8, 985.0], [63.9, 986.0], [64.0, 988.0], [64.1, 990.0], [64.2, 991.0], [64.3, 994.0], [64.4, 996.0], [64.5, 997.0], [64.6, 997.0], [64.7, 999.0], [64.8, 1001.0], [64.9, 1002.0], [65.0, 1003.0], [65.1, 1004.0], [65.2, 1006.0], [65.3, 1008.0], [65.4, 1010.0], [65.5, 1012.0], [65.6, 1013.0], [65.7, 1014.0], [65.8, 1016.0], [65.9, 1016.0], [66.0, 1020.0], [66.1, 1023.0], [66.2, 1024.0], [66.3, 1025.0], [66.4, 1027.0], [66.5, 1029.0], [66.6, 1031.0], [66.7, 1033.0], [66.8, 1035.0], [66.9, 1036.0], [67.0, 1038.0], [67.1, 1039.0], [67.2, 1041.0], [67.3, 1042.0], [67.4, 1045.0], [67.5, 1046.0], [67.6, 1048.0], [67.7, 1050.0], [67.8, 1052.0], [67.9, 1054.0], [68.0, 1056.0], [68.1, 1059.0], [68.2, 1060.0], [68.3, 1062.0], [68.4, 1062.0], [68.5, 1064.0], [68.6, 1066.0], [68.7, 1067.0], [68.8, 1069.0], [68.9, 1071.0], [69.0, 1073.0], [69.1, 1076.0], [69.2, 1079.0], [69.3, 1079.0], [69.4, 1082.0], [69.5, 1085.0], [69.6, 1086.0], [69.7, 1088.0], [69.8, 1088.0], [69.9, 1089.0], [70.0, 1091.0], [70.1, 1093.0], [70.2, 1095.0], [70.3, 1098.0], [70.4, 1099.0], [70.5, 1101.0], [70.6, 1103.0], [70.7, 1104.0], [70.8, 1106.0], [70.9, 1107.0], [71.0, 1108.0], [71.1, 1109.0], [71.2, 1110.0], [71.3, 1111.0], [71.4, 1113.0], [71.5, 1114.0], [71.6, 1114.0], [71.7, 1117.0], [71.8, 1117.0], [71.9, 1119.0], [72.0, 1120.0], [72.1, 1121.0], [72.2, 1122.0], [72.3, 1124.0], [72.4, 1125.0], [72.5, 1126.0], [72.6, 1128.0], [72.7, 1130.0], [72.8, 1134.0], [72.9, 1136.0], [73.0, 1137.0], [73.1, 1142.0], [73.2, 1143.0], [73.3, 1145.0], [73.4, 1147.0], [73.5, 1148.0], [73.6, 1151.0], [73.7, 1153.0], [73.8, 1155.0], [73.9, 1156.0], [74.0, 1160.0], [74.1, 1161.0], [74.2, 1163.0], [74.3, 1166.0], [74.4, 1167.0], [74.5, 1169.0], [74.6, 1172.0], [74.7, 1174.0], [74.8, 1176.0], [74.9, 1180.0], [75.0, 1181.0], [75.1, 1184.0], [75.2, 1187.0], [75.3, 1190.0], [75.4, 1191.0], [75.5, 1195.0], [75.6, 1198.0], [75.7, 1202.0], [75.8, 1205.0], [75.9, 1207.0], [76.0, 1210.0], [76.1, 1213.0], [76.2, 1214.0], [76.3, 1217.0], [76.4, 1219.0], [76.5, 1221.0], [76.6, 1224.0], [76.7, 1224.0], [76.8, 1227.0], [76.9, 1230.0], [77.0, 1231.0], [77.1, 1234.0], [77.2, 1236.0], [77.3, 1239.0], [77.4, 1240.0], [77.5, 1241.0], [77.6, 1243.0], [77.7, 1247.0], [77.8, 1249.0], [77.9, 1251.0], [78.0, 1253.0], [78.1, 1256.0], [78.2, 1258.0], [78.3, 1260.0], [78.4, 1264.0], [78.5, 1265.0], [78.6, 1267.0], [78.7, 1271.0], [78.8, 1275.0], [78.9, 1276.0], [79.0, 1278.0], [79.1, 1282.0], [79.2, 1284.0], [79.3, 1288.0], [79.4, 1290.0], [79.5, 1296.0], [79.6, 1299.0], [79.7, 1305.0], [79.8, 1309.0], [79.9, 1311.0], [80.0, 1315.0], [80.1, 1317.0], [80.2, 1320.0], [80.3, 1324.0], [80.4, 1326.0], [80.5, 1327.0], [80.6, 1332.0], [80.7, 1334.0], [80.8, 1337.0], [80.9, 1338.0], [81.0, 1340.0], [81.1, 1344.0], [81.2, 1345.0], [81.3, 1347.0], [81.4, 1349.0], [81.5, 1350.0], [81.6, 1354.0], [81.7, 1356.0], [81.8, 1357.0], [81.9, 1360.0], [82.0, 1361.0], [82.1, 1364.0], [82.2, 1366.0], [82.3, 1369.0], [82.4, 1372.0], [82.5, 1372.0], [82.6, 1374.0], [82.7, 1378.0], [82.8, 1379.0], [82.9, 1382.0], [83.0, 1386.0], [83.1, 1389.0], [83.2, 1393.0], [83.3, 1395.0], [83.4, 1397.0], [83.5, 1399.0], [83.6, 1400.0], [83.7, 1402.0], [83.8, 1404.0], [83.9, 1408.0], [84.0, 1410.0], [84.1, 1415.0], [84.2, 1416.0], [84.3, 1417.0], [84.4, 1420.0], [84.5, 1423.0], [84.6, 1427.0], [84.7, 1430.0], [84.8, 1433.0], [84.9, 1435.0], [85.0, 1437.0], [85.1, 1440.0], [85.2, 1443.0], [85.3, 1445.0], [85.4, 1448.0], [85.5, 1450.0], [85.6, 1453.0], [85.7, 1456.0], [85.8, 1458.0], [85.9, 1462.0], [86.0, 1464.0], [86.1, 1466.0], [86.2, 1467.0], [86.3, 1469.0], [86.4, 1471.0], [86.5, 1473.0], [86.6, 1476.0], [86.7, 1481.0], [86.8, 1487.0], [86.9, 1492.0], [87.0, 1494.0], [87.1, 1496.0], [87.2, 1499.0], [87.3, 1502.0], [87.4, 1509.0], [87.5, 1515.0], [87.6, 1518.0], [87.7, 1524.0], [87.8, 1529.0], [87.9, 1532.0], [88.0, 1537.0], [88.1, 1539.0], [88.2, 1542.0], [88.3, 1545.0], [88.4, 1549.0], [88.5, 1552.0], [88.6, 1557.0], [88.7, 1563.0], [88.8, 1567.0], [88.9, 1570.0], [89.0, 1571.0], [89.1, 1574.0], [89.2, 1577.0], [89.3, 1579.0], [89.4, 1582.0], [89.5, 1589.0], [89.6, 1603.0], [89.7, 1606.0], [89.8, 1613.0], [89.9, 1620.0], [90.0, 1625.0], [90.1, 1633.0], [90.2, 1643.0], [90.3, 1648.0], [90.4, 1652.0], [90.5, 1657.0], [90.6, 1663.0], [90.7, 1672.0], [90.8, 1675.0], [90.9, 1685.0], [91.0, 1696.0], [91.1, 1702.0], [91.2, 1707.0], [91.3, 1715.0], [91.4, 1719.0], [91.5, 1724.0], [91.6, 1732.0], [91.7, 1740.0], [91.8, 1748.0], [91.9, 1758.0], [92.0, 1767.0], [92.1, 1772.0], [92.2, 1782.0], [92.3, 1788.0], [92.4, 1794.0], [92.5, 1802.0], [92.6, 1807.0], [92.7, 1818.0], [92.8, 1825.0], [92.9, 1831.0], [93.0, 1834.0], [93.1, 1844.0], [93.2, 1854.0], [93.3, 1866.0], [93.4, 1881.0], [93.5, 1890.0], [93.6, 1901.0], [93.7, 1911.0], [93.8, 1920.0], [93.9, 1929.0], [94.0, 1939.0], [94.1, 1944.0], [94.2, 1951.0], [94.3, 1958.0], [94.4, 1974.0], [94.5, 1982.0], [94.6, 1992.0], [94.7, 2003.0], [94.8, 2030.0], [94.9, 2038.0], [95.0, 2042.0], [95.1, 2049.0], [95.2, 2057.0], [95.3, 2074.0], [95.4, 2082.0], [95.5, 2096.0], [95.6, 2105.0], [95.7, 2110.0], [95.8, 2131.0], [95.9, 2151.0], [96.0, 2157.0], [96.1, 2165.0], [96.2, 2181.0], [96.3, 2187.0], [96.4, 2198.0], [96.5, 2204.0], [96.6, 2218.0], [96.7, 2239.0], [96.8, 2256.0], [96.9, 2271.0], [97.0, 2287.0], [97.1, 2296.0], [97.2, 2316.0], [97.3, 2334.0], [97.4, 2356.0], [97.5, 2379.0], [97.6, 2397.0], [97.7, 2420.0], [97.8, 2444.0], [97.9, 2474.0], [98.0, 2495.0], [98.1, 2537.0], [98.2, 2582.0], [98.3, 2606.0], [98.4, 2639.0], [98.5, 2654.0], [98.6, 2683.0], [98.7, 2743.0], [98.8, 2885.0], [98.9, 2961.0], [99.0, 3024.0], [99.1, 3118.0], [99.2, 3238.0], [99.3, 3287.0], [99.4, 3386.0], [99.5, 3455.0], [99.6, 3589.0], [99.7, 4116.0], [99.8, 4353.0], [99.9, 5013.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 533.0, "series": [{"data": [[8400.0, 1.0], [600.0, 424.0], [700.0, 300.0], [800.0, 290.0], [900.0, 295.0], [1000.0, 296.0], [1100.0, 272.0], [1200.0, 206.0], [1300.0, 203.0], [1400.0, 192.0], [1500.0, 121.0], [1600.0, 77.0], [100.0, 40.0], [1700.0, 74.0], [1800.0, 58.0], [1900.0, 56.0], [2000.0, 45.0], [2100.0, 47.0], [2200.0, 37.0], [2300.0, 25.0], [2400.0, 20.0], [2500.0, 13.0], [2600.0, 18.0], [2700.0, 9.0], [2800.0, 2.0], [2900.0, 7.0], [3000.0, 5.0], [3100.0, 6.0], [3300.0, 7.0], [200.0, 528.0], [3200.0, 7.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 4.0], [4300.0, 3.0], [4400.0, 2.0], [4500.0, 1.0], [300.0, 418.0], [5100.0, 2.0], [5000.0, 2.0], [5900.0, 1.0], [400.0, 530.0], [500.0, 533.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 661.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3011.0, "series": [{"data": [[0.0, 1518.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3011.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 661.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.910358565737049, "minX": 1.60422798E12, "maxY": 10.0, "series": [{"data": [[1.60422816E12, 10.0], [1.60422834E12, 10.0], [1.60422804E12, 10.0], [1.60422822E12, 10.0], [1.6042284E12, 9.910358565737049], [1.6042281E12, 10.0], [1.60422828E12, 10.0], [1.60422798E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 587.0, "minX": 1.0, "maxY": 2418.0, "series": [{"data": [[8.0, 1696.0], [4.0, 587.0], [2.0, 852.0], [1.0, 2418.0], [9.0, 649.0], [10.0, 895.9046516116583], [5.0, 725.0], [6.0, 870.0], [3.0, 594.0], [7.0, 619.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 896.087090558767]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3787.366666666667, "minX": 1.60422798E12, "maxY": 3402521.3, "series": [{"data": [[1.60422816E12, 3161401.85], [1.60422834E12, 3103021.316666667], [1.60422804E12, 2865711.2], [1.60422822E12, 2994863.55], [1.6042284E12, 2235691.55], [1.6042281E12, 3402521.3], [1.60422828E12, 3097145.283333333], [1.60422798E12, 3111818.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422816E12, 5042.516666666666], [1.60422834E12, 5661.833333333333], [1.60422804E12, 4886.566666666667], [1.60422822E12, 4483.666666666667], [1.6042284E12, 3787.366666666667], [1.6042281E12, 5167.7], [1.60422828E12, 5041.783333333334], [1.60422798E12, 4505.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 803.2479892761395, "minX": 1.60422798E12, "maxY": 956.6131621187806, "series": [{"data": [[1.60422816E12, 900.4925149700597], [1.60422834E12, 803.2479892761395], [1.60422804E12, 902.6078431372542], [1.60422822E12, 956.6131621187806], [1.6042284E12, 918.3585657370512], [1.6042281E12, 878.6196769456684], [1.60422828E12, 878.0058394160592], [1.60422798E12, 956.191318327974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 801.7077747989284, "minX": 1.60422798E12, "maxY": 954.9502407704651, "series": [{"data": [[1.60422816E12, 898.374251497005], [1.60422834E12, 801.7077747989284], [1.60422804E12, 900.4962292609355], [1.60422822E12, 954.9502407704651], [1.6042284E12, 916.7430278884467], [1.6042281E12, 876.2599118942734], [1.60422828E12, 876.3299270072994], [1.60422798E12, 954.0289389067526]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007968127490039846, "minX": 1.60422798E12, "maxY": 0.1736334405144694, "series": [{"data": [[1.60422816E12, 0.023952095808383245], [1.60422834E12, 0.014745308310991965], [1.60422804E12, 0.018099547511312226], [1.60422822E12, 0.014446227929374002], [1.6042284E12, 0.007968127490039846], [1.6042281E12, 0.020558002936857552], [1.60422828E12, 0.013138686131386858], [1.60422798E12, 0.1736334405144694]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60422798E12, "maxY": 8433.0, "series": [{"data": [[1.60422816E12, 4373.0], [1.60422834E12, 3109.0], [1.60422804E12, 5047.0], [1.60422822E12, 5918.0], [1.6042284E12, 4116.0], [1.6042281E12, 3912.0], [1.60422828E12, 4183.0], [1.60422798E12, 8433.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422816E12, 202.02099984049798], [1.60422834E12, 199.44599964380265], [1.60422804E12, 204.97599984169005], [1.60422822E12, 197.6159998512268], [1.6042284E12, 198.0], [1.6042281E12, 196.13799983739852], [1.60422828E12, 203.17399983644486], [1.60422798E12, 201.60699985146522]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422816E12, 202.62310006380082], [1.60422834E12, 201.5812002849579], [1.60422804E12, 205.0], [1.60422822E12, 199.24320041656495], [1.6042284E12, 198.0], [1.6042281E12, 196.75180006504058], [1.60422828E12, 203.79140006542207], [1.60422798E12, 202.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422816E12, 202.35549992024897], [1.60422834E12, 200.38599964380265], [1.60422804E12, 205.0], [1.60422822E12, 197.9279999256134], [1.6042284E12, 198.0], [1.6042281E12, 196.47899991869926], [1.60422828E12, 203.51699991822244], [1.60422798E12, 201.91849992573262]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422816E12, 192.0], [1.60422834E12, 186.0], [1.60422804E12, 192.0], [1.60422822E12, 194.0], [1.6042284E12, 184.0], [1.6042281E12, 186.0], [1.60422828E12, 185.0], [1.60422798E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422816E12, 712.0], [1.60422834E12, 636.0], [1.60422804E12, 671.0], [1.60422822E12, 850.0], [1.6042284E12, 770.0], [1.6042281E12, 711.0], [1.60422828E12, 690.0], [1.60422798E12, 813.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042284E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 415.0, "minX": 1.0, "maxY": 2669.0, "series": [{"data": [[2.0, 1736.0], [3.0, 1366.0], [4.0, 1338.0], [5.0, 1314.0], [6.0, 1275.5], [7.0, 1094.0], [8.0, 1030.5], [9.0, 1006.0], [10.0, 892.0], [11.0, 790.5], [12.0, 710.0], [13.0, 812.0], [14.0, 667.5], [15.0, 530.0], [16.0, 541.5], [1.0, 2669.0], [17.0, 564.0], [18.0, 483.5], [19.0, 453.5], [20.0, 461.0], [21.0, 457.5], [22.0, 421.0], [23.0, 427.0], [24.0, 440.5], [25.0, 415.0], [26.0, 425.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 415.0, "minX": 1.0, "maxY": 2659.5, "series": [{"data": [[2.0, 1732.0], [3.0, 1363.5], [4.0, 1336.0], [5.0, 1308.5], [6.0, 1273.5], [7.0, 1092.0], [8.0, 1029.0], [9.0, 1005.0], [10.0, 891.0], [11.0, 789.0], [12.0, 706.5], [13.0, 812.0], [14.0, 665.0], [15.0, 530.0], [16.0, 539.0], [1.0, 2659.5], [17.0, 564.0], [18.0, 483.5], [19.0, 453.0], [20.0, 460.5], [21.0, 457.5], [22.0, 421.0], [23.0, 427.0], [24.0, 440.5], [25.0, 415.0], [26.0, 424.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60422792E12, "maxY": 12.433333333333334, "series": [{"data": [[1.60422816E12, 11.133333333333333], [1.60422834E12, 12.433333333333334], [1.60422804E12, 11.05], [1.60422822E12, 10.383333333333333], [1.6042284E12, 8.2], [1.60422792E12, 0.11666666666666667], [1.6042281E12, 11.35], [1.60422828E12, 11.416666666666666], [1.60422798E12, 10.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.366666666666667, "minX": 1.60422798E12, "maxY": 12.433333333333334, "series": [{"data": [[1.60422816E12, 11.133333333333333], [1.60422834E12, 12.433333333333334], [1.60422804E12, 11.05], [1.60422822E12, 10.383333333333333], [1.6042284E12, 8.366666666666667], [1.6042281E12, 11.35], [1.60422828E12, 11.416666666666666], [1.60422798E12, 10.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.366666666666667, "minX": 1.60422798E12, "maxY": 12.433333333333334, "series": [{"data": [[1.60422816E12, 11.133333333333333], [1.60422834E12, 12.433333333333334], [1.60422804E12, 11.05], [1.60422822E12, 10.383333333333333], [1.6042284E12, 8.366666666666667], [1.6042281E12, 11.35], [1.60422828E12, 11.416666666666666], [1.60422798E12, 10.366666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.366666666666667, "minX": 1.60422798E12, "maxY": 12.433333333333334, "series": [{"data": [[1.60422816E12, 11.133333333333333], [1.60422834E12, 12.433333333333334], [1.60422804E12, 11.05], [1.60422822E12, 10.383333333333333], [1.6042284E12, 8.366666666666667], [1.6042281E12, 11.35], [1.60422828E12, 11.416666666666666], [1.60422798E12, 10.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042284E12, "title": "Total Transactions Per Second"}},
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

