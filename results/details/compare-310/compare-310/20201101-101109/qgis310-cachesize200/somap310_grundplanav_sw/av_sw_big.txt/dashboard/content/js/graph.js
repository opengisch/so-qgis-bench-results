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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 6534.0, "series": [{"data": [[0.0, 185.0], [0.1, 193.0], [0.2, 196.0], [0.3, 198.0], [0.4, 199.0], [0.5, 200.0], [0.6, 201.0], [0.7, 203.0], [0.8, 204.0], [0.9, 204.0], [1.0, 205.0], [1.1, 206.0], [1.2, 207.0], [1.3, 208.0], [1.4, 208.0], [1.5, 209.0], [1.6, 211.0], [1.7, 212.0], [1.8, 213.0], [1.9, 214.0], [2.0, 215.0], [2.1, 217.0], [2.2, 218.0], [2.3, 219.0], [2.4, 220.0], [2.5, 220.0], [2.6, 221.0], [2.7, 223.0], [2.8, 224.0], [2.9, 224.0], [3.0, 225.0], [3.1, 225.0], [3.2, 227.0], [3.3, 227.0], [3.4, 228.0], [3.5, 229.0], [3.6, 229.0], [3.7, 231.0], [3.8, 232.0], [3.9, 233.0], [4.0, 233.0], [4.1, 234.0], [4.2, 235.0], [4.3, 236.0], [4.4, 237.0], [4.5, 237.0], [4.6, 238.0], [4.7, 238.0], [4.8, 239.0], [4.9, 240.0], [5.0, 240.0], [5.1, 241.0], [5.2, 241.0], [5.3, 243.0], [5.4, 244.0], [5.5, 245.0], [5.6, 245.0], [5.7, 246.0], [5.8, 247.0], [5.9, 248.0], [6.0, 249.0], [6.1, 251.0], [6.2, 252.0], [6.3, 252.0], [6.4, 253.0], [6.5, 254.0], [6.6, 255.0], [6.7, 256.0], [6.8, 257.0], [6.9, 257.0], [7.0, 259.0], [7.1, 260.0], [7.2, 263.0], [7.3, 265.0], [7.4, 265.0], [7.5, 268.0], [7.6, 270.0], [7.7, 271.0], [7.8, 273.0], [7.9, 273.0], [8.0, 274.0], [8.1, 274.0], [8.2, 276.0], [8.3, 276.0], [8.4, 277.0], [8.5, 278.0], [8.6, 279.0], [8.7, 281.0], [8.8, 282.0], [8.9, 283.0], [9.0, 283.0], [9.1, 283.0], [9.2, 284.0], [9.3, 284.0], [9.4, 285.0], [9.5, 285.0], [9.6, 286.0], [9.7, 286.0], [9.8, 288.0], [9.9, 288.0], [10.0, 289.0], [10.1, 290.0], [10.2, 290.0], [10.3, 292.0], [10.4, 293.0], [10.5, 294.0], [10.6, 295.0], [10.7, 296.0], [10.8, 297.0], [10.9, 298.0], [11.0, 299.0], [11.1, 300.0], [11.2, 301.0], [11.3, 302.0], [11.4, 303.0], [11.5, 304.0], [11.6, 304.0], [11.7, 305.0], [11.8, 306.0], [11.9, 307.0], [12.0, 308.0], [12.1, 309.0], [12.2, 310.0], [12.3, 311.0], [12.4, 312.0], [12.5, 313.0], [12.6, 314.0], [12.7, 315.0], [12.8, 317.0], [12.9, 318.0], [13.0, 319.0], [13.1, 320.0], [13.2, 321.0], [13.3, 322.0], [13.4, 323.0], [13.5, 324.0], [13.6, 324.0], [13.7, 325.0], [13.8, 327.0], [13.9, 327.0], [14.0, 328.0], [14.1, 329.0], [14.2, 330.0], [14.3, 331.0], [14.4, 332.0], [14.5, 334.0], [14.6, 334.0], [14.7, 336.0], [14.8, 338.0], [14.9, 340.0], [15.0, 341.0], [15.1, 344.0], [15.2, 345.0], [15.3, 346.0], [15.4, 348.0], [15.5, 350.0], [15.6, 350.0], [15.7, 353.0], [15.8, 355.0], [15.9, 357.0], [16.0, 358.0], [16.1, 360.0], [16.2, 362.0], [16.3, 363.0], [16.4, 365.0], [16.5, 367.0], [16.6, 368.0], [16.7, 372.0], [16.8, 373.0], [16.9, 375.0], [17.0, 378.0], [17.1, 381.0], [17.2, 382.0], [17.3, 382.0], [17.4, 384.0], [17.5, 386.0], [17.6, 389.0], [17.7, 391.0], [17.8, 393.0], [17.9, 394.0], [18.0, 395.0], [18.1, 395.0], [18.2, 397.0], [18.3, 398.0], [18.4, 399.0], [18.5, 400.0], [18.6, 401.0], [18.7, 402.0], [18.8, 403.0], [18.9, 404.0], [19.0, 406.0], [19.1, 406.0], [19.2, 407.0], [19.3, 408.0], [19.4, 409.0], [19.5, 409.0], [19.6, 410.0], [19.7, 411.0], [19.8, 411.0], [19.9, 412.0], [20.0, 414.0], [20.1, 414.0], [20.2, 415.0], [20.3, 415.0], [20.4, 416.0], [20.5, 417.0], [20.6, 418.0], [20.7, 419.0], [20.8, 420.0], [20.9, 420.0], [21.0, 420.0], [21.1, 422.0], [21.2, 423.0], [21.3, 424.0], [21.4, 424.0], [21.5, 426.0], [21.6, 427.0], [21.7, 428.0], [21.8, 429.0], [21.9, 430.0], [22.0, 430.0], [22.1, 431.0], [22.2, 433.0], [22.3, 434.0], [22.4, 435.0], [22.5, 435.0], [22.6, 436.0], [22.7, 437.0], [22.8, 438.0], [22.9, 438.0], [23.0, 440.0], [23.1, 441.0], [23.2, 442.0], [23.3, 443.0], [23.4, 444.0], [23.5, 445.0], [23.6, 446.0], [23.7, 447.0], [23.8, 447.0], [23.9, 448.0], [24.0, 450.0], [24.1, 450.0], [24.2, 452.0], [24.3, 452.0], [24.4, 453.0], [24.5, 454.0], [24.6, 455.0], [24.7, 456.0], [24.8, 457.0], [24.9, 458.0], [25.0, 459.0], [25.1, 460.0], [25.2, 461.0], [25.3, 462.0], [25.4, 462.0], [25.5, 462.0], [25.6, 463.0], [25.7, 464.0], [25.8, 465.0], [25.9, 466.0], [26.0, 467.0], [26.1, 468.0], [26.2, 469.0], [26.3, 470.0], [26.4, 472.0], [26.5, 473.0], [26.6, 474.0], [26.7, 475.0], [26.8, 475.0], [26.9, 476.0], [27.0, 476.0], [27.1, 477.0], [27.2, 477.0], [27.3, 478.0], [27.4, 479.0], [27.5, 480.0], [27.6, 481.0], [27.7, 481.0], [27.8, 483.0], [27.9, 484.0], [28.0, 485.0], [28.1, 486.0], [28.2, 488.0], [28.3, 488.0], [28.4, 490.0], [28.5, 490.0], [28.6, 490.0], [28.7, 491.0], [28.8, 492.0], [28.9, 493.0], [29.0, 494.0], [29.1, 494.0], [29.2, 495.0], [29.3, 496.0], [29.4, 497.0], [29.5, 497.0], [29.6, 498.0], [29.7, 499.0], [29.8, 500.0], [29.9, 501.0], [30.0, 502.0], [30.1, 503.0], [30.2, 504.0], [30.3, 505.0], [30.4, 507.0], [30.5, 508.0], [30.6, 509.0], [30.7, 510.0], [30.8, 511.0], [30.9, 513.0], [31.0, 514.0], [31.1, 514.0], [31.2, 516.0], [31.3, 517.0], [31.4, 518.0], [31.5, 519.0], [31.6, 521.0], [31.7, 523.0], [31.8, 524.0], [31.9, 524.0], [32.0, 526.0], [32.1, 527.0], [32.2, 528.0], [32.3, 529.0], [32.4, 530.0], [32.5, 531.0], [32.6, 532.0], [32.7, 533.0], [32.8, 535.0], [32.9, 536.0], [33.0, 537.0], [33.1, 537.0], [33.2, 538.0], [33.3, 539.0], [33.4, 540.0], [33.5, 541.0], [33.6, 542.0], [33.7, 544.0], [33.8, 546.0], [33.9, 548.0], [34.0, 549.0], [34.1, 550.0], [34.2, 551.0], [34.3, 552.0], [34.4, 553.0], [34.5, 553.0], [34.6, 555.0], [34.7, 556.0], [34.8, 557.0], [34.9, 558.0], [35.0, 559.0], [35.1, 560.0], [35.2, 561.0], [35.3, 562.0], [35.4, 563.0], [35.5, 564.0], [35.6, 565.0], [35.7, 566.0], [35.8, 567.0], [35.9, 568.0], [36.0, 569.0], [36.1, 571.0], [36.2, 572.0], [36.3, 573.0], [36.4, 573.0], [36.5, 574.0], [36.6, 575.0], [36.7, 576.0], [36.8, 577.0], [36.9, 579.0], [37.0, 579.0], [37.1, 581.0], [37.2, 582.0], [37.3, 583.0], [37.4, 585.0], [37.5, 585.0], [37.6, 586.0], [37.7, 587.0], [37.8, 588.0], [37.9, 589.0], [38.0, 590.0], [38.1, 591.0], [38.2, 593.0], [38.3, 593.0], [38.4, 595.0], [38.5, 596.0], [38.6, 596.0], [38.7, 597.0], [38.8, 597.0], [38.9, 598.0], [39.0, 599.0], [39.1, 600.0], [39.2, 602.0], [39.3, 603.0], [39.4, 604.0], [39.5, 605.0], [39.6, 606.0], [39.7, 607.0], [39.8, 609.0], [39.9, 610.0], [40.0, 610.0], [40.1, 612.0], [40.2, 613.0], [40.3, 615.0], [40.4, 617.0], [40.5, 618.0], [40.6, 619.0], [40.7, 621.0], [40.8, 621.0], [40.9, 622.0], [41.0, 624.0], [41.1, 625.0], [41.2, 627.0], [41.3, 628.0], [41.4, 629.0], [41.5, 630.0], [41.6, 631.0], [41.7, 633.0], [41.8, 634.0], [41.9, 636.0], [42.0, 637.0], [42.1, 638.0], [42.2, 639.0], [42.3, 641.0], [42.4, 642.0], [42.5, 642.0], [42.6, 643.0], [42.7, 646.0], [42.8, 647.0], [42.9, 648.0], [43.0, 650.0], [43.1, 651.0], [43.2, 652.0], [43.3, 653.0], [43.4, 655.0], [43.5, 656.0], [43.6, 657.0], [43.7, 658.0], [43.8, 660.0], [43.9, 661.0], [44.0, 662.0], [44.1, 665.0], [44.2, 665.0], [44.3, 667.0], [44.4, 667.0], [44.5, 669.0], [44.6, 670.0], [44.7, 672.0], [44.8, 673.0], [44.9, 675.0], [45.0, 676.0], [45.1, 677.0], [45.2, 678.0], [45.3, 679.0], [45.4, 681.0], [45.5, 682.0], [45.6, 684.0], [45.7, 687.0], [45.8, 688.0], [45.9, 690.0], [46.0, 690.0], [46.1, 691.0], [46.2, 692.0], [46.3, 695.0], [46.4, 697.0], [46.5, 698.0], [46.6, 702.0], [46.7, 704.0], [46.8, 705.0], [46.9, 707.0], [47.0, 709.0], [47.1, 711.0], [47.2, 712.0], [47.3, 714.0], [47.4, 716.0], [47.5, 717.0], [47.6, 720.0], [47.7, 722.0], [47.8, 723.0], [47.9, 726.0], [48.0, 727.0], [48.1, 729.0], [48.2, 731.0], [48.3, 732.0], [48.4, 734.0], [48.5, 736.0], [48.6, 738.0], [48.7, 739.0], [48.8, 740.0], [48.9, 741.0], [49.0, 743.0], [49.1, 746.0], [49.2, 748.0], [49.3, 749.0], [49.4, 753.0], [49.5, 755.0], [49.6, 756.0], [49.7, 757.0], [49.8, 759.0], [49.9, 760.0], [50.0, 761.0], [50.1, 764.0], [50.2, 764.0], [50.3, 766.0], [50.4, 767.0], [50.5, 770.0], [50.6, 771.0], [50.7, 773.0], [50.8, 773.0], [50.9, 777.0], [51.0, 778.0], [51.1, 781.0], [51.2, 782.0], [51.3, 784.0], [51.4, 786.0], [51.5, 787.0], [51.6, 788.0], [51.7, 790.0], [51.8, 793.0], [51.9, 795.0], [52.0, 797.0], [52.1, 798.0], [52.2, 800.0], [52.3, 802.0], [52.4, 803.0], [52.5, 805.0], [52.6, 806.0], [52.7, 809.0], [52.8, 812.0], [52.9, 813.0], [53.0, 815.0], [53.1, 816.0], [53.2, 818.0], [53.3, 818.0], [53.4, 819.0], [53.5, 820.0], [53.6, 822.0], [53.7, 824.0], [53.8, 826.0], [53.9, 828.0], [54.0, 829.0], [54.1, 830.0], [54.2, 832.0], [54.3, 834.0], [54.4, 836.0], [54.5, 837.0], [54.6, 839.0], [54.7, 842.0], [54.8, 843.0], [54.9, 844.0], [55.0, 846.0], [55.1, 848.0], [55.2, 850.0], [55.3, 853.0], [55.4, 856.0], [55.5, 858.0], [55.6, 859.0], [55.7, 862.0], [55.8, 862.0], [55.9, 864.0], [56.0, 866.0], [56.1, 868.0], [56.2, 870.0], [56.3, 871.0], [56.4, 873.0], [56.5, 874.0], [56.6, 875.0], [56.7, 879.0], [56.8, 882.0], [56.9, 884.0], [57.0, 886.0], [57.1, 887.0], [57.2, 888.0], [57.3, 890.0], [57.4, 891.0], [57.5, 892.0], [57.6, 893.0], [57.7, 895.0], [57.8, 896.0], [57.9, 897.0], [58.0, 898.0], [58.1, 899.0], [58.2, 900.0], [58.3, 901.0], [58.4, 903.0], [58.5, 904.0], [58.6, 906.0], [58.7, 908.0], [58.8, 910.0], [58.9, 911.0], [59.0, 913.0], [59.1, 915.0], [59.2, 917.0], [59.3, 919.0], [59.4, 921.0], [59.5, 924.0], [59.6, 927.0], [59.7, 929.0], [59.8, 930.0], [59.9, 931.0], [60.0, 931.0], [60.1, 934.0], [60.2, 935.0], [60.3, 938.0], [60.4, 941.0], [60.5, 943.0], [60.6, 947.0], [60.7, 950.0], [60.8, 953.0], [60.9, 954.0], [61.0, 956.0], [61.1, 959.0], [61.2, 960.0], [61.3, 962.0], [61.4, 963.0], [61.5, 965.0], [61.6, 967.0], [61.7, 968.0], [61.8, 969.0], [61.9, 971.0], [62.0, 973.0], [62.1, 975.0], [62.2, 977.0], [62.3, 979.0], [62.4, 980.0], [62.5, 981.0], [62.6, 983.0], [62.7, 984.0], [62.8, 985.0], [62.9, 987.0], [63.0, 990.0], [63.1, 991.0], [63.2, 993.0], [63.3, 994.0], [63.4, 995.0], [63.5, 996.0], [63.6, 998.0], [63.7, 1000.0], [63.8, 1001.0], [63.9, 1003.0], [64.0, 1005.0], [64.1, 1006.0], [64.2, 1007.0], [64.3, 1008.0], [64.4, 1009.0], [64.5, 1012.0], [64.6, 1014.0], [64.7, 1016.0], [64.8, 1018.0], [64.9, 1021.0], [65.0, 1023.0], [65.1, 1024.0], [65.2, 1025.0], [65.3, 1028.0], [65.4, 1030.0], [65.5, 1032.0], [65.6, 1034.0], [65.7, 1035.0], [65.8, 1038.0], [65.9, 1038.0], [66.0, 1040.0], [66.1, 1043.0], [66.2, 1044.0], [66.3, 1047.0], [66.4, 1048.0], [66.5, 1050.0], [66.6, 1052.0], [66.7, 1053.0], [66.8, 1055.0], [66.9, 1058.0], [67.0, 1060.0], [67.1, 1061.0], [67.2, 1062.0], [67.3, 1064.0], [67.4, 1065.0], [67.5, 1067.0], [67.6, 1069.0], [67.7, 1070.0], [67.8, 1071.0], [67.9, 1073.0], [68.0, 1074.0], [68.1, 1077.0], [68.2, 1079.0], [68.3, 1081.0], [68.4, 1084.0], [68.5, 1085.0], [68.6, 1086.0], [68.7, 1089.0], [68.8, 1091.0], [68.9, 1095.0], [69.0, 1098.0], [69.1, 1099.0], [69.2, 1101.0], [69.3, 1102.0], [69.4, 1104.0], [69.5, 1104.0], [69.6, 1106.0], [69.7, 1108.0], [69.8, 1109.0], [69.9, 1112.0], [70.0, 1114.0], [70.1, 1115.0], [70.2, 1117.0], [70.3, 1120.0], [70.4, 1122.0], [70.5, 1125.0], [70.6, 1128.0], [70.7, 1129.0], [70.8, 1131.0], [70.9, 1132.0], [71.0, 1133.0], [71.1, 1136.0], [71.2, 1137.0], [71.3, 1140.0], [71.4, 1141.0], [71.5, 1143.0], [71.6, 1146.0], [71.7, 1147.0], [71.8, 1149.0], [71.9, 1152.0], [72.0, 1153.0], [72.1, 1154.0], [72.2, 1157.0], [72.3, 1159.0], [72.4, 1160.0], [72.5, 1162.0], [72.6, 1163.0], [72.7, 1166.0], [72.8, 1168.0], [72.9, 1171.0], [73.0, 1174.0], [73.1, 1180.0], [73.2, 1182.0], [73.3, 1183.0], [73.4, 1184.0], [73.5, 1186.0], [73.6, 1189.0], [73.7, 1193.0], [73.8, 1195.0], [73.9, 1196.0], [74.0, 1198.0], [74.1, 1201.0], [74.2, 1205.0], [74.3, 1208.0], [74.4, 1212.0], [74.5, 1214.0], [74.6, 1216.0], [74.7, 1217.0], [74.8, 1220.0], [74.9, 1221.0], [75.0, 1222.0], [75.1, 1227.0], [75.2, 1229.0], [75.3, 1231.0], [75.4, 1233.0], [75.5, 1234.0], [75.6, 1240.0], [75.7, 1242.0], [75.8, 1244.0], [75.9, 1246.0], [76.0, 1249.0], [76.1, 1251.0], [76.2, 1252.0], [76.3, 1254.0], [76.4, 1257.0], [76.5, 1260.0], [76.6, 1263.0], [76.7, 1264.0], [76.8, 1267.0], [76.9, 1271.0], [77.0, 1272.0], [77.1, 1273.0], [77.2, 1274.0], [77.3, 1277.0], [77.4, 1281.0], [77.5, 1285.0], [77.6, 1288.0], [77.7, 1290.0], [77.8, 1295.0], [77.9, 1298.0], [78.0, 1301.0], [78.1, 1302.0], [78.2, 1307.0], [78.3, 1310.0], [78.4, 1312.0], [78.5, 1315.0], [78.6, 1317.0], [78.7, 1319.0], [78.8, 1322.0], [78.9, 1327.0], [79.0, 1331.0], [79.1, 1334.0], [79.2, 1335.0], [79.3, 1338.0], [79.4, 1339.0], [79.5, 1343.0], [79.6, 1345.0], [79.7, 1348.0], [79.8, 1351.0], [79.9, 1353.0], [80.0, 1354.0], [80.1, 1358.0], [80.2, 1361.0], [80.3, 1363.0], [80.4, 1364.0], [80.5, 1366.0], [80.6, 1371.0], [80.7, 1372.0], [80.8, 1375.0], [80.9, 1378.0], [81.0, 1381.0], [81.1, 1384.0], [81.2, 1386.0], [81.3, 1388.0], [81.4, 1390.0], [81.5, 1391.0], [81.6, 1395.0], [81.7, 1398.0], [81.8, 1400.0], [81.9, 1402.0], [82.0, 1404.0], [82.1, 1408.0], [82.2, 1410.0], [82.3, 1410.0], [82.4, 1412.0], [82.5, 1414.0], [82.6, 1417.0], [82.7, 1420.0], [82.8, 1423.0], [82.9, 1425.0], [83.0, 1427.0], [83.1, 1428.0], [83.2, 1433.0], [83.3, 1436.0], [83.4, 1439.0], [83.5, 1440.0], [83.6, 1443.0], [83.7, 1445.0], [83.8, 1449.0], [83.9, 1450.0], [84.0, 1453.0], [84.1, 1457.0], [84.2, 1459.0], [84.3, 1462.0], [84.4, 1463.0], [84.5, 1465.0], [84.6, 1467.0], [84.7, 1470.0], [84.8, 1473.0], [84.9, 1475.0], [85.0, 1478.0], [85.1, 1480.0], [85.2, 1482.0], [85.3, 1485.0], [85.4, 1486.0], [85.5, 1490.0], [85.6, 1493.0], [85.7, 1496.0], [85.8, 1500.0], [85.9, 1501.0], [86.0, 1503.0], [86.1, 1508.0], [86.2, 1509.0], [86.3, 1515.0], [86.4, 1516.0], [86.5, 1519.0], [86.6, 1521.0], [86.7, 1525.0], [86.8, 1529.0], [86.9, 1531.0], [87.0, 1533.0], [87.1, 1537.0], [87.2, 1542.0], [87.3, 1545.0], [87.4, 1550.0], [87.5, 1555.0], [87.6, 1557.0], [87.7, 1560.0], [87.8, 1562.0], [87.9, 1565.0], [88.0, 1568.0], [88.1, 1570.0], [88.2, 1573.0], [88.3, 1577.0], [88.4, 1581.0], [88.5, 1587.0], [88.6, 1590.0], [88.7, 1593.0], [88.8, 1597.0], [88.9, 1600.0], [89.0, 1603.0], [89.1, 1608.0], [89.2, 1612.0], [89.3, 1618.0], [89.4, 1623.0], [89.5, 1629.0], [89.6, 1632.0], [89.7, 1639.0], [89.8, 1644.0], [89.9, 1648.0], [90.0, 1654.0], [90.1, 1658.0], [90.2, 1665.0], [90.3, 1669.0], [90.4, 1680.0], [90.5, 1684.0], [90.6, 1691.0], [90.7, 1698.0], [90.8, 1702.0], [90.9, 1706.0], [91.0, 1710.0], [91.1, 1720.0], [91.2, 1725.0], [91.3, 1729.0], [91.4, 1738.0], [91.5, 1744.0], [91.6, 1752.0], [91.7, 1760.0], [91.8, 1766.0], [91.9, 1770.0], [92.0, 1781.0], [92.1, 1783.0], [92.2, 1800.0], [92.3, 1806.0], [92.4, 1811.0], [92.5, 1821.0], [92.6, 1825.0], [92.7, 1834.0], [92.8, 1843.0], [92.9, 1853.0], [93.0, 1857.0], [93.1, 1868.0], [93.2, 1873.0], [93.3, 1885.0], [93.4, 1897.0], [93.5, 1902.0], [93.6, 1906.0], [93.7, 1911.0], [93.8, 1930.0], [93.9, 1937.0], [94.0, 1939.0], [94.1, 1953.0], [94.2, 1960.0], [94.3, 1973.0], [94.4, 1977.0], [94.5, 1987.0], [94.6, 2004.0], [94.7, 2015.0], [94.8, 2032.0], [94.9, 2040.0], [95.0, 2049.0], [95.1, 2073.0], [95.2, 2103.0], [95.3, 2121.0], [95.4, 2129.0], [95.5, 2135.0], [95.6, 2146.0], [95.7, 2154.0], [95.8, 2177.0], [95.9, 2184.0], [96.0, 2195.0], [96.1, 2202.0], [96.2, 2213.0], [96.3, 2233.0], [96.4, 2247.0], [96.5, 2258.0], [96.6, 2269.0], [96.7, 2285.0], [96.8, 2296.0], [96.9, 2311.0], [97.0, 2317.0], [97.1, 2350.0], [97.2, 2360.0], [97.3, 2379.0], [97.4, 2384.0], [97.5, 2396.0], [97.6, 2428.0], [97.7, 2459.0], [97.8, 2477.0], [97.9, 2507.0], [98.0, 2547.0], [98.1, 2570.0], [98.2, 2594.0], [98.3, 2602.0], [98.4, 2667.0], [98.5, 2677.0], [98.6, 2793.0], [98.7, 2872.0], [98.8, 2897.0], [98.9, 2968.0], [99.0, 3012.0], [99.1, 3117.0], [99.2, 3252.0], [99.3, 3360.0], [99.4, 3406.0], [99.5, 3544.0], [99.6, 3922.0], [99.7, 4250.0], [99.8, 4910.0], [99.9, 5395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 589.0, "series": [{"data": [[600.0, 388.0], [700.0, 294.0], [800.0, 309.0], [900.0, 287.0], [1000.0, 282.0], [1100.0, 255.0], [1200.0, 204.0], [1300.0, 199.0], [1400.0, 206.0], [1500.0, 162.0], [1600.0, 96.0], [1700.0, 76.0], [1800.0, 67.0], [1900.0, 55.0], [2000.0, 32.0], [2100.0, 46.0], [2300.0, 35.0], [2200.0, 41.0], [2400.0, 16.0], [2500.0, 22.0], [2600.0, 15.0], [2800.0, 10.0], [2700.0, 4.0], [2900.0, 8.0], [3000.0, 6.0], [3100.0, 2.0], [3300.0, 7.0], [3200.0, 7.0], [3400.0, 5.0], [3500.0, 2.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4200.0, 3.0], [4100.0, 3.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [100.0, 24.0], [200.0, 552.0], [300.0, 381.0], [400.0, 589.0], [500.0, 481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 732.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2907.0, "series": [{"data": [[0.0, 1551.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2907.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 732.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.772727272727273, "minX": 1.6042287E12, "maxY": 10.0, "series": [{"data": [[1.60422882E12, 10.0], [1.604229E12, 10.0], [1.60422906E12, 10.0], [1.6042287E12, 10.0], [1.60422888E12, 10.0], [1.60422918E12, 9.772727272727273], [1.60422876E12, 10.0], [1.60422894E12, 10.0], [1.60422912E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 332.0, "minX": 1.0, "maxY": 2897.0, "series": [{"data": [[8.0, 939.0], [4.0, 760.0], [2.0, 1309.0], [1.0, 2897.0], [9.0, 873.0], [10.0, 913.8496429260751], [5.0, 996.0], [6.0, 357.0], [3.0, 722.0], [7.0, 332.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 914.034682080924]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1486.8333333333333, "minX": 1.6042287E12, "maxY": 3723625.3333333335, "series": [{"data": [[1.60422882E12, 3723625.3333333335], [1.604229E12, 2317859.533333333], [1.60422906E12, 3521799.6666666665], [1.6042287E12, 1748923.3333333333], [1.60422888E12, 3275193.2333333334], [1.60422918E12, 942216.1166666667], [1.60422876E12, 2438901.4], [1.60422894E12, 3008277.1666666665], [1.60422912E12, 2995820.4166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422882E12, 5086.85], [1.604229E12, 4624.533333333334], [1.60422906E12, 5190.3], [1.6042287E12, 2290.65], [1.60422888E12, 5211.266666666666], [1.60422918E12, 1486.8333333333333], [1.60422876E12, 5122.483333333334], [1.60422894E12, 4295.516666666666], [1.60422912E12, 5268.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 841.9181946403382, "minX": 1.6042287E12, "maxY": 1120.2727272727273, "series": [{"data": [[1.60422882E12, 888.9344262295076], [1.604229E12, 948.9366085578438], [1.60422906E12, 860.7856115107912], [1.6042287E12, 1053.7816455696213], [1.60422888E12, 870.3537117903936], [1.60422918E12, 1120.2727272727273], [1.60422876E12, 841.9181946403382], [1.60422894E12, 1022.9728353140923], [1.60422912E12, 861.8832853025939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 840.3088857545835, "minX": 1.6042287E12, "maxY": 1118.0000000000005, "series": [{"data": [[1.60422882E12, 886.2831594634869], [1.604229E12, 947.4278922345487], [1.60422906E12, 858.723741007194], [1.6042287E12, 1051.2721518987337], [1.60422888E12, 868.1586608442501], [1.60422918E12, 1118.0000000000005], [1.60422876E12, 840.3088857545835], [1.60422894E12, 1020.9252971137524], [1.60422912E12, 860.1512968299708]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01151079136690648, "minX": 1.6042287E12, "maxY": 0.3101265822784811, "series": [{"data": [[1.60422882E12, 0.01937406855439641], [1.604229E12, 0.02060221870047541], [1.60422906E12, 0.01151079136690648], [1.6042287E12, 0.3101265822784811], [1.60422888E12, 0.013100436681222707], [1.60422918E12, 0.015151515151515154], [1.60422876E12, 0.01974612129760228], [1.60422894E12, 0.037351443123938864], [1.60422912E12, 0.028818443804034574]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.6042287E12, "maxY": 6534.0, "series": [{"data": [[1.60422882E12, 4283.0], [1.604229E12, 6534.0], [1.60422906E12, 3011.0], [1.6042287E12, 5785.0], [1.60422888E12, 4784.0], [1.60422918E12, 4185.0], [1.60422876E12, 5641.0], [1.60422894E12, 5525.0], [1.60422912E12, 3388.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422882E12, 207.09599967956544], [1.604229E12, 209.06399954795836], [1.60422906E12, 198.26399983406066], [1.6042287E12, 201.8529999244213], [1.60422888E12, 205.38399967193604], [1.60422918E12, 226.86499928832055], [1.60422876E12, 201.38999983072281], [1.60422894E12, 214.30999985933303], [1.60422912E12, 204.50999966859817]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422882E12, 208.30560012817384], [1.604229E12, 210.51360012054442], [1.60422906E12, 198.89040006637572], [1.6042287E12, 202.27660006046295], [1.60422888E12, 206.6224001312256], [1.60422918E12, 229.5515002846718], [1.60422876E12, 202.0], [1.60422894E12, 214.84100005626678], [1.60422912E12, 205.76100013256072]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422882E12, 207.7679998397827], [1.604229E12, 210.00799984931945], [1.60422906E12, 198.61199991703035], [1.6042287E12, 202.0229999244213], [1.60422888E12, 206.07199983596803], [1.60422918E12, 228.35749964416027], [1.60422876E12, 201.7449999153614], [1.60422894E12, 214.60499992966652], [1.60422912E12, 205.2049998342991]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422882E12, 193.0], [1.604229E12, 201.0], [1.60422906E12, 186.0], [1.6042287E12, 195.0], [1.60422888E12, 185.0], [1.60422918E12, 215.0], [1.60422876E12, 194.0], [1.60422894E12, 207.0], [1.60422912E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422882E12, 655.0], [1.604229E12, 773.0], [1.60422906E12, 680.0], [1.6042287E12, 899.0], [1.60422888E12, 737.0], [1.60422918E12, 1010.5], [1.60422876E12, 727.0], [1.60422894E12, 898.0], [1.60422912E12, 677.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 409.0, "minX": 1.0, "maxY": 2897.0, "series": [{"data": [[3.0, 2130.0], [4.0, 1485.5], [5.0, 1543.0], [6.0, 1103.0], [7.0, 1140.0], [8.0, 1054.5], [9.0, 1019.0], [10.0, 952.5], [11.0, 785.5], [12.0, 790.5], [13.0, 705.0], [14.0, 703.5], [15.0, 595.0], [16.0, 585.5], [1.0, 2897.0], [17.0, 514.5], [18.0, 518.5], [19.0, 481.0], [20.0, 460.5], [21.0, 446.0], [22.0, 436.0], [23.0, 409.0], [24.0, 410.5], [25.0, 420.5], [26.0, 449.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 408.5, "minX": 1.0, "maxY": 2884.0, "series": [{"data": [[3.0, 2126.0], [4.0, 1472.0], [5.0, 1543.0], [6.0, 1101.5], [7.0, 1135.0], [8.0, 1047.5], [9.0, 1015.5], [10.0, 951.0], [11.0, 783.0], [12.0, 789.5], [13.0, 705.0], [14.0, 703.0], [15.0, 594.0], [16.0, 584.0], [1.0, 2884.0], [17.0, 514.5], [18.0, 518.5], [19.0, 481.0], [20.0, 460.5], [21.0, 445.0], [22.0, 435.0], [23.0, 408.5], [24.0, 410.5], [25.0, 420.5], [26.0, 449.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1333333333333333, "minX": 1.6042287E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60422882E12, 11.183333333333334], [1.604229E12, 10.516666666666667], [1.60422906E12, 11.583333333333334], [1.6042287E12, 5.433333333333334], [1.60422888E12, 11.45], [1.60422918E12, 3.1333333333333333], [1.60422876E12, 11.816666666666666], [1.60422894E12, 9.816666666666666], [1.60422912E12, 11.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6042287E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60422882E12, 11.183333333333334], [1.604229E12, 10.516666666666667], [1.60422906E12, 11.583333333333334], [1.6042287E12, 5.266666666666667], [1.60422888E12, 11.45], [1.60422918E12, 3.3], [1.60422876E12, 11.816666666666666], [1.60422894E12, 9.816666666666666], [1.60422912E12, 11.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6042287E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60422882E12, 11.183333333333334], [1.604229E12, 10.516666666666667], [1.60422906E12, 11.583333333333334], [1.6042287E12, 5.266666666666667], [1.60422888E12, 11.45], [1.60422918E12, 3.3], [1.60422876E12, 11.816666666666666], [1.60422894E12, 9.816666666666666], [1.60422912E12, 11.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.6042287E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60422882E12, 11.183333333333334], [1.604229E12, 10.516666666666667], [1.60422906E12, 11.583333333333334], [1.6042287E12, 5.266666666666667], [1.60422888E12, 11.45], [1.60422918E12, 3.3], [1.60422876E12, 11.816666666666666], [1.60422894E12, 9.816666666666666], [1.60422912E12, 11.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422918E12, "title": "Total Transactions Per Second"}},
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

