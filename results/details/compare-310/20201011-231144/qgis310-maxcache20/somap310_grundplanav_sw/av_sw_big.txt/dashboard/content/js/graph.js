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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 8470.0, "series": [{"data": [[0.0, 184.0], [0.1, 186.0], [0.2, 188.0], [0.3, 190.0], [0.4, 191.0], [0.5, 193.0], [0.6, 193.0], [0.7, 195.0], [0.8, 196.0], [0.9, 196.0], [1.0, 197.0], [1.1, 198.0], [1.2, 199.0], [1.3, 200.0], [1.4, 200.0], [1.5, 201.0], [1.6, 201.0], [1.7, 201.0], [1.8, 202.0], [1.9, 202.0], [2.0, 203.0], [2.1, 204.0], [2.2, 205.0], [2.3, 206.0], [2.4, 207.0], [2.5, 208.0], [2.6, 209.0], [2.7, 211.0], [2.8, 211.0], [2.9, 212.0], [3.0, 213.0], [3.1, 213.0], [3.2, 214.0], [3.3, 215.0], [3.4, 217.0], [3.5, 217.0], [3.6, 218.0], [3.7, 219.0], [3.8, 219.0], [3.9, 220.0], [4.0, 221.0], [4.1, 222.0], [4.2, 222.0], [4.3, 223.0], [4.4, 224.0], [4.5, 226.0], [4.6, 226.0], [4.7, 227.0], [4.8, 228.0], [4.9, 228.0], [5.0, 229.0], [5.1, 230.0], [5.2, 231.0], [5.3, 232.0], [5.4, 232.0], [5.5, 233.0], [5.6, 233.0], [5.7, 234.0], [5.8, 236.0], [5.9, 238.0], [6.0, 239.0], [6.1, 240.0], [6.2, 241.0], [6.3, 242.0], [6.4, 243.0], [6.5, 244.0], [6.6, 245.0], [6.7, 246.0], [6.8, 248.0], [6.9, 249.0], [7.0, 251.0], [7.1, 253.0], [7.2, 255.0], [7.3, 257.0], [7.4, 257.0], [7.5, 258.0], [7.6, 259.0], [7.7, 261.0], [7.8, 262.0], [7.9, 264.0], [8.0, 265.0], [8.1, 266.0], [8.2, 267.0], [8.3, 268.0], [8.4, 269.0], [8.5, 270.0], [8.6, 271.0], [8.7, 272.0], [8.8, 272.0], [8.9, 273.0], [9.0, 274.0], [9.1, 275.0], [9.2, 275.0], [9.3, 277.0], [9.4, 277.0], [9.5, 278.0], [9.6, 278.0], [9.7, 279.0], [9.8, 281.0], [9.9, 282.0], [10.0, 283.0], [10.1, 284.0], [10.2, 285.0], [10.3, 286.0], [10.4, 286.0], [10.5, 287.0], [10.6, 288.0], [10.7, 289.0], [10.8, 290.0], [10.9, 291.0], [11.0, 292.0], [11.1, 294.0], [11.2, 296.0], [11.3, 297.0], [11.4, 298.0], [11.5, 299.0], [11.6, 300.0], [11.7, 302.0], [11.8, 302.0], [11.9, 303.0], [12.0, 305.0], [12.1, 306.0], [12.2, 307.0], [12.3, 308.0], [12.4, 309.0], [12.5, 311.0], [12.6, 312.0], [12.7, 313.0], [12.8, 314.0], [12.9, 315.0], [13.0, 315.0], [13.1, 316.0], [13.2, 318.0], [13.3, 319.0], [13.4, 319.0], [13.5, 321.0], [13.6, 322.0], [13.7, 323.0], [13.8, 324.0], [13.9, 326.0], [14.0, 327.0], [14.1, 329.0], [14.2, 329.0], [14.3, 331.0], [14.4, 331.0], [14.5, 333.0], [14.6, 335.0], [14.7, 336.0], [14.8, 337.0], [14.9, 339.0], [15.0, 340.0], [15.1, 341.0], [15.2, 341.0], [15.3, 344.0], [15.4, 346.0], [15.5, 347.0], [15.6, 348.0], [15.7, 350.0], [15.8, 351.0], [15.9, 352.0], [16.0, 354.0], [16.1, 356.0], [16.2, 357.0], [16.3, 361.0], [16.4, 362.0], [16.5, 363.0], [16.6, 365.0], [16.7, 367.0], [16.8, 369.0], [16.9, 370.0], [17.0, 374.0], [17.1, 375.0], [17.2, 377.0], [17.3, 380.0], [17.4, 382.0], [17.5, 383.0], [17.6, 384.0], [17.7, 385.0], [17.8, 386.0], [17.9, 387.0], [18.0, 388.0], [18.1, 389.0], [18.2, 390.0], [18.3, 390.0], [18.4, 393.0], [18.5, 393.0], [18.6, 394.0], [18.7, 394.0], [18.8, 395.0], [18.9, 395.0], [19.0, 396.0], [19.1, 397.0], [19.2, 397.0], [19.3, 398.0], [19.4, 399.0], [19.5, 400.0], [19.6, 401.0], [19.7, 402.0], [19.8, 403.0], [19.9, 404.0], [20.0, 405.0], [20.1, 406.0], [20.2, 406.0], [20.3, 407.0], [20.4, 408.0], [20.5, 409.0], [20.6, 410.0], [20.7, 410.0], [20.8, 411.0], [20.9, 412.0], [21.0, 413.0], [21.1, 414.0], [21.2, 415.0], [21.3, 416.0], [21.4, 416.0], [21.5, 417.0], [21.6, 418.0], [21.7, 419.0], [21.8, 419.0], [21.9, 421.0], [22.0, 422.0], [22.1, 423.0], [22.2, 423.0], [22.3, 424.0], [22.4, 424.0], [22.5, 425.0], [22.6, 426.0], [22.7, 426.0], [22.8, 427.0], [22.9, 428.0], [23.0, 429.0], [23.1, 430.0], [23.2, 431.0], [23.3, 432.0], [23.4, 433.0], [23.5, 433.0], [23.6, 434.0], [23.7, 436.0], [23.8, 438.0], [23.9, 438.0], [24.0, 439.0], [24.1, 440.0], [24.2, 440.0], [24.3, 441.0], [24.4, 442.0], [24.5, 443.0], [24.6, 444.0], [24.7, 445.0], [24.8, 447.0], [24.9, 449.0], [25.0, 449.0], [25.1, 450.0], [25.2, 451.0], [25.3, 452.0], [25.4, 453.0], [25.5, 454.0], [25.6, 455.0], [25.7, 456.0], [25.8, 456.0], [25.9, 458.0], [26.0, 458.0], [26.1, 459.0], [26.2, 459.0], [26.3, 460.0], [26.4, 461.0], [26.5, 461.0], [26.6, 462.0], [26.7, 463.0], [26.8, 464.0], [26.9, 465.0], [27.0, 466.0], [27.1, 467.0], [27.2, 467.0], [27.3, 468.0], [27.4, 469.0], [27.5, 471.0], [27.6, 472.0], [27.7, 472.0], [27.8, 473.0], [27.9, 475.0], [28.0, 475.0], [28.1, 476.0], [28.2, 476.0], [28.3, 477.0], [28.4, 478.0], [28.5, 478.0], [28.6, 479.0], [28.7, 480.0], [28.8, 481.0], [28.9, 482.0], [29.0, 483.0], [29.1, 484.0], [29.2, 485.0], [29.3, 486.0], [29.4, 486.0], [29.5, 487.0], [29.6, 487.0], [29.7, 488.0], [29.8, 489.0], [29.9, 489.0], [30.0, 490.0], [30.1, 491.0], [30.2, 493.0], [30.3, 494.0], [30.4, 495.0], [30.5, 496.0], [30.6, 498.0], [30.7, 499.0], [30.8, 500.0], [30.9, 501.0], [31.0, 503.0], [31.1, 504.0], [31.2, 506.0], [31.3, 506.0], [31.4, 507.0], [31.5, 507.0], [31.6, 508.0], [31.7, 509.0], [31.8, 511.0], [31.9, 513.0], [32.0, 515.0], [32.1, 515.0], [32.2, 517.0], [32.3, 518.0], [32.4, 519.0], [32.5, 520.0], [32.6, 521.0], [32.7, 523.0], [32.8, 524.0], [32.9, 525.0], [33.0, 527.0], [33.1, 528.0], [33.2, 529.0], [33.3, 530.0], [33.4, 531.0], [33.5, 533.0], [33.6, 533.0], [33.7, 535.0], [33.8, 536.0], [33.9, 537.0], [34.0, 539.0], [34.1, 540.0], [34.2, 540.0], [34.3, 541.0], [34.4, 541.0], [34.5, 542.0], [34.6, 544.0], [34.7, 544.0], [34.8, 546.0], [34.9, 548.0], [35.0, 549.0], [35.1, 550.0], [35.2, 550.0], [35.3, 551.0], [35.4, 552.0], [35.5, 553.0], [35.6, 554.0], [35.7, 554.0], [35.8, 555.0], [35.9, 556.0], [36.0, 557.0], [36.1, 557.0], [36.2, 558.0], [36.3, 559.0], [36.4, 560.0], [36.5, 561.0], [36.6, 561.0], [36.7, 562.0], [36.8, 563.0], [36.9, 563.0], [37.0, 565.0], [37.1, 566.0], [37.2, 566.0], [37.3, 567.0], [37.4, 569.0], [37.5, 570.0], [37.6, 570.0], [37.7, 571.0], [37.8, 572.0], [37.9, 573.0], [38.0, 573.0], [38.1, 574.0], [38.2, 575.0], [38.3, 577.0], [38.4, 578.0], [38.5, 579.0], [38.6, 580.0], [38.7, 581.0], [38.8, 582.0], [38.9, 583.0], [39.0, 584.0], [39.1, 586.0], [39.2, 587.0], [39.3, 588.0], [39.4, 588.0], [39.5, 589.0], [39.6, 590.0], [39.7, 591.0], [39.8, 591.0], [39.9, 592.0], [40.0, 594.0], [40.1, 595.0], [40.2, 597.0], [40.3, 598.0], [40.4, 599.0], [40.5, 600.0], [40.6, 601.0], [40.7, 602.0], [40.8, 603.0], [40.9, 604.0], [41.0, 605.0], [41.1, 605.0], [41.2, 606.0], [41.3, 607.0], [41.4, 609.0], [41.5, 609.0], [41.6, 610.0], [41.7, 612.0], [41.8, 612.0], [41.9, 613.0], [42.0, 614.0], [42.1, 615.0], [42.2, 615.0], [42.3, 616.0], [42.4, 616.0], [42.5, 617.0], [42.6, 620.0], [42.7, 621.0], [42.8, 622.0], [42.9, 622.0], [43.0, 623.0], [43.1, 625.0], [43.2, 627.0], [43.3, 628.0], [43.4, 631.0], [43.5, 632.0], [43.6, 634.0], [43.7, 634.0], [43.8, 635.0], [43.9, 636.0], [44.0, 637.0], [44.1, 638.0], [44.2, 639.0], [44.3, 640.0], [44.4, 642.0], [44.5, 643.0], [44.6, 644.0], [44.7, 644.0], [44.8, 647.0], [44.9, 648.0], [45.0, 650.0], [45.1, 652.0], [45.2, 652.0], [45.3, 654.0], [45.4, 655.0], [45.5, 656.0], [45.6, 659.0], [45.7, 660.0], [45.8, 661.0], [45.9, 663.0], [46.0, 664.0], [46.1, 665.0], [46.2, 666.0], [46.3, 668.0], [46.4, 670.0], [46.5, 671.0], [46.6, 671.0], [46.7, 674.0], [46.8, 675.0], [46.9, 677.0], [47.0, 678.0], [47.1, 679.0], [47.2, 681.0], [47.3, 683.0], [47.4, 685.0], [47.5, 685.0], [47.6, 687.0], [47.7, 689.0], [47.8, 690.0], [47.9, 691.0], [48.0, 693.0], [48.1, 695.0], [48.2, 696.0], [48.3, 698.0], [48.4, 700.0], [48.5, 702.0], [48.6, 703.0], [48.7, 704.0], [48.8, 706.0], [48.9, 707.0], [49.0, 709.0], [49.1, 711.0], [49.2, 713.0], [49.3, 715.0], [49.4, 716.0], [49.5, 718.0], [49.6, 720.0], [49.7, 720.0], [49.8, 721.0], [49.9, 724.0], [50.0, 726.0], [50.1, 727.0], [50.2, 729.0], [50.3, 731.0], [50.4, 732.0], [50.5, 732.0], [50.6, 733.0], [50.7, 735.0], [50.8, 736.0], [50.9, 738.0], [51.0, 739.0], [51.1, 740.0], [51.2, 742.0], [51.3, 743.0], [51.4, 744.0], [51.5, 745.0], [51.6, 747.0], [51.7, 748.0], [51.8, 749.0], [51.9, 751.0], [52.0, 752.0], [52.1, 754.0], [52.2, 757.0], [52.3, 758.0], [52.4, 759.0], [52.5, 760.0], [52.6, 761.0], [52.7, 762.0], [52.8, 764.0], [52.9, 764.0], [53.0, 765.0], [53.1, 767.0], [53.2, 768.0], [53.3, 770.0], [53.4, 771.0], [53.5, 773.0], [53.6, 776.0], [53.7, 780.0], [53.8, 781.0], [53.9, 783.0], [54.0, 784.0], [54.1, 787.0], [54.2, 787.0], [54.3, 790.0], [54.4, 791.0], [54.5, 793.0], [54.6, 795.0], [54.7, 797.0], [54.8, 799.0], [54.9, 800.0], [55.0, 801.0], [55.1, 803.0], [55.2, 804.0], [55.3, 806.0], [55.4, 809.0], [55.5, 810.0], [55.6, 811.0], [55.7, 814.0], [55.8, 816.0], [55.9, 819.0], [56.0, 820.0], [56.1, 821.0], [56.2, 822.0], [56.3, 827.0], [56.4, 828.0], [56.5, 830.0], [56.6, 833.0], [56.7, 835.0], [56.8, 837.0], [56.9, 841.0], [57.0, 843.0], [57.1, 844.0], [57.2, 847.0], [57.3, 849.0], [57.4, 851.0], [57.5, 853.0], [57.6, 855.0], [57.7, 856.0], [57.8, 859.0], [57.9, 863.0], [58.0, 863.0], [58.1, 864.0], [58.2, 865.0], [58.3, 867.0], [58.4, 869.0], [58.5, 872.0], [58.6, 873.0], [58.7, 874.0], [58.8, 876.0], [58.9, 878.0], [59.0, 882.0], [59.1, 884.0], [59.2, 885.0], [59.3, 887.0], [59.4, 890.0], [59.5, 893.0], [59.6, 896.0], [59.7, 897.0], [59.8, 898.0], [59.9, 900.0], [60.0, 902.0], [60.1, 904.0], [60.2, 905.0], [60.3, 907.0], [60.4, 909.0], [60.5, 911.0], [60.6, 911.0], [60.7, 913.0], [60.8, 914.0], [60.9, 915.0], [61.0, 917.0], [61.1, 918.0], [61.2, 919.0], [61.3, 921.0], [61.4, 923.0], [61.5, 924.0], [61.6, 927.0], [61.7, 929.0], [61.8, 929.0], [61.9, 930.0], [62.0, 932.0], [62.1, 933.0], [62.2, 935.0], [62.3, 936.0], [62.4, 939.0], [62.5, 942.0], [62.6, 944.0], [62.7, 948.0], [62.8, 950.0], [62.9, 953.0], [63.0, 953.0], [63.1, 956.0], [63.2, 959.0], [63.3, 961.0], [63.4, 963.0], [63.5, 964.0], [63.6, 966.0], [63.7, 969.0], [63.8, 970.0], [63.9, 972.0], [64.0, 973.0], [64.1, 975.0], [64.2, 977.0], [64.3, 979.0], [64.4, 981.0], [64.5, 981.0], [64.6, 984.0], [64.7, 985.0], [64.8, 986.0], [64.9, 988.0], [65.0, 990.0], [65.1, 993.0], [65.2, 994.0], [65.3, 997.0], [65.4, 998.0], [65.5, 1000.0], [65.6, 1001.0], [65.7, 1002.0], [65.8, 1004.0], [65.9, 1008.0], [66.0, 1009.0], [66.1, 1010.0], [66.2, 1013.0], [66.3, 1014.0], [66.4, 1016.0], [66.5, 1018.0], [66.6, 1018.0], [66.7, 1019.0], [66.8, 1020.0], [66.9, 1023.0], [67.0, 1025.0], [67.1, 1027.0], [67.2, 1028.0], [67.3, 1029.0], [67.4, 1033.0], [67.5, 1034.0], [67.6, 1036.0], [67.7, 1037.0], [67.8, 1039.0], [67.9, 1041.0], [68.0, 1042.0], [68.1, 1043.0], [68.2, 1044.0], [68.3, 1045.0], [68.4, 1047.0], [68.5, 1048.0], [68.6, 1051.0], [68.7, 1053.0], [68.8, 1055.0], [68.9, 1056.0], [69.0, 1058.0], [69.1, 1059.0], [69.2, 1060.0], [69.3, 1061.0], [69.4, 1062.0], [69.5, 1064.0], [69.6, 1064.0], [69.7, 1065.0], [69.8, 1066.0], [69.9, 1068.0], [70.0, 1069.0], [70.1, 1071.0], [70.2, 1072.0], [70.3, 1074.0], [70.4, 1076.0], [70.5, 1077.0], [70.6, 1079.0], [70.7, 1082.0], [70.8, 1084.0], [70.9, 1086.0], [71.0, 1087.0], [71.1, 1089.0], [71.2, 1090.0], [71.3, 1093.0], [71.4, 1095.0], [71.5, 1097.0], [71.6, 1098.0], [71.7, 1101.0], [71.8, 1102.0], [71.9, 1105.0], [72.0, 1107.0], [72.1, 1110.0], [72.2, 1111.0], [72.3, 1113.0], [72.4, 1115.0], [72.5, 1117.0], [72.6, 1119.0], [72.7, 1121.0], [72.8, 1122.0], [72.9, 1125.0], [73.0, 1129.0], [73.1, 1130.0], [73.2, 1132.0], [73.3, 1134.0], [73.4, 1137.0], [73.5, 1139.0], [73.6, 1142.0], [73.7, 1142.0], [73.8, 1147.0], [73.9, 1151.0], [74.0, 1153.0], [74.1, 1155.0], [74.2, 1158.0], [74.3, 1160.0], [74.4, 1161.0], [74.5, 1162.0], [74.6, 1163.0], [74.7, 1165.0], [74.8, 1169.0], [74.9, 1172.0], [75.0, 1174.0], [75.1, 1178.0], [75.2, 1180.0], [75.3, 1184.0], [75.4, 1186.0], [75.5, 1187.0], [75.6, 1188.0], [75.7, 1191.0], [75.8, 1194.0], [75.9, 1197.0], [76.0, 1199.0], [76.1, 1201.0], [76.2, 1203.0], [76.3, 1204.0], [76.4, 1208.0], [76.5, 1210.0], [76.6, 1212.0], [76.7, 1216.0], [76.8, 1219.0], [76.9, 1222.0], [77.0, 1225.0], [77.1, 1226.0], [77.2, 1229.0], [77.3, 1236.0], [77.4, 1237.0], [77.5, 1239.0], [77.6, 1242.0], [77.7, 1244.0], [77.8, 1246.0], [77.9, 1249.0], [78.0, 1251.0], [78.1, 1253.0], [78.2, 1254.0], [78.3, 1255.0], [78.4, 1257.0], [78.5, 1260.0], [78.6, 1262.0], [78.7, 1264.0], [78.8, 1268.0], [78.9, 1270.0], [79.0, 1271.0], [79.1, 1274.0], [79.2, 1277.0], [79.3, 1279.0], [79.4, 1280.0], [79.5, 1282.0], [79.6, 1286.0], [79.7, 1290.0], [79.8, 1294.0], [79.9, 1299.0], [80.0, 1301.0], [80.1, 1304.0], [80.2, 1308.0], [80.3, 1309.0], [80.4, 1311.0], [80.5, 1313.0], [80.6, 1315.0], [80.7, 1318.0], [80.8, 1320.0], [80.9, 1323.0], [81.0, 1325.0], [81.1, 1328.0], [81.2, 1331.0], [81.3, 1335.0], [81.4, 1336.0], [81.5, 1338.0], [81.6, 1340.0], [81.7, 1342.0], [81.8, 1343.0], [81.9, 1347.0], [82.0, 1350.0], [82.1, 1354.0], [82.2, 1356.0], [82.3, 1358.0], [82.4, 1361.0], [82.5, 1363.0], [82.6, 1366.0], [82.7, 1371.0], [82.8, 1373.0], [82.9, 1374.0], [83.0, 1377.0], [83.1, 1379.0], [83.2, 1383.0], [83.3, 1384.0], [83.4, 1388.0], [83.5, 1390.0], [83.6, 1391.0], [83.7, 1393.0], [83.8, 1394.0], [83.9, 1396.0], [84.0, 1399.0], [84.1, 1401.0], [84.2, 1402.0], [84.3, 1403.0], [84.4, 1406.0], [84.5, 1407.0], [84.6, 1411.0], [84.7, 1412.0], [84.8, 1414.0], [84.9, 1415.0], [85.0, 1418.0], [85.1, 1420.0], [85.2, 1422.0], [85.3, 1425.0], [85.4, 1428.0], [85.5, 1430.0], [85.6, 1433.0], [85.7, 1435.0], [85.8, 1440.0], [85.9, 1441.0], [86.0, 1442.0], [86.1, 1446.0], [86.2, 1450.0], [86.3, 1454.0], [86.4, 1458.0], [86.5, 1463.0], [86.6, 1464.0], [86.7, 1467.0], [86.8, 1468.0], [86.9, 1471.0], [87.0, 1472.0], [87.1, 1475.0], [87.2, 1483.0], [87.3, 1485.0], [87.4, 1490.0], [87.5, 1492.0], [87.6, 1499.0], [87.7, 1503.0], [87.8, 1507.0], [87.9, 1511.0], [88.0, 1513.0], [88.1, 1514.0], [88.2, 1518.0], [88.3, 1521.0], [88.4, 1524.0], [88.5, 1529.0], [88.6, 1535.0], [88.7, 1542.0], [88.8, 1545.0], [88.9, 1549.0], [89.0, 1551.0], [89.1, 1553.0], [89.2, 1555.0], [89.3, 1560.0], [89.4, 1564.0], [89.5, 1568.0], [89.6, 1570.0], [89.7, 1574.0], [89.8, 1578.0], [89.9, 1581.0], [90.0, 1585.0], [90.1, 1589.0], [90.2, 1591.0], [90.3, 1600.0], [90.4, 1609.0], [90.5, 1614.0], [90.6, 1621.0], [90.7, 1636.0], [90.8, 1643.0], [90.9, 1651.0], [91.0, 1655.0], [91.1, 1657.0], [91.2, 1663.0], [91.3, 1670.0], [91.4, 1674.0], [91.5, 1682.0], [91.6, 1687.0], [91.7, 1698.0], [91.8, 1702.0], [91.9, 1706.0], [92.0, 1708.0], [92.1, 1715.0], [92.2, 1727.0], [92.3, 1733.0], [92.4, 1739.0], [92.5, 1750.0], [92.6, 1756.0], [92.7, 1764.0], [92.8, 1772.0], [92.9, 1775.0], [93.0, 1785.0], [93.1, 1794.0], [93.2, 1809.0], [93.3, 1815.0], [93.4, 1824.0], [93.5, 1846.0], [93.6, 1850.0], [93.7, 1860.0], [93.8, 1865.0], [93.9, 1878.0], [94.0, 1883.0], [94.1, 1888.0], [94.2, 1899.0], [94.3, 1907.0], [94.4, 1917.0], [94.5, 1923.0], [94.6, 1925.0], [94.7, 1942.0], [94.8, 1948.0], [94.9, 1958.0], [95.0, 1968.0], [95.1, 1978.0], [95.2, 1980.0], [95.3, 2001.0], [95.4, 2008.0], [95.5, 2017.0], [95.6, 2047.0], [95.7, 2054.0], [95.8, 2061.0], [95.9, 2078.0], [96.0, 2095.0], [96.1, 2103.0], [96.2, 2113.0], [96.3, 2120.0], [96.4, 2137.0], [96.5, 2147.0], [96.6, 2173.0], [96.7, 2183.0], [96.8, 2188.0], [96.9, 2205.0], [97.0, 2213.0], [97.1, 2233.0], [97.2, 2257.0], [97.3, 2268.0], [97.4, 2289.0], [97.5, 2318.0], [97.6, 2339.0], [97.7, 2348.0], [97.8, 2363.0], [97.9, 2377.0], [98.0, 2406.0], [98.1, 2431.0], [98.2, 2492.0], [98.3, 2530.0], [98.4, 2562.0], [98.5, 2628.0], [98.6, 2660.0], [98.7, 2704.0], [98.8, 2752.0], [98.9, 2828.0], [99.0, 2862.0], [99.1, 3013.0], [99.2, 3089.0], [99.3, 3231.0], [99.4, 3482.0], [99.5, 3613.0], [99.6, 3804.0], [99.7, 4146.0], [99.8, 4558.0], [99.9, 5010.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 587.0, "series": [{"data": [[600.0, 410.0], [700.0, 337.0], [800.0, 260.0], [900.0, 292.0], [1000.0, 320.0], [1100.0, 226.0], [1200.0, 205.0], [1300.0, 211.0], [1400.0, 186.0], [1500.0, 138.0], [1600.0, 77.0], [1700.0, 71.0], [1800.0, 56.0], [1900.0, 56.0], [2000.0, 41.0], [2100.0, 41.0], [2300.0, 26.0], [2200.0, 32.0], [2400.0, 13.0], [2500.0, 12.0], [2600.0, 10.0], [2800.0, 10.0], [2700.0, 10.0], [2900.0, 3.0], [3000.0, 7.0], [3100.0, 3.0], [3200.0, 4.0], [3400.0, 3.0], [3500.0, 3.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4500.0, 3.0], [4700.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [5300.0, 1.0], [5600.0, 1.0], [5800.0, 1.0], [8400.0, 1.0], [100.0, 66.0], [200.0, 532.0], [300.0, 411.0], [400.0, 587.0], [500.0, 504.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 640.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2951.0, "series": [{"data": [[0.0, 1599.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2951.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 640.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.91906474820144, "minX": 1.60245888E12, "maxY": 10.0, "series": [{"data": [[1.60245924E12, 10.0], [1.602459E12, 10.0], [1.60245906E12, 10.0], [1.60245888E12, 10.0], [1.60245918E12, 10.0], [1.6024593E12, 9.91906474820144], [1.60245894E12, 10.0], [1.60245912E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024593E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 282.0, "minX": 1.0, "maxY": 2862.0, "series": [{"data": [[8.0, 1520.0], [4.0, 1923.0], [2.0, 2644.0], [1.0, 2862.0], [9.0, 1918.0], [10.0, 879.4423856398398], [5.0, 732.0], [6.0, 723.0], [3.0, 798.0], [7.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 880.4996146435474]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3716.1666666666665, "minX": 1.60245888E12, "maxY": 3485292.3666666667, "series": [{"data": [[1.60245924E12, 3276619.9], [1.602459E12, 3485292.3666666667], [1.60245906E12, 3186662.216666667], [1.60245888E12, 2647247.5], [1.60245918E12, 2964046.25], [1.6024593E12, 2348015.35], [1.60245894E12, 2945598.1666666665], [1.60245912E12, 3118977.3333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60245924E12, 5553.4], [1.602459E12, 5278.766666666666], [1.60245906E12, 5070.883333333333], [1.60245888E12, 3716.1666666666665], [1.60245918E12, 4938.25], [1.6024593E12, 4192.483333333334], [1.60245894E12, 5203.966666666666], [1.60245912E12, 4623.416666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024593E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 820.6648426812584, "minX": 1.60245888E12, "maxY": 949.3817829457371, "series": [{"data": [[1.60245924E12, 820.6648426812584], [1.602459E12, 855.3908045977017], [1.60245906E12, 898.8614008941877], [1.60245888E12, 949.3817829457371], [1.60245918E12, 891.869242199108], [1.6024593E12, 876.4388489208637], [1.60245894E12, 846.1442715700138], [1.60245912E12, 930.884375]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024593E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 819.0916552667582, "minX": 1.60245888E12, "maxY": 947.0949612403093, "series": [{"data": [[1.60245924E12, 819.0916552667582], [1.602459E12, 853.0804597701147], [1.60245906E12, 896.543964232488], [1.60245888E12, 947.0949612403093], [1.60245918E12, 890.2867756315012], [1.6024593E12, 874.9334532374094], [1.60245894E12, 844.1725601131538], [1.60245912E12, 928.8749999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024593E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011922503725782423, "minX": 1.60245888E12, "maxY": 0.1589147286821705, "series": [{"data": [[1.60245924E12, 0.013679890560875537], [1.602459E12, 0.014367816091954033], [1.60245906E12, 0.011922503725782423], [1.60245888E12, 0.1589147286821705], [1.60245918E12, 0.016344725111441298], [1.6024593E12, 0.01798561151079139], [1.60245894E12, 0.019801980198019837], [1.60245912E12, 0.012500000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024593E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60245888E12, "maxY": 8470.0, "series": [{"data": [[1.60245924E12, 2846.0], [1.602459E12, 2952.0], [1.60245906E12, 4720.0], [1.60245888E12, 8470.0], [1.60245918E12, 4558.0], [1.6024593E12, 3777.0], [1.60245894E12, 4538.0], [1.60245912E12, 5843.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60245924E12, 192.1759996509552], [1.602459E12, 191.5459996676445], [1.60245906E12, 194.0479998397827], [1.60245888E12, 198.3059997534752], [1.60245918E12, 199.0], [1.6024593E12, 197.0], [1.60245894E12, 198.37199983119964], [1.60245912E12, 199.7689998471737]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60245924E12, 193.4936001396179], [1.602459E12, 192.8006001329422], [1.60245906E12, 194.6528000640869], [1.60245888E12, 199.23660009860993], [1.60245918E12, 199.0], [1.6024593E12, 197.0], [1.60245894E12, 199.02760020256042], [1.60245912E12, 200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60245924E12, 192.9079998254776], [1.602459E12, 192.24299983382224], [1.60245906E12, 194.38399991989135], [1.60245888E12, 198.82299987673758], [1.60245918E12, 199.0], [1.6024593E12, 197.0], [1.60245894E12, 198.72599991559983], [1.60245912E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60245924E12, 184.0], [1.602459E12, 186.0], [1.60245906E12, 186.0], [1.60245888E12, 193.0], [1.60245918E12, 187.0], [1.6024593E12, 188.0], [1.60245894E12, 185.0], [1.60245912E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60245924E12, 660.0], [1.602459E12, 677.5], [1.60245906E12, 713.0], [1.60245888E12, 828.5], [1.60245918E12, 720.0], [1.6024593E12, 686.0], [1.60245894E12, 654.0], [1.60245912E12, 829.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024593E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 403.0, "minX": 1.0, "maxY": 2560.0, "series": [{"data": [[2.0, 2283.5], [3.0, 1409.0], [4.0, 1690.5], [5.0, 1579.0], [6.0, 1141.0], [7.0, 1045.0], [8.0, 1058.0], [9.0, 983.5], [10.0, 873.5], [11.0, 861.5], [12.0, 734.5], [13.0, 757.0], [14.0, 665.0], [15.0, 672.5], [1.0, 2560.0], [16.0, 607.0], [17.0, 554.0], [18.0, 485.0], [19.0, 458.0], [20.0, 438.5], [21.0, 439.0], [22.0, 432.5], [23.0, 404.0], [24.0, 425.0], [25.0, 405.5], [26.0, 418.0], [28.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 402.5, "minX": 1.0, "maxY": 2556.0, "series": [{"data": [[2.0, 2276.0], [3.0, 1404.0], [4.0, 1684.5], [5.0, 1578.0], [6.0, 1133.5], [7.0, 1042.0], [8.0, 1053.5], [9.0, 981.0], [10.0, 872.0], [11.0, 859.0], [12.0, 731.5], [13.0, 755.5], [14.0, 662.5], [15.0, 671.5], [1.0, 2556.0], [16.0, 606.0], [17.0, 554.0], [18.0, 484.5], [19.0, 458.0], [20.0, 438.0], [21.0, 439.0], [22.0, 432.0], [23.0, 403.0], [24.0, 425.0], [25.0, 405.0], [26.0, 418.0], [28.0, 402.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.766666666666667, "minX": 1.60245888E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60245924E12, 12.183333333333334], [1.602459E12, 11.6], [1.60245906E12, 11.183333333333334], [1.60245888E12, 8.766666666666667], [1.60245918E12, 11.216666666666667], [1.6024593E12, 9.1], [1.60245894E12, 11.783333333333333], [1.60245912E12, 10.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024593E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.60245888E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60245924E12, 12.183333333333334], [1.602459E12, 11.6], [1.60245906E12, 11.183333333333334], [1.60245888E12, 8.6], [1.60245918E12, 11.216666666666667], [1.6024593E12, 9.266666666666667], [1.60245894E12, 11.783333333333333], [1.60245912E12, 10.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024593E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.60245888E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60245924E12, 12.183333333333334], [1.602459E12, 11.6], [1.60245906E12, 11.183333333333334], [1.60245888E12, 8.6], [1.60245918E12, 11.216666666666667], [1.6024593E12, 9.266666666666667], [1.60245894E12, 11.783333333333333], [1.60245912E12, 10.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024593E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.60245888E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60245924E12, 12.183333333333334], [1.602459E12, 11.6], [1.60245906E12, 11.183333333333334], [1.60245888E12, 8.6], [1.60245918E12, 11.216666666666667], [1.6024593E12, 9.266666666666667], [1.60245894E12, 11.783333333333333], [1.60245912E12, 10.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024593E12, "title": "Total Transactions Per Second"}},
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

