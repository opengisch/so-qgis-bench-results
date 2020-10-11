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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 5545.0, "series": [{"data": [[0.0, 184.0], [0.1, 189.0], [0.2, 190.0], [0.3, 191.0], [0.4, 194.0], [0.5, 195.0], [0.6, 197.0], [0.7, 198.0], [0.8, 199.0], [0.9, 200.0], [1.0, 201.0], [1.1, 202.0], [1.2, 203.0], [1.3, 204.0], [1.4, 205.0], [1.5, 206.0], [1.6, 207.0], [1.7, 208.0], [1.8, 209.0], [1.9, 210.0], [2.0, 211.0], [2.1, 211.0], [2.2, 213.0], [2.3, 214.0], [2.4, 214.0], [2.5, 215.0], [2.6, 216.0], [2.7, 217.0], [2.8, 217.0], [2.9, 218.0], [3.0, 219.0], [3.1, 220.0], [3.2, 220.0], [3.3, 221.0], [3.4, 222.0], [3.5, 223.0], [3.6, 223.0], [3.7, 224.0], [3.8, 225.0], [3.9, 225.0], [4.0, 226.0], [4.1, 227.0], [4.2, 227.0], [4.3, 228.0], [4.4, 229.0], [4.5, 229.0], [4.6, 230.0], [4.7, 231.0], [4.8, 231.0], [4.9, 232.0], [5.0, 232.0], [5.1, 232.0], [5.2, 233.0], [5.3, 235.0], [5.4, 235.0], [5.5, 235.0], [5.6, 237.0], [5.7, 237.0], [5.8, 238.0], [5.9, 238.0], [6.0, 239.0], [6.1, 240.0], [6.2, 241.0], [6.3, 241.0], [6.4, 242.0], [6.5, 244.0], [6.6, 246.0], [6.7, 246.0], [6.8, 247.0], [6.9, 248.0], [7.0, 248.0], [7.1, 249.0], [7.2, 250.0], [7.3, 251.0], [7.4, 252.0], [7.5, 254.0], [7.6, 255.0], [7.7, 257.0], [7.8, 260.0], [7.9, 261.0], [8.0, 261.0], [8.1, 262.0], [8.2, 263.0], [8.3, 264.0], [8.4, 265.0], [8.5, 267.0], [8.6, 268.0], [8.7, 269.0], [8.8, 270.0], [8.9, 271.0], [9.0, 271.0], [9.1, 272.0], [9.2, 273.0], [9.3, 274.0], [9.4, 274.0], [9.5, 275.0], [9.6, 277.0], [9.7, 277.0], [9.8, 277.0], [9.9, 279.0], [10.0, 280.0], [10.1, 281.0], [10.2, 281.0], [10.3, 282.0], [10.4, 283.0], [10.5, 285.0], [10.6, 286.0], [10.7, 287.0], [10.8, 288.0], [10.9, 289.0], [11.0, 290.0], [11.1, 291.0], [11.2, 292.0], [11.3, 293.0], [11.4, 293.0], [11.5, 294.0], [11.6, 295.0], [11.7, 296.0], [11.8, 297.0], [11.9, 299.0], [12.0, 301.0], [12.1, 301.0], [12.2, 302.0], [12.3, 303.0], [12.4, 304.0], [12.5, 305.0], [12.6, 307.0], [12.7, 309.0], [12.8, 310.0], [12.9, 311.0], [13.0, 312.0], [13.1, 313.0], [13.2, 314.0], [13.3, 315.0], [13.4, 316.0], [13.5, 317.0], [13.6, 318.0], [13.7, 319.0], [13.8, 320.0], [13.9, 321.0], [14.0, 322.0], [14.1, 323.0], [14.2, 325.0], [14.3, 326.0], [14.4, 327.0], [14.5, 328.0], [14.6, 329.0], [14.7, 331.0], [14.8, 332.0], [14.9, 333.0], [15.0, 335.0], [15.1, 339.0], [15.2, 340.0], [15.3, 343.0], [15.4, 345.0], [15.5, 346.0], [15.6, 348.0], [15.7, 350.0], [15.8, 351.0], [15.9, 353.0], [16.0, 354.0], [16.1, 354.0], [16.2, 356.0], [16.3, 359.0], [16.4, 364.0], [16.5, 366.0], [16.6, 369.0], [16.7, 371.0], [16.8, 373.0], [16.9, 374.0], [17.0, 375.0], [17.1, 379.0], [17.2, 380.0], [17.3, 382.0], [17.4, 383.0], [17.5, 384.0], [17.6, 385.0], [17.7, 386.0], [17.8, 386.0], [17.9, 387.0], [18.0, 388.0], [18.1, 389.0], [18.2, 389.0], [18.3, 390.0], [18.4, 393.0], [18.5, 394.0], [18.6, 395.0], [18.7, 396.0], [18.8, 397.0], [18.9, 398.0], [19.0, 399.0], [19.1, 400.0], [19.2, 401.0], [19.3, 403.0], [19.4, 404.0], [19.5, 405.0], [19.6, 406.0], [19.7, 409.0], [19.8, 410.0], [19.9, 411.0], [20.0, 412.0], [20.1, 412.0], [20.2, 413.0], [20.3, 414.0], [20.4, 414.0], [20.5, 415.0], [20.6, 416.0], [20.7, 417.0], [20.8, 418.0], [20.9, 419.0], [21.0, 420.0], [21.1, 421.0], [21.2, 422.0], [21.3, 422.0], [21.4, 423.0], [21.5, 424.0], [21.6, 425.0], [21.7, 426.0], [21.8, 427.0], [21.9, 427.0], [22.0, 428.0], [22.1, 429.0], [22.2, 430.0], [22.3, 431.0], [22.4, 432.0], [22.5, 433.0], [22.6, 433.0], [22.7, 435.0], [22.8, 436.0], [22.9, 437.0], [23.0, 438.0], [23.1, 438.0], [23.2, 439.0], [23.3, 440.0], [23.4, 441.0], [23.5, 441.0], [23.6, 442.0], [23.7, 442.0], [23.8, 443.0], [23.9, 444.0], [24.0, 444.0], [24.1, 445.0], [24.2, 446.0], [24.3, 447.0], [24.4, 448.0], [24.5, 449.0], [24.6, 450.0], [24.7, 451.0], [24.8, 452.0], [24.9, 453.0], [25.0, 454.0], [25.1, 455.0], [25.2, 456.0], [25.3, 458.0], [25.4, 458.0], [25.5, 459.0], [25.6, 459.0], [25.7, 461.0], [25.8, 462.0], [25.9, 464.0], [26.0, 465.0], [26.1, 465.0], [26.2, 466.0], [26.3, 467.0], [26.4, 468.0], [26.5, 468.0], [26.6, 469.0], [26.7, 471.0], [26.8, 471.0], [26.9, 472.0], [27.0, 472.0], [27.1, 473.0], [27.2, 474.0], [27.3, 475.0], [27.4, 475.0], [27.5, 476.0], [27.6, 477.0], [27.7, 477.0], [27.8, 478.0], [27.9, 479.0], [28.0, 480.0], [28.1, 480.0], [28.2, 482.0], [28.3, 482.0], [28.4, 484.0], [28.5, 485.0], [28.6, 485.0], [28.7, 486.0], [28.8, 487.0], [28.9, 488.0], [29.0, 490.0], [29.1, 490.0], [29.2, 491.0], [29.3, 492.0], [29.4, 493.0], [29.5, 494.0], [29.6, 494.0], [29.7, 495.0], [29.8, 496.0], [29.9, 498.0], [30.0, 499.0], [30.1, 501.0], [30.2, 502.0], [30.3, 503.0], [30.4, 504.0], [30.5, 504.0], [30.6, 506.0], [30.7, 506.0], [30.8, 508.0], [30.9, 508.0], [31.0, 509.0], [31.1, 510.0], [31.2, 511.0], [31.3, 512.0], [31.4, 513.0], [31.5, 514.0], [31.6, 516.0], [31.7, 517.0], [31.8, 517.0], [31.9, 518.0], [32.0, 519.0], [32.1, 520.0], [32.2, 520.0], [32.3, 522.0], [32.4, 522.0], [32.5, 524.0], [32.6, 525.0], [32.7, 526.0], [32.8, 526.0], [32.9, 527.0], [33.0, 528.0], [33.1, 529.0], [33.2, 530.0], [33.3, 531.0], [33.4, 532.0], [33.5, 533.0], [33.6, 534.0], [33.7, 535.0], [33.8, 537.0], [33.9, 538.0], [34.0, 539.0], [34.1, 540.0], [34.2, 541.0], [34.3, 542.0], [34.4, 543.0], [34.5, 544.0], [34.6, 544.0], [34.7, 546.0], [34.8, 548.0], [34.9, 548.0], [35.0, 549.0], [35.1, 549.0], [35.2, 550.0], [35.3, 551.0], [35.4, 552.0], [35.5, 553.0], [35.6, 553.0], [35.7, 554.0], [35.8, 554.0], [35.9, 555.0], [36.0, 556.0], [36.1, 557.0], [36.2, 558.0], [36.3, 558.0], [36.4, 560.0], [36.5, 560.0], [36.6, 561.0], [36.7, 561.0], [36.8, 562.0], [36.9, 562.0], [37.0, 563.0], [37.1, 564.0], [37.2, 564.0], [37.3, 565.0], [37.4, 566.0], [37.5, 566.0], [37.6, 568.0], [37.7, 569.0], [37.8, 569.0], [37.9, 571.0], [38.0, 572.0], [38.1, 574.0], [38.2, 574.0], [38.3, 575.0], [38.4, 576.0], [38.5, 577.0], [38.6, 578.0], [38.7, 579.0], [38.8, 579.0], [38.9, 580.0], [39.0, 581.0], [39.1, 583.0], [39.2, 583.0], [39.3, 584.0], [39.4, 584.0], [39.5, 585.0], [39.6, 587.0], [39.7, 589.0], [39.8, 590.0], [39.9, 590.0], [40.0, 592.0], [40.1, 593.0], [40.2, 593.0], [40.3, 594.0], [40.4, 595.0], [40.5, 596.0], [40.6, 597.0], [40.7, 598.0], [40.8, 599.0], [40.9, 600.0], [41.0, 602.0], [41.1, 603.0], [41.2, 603.0], [41.3, 604.0], [41.4, 605.0], [41.5, 606.0], [41.6, 607.0], [41.7, 608.0], [41.8, 609.0], [41.9, 609.0], [42.0, 610.0], [42.1, 610.0], [42.2, 612.0], [42.3, 612.0], [42.4, 614.0], [42.5, 615.0], [42.6, 618.0], [42.7, 618.0], [42.8, 619.0], [42.9, 619.0], [43.0, 620.0], [43.1, 622.0], [43.2, 623.0], [43.3, 624.0], [43.4, 624.0], [43.5, 626.0], [43.6, 627.0], [43.7, 629.0], [43.8, 631.0], [43.9, 631.0], [44.0, 632.0], [44.1, 633.0], [44.2, 634.0], [44.3, 635.0], [44.4, 636.0], [44.5, 638.0], [44.6, 640.0], [44.7, 641.0], [44.8, 643.0], [44.9, 643.0], [45.0, 645.0], [45.1, 646.0], [45.2, 646.0], [45.3, 647.0], [45.4, 649.0], [45.5, 651.0], [45.6, 652.0], [45.7, 653.0], [45.8, 654.0], [45.9, 655.0], [46.0, 655.0], [46.1, 656.0], [46.2, 658.0], [46.3, 660.0], [46.4, 661.0], [46.5, 663.0], [46.6, 664.0], [46.7, 665.0], [46.8, 666.0], [46.9, 668.0], [47.0, 669.0], [47.1, 670.0], [47.2, 671.0], [47.3, 673.0], [47.4, 676.0], [47.5, 678.0], [47.6, 679.0], [47.7, 682.0], [47.8, 683.0], [47.9, 686.0], [48.0, 687.0], [48.1, 689.0], [48.2, 690.0], [48.3, 691.0], [48.4, 692.0], [48.5, 694.0], [48.6, 696.0], [48.7, 697.0], [48.8, 698.0], [48.9, 698.0], [49.0, 699.0], [49.1, 700.0], [49.2, 701.0], [49.3, 703.0], [49.4, 705.0], [49.5, 707.0], [49.6, 708.0], [49.7, 711.0], [49.8, 712.0], [49.9, 712.0], [50.0, 715.0], [50.1, 718.0], [50.2, 720.0], [50.3, 721.0], [50.4, 723.0], [50.5, 725.0], [50.6, 728.0], [50.7, 730.0], [50.8, 732.0], [50.9, 733.0], [51.0, 734.0], [51.1, 736.0], [51.2, 737.0], [51.3, 738.0], [51.4, 739.0], [51.5, 740.0], [51.6, 741.0], [51.7, 742.0], [51.8, 745.0], [51.9, 746.0], [52.0, 747.0], [52.1, 749.0], [52.2, 751.0], [52.3, 752.0], [52.4, 754.0], [52.5, 755.0], [52.6, 757.0], [52.7, 758.0], [52.8, 759.0], [52.9, 762.0], [53.0, 764.0], [53.1, 767.0], [53.2, 768.0], [53.3, 770.0], [53.4, 772.0], [53.5, 773.0], [53.6, 774.0], [53.7, 776.0], [53.8, 779.0], [53.9, 780.0], [54.0, 782.0], [54.1, 784.0], [54.2, 786.0], [54.3, 788.0], [54.4, 790.0], [54.5, 791.0], [54.6, 793.0], [54.7, 794.0], [54.8, 797.0], [54.9, 799.0], [55.0, 800.0], [55.1, 802.0], [55.2, 805.0], [55.3, 807.0], [55.4, 808.0], [55.5, 809.0], [55.6, 810.0], [55.7, 813.0], [55.8, 814.0], [55.9, 816.0], [56.0, 819.0], [56.1, 821.0], [56.2, 821.0], [56.3, 822.0], [56.4, 825.0], [56.5, 825.0], [56.6, 826.0], [56.7, 828.0], [56.8, 830.0], [56.9, 832.0], [57.0, 833.0], [57.1, 835.0], [57.2, 836.0], [57.3, 838.0], [57.4, 842.0], [57.5, 843.0], [57.6, 844.0], [57.7, 846.0], [57.8, 848.0], [57.9, 848.0], [58.0, 849.0], [58.1, 851.0], [58.2, 854.0], [58.3, 856.0], [58.4, 858.0], [58.5, 860.0], [58.6, 862.0], [58.7, 863.0], [58.8, 865.0], [58.9, 868.0], [59.0, 874.0], [59.1, 875.0], [59.2, 877.0], [59.3, 878.0], [59.4, 880.0], [59.5, 884.0], [59.6, 885.0], [59.7, 886.0], [59.8, 889.0], [59.9, 890.0], [60.0, 891.0], [60.1, 893.0], [60.2, 894.0], [60.3, 895.0], [60.4, 898.0], [60.5, 898.0], [60.6, 900.0], [60.7, 901.0], [60.8, 903.0], [60.9, 903.0], [61.0, 906.0], [61.1, 907.0], [61.2, 908.0], [61.3, 911.0], [61.4, 912.0], [61.5, 914.0], [61.6, 915.0], [61.7, 916.0], [61.8, 918.0], [61.9, 920.0], [62.0, 921.0], [62.1, 922.0], [62.2, 927.0], [62.3, 928.0], [62.4, 930.0], [62.5, 932.0], [62.6, 933.0], [62.7, 934.0], [62.8, 935.0], [62.9, 937.0], [63.0, 939.0], [63.1, 941.0], [63.2, 943.0], [63.3, 945.0], [63.4, 946.0], [63.5, 947.0], [63.6, 948.0], [63.7, 949.0], [63.8, 952.0], [63.9, 953.0], [64.0, 955.0], [64.1, 956.0], [64.2, 957.0], [64.3, 958.0], [64.4, 960.0], [64.5, 961.0], [64.6, 962.0], [64.7, 963.0], [64.8, 966.0], [64.9, 966.0], [65.0, 969.0], [65.1, 973.0], [65.2, 974.0], [65.3, 976.0], [65.4, 977.0], [65.5, 977.0], [65.6, 979.0], [65.7, 981.0], [65.8, 983.0], [65.9, 984.0], [66.0, 986.0], [66.1, 987.0], [66.2, 988.0], [66.3, 990.0], [66.4, 993.0], [66.5, 995.0], [66.6, 996.0], [66.7, 997.0], [66.8, 1001.0], [66.9, 1003.0], [67.0, 1005.0], [67.1, 1007.0], [67.2, 1008.0], [67.3, 1009.0], [67.4, 1010.0], [67.5, 1012.0], [67.6, 1013.0], [67.7, 1016.0], [67.8, 1017.0], [67.9, 1019.0], [68.0, 1019.0], [68.1, 1022.0], [68.2, 1022.0], [68.3, 1024.0], [68.4, 1026.0], [68.5, 1028.0], [68.6, 1029.0], [68.7, 1030.0], [68.8, 1031.0], [68.9, 1032.0], [69.0, 1035.0], [69.1, 1036.0], [69.2, 1038.0], [69.3, 1040.0], [69.4, 1042.0], [69.5, 1044.0], [69.6, 1045.0], [69.7, 1048.0], [69.8, 1050.0], [69.9, 1052.0], [70.0, 1053.0], [70.1, 1055.0], [70.2, 1056.0], [70.3, 1058.0], [70.4, 1060.0], [70.5, 1063.0], [70.6, 1064.0], [70.7, 1068.0], [70.8, 1070.0], [70.9, 1071.0], [71.0, 1074.0], [71.1, 1077.0], [71.2, 1079.0], [71.3, 1080.0], [71.4, 1082.0], [71.5, 1083.0], [71.6, 1085.0], [71.7, 1086.0], [71.8, 1087.0], [71.9, 1089.0], [72.0, 1090.0], [72.1, 1091.0], [72.2, 1093.0], [72.3, 1097.0], [72.4, 1098.0], [72.5, 1102.0], [72.6, 1103.0], [72.7, 1104.0], [72.8, 1107.0], [72.9, 1108.0], [73.0, 1110.0], [73.1, 1112.0], [73.2, 1114.0], [73.3, 1116.0], [73.4, 1118.0], [73.5, 1120.0], [73.6, 1121.0], [73.7, 1123.0], [73.8, 1125.0], [73.9, 1127.0], [74.0, 1128.0], [74.1, 1132.0], [74.2, 1134.0], [74.3, 1137.0], [74.4, 1139.0], [74.5, 1141.0], [74.6, 1142.0], [74.7, 1145.0], [74.8, 1147.0], [74.9, 1151.0], [75.0, 1153.0], [75.1, 1154.0], [75.2, 1156.0], [75.3, 1161.0], [75.4, 1164.0], [75.5, 1167.0], [75.6, 1169.0], [75.7, 1170.0], [75.8, 1174.0], [75.9, 1175.0], [76.0, 1178.0], [76.1, 1181.0], [76.2, 1182.0], [76.3, 1183.0], [76.4, 1185.0], [76.5, 1188.0], [76.6, 1191.0], [76.7, 1197.0], [76.8, 1198.0], [76.9, 1203.0], [77.0, 1206.0], [77.1, 1208.0], [77.2, 1211.0], [77.3, 1212.0], [77.4, 1215.0], [77.5, 1218.0], [77.6, 1220.0], [77.7, 1221.0], [77.8, 1222.0], [77.9, 1224.0], [78.0, 1226.0], [78.1, 1230.0], [78.2, 1234.0], [78.3, 1237.0], [78.4, 1239.0], [78.5, 1242.0], [78.6, 1244.0], [78.7, 1248.0], [78.8, 1250.0], [78.9, 1253.0], [79.0, 1255.0], [79.1, 1259.0], [79.2, 1260.0], [79.3, 1262.0], [79.4, 1263.0], [79.5, 1266.0], [79.6, 1272.0], [79.7, 1274.0], [79.8, 1280.0], [79.9, 1281.0], [80.0, 1283.0], [80.1, 1287.0], [80.2, 1289.0], [80.3, 1291.0], [80.4, 1293.0], [80.5, 1295.0], [80.6, 1297.0], [80.7, 1302.0], [80.8, 1304.0], [80.9, 1304.0], [81.0, 1306.0], [81.1, 1310.0], [81.2, 1312.0], [81.3, 1315.0], [81.4, 1316.0], [81.5, 1318.0], [81.6, 1320.0], [81.7, 1320.0], [81.8, 1322.0], [81.9, 1325.0], [82.0, 1327.0], [82.1, 1329.0], [82.2, 1331.0], [82.3, 1334.0], [82.4, 1335.0], [82.5, 1337.0], [82.6, 1339.0], [82.7, 1342.0], [82.8, 1343.0], [82.9, 1347.0], [83.0, 1350.0], [83.1, 1351.0], [83.2, 1352.0], [83.3, 1354.0], [83.4, 1355.0], [83.5, 1357.0], [83.6, 1360.0], [83.7, 1363.0], [83.8, 1366.0], [83.9, 1369.0], [84.0, 1372.0], [84.1, 1374.0], [84.2, 1376.0], [84.3, 1382.0], [84.4, 1383.0], [84.5, 1386.0], [84.6, 1390.0], [84.7, 1393.0], [84.8, 1395.0], [84.9, 1396.0], [85.0, 1398.0], [85.1, 1402.0], [85.2, 1404.0], [85.3, 1406.0], [85.4, 1410.0], [85.5, 1412.0], [85.6, 1414.0], [85.7, 1415.0], [85.8, 1417.0], [85.9, 1418.0], [86.0, 1421.0], [86.1, 1423.0], [86.2, 1423.0], [86.3, 1425.0], [86.4, 1430.0], [86.5, 1434.0], [86.6, 1438.0], [86.7, 1441.0], [86.8, 1445.0], [86.9, 1447.0], [87.0, 1450.0], [87.1, 1452.0], [87.2, 1456.0], [87.3, 1459.0], [87.4, 1460.0], [87.5, 1464.0], [87.6, 1469.0], [87.7, 1477.0], [87.8, 1479.0], [87.9, 1483.0], [88.0, 1487.0], [88.1, 1491.0], [88.2, 1493.0], [88.3, 1496.0], [88.4, 1497.0], [88.5, 1503.0], [88.6, 1505.0], [88.7, 1513.0], [88.8, 1517.0], [88.9, 1525.0], [89.0, 1529.0], [89.1, 1535.0], [89.2, 1537.0], [89.3, 1541.0], [89.4, 1544.0], [89.5, 1547.0], [89.6, 1551.0], [89.7, 1554.0], [89.8, 1560.0], [89.9, 1563.0], [90.0, 1568.0], [90.1, 1571.0], [90.2, 1576.0], [90.3, 1582.0], [90.4, 1586.0], [90.5, 1592.0], [90.6, 1597.0], [90.7, 1601.0], [90.8, 1606.0], [90.9, 1610.0], [91.0, 1616.0], [91.1, 1618.0], [91.2, 1622.0], [91.3, 1634.0], [91.4, 1641.0], [91.5, 1647.0], [91.6, 1656.0], [91.7, 1663.0], [91.8, 1672.0], [91.9, 1678.0], [92.0, 1680.0], [92.1, 1686.0], [92.2, 1694.0], [92.3, 1698.0], [92.4, 1702.0], [92.5, 1710.0], [92.6, 1719.0], [92.7, 1727.0], [92.8, 1738.0], [92.9, 1745.0], [93.0, 1754.0], [93.1, 1768.0], [93.2, 1775.0], [93.3, 1783.0], [93.4, 1792.0], [93.5, 1802.0], [93.6, 1815.0], [93.7, 1824.0], [93.8, 1827.0], [93.9, 1835.0], [94.0, 1846.0], [94.1, 1854.0], [94.2, 1860.0], [94.3, 1871.0], [94.4, 1883.0], [94.5, 1901.0], [94.6, 1911.0], [94.7, 1929.0], [94.8, 1935.0], [94.9, 1945.0], [95.0, 1953.0], [95.1, 1962.0], [95.2, 1974.0], [95.3, 1990.0], [95.4, 1999.0], [95.5, 2004.0], [95.6, 2025.0], [95.7, 2029.0], [95.8, 2037.0], [95.9, 2045.0], [96.0, 2064.0], [96.1, 2081.0], [96.2, 2101.0], [96.3, 2118.0], [96.4, 2129.0], [96.5, 2156.0], [96.6, 2166.0], [96.7, 2182.0], [96.8, 2189.0], [96.9, 2208.0], [97.0, 2215.0], [97.1, 2235.0], [97.2, 2242.0], [97.3, 2261.0], [97.4, 2281.0], [97.5, 2293.0], [97.6, 2316.0], [97.7, 2344.0], [97.8, 2356.0], [97.9, 2394.0], [98.0, 2425.0], [98.1, 2452.0], [98.2, 2464.0], [98.3, 2503.0], [98.4, 2527.0], [98.5, 2554.0], [98.6, 2610.0], [98.7, 2672.0], [98.8, 2704.0], [98.9, 2754.0], [99.0, 2830.0], [99.1, 2905.0], [99.2, 3012.0], [99.3, 3055.0], [99.4, 3209.0], [99.5, 3392.0], [99.6, 3637.0], [99.7, 3827.0], [99.8, 4385.0], [99.9, 4719.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 575.0, "series": [{"data": [[600.0, 423.0], [700.0, 308.0], [800.0, 293.0], [900.0, 318.0], [1000.0, 296.0], [1100.0, 229.0], [1200.0, 197.0], [1300.0, 227.0], [1400.0, 177.0], [1500.0, 116.0], [1600.0, 89.0], [100.0, 45.0], [1700.0, 56.0], [1800.0, 54.0], [1900.0, 48.0], [2000.0, 40.0], [2100.0, 36.0], [2300.0, 21.0], [2200.0, 35.0], [2400.0, 17.0], [2500.0, 15.0], [2600.0, 11.0], [2800.0, 6.0], [2700.0, 8.0], [2900.0, 7.0], [3000.0, 6.0], [3100.0, 4.0], [3200.0, 5.0], [3300.0, 2.0], [200.0, 575.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 1.0], [4300.0, 2.0], [4100.0, 2.0], [4400.0, 4.0], [300.0, 369.0], [4700.0, 2.0], [4900.0, 2.0], [5400.0, 1.0], [5500.0, 1.0], [400.0, 570.0], [500.0, 562.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 600.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3028.0, "series": [{"data": [[0.0, 1562.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3028.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 600.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.83754512635379, "minX": 1.60237452E12, "maxY": 10.0, "series": [{"data": [[1.60237464E12, 10.0], [1.60237482E12, 10.0], [1.60237452E12, 10.0], [1.602375E12, 9.83754512635379], [1.6023747E12, 10.0], [1.60237488E12, 10.0], [1.60237458E12, 10.0], [1.60237476E12, 10.0], [1.60237494E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602375E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 353.0, "minX": 1.0, "maxY": 3392.0, "series": [{"data": [[8.0, 1999.0], [4.0, 1882.0], [2.0, 1145.0], [1.0, 3392.0], [9.0, 353.0], [10.0, 868.2235089751018], [5.0, 1329.0], [6.0, 912.0], [3.0, 878.0], [7.0, 1546.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 869.306743737958]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.683333333333334, "minX": 1.60237452E12, "maxY": 3514359.5, "series": [{"data": [[1.60237464E12, 3050735.75], [1.60237482E12, 2767137.95], [1.60237452E12, 143.4], [1.602375E12, 1445728.7333333334], [1.6023747E12, 3514359.5], [1.60237488E12, 3489608.1166666667], [1.60237458E12, 3253936.5], [1.60237476E12, 3351292.1333333333], [1.60237494E12, 3099978.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237464E12, 5270.516666666666], [1.60237482E12, 4721.033333333334], [1.60237452E12, 7.683333333333334], [1.602375E12, 2086.3333333333335], [1.6023747E12, 5579.833333333333], [1.60237488E12, 5663.683333333333], [1.60237458E12, 4735.35], [1.60237476E12, 4640.633333333333], [1.60237494E12, 5872.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602375E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 765.1873385012924, "minX": 1.60237452E12, "maxY": 2807.0, "series": [{"data": [[1.60237464E12, 846.580056179775], [1.60237482E12, 939.4179331306984], [1.60237452E12, 2807.0], [1.602375E12, 1098.3971119133573], [1.6023747E12, 812.6603260869564], [1.60237488E12, 787.4750000000005], [1.60237458E12, 941.888379204893], [1.60237476E12, 936.7119741100325], [1.60237494E12, 765.1873385012924]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602375E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 763.5116279069778, "minX": 1.60237452E12, "maxY": 2802.0, "series": [{"data": [[1.60237464E12, 844.4129213483145], [1.60237482E12, 937.7826747720354], [1.60237452E12, 2802.0], [1.602375E12, 1096.4187725631778], [1.6023747E12, 810.4429347826086], [1.60237488E12, 785.7065789473688], [1.60237458E12, 939.7660550458734], [1.60237476E12, 934.4223300970874], [1.60237494E12, 763.5116279069778]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602375E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0103359173126615, "minX": 1.60237452E12, "maxY": 37.0, "series": [{"data": [[1.60237464E12, 0.026685393258426962], [1.60237482E12, 0.016717325227963528], [1.60237452E12, 37.0], [1.602375E12, 0.01805054151624547], [1.6023747E12, 0.010869565217391302], [1.60237488E12, 0.01710526315789474], [1.60237458E12, 0.09174311926605505], [1.60237476E12, 0.012944983818770244], [1.60237494E12, 0.0103359173126615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602375E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60237452E12, "maxY": 5545.0, "series": [{"data": [[1.60237464E12, 4406.0], [1.60237482E12, 5545.0], [1.60237452E12, 2807.0], [1.602375E12, 4147.0], [1.6023747E12, 3187.0], [1.60237488E12, 2584.0], [1.60237458E12, 5472.0], [1.60237476E12, 4777.0], [1.60237494E12, 2610.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237464E12, 200.0], [1.60237482E12, 219.93099984288216], [1.60237452E12, 2807.0], [1.602375E12, 212.5059998011589], [1.6023747E12, 194.0], [1.60237488E12, 201.84899981856347], [1.60237458E12, 202.89499984383582], [1.60237476E12, 200.7129995572567], [1.60237494E12, 190.9749998152256]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237464E12, 200.05870006799697], [1.60237482E12, 220.0], [1.60237452E12, 2807.0], [1.602375E12, 213.25660007953644], [1.6023747E12, 194.8889002108574], [1.60237488E12, 204.66950036287307], [1.60237458E12, 205.42250031232834], [1.60237476E12, 202.12810005903245], [1.60237494E12, 191.67250007390976]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237464E12, 200.0], [1.60237482E12, 220.0], [1.60237452E12, 2807.0], [1.602375E12, 212.92299990057944], [1.6023747E12, 194.00449973642827], [1.60237488E12, 203.14749954640865], [1.60237458E12, 204.11249960958958], [1.60237476E12, 201.64149977862834], [1.60237494E12, 191.3624999076128]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237464E12, 184.0], [1.60237482E12, 209.0], [1.60237452E12, 2807.0], [1.602375E12, 204.0], [1.6023747E12, 185.0], [1.60237488E12, 190.0], [1.60237458E12, 190.0], [1.60237476E12, 192.0], [1.60237494E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237464E12, 614.5], [1.60237482E12, 799.5], [1.60237452E12, 2807.0], [1.602375E12, 927.0], [1.6023747E12, 636.5], [1.60237488E12, 607.5], [1.60237458E12, 784.5], [1.60237476E12, 824.5], [1.60237494E12, 618.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602375E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 415.0, "minX": 1.0, "maxY": 3099.5, "series": [{"data": [[2.0, 1715.5], [3.0, 1487.0], [4.0, 918.0], [5.0, 1439.0], [6.0, 1166.0], [7.0, 1183.0], [8.0, 1071.0], [9.0, 962.0], [10.0, 919.0], [11.0, 835.0], [12.0, 745.5], [13.0, 750.0], [14.0, 667.0], [15.0, 655.0], [1.0, 3099.5], [16.0, 616.5], [17.0, 533.0], [18.0, 520.5], [19.0, 456.0], [20.0, 440.0], [21.0, 444.5], [22.0, 446.5], [23.0, 446.0], [24.0, 419.0], [25.0, 422.0], [26.0, 425.5], [27.0, 415.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 414.0, "minX": 1.0, "maxY": 3091.0, "series": [{"data": [[2.0, 1707.5], [3.0, 1482.5], [4.0, 915.5], [5.0, 1439.0], [6.0, 1162.5], [7.0, 1179.0], [8.0, 1067.5], [9.0, 961.0], [10.0, 917.0], [11.0, 833.0], [12.0, 745.5], [13.0, 749.0], [14.0, 667.0], [15.0, 655.0], [1.0, 3091.0], [16.0, 616.5], [17.0, 533.0], [18.0, 520.0], [19.0, 455.5], [20.0, 439.5], [21.0, 444.0], [22.0, 446.5], [23.0, 446.0], [24.0, 419.0], [25.0, 422.0], [26.0, 425.5], [27.0, 414.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60237452E12, "maxY": 12.9, "series": [{"data": [[1.60237464E12, 11.866666666666667], [1.60237482E12, 10.966666666666667], [1.60237452E12, 0.18333333333333332], [1.602375E12, 4.45], [1.6023747E12, 12.266666666666667], [1.60237488E12, 12.666666666666666], [1.60237458E12, 10.9], [1.60237476E12, 10.3], [1.60237494E12, 12.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602375E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60237452E12, "maxY": 12.9, "series": [{"data": [[1.60237464E12, 11.866666666666667], [1.60237482E12, 10.966666666666667], [1.60237452E12, 0.016666666666666666], [1.602375E12, 4.616666666666666], [1.6023747E12, 12.266666666666667], [1.60237488E12, 12.666666666666666], [1.60237458E12, 10.9], [1.60237476E12, 10.3], [1.60237494E12, 12.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602375E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60237452E12, "maxY": 12.9, "series": [{"data": [[1.60237464E12, 11.866666666666667], [1.60237482E12, 10.966666666666667], [1.60237452E12, 0.016666666666666666], [1.602375E12, 4.616666666666666], [1.6023747E12, 12.266666666666667], [1.60237488E12, 12.666666666666666], [1.60237458E12, 10.9], [1.60237476E12, 10.3], [1.60237494E12, 12.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602375E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60237452E12, "maxY": 12.9, "series": [{"data": [[1.60237464E12, 11.866666666666667], [1.60237482E12, 10.966666666666667], [1.60237452E12, 0.016666666666666666], [1.602375E12, 4.616666666666666], [1.6023747E12, 12.266666666666667], [1.60237488E12, 12.666666666666666], [1.60237458E12, 10.9], [1.60237476E12, 10.3], [1.60237494E12, 12.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602375E12, "title": "Total Transactions Per Second"}},
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

