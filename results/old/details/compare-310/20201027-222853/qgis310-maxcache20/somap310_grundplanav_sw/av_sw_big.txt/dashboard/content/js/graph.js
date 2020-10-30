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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8648.0, "series": [{"data": [[0.0, 181.0], [0.1, 188.0], [0.2, 190.0], [0.3, 192.0], [0.4, 194.0], [0.5, 195.0], [0.6, 197.0], [0.7, 198.0], [0.8, 198.0], [0.9, 199.0], [1.0, 199.0], [1.1, 200.0], [1.2, 201.0], [1.3, 202.0], [1.4, 203.0], [1.5, 204.0], [1.6, 205.0], [1.7, 205.0], [1.8, 206.0], [1.9, 207.0], [2.0, 207.0], [2.1, 207.0], [2.2, 209.0], [2.3, 209.0], [2.4, 210.0], [2.5, 211.0], [2.6, 212.0], [2.7, 213.0], [2.8, 215.0], [2.9, 216.0], [3.0, 217.0], [3.1, 218.0], [3.2, 219.0], [3.3, 220.0], [3.4, 220.0], [3.5, 221.0], [3.6, 221.0], [3.7, 222.0], [3.8, 223.0], [3.9, 223.0], [4.0, 224.0], [4.1, 225.0], [4.2, 225.0], [4.3, 227.0], [4.4, 227.0], [4.5, 228.0], [4.6, 228.0], [4.7, 229.0], [4.8, 229.0], [4.9, 230.0], [5.0, 231.0], [5.1, 232.0], [5.2, 233.0], [5.3, 234.0], [5.4, 234.0], [5.5, 235.0], [5.6, 236.0], [5.7, 237.0], [5.8, 238.0], [5.9, 239.0], [6.0, 240.0], [6.1, 241.0], [6.2, 242.0], [6.3, 244.0], [6.4, 245.0], [6.5, 246.0], [6.6, 247.0], [6.7, 249.0], [6.8, 251.0], [6.9, 252.0], [7.0, 253.0], [7.1, 254.0], [7.2, 255.0], [7.3, 256.0], [7.4, 258.0], [7.5, 260.0], [7.6, 261.0], [7.7, 262.0], [7.8, 263.0], [7.9, 264.0], [8.0, 266.0], [8.1, 266.0], [8.2, 268.0], [8.3, 269.0], [8.4, 270.0], [8.5, 271.0], [8.6, 272.0], [8.7, 273.0], [8.8, 274.0], [8.9, 274.0], [9.0, 275.0], [9.1, 276.0], [9.2, 276.0], [9.3, 277.0], [9.4, 278.0], [9.5, 279.0], [9.6, 280.0], [9.7, 281.0], [9.8, 281.0], [9.9, 282.0], [10.0, 283.0], [10.1, 284.0], [10.2, 286.0], [10.3, 287.0], [10.4, 288.0], [10.5, 289.0], [10.6, 291.0], [10.7, 291.0], [10.8, 292.0], [10.9, 293.0], [11.0, 294.0], [11.1, 295.0], [11.2, 295.0], [11.3, 297.0], [11.4, 297.0], [11.5, 299.0], [11.6, 300.0], [11.7, 301.0], [11.8, 302.0], [11.9, 305.0], [12.0, 306.0], [12.1, 307.0], [12.2, 308.0], [12.3, 309.0], [12.4, 310.0], [12.5, 310.0], [12.6, 312.0], [12.7, 313.0], [12.8, 314.0], [12.9, 315.0], [13.0, 315.0], [13.1, 316.0], [13.2, 317.0], [13.3, 318.0], [13.4, 319.0], [13.5, 320.0], [13.6, 321.0], [13.7, 322.0], [13.8, 323.0], [13.9, 324.0], [14.0, 325.0], [14.1, 327.0], [14.2, 328.0], [14.3, 329.0], [14.4, 330.0], [14.5, 331.0], [14.6, 332.0], [14.7, 333.0], [14.8, 334.0], [14.9, 336.0], [15.0, 338.0], [15.1, 338.0], [15.2, 339.0], [15.3, 340.0], [15.4, 342.0], [15.5, 343.0], [15.6, 345.0], [15.7, 348.0], [15.8, 349.0], [15.9, 350.0], [16.0, 351.0], [16.1, 352.0], [16.2, 352.0], [16.3, 354.0], [16.4, 355.0], [16.5, 357.0], [16.6, 358.0], [16.7, 359.0], [16.8, 361.0], [16.9, 363.0], [17.0, 365.0], [17.1, 366.0], [17.2, 369.0], [17.3, 370.0], [17.4, 371.0], [17.5, 374.0], [17.6, 376.0], [17.7, 378.0], [17.8, 379.0], [17.9, 380.0], [18.0, 380.0], [18.1, 381.0], [18.2, 383.0], [18.3, 384.0], [18.4, 385.0], [18.5, 386.0], [18.6, 387.0], [18.7, 387.0], [18.8, 389.0], [18.9, 390.0], [19.0, 391.0], [19.1, 393.0], [19.2, 394.0], [19.3, 395.0], [19.4, 397.0], [19.5, 397.0], [19.6, 398.0], [19.7, 399.0], [19.8, 400.0], [19.9, 401.0], [20.0, 401.0], [20.1, 402.0], [20.2, 403.0], [20.3, 404.0], [20.4, 405.0], [20.5, 406.0], [20.6, 406.0], [20.7, 407.0], [20.8, 409.0], [20.9, 410.0], [21.0, 411.0], [21.1, 412.0], [21.2, 413.0], [21.3, 415.0], [21.4, 416.0], [21.5, 416.0], [21.6, 417.0], [21.7, 417.0], [21.8, 418.0], [21.9, 419.0], [22.0, 421.0], [22.1, 422.0], [22.2, 423.0], [22.3, 424.0], [22.4, 425.0], [22.5, 425.0], [22.6, 426.0], [22.7, 427.0], [22.8, 428.0], [22.9, 429.0], [23.0, 430.0], [23.1, 431.0], [23.2, 432.0], [23.3, 433.0], [23.4, 434.0], [23.5, 435.0], [23.6, 435.0], [23.7, 436.0], [23.8, 436.0], [23.9, 437.0], [24.0, 438.0], [24.1, 438.0], [24.2, 439.0], [24.3, 440.0], [24.4, 441.0], [24.5, 442.0], [24.6, 442.0], [24.7, 443.0], [24.8, 444.0], [24.9, 445.0], [25.0, 445.0], [25.1, 446.0], [25.2, 447.0], [25.3, 448.0], [25.4, 449.0], [25.5, 449.0], [25.6, 450.0], [25.7, 450.0], [25.8, 452.0], [25.9, 452.0], [26.0, 453.0], [26.1, 454.0], [26.2, 455.0], [26.3, 456.0], [26.4, 458.0], [26.5, 458.0], [26.6, 459.0], [26.7, 460.0], [26.8, 461.0], [26.9, 462.0], [27.0, 463.0], [27.1, 464.0], [27.2, 465.0], [27.3, 466.0], [27.4, 467.0], [27.5, 467.0], [27.6, 468.0], [27.7, 469.0], [27.8, 470.0], [27.9, 471.0], [28.0, 472.0], [28.1, 473.0], [28.2, 474.0], [28.3, 474.0], [28.4, 475.0], [28.5, 476.0], [28.6, 477.0], [28.7, 478.0], [28.8, 479.0], [28.9, 480.0], [29.0, 481.0], [29.1, 481.0], [29.2, 483.0], [29.3, 484.0], [29.4, 484.0], [29.5, 486.0], [29.6, 488.0], [29.7, 489.0], [29.8, 489.0], [29.9, 490.0], [30.0, 491.0], [30.1, 492.0], [30.2, 492.0], [30.3, 493.0], [30.4, 494.0], [30.5, 494.0], [30.6, 496.0], [30.7, 497.0], [30.8, 498.0], [30.9, 498.0], [31.0, 499.0], [31.1, 501.0], [31.2, 503.0], [31.3, 504.0], [31.4, 506.0], [31.5, 507.0], [31.6, 507.0], [31.7, 509.0], [31.8, 510.0], [31.9, 511.0], [32.0, 512.0], [32.1, 514.0], [32.2, 515.0], [32.3, 517.0], [32.4, 518.0], [32.5, 519.0], [32.6, 520.0], [32.7, 522.0], [32.8, 523.0], [32.9, 524.0], [33.0, 525.0], [33.1, 526.0], [33.2, 526.0], [33.3, 527.0], [33.4, 528.0], [33.5, 529.0], [33.6, 531.0], [33.7, 532.0], [33.8, 533.0], [33.9, 534.0], [34.0, 535.0], [34.1, 536.0], [34.2, 537.0], [34.3, 538.0], [34.4, 539.0], [34.5, 540.0], [34.6, 541.0], [34.7, 541.0], [34.8, 542.0], [34.9, 543.0], [35.0, 544.0], [35.1, 546.0], [35.2, 547.0], [35.3, 548.0], [35.4, 548.0], [35.5, 549.0], [35.6, 549.0], [35.7, 550.0], [35.8, 552.0], [35.9, 553.0], [36.0, 554.0], [36.1, 555.0], [36.2, 555.0], [36.3, 557.0], [36.4, 558.0], [36.5, 558.0], [36.6, 559.0], [36.7, 560.0], [36.8, 561.0], [36.9, 562.0], [37.0, 563.0], [37.1, 564.0], [37.2, 565.0], [37.3, 566.0], [37.4, 568.0], [37.5, 569.0], [37.6, 570.0], [37.7, 570.0], [37.8, 571.0], [37.9, 572.0], [38.0, 573.0], [38.1, 574.0], [38.2, 575.0], [38.3, 576.0], [38.4, 577.0], [38.5, 578.0], [38.6, 578.0], [38.7, 579.0], [38.8, 580.0], [38.9, 581.0], [39.0, 582.0], [39.1, 583.0], [39.2, 584.0], [39.3, 585.0], [39.4, 587.0], [39.5, 588.0], [39.6, 588.0], [39.7, 590.0], [39.8, 591.0], [39.9, 592.0], [40.0, 593.0], [40.1, 595.0], [40.2, 595.0], [40.3, 596.0], [40.4, 597.0], [40.5, 599.0], [40.6, 599.0], [40.7, 600.0], [40.8, 603.0], [40.9, 605.0], [41.0, 606.0], [41.1, 607.0], [41.2, 608.0], [41.3, 609.0], [41.4, 610.0], [41.5, 611.0], [41.6, 612.0], [41.7, 614.0], [41.8, 615.0], [41.9, 617.0], [42.0, 618.0], [42.1, 619.0], [42.2, 620.0], [42.3, 621.0], [42.4, 623.0], [42.5, 624.0], [42.6, 625.0], [42.7, 627.0], [42.8, 627.0], [42.9, 628.0], [43.0, 629.0], [43.1, 630.0], [43.2, 632.0], [43.3, 634.0], [43.4, 635.0], [43.5, 636.0], [43.6, 638.0], [43.7, 641.0], [43.8, 641.0], [43.9, 642.0], [44.0, 644.0], [44.1, 646.0], [44.2, 647.0], [44.3, 649.0], [44.4, 650.0], [44.5, 651.0], [44.6, 652.0], [44.7, 653.0], [44.8, 655.0], [44.9, 657.0], [45.0, 658.0], [45.1, 661.0], [45.2, 662.0], [45.3, 664.0], [45.4, 665.0], [45.5, 668.0], [45.6, 669.0], [45.7, 670.0], [45.8, 673.0], [45.9, 675.0], [46.0, 676.0], [46.1, 676.0], [46.2, 677.0], [46.3, 679.0], [46.4, 680.0], [46.5, 681.0], [46.6, 682.0], [46.7, 683.0], [46.8, 685.0], [46.9, 687.0], [47.0, 688.0], [47.1, 689.0], [47.2, 690.0], [47.3, 692.0], [47.4, 694.0], [47.5, 696.0], [47.6, 697.0], [47.7, 699.0], [47.8, 700.0], [47.9, 702.0], [48.0, 704.0], [48.1, 705.0], [48.2, 707.0], [48.3, 708.0], [48.4, 709.0], [48.5, 711.0], [48.6, 712.0], [48.7, 713.0], [48.8, 714.0], [48.9, 715.0], [49.0, 717.0], [49.1, 718.0], [49.2, 720.0], [49.3, 721.0], [49.4, 722.0], [49.5, 723.0], [49.6, 726.0], [49.7, 727.0], [49.8, 730.0], [49.9, 732.0], [50.0, 734.0], [50.1, 735.0], [50.2, 736.0], [50.3, 737.0], [50.4, 739.0], [50.5, 741.0], [50.6, 744.0], [50.7, 746.0], [50.8, 746.0], [50.9, 747.0], [51.0, 749.0], [51.1, 750.0], [51.2, 754.0], [51.3, 754.0], [51.4, 756.0], [51.5, 757.0], [51.6, 760.0], [51.7, 762.0], [51.8, 764.0], [51.9, 765.0], [52.0, 767.0], [52.1, 770.0], [52.2, 772.0], [52.3, 773.0], [52.4, 774.0], [52.5, 777.0], [52.6, 778.0], [52.7, 781.0], [52.8, 783.0], [52.9, 784.0], [53.0, 785.0], [53.1, 786.0], [53.2, 789.0], [53.3, 791.0], [53.4, 793.0], [53.5, 796.0], [53.6, 797.0], [53.7, 799.0], [53.8, 801.0], [53.9, 804.0], [54.0, 807.0], [54.1, 809.0], [54.2, 810.0], [54.3, 814.0], [54.4, 815.0], [54.5, 817.0], [54.6, 818.0], [54.7, 820.0], [54.8, 822.0], [54.9, 822.0], [55.0, 824.0], [55.1, 827.0], [55.2, 828.0], [55.3, 829.0], [55.4, 830.0], [55.5, 831.0], [55.6, 834.0], [55.7, 836.0], [55.8, 839.0], [55.9, 841.0], [56.0, 842.0], [56.1, 843.0], [56.2, 844.0], [56.3, 846.0], [56.4, 847.0], [56.5, 849.0], [56.6, 850.0], [56.7, 853.0], [56.8, 856.0], [56.9, 859.0], [57.0, 860.0], [57.1, 861.0], [57.2, 862.0], [57.3, 864.0], [57.4, 867.0], [57.5, 869.0], [57.6, 870.0], [57.7, 872.0], [57.8, 874.0], [57.9, 875.0], [58.0, 878.0], [58.1, 880.0], [58.2, 882.0], [58.3, 884.0], [58.4, 887.0], [58.5, 889.0], [58.6, 893.0], [58.7, 894.0], [58.8, 895.0], [58.9, 897.0], [59.0, 900.0], [59.1, 903.0], [59.2, 904.0], [59.3, 906.0], [59.4, 907.0], [59.5, 911.0], [59.6, 913.0], [59.7, 916.0], [59.8, 917.0], [59.9, 919.0], [60.0, 920.0], [60.1, 922.0], [60.2, 923.0], [60.3, 925.0], [60.4, 928.0], [60.5, 931.0], [60.6, 932.0], [60.7, 935.0], [60.8, 936.0], [60.9, 937.0], [61.0, 938.0], [61.1, 941.0], [61.2, 943.0], [61.3, 944.0], [61.4, 945.0], [61.5, 946.0], [61.6, 949.0], [61.7, 951.0], [61.8, 952.0], [61.9, 953.0], [62.0, 955.0], [62.1, 957.0], [62.2, 958.0], [62.3, 959.0], [62.4, 962.0], [62.5, 963.0], [62.6, 964.0], [62.7, 966.0], [62.8, 969.0], [62.9, 970.0], [63.0, 972.0], [63.1, 973.0], [63.2, 976.0], [63.3, 977.0], [63.4, 979.0], [63.5, 980.0], [63.6, 981.0], [63.7, 982.0], [63.8, 984.0], [63.9, 987.0], [64.0, 988.0], [64.1, 989.0], [64.2, 992.0], [64.3, 994.0], [64.4, 996.0], [64.5, 1000.0], [64.6, 1001.0], [64.7, 1001.0], [64.8, 1004.0], [64.9, 1005.0], [65.0, 1005.0], [65.1, 1008.0], [65.2, 1010.0], [65.3, 1011.0], [65.4, 1013.0], [65.5, 1016.0], [65.6, 1017.0], [65.7, 1018.0], [65.8, 1021.0], [65.9, 1022.0], [66.0, 1023.0], [66.1, 1024.0], [66.2, 1026.0], [66.3, 1027.0], [66.4, 1029.0], [66.5, 1031.0], [66.6, 1033.0], [66.7, 1034.0], [66.8, 1036.0], [66.9, 1039.0], [67.0, 1040.0], [67.1, 1042.0], [67.2, 1044.0], [67.3, 1044.0], [67.4, 1046.0], [67.5, 1047.0], [67.6, 1049.0], [67.7, 1052.0], [67.8, 1054.0], [67.9, 1058.0], [68.0, 1062.0], [68.1, 1064.0], [68.2, 1066.0], [68.3, 1069.0], [68.4, 1070.0], [68.5, 1073.0], [68.6, 1075.0], [68.7, 1076.0], [68.8, 1078.0], [68.9, 1078.0], [69.0, 1080.0], [69.1, 1081.0], [69.2, 1082.0], [69.3, 1083.0], [69.4, 1085.0], [69.5, 1086.0], [69.6, 1087.0], [69.7, 1088.0], [69.8, 1090.0], [69.9, 1091.0], [70.0, 1091.0], [70.1, 1093.0], [70.2, 1094.0], [70.3, 1096.0], [70.4, 1097.0], [70.5, 1100.0], [70.6, 1104.0], [70.7, 1105.0], [70.8, 1108.0], [70.9, 1110.0], [71.0, 1112.0], [71.1, 1114.0], [71.2, 1116.0], [71.3, 1121.0], [71.4, 1122.0], [71.5, 1126.0], [71.6, 1129.0], [71.7, 1131.0], [71.8, 1132.0], [71.9, 1133.0], [72.0, 1137.0], [72.1, 1139.0], [72.2, 1141.0], [72.3, 1143.0], [72.4, 1145.0], [72.5, 1147.0], [72.6, 1148.0], [72.7, 1150.0], [72.8, 1152.0], [72.9, 1153.0], [73.0, 1155.0], [73.1, 1158.0], [73.2, 1160.0], [73.3, 1161.0], [73.4, 1164.0], [73.5, 1166.0], [73.6, 1168.0], [73.7, 1171.0], [73.8, 1174.0], [73.9, 1177.0], [74.0, 1178.0], [74.1, 1180.0], [74.2, 1182.0], [74.3, 1184.0], [74.4, 1185.0], [74.5, 1188.0], [74.6, 1190.0], [74.7, 1192.0], [74.8, 1196.0], [74.9, 1197.0], [75.0, 1198.0], [75.1, 1199.0], [75.2, 1201.0], [75.3, 1203.0], [75.4, 1206.0], [75.5, 1207.0], [75.6, 1210.0], [75.7, 1213.0], [75.8, 1215.0], [75.9, 1217.0], [76.0, 1219.0], [76.1, 1220.0], [76.2, 1224.0], [76.3, 1226.0], [76.4, 1227.0], [76.5, 1230.0], [76.6, 1231.0], [76.7, 1233.0], [76.8, 1234.0], [76.9, 1239.0], [77.0, 1240.0], [77.1, 1241.0], [77.2, 1242.0], [77.3, 1245.0], [77.4, 1250.0], [77.5, 1253.0], [77.6, 1256.0], [77.7, 1258.0], [77.8, 1260.0], [77.9, 1262.0], [78.0, 1264.0], [78.1, 1267.0], [78.2, 1269.0], [78.3, 1270.0], [78.4, 1273.0], [78.5, 1275.0], [78.6, 1277.0], [78.7, 1282.0], [78.8, 1284.0], [78.9, 1285.0], [79.0, 1288.0], [79.1, 1291.0], [79.2, 1293.0], [79.3, 1295.0], [79.4, 1299.0], [79.5, 1303.0], [79.6, 1306.0], [79.7, 1308.0], [79.8, 1312.0], [79.9, 1313.0], [80.0, 1314.0], [80.1, 1317.0], [80.2, 1319.0], [80.3, 1323.0], [80.4, 1324.0], [80.5, 1326.0], [80.6, 1329.0], [80.7, 1332.0], [80.8, 1334.0], [80.9, 1337.0], [81.0, 1340.0], [81.1, 1342.0], [81.2, 1345.0], [81.3, 1348.0], [81.4, 1351.0], [81.5, 1352.0], [81.6, 1354.0], [81.7, 1355.0], [81.8, 1357.0], [81.9, 1362.0], [82.0, 1364.0], [82.1, 1368.0], [82.2, 1371.0], [82.3, 1372.0], [82.4, 1373.0], [82.5, 1375.0], [82.6, 1376.0], [82.7, 1380.0], [82.8, 1381.0], [82.9, 1382.0], [83.0, 1383.0], [83.1, 1386.0], [83.2, 1390.0], [83.3, 1393.0], [83.4, 1395.0], [83.5, 1399.0], [83.6, 1402.0], [83.7, 1406.0], [83.8, 1408.0], [83.9, 1411.0], [84.0, 1415.0], [84.1, 1416.0], [84.2, 1418.0], [84.3, 1420.0], [84.4, 1422.0], [84.5, 1425.0], [84.6, 1428.0], [84.7, 1430.0], [84.8, 1432.0], [84.9, 1433.0], [85.0, 1434.0], [85.1, 1436.0], [85.2, 1438.0], [85.3, 1444.0], [85.4, 1447.0], [85.5, 1448.0], [85.6, 1451.0], [85.7, 1455.0], [85.8, 1456.0], [85.9, 1458.0], [86.0, 1461.0], [86.1, 1464.0], [86.2, 1468.0], [86.3, 1473.0], [86.4, 1476.0], [86.5, 1478.0], [86.6, 1481.0], [86.7, 1482.0], [86.8, 1485.0], [86.9, 1488.0], [87.0, 1492.0], [87.1, 1494.0], [87.2, 1498.0], [87.3, 1501.0], [87.4, 1502.0], [87.5, 1506.0], [87.6, 1509.0], [87.7, 1511.0], [87.8, 1513.0], [87.9, 1517.0], [88.0, 1521.0], [88.1, 1522.0], [88.2, 1527.0], [88.3, 1531.0], [88.4, 1537.0], [88.5, 1543.0], [88.6, 1546.0], [88.7, 1549.0], [88.8, 1552.0], [88.9, 1557.0], [89.0, 1560.0], [89.1, 1563.0], [89.2, 1575.0], [89.3, 1577.0], [89.4, 1583.0], [89.5, 1588.0], [89.6, 1591.0], [89.7, 1596.0], [89.8, 1605.0], [89.9, 1607.0], [90.0, 1609.0], [90.1, 1613.0], [90.2, 1616.0], [90.3, 1620.0], [90.4, 1623.0], [90.5, 1626.0], [90.6, 1634.0], [90.7, 1638.0], [90.8, 1645.0], [90.9, 1649.0], [91.0, 1655.0], [91.1, 1668.0], [91.2, 1675.0], [91.3, 1680.0], [91.4, 1687.0], [91.5, 1695.0], [91.6, 1700.0], [91.7, 1714.0], [91.8, 1727.0], [91.9, 1733.0], [92.0, 1743.0], [92.1, 1746.0], [92.2, 1759.0], [92.3, 1774.0], [92.4, 1782.0], [92.5, 1788.0], [92.6, 1798.0], [92.7, 1813.0], [92.8, 1830.0], [92.9, 1836.0], [93.0, 1852.0], [93.1, 1862.0], [93.2, 1874.0], [93.3, 1880.0], [93.4, 1888.0], [93.5, 1900.0], [93.6, 1906.0], [93.7, 1911.0], [93.8, 1925.0], [93.9, 1937.0], [94.0, 1943.0], [94.1, 1946.0], [94.2, 1951.0], [94.3, 1967.0], [94.4, 1980.0], [94.5, 1984.0], [94.6, 1998.0], [94.7, 2007.0], [94.8, 2018.0], [94.9, 2035.0], [95.0, 2040.0], [95.1, 2048.0], [95.2, 2060.0], [95.3, 2075.0], [95.4, 2087.0], [95.5, 2102.0], [95.6, 2120.0], [95.7, 2124.0], [95.8, 2136.0], [95.9, 2156.0], [96.0, 2169.0], [96.1, 2178.0], [96.2, 2194.0], [96.3, 2203.0], [96.4, 2220.0], [96.5, 2228.0], [96.6, 2235.0], [96.7, 2242.0], [96.8, 2247.0], [96.9, 2255.0], [97.0, 2266.0], [97.1, 2277.0], [97.2, 2294.0], [97.3, 2312.0], [97.4, 2331.0], [97.5, 2351.0], [97.6, 2367.0], [97.7, 2383.0], [97.8, 2409.0], [97.9, 2423.0], [98.0, 2459.0], [98.1, 2490.0], [98.2, 2524.0], [98.3, 2554.0], [98.4, 2612.0], [98.5, 2672.0], [98.6, 2700.0], [98.7, 2715.0], [98.8, 2793.0], [98.9, 2840.0], [99.0, 3008.0], [99.1, 3109.0], [99.2, 3189.0], [99.3, 3366.0], [99.4, 3482.0], [99.5, 3737.0], [99.6, 3910.0], [99.7, 4376.0], [99.8, 4882.0], [99.9, 5541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 587.0, "series": [{"data": [[600.0, 367.0], [700.0, 311.0], [800.0, 273.0], [900.0, 286.0], [1000.0, 311.0], [1100.0, 242.0], [1200.0, 223.0], [1300.0, 212.0], [1400.0, 194.0], [1500.0, 127.0], [1600.0, 97.0], [1700.0, 53.0], [1800.0, 46.0], [1900.0, 60.0], [2000.0, 44.0], [2100.0, 37.0], [2200.0, 53.0], [2300.0, 28.0], [2400.0, 20.0], [2500.0, 12.0], [2600.0, 11.0], [2700.0, 13.0], [2800.0, 5.0], [2900.0, 3.0], [3000.0, 5.0], [3100.0, 7.0], [3300.0, 5.0], [3400.0, 4.0], [3500.0, 2.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4300.0, 2.0], [4400.0, 1.0], [4600.0, 3.0], [4800.0, 1.0], [5000.0, 2.0], [5200.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [8600.0, 1.0], [100.0, 52.0], [200.0, 547.0], [300.0, 425.0], [400.0, 587.0], [500.0, 499.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 660.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2917.0, "series": [{"data": [[0.0, 1613.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2917.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 660.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.761904761904761, "minX": 1.6038387E12, "maxY": 10.0, "series": [{"data": [[1.60383876E12, 10.0], [1.60383906E12, 10.0], [1.60383888E12, 10.0], [1.60383894E12, 10.0], [1.6038387E12, 10.0], [1.60383912E12, 10.0], [1.60383918E12, 9.761904761904761], [1.60383882E12, 10.0], [1.603839E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 593.0, "minX": 1.0, "maxY": 2251.0, "series": [{"data": [[8.0, 754.0], [4.0, 593.0], [2.0, 1258.0], [1.0, 2251.0], [9.0, 2018.0], [10.0, 893.2966608762791], [5.0, 1950.0], [6.0, 689.0], [3.0, 722.0], [7.0, 1295.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 893.9691714836229]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1418.4833333333333, "minX": 1.6038387E12, "maxY": 3614466.05, "series": [{"data": [[1.60383876E12, 2483737.9166666665], [1.60383906E12, 3614466.05], [1.60383888E12, 3443285.6], [1.60383894E12, 3115984.8333333335], [1.6038387E12, 1308822.8666666667], [1.60383912E12, 3116277.1166666667], [1.60383918E12, 881492.8333333334], [1.60383882E12, 3447328.65], [1.603839E12, 2560703.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60383876E12, 5119.55], [1.60383906E12, 5315.65], [1.60383888E12, 5508.283333333334], [1.60383894E12, 4263.316666666667], [1.6038387E12, 1424.3666666666666], [1.60383912E12, 5518.883333333333], [1.60383918E12, 1418.4833333333333], [1.60383882E12, 4954.516666666666], [1.603839E12, 5054.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 821.0261348005497, "minX": 1.6038387E12, "maxY": 1209.8497409326424, "series": [{"data": [[1.60383876E12, 853.74011299435], [1.60383906E12, 844.460674157303], [1.60383888E12, 829.4731774415394], [1.60383894E12, 1037.3518197573653], [1.6038387E12, 1209.8497409326424], [1.60383912E12, 821.0261348005497], [1.60383918E12, 1097.3915343915342], [1.60383882E12, 899.750755287009], [1.603839E12, 861.8532374100716]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 819.5075653370027, "minX": 1.6038387E12, "maxY": 1207.0362694300522, "series": [{"data": [[1.60383876E12, 852.153954802261], [1.60383906E12, 842.5435393258429], [1.60383888E12, 827.4621733149933], [1.60383894E12, 1035.5285961871757], [1.6038387E12, 1207.0362694300522], [1.60383912E12, 819.5075653370027], [1.60383918E12, 1096.0687830687827], [1.60383882E12, 897.2598187311174], [1.603839E12, 860.3741007194251]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6038387E12, "maxY": 0.49222797927461187, "series": [{"data": [[1.60383876E12, 0.0155367231638418], [1.60383906E12, 0.030898876404494437], [1.60383888E12, 0.01237964236588721], [1.60383894E12, 0.019064124783362186], [1.6038387E12, 0.49222797927461187], [1.60383912E12, 0.012379642365887211], [1.60383918E12, 0.0], [1.60383882E12, 0.024169184290030232], [1.603839E12, 0.014388489208633093]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.6038387E12, "maxY": 8648.0, "series": [{"data": [[1.60383876E12, 5712.0], [1.60383906E12, 3134.0], [1.60383888E12, 4222.0], [1.60383894E12, 8648.0], [1.6038387E12, 5541.0], [1.60383912E12, 2896.0], [1.60383918E12, 4096.0], [1.60383882E12, 4657.0], [1.603839E12, 5860.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60383876E12, 203.76199966192246], [1.60383906E12, 198.0], [1.60383888E12, 192.10399965286254], [1.60383894E12, 203.41399903535844], [1.6038387E12, 208.49199990749358], [1.60383912E12, 198.55199982643128], [1.60383918E12, 229.62999759912492], [1.60383882E12, 198.96699984192847], [1.603839E12, 202.26399983406066]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60383876E12, 205.0191000676155], [1.60383906E12, 198.11740013599396], [1.60383888E12, 193.0], [1.60383894E12, 207.05540038585664], [1.6038387E12, 208.84120003700255], [1.60383912E12, 199.2072000694275], [1.60383918E12, 238.69300096035005], [1.60383882E12, 199.0], [1.603839E12, 202.89040006637572]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60383876E12, 204.47099983096123], [1.60383906E12, 198.0], [1.60383888E12, 192.83199982643129], [1.60383894E12, 205.4369995176792], [1.6038387E12, 208.6859999537468], [1.60383912E12, 198.91599991321564], [1.60383918E12, 234.66499879956245], [1.60383882E12, 199.0], [1.603839E12, 202.61199991703035]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60383876E12, 198.0], [1.60383906E12, 184.0], [1.60383888E12, 181.0], [1.60383894E12, 190.0], [1.6038387E12, 207.0], [1.60383912E12, 186.0], [1.60383918E12, 192.0], [1.60383882E12, 188.0], [1.603839E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60383876E12, 706.0], [1.60383906E12, 658.0], [1.60383888E12, 652.0], [1.60383894E12, 879.0], [1.6038387E12, 1011.0], [1.60383912E12, 680.0], [1.60383918E12, 956.0], [1.60383882E12, 690.5], [1.603839E12, 717.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 399.5, "minX": 1.0, "maxY": 2451.0, "series": [{"data": [[3.0, 1113.0], [4.0, 942.0], [5.0, 1309.5], [6.0, 1275.0], [7.0, 1143.5], [8.0, 1146.5], [9.0, 953.0], [10.0, 856.0], [11.0, 907.0], [12.0, 825.5], [13.0, 705.0], [14.0, 638.0], [15.0, 604.5], [1.0, 2451.0], [16.0, 568.5], [17.0, 507.0], [18.0, 479.5], [19.0, 461.5], [20.0, 439.0], [21.0, 421.0], [22.0, 429.5], [23.0, 406.0], [24.0, 425.5], [25.0, 432.0], [26.0, 399.5], [27.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 399.5, "minX": 1.0, "maxY": 2444.0, "series": [{"data": [[3.0, 1108.0], [4.0, 941.0], [5.0, 1308.0], [6.0, 1273.0], [7.0, 1139.0], [8.0, 1141.0], [9.0, 953.0], [10.0, 855.0], [11.0, 903.0], [12.0, 823.5], [13.0, 705.0], [14.0, 637.0], [15.0, 604.5], [1.0, 2444.0], [16.0, 567.0], [17.0, 507.0], [18.0, 479.5], [19.0, 461.0], [20.0, 438.5], [21.0, 420.5], [22.0, 429.5], [23.0, 405.0], [24.0, 425.5], [25.0, 432.0], [26.0, 399.5], [27.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.9833333333333334, "minX": 1.6038387E12, "maxY": 12.116666666666667, "series": [{"data": [[1.60383876E12, 11.8], [1.60383906E12, 11.866666666666667], [1.60383888E12, 12.116666666666667], [1.60383894E12, 9.616666666666667], [1.6038387E12, 3.3833333333333333], [1.60383912E12, 12.116666666666667], [1.60383918E12, 2.9833333333333334], [1.60383882E12, 11.033333333333333], [1.603839E12, 11.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.6038387E12, "maxY": 12.116666666666667, "series": [{"data": [[1.60383876E12, 11.8], [1.60383906E12, 11.866666666666667], [1.60383888E12, 12.116666666666667], [1.60383894E12, 9.616666666666667], [1.6038387E12, 3.216666666666667], [1.60383912E12, 12.116666666666667], [1.60383918E12, 3.15], [1.60383882E12, 11.033333333333333], [1.603839E12, 11.583333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60383918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.6038387E12, "maxY": 12.116666666666667, "series": [{"data": [[1.60383876E12, 11.8], [1.60383906E12, 11.866666666666667], [1.60383888E12, 12.116666666666667], [1.60383894E12, 9.616666666666667], [1.6038387E12, 3.216666666666667], [1.60383912E12, 12.116666666666667], [1.60383918E12, 3.15], [1.60383882E12, 11.033333333333333], [1.603839E12, 11.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.15, "minX": 1.6038387E12, "maxY": 12.116666666666667, "series": [{"data": [[1.60383876E12, 11.8], [1.60383906E12, 11.866666666666667], [1.60383888E12, 12.116666666666667], [1.60383894E12, 9.616666666666667], [1.6038387E12, 3.216666666666667], [1.60383912E12, 12.116666666666667], [1.60383918E12, 3.15], [1.60383882E12, 11.033333333333333], [1.603839E12, 11.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60383918E12, "title": "Total Transactions Per Second"}},
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

