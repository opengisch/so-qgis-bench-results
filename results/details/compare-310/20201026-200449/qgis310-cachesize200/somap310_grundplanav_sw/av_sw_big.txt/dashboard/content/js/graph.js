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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 8827.0, "series": [{"data": [[0.0, 191.0], [0.1, 197.0], [0.2, 199.0], [0.3, 201.0], [0.4, 202.0], [0.5, 203.0], [0.6, 204.0], [0.7, 205.0], [0.8, 206.0], [0.9, 207.0], [1.0, 208.0], [1.1, 209.0], [1.2, 213.0], [1.3, 214.0], [1.4, 215.0], [1.5, 216.0], [1.6, 217.0], [1.7, 218.0], [1.8, 221.0], [1.9, 222.0], [2.0, 222.0], [2.1, 222.0], [2.2, 223.0], [2.3, 224.0], [2.4, 224.0], [2.5, 225.0], [2.6, 226.0], [2.7, 227.0], [2.8, 228.0], [2.9, 229.0], [3.0, 230.0], [3.1, 230.0], [3.2, 231.0], [3.3, 232.0], [3.4, 233.0], [3.5, 233.0], [3.6, 234.0], [3.7, 234.0], [3.8, 235.0], [3.9, 235.0], [4.0, 236.0], [4.1, 237.0], [4.2, 237.0], [4.3, 238.0], [4.4, 238.0], [4.5, 239.0], [4.6, 239.0], [4.7, 240.0], [4.8, 241.0], [4.9, 242.0], [5.0, 243.0], [5.1, 244.0], [5.2, 244.0], [5.3, 245.0], [5.4, 245.0], [5.5, 247.0], [5.6, 248.0], [5.7, 249.0], [5.8, 251.0], [5.9, 251.0], [6.0, 252.0], [6.1, 254.0], [6.2, 255.0], [6.3, 256.0], [6.4, 258.0], [6.5, 259.0], [6.6, 260.0], [6.7, 262.0], [6.8, 264.0], [6.9, 266.0], [7.0, 267.0], [7.1, 268.0], [7.2, 270.0], [7.3, 272.0], [7.4, 274.0], [7.5, 275.0], [7.6, 276.0], [7.7, 278.0], [7.8, 278.0], [7.9, 280.0], [8.0, 281.0], [8.1, 282.0], [8.2, 283.0], [8.3, 284.0], [8.4, 285.0], [8.5, 286.0], [8.6, 287.0], [8.7, 289.0], [8.8, 289.0], [8.9, 290.0], [9.0, 291.0], [9.1, 292.0], [9.2, 292.0], [9.3, 293.0], [9.4, 294.0], [9.5, 295.0], [9.6, 296.0], [9.7, 297.0], [9.8, 298.0], [9.9, 299.0], [10.0, 300.0], [10.1, 300.0], [10.2, 301.0], [10.3, 302.0], [10.4, 303.0], [10.5, 303.0], [10.6, 304.0], [10.7, 306.0], [10.8, 306.0], [10.9, 307.0], [11.0, 308.0], [11.1, 309.0], [11.2, 311.0], [11.3, 311.0], [11.4, 312.0], [11.5, 313.0], [11.6, 315.0], [11.7, 315.0], [11.8, 318.0], [11.9, 318.0], [12.0, 320.0], [12.1, 321.0], [12.2, 322.0], [12.3, 324.0], [12.4, 324.0], [12.5, 325.0], [12.6, 326.0], [12.7, 327.0], [12.8, 328.0], [12.9, 328.0], [13.0, 329.0], [13.1, 332.0], [13.2, 333.0], [13.3, 333.0], [13.4, 334.0], [13.5, 334.0], [13.6, 335.0], [13.7, 336.0], [13.8, 337.0], [13.9, 338.0], [14.0, 340.0], [14.1, 340.0], [14.2, 341.0], [14.3, 343.0], [14.4, 343.0], [14.5, 346.0], [14.6, 346.0], [14.7, 347.0], [14.8, 348.0], [14.9, 349.0], [15.0, 350.0], [15.1, 352.0], [15.2, 353.0], [15.3, 354.0], [15.4, 356.0], [15.5, 357.0], [15.6, 359.0], [15.7, 360.0], [15.8, 364.0], [15.9, 366.0], [16.0, 367.0], [16.1, 371.0], [16.2, 374.0], [16.3, 375.0], [16.4, 377.0], [16.5, 380.0], [16.6, 380.0], [16.7, 383.0], [16.8, 384.0], [16.9, 386.0], [17.0, 387.0], [17.1, 387.0], [17.2, 388.0], [17.3, 390.0], [17.4, 392.0], [17.5, 393.0], [17.6, 395.0], [17.7, 396.0], [17.8, 398.0], [17.9, 399.0], [18.0, 401.0], [18.1, 402.0], [18.2, 402.0], [18.3, 403.0], [18.4, 404.0], [18.5, 406.0], [18.6, 407.0], [18.7, 407.0], [18.8, 409.0], [18.9, 409.0], [19.0, 410.0], [19.1, 411.0], [19.2, 412.0], [19.3, 414.0], [19.4, 415.0], [19.5, 415.0], [19.6, 416.0], [19.7, 417.0], [19.8, 417.0], [19.9, 419.0], [20.0, 420.0], [20.1, 421.0], [20.2, 421.0], [20.3, 422.0], [20.4, 423.0], [20.5, 423.0], [20.6, 426.0], [20.7, 427.0], [20.8, 427.0], [20.9, 428.0], [21.0, 429.0], [21.1, 429.0], [21.2, 431.0], [21.3, 432.0], [21.4, 432.0], [21.5, 433.0], [21.6, 435.0], [21.7, 436.0], [21.8, 437.0], [21.9, 438.0], [22.0, 439.0], [22.1, 440.0], [22.2, 441.0], [22.3, 442.0], [22.4, 443.0], [22.5, 443.0], [22.6, 444.0], [22.7, 445.0], [22.8, 446.0], [22.9, 447.0], [23.0, 448.0], [23.1, 448.0], [23.2, 450.0], [23.3, 450.0], [23.4, 453.0], [23.5, 453.0], [23.6, 453.0], [23.7, 454.0], [23.8, 455.0], [23.9, 456.0], [24.0, 456.0], [24.1, 458.0], [24.2, 459.0], [24.3, 459.0], [24.4, 460.0], [24.5, 461.0], [24.6, 461.0], [24.7, 462.0], [24.8, 463.0], [24.9, 464.0], [25.0, 465.0], [25.1, 466.0], [25.2, 467.0], [25.3, 468.0], [25.4, 469.0], [25.5, 470.0], [25.6, 471.0], [25.7, 472.0], [25.8, 472.0], [25.9, 473.0], [26.0, 473.0], [26.1, 474.0], [26.2, 475.0], [26.3, 475.0], [26.4, 476.0], [26.5, 477.0], [26.6, 478.0], [26.7, 479.0], [26.8, 481.0], [26.9, 482.0], [27.0, 482.0], [27.1, 483.0], [27.2, 484.0], [27.3, 484.0], [27.4, 485.0], [27.5, 486.0], [27.6, 487.0], [27.7, 487.0], [27.8, 488.0], [27.9, 489.0], [28.0, 490.0], [28.1, 491.0], [28.2, 492.0], [28.3, 493.0], [28.4, 494.0], [28.5, 496.0], [28.6, 497.0], [28.7, 498.0], [28.8, 499.0], [28.9, 499.0], [29.0, 500.0], [29.1, 502.0], [29.2, 503.0], [29.3, 504.0], [29.4, 505.0], [29.5, 506.0], [29.6, 507.0], [29.7, 508.0], [29.8, 509.0], [29.9, 510.0], [30.0, 510.0], [30.1, 513.0], [30.2, 514.0], [30.3, 516.0], [30.4, 517.0], [30.5, 518.0], [30.6, 520.0], [30.7, 520.0], [30.8, 522.0], [30.9, 524.0], [31.0, 524.0], [31.1, 525.0], [31.2, 526.0], [31.3, 528.0], [31.4, 529.0], [31.5, 530.0], [31.6, 531.0], [31.7, 532.0], [31.8, 533.0], [31.9, 535.0], [32.0, 535.0], [32.1, 536.0], [32.2, 538.0], [32.3, 538.0], [32.4, 539.0], [32.5, 540.0], [32.6, 540.0], [32.7, 542.0], [32.8, 543.0], [32.9, 544.0], [33.0, 545.0], [33.1, 545.0], [33.2, 546.0], [33.3, 547.0], [33.4, 548.0], [33.5, 550.0], [33.6, 550.0], [33.7, 551.0], [33.8, 552.0], [33.9, 553.0], [34.0, 554.0], [34.1, 555.0], [34.2, 556.0], [34.3, 556.0], [34.4, 557.0], [34.5, 558.0], [34.6, 558.0], [34.7, 559.0], [34.8, 560.0], [34.9, 561.0], [35.0, 562.0], [35.1, 563.0], [35.2, 564.0], [35.3, 565.0], [35.4, 566.0], [35.5, 566.0], [35.6, 567.0], [35.7, 568.0], [35.8, 569.0], [35.9, 569.0], [36.0, 571.0], [36.1, 572.0], [36.2, 572.0], [36.3, 574.0], [36.4, 576.0], [36.5, 576.0], [36.6, 577.0], [36.7, 578.0], [36.8, 579.0], [36.9, 581.0], [37.0, 582.0], [37.1, 583.0], [37.2, 584.0], [37.3, 584.0], [37.4, 586.0], [37.5, 586.0], [37.6, 588.0], [37.7, 589.0], [37.8, 590.0], [37.9, 591.0], [38.0, 592.0], [38.1, 593.0], [38.2, 595.0], [38.3, 595.0], [38.4, 596.0], [38.5, 598.0], [38.6, 598.0], [38.7, 600.0], [38.8, 600.0], [38.9, 601.0], [39.0, 603.0], [39.1, 603.0], [39.2, 604.0], [39.3, 606.0], [39.4, 607.0], [39.5, 608.0], [39.6, 609.0], [39.7, 611.0], [39.8, 611.0], [39.9, 612.0], [40.0, 613.0], [40.1, 613.0], [40.2, 615.0], [40.3, 616.0], [40.4, 616.0], [40.5, 617.0], [40.6, 619.0], [40.7, 620.0], [40.8, 620.0], [40.9, 622.0], [41.0, 624.0], [41.1, 624.0], [41.2, 625.0], [41.3, 626.0], [41.4, 627.0], [41.5, 629.0], [41.6, 630.0], [41.7, 631.0], [41.8, 633.0], [41.9, 634.0], [42.0, 635.0], [42.1, 637.0], [42.2, 638.0], [42.3, 639.0], [42.4, 639.0], [42.5, 641.0], [42.6, 643.0], [42.7, 644.0], [42.8, 644.0], [42.9, 645.0], [43.0, 646.0], [43.1, 647.0], [43.2, 648.0], [43.3, 649.0], [43.4, 650.0], [43.5, 651.0], [43.6, 652.0], [43.7, 654.0], [43.8, 656.0], [43.9, 657.0], [44.0, 658.0], [44.1, 660.0], [44.2, 660.0], [44.3, 663.0], [44.4, 664.0], [44.5, 666.0], [44.6, 668.0], [44.7, 669.0], [44.8, 671.0], [44.9, 674.0], [45.0, 675.0], [45.1, 676.0], [45.2, 677.0], [45.3, 678.0], [45.4, 679.0], [45.5, 680.0], [45.6, 682.0], [45.7, 683.0], [45.8, 684.0], [45.9, 685.0], [46.0, 686.0], [46.1, 687.0], [46.2, 689.0], [46.3, 689.0], [46.4, 690.0], [46.5, 692.0], [46.6, 693.0], [46.7, 694.0], [46.8, 695.0], [46.9, 697.0], [47.0, 698.0], [47.1, 700.0], [47.2, 701.0], [47.3, 703.0], [47.4, 705.0], [47.5, 706.0], [47.6, 707.0], [47.7, 709.0], [47.8, 710.0], [47.9, 711.0], [48.0, 712.0], [48.1, 713.0], [48.2, 714.0], [48.3, 716.0], [48.4, 716.0], [48.5, 718.0], [48.6, 721.0], [48.7, 725.0], [48.8, 728.0], [48.9, 728.0], [49.0, 730.0], [49.1, 731.0], [49.2, 734.0], [49.3, 734.0], [49.4, 736.0], [49.5, 738.0], [49.6, 740.0], [49.7, 741.0], [49.8, 742.0], [49.9, 745.0], [50.0, 746.0], [50.1, 747.0], [50.2, 749.0], [50.3, 751.0], [50.4, 752.0], [50.5, 753.0], [50.6, 754.0], [50.7, 757.0], [50.8, 758.0], [50.9, 760.0], [51.0, 761.0], [51.1, 764.0], [51.2, 767.0], [51.3, 768.0], [51.4, 770.0], [51.5, 772.0], [51.6, 776.0], [51.7, 777.0], [51.8, 779.0], [51.9, 782.0], [52.0, 784.0], [52.1, 784.0], [52.2, 785.0], [52.3, 788.0], [52.4, 790.0], [52.5, 791.0], [52.6, 793.0], [52.7, 796.0], [52.8, 797.0], [52.9, 799.0], [53.0, 800.0], [53.1, 802.0], [53.2, 805.0], [53.3, 807.0], [53.4, 809.0], [53.5, 811.0], [53.6, 812.0], [53.7, 813.0], [53.8, 815.0], [53.9, 816.0], [54.0, 816.0], [54.1, 818.0], [54.2, 820.0], [54.3, 823.0], [54.4, 823.0], [54.5, 825.0], [54.6, 828.0], [54.7, 829.0], [54.8, 831.0], [54.9, 832.0], [55.0, 834.0], [55.1, 835.0], [55.2, 836.0], [55.3, 837.0], [55.4, 840.0], [55.5, 842.0], [55.6, 844.0], [55.7, 847.0], [55.8, 850.0], [55.9, 851.0], [56.0, 853.0], [56.1, 854.0], [56.2, 855.0], [56.3, 858.0], [56.4, 861.0], [56.5, 863.0], [56.6, 864.0], [56.7, 865.0], [56.8, 867.0], [56.9, 869.0], [57.0, 870.0], [57.1, 870.0], [57.2, 873.0], [57.3, 874.0], [57.4, 876.0], [57.5, 877.0], [57.6, 880.0], [57.7, 882.0], [57.8, 883.0], [57.9, 883.0], [58.0, 885.0], [58.1, 887.0], [58.2, 888.0], [58.3, 890.0], [58.4, 892.0], [58.5, 894.0], [58.6, 895.0], [58.7, 896.0], [58.8, 898.0], [58.9, 899.0], [59.0, 900.0], [59.1, 902.0], [59.2, 906.0], [59.3, 908.0], [59.4, 909.0], [59.5, 913.0], [59.6, 915.0], [59.7, 917.0], [59.8, 919.0], [59.9, 920.0], [60.0, 921.0], [60.1, 923.0], [60.2, 924.0], [60.3, 925.0], [60.4, 926.0], [60.5, 927.0], [60.6, 930.0], [60.7, 932.0], [60.8, 933.0], [60.9, 935.0], [61.0, 936.0], [61.1, 940.0], [61.2, 941.0], [61.3, 943.0], [61.4, 945.0], [61.5, 947.0], [61.6, 950.0], [61.7, 951.0], [61.8, 954.0], [61.9, 955.0], [62.0, 957.0], [62.1, 960.0], [62.2, 961.0], [62.3, 963.0], [62.4, 965.0], [62.5, 966.0], [62.6, 967.0], [62.7, 968.0], [62.8, 972.0], [62.9, 974.0], [63.0, 976.0], [63.1, 978.0], [63.2, 980.0], [63.3, 981.0], [63.4, 983.0], [63.5, 984.0], [63.6, 986.0], [63.7, 989.0], [63.8, 990.0], [63.9, 992.0], [64.0, 993.0], [64.1, 995.0], [64.2, 999.0], [64.3, 1001.0], [64.4, 1001.0], [64.5, 1003.0], [64.6, 1005.0], [64.7, 1006.0], [64.8, 1009.0], [64.9, 1010.0], [65.0, 1013.0], [65.1, 1015.0], [65.2, 1017.0], [65.3, 1019.0], [65.4, 1022.0], [65.5, 1025.0], [65.6, 1028.0], [65.7, 1030.0], [65.8, 1031.0], [65.9, 1033.0], [66.0, 1034.0], [66.1, 1035.0], [66.2, 1036.0], [66.3, 1037.0], [66.4, 1040.0], [66.5, 1041.0], [66.6, 1043.0], [66.7, 1044.0], [66.8, 1045.0], [66.9, 1048.0], [67.0, 1049.0], [67.1, 1052.0], [67.2, 1052.0], [67.3, 1056.0], [67.4, 1058.0], [67.5, 1060.0], [67.6, 1062.0], [67.7, 1064.0], [67.8, 1065.0], [67.9, 1070.0], [68.0, 1071.0], [68.1, 1073.0], [68.2, 1075.0], [68.3, 1077.0], [68.4, 1079.0], [68.5, 1081.0], [68.6, 1083.0], [68.7, 1084.0], [68.8, 1085.0], [68.9, 1087.0], [69.0, 1090.0], [69.1, 1091.0], [69.2, 1093.0], [69.3, 1094.0], [69.4, 1096.0], [69.5, 1098.0], [69.6, 1099.0], [69.7, 1101.0], [69.8, 1103.0], [69.9, 1105.0], [70.0, 1107.0], [70.1, 1110.0], [70.2, 1112.0], [70.3, 1113.0], [70.4, 1114.0], [70.5, 1117.0], [70.6, 1118.0], [70.7, 1120.0], [70.8, 1121.0], [70.9, 1123.0], [71.0, 1125.0], [71.1, 1126.0], [71.2, 1127.0], [71.3, 1129.0], [71.4, 1132.0], [71.5, 1132.0], [71.6, 1134.0], [71.7, 1136.0], [71.8, 1137.0], [71.9, 1139.0], [72.0, 1141.0], [72.1, 1144.0], [72.2, 1146.0], [72.3, 1147.0], [72.4, 1149.0], [72.5, 1151.0], [72.6, 1153.0], [72.7, 1156.0], [72.8, 1158.0], [72.9, 1159.0], [73.0, 1162.0], [73.1, 1163.0], [73.2, 1166.0], [73.3, 1167.0], [73.4, 1170.0], [73.5, 1173.0], [73.6, 1175.0], [73.7, 1178.0], [73.8, 1179.0], [73.9, 1183.0], [74.0, 1184.0], [74.1, 1185.0], [74.2, 1186.0], [74.3, 1188.0], [74.4, 1189.0], [74.5, 1192.0], [74.6, 1195.0], [74.7, 1197.0], [74.8, 1200.0], [74.9, 1203.0], [75.0, 1205.0], [75.1, 1207.0], [75.2, 1208.0], [75.3, 1210.0], [75.4, 1213.0], [75.5, 1215.0], [75.6, 1219.0], [75.7, 1222.0], [75.8, 1224.0], [75.9, 1227.0], [76.0, 1228.0], [76.1, 1231.0], [76.2, 1235.0], [76.3, 1237.0], [76.4, 1241.0], [76.5, 1243.0], [76.6, 1245.0], [76.7, 1249.0], [76.8, 1252.0], [76.9, 1254.0], [77.0, 1259.0], [77.1, 1259.0], [77.2, 1263.0], [77.3, 1265.0], [77.4, 1269.0], [77.5, 1271.0], [77.6, 1276.0], [77.7, 1278.0], [77.8, 1281.0], [77.9, 1285.0], [78.0, 1286.0], [78.1, 1290.0], [78.2, 1291.0], [78.3, 1292.0], [78.4, 1294.0], [78.5, 1297.0], [78.6, 1298.0], [78.7, 1300.0], [78.8, 1302.0], [78.9, 1306.0], [79.0, 1309.0], [79.1, 1311.0], [79.2, 1313.0], [79.3, 1315.0], [79.4, 1317.0], [79.5, 1319.0], [79.6, 1321.0], [79.7, 1323.0], [79.8, 1327.0], [79.9, 1328.0], [80.0, 1330.0], [80.1, 1332.0], [80.2, 1336.0], [80.3, 1339.0], [80.4, 1340.0], [80.5, 1342.0], [80.6, 1344.0], [80.7, 1345.0], [80.8, 1350.0], [80.9, 1352.0], [81.0, 1356.0], [81.1, 1358.0], [81.2, 1362.0], [81.3, 1365.0], [81.4, 1366.0], [81.5, 1369.0], [81.6, 1371.0], [81.7, 1373.0], [81.8, 1375.0], [81.9, 1378.0], [82.0, 1381.0], [82.1, 1386.0], [82.2, 1388.0], [82.3, 1391.0], [82.4, 1396.0], [82.5, 1397.0], [82.6, 1400.0], [82.7, 1403.0], [82.8, 1406.0], [82.9, 1407.0], [83.0, 1409.0], [83.1, 1411.0], [83.2, 1414.0], [83.3, 1415.0], [83.4, 1417.0], [83.5, 1419.0], [83.6, 1420.0], [83.7, 1421.0], [83.8, 1424.0], [83.9, 1425.0], [84.0, 1427.0], [84.1, 1430.0], [84.2, 1433.0], [84.3, 1435.0], [84.4, 1438.0], [84.5, 1439.0], [84.6, 1442.0], [84.7, 1445.0], [84.8, 1448.0], [84.9, 1452.0], [85.0, 1453.0], [85.1, 1455.0], [85.2, 1458.0], [85.3, 1462.0], [85.4, 1465.0], [85.5, 1468.0], [85.6, 1470.0], [85.7, 1473.0], [85.8, 1477.0], [85.9, 1478.0], [86.0, 1479.0], [86.1, 1482.0], [86.2, 1485.0], [86.3, 1487.0], [86.4, 1491.0], [86.5, 1495.0], [86.6, 1497.0], [86.7, 1499.0], [86.8, 1500.0], [86.9, 1503.0], [87.0, 1505.0], [87.1, 1508.0], [87.2, 1510.0], [87.3, 1515.0], [87.4, 1518.0], [87.5, 1522.0], [87.6, 1525.0], [87.7, 1531.0], [87.8, 1534.0], [87.9, 1538.0], [88.0, 1543.0], [88.1, 1544.0], [88.2, 1546.0], [88.3, 1548.0], [88.4, 1552.0], [88.5, 1556.0], [88.6, 1559.0], [88.7, 1562.0], [88.8, 1566.0], [88.9, 1571.0], [89.0, 1573.0], [89.1, 1577.0], [89.2, 1579.0], [89.3, 1584.0], [89.4, 1588.0], [89.5, 1591.0], [89.6, 1599.0], [89.7, 1605.0], [89.8, 1608.0], [89.9, 1616.0], [90.0, 1618.0], [90.1, 1624.0], [90.2, 1630.0], [90.3, 1635.0], [90.4, 1645.0], [90.5, 1650.0], [90.6, 1657.0], [90.7, 1661.0], [90.8, 1667.0], [90.9, 1676.0], [91.0, 1680.0], [91.1, 1686.0], [91.2, 1688.0], [91.3, 1692.0], [91.4, 1700.0], [91.5, 1706.0], [91.6, 1713.0], [91.7, 1722.0], [91.8, 1730.0], [91.9, 1734.0], [92.0, 1737.0], [92.1, 1742.0], [92.2, 1750.0], [92.3, 1762.0], [92.4, 1768.0], [92.5, 1777.0], [92.6, 1780.0], [92.7, 1786.0], [92.8, 1790.0], [92.9, 1797.0], [93.0, 1807.0], [93.1, 1814.0], [93.2, 1826.0], [93.3, 1838.0], [93.4, 1847.0], [93.5, 1856.0], [93.6, 1863.0], [93.7, 1873.0], [93.8, 1890.0], [93.9, 1897.0], [94.0, 1906.0], [94.1, 1916.0], [94.2, 1927.0], [94.3, 1946.0], [94.4, 1955.0], [94.5, 1962.0], [94.6, 1970.0], [94.7, 1981.0], [94.8, 1995.0], [94.9, 2018.0], [95.0, 2029.0], [95.1, 2041.0], [95.2, 2054.0], [95.3, 2064.0], [95.4, 2070.0], [95.5, 2080.0], [95.6, 2099.0], [95.7, 2114.0], [95.8, 2138.0], [95.9, 2148.0], [96.0, 2155.0], [96.1, 2161.0], [96.2, 2181.0], [96.3, 2210.0], [96.4, 2215.0], [96.5, 2235.0], [96.6, 2239.0], [96.7, 2247.0], [96.8, 2263.0], [96.9, 2270.0], [97.0, 2294.0], [97.1, 2303.0], [97.2, 2308.0], [97.3, 2324.0], [97.4, 2352.0], [97.5, 2367.0], [97.6, 2397.0], [97.7, 2425.0], [97.8, 2448.0], [97.9, 2472.0], [98.0, 2498.0], [98.1, 2514.0], [98.2, 2565.0], [98.3, 2605.0], [98.4, 2635.0], [98.5, 2699.0], [98.6, 2771.0], [98.7, 2809.0], [98.8, 2843.0], [98.9, 2929.0], [99.0, 2958.0], [99.1, 3024.0], [99.2, 3150.0], [99.3, 3206.0], [99.4, 3342.0], [99.5, 3548.0], [99.6, 3717.0], [99.7, 3800.0], [99.8, 4313.0], [99.9, 5402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 570.0, "series": [{"data": [[600.0, 433.0], [700.0, 307.0], [800.0, 311.0], [900.0, 273.0], [1000.0, 281.0], [1100.0, 268.0], [1200.0, 201.0], [1300.0, 203.0], [1400.0, 216.0], [1500.0, 150.0], [1600.0, 92.0], [1700.0, 80.0], [1800.0, 53.0], [1900.0, 46.0], [2000.0, 40.0], [2100.0, 33.0], [2200.0, 43.0], [2300.0, 28.0], [2400.0, 22.0], [2500.0, 13.0], [2600.0, 12.0], [2700.0, 7.0], [2800.0, 11.0], [2900.0, 11.0], [3000.0, 5.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 4.0], [3700.0, 5.0], [3600.0, 2.0], [3800.0, 2.0], [4000.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5300.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5800.0, 1.0], [6200.0, 1.0], [8800.0, 1.0], [100.0, 11.0], [200.0, 507.0], [300.0, 412.0], [400.0, 570.0], [500.0, 508.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 684.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3000.0, "series": [{"data": [[0.0, 1506.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3000.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 684.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.92374350086655, "minX": 1.60374594E12, "maxY": 10.0, "series": [{"data": [[1.60374636E12, 9.92374350086655], [1.60374606E12, 10.0], [1.603746E12, 10.0], [1.60374618E12, 10.0], [1.60374612E12, 10.0], [1.6037463E12, 10.0], [1.60374624E12, 10.0], [1.60374594E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 350.0, "minX": 1.0, "maxY": 3041.0, "series": [{"data": [[8.0, 624.0], [4.0, 799.0], [2.0, 812.0], [1.0, 3041.0], [10.0, 904.552489386337], [5.0, 677.0], [6.0, 1079.0], [3.0, 742.0], [7.0, 350.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 904.7235067437374]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4354.316666666667, "minX": 1.60374594E12, "maxY": 3384923.433333333, "series": [{"data": [[1.60374636E12, 2449514.0166666666], [1.60374606E12, 3384923.433333333], [1.603746E12, 2830441.2666666666], [1.60374618E12, 3084749.3333333335], [1.60374612E12, 3079380.2], [1.6037463E12, 3196161.533333333], [1.60374624E12, 2880840.566666667], [1.60374594E12, 3066587.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60374636E12, 4354.316666666667], [1.60374606E12, 5167.033333333334], [1.603746E12, 4913.85], [1.60374618E12, 4551.916666666667], [1.60374612E12, 4948.316666666667], [1.6037463E12, 5391.316666666667], [1.60374624E12, 4886.683333333333], [1.60374594E12, 4363.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 845.06338028169, "minX": 1.60374594E12, "maxY": 963.0597014925368, "series": [{"data": [[1.60374636E12, 905.0450606585781], [1.60374606E12, 879.2907488986779], [1.603746E12, 892.3208395802094], [1.60374618E12, 944.955625990491], [1.60374612E12, 916.1312977099245], [1.6037463E12, 845.06338028169], [1.60374624E12, 904.3183183183181], [1.60374594E12, 963.0597014925368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 843.1366197183099, "minX": 1.60374594E12, "maxY": 960.706467661692, "series": [{"data": [[1.60374636E12, 903.5476603119586], [1.60374606E12, 876.8678414096918], [1.603746E12, 890.206896551725], [1.60374618E12, 943.0744849445325], [1.60374612E12, 914.0992366412213], [1.6037463E12, 843.1366197183099], [1.60374624E12, 902.3558558558564], [1.60374594E12, 960.706467661692]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008665511265164655, "minX": 1.60374594E12, "maxY": 0.1475953565505805, "series": [{"data": [[1.60374636E12, 0.008665511265164655], [1.60374606E12, 0.03964757709251099], [1.603746E12, 0.01949025487256371], [1.60374618E12, 0.022187004754358156], [1.60374612E12, 0.00916030534351145], [1.6037463E12, 0.015492957746478872], [1.60374624E12, 0.019519519519519517], [1.60374594E12, 0.1475953565505805]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.60374594E12, "maxY": 8827.0, "series": [{"data": [[1.60374636E12, 3717.0], [1.60374606E12, 2958.0], [1.603746E12, 3807.0], [1.60374618E12, 8827.0], [1.60374612E12, 4448.0], [1.6037463E12, 2971.0], [1.60374624E12, 3755.0], [1.60374594E12, 5655.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60374636E12, 206.6059995865822], [1.60374606E12, 207.0], [1.603746E12, 204.0119998407364], [1.60374618E12, 223.3759996986389], [1.60374612E12, 222.9039998435974], [1.6037463E12, 205.3989998304844], [1.60374624E12, 203.0029998409748], [1.60374594E12, 201.87199971199036]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60374636E12, 208.16660016536713], [1.60374606E12, 207.0], [1.603746E12, 204.61320006370545], [1.60374618E12, 224.2568000602722], [1.60374612E12, 223.0], [1.6037463E12, 206.07780013561248], [1.60374624E12, 203.60330006361008], [1.60374594E12, 202.95920011520386]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60374636E12, 207.47299979329108], [1.60374606E12, 207.0], [1.603746E12, 204.3459999203682], [1.60374618E12, 224.00399992465972], [1.60374612E12, 223.0], [1.6037463E12, 205.7544999152422], [1.60374624E12, 203.3364999204874], [1.60374594E12, 202.47599985599518]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60374636E12, 200.0], [1.60374606E12, 191.0], [1.603746E12, 195.0], [1.60374618E12, 197.0], [1.60374612E12, 204.0], [1.6037463E12, 198.0], [1.60374624E12, 199.0], [1.60374594E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60374636E12, 761.0], [1.60374606E12, 719.0], [1.603746E12, 653.0], [1.60374618E12, 795.0], [1.60374612E12, 742.0], [1.6037463E12, 677.0], [1.60374624E12, 729.5], [1.60374594E12, 836.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 399.0, "minX": 1.0, "maxY": 2850.5, "series": [{"data": [[3.0, 1183.0], [4.0, 1338.5], [5.0, 1208.0], [6.0, 1247.5], [7.0, 1203.0], [8.0, 1040.0], [9.0, 933.0], [10.0, 920.0], [11.0, 861.0], [12.0, 787.0], [13.0, 726.5], [14.0, 684.0], [15.0, 618.5], [1.0, 2850.5], [16.0, 600.0], [17.0, 509.5], [18.0, 493.0], [19.0, 509.0], [20.0, 475.0], [21.0, 399.0], [22.0, 453.5], [23.0, 419.0], [24.0, 441.0], [25.0, 426.5], [26.0, 446.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 399.0, "minX": 1.0, "maxY": 2843.0, "series": [{"data": [[3.0, 1181.5], [4.0, 1329.0], [5.0, 1207.0], [6.0, 1246.5], [7.0, 1202.0], [8.0, 1038.5], [9.0, 932.0], [10.0, 918.5], [11.0, 858.0], [12.0, 785.5], [13.0, 725.0], [14.0, 682.5], [15.0, 617.5], [1.0, 2843.0], [16.0, 599.5], [17.0, 509.5], [18.0, 492.5], [19.0, 509.0], [20.0, 475.0], [21.0, 399.0], [22.0, 453.0], [23.0, 418.0], [24.0, 440.5], [25.0, 426.0], [26.0, 446.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.45, "minX": 1.60374594E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60374636E12, 9.45], [1.60374606E12, 11.35], [1.603746E12, 11.116666666666667], [1.60374618E12, 10.516666666666667], [1.60374612E12, 10.916666666666666], [1.6037463E12, 11.833333333333334], [1.60374624E12, 11.1], [1.60374594E12, 10.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.616666666666667, "minX": 1.60374594E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60374636E12, 9.616666666666667], [1.60374606E12, 11.35], [1.603746E12, 11.116666666666667], [1.60374618E12, 10.516666666666667], [1.60374612E12, 10.916666666666666], [1.6037463E12, 11.833333333333334], [1.60374624E12, 11.1], [1.60374594E12, 10.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60374636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.616666666666667, "minX": 1.60374594E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60374636E12, 9.616666666666667], [1.60374606E12, 11.35], [1.603746E12, 11.116666666666667], [1.60374618E12, 10.516666666666667], [1.60374612E12, 10.916666666666666], [1.6037463E12, 11.833333333333334], [1.60374624E12, 11.1], [1.60374594E12, 10.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.616666666666667, "minX": 1.60374594E12, "maxY": 11.833333333333334, "series": [{"data": [[1.60374636E12, 9.616666666666667], [1.60374606E12, 11.35], [1.603746E12, 11.116666666666667], [1.60374618E12, 10.516666666666667], [1.60374612E12, 10.916666666666666], [1.6037463E12, 11.833333333333334], [1.60374624E12, 11.1], [1.60374594E12, 10.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60374636E12, "title": "Total Transactions Per Second"}},
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

