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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 5859.0, "series": [{"data": [[0.0, 186.0], [0.1, 188.0], [0.2, 191.0], [0.3, 192.0], [0.4, 193.0], [0.5, 195.0], [0.6, 195.0], [0.7, 196.0], [0.8, 198.0], [0.9, 199.0], [1.0, 200.0], [1.1, 201.0], [1.2, 202.0], [1.3, 202.0], [1.4, 203.0], [1.5, 203.0], [1.6, 204.0], [1.7, 205.0], [1.8, 206.0], [1.9, 206.0], [2.0, 207.0], [2.1, 208.0], [2.2, 209.0], [2.3, 210.0], [2.4, 210.0], [2.5, 211.0], [2.6, 211.0], [2.7, 212.0], [2.8, 213.0], [2.9, 213.0], [3.0, 214.0], [3.1, 215.0], [3.2, 216.0], [3.3, 217.0], [3.4, 218.0], [3.5, 219.0], [3.6, 219.0], [3.7, 220.0], [3.8, 221.0], [3.9, 222.0], [4.0, 223.0], [4.1, 224.0], [4.2, 225.0], [4.3, 226.0], [4.4, 227.0], [4.5, 228.0], [4.6, 229.0], [4.7, 229.0], [4.8, 230.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 233.0], [5.4, 234.0], [5.5, 234.0], [5.6, 235.0], [5.7, 237.0], [5.8, 238.0], [5.9, 238.0], [6.0, 240.0], [6.1, 241.0], [6.2, 242.0], [6.3, 243.0], [6.4, 244.0], [6.5, 244.0], [6.6, 246.0], [6.7, 247.0], [6.8, 249.0], [6.9, 251.0], [7.0, 253.0], [7.1, 254.0], [7.2, 255.0], [7.3, 257.0], [7.4, 259.0], [7.5, 260.0], [7.6, 262.0], [7.7, 263.0], [7.8, 265.0], [7.9, 266.0], [8.0, 267.0], [8.1, 269.0], [8.2, 270.0], [8.3, 271.0], [8.4, 273.0], [8.5, 274.0], [8.6, 275.0], [8.7, 276.0], [8.8, 277.0], [8.9, 278.0], [9.0, 279.0], [9.1, 280.0], [9.2, 281.0], [9.3, 281.0], [9.4, 281.0], [9.5, 283.0], [9.6, 283.0], [9.7, 284.0], [9.8, 284.0], [9.9, 285.0], [10.0, 285.0], [10.1, 286.0], [10.2, 286.0], [10.3, 287.0], [10.4, 288.0], [10.5, 290.0], [10.6, 291.0], [10.7, 292.0], [10.8, 293.0], [10.9, 294.0], [11.0, 296.0], [11.1, 298.0], [11.2, 298.0], [11.3, 299.0], [11.4, 299.0], [11.5, 301.0], [11.6, 302.0], [11.7, 304.0], [11.8, 304.0], [11.9, 305.0], [12.0, 306.0], [12.1, 307.0], [12.2, 308.0], [12.3, 309.0], [12.4, 310.0], [12.5, 311.0], [12.6, 311.0], [12.7, 312.0], [12.8, 313.0], [12.9, 314.0], [13.0, 315.0], [13.1, 316.0], [13.2, 317.0], [13.3, 318.0], [13.4, 320.0], [13.5, 321.0], [13.6, 322.0], [13.7, 322.0], [13.8, 323.0], [13.9, 325.0], [14.0, 326.0], [14.1, 327.0], [14.2, 329.0], [14.3, 329.0], [14.4, 331.0], [14.5, 333.0], [14.6, 333.0], [14.7, 335.0], [14.8, 336.0], [14.9, 338.0], [15.0, 339.0], [15.1, 340.0], [15.2, 343.0], [15.3, 345.0], [15.4, 346.0], [15.5, 347.0], [15.6, 348.0], [15.7, 349.0], [15.8, 351.0], [15.9, 352.0], [16.0, 353.0], [16.1, 355.0], [16.2, 357.0], [16.3, 359.0], [16.4, 360.0], [16.5, 363.0], [16.6, 366.0], [16.7, 368.0], [16.8, 371.0], [16.9, 373.0], [17.0, 376.0], [17.1, 377.0], [17.2, 378.0], [17.3, 381.0], [17.4, 382.0], [17.5, 383.0], [17.6, 384.0], [17.7, 386.0], [17.8, 386.0], [17.9, 388.0], [18.0, 389.0], [18.1, 390.0], [18.2, 392.0], [18.3, 393.0], [18.4, 394.0], [18.5, 395.0], [18.6, 397.0], [18.7, 399.0], [18.8, 400.0], [18.9, 401.0], [19.0, 403.0], [19.1, 404.0], [19.2, 406.0], [19.3, 407.0], [19.4, 409.0], [19.5, 410.0], [19.6, 410.0], [19.7, 412.0], [19.8, 413.0], [19.9, 414.0], [20.0, 415.0], [20.1, 415.0], [20.2, 416.0], [20.3, 417.0], [20.4, 418.0], [20.5, 419.0], [20.6, 421.0], [20.7, 422.0], [20.8, 423.0], [20.9, 424.0], [21.0, 425.0], [21.1, 426.0], [21.2, 427.0], [21.3, 428.0], [21.4, 428.0], [21.5, 429.0], [21.6, 430.0], [21.7, 431.0], [21.8, 431.0], [21.9, 433.0], [22.0, 434.0], [22.1, 435.0], [22.2, 437.0], [22.3, 437.0], [22.4, 438.0], [22.5, 438.0], [22.6, 439.0], [22.7, 440.0], [22.8, 441.0], [22.9, 441.0], [23.0, 443.0], [23.1, 444.0], [23.2, 445.0], [23.3, 445.0], [23.4, 446.0], [23.5, 447.0], [23.6, 448.0], [23.7, 449.0], [23.8, 450.0], [23.9, 450.0], [24.0, 451.0], [24.1, 453.0], [24.2, 453.0], [24.3, 454.0], [24.4, 455.0], [24.5, 456.0], [24.6, 456.0], [24.7, 457.0], [24.8, 457.0], [24.9, 458.0], [25.0, 459.0], [25.1, 460.0], [25.2, 460.0], [25.3, 461.0], [25.4, 462.0], [25.5, 462.0], [25.6, 462.0], [25.7, 464.0], [25.8, 464.0], [25.9, 465.0], [26.0, 465.0], [26.1, 466.0], [26.2, 468.0], [26.3, 468.0], [26.4, 469.0], [26.5, 470.0], [26.6, 470.0], [26.7, 471.0], [26.8, 472.0], [26.9, 473.0], [27.0, 474.0], [27.1, 475.0], [27.2, 476.0], [27.3, 477.0], [27.4, 478.0], [27.5, 478.0], [27.6, 479.0], [27.7, 480.0], [27.8, 481.0], [27.9, 481.0], [28.0, 482.0], [28.1, 483.0], [28.2, 484.0], [28.3, 485.0], [28.4, 485.0], [28.5, 486.0], [28.6, 487.0], [28.7, 488.0], [28.8, 488.0], [28.9, 489.0], [29.0, 490.0], [29.1, 491.0], [29.2, 492.0], [29.3, 493.0], [29.4, 494.0], [29.5, 495.0], [29.6, 495.0], [29.7, 497.0], [29.8, 498.0], [29.9, 499.0], [30.0, 500.0], [30.1, 501.0], [30.2, 502.0], [30.3, 503.0], [30.4, 504.0], [30.5, 505.0], [30.6, 506.0], [30.7, 507.0], [30.8, 508.0], [30.9, 510.0], [31.0, 512.0], [31.1, 512.0], [31.2, 513.0], [31.3, 514.0], [31.4, 515.0], [31.5, 516.0], [31.6, 517.0], [31.7, 518.0], [31.8, 519.0], [31.9, 521.0], [32.0, 522.0], [32.1, 524.0], [32.2, 525.0], [32.3, 525.0], [32.4, 526.0], [32.5, 527.0], [32.6, 529.0], [32.7, 530.0], [32.8, 531.0], [32.9, 532.0], [33.0, 533.0], [33.1, 534.0], [33.2, 535.0], [33.3, 536.0], [33.4, 537.0], [33.5, 538.0], [33.6, 539.0], [33.7, 540.0], [33.8, 541.0], [33.9, 542.0], [34.0, 543.0], [34.1, 544.0], [34.2, 544.0], [34.3, 545.0], [34.4, 546.0], [34.5, 546.0], [34.6, 547.0], [34.7, 548.0], [34.8, 549.0], [34.9, 550.0], [35.0, 550.0], [35.1, 551.0], [35.2, 551.0], [35.3, 552.0], [35.4, 553.0], [35.5, 553.0], [35.6, 554.0], [35.7, 555.0], [35.8, 556.0], [35.9, 558.0], [36.0, 559.0], [36.1, 560.0], [36.2, 562.0], [36.3, 563.0], [36.4, 564.0], [36.5, 564.0], [36.6, 565.0], [36.7, 566.0], [36.8, 567.0], [36.9, 568.0], [37.0, 568.0], [37.1, 569.0], [37.2, 569.0], [37.3, 570.0], [37.4, 571.0], [37.5, 571.0], [37.6, 572.0], [37.7, 574.0], [37.8, 575.0], [37.9, 576.0], [38.0, 576.0], [38.1, 577.0], [38.2, 578.0], [38.3, 579.0], [38.4, 580.0], [38.5, 580.0], [38.6, 581.0], [38.7, 582.0], [38.8, 583.0], [38.9, 584.0], [39.0, 586.0], [39.1, 588.0], [39.2, 589.0], [39.3, 590.0], [39.4, 591.0], [39.5, 592.0], [39.6, 594.0], [39.7, 595.0], [39.8, 596.0], [39.9, 597.0], [40.0, 598.0], [40.1, 599.0], [40.2, 600.0], [40.3, 601.0], [40.4, 602.0], [40.5, 603.0], [40.6, 605.0], [40.7, 607.0], [40.8, 607.0], [40.9, 608.0], [41.0, 609.0], [41.1, 610.0], [41.2, 611.0], [41.3, 612.0], [41.4, 613.0], [41.5, 615.0], [41.6, 617.0], [41.7, 618.0], [41.8, 620.0], [41.9, 622.0], [42.0, 623.0], [42.1, 624.0], [42.2, 625.0], [42.3, 626.0], [42.4, 627.0], [42.5, 629.0], [42.6, 630.0], [42.7, 631.0], [42.8, 633.0], [42.9, 634.0], [43.0, 636.0], [43.1, 636.0], [43.2, 637.0], [43.3, 638.0], [43.4, 639.0], [43.5, 642.0], [43.6, 642.0], [43.7, 643.0], [43.8, 644.0], [43.9, 645.0], [44.0, 646.0], [44.1, 647.0], [44.2, 648.0], [44.3, 649.0], [44.4, 649.0], [44.5, 650.0], [44.6, 651.0], [44.7, 652.0], [44.8, 653.0], [44.9, 655.0], [45.0, 656.0], [45.1, 657.0], [45.2, 658.0], [45.3, 658.0], [45.4, 661.0], [45.5, 661.0], [45.6, 663.0], [45.7, 665.0], [45.8, 667.0], [45.9, 668.0], [46.0, 668.0], [46.1, 670.0], [46.2, 672.0], [46.3, 673.0], [46.4, 673.0], [46.5, 674.0], [46.6, 677.0], [46.7, 679.0], [46.8, 679.0], [46.9, 680.0], [47.0, 682.0], [47.1, 683.0], [47.2, 685.0], [47.3, 687.0], [47.4, 689.0], [47.5, 690.0], [47.6, 692.0], [47.7, 693.0], [47.8, 693.0], [47.9, 695.0], [48.0, 696.0], [48.1, 698.0], [48.2, 699.0], [48.3, 699.0], [48.4, 700.0], [48.5, 701.0], [48.6, 703.0], [48.7, 703.0], [48.8, 705.0], [48.9, 706.0], [49.0, 706.0], [49.1, 708.0], [49.2, 709.0], [49.3, 712.0], [49.4, 713.0], [49.5, 715.0], [49.6, 716.0], [49.7, 717.0], [49.8, 719.0], [49.9, 721.0], [50.0, 722.0], [50.1, 723.0], [50.2, 725.0], [50.3, 727.0], [50.4, 729.0], [50.5, 730.0], [50.6, 731.0], [50.7, 732.0], [50.8, 735.0], [50.9, 735.0], [51.0, 738.0], [51.1, 739.0], [51.2, 741.0], [51.3, 743.0], [51.4, 744.0], [51.5, 747.0], [51.6, 748.0], [51.7, 752.0], [51.8, 752.0], [51.9, 754.0], [52.0, 756.0], [52.1, 758.0], [52.2, 760.0], [52.3, 761.0], [52.4, 763.0], [52.5, 764.0], [52.6, 765.0], [52.7, 768.0], [52.8, 769.0], [52.9, 771.0], [53.0, 772.0], [53.1, 774.0], [53.2, 775.0], [53.3, 776.0], [53.4, 777.0], [53.5, 778.0], [53.6, 779.0], [53.7, 780.0], [53.8, 783.0], [53.9, 785.0], [54.0, 786.0], [54.1, 790.0], [54.2, 791.0], [54.3, 793.0], [54.4, 794.0], [54.5, 796.0], [54.6, 798.0], [54.7, 800.0], [54.8, 801.0], [54.9, 803.0], [55.0, 805.0], [55.1, 807.0], [55.2, 809.0], [55.3, 810.0], [55.4, 812.0], [55.5, 814.0], [55.6, 815.0], [55.7, 816.0], [55.8, 818.0], [55.9, 819.0], [56.0, 820.0], [56.1, 822.0], [56.2, 825.0], [56.3, 828.0], [56.4, 828.0], [56.5, 829.0], [56.6, 832.0], [56.7, 833.0], [56.8, 835.0], [56.9, 837.0], [57.0, 840.0], [57.1, 843.0], [57.2, 845.0], [57.3, 846.0], [57.4, 850.0], [57.5, 851.0], [57.6, 854.0], [57.7, 855.0], [57.8, 858.0], [57.9, 859.0], [58.0, 860.0], [58.1, 862.0], [58.2, 864.0], [58.3, 866.0], [58.4, 867.0], [58.5, 869.0], [58.6, 870.0], [58.7, 875.0], [58.8, 875.0], [58.9, 877.0], [59.0, 878.0], [59.1, 879.0], [59.2, 881.0], [59.3, 883.0], [59.4, 885.0], [59.5, 887.0], [59.6, 888.0], [59.7, 889.0], [59.8, 889.0], [59.9, 892.0], [60.0, 894.0], [60.1, 896.0], [60.2, 899.0], [60.3, 902.0], [60.4, 904.0], [60.5, 907.0], [60.6, 908.0], [60.7, 911.0], [60.8, 914.0], [60.9, 915.0], [61.0, 915.0], [61.1, 917.0], [61.2, 918.0], [61.3, 920.0], [61.4, 922.0], [61.5, 923.0], [61.6, 925.0], [61.7, 928.0], [61.8, 932.0], [61.9, 933.0], [62.0, 935.0], [62.1, 937.0], [62.2, 939.0], [62.3, 942.0], [62.4, 946.0], [62.5, 948.0], [62.6, 950.0], [62.7, 952.0], [62.8, 953.0], [62.9, 955.0], [63.0, 956.0], [63.1, 958.0], [63.2, 961.0], [63.3, 962.0], [63.4, 964.0], [63.5, 966.0], [63.6, 968.0], [63.7, 970.0], [63.8, 972.0], [63.9, 973.0], [64.0, 975.0], [64.1, 976.0], [64.2, 977.0], [64.3, 980.0], [64.4, 983.0], [64.5, 986.0], [64.6, 989.0], [64.7, 990.0], [64.8, 992.0], [64.9, 995.0], [65.0, 999.0], [65.1, 1000.0], [65.2, 1003.0], [65.3, 1004.0], [65.4, 1004.0], [65.5, 1007.0], [65.6, 1009.0], [65.7, 1011.0], [65.8, 1013.0], [65.9, 1014.0], [66.0, 1015.0], [66.1, 1016.0], [66.2, 1019.0], [66.3, 1021.0], [66.4, 1022.0], [66.5, 1023.0], [66.6, 1024.0], [66.7, 1025.0], [66.8, 1026.0], [66.9, 1027.0], [67.0, 1028.0], [67.1, 1031.0], [67.2, 1032.0], [67.3, 1033.0], [67.4, 1036.0], [67.5, 1037.0], [67.6, 1041.0], [67.7, 1043.0], [67.8, 1045.0], [67.9, 1047.0], [68.0, 1048.0], [68.1, 1051.0], [68.2, 1052.0], [68.3, 1055.0], [68.4, 1057.0], [68.5, 1058.0], [68.6, 1060.0], [68.7, 1062.0], [68.8, 1063.0], [68.9, 1065.0], [69.0, 1067.0], [69.1, 1069.0], [69.2, 1071.0], [69.3, 1073.0], [69.4, 1075.0], [69.5, 1077.0], [69.6, 1078.0], [69.7, 1081.0], [69.8, 1085.0], [69.9, 1088.0], [70.0, 1089.0], [70.1, 1091.0], [70.2, 1092.0], [70.3, 1094.0], [70.4, 1097.0], [70.5, 1097.0], [70.6, 1099.0], [70.7, 1102.0], [70.8, 1104.0], [70.9, 1106.0], [71.0, 1107.0], [71.1, 1109.0], [71.2, 1111.0], [71.3, 1113.0], [71.4, 1117.0], [71.5, 1119.0], [71.6, 1122.0], [71.7, 1125.0], [71.8, 1127.0], [71.9, 1128.0], [72.0, 1129.0], [72.1, 1130.0], [72.2, 1134.0], [72.3, 1137.0], [72.4, 1137.0], [72.5, 1139.0], [72.6, 1141.0], [72.7, 1142.0], [72.8, 1146.0], [72.9, 1148.0], [73.0, 1150.0], [73.1, 1152.0], [73.2, 1155.0], [73.3, 1158.0], [73.4, 1159.0], [73.5, 1160.0], [73.6, 1163.0], [73.7, 1164.0], [73.8, 1165.0], [73.9, 1167.0], [74.0, 1169.0], [74.1, 1169.0], [74.2, 1172.0], [74.3, 1174.0], [74.4, 1176.0], [74.5, 1178.0], [74.6, 1180.0], [74.7, 1181.0], [74.8, 1184.0], [74.9, 1187.0], [75.0, 1189.0], [75.1, 1190.0], [75.2, 1191.0], [75.3, 1192.0], [75.4, 1194.0], [75.5, 1196.0], [75.6, 1198.0], [75.7, 1201.0], [75.8, 1202.0], [75.9, 1204.0], [76.0, 1206.0], [76.1, 1208.0], [76.2, 1210.0], [76.3, 1212.0], [76.4, 1213.0], [76.5, 1215.0], [76.6, 1216.0], [76.7, 1219.0], [76.8, 1222.0], [76.9, 1226.0], [77.0, 1227.0], [77.1, 1229.0], [77.2, 1233.0], [77.3, 1236.0], [77.4, 1237.0], [77.5, 1241.0], [77.6, 1244.0], [77.7, 1246.0], [77.8, 1247.0], [77.9, 1249.0], [78.0, 1254.0], [78.1, 1256.0], [78.2, 1258.0], [78.3, 1261.0], [78.4, 1262.0], [78.5, 1264.0], [78.6, 1267.0], [78.7, 1270.0], [78.8, 1274.0], [78.9, 1276.0], [79.0, 1278.0], [79.1, 1281.0], [79.2, 1283.0], [79.3, 1285.0], [79.4, 1289.0], [79.5, 1293.0], [79.6, 1295.0], [79.7, 1297.0], [79.8, 1298.0], [79.9, 1303.0], [80.0, 1304.0], [80.1, 1306.0], [80.2, 1308.0], [80.3, 1311.0], [80.4, 1317.0], [80.5, 1317.0], [80.6, 1320.0], [80.7, 1323.0], [80.8, 1327.0], [80.9, 1328.0], [81.0, 1331.0], [81.1, 1332.0], [81.2, 1334.0], [81.3, 1337.0], [81.4, 1339.0], [81.5, 1340.0], [81.6, 1341.0], [81.7, 1343.0], [81.8, 1346.0], [81.9, 1348.0], [82.0, 1351.0], [82.1, 1352.0], [82.2, 1356.0], [82.3, 1357.0], [82.4, 1359.0], [82.5, 1361.0], [82.6, 1363.0], [82.7, 1366.0], [82.8, 1367.0], [82.9, 1370.0], [83.0, 1373.0], [83.1, 1377.0], [83.2, 1377.0], [83.3, 1379.0], [83.4, 1381.0], [83.5, 1383.0], [83.6, 1386.0], [83.7, 1388.0], [83.8, 1394.0], [83.9, 1396.0], [84.0, 1398.0], [84.1, 1401.0], [84.2, 1403.0], [84.3, 1407.0], [84.4, 1408.0], [84.5, 1411.0], [84.6, 1413.0], [84.7, 1418.0], [84.8, 1422.0], [84.9, 1423.0], [85.0, 1424.0], [85.1, 1426.0], [85.2, 1430.0], [85.3, 1432.0], [85.4, 1436.0], [85.5, 1438.0], [85.6, 1441.0], [85.7, 1446.0], [85.8, 1449.0], [85.9, 1450.0], [86.0, 1452.0], [86.1, 1457.0], [86.2, 1460.0], [86.3, 1461.0], [86.4, 1465.0], [86.5, 1470.0], [86.6, 1473.0], [86.7, 1476.0], [86.8, 1478.0], [86.9, 1480.0], [87.0, 1483.0], [87.1, 1485.0], [87.2, 1494.0], [87.3, 1498.0], [87.4, 1500.0], [87.5, 1502.0], [87.6, 1507.0], [87.7, 1513.0], [87.8, 1517.0], [87.9, 1520.0], [88.0, 1521.0], [88.1, 1527.0], [88.2, 1530.0], [88.3, 1533.0], [88.4, 1537.0], [88.5, 1543.0], [88.6, 1546.0], [88.7, 1552.0], [88.8, 1555.0], [88.9, 1556.0], [89.0, 1561.0], [89.1, 1569.0], [89.2, 1572.0], [89.3, 1577.0], [89.4, 1582.0], [89.5, 1584.0], [89.6, 1594.0], [89.7, 1599.0], [89.8, 1604.0], [89.9, 1607.0], [90.0, 1614.0], [90.1, 1619.0], [90.2, 1625.0], [90.3, 1631.0], [90.4, 1634.0], [90.5, 1644.0], [90.6, 1649.0], [90.7, 1656.0], [90.8, 1660.0], [90.9, 1665.0], [91.0, 1678.0], [91.1, 1687.0], [91.2, 1690.0], [91.3, 1693.0], [91.4, 1701.0], [91.5, 1712.0], [91.6, 1718.0], [91.7, 1725.0], [91.8, 1733.0], [91.9, 1737.0], [92.0, 1744.0], [92.1, 1749.0], [92.2, 1757.0], [92.3, 1760.0], [92.4, 1767.0], [92.5, 1774.0], [92.6, 1787.0], [92.7, 1798.0], [92.8, 1813.0], [92.9, 1823.0], [93.0, 1828.0], [93.1, 1834.0], [93.2, 1841.0], [93.3, 1849.0], [93.4, 1852.0], [93.5, 1863.0], [93.6, 1869.0], [93.7, 1881.0], [93.8, 1889.0], [93.9, 1894.0], [94.0, 1902.0], [94.1, 1911.0], [94.2, 1924.0], [94.3, 1948.0], [94.4, 1965.0], [94.5, 1984.0], [94.6, 1992.0], [94.7, 2005.0], [94.8, 2009.0], [94.9, 2021.0], [95.0, 2032.0], [95.1, 2040.0], [95.2, 2045.0], [95.3, 2060.0], [95.4, 2069.0], [95.5, 2078.0], [95.6, 2092.0], [95.7, 2105.0], [95.8, 2115.0], [95.9, 2131.0], [96.0, 2137.0], [96.1, 2149.0], [96.2, 2155.0], [96.3, 2163.0], [96.4, 2171.0], [96.5, 2185.0], [96.6, 2191.0], [96.7, 2207.0], [96.8, 2224.0], [96.9, 2231.0], [97.0, 2241.0], [97.1, 2251.0], [97.2, 2260.0], [97.3, 2268.0], [97.4, 2289.0], [97.5, 2305.0], [97.6, 2326.0], [97.7, 2335.0], [97.8, 2370.0], [97.9, 2394.0], [98.0, 2411.0], [98.1, 2438.0], [98.2, 2514.0], [98.3, 2547.0], [98.4, 2571.0], [98.5, 2612.0], [98.6, 2642.0], [98.7, 2670.0], [98.8, 2726.0], [98.9, 2835.0], [99.0, 2915.0], [99.1, 3053.0], [99.2, 3188.0], [99.3, 3237.0], [99.4, 3470.0], [99.5, 3773.0], [99.6, 3999.0], [99.7, 4056.0], [99.8, 4382.0], [99.9, 4960.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 582.0, "series": [{"data": [[600.0, 426.0], [700.0, 329.0], [800.0, 288.0], [900.0, 251.0], [1000.0, 288.0], [1100.0, 261.0], [1200.0, 219.0], [1300.0, 216.0], [1400.0, 174.0], [1500.0, 122.0], [1600.0, 86.0], [1700.0, 72.0], [1800.0, 61.0], [1900.0, 37.0], [2000.0, 54.0], [2100.0, 52.0], [2300.0, 28.0], [2200.0, 39.0], [2400.0, 11.0], [2500.0, 15.0], [2600.0, 15.0], [2800.0, 7.0], [2700.0, 5.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 6.0], [3200.0, 4.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 2.0], [3700.0, 2.0], [3600.0, 3.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 7.0], [4300.0, 2.0], [4200.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [100.0, 47.0], [200.0, 546.0], [300.0, 379.0], [400.0, 582.0], [500.0, 529.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2979.0, "series": [{"data": [[0.0, 1558.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2979.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 653.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.884615384615385, "minX": 1.60223796E12, "maxY": 10.0, "series": [{"data": [[1.60223802E12, 10.0], [1.60223832E12, 10.0], [1.60223838E12, 10.0], [1.6022382E12, 10.0], [1.60223826E12, 10.0], [1.60223808E12, 10.0], [1.60223814E12, 10.0], [1.60223796E12, 10.0], [1.60223844E12, 9.884615384615385]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223844E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 333.0, "minX": 1.0, "maxY": 2706.0, "series": [{"data": [[8.0, 333.0], [4.0, 894.0], [2.0, 2612.0], [1.0, 2706.0], [9.0, 741.0], [10.0, 886.9442300270182], [5.0, 818.0], [6.0, 1134.0], [3.0, 948.0], [7.0, 513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 887.4675399730319]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 206.76666666666668, "minX": 1.60223796E12, "maxY": 3404502.1166666667, "series": [{"data": [[1.60223802E12, 3056486.066666667], [1.60223832E12, 3257177.0833333335], [1.60223838E12, 3207482.7], [1.6022382E12, 3179104.2666666666], [1.60223826E12, 2897369.75], [1.60223808E12, 3051457.9], [1.60223814E12, 3404502.1166666667], [1.60223796E12, 192171.36666666667], [1.60223844E12, 1726641.9666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223802E12, 4515.2], [1.60223832E12, 5528.616666666667], [1.60223838E12, 5628.633333333333], [1.6022382E12, 4558.0], [1.60223826E12, 4430.783333333334], [1.60223808E12, 5291.883333333333], [1.60223814E12, 5487.016666666666], [1.60223796E12, 206.76666666666668], [1.60223844E12, 2937.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223844E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 802.1231593038825, "minX": 1.60223796E12, "maxY": 1682.814814814815, "series": [{"data": [[1.60223802E12, 952.3679999999999], [1.60223832E12, 802.1231593038825], [1.60223838E12, 806.6059379217284], [1.6022382E12, 987.1008264462806], [1.60223826E12, 975.1896272285253], [1.60223808E12, 846.5370629370633], [1.60223814E12, 826.473756906077], [1.60223796E12, 1682.814814814815], [1.60223844E12, 940.4307692307693]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223844E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 800.408299866131, "minX": 1.60223796E12, "maxY": 1679.7037037037037, "series": [{"data": [[1.60223802E12, 950.2832000000005], [1.60223832E12, 800.408299866131], [1.60223838E12, 805.0215924426449], [1.6022382E12, 984.788429752066], [1.60223826E12, 973.1021069692064], [1.60223808E12, 844.6363636363641], [1.60223814E12, 824.4254143646417], [1.60223796E12, 1679.7037037037037], [1.60223844E12, 938.8025641025642]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223844E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005128205128205125, "minX": 1.60223796E12, "maxY": 3.518518518518519, "series": [{"data": [[1.60223802E12, 0.017600000000000005], [1.60223832E12, 0.018741633199464536], [1.60223838E12, 0.029689608636977064], [1.6022382E12, 0.021487603305785113], [1.60223826E12, 0.024311183144246372], [1.60223808E12, 0.013986013986013995], [1.60223814E12, 0.011049723756906082], [1.60223796E12, 3.518518518518519], [1.60223844E12, 0.005128205128205125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223844E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60223796E12, "maxY": 5859.0, "series": [{"data": [[1.60223802E12, 5522.0], [1.60223832E12, 3074.0], [1.60223838E12, 3194.0], [1.6022382E12, 4439.0], [1.60223826E12, 5859.0], [1.60223808E12, 3643.0], [1.60223814E12, 3310.0], [1.60223796E12, 3999.0], [1.60223844E12, 4047.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223802E12, 201.0], [1.60223832E12, 201.7319998216629], [1.60223838E12, 192.67799982309342], [1.6022382E12, 195.0], [1.60223826E12, 202.0], [1.60223808E12, 198.8879996585846], [1.60223814E12, 198.51599982738495], [1.60223796E12, 202.0], [1.60223844E12, 192.03799981355667]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223802E12, 201.19740005970002], [1.60223832E12, 202.40520007133483], [1.60223838E12, 193.0], [1.6022382E12, 195.0], [1.60223826E12, 202.11820005893708], [1.60223808E12, 200.17680013656616], [1.60223814E12, 199.16760006904602], [1.60223796E12, 202.0], [1.60223844E12, 192.74180007457733]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223802E12, 201.0], [1.60223832E12, 202.10599991083146], [1.60223838E12, 193.0], [1.6022382E12, 195.0], [1.60223826E12, 202.0], [1.60223808E12, 199.6039998292923], [1.60223814E12, 198.87799991369246], [1.60223796E12, 202.0], [1.60223844E12, 192.42899990677833]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223802E12, 195.0], [1.60223832E12, 194.0], [1.60223838E12, 187.0], [1.6022382E12, 192.0], [1.60223826E12, 195.0], [1.60223808E12, 187.0], [1.60223814E12, 187.0], [1.60223796E12, 202.0], [1.60223844E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223802E12, 829.0], [1.60223832E12, 624.0], [1.60223838E12, 649.0], [1.6022382E12, 851.0], [1.60223826E12, 798.0], [1.60223808E12, 642.0], [1.60223814E12, 628.0], [1.60223796E12, 904.0], [1.60223844E12, 777.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223844E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 435.0, "minX": 1.0, "maxY": 2659.0, "series": [{"data": [[2.0, 2659.0], [3.0, 1068.0], [4.0, 1377.0], [5.0, 1394.0], [6.0, 1145.0], [7.0, 1024.0], [8.0, 1044.5], [9.0, 987.5], [10.0, 946.0], [11.0, 847.0], [12.0, 788.0], [13.0, 732.0], [14.0, 672.5], [15.0, 604.0], [16.0, 535.5], [1.0, 2538.0], [17.0, 498.0], [18.0, 490.0], [19.0, 488.0], [20.0, 450.5], [21.0, 458.0], [22.0, 462.0], [23.0, 452.0], [24.0, 435.5], [25.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 859.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 435.0, "minX": 1.0, "maxY": 2650.5, "series": [{"data": [[2.0, 2650.5], [3.0, 1068.0], [4.0, 1373.0], [5.0, 1392.0], [6.0, 1137.5], [7.0, 1022.5], [8.0, 1040.0], [9.0, 987.0], [10.0, 945.5], [11.0, 846.0], [12.0, 787.5], [13.0, 731.0], [14.0, 670.5], [15.0, 603.0], [16.0, 535.0], [1.0, 2528.0], [17.0, 498.0], [18.0, 490.0], [19.0, 488.0], [20.0, 450.5], [21.0, 458.0], [22.0, 461.5], [23.0, 452.0], [24.0, 435.5], [25.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 859.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.60223796E12, "maxY": 12.45, "series": [{"data": [[1.60223802E12, 10.416666666666666], [1.60223832E12, 12.45], [1.60223838E12, 12.35], [1.6022382E12, 10.083333333333334], [1.60223826E12, 10.283333333333333], [1.60223808E12, 11.916666666666666], [1.60223814E12, 12.066666666666666], [1.60223796E12, 0.6166666666666667], [1.60223844E12, 6.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223844E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223796E12, "maxY": 12.45, "series": [{"data": [[1.60223802E12, 10.416666666666666], [1.60223832E12, 12.45], [1.60223838E12, 12.35], [1.6022382E12, 10.083333333333334], [1.60223826E12, 10.283333333333333], [1.60223808E12, 11.916666666666666], [1.60223814E12, 12.05], [1.60223796E12, 0.45], [1.60223844E12, 6.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223814E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223844E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223796E12, "maxY": 12.45, "series": [{"data": [[1.60223802E12, 10.416666666666666], [1.60223832E12, 12.45], [1.60223838E12, 12.35], [1.6022382E12, 10.083333333333334], [1.60223826E12, 10.283333333333333], [1.60223808E12, 11.916666666666666], [1.60223814E12, 12.05], [1.60223796E12, 0.45], [1.60223844E12, 6.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223814E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223844E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223796E12, "maxY": 12.45, "series": [{"data": [[1.60223802E12, 10.416666666666666], [1.60223832E12, 12.45], [1.60223838E12, 12.35], [1.6022382E12, 10.083333333333334], [1.60223826E12, 10.283333333333333], [1.60223808E12, 11.916666666666666], [1.60223814E12, 12.05], [1.60223796E12, 0.45], [1.60223844E12, 6.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223814E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223844E12, "title": "Total Transactions Per Second"}},
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

