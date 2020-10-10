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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 5738.0, "series": [{"data": [[0.0, 180.0], [0.1, 188.0], [0.2, 189.0], [0.3, 191.0], [0.4, 192.0], [0.5, 193.0], [0.6, 194.0], [0.7, 194.0], [0.8, 195.0], [0.9, 195.0], [1.0, 196.0], [1.1, 196.0], [1.2, 197.0], [1.3, 198.0], [1.4, 199.0], [1.5, 199.0], [1.6, 199.0], [1.7, 200.0], [1.8, 200.0], [1.9, 201.0], [2.0, 202.0], [2.1, 202.0], [2.2, 202.0], [2.3, 203.0], [2.4, 203.0], [2.5, 204.0], [2.6, 205.0], [2.7, 205.0], [2.8, 206.0], [2.9, 207.0], [3.0, 207.0], [3.1, 208.0], [3.2, 209.0], [3.3, 210.0], [3.4, 211.0], [3.5, 211.0], [3.6, 213.0], [3.7, 214.0], [3.8, 215.0], [3.9, 215.0], [4.0, 216.0], [4.1, 216.0], [4.2, 217.0], [4.3, 217.0], [4.4, 218.0], [4.5, 219.0], [4.6, 219.0], [4.7, 220.0], [4.8, 221.0], [4.9, 222.0], [5.0, 223.0], [5.1, 224.0], [5.2, 225.0], [5.3, 226.0], [5.4, 226.0], [5.5, 227.0], [5.6, 227.0], [5.7, 229.0], [5.8, 230.0], [5.9, 231.0], [6.0, 232.0], [6.1, 233.0], [6.2, 234.0], [6.3, 235.0], [6.4, 236.0], [6.5, 237.0], [6.6, 238.0], [6.7, 239.0], [6.8, 241.0], [6.9, 242.0], [7.0, 245.0], [7.1, 246.0], [7.2, 247.0], [7.3, 249.0], [7.4, 252.0], [7.5, 255.0], [7.6, 255.0], [7.7, 257.0], [7.8, 258.0], [7.9, 260.0], [8.0, 261.0], [8.1, 261.0], [8.2, 262.0], [8.3, 263.0], [8.4, 265.0], [8.5, 267.0], [8.6, 268.0], [8.7, 269.0], [8.8, 270.0], [8.9, 271.0], [9.0, 272.0], [9.1, 274.0], [9.2, 275.0], [9.3, 276.0], [9.4, 277.0], [9.5, 279.0], [9.6, 280.0], [9.7, 280.0], [9.8, 281.0], [9.9, 281.0], [10.0, 283.0], [10.1, 283.0], [10.2, 284.0], [10.3, 285.0], [10.4, 286.0], [10.5, 287.0], [10.6, 287.0], [10.7, 288.0], [10.8, 289.0], [10.9, 290.0], [11.0, 291.0], [11.1, 293.0], [11.2, 295.0], [11.3, 297.0], [11.4, 297.0], [11.5, 299.0], [11.6, 302.0], [11.7, 304.0], [11.8, 306.0], [11.9, 307.0], [12.0, 308.0], [12.1, 310.0], [12.2, 312.0], [12.3, 312.0], [12.4, 313.0], [12.5, 315.0], [12.6, 317.0], [12.7, 318.0], [12.8, 320.0], [12.9, 321.0], [13.0, 321.0], [13.1, 323.0], [13.2, 323.0], [13.3, 324.0], [13.4, 326.0], [13.5, 326.0], [13.6, 327.0], [13.7, 328.0], [13.8, 328.0], [13.9, 329.0], [14.0, 331.0], [14.1, 331.0], [14.2, 334.0], [14.3, 336.0], [14.4, 338.0], [14.5, 340.0], [14.6, 341.0], [14.7, 342.0], [14.8, 344.0], [14.9, 346.0], [15.0, 347.0], [15.1, 349.0], [15.2, 350.0], [15.3, 351.0], [15.4, 352.0], [15.5, 352.0], [15.6, 355.0], [15.7, 357.0], [15.8, 358.0], [15.9, 361.0], [16.0, 363.0], [16.1, 365.0], [16.2, 368.0], [16.3, 369.0], [16.4, 372.0], [16.5, 375.0], [16.6, 377.0], [16.7, 379.0], [16.8, 379.0], [16.9, 383.0], [17.0, 384.0], [17.1, 386.0], [17.2, 387.0], [17.3, 389.0], [17.4, 390.0], [17.5, 392.0], [17.6, 394.0], [17.7, 395.0], [17.8, 396.0], [17.9, 398.0], [18.0, 398.0], [18.1, 399.0], [18.2, 400.0], [18.3, 401.0], [18.4, 403.0], [18.5, 404.0], [18.6, 405.0], [18.7, 406.0], [18.8, 407.0], [18.9, 409.0], [19.0, 410.0], [19.1, 410.0], [19.2, 411.0], [19.3, 413.0], [19.4, 414.0], [19.5, 414.0], [19.6, 415.0], [19.7, 416.0], [19.8, 417.0], [19.9, 418.0], [20.0, 419.0], [20.1, 419.0], [20.2, 420.0], [20.3, 422.0], [20.4, 423.0], [20.5, 424.0], [20.6, 425.0], [20.7, 426.0], [20.8, 427.0], [20.9, 428.0], [21.0, 430.0], [21.1, 430.0], [21.2, 431.0], [21.3, 432.0], [21.4, 432.0], [21.5, 433.0], [21.6, 434.0], [21.7, 435.0], [21.8, 436.0], [21.9, 436.0], [22.0, 437.0], [22.1, 438.0], [22.2, 439.0], [22.3, 440.0], [22.4, 440.0], [22.5, 441.0], [22.6, 442.0], [22.7, 443.0], [22.8, 443.0], [22.9, 444.0], [23.0, 445.0], [23.1, 445.0], [23.2, 446.0], [23.3, 447.0], [23.4, 448.0], [23.5, 448.0], [23.6, 449.0], [23.7, 451.0], [23.8, 453.0], [23.9, 453.0], [24.0, 454.0], [24.1, 454.0], [24.2, 455.0], [24.3, 456.0], [24.4, 457.0], [24.5, 458.0], [24.6, 458.0], [24.7, 459.0], [24.8, 460.0], [24.9, 461.0], [25.0, 462.0], [25.1, 462.0], [25.2, 464.0], [25.3, 465.0], [25.4, 465.0], [25.5, 465.0], [25.6, 466.0], [25.7, 467.0], [25.8, 468.0], [25.9, 468.0], [26.0, 469.0], [26.1, 469.0], [26.2, 470.0], [26.3, 472.0], [26.4, 473.0], [26.5, 474.0], [26.6, 475.0], [26.7, 475.0], [26.8, 476.0], [26.9, 476.0], [27.0, 477.0], [27.1, 478.0], [27.2, 479.0], [27.3, 480.0], [27.4, 481.0], [27.5, 482.0], [27.6, 483.0], [27.7, 484.0], [27.8, 485.0], [27.9, 486.0], [28.0, 486.0], [28.1, 487.0], [28.2, 488.0], [28.3, 489.0], [28.4, 490.0], [28.5, 491.0], [28.6, 492.0], [28.7, 493.0], [28.8, 493.0], [28.9, 494.0], [29.0, 496.0], [29.1, 496.0], [29.2, 497.0], [29.3, 498.0], [29.4, 499.0], [29.5, 500.0], [29.6, 502.0], [29.7, 503.0], [29.8, 503.0], [29.9, 504.0], [30.0, 505.0], [30.1, 505.0], [30.2, 506.0], [30.3, 507.0], [30.4, 509.0], [30.5, 511.0], [30.6, 512.0], [30.7, 513.0], [30.8, 513.0], [30.9, 514.0], [31.0, 516.0], [31.1, 517.0], [31.2, 518.0], [31.3, 518.0], [31.4, 520.0], [31.5, 521.0], [31.6, 522.0], [31.7, 523.0], [31.8, 523.0], [31.9, 524.0], [32.0, 525.0], [32.1, 526.0], [32.2, 527.0], [32.3, 528.0], [32.4, 529.0], [32.5, 532.0], [32.6, 532.0], [32.7, 533.0], [32.8, 534.0], [32.9, 535.0], [33.0, 536.0], [33.1, 537.0], [33.2, 538.0], [33.3, 540.0], [33.4, 542.0], [33.5, 543.0], [33.6, 544.0], [33.7, 544.0], [33.8, 545.0], [33.9, 547.0], [34.0, 548.0], [34.1, 549.0], [34.2, 550.0], [34.3, 551.0], [34.4, 553.0], [34.5, 554.0], [34.6, 554.0], [34.7, 555.0], [34.8, 555.0], [34.9, 556.0], [35.0, 556.0], [35.1, 557.0], [35.2, 558.0], [35.3, 559.0], [35.4, 560.0], [35.5, 561.0], [35.6, 562.0], [35.7, 562.0], [35.8, 563.0], [35.9, 564.0], [36.0, 565.0], [36.1, 566.0], [36.2, 567.0], [36.3, 568.0], [36.4, 569.0], [36.5, 569.0], [36.6, 570.0], [36.7, 572.0], [36.8, 573.0], [36.9, 574.0], [37.0, 575.0], [37.1, 575.0], [37.2, 577.0], [37.3, 578.0], [37.4, 579.0], [37.5, 580.0], [37.6, 580.0], [37.7, 582.0], [37.8, 583.0], [37.9, 584.0], [38.0, 585.0], [38.1, 586.0], [38.2, 586.0], [38.3, 587.0], [38.4, 589.0], [38.5, 589.0], [38.6, 590.0], [38.7, 591.0], [38.8, 591.0], [38.9, 592.0], [39.0, 593.0], [39.1, 594.0], [39.2, 595.0], [39.3, 596.0], [39.4, 597.0], [39.5, 597.0], [39.6, 598.0], [39.7, 599.0], [39.8, 602.0], [39.9, 602.0], [40.0, 603.0], [40.1, 604.0], [40.2, 605.0], [40.3, 605.0], [40.4, 606.0], [40.5, 607.0], [40.6, 608.0], [40.7, 609.0], [40.8, 609.0], [40.9, 611.0], [41.0, 613.0], [41.1, 614.0], [41.2, 615.0], [41.3, 615.0], [41.4, 616.0], [41.5, 617.0], [41.6, 617.0], [41.7, 619.0], [41.8, 620.0], [41.9, 621.0], [42.0, 622.0], [42.1, 624.0], [42.2, 625.0], [42.3, 626.0], [42.4, 627.0], [42.5, 630.0], [42.6, 631.0], [42.7, 632.0], [42.8, 633.0], [42.9, 634.0], [43.0, 635.0], [43.1, 636.0], [43.2, 637.0], [43.3, 639.0], [43.4, 640.0], [43.5, 640.0], [43.6, 642.0], [43.7, 643.0], [43.8, 644.0], [43.9, 646.0], [44.0, 647.0], [44.1, 648.0], [44.2, 649.0], [44.3, 650.0], [44.4, 652.0], [44.5, 653.0], [44.6, 654.0], [44.7, 655.0], [44.8, 657.0], [44.9, 659.0], [45.0, 660.0], [45.1, 662.0], [45.2, 664.0], [45.3, 665.0], [45.4, 666.0], [45.5, 667.0], [45.6, 668.0], [45.7, 670.0], [45.8, 671.0], [45.9, 673.0], [46.0, 674.0], [46.1, 676.0], [46.2, 678.0], [46.3, 679.0], [46.4, 680.0], [46.5, 681.0], [46.6, 682.0], [46.7, 683.0], [46.8, 685.0], [46.9, 685.0], [47.0, 686.0], [47.1, 687.0], [47.2, 689.0], [47.3, 691.0], [47.4, 691.0], [47.5, 693.0], [47.6, 695.0], [47.7, 697.0], [47.8, 698.0], [47.9, 700.0], [48.0, 702.0], [48.1, 703.0], [48.2, 706.0], [48.3, 708.0], [48.4, 709.0], [48.5, 711.0], [48.6, 713.0], [48.7, 715.0], [48.8, 716.0], [48.9, 717.0], [49.0, 719.0], [49.1, 719.0], [49.2, 721.0], [49.3, 722.0], [49.4, 724.0], [49.5, 725.0], [49.6, 727.0], [49.7, 729.0], [49.8, 730.0], [49.9, 731.0], [50.0, 732.0], [50.1, 733.0], [50.2, 734.0], [50.3, 736.0], [50.4, 737.0], [50.5, 739.0], [50.6, 741.0], [50.7, 743.0], [50.8, 746.0], [50.9, 747.0], [51.0, 748.0], [51.1, 749.0], [51.2, 751.0], [51.3, 753.0], [51.4, 754.0], [51.5, 756.0], [51.6, 757.0], [51.7, 759.0], [51.8, 761.0], [51.9, 763.0], [52.0, 763.0], [52.1, 764.0], [52.2, 766.0], [52.3, 767.0], [52.4, 768.0], [52.5, 770.0], [52.6, 772.0], [52.7, 773.0], [52.8, 775.0], [52.9, 775.0], [53.0, 778.0], [53.1, 780.0], [53.2, 781.0], [53.3, 783.0], [53.4, 784.0], [53.5, 787.0], [53.6, 790.0], [53.7, 791.0], [53.8, 792.0], [53.9, 793.0], [54.0, 795.0], [54.1, 798.0], [54.2, 799.0], [54.3, 802.0], [54.4, 804.0], [54.5, 805.0], [54.6, 806.0], [54.7, 808.0], [54.8, 811.0], [54.9, 812.0], [55.0, 814.0], [55.1, 814.0], [55.2, 817.0], [55.3, 819.0], [55.4, 819.0], [55.5, 821.0], [55.6, 824.0], [55.7, 826.0], [55.8, 827.0], [55.9, 830.0], [56.0, 833.0], [56.1, 835.0], [56.2, 835.0], [56.3, 837.0], [56.4, 838.0], [56.5, 838.0], [56.6, 840.0], [56.7, 842.0], [56.8, 843.0], [56.9, 846.0], [57.0, 847.0], [57.1, 848.0], [57.2, 850.0], [57.3, 851.0], [57.4, 852.0], [57.5, 855.0], [57.6, 856.0], [57.7, 858.0], [57.8, 860.0], [57.9, 861.0], [58.0, 863.0], [58.1, 865.0], [58.2, 868.0], [58.3, 870.0], [58.4, 871.0], [58.5, 872.0], [58.6, 874.0], [58.7, 876.0], [58.8, 878.0], [58.9, 879.0], [59.0, 882.0], [59.1, 883.0], [59.2, 884.0], [59.3, 886.0], [59.4, 889.0], [59.5, 892.0], [59.6, 894.0], [59.7, 896.0], [59.8, 899.0], [59.9, 899.0], [60.0, 903.0], [60.1, 905.0], [60.2, 907.0], [60.3, 908.0], [60.4, 911.0], [60.5, 912.0], [60.6, 912.0], [60.7, 914.0], [60.8, 917.0], [60.9, 919.0], [61.0, 920.0], [61.1, 922.0], [61.2, 925.0], [61.3, 928.0], [61.4, 928.0], [61.5, 930.0], [61.6, 932.0], [61.7, 934.0], [61.8, 936.0], [61.9, 937.0], [62.0, 939.0], [62.1, 940.0], [62.2, 941.0], [62.3, 942.0], [62.4, 944.0], [62.5, 946.0], [62.6, 948.0], [62.7, 950.0], [62.8, 951.0], [62.9, 953.0], [63.0, 958.0], [63.1, 959.0], [63.2, 960.0], [63.3, 961.0], [63.4, 963.0], [63.5, 964.0], [63.6, 966.0], [63.7, 968.0], [63.8, 970.0], [63.9, 971.0], [64.0, 972.0], [64.1, 973.0], [64.2, 976.0], [64.3, 977.0], [64.4, 979.0], [64.5, 979.0], [64.6, 981.0], [64.7, 982.0], [64.8, 984.0], [64.9, 987.0], [65.0, 989.0], [65.1, 991.0], [65.2, 992.0], [65.3, 994.0], [65.4, 997.0], [65.5, 998.0], [65.6, 999.0], [65.7, 1002.0], [65.8, 1002.0], [65.9, 1004.0], [66.0, 1006.0], [66.1, 1007.0], [66.2, 1008.0], [66.3, 1011.0], [66.4, 1013.0], [66.5, 1015.0], [66.6, 1017.0], [66.7, 1019.0], [66.8, 1020.0], [66.9, 1023.0], [67.0, 1026.0], [67.1, 1028.0], [67.2, 1030.0], [67.3, 1032.0], [67.4, 1034.0], [67.5, 1035.0], [67.6, 1037.0], [67.7, 1038.0], [67.8, 1039.0], [67.9, 1041.0], [68.0, 1042.0], [68.1, 1044.0], [68.2, 1045.0], [68.3, 1048.0], [68.4, 1051.0], [68.5, 1051.0], [68.6, 1055.0], [68.7, 1056.0], [68.8, 1058.0], [68.9, 1059.0], [69.0, 1060.0], [69.1, 1061.0], [69.2, 1063.0], [69.3, 1065.0], [69.4, 1066.0], [69.5, 1070.0], [69.6, 1071.0], [69.7, 1071.0], [69.8, 1073.0], [69.9, 1076.0], [70.0, 1077.0], [70.1, 1080.0], [70.2, 1083.0], [70.3, 1086.0], [70.4, 1088.0], [70.5, 1089.0], [70.6, 1090.0], [70.7, 1093.0], [70.8, 1093.0], [70.9, 1094.0], [71.0, 1096.0], [71.1, 1098.0], [71.2, 1100.0], [71.3, 1102.0], [71.4, 1104.0], [71.5, 1106.0], [71.6, 1108.0], [71.7, 1109.0], [71.8, 1112.0], [71.9, 1114.0], [72.0, 1114.0], [72.1, 1115.0], [72.2, 1117.0], [72.3, 1119.0], [72.4, 1121.0], [72.5, 1122.0], [72.6, 1124.0], [72.7, 1127.0], [72.8, 1130.0], [72.9, 1131.0], [73.0, 1132.0], [73.1, 1132.0], [73.2, 1134.0], [73.3, 1136.0], [73.4, 1137.0], [73.5, 1139.0], [73.6, 1143.0], [73.7, 1144.0], [73.8, 1145.0], [73.9, 1146.0], [74.0, 1149.0], [74.1, 1153.0], [74.2, 1157.0], [74.3, 1158.0], [74.4, 1162.0], [74.5, 1164.0], [74.6, 1166.0], [74.7, 1169.0], [74.8, 1172.0], [74.9, 1173.0], [75.0, 1174.0], [75.1, 1175.0], [75.2, 1177.0], [75.3, 1180.0], [75.4, 1182.0], [75.5, 1185.0], [75.6, 1187.0], [75.7, 1190.0], [75.8, 1192.0], [75.9, 1193.0], [76.0, 1196.0], [76.1, 1198.0], [76.2, 1200.0], [76.3, 1203.0], [76.4, 1205.0], [76.5, 1209.0], [76.6, 1213.0], [76.7, 1216.0], [76.8, 1219.0], [76.9, 1222.0], [77.0, 1224.0], [77.1, 1228.0], [77.2, 1231.0], [77.3, 1235.0], [77.4, 1238.0], [77.5, 1245.0], [77.6, 1248.0], [77.7, 1250.0], [77.8, 1254.0], [77.9, 1261.0], [78.0, 1264.0], [78.1, 1267.0], [78.2, 1273.0], [78.3, 1274.0], [78.4, 1277.0], [78.5, 1283.0], [78.6, 1285.0], [78.7, 1287.0], [78.8, 1289.0], [78.9, 1290.0], [79.0, 1292.0], [79.1, 1294.0], [79.2, 1295.0], [79.3, 1296.0], [79.4, 1298.0], [79.5, 1300.0], [79.6, 1304.0], [79.7, 1306.0], [79.8, 1308.0], [79.9, 1310.0], [80.0, 1311.0], [80.1, 1312.0], [80.2, 1316.0], [80.3, 1317.0], [80.4, 1319.0], [80.5, 1322.0], [80.6, 1323.0], [80.7, 1326.0], [80.8, 1328.0], [80.9, 1329.0], [81.0, 1331.0], [81.1, 1334.0], [81.2, 1336.0], [81.3, 1339.0], [81.4, 1343.0], [81.5, 1344.0], [81.6, 1346.0], [81.7, 1348.0], [81.8, 1350.0], [81.9, 1352.0], [82.0, 1354.0], [82.1, 1359.0], [82.2, 1361.0], [82.3, 1365.0], [82.4, 1367.0], [82.5, 1368.0], [82.6, 1369.0], [82.7, 1371.0], [82.8, 1373.0], [82.9, 1376.0], [83.0, 1379.0], [83.1, 1382.0], [83.2, 1383.0], [83.3, 1384.0], [83.4, 1386.0], [83.5, 1388.0], [83.6, 1390.0], [83.7, 1393.0], [83.8, 1395.0], [83.9, 1397.0], [84.0, 1399.0], [84.1, 1402.0], [84.2, 1404.0], [84.3, 1406.0], [84.4, 1409.0], [84.5, 1410.0], [84.6, 1413.0], [84.7, 1415.0], [84.8, 1417.0], [84.9, 1420.0], [85.0, 1423.0], [85.1, 1425.0], [85.2, 1427.0], [85.3, 1430.0], [85.4, 1437.0], [85.5, 1438.0], [85.6, 1445.0], [85.7, 1447.0], [85.8, 1451.0], [85.9, 1457.0], [86.0, 1460.0], [86.1, 1462.0], [86.2, 1463.0], [86.3, 1466.0], [86.4, 1470.0], [86.5, 1472.0], [86.6, 1475.0], [86.7, 1476.0], [86.8, 1480.0], [86.9, 1482.0], [87.0, 1485.0], [87.1, 1491.0], [87.2, 1492.0], [87.3, 1495.0], [87.4, 1497.0], [87.5, 1501.0], [87.6, 1503.0], [87.7, 1505.0], [87.8, 1508.0], [87.9, 1511.0], [88.0, 1519.0], [88.1, 1526.0], [88.2, 1530.0], [88.3, 1533.0], [88.4, 1538.0], [88.5, 1543.0], [88.6, 1546.0], [88.7, 1550.0], [88.8, 1553.0], [88.9, 1555.0], [89.0, 1561.0], [89.1, 1565.0], [89.2, 1569.0], [89.3, 1576.0], [89.4, 1580.0], [89.5, 1584.0], [89.6, 1589.0], [89.7, 1592.0], [89.8, 1594.0], [89.9, 1599.0], [90.0, 1602.0], [90.1, 1606.0], [90.2, 1613.0], [90.3, 1618.0], [90.4, 1623.0], [90.5, 1627.0], [90.6, 1632.0], [90.7, 1642.0], [90.8, 1648.0], [90.9, 1653.0], [91.0, 1658.0], [91.1, 1665.0], [91.2, 1670.0], [91.3, 1678.0], [91.4, 1684.0], [91.5, 1688.0], [91.6, 1691.0], [91.7, 1700.0], [91.8, 1706.0], [91.9, 1711.0], [92.0, 1718.0], [92.1, 1725.0], [92.2, 1735.0], [92.3, 1741.0], [92.4, 1747.0], [92.5, 1758.0], [92.6, 1766.0], [92.7, 1772.0], [92.8, 1776.0], [92.9, 1782.0], [93.0, 1792.0], [93.1, 1794.0], [93.2, 1805.0], [93.3, 1807.0], [93.4, 1817.0], [93.5, 1827.0], [93.6, 1834.0], [93.7, 1841.0], [93.8, 1852.0], [93.9, 1863.0], [94.0, 1868.0], [94.1, 1876.0], [94.2, 1891.0], [94.3, 1906.0], [94.4, 1908.0], [94.5, 1919.0], [94.6, 1933.0], [94.7, 1944.0], [94.8, 1958.0], [94.9, 1973.0], [95.0, 1977.0], [95.1, 1983.0], [95.2, 1990.0], [95.3, 1997.0], [95.4, 2013.0], [95.5, 2029.0], [95.6, 2040.0], [95.7, 2054.0], [95.8, 2063.0], [95.9, 2086.0], [96.0, 2093.0], [96.1, 2104.0], [96.2, 2116.0], [96.3, 2129.0], [96.4, 2140.0], [96.5, 2150.0], [96.6, 2162.0], [96.7, 2170.0], [96.8, 2194.0], [96.9, 2211.0], [97.0, 2218.0], [97.1, 2228.0], [97.2, 2234.0], [97.3, 2259.0], [97.4, 2266.0], [97.5, 2279.0], [97.6, 2297.0], [97.7, 2316.0], [97.8, 2347.0], [97.9, 2363.0], [98.0, 2387.0], [98.1, 2416.0], [98.2, 2444.0], [98.3, 2473.0], [98.4, 2492.0], [98.5, 2538.0], [98.6, 2584.0], [98.7, 2607.0], [98.8, 2668.0], [98.9, 2708.0], [99.0, 2771.0], [99.1, 2865.0], [99.2, 2975.0], [99.3, 3124.0], [99.4, 3405.0], [99.5, 3585.0], [99.6, 3752.0], [99.7, 4044.0], [99.8, 4733.0], [99.9, 5423.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 586.0, "series": [{"data": [[600.0, 422.0], [700.0, 330.0], [800.0, 296.0], [900.0, 297.0], [1000.0, 288.0], [1100.0, 259.0], [1200.0, 171.0], [1300.0, 236.0], [1400.0, 181.0], [1500.0, 126.0], [1600.0, 92.0], [1700.0, 76.0], [1800.0, 58.0], [1900.0, 55.0], [2000.0, 36.0], [2100.0, 41.0], [2200.0, 41.0], [2300.0, 24.0], [2400.0, 17.0], [2500.0, 15.0], [2600.0, 9.0], [2700.0, 9.0], [2800.0, 6.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 3.0], [3200.0, 1.0], [3400.0, 4.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 3.0], [4100.0, 1.0], [4600.0, 2.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5400.0, 4.0], [5600.0, 1.0], [5700.0, 1.0], [100.0, 88.0], [200.0, 511.0], [300.0, 344.0], [400.0, 586.0], [500.0, 533.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3009.0, "series": [{"data": [[0.0, 1532.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3009.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 649.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60231416E12, "maxY": 10.0, "series": [{"data": [[1.6023144E12, 10.0], [1.60231458E12, 10.0], [1.60231428E12, 10.0], [1.60231446E12, 10.0], [1.60231464E12, 5.5], [1.60231416E12, 10.0], [1.60231434E12, 10.0], [1.60231422E12, 10.0], [1.60231452E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231464E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 285.0, "minX": 1.0, "maxY": 2414.0, "series": [{"data": [[8.0, 1201.0], [4.0, 983.0], [2.0, 1259.0], [1.0, 2414.0], [9.0, 1041.0], [10.0, 884.5860671555373], [5.0, 1106.0], [6.0, 285.0], [3.0, 615.0], [7.0, 626.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 884.8882681564235]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 77.78333333333333, "minX": 1.60231416E12, "maxY": 3824080.183333333, "series": [{"data": [[1.6023144E12, 3057444.7], [1.60231458E12, 3001035.2333333334], [1.60231428E12, 3824080.183333333], [1.60231446E12, 2688302.5], [1.60231464E12, 58479.416666666664], [1.60231416E12, 2026042.0], [1.60231434E12, 3200919.8833333333], [1.60231422E12, 2608590.8833333333], [1.60231452E12, 3507263.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023144E12, 4420.8], [1.60231458E12, 5188.166666666667], [1.60231428E12, 5118.866666666667], [1.60231446E12, 5049.483333333334], [1.60231464E12, 77.78333333333333], [1.60231416E12, 2733.3333333333335], [1.60231434E12, 5274.733333333334], [1.60231422E12, 5282.7], [1.60231452E12, 5438.183333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231464E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 834.0683403068341, "minX": 1.60231416E12, "maxY": 1077.8000000000002, "series": [{"data": [[1.6023144E12, 988.4868852459018], [1.60231458E12, 873.032069970845], [1.60231428E12, 890.5866666666669], [1.60231446E12, 863.7510853835022], [1.60231464E12, 1077.8000000000002], [1.60231416E12, 1011.7973684210524], [1.60231434E12, 853.8595988538683], [1.60231422E12, 834.6657458563543], [1.60231452E12, 834.0683403068341]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231464E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 832.4323570432359, "minX": 1.60231416E12, "maxY": 1075.8, "series": [{"data": [[1.6023144E12, 986.5196721311482], [1.60231458E12, 871.5320699708452], [1.60231428E12, 888.3125925925929], [1.60231446E12, 862.4862518089732], [1.60231464E12, 1075.8], [1.60231416E12, 1009.5999999999991], [1.60231434E12, 852.1332378223493], [1.60231422E12, 833.1353591160217], [1.60231452E12, 832.4323570432359]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231464E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60231416E12, "maxY": 0.22368421052631576, "series": [{"data": [[1.6023144E12, 0.013114754098360657], [1.60231458E12, 0.016034985422740514], [1.60231428E12, 0.01629629629629629], [1.60231446E12, 0.011577424023154847], [1.60231464E12, 0.0], [1.60231416E12, 0.22368421052631576], [1.60231434E12, 0.014326647564469927], [1.60231422E12, 0.01795580110497238], [1.60231452E12, 0.013947001394700143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231464E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.60231416E12, "maxY": 5738.0, "series": [{"data": [[1.6023144E12, 5738.0], [1.60231458E12, 3636.0], [1.60231428E12, 4023.0], [1.60231446E12, 3615.0], [1.60231464E12, 2414.0], [1.60231416E12, 5469.0], [1.60231434E12, 4191.0], [1.60231422E12, 4667.0], [1.60231452E12, 2660.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023144E12, 202.49299898028374], [1.60231458E12, 193.0], [1.60231428E12, 194.08399983882904], [1.60231446E12, 194.22799983501434], [1.60231464E12, 285.0], [1.60231416E12, 197.28699972748757], [1.60231434E12, 195.28199983358382], [1.60231422E12, 198.52499982714653], [1.60231452E12, 195.46199982881546]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023144E12, 206.0489000582695], [1.60231458E12, 193.0], [1.60231428E12, 194.6924000644684], [1.60231446E12, 194.85080006599426], [1.60231464E12, 285.0], [1.60231416E12, 198.31570010900498], [1.60231434E12, 195.91020006656646], [1.60231422E12, 199.1775000691414], [1.60231452E12, 196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023144E12, 204.63149949014186], [1.60231458E12, 193.0], [1.60231428E12, 194.42199991941453], [1.60231446E12, 194.57399991750717], [1.60231464E12, 285.0], [1.60231416E12, 197.8584998637438], [1.60231434E12, 195.63099991679192], [1.60231422E12, 198.88749991357327], [1.60231452E12, 195.82099991440774]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023144E12, 191.0], [1.60231458E12, 189.0], [1.60231428E12, 186.0], [1.60231446E12, 188.0], [1.60231464E12, 285.0], [1.60231416E12, 192.0], [1.60231434E12, 180.0], [1.60231422E12, 191.0], [1.60231452E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023144E12, 854.5], [1.60231458E12, 749.0], [1.60231428E12, 696.0], [1.60231446E12, 721.0], [1.60231464E12, 1073.5], [1.60231416E12, 874.5], [1.60231434E12, 729.0], [1.60231422E12, 633.5], [1.60231452E12, 663.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231464E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 308.0, "minX": 1.0, "maxY": 2577.0, "series": [{"data": [[8.0, 1015.5], [9.0, 998.0], [10.0, 911.0], [11.0, 859.0], [12.0, 824.5], [13.0, 718.0], [14.0, 657.5], [15.0, 614.0], [1.0, 2577.0], [16.0, 609.0], [4.0, 1430.0], [17.0, 485.5], [18.0, 475.5], [19.0, 442.5], [5.0, 1315.0], [20.0, 472.5], [21.0, 449.0], [22.0, 447.0], [23.0, 438.0], [6.0, 1176.0], [24.0, 451.5], [25.0, 425.0], [7.0, 1044.0], [28.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 308.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 308.0, "minX": 1.0, "maxY": 2569.5, "series": [{"data": [[8.0, 1014.5], [9.0, 994.0], [10.0, 907.0], [11.0, 858.5], [12.0, 824.5], [13.0, 716.0], [14.0, 657.5], [15.0, 614.0], [1.0, 2569.5], [16.0, 607.5], [4.0, 1420.5], [17.0, 485.5], [18.0, 475.5], [19.0, 442.5], [5.0, 1314.5], [20.0, 472.5], [21.0, 449.0], [22.0, 447.0], [23.0, 438.0], [6.0, 1170.0], [24.0, 451.5], [25.0, 425.0], [7.0, 1044.0], [28.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 308.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.5, "minX": 1.60231416E12, "maxY": 12.066666666666666, "series": [{"data": [[1.6023144E12, 10.183333333333334], [1.60231458E12, 11.433333333333334], [1.60231428E12, 11.25], [1.60231446E12, 11.5], [1.60231416E12, 6.5], [1.60231434E12, 11.616666666666667], [1.60231422E12, 12.066666666666666], [1.60231452E12, 11.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231458E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231416E12, "maxY": 12.066666666666666, "series": [{"data": [[1.6023144E12, 10.166666666666666], [1.60231458E12, 11.433333333333334], [1.60231428E12, 11.25], [1.60231446E12, 11.516666666666667], [1.60231464E12, 0.16666666666666666], [1.60231416E12, 6.333333333333333], [1.60231434E12, 11.616666666666667], [1.60231422E12, 12.066666666666666], [1.60231452E12, 11.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231434E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231464E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231416E12, "maxY": 12.066666666666666, "series": [{"data": [[1.6023144E12, 10.166666666666666], [1.60231458E12, 11.433333333333334], [1.60231428E12, 11.25], [1.60231446E12, 11.516666666666667], [1.60231464E12, 0.16666666666666666], [1.60231416E12, 6.333333333333333], [1.60231434E12, 11.616666666666667], [1.60231422E12, 12.066666666666666], [1.60231452E12, 11.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231434E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231464E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231416E12, "maxY": 12.066666666666666, "series": [{"data": [[1.6023144E12, 10.166666666666666], [1.60231458E12, 11.433333333333334], [1.60231428E12, 11.25], [1.60231446E12, 11.516666666666667], [1.60231464E12, 0.16666666666666666], [1.60231416E12, 6.333333333333333], [1.60231434E12, 11.616666666666667], [1.60231422E12, 12.066666666666666], [1.60231452E12, 11.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231434E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231464E12, "title": "Total Transactions Per Second"}},
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

