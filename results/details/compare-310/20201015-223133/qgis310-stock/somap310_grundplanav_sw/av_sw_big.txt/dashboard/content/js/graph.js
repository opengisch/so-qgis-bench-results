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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 8644.0, "series": [{"data": [[0.0, 179.0], [0.1, 185.0], [0.2, 185.0], [0.3, 188.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 190.0], [0.8, 191.0], [0.9, 191.0], [1.0, 192.0], [1.1, 193.0], [1.2, 194.0], [1.3, 194.0], [1.4, 195.0], [1.5, 196.0], [1.6, 197.0], [1.7, 197.0], [1.8, 198.0], [1.9, 199.0], [2.0, 199.0], [2.1, 200.0], [2.2, 201.0], [2.3, 201.0], [2.4, 202.0], [2.5, 202.0], [2.6, 203.0], [2.7, 204.0], [2.8, 205.0], [2.9, 205.0], [3.0, 206.0], [3.1, 207.0], [3.2, 208.0], [3.3, 209.0], [3.4, 209.0], [3.5, 210.0], [3.6, 211.0], [3.7, 212.0], [3.8, 213.0], [3.9, 214.0], [4.0, 214.0], [4.1, 215.0], [4.2, 215.0], [4.3, 216.0], [4.4, 218.0], [4.5, 218.0], [4.6, 219.0], [4.7, 220.0], [4.8, 220.0], [4.9, 221.0], [5.0, 222.0], [5.1, 223.0], [5.2, 224.0], [5.3, 225.0], [5.4, 225.0], [5.5, 226.0], [5.6, 227.0], [5.7, 227.0], [5.8, 229.0], [5.9, 229.0], [6.0, 231.0], [6.1, 232.0], [6.2, 233.0], [6.3, 233.0], [6.4, 234.0], [6.5, 235.0], [6.6, 236.0], [6.7, 237.0], [6.8, 238.0], [6.9, 240.0], [7.0, 241.0], [7.1, 242.0], [7.2, 244.0], [7.3, 246.0], [7.4, 247.0], [7.5, 249.0], [7.6, 250.0], [7.7, 251.0], [7.8, 252.0], [7.9, 252.0], [8.0, 253.0], [8.1, 255.0], [8.2, 256.0], [8.3, 258.0], [8.4, 259.0], [8.5, 261.0], [8.6, 263.0], [8.7, 264.0], [8.8, 265.0], [8.9, 266.0], [9.0, 267.0], [9.1, 267.0], [9.2, 268.0], [9.3, 268.0], [9.4, 269.0], [9.5, 270.0], [9.6, 271.0], [9.7, 272.0], [9.8, 272.0], [9.9, 273.0], [10.0, 274.0], [10.1, 275.0], [10.2, 276.0], [10.3, 276.0], [10.4, 277.0], [10.5, 277.0], [10.6, 278.0], [10.7, 279.0], [10.8, 280.0], [10.9, 280.0], [11.0, 281.0], [11.1, 281.0], [11.2, 282.0], [11.3, 282.0], [11.4, 282.0], [11.5, 283.0], [11.6, 284.0], [11.7, 286.0], [11.8, 286.0], [11.9, 287.0], [12.0, 288.0], [12.1, 288.0], [12.2, 289.0], [12.3, 290.0], [12.4, 291.0], [12.5, 292.0], [12.6, 293.0], [12.7, 294.0], [12.8, 295.0], [12.9, 295.0], [13.0, 296.0], [13.1, 297.0], [13.2, 298.0], [13.3, 299.0], [13.4, 301.0], [13.5, 302.0], [13.6, 303.0], [13.7, 304.0], [13.8, 305.0], [13.9, 306.0], [14.0, 308.0], [14.1, 308.0], [14.2, 309.0], [14.3, 312.0], [14.4, 312.0], [14.5, 314.0], [14.6, 315.0], [14.7, 316.0], [14.8, 318.0], [14.9, 319.0], [15.0, 320.0], [15.1, 322.0], [15.2, 322.0], [15.3, 323.0], [15.4, 324.0], [15.5, 325.0], [15.6, 326.0], [15.7, 329.0], [15.8, 332.0], [15.9, 334.0], [16.0, 335.0], [16.1, 336.0], [16.2, 339.0], [16.3, 341.0], [16.4, 342.0], [16.5, 343.0], [16.6, 346.0], [16.7, 348.0], [16.8, 350.0], [16.9, 351.0], [17.0, 354.0], [17.1, 355.0], [17.2, 357.0], [17.3, 359.0], [17.4, 363.0], [17.5, 364.0], [17.6, 366.0], [17.7, 367.0], [17.8, 370.0], [17.9, 371.0], [18.0, 372.0], [18.1, 374.0], [18.2, 375.0], [18.3, 375.0], [18.4, 378.0], [18.5, 379.0], [18.6, 380.0], [18.7, 381.0], [18.8, 382.0], [18.9, 383.0], [19.0, 383.0], [19.1, 384.0], [19.2, 385.0], [19.3, 386.0], [19.4, 387.0], [19.5, 389.0], [19.6, 389.0], [19.7, 389.0], [19.8, 390.0], [19.9, 391.0], [20.0, 392.0], [20.1, 393.0], [20.2, 394.0], [20.3, 395.0], [20.4, 396.0], [20.5, 396.0], [20.6, 398.0], [20.7, 398.0], [20.8, 399.0], [20.9, 400.0], [21.0, 402.0], [21.1, 403.0], [21.2, 403.0], [21.3, 404.0], [21.4, 406.0], [21.5, 406.0], [21.6, 408.0], [21.7, 408.0], [21.8, 409.0], [21.9, 410.0], [22.0, 411.0], [22.1, 412.0], [22.2, 413.0], [22.3, 414.0], [22.4, 416.0], [22.5, 417.0], [22.6, 418.0], [22.7, 418.0], [22.8, 419.0], [22.9, 420.0], [23.0, 421.0], [23.1, 422.0], [23.2, 423.0], [23.3, 424.0], [23.4, 426.0], [23.5, 427.0], [23.6, 427.0], [23.7, 428.0], [23.8, 430.0], [23.9, 431.0], [24.0, 432.0], [24.1, 432.0], [24.2, 433.0], [24.3, 434.0], [24.4, 435.0], [24.5, 435.0], [24.6, 436.0], [24.7, 437.0], [24.8, 437.0], [24.9, 439.0], [25.0, 439.0], [25.1, 440.0], [25.2, 441.0], [25.3, 442.0], [25.4, 443.0], [25.5, 445.0], [25.6, 446.0], [25.7, 447.0], [25.8, 448.0], [25.9, 449.0], [26.0, 449.0], [26.1, 450.0], [26.2, 451.0], [26.3, 452.0], [26.4, 453.0], [26.5, 454.0], [26.6, 455.0], [26.7, 455.0], [26.8, 456.0], [26.9, 456.0], [27.0, 457.0], [27.1, 457.0], [27.2, 458.0], [27.3, 459.0], [27.4, 460.0], [27.5, 461.0], [27.6, 462.0], [27.7, 463.0], [27.8, 463.0], [27.9, 465.0], [28.0, 465.0], [28.1, 466.0], [28.2, 466.0], [28.3, 467.0], [28.4, 468.0], [28.5, 469.0], [28.6, 470.0], [28.7, 471.0], [28.8, 472.0], [28.9, 472.0], [29.0, 474.0], [29.1, 475.0], [29.2, 475.0], [29.3, 475.0], [29.4, 476.0], [29.5, 477.0], [29.6, 477.0], [29.7, 479.0], [29.8, 479.0], [29.9, 481.0], [30.0, 481.0], [30.1, 483.0], [30.2, 484.0], [30.3, 485.0], [30.4, 486.0], [30.5, 487.0], [30.6, 488.0], [30.7, 488.0], [30.8, 490.0], [30.9, 492.0], [31.0, 493.0], [31.1, 494.0], [31.2, 496.0], [31.3, 497.0], [31.4, 498.0], [31.5, 500.0], [31.6, 501.0], [31.7, 503.0], [31.8, 504.0], [31.9, 505.0], [32.0, 505.0], [32.1, 506.0], [32.2, 507.0], [32.3, 508.0], [32.4, 510.0], [32.5, 512.0], [32.6, 513.0], [32.7, 514.0], [32.8, 515.0], [32.9, 516.0], [33.0, 518.0], [33.1, 519.0], [33.2, 520.0], [33.3, 520.0], [33.4, 521.0], [33.5, 522.0], [33.6, 523.0], [33.7, 524.0], [33.8, 524.0], [33.9, 526.0], [34.0, 527.0], [34.1, 528.0], [34.2, 530.0], [34.3, 531.0], [34.4, 532.0], [34.5, 533.0], [34.6, 534.0], [34.7, 534.0], [34.8, 535.0], [34.9, 536.0], [35.0, 537.0], [35.1, 538.0], [35.2, 539.0], [35.3, 541.0], [35.4, 541.0], [35.5, 542.0], [35.6, 543.0], [35.7, 543.0], [35.8, 545.0], [35.9, 545.0], [36.0, 546.0], [36.1, 546.0], [36.2, 547.0], [36.3, 548.0], [36.4, 549.0], [36.5, 550.0], [36.6, 551.0], [36.7, 552.0], [36.8, 552.0], [36.9, 553.0], [37.0, 554.0], [37.1, 555.0], [37.2, 556.0], [37.3, 557.0], [37.4, 557.0], [37.5, 558.0], [37.6, 558.0], [37.7, 559.0], [37.8, 559.0], [37.9, 560.0], [38.0, 560.0], [38.1, 562.0], [38.2, 562.0], [38.3, 563.0], [38.4, 564.0], [38.5, 565.0], [38.6, 566.0], [38.7, 567.0], [38.8, 568.0], [38.9, 569.0], [39.0, 570.0], [39.1, 571.0], [39.2, 572.0], [39.3, 573.0], [39.4, 574.0], [39.5, 576.0], [39.6, 578.0], [39.7, 579.0], [39.8, 580.0], [39.9, 581.0], [40.0, 582.0], [40.1, 584.0], [40.2, 585.0], [40.3, 586.0], [40.4, 587.0], [40.5, 587.0], [40.6, 590.0], [40.7, 592.0], [40.8, 593.0], [40.9, 595.0], [41.0, 595.0], [41.1, 596.0], [41.2, 597.0], [41.3, 598.0], [41.4, 599.0], [41.5, 599.0], [41.6, 600.0], [41.7, 602.0], [41.8, 603.0], [41.9, 604.0], [42.0, 605.0], [42.1, 607.0], [42.2, 608.0], [42.3, 610.0], [42.4, 610.0], [42.5, 611.0], [42.6, 612.0], [42.7, 614.0], [42.8, 614.0], [42.9, 615.0], [43.0, 616.0], [43.1, 617.0], [43.2, 617.0], [43.3, 619.0], [43.4, 620.0], [43.5, 622.0], [43.6, 623.0], [43.7, 625.0], [43.8, 626.0], [43.9, 627.0], [44.0, 629.0], [44.1, 629.0], [44.2, 630.0], [44.3, 631.0], [44.4, 633.0], [44.5, 634.0], [44.6, 635.0], [44.7, 637.0], [44.8, 638.0], [44.9, 640.0], [45.0, 642.0], [45.1, 643.0], [45.2, 644.0], [45.3, 645.0], [45.4, 646.0], [45.5, 647.0], [45.6, 649.0], [45.7, 649.0], [45.8, 651.0], [45.9, 651.0], [46.0, 653.0], [46.1, 655.0], [46.2, 656.0], [46.3, 657.0], [46.4, 659.0], [46.5, 660.0], [46.6, 661.0], [46.7, 662.0], [46.8, 662.0], [46.9, 664.0], [47.0, 664.0], [47.1, 666.0], [47.2, 667.0], [47.3, 668.0], [47.4, 670.0], [47.5, 673.0], [47.6, 674.0], [47.7, 675.0], [47.8, 676.0], [47.9, 677.0], [48.0, 679.0], [48.1, 680.0], [48.2, 681.0], [48.3, 683.0], [48.4, 683.0], [48.5, 685.0], [48.6, 686.0], [48.7, 689.0], [48.8, 690.0], [48.9, 691.0], [49.0, 692.0], [49.1, 694.0], [49.2, 696.0], [49.3, 696.0], [49.4, 698.0], [49.5, 700.0], [49.6, 702.0], [49.7, 704.0], [49.8, 706.0], [49.9, 707.0], [50.0, 708.0], [50.1, 710.0], [50.2, 711.0], [50.3, 713.0], [50.4, 714.0], [50.5, 715.0], [50.6, 716.0], [50.7, 718.0], [50.8, 720.0], [50.9, 721.0], [51.0, 723.0], [51.1, 724.0], [51.2, 725.0], [51.3, 726.0], [51.4, 728.0], [51.5, 729.0], [51.6, 732.0], [51.7, 734.0], [51.8, 736.0], [51.9, 737.0], [52.0, 738.0], [52.1, 740.0], [52.2, 741.0], [52.3, 743.0], [52.4, 745.0], [52.5, 746.0], [52.6, 749.0], [52.7, 750.0], [52.8, 752.0], [52.9, 755.0], [53.0, 756.0], [53.1, 758.0], [53.2, 761.0], [53.3, 762.0], [53.4, 763.0], [53.5, 765.0], [53.6, 768.0], [53.7, 769.0], [53.8, 771.0], [53.9, 773.0], [54.0, 774.0], [54.1, 776.0], [54.2, 777.0], [54.3, 780.0], [54.4, 782.0], [54.5, 783.0], [54.6, 786.0], [54.7, 788.0], [54.8, 791.0], [54.9, 793.0], [55.0, 794.0], [55.1, 796.0], [55.2, 797.0], [55.3, 800.0], [55.4, 801.0], [55.5, 803.0], [55.6, 805.0], [55.7, 809.0], [55.8, 812.0], [55.9, 813.0], [56.0, 815.0], [56.1, 818.0], [56.2, 820.0], [56.3, 823.0], [56.4, 826.0], [56.5, 827.0], [56.6, 830.0], [56.7, 831.0], [56.8, 832.0], [56.9, 834.0], [57.0, 836.0], [57.1, 837.0], [57.2, 839.0], [57.3, 842.0], [57.4, 844.0], [57.5, 846.0], [57.6, 847.0], [57.7, 850.0], [57.8, 852.0], [57.9, 853.0], [58.0, 854.0], [58.1, 856.0], [58.2, 858.0], [58.3, 859.0], [58.4, 860.0], [58.5, 861.0], [58.6, 862.0], [58.7, 864.0], [58.8, 866.0], [58.9, 869.0], [59.0, 872.0], [59.1, 873.0], [59.2, 874.0], [59.3, 876.0], [59.4, 879.0], [59.5, 881.0], [59.6, 883.0], [59.7, 884.0], [59.8, 887.0], [59.9, 889.0], [60.0, 891.0], [60.1, 893.0], [60.2, 894.0], [60.3, 896.0], [60.4, 898.0], [60.5, 900.0], [60.6, 902.0], [60.7, 904.0], [60.8, 906.0], [60.9, 908.0], [61.0, 910.0], [61.1, 912.0], [61.2, 915.0], [61.3, 916.0], [61.4, 918.0], [61.5, 920.0], [61.6, 922.0], [61.7, 924.0], [61.8, 926.0], [61.9, 929.0], [62.0, 930.0], [62.1, 932.0], [62.2, 933.0], [62.3, 935.0], [62.4, 936.0], [62.5, 938.0], [62.6, 940.0], [62.7, 940.0], [62.8, 944.0], [62.9, 946.0], [63.0, 948.0], [63.1, 949.0], [63.2, 950.0], [63.3, 954.0], [63.4, 956.0], [63.5, 958.0], [63.6, 961.0], [63.7, 964.0], [63.8, 967.0], [63.9, 968.0], [64.0, 969.0], [64.1, 971.0], [64.2, 972.0], [64.3, 973.0], [64.4, 975.0], [64.5, 977.0], [64.6, 978.0], [64.7, 979.0], [64.8, 980.0], [64.9, 982.0], [65.0, 983.0], [65.1, 984.0], [65.2, 986.0], [65.3, 989.0], [65.4, 990.0], [65.5, 993.0], [65.6, 994.0], [65.7, 995.0], [65.8, 997.0], [65.9, 998.0], [66.0, 1000.0], [66.1, 1001.0], [66.2, 1002.0], [66.3, 1004.0], [66.4, 1005.0], [66.5, 1008.0], [66.6, 1009.0], [66.7, 1011.0], [66.8, 1012.0], [66.9, 1014.0], [67.0, 1015.0], [67.1, 1017.0], [67.2, 1018.0], [67.3, 1019.0], [67.4, 1021.0], [67.5, 1023.0], [67.6, 1024.0], [67.7, 1028.0], [67.8, 1029.0], [67.9, 1031.0], [68.0, 1032.0], [68.1, 1033.0], [68.2, 1037.0], [68.3, 1039.0], [68.4, 1040.0], [68.5, 1041.0], [68.6, 1041.0], [68.7, 1043.0], [68.8, 1046.0], [68.9, 1047.0], [69.0, 1048.0], [69.1, 1049.0], [69.2, 1050.0], [69.3, 1051.0], [69.4, 1052.0], [69.5, 1054.0], [69.6, 1056.0], [69.7, 1057.0], [69.8, 1058.0], [69.9, 1060.0], [70.0, 1062.0], [70.1, 1063.0], [70.2, 1066.0], [70.3, 1067.0], [70.4, 1068.0], [70.5, 1070.0], [70.6, 1071.0], [70.7, 1073.0], [70.8, 1074.0], [70.9, 1075.0], [71.0, 1077.0], [71.1, 1079.0], [71.2, 1081.0], [71.3, 1083.0], [71.4, 1085.0], [71.5, 1086.0], [71.6, 1088.0], [71.7, 1090.0], [71.8, 1091.0], [71.9, 1094.0], [72.0, 1097.0], [72.1, 1098.0], [72.2, 1099.0], [72.3, 1101.0], [72.4, 1102.0], [72.5, 1103.0], [72.6, 1106.0], [72.7, 1109.0], [72.8, 1112.0], [72.9, 1114.0], [73.0, 1114.0], [73.1, 1116.0], [73.2, 1118.0], [73.3, 1120.0], [73.4, 1123.0], [73.5, 1125.0], [73.6, 1127.0], [73.7, 1131.0], [73.8, 1133.0], [73.9, 1135.0], [74.0, 1137.0], [74.1, 1140.0], [74.2, 1143.0], [74.3, 1145.0], [74.4, 1146.0], [74.5, 1147.0], [74.6, 1150.0], [74.7, 1153.0], [74.8, 1155.0], [74.9, 1155.0], [75.0, 1157.0], [75.1, 1159.0], [75.2, 1162.0], [75.3, 1166.0], [75.4, 1167.0], [75.5, 1169.0], [75.6, 1172.0], [75.7, 1174.0], [75.8, 1178.0], [75.9, 1180.0], [76.0, 1182.0], [76.1, 1184.0], [76.2, 1187.0], [76.3, 1187.0], [76.4, 1190.0], [76.5, 1193.0], [76.6, 1197.0], [76.7, 1199.0], [76.8, 1201.0], [76.9, 1205.0], [77.0, 1207.0], [77.1, 1210.0], [77.2, 1212.0], [77.3, 1214.0], [77.4, 1218.0], [77.5, 1220.0], [77.6, 1223.0], [77.7, 1227.0], [77.8, 1230.0], [77.9, 1232.0], [78.0, 1236.0], [78.1, 1237.0], [78.2, 1239.0], [78.3, 1242.0], [78.4, 1246.0], [78.5, 1252.0], [78.6, 1254.0], [78.7, 1256.0], [78.8, 1257.0], [78.9, 1259.0], [79.0, 1261.0], [79.1, 1264.0], [79.2, 1267.0], [79.3, 1269.0], [79.4, 1271.0], [79.5, 1274.0], [79.6, 1279.0], [79.7, 1281.0], [79.8, 1282.0], [79.9, 1284.0], [80.0, 1286.0], [80.1, 1288.0], [80.2, 1290.0], [80.3, 1291.0], [80.4, 1293.0], [80.5, 1294.0], [80.6, 1297.0], [80.7, 1299.0], [80.8, 1302.0], [80.9, 1302.0], [81.0, 1303.0], [81.1, 1308.0], [81.2, 1310.0], [81.3, 1311.0], [81.4, 1313.0], [81.5, 1316.0], [81.6, 1319.0], [81.7, 1321.0], [81.8, 1327.0], [81.9, 1329.0], [82.0, 1332.0], [82.1, 1333.0], [82.2, 1336.0], [82.3, 1339.0], [82.4, 1340.0], [82.5, 1342.0], [82.6, 1343.0], [82.7, 1344.0], [82.8, 1351.0], [82.9, 1356.0], [83.0, 1359.0], [83.1, 1360.0], [83.2, 1364.0], [83.3, 1368.0], [83.4, 1371.0], [83.5, 1373.0], [83.6, 1376.0], [83.7, 1378.0], [83.8, 1381.0], [83.9, 1384.0], [84.0, 1387.0], [84.1, 1390.0], [84.2, 1392.0], [84.3, 1394.0], [84.4, 1396.0], [84.5, 1400.0], [84.6, 1401.0], [84.7, 1402.0], [84.8, 1403.0], [84.9, 1405.0], [85.0, 1406.0], [85.1, 1408.0], [85.2, 1411.0], [85.3, 1416.0], [85.4, 1417.0], [85.5, 1420.0], [85.6, 1424.0], [85.7, 1426.0], [85.8, 1428.0], [85.9, 1431.0], [86.0, 1434.0], [86.1, 1438.0], [86.2, 1440.0], [86.3, 1440.0], [86.4, 1445.0], [86.5, 1446.0], [86.6, 1451.0], [86.7, 1456.0], [86.8, 1457.0], [86.9, 1460.0], [87.0, 1463.0], [87.1, 1465.0], [87.2, 1467.0], [87.3, 1471.0], [87.4, 1475.0], [87.5, 1477.0], [87.6, 1486.0], [87.7, 1489.0], [87.8, 1492.0], [87.9, 1498.0], [88.0, 1501.0], [88.1, 1507.0], [88.2, 1512.0], [88.3, 1519.0], [88.4, 1523.0], [88.5, 1528.0], [88.6, 1531.0], [88.7, 1534.0], [88.8, 1540.0], [88.9, 1546.0], [89.0, 1551.0], [89.1, 1555.0], [89.2, 1561.0], [89.3, 1565.0], [89.4, 1569.0], [89.5, 1574.0], [89.6, 1582.0], [89.7, 1584.0], [89.8, 1589.0], [89.9, 1591.0], [90.0, 1595.0], [90.1, 1600.0], [90.2, 1601.0], [90.3, 1604.0], [90.4, 1607.0], [90.5, 1612.0], [90.6, 1618.0], [90.7, 1626.0], [90.8, 1632.0], [90.9, 1641.0], [91.0, 1647.0], [91.1, 1652.0], [91.2, 1655.0], [91.3, 1661.0], [91.4, 1668.0], [91.5, 1678.0], [91.6, 1682.0], [91.7, 1689.0], [91.8, 1699.0], [91.9, 1707.0], [92.0, 1714.0], [92.1, 1717.0], [92.2, 1729.0], [92.3, 1733.0], [92.4, 1741.0], [92.5, 1750.0], [92.6, 1753.0], [92.7, 1769.0], [92.8, 1775.0], [92.9, 1778.0], [93.0, 1792.0], [93.1, 1799.0], [93.2, 1803.0], [93.3, 1812.0], [93.4, 1817.0], [93.5, 1822.0], [93.6, 1827.0], [93.7, 1833.0], [93.8, 1840.0], [93.9, 1850.0], [94.0, 1864.0], [94.1, 1872.0], [94.2, 1878.0], [94.3, 1889.0], [94.4, 1896.0], [94.5, 1905.0], [94.6, 1910.0], [94.7, 1924.0], [94.8, 1931.0], [94.9, 1933.0], [95.0, 1941.0], [95.1, 1959.0], [95.2, 1971.0], [95.3, 1977.0], [95.4, 1991.0], [95.5, 2001.0], [95.6, 2021.0], [95.7, 2027.0], [95.8, 2058.0], [95.9, 2075.0], [96.0, 2087.0], [96.1, 2097.0], [96.2, 2110.0], [96.3, 2120.0], [96.4, 2132.0], [96.5, 2144.0], [96.6, 2156.0], [96.7, 2174.0], [96.8, 2191.0], [96.9, 2213.0], [97.0, 2234.0], [97.1, 2247.0], [97.2, 2280.0], [97.3, 2301.0], [97.4, 2317.0], [97.5, 2325.0], [97.6, 2339.0], [97.7, 2358.0], [97.8, 2385.0], [97.9, 2445.0], [98.0, 2463.0], [98.1, 2519.0], [98.2, 2537.0], [98.3, 2571.0], [98.4, 2592.0], [98.5, 2652.0], [98.6, 2706.0], [98.7, 2734.0], [98.8, 2773.0], [98.9, 2846.0], [99.0, 2934.0], [99.1, 2970.0], [99.2, 3072.0], [99.3, 3267.0], [99.4, 3350.0], [99.5, 3463.0], [99.6, 3574.0], [99.7, 3929.0], [99.8, 4447.0], [99.9, 5215.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 583.0, "series": [{"data": [[600.0, 414.0], [700.0, 301.0], [800.0, 269.0], [900.0, 287.0], [1000.0, 324.0], [1100.0, 233.0], [1200.0, 208.0], [1300.0, 194.0], [1400.0, 182.0], [1500.0, 110.0], [1600.0, 89.0], [1700.0, 68.0], [1800.0, 69.0], [1900.0, 54.0], [2000.0, 33.0], [2100.0, 36.0], [2300.0, 29.0], [2200.0, 24.0], [2400.0, 13.0], [2500.0, 16.0], [2600.0, 9.0], [2700.0, 14.0], [2800.0, 6.0], [2900.0, 9.0], [3000.0, 4.0], [3100.0, 4.0], [3300.0, 5.0], [3200.0, 3.0], [3400.0, 5.0], [3500.0, 5.0], [3700.0, 1.0], [3600.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 2.0], [5400.0, 2.0], [6000.0, 1.0], [8600.0, 1.0], [100.0, 108.0], [200.0, 583.0], [300.0, 390.0], [400.0, 553.0], [500.0, 520.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 623.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2929.0, "series": [{"data": [[0.0, 1638.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2929.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 623.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.846938775510205, "minX": 1.6028013E12, "maxY": 10.0, "series": [{"data": [[1.6028016E12, 10.0], [1.6028013E12, 10.0], [1.60280178E12, 9.846938775510205], [1.60280148E12, 10.0], [1.60280166E12, 10.0], [1.60280136E12, 10.0], [1.60280154E12, 10.0], [1.60280172E12, 10.0], [1.60280142E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280178E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.0, "maxY": 2242.0, "series": [{"data": [[8.0, 1750.0], [4.0, 679.0], [2.0, 903.0], [1.0, 2242.0], [9.0, 274.0], [10.0, 869.7927041111756], [5.0, 1133.0], [6.0, 702.0], [3.0, 1072.0], [7.0, 1100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 870.1832369942198]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.683333333333334, "minX": 1.6028013E12, "maxY": 3469372.45, "series": [{"data": [[1.6028016E12, 2712601.9], [1.6028013E12, 143.4], [1.60280178E12, 1543660.0333333334], [1.60280148E12, 3454352.9166666665], [1.60280166E12, 3469372.45], [1.60280136E12, 3244789.566666667], [1.60280154E12, 3349767.566666667], [1.60280172E12, 3029553.566666667], [1.60280142E12, 3168156.966666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028016E12, 4614.633333333333], [1.6028013E12, 7.683333333333334], [1.60280178E12, 2215.0333333333333], [1.60280148E12, 5455.316666666667], [1.60280166E12, 5571.816666666667], [1.60280136E12, 4721.233333333334], [1.60280154E12, 4636.85], [1.60280172E12, 5899.6], [1.60280142E12, 5455.166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280178E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 771.0732647814907, "minX": 1.6028013E12, "maxY": 2519.0, "series": [{"data": [[1.6028016E12, 953.7527216174184], [1.6028013E12, 2519.0], [1.60280178E12, 1035.3707482993195], [1.60280148E12, 830.5424200278163], [1.60280166E12, 799.9411764705883], [1.60280136E12, 929.6917177914114], [1.60280154E12, 950.2475728155341], [1.60280172E12, 771.0732647814907], [1.60280142E12, 823.9443690637726]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280178E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 769.7133676092541, "minX": 1.6028013E12, "maxY": 2516.0, "series": [{"data": [[1.6028016E12, 952.2799377916014], [1.6028013E12, 2516.0], [1.60280178E12, 1033.6700680272115], [1.60280148E12, 828.3643949930455], [1.60280166E12, 798.3114973262029], [1.60280136E12, 927.5751533742329], [1.60280154E12, 948.0614886731388], [1.60280172E12, 769.7133676092541], [1.60280142E12, 822.0027137042064]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280178E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00899742930591259, "minX": 1.6028013E12, "maxY": 43.0, "series": [{"data": [[1.6028016E12, 0.01710730948678072], [1.6028013E12, 43.0], [1.60280178E12, 0.013605442176870743], [1.60280148E12, 0.012517385257301812], [1.60280166E12, 0.016042780748663096], [1.60280136E12, 0.08895705521472384], [1.60280154E12, 0.027508090614886717], [1.60280172E12, 0.00899742930591259], [1.60280142E12, 0.016282225237449127]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280178E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.6028013E12, "maxY": 8644.0, "series": [{"data": [[1.6028016E12, 8644.0], [1.6028013E12, 2519.0], [1.60280178E12, 3715.0], [1.60280148E12, 4287.0], [1.60280166E12, 2689.0], [1.60280136E12, 6002.0], [1.60280154E12, 4037.0], [1.60280172E12, 2710.0], [1.60280142E12, 4224.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028016E12, 201.3879995393753], [1.6028013E12, 2519.0], [1.60280178E12, 225.58499950766563], [1.60280148E12, 188.0], [1.60280166E12, 194.74099982142448], [1.60280136E12, 201.87699984431268], [1.60280154E12, 189.0], [1.60280172E12, 188.01099981427194], [1.60280142E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028016E12, 202.0], [1.6028013E12, 2519.0], [1.60280178E12, 227.44350019693374], [1.60280148E12, 188.38400020599366], [1.60280166E12, 195.0], [1.60280136E12, 202.0], [1.60280154E12, 189.0], [1.60280172E12, 188.71210007429124], [1.60280142E12, 196.30620007038115]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028016E12, 202.0], [1.6028013E12, 2519.0], [1.60280178E12, 226.61749975383282], [1.60280148E12, 188.0], [1.60280166E12, 195.0], [1.60280136E12, 202.0], [1.60280154E12, 189.0], [1.60280172E12, 188.40049990713595], [1.60280142E12, 196.01099991202355]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028016E12, 190.0], [1.6028013E12, 2519.0], [1.60280178E12, 190.0], [1.60280148E12, 179.0], [1.60280166E12, 189.0], [1.60280136E12, 185.0], [1.60280154E12, 185.0], [1.60280172E12, 182.0], [1.60280142E12, 185.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028016E12, 800.0], [1.6028013E12, 2519.0], [1.60280178E12, 922.0], [1.60280148E12, 692.0], [1.60280166E12, 613.0], [1.60280136E12, 743.5], [1.60280154E12, 838.5], [1.60280172E12, 608.0], [1.60280142E12, 602.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280178E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 383.0, "minX": 1.0, "maxY": 2380.5, "series": [{"data": [[3.0, 1849.0], [4.0, 1600.5], [5.0, 956.0], [6.0, 1020.0], [7.0, 1122.0], [8.0, 984.5], [9.0, 968.0], [10.0, 904.0], [11.0, 885.0], [12.0, 802.5], [13.0, 691.5], [14.0, 673.0], [15.0, 558.0], [1.0, 2380.5], [16.0, 562.0], [17.0, 536.0], [18.0, 545.5], [19.0, 417.0], [20.0, 419.0], [21.0, 460.5], [22.0, 432.5], [23.0, 383.0], [24.0, 417.5], [25.0, 413.5], [26.0, 405.5], [27.0, 427.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 383.0, "minX": 1.0, "maxY": 2373.5, "series": [{"data": [[3.0, 1843.5], [4.0, 1597.5], [5.0, 955.0], [6.0, 1019.0], [7.0, 1120.5], [8.0, 983.0], [9.0, 968.0], [10.0, 899.0], [11.0, 884.0], [12.0, 802.0], [13.0, 690.5], [14.0, 670.5], [15.0, 556.0], [1.0, 2373.5], [16.0, 559.5], [17.0, 535.0], [18.0, 545.0], [19.0, 416.0], [20.0, 419.0], [21.0, 460.0], [22.0, 431.5], [23.0, 383.0], [24.0, 417.0], [25.0, 413.5], [26.0, 405.0], [27.0, 427.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.6028013E12, "maxY": 12.966666666666667, "series": [{"data": [[1.6028016E12, 10.716666666666667], [1.6028013E12, 0.18333333333333332], [1.60280178E12, 4.733333333333333], [1.60280148E12, 11.983333333333333], [1.60280166E12, 12.466666666666667], [1.60280136E12, 10.866666666666667], [1.60280154E12, 10.3], [1.60280172E12, 12.966666666666667], [1.60280142E12, 12.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280178E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6028013E12, "maxY": 12.966666666666667, "series": [{"data": [[1.6028016E12, 10.716666666666667], [1.6028013E12, 0.016666666666666666], [1.60280178E12, 4.9], [1.60280148E12, 11.983333333333333], [1.60280166E12, 12.466666666666667], [1.60280136E12, 10.866666666666667], [1.60280154E12, 10.3], [1.60280172E12, 12.966666666666667], [1.60280142E12, 12.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280178E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6028013E12, "maxY": 12.966666666666667, "series": [{"data": [[1.6028016E12, 10.716666666666667], [1.6028013E12, 0.016666666666666666], [1.60280178E12, 4.9], [1.60280148E12, 11.983333333333333], [1.60280166E12, 12.466666666666667], [1.60280136E12, 10.866666666666667], [1.60280154E12, 10.3], [1.60280172E12, 12.966666666666667], [1.60280142E12, 12.283333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280178E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6028013E12, "maxY": 12.966666666666667, "series": [{"data": [[1.6028016E12, 10.716666666666667], [1.6028013E12, 0.016666666666666666], [1.60280178E12, 4.9], [1.60280148E12, 11.983333333333333], [1.60280166E12, 12.466666666666667], [1.60280136E12, 10.866666666666667], [1.60280154E12, 10.3], [1.60280172E12, 12.966666666666667], [1.60280142E12, 12.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280178E12, "title": "Total Transactions Per Second"}},
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

