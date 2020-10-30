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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 5716.0, "series": [{"data": [[0.0, 182.0], [0.1, 185.0], [0.2, 187.0], [0.3, 189.0], [0.4, 191.0], [0.5, 192.0], [0.6, 193.0], [0.7, 194.0], [0.8, 196.0], [0.9, 196.0], [1.0, 197.0], [1.1, 198.0], [1.2, 199.0], [1.3, 200.0], [1.4, 200.0], [1.5, 201.0], [1.6, 202.0], [1.7, 202.0], [1.8, 203.0], [1.9, 204.0], [2.0, 205.0], [2.1, 206.0], [2.2, 206.0], [2.3, 207.0], [2.4, 207.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 210.0], [2.9, 211.0], [3.0, 212.0], [3.1, 212.0], [3.2, 213.0], [3.3, 214.0], [3.4, 214.0], [3.5, 215.0], [3.6, 216.0], [3.7, 216.0], [3.8, 217.0], [3.9, 218.0], [4.0, 219.0], [4.1, 220.0], [4.2, 221.0], [4.3, 222.0], [4.4, 223.0], [4.5, 224.0], [4.6, 225.0], [4.7, 226.0], [4.8, 227.0], [4.9, 229.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 232.0], [5.4, 233.0], [5.5, 234.0], [5.6, 235.0], [5.7, 236.0], [5.8, 237.0], [5.9, 238.0], [6.0, 239.0], [6.1, 240.0], [6.2, 241.0], [6.3, 241.0], [6.4, 242.0], [6.5, 244.0], [6.6, 244.0], [6.7, 245.0], [6.8, 246.0], [6.9, 247.0], [7.0, 247.0], [7.1, 249.0], [7.2, 250.0], [7.3, 251.0], [7.4, 252.0], [7.5, 252.0], [7.6, 254.0], [7.7, 254.0], [7.8, 256.0], [7.9, 258.0], [8.0, 259.0], [8.1, 260.0], [8.2, 262.0], [8.3, 262.0], [8.4, 263.0], [8.5, 266.0], [8.6, 267.0], [8.7, 267.0], [8.8, 268.0], [8.9, 268.0], [9.0, 269.0], [9.1, 269.0], [9.2, 270.0], [9.3, 271.0], [9.4, 273.0], [9.5, 273.0], [9.6, 274.0], [9.7, 275.0], [9.8, 276.0], [9.9, 277.0], [10.0, 277.0], [10.1, 278.0], [10.2, 279.0], [10.3, 280.0], [10.4, 280.0], [10.5, 281.0], [10.6, 282.0], [10.7, 284.0], [10.8, 285.0], [10.9, 285.0], [11.0, 287.0], [11.1, 288.0], [11.2, 289.0], [11.3, 289.0], [11.4, 290.0], [11.5, 291.0], [11.6, 292.0], [11.7, 293.0], [11.8, 293.0], [11.9, 294.0], [12.0, 294.0], [12.1, 295.0], [12.2, 296.0], [12.3, 297.0], [12.4, 298.0], [12.5, 299.0], [12.6, 299.0], [12.7, 300.0], [12.8, 302.0], [12.9, 303.0], [13.0, 304.0], [13.1, 307.0], [13.2, 308.0], [13.3, 308.0], [13.4, 309.0], [13.5, 310.0], [13.6, 311.0], [13.7, 312.0], [13.8, 313.0], [13.9, 315.0], [14.0, 316.0], [14.1, 316.0], [14.2, 318.0], [14.3, 319.0], [14.4, 320.0], [14.5, 321.0], [14.6, 322.0], [14.7, 324.0], [14.8, 325.0], [14.9, 326.0], [15.0, 327.0], [15.1, 328.0], [15.2, 328.0], [15.3, 330.0], [15.4, 332.0], [15.5, 333.0], [15.6, 336.0], [15.7, 338.0], [15.8, 339.0], [15.9, 341.0], [16.0, 342.0], [16.1, 344.0], [16.2, 347.0], [16.3, 351.0], [16.4, 352.0], [16.5, 354.0], [16.6, 357.0], [16.7, 359.0], [16.8, 362.0], [16.9, 366.0], [17.0, 367.0], [17.1, 368.0], [17.2, 370.0], [17.3, 371.0], [17.4, 373.0], [17.5, 375.0], [17.6, 376.0], [17.7, 376.0], [17.8, 377.0], [17.9, 379.0], [18.0, 381.0], [18.1, 383.0], [18.2, 384.0], [18.3, 385.0], [18.4, 385.0], [18.5, 386.0], [18.6, 387.0], [18.7, 387.0], [18.8, 387.0], [18.9, 388.0], [19.0, 389.0], [19.1, 389.0], [19.2, 391.0], [19.3, 391.0], [19.4, 392.0], [19.5, 393.0], [19.6, 393.0], [19.7, 394.0], [19.8, 395.0], [19.9, 395.0], [20.0, 396.0], [20.1, 396.0], [20.2, 397.0], [20.3, 398.0], [20.4, 398.0], [20.5, 399.0], [20.6, 400.0], [20.7, 401.0], [20.8, 401.0], [20.9, 402.0], [21.0, 403.0], [21.1, 403.0], [21.2, 404.0], [21.3, 405.0], [21.4, 406.0], [21.5, 406.0], [21.6, 407.0], [21.7, 408.0], [21.8, 408.0], [21.9, 410.0], [22.0, 410.0], [22.1, 410.0], [22.2, 411.0], [22.3, 412.0], [22.4, 413.0], [22.5, 414.0], [22.6, 415.0], [22.7, 416.0], [22.8, 416.0], [22.9, 417.0], [23.0, 418.0], [23.1, 419.0], [23.2, 420.0], [23.3, 421.0], [23.4, 421.0], [23.5, 421.0], [23.6, 422.0], [23.7, 422.0], [23.8, 423.0], [23.9, 425.0], [24.0, 426.0], [24.1, 427.0], [24.2, 428.0], [24.3, 428.0], [24.4, 429.0], [24.5, 430.0], [24.6, 432.0], [24.7, 432.0], [24.8, 434.0], [24.9, 435.0], [25.0, 436.0], [25.1, 438.0], [25.2, 438.0], [25.3, 439.0], [25.4, 440.0], [25.5, 442.0], [25.6, 443.0], [25.7, 444.0], [25.8, 445.0], [25.9, 446.0], [26.0, 447.0], [26.1, 448.0], [26.2, 449.0], [26.3, 449.0], [26.4, 450.0], [26.5, 451.0], [26.6, 451.0], [26.7, 452.0], [26.8, 454.0], [26.9, 455.0], [27.0, 455.0], [27.1, 456.0], [27.2, 456.0], [27.3, 458.0], [27.4, 459.0], [27.5, 459.0], [27.6, 460.0], [27.7, 461.0], [27.8, 462.0], [27.9, 462.0], [28.0, 463.0], [28.1, 464.0], [28.2, 465.0], [28.3, 466.0], [28.4, 467.0], [28.5, 467.0], [28.6, 468.0], [28.7, 468.0], [28.8, 469.0], [28.9, 470.0], [29.0, 471.0], [29.1, 471.0], [29.2, 472.0], [29.3, 472.0], [29.4, 473.0], [29.5, 474.0], [29.6, 475.0], [29.7, 476.0], [29.8, 477.0], [29.9, 478.0], [30.0, 478.0], [30.1, 479.0], [30.2, 480.0], [30.3, 481.0], [30.4, 482.0], [30.5, 484.0], [30.6, 485.0], [30.7, 486.0], [30.8, 487.0], [30.9, 488.0], [31.0, 488.0], [31.1, 489.0], [31.2, 490.0], [31.3, 491.0], [31.4, 493.0], [31.5, 494.0], [31.6, 495.0], [31.7, 497.0], [31.8, 497.0], [31.9, 498.0], [32.0, 499.0], [32.1, 500.0], [32.2, 501.0], [32.3, 503.0], [32.4, 504.0], [32.5, 504.0], [32.6, 506.0], [32.7, 507.0], [32.8, 508.0], [32.9, 509.0], [33.0, 510.0], [33.1, 511.0], [33.2, 513.0], [33.3, 514.0], [33.4, 515.0], [33.5, 516.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 519.0], [34.0, 521.0], [34.1, 523.0], [34.2, 523.0], [34.3, 525.0], [34.4, 526.0], [34.5, 527.0], [34.6, 528.0], [34.7, 529.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 533.0], [35.2, 535.0], [35.3, 536.0], [35.4, 536.0], [35.5, 537.0], [35.6, 538.0], [35.7, 539.0], [35.8, 540.0], [35.9, 540.0], [36.0, 540.0], [36.1, 541.0], [36.2, 542.0], [36.3, 542.0], [36.4, 543.0], [36.5, 544.0], [36.6, 545.0], [36.7, 546.0], [36.8, 547.0], [36.9, 548.0], [37.0, 549.0], [37.1, 550.0], [37.2, 551.0], [37.3, 552.0], [37.4, 553.0], [37.5, 554.0], [37.6, 555.0], [37.7, 556.0], [37.8, 556.0], [37.9, 557.0], [38.0, 558.0], [38.1, 559.0], [38.2, 559.0], [38.3, 560.0], [38.4, 561.0], [38.5, 561.0], [38.6, 562.0], [38.7, 563.0], [38.8, 564.0], [38.9, 564.0], [39.0, 565.0], [39.1, 566.0], [39.2, 566.0], [39.3, 567.0], [39.4, 567.0], [39.5, 568.0], [39.6, 568.0], [39.7, 569.0], [39.8, 570.0], [39.9, 570.0], [40.0, 571.0], [40.1, 572.0], [40.2, 573.0], [40.3, 574.0], [40.4, 575.0], [40.5, 576.0], [40.6, 577.0], [40.7, 578.0], [40.8, 578.0], [40.9, 579.0], [41.0, 580.0], [41.1, 581.0], [41.2, 582.0], [41.3, 582.0], [41.4, 583.0], [41.5, 584.0], [41.6, 585.0], [41.7, 587.0], [41.8, 588.0], [41.9, 589.0], [42.0, 590.0], [42.1, 592.0], [42.2, 593.0], [42.3, 593.0], [42.4, 594.0], [42.5, 595.0], [42.6, 596.0], [42.7, 597.0], [42.8, 599.0], [42.9, 600.0], [43.0, 601.0], [43.1, 602.0], [43.2, 603.0], [43.3, 605.0], [43.4, 605.0], [43.5, 606.0], [43.6, 607.0], [43.7, 609.0], [43.8, 610.0], [43.9, 611.0], [44.0, 612.0], [44.1, 613.0], [44.2, 614.0], [44.3, 615.0], [44.4, 618.0], [44.5, 619.0], [44.6, 620.0], [44.7, 621.0], [44.8, 622.0], [44.9, 623.0], [45.0, 625.0], [45.1, 627.0], [45.2, 628.0], [45.3, 629.0], [45.4, 631.0], [45.5, 632.0], [45.6, 634.0], [45.7, 635.0], [45.8, 637.0], [45.9, 639.0], [46.0, 641.0], [46.1, 642.0], [46.2, 644.0], [46.3, 646.0], [46.4, 647.0], [46.5, 649.0], [46.6, 650.0], [46.7, 651.0], [46.8, 653.0], [46.9, 654.0], [47.0, 656.0], [47.1, 657.0], [47.2, 659.0], [47.3, 661.0], [47.4, 663.0], [47.5, 666.0], [47.6, 666.0], [47.7, 667.0], [47.8, 668.0], [47.9, 670.0], [48.0, 670.0], [48.1, 672.0], [48.2, 673.0], [48.3, 674.0], [48.4, 676.0], [48.5, 678.0], [48.6, 679.0], [48.7, 681.0], [48.8, 682.0], [48.9, 684.0], [49.0, 685.0], [49.1, 687.0], [49.2, 688.0], [49.3, 690.0], [49.4, 691.0], [49.5, 693.0], [49.6, 693.0], [49.7, 695.0], [49.8, 695.0], [49.9, 697.0], [50.0, 700.0], [50.1, 701.0], [50.2, 702.0], [50.3, 703.0], [50.4, 704.0], [50.5, 706.0], [50.6, 708.0], [50.7, 710.0], [50.8, 712.0], [50.9, 716.0], [51.0, 717.0], [51.1, 721.0], [51.2, 722.0], [51.3, 724.0], [51.4, 725.0], [51.5, 726.0], [51.6, 728.0], [51.7, 730.0], [51.8, 732.0], [51.9, 733.0], [52.0, 735.0], [52.1, 736.0], [52.2, 737.0], [52.3, 738.0], [52.4, 740.0], [52.5, 741.0], [52.6, 743.0], [52.7, 745.0], [52.8, 745.0], [52.9, 747.0], [53.0, 748.0], [53.1, 750.0], [53.2, 752.0], [53.3, 754.0], [53.4, 755.0], [53.5, 757.0], [53.6, 760.0], [53.7, 762.0], [53.8, 763.0], [53.9, 766.0], [54.0, 768.0], [54.1, 771.0], [54.2, 772.0], [54.3, 774.0], [54.4, 775.0], [54.5, 776.0], [54.6, 777.0], [54.7, 778.0], [54.8, 780.0], [54.9, 781.0], [55.0, 782.0], [55.1, 784.0], [55.2, 786.0], [55.3, 788.0], [55.4, 790.0], [55.5, 791.0], [55.6, 792.0], [55.7, 794.0], [55.8, 795.0], [55.9, 797.0], [56.0, 800.0], [56.1, 804.0], [56.2, 805.0], [56.3, 806.0], [56.4, 808.0], [56.5, 809.0], [56.6, 811.0], [56.7, 812.0], [56.8, 813.0], [56.9, 814.0], [57.0, 816.0], [57.1, 817.0], [57.2, 818.0], [57.3, 820.0], [57.4, 822.0], [57.5, 825.0], [57.6, 827.0], [57.7, 828.0], [57.8, 830.0], [57.9, 831.0], [58.0, 833.0], [58.1, 835.0], [58.2, 837.0], [58.3, 839.0], [58.4, 841.0], [58.5, 843.0], [58.6, 846.0], [58.7, 848.0], [58.8, 850.0], [58.9, 850.0], [59.0, 852.0], [59.1, 853.0], [59.2, 854.0], [59.3, 857.0], [59.4, 858.0], [59.5, 861.0], [59.6, 862.0], [59.7, 864.0], [59.8, 865.0], [59.9, 865.0], [60.0, 866.0], [60.1, 867.0], [60.2, 869.0], [60.3, 870.0], [60.4, 872.0], [60.5, 874.0], [60.6, 877.0], [60.7, 879.0], [60.8, 880.0], [60.9, 882.0], [61.0, 883.0], [61.1, 885.0], [61.2, 887.0], [61.3, 889.0], [61.4, 890.0], [61.5, 892.0], [61.6, 894.0], [61.7, 896.0], [61.8, 898.0], [61.9, 899.0], [62.0, 900.0], [62.1, 901.0], [62.2, 903.0], [62.3, 904.0], [62.4, 905.0], [62.5, 908.0], [62.6, 909.0], [62.7, 912.0], [62.8, 913.0], [62.9, 915.0], [63.0, 916.0], [63.1, 919.0], [63.2, 921.0], [63.3, 922.0], [63.4, 925.0], [63.5, 927.0], [63.6, 929.0], [63.7, 932.0], [63.8, 934.0], [63.9, 936.0], [64.0, 937.0], [64.1, 939.0], [64.2, 939.0], [64.3, 942.0], [64.4, 946.0], [64.5, 947.0], [64.6, 948.0], [64.7, 950.0], [64.8, 952.0], [64.9, 953.0], [65.0, 954.0], [65.1, 955.0], [65.2, 959.0], [65.3, 960.0], [65.4, 962.0], [65.5, 963.0], [65.6, 964.0], [65.7, 966.0], [65.8, 967.0], [65.9, 968.0], [66.0, 969.0], [66.1, 972.0], [66.2, 974.0], [66.3, 975.0], [66.4, 976.0], [66.5, 979.0], [66.6, 981.0], [66.7, 983.0], [66.8, 985.0], [66.9, 989.0], [67.0, 991.0], [67.1, 995.0], [67.2, 997.0], [67.3, 998.0], [67.4, 1002.0], [67.5, 1004.0], [67.6, 1005.0], [67.7, 1007.0], [67.8, 1008.0], [67.9, 1010.0], [68.0, 1012.0], [68.1, 1014.0], [68.2, 1015.0], [68.3, 1016.0], [68.4, 1018.0], [68.5, 1018.0], [68.6, 1021.0], [68.7, 1022.0], [68.8, 1025.0], [68.9, 1026.0], [69.0, 1027.0], [69.1, 1029.0], [69.2, 1030.0], [69.3, 1032.0], [69.4, 1034.0], [69.5, 1034.0], [69.6, 1037.0], [69.7, 1038.0], [69.8, 1040.0], [69.9, 1042.0], [70.0, 1043.0], [70.1, 1045.0], [70.2, 1047.0], [70.3, 1047.0], [70.4, 1049.0], [70.5, 1051.0], [70.6, 1053.0], [70.7, 1054.0], [70.8, 1056.0], [70.9, 1058.0], [71.0, 1060.0], [71.1, 1062.0], [71.2, 1064.0], [71.3, 1065.0], [71.4, 1066.0], [71.5, 1068.0], [71.6, 1069.0], [71.7, 1070.0], [71.8, 1071.0], [71.9, 1074.0], [72.0, 1075.0], [72.1, 1076.0], [72.2, 1078.0], [72.3, 1079.0], [72.4, 1081.0], [72.5, 1082.0], [72.6, 1084.0], [72.7, 1086.0], [72.8, 1087.0], [72.9, 1090.0], [73.0, 1091.0], [73.1, 1093.0], [73.2, 1097.0], [73.3, 1098.0], [73.4, 1099.0], [73.5, 1102.0], [73.6, 1104.0], [73.7, 1106.0], [73.8, 1108.0], [73.9, 1109.0], [74.0, 1110.0], [74.1, 1112.0], [74.2, 1113.0], [74.3, 1115.0], [74.4, 1119.0], [74.5, 1121.0], [74.6, 1126.0], [74.7, 1129.0], [74.8, 1131.0], [74.9, 1133.0], [75.0, 1134.0], [75.1, 1135.0], [75.2, 1138.0], [75.3, 1141.0], [75.4, 1143.0], [75.5, 1145.0], [75.6, 1148.0], [75.7, 1150.0], [75.8, 1154.0], [75.9, 1158.0], [76.0, 1160.0], [76.1, 1163.0], [76.2, 1165.0], [76.3, 1168.0], [76.4, 1172.0], [76.5, 1173.0], [76.6, 1175.0], [76.7, 1176.0], [76.8, 1178.0], [76.9, 1181.0], [77.0, 1183.0], [77.1, 1187.0], [77.2, 1188.0], [77.3, 1190.0], [77.4, 1194.0], [77.5, 1197.0], [77.6, 1198.0], [77.7, 1201.0], [77.8, 1203.0], [77.9, 1205.0], [78.0, 1207.0], [78.1, 1211.0], [78.2, 1212.0], [78.3, 1215.0], [78.4, 1218.0], [78.5, 1222.0], [78.6, 1224.0], [78.7, 1229.0], [78.8, 1230.0], [78.9, 1234.0], [79.0, 1237.0], [79.1, 1243.0], [79.2, 1247.0], [79.3, 1249.0], [79.4, 1250.0], [79.5, 1252.0], [79.6, 1254.0], [79.7, 1255.0], [79.8, 1258.0], [79.9, 1260.0], [80.0, 1263.0], [80.1, 1265.0], [80.2, 1267.0], [80.3, 1269.0], [80.4, 1270.0], [80.5, 1272.0], [80.6, 1274.0], [80.7, 1276.0], [80.8, 1278.0], [80.9, 1279.0], [81.0, 1282.0], [81.1, 1283.0], [81.2, 1285.0], [81.3, 1288.0], [81.4, 1292.0], [81.5, 1294.0], [81.6, 1295.0], [81.7, 1298.0], [81.8, 1299.0], [81.9, 1301.0], [82.0, 1303.0], [82.1, 1306.0], [82.2, 1308.0], [82.3, 1309.0], [82.4, 1311.0], [82.5, 1313.0], [82.6, 1315.0], [82.7, 1317.0], [82.8, 1320.0], [82.9, 1322.0], [83.0, 1322.0], [83.1, 1326.0], [83.2, 1329.0], [83.3, 1330.0], [83.4, 1332.0], [83.5, 1334.0], [83.6, 1336.0], [83.7, 1339.0], [83.8, 1343.0], [83.9, 1344.0], [84.0, 1347.0], [84.1, 1350.0], [84.2, 1352.0], [84.3, 1357.0], [84.4, 1360.0], [84.5, 1363.0], [84.6, 1363.0], [84.7, 1365.0], [84.8, 1368.0], [84.9, 1371.0], [85.0, 1372.0], [85.1, 1374.0], [85.2, 1378.0], [85.3, 1381.0], [85.4, 1383.0], [85.5, 1387.0], [85.6, 1390.0], [85.7, 1391.0], [85.8, 1394.0], [85.9, 1401.0], [86.0, 1406.0], [86.1, 1408.0], [86.2, 1414.0], [86.3, 1417.0], [86.4, 1421.0], [86.5, 1422.0], [86.6, 1426.0], [86.7, 1430.0], [86.8, 1433.0], [86.9, 1435.0], [87.0, 1437.0], [87.1, 1440.0], [87.2, 1443.0], [87.3, 1446.0], [87.4, 1450.0], [87.5, 1453.0], [87.6, 1454.0], [87.7, 1458.0], [87.8, 1459.0], [87.9, 1463.0], [88.0, 1467.0], [88.1, 1471.0], [88.2, 1475.0], [88.3, 1479.0], [88.4, 1481.0], [88.5, 1489.0], [88.6, 1491.0], [88.7, 1495.0], [88.8, 1502.0], [88.9, 1506.0], [89.0, 1511.0], [89.1, 1516.0], [89.2, 1524.0], [89.3, 1529.0], [89.4, 1534.0], [89.5, 1538.0], [89.6, 1543.0], [89.7, 1545.0], [89.8, 1548.0], [89.9, 1550.0], [90.0, 1561.0], [90.1, 1565.0], [90.2, 1571.0], [90.3, 1578.0], [90.4, 1584.0], [90.5, 1589.0], [90.6, 1592.0], [90.7, 1596.0], [90.8, 1601.0], [90.9, 1604.0], [91.0, 1607.0], [91.1, 1613.0], [91.2, 1619.0], [91.3, 1631.0], [91.4, 1637.0], [91.5, 1643.0], [91.6, 1652.0], [91.7, 1657.0], [91.8, 1669.0], [91.9, 1677.0], [92.0, 1681.0], [92.1, 1684.0], [92.2, 1688.0], [92.3, 1700.0], [92.4, 1708.0], [92.5, 1714.0], [92.6, 1717.0], [92.7, 1724.0], [92.8, 1734.0], [92.9, 1741.0], [93.0, 1748.0], [93.1, 1757.0], [93.2, 1767.0], [93.3, 1776.0], [93.4, 1783.0], [93.5, 1799.0], [93.6, 1815.0], [93.7, 1834.0], [93.8, 1843.0], [93.9, 1852.0], [94.0, 1867.0], [94.1, 1874.0], [94.2, 1883.0], [94.3, 1895.0], [94.4, 1898.0], [94.5, 1906.0], [94.6, 1925.0], [94.7, 1937.0], [94.8, 1951.0], [94.9, 1957.0], [95.0, 1963.0], [95.1, 1975.0], [95.2, 1985.0], [95.3, 1996.0], [95.4, 2011.0], [95.5, 2021.0], [95.6, 2028.0], [95.7, 2035.0], [95.8, 2042.0], [95.9, 2048.0], [96.0, 2057.0], [96.1, 2062.0], [96.2, 2074.0], [96.3, 2078.0], [96.4, 2094.0], [96.5, 2106.0], [96.6, 2119.0], [96.7, 2126.0], [96.8, 2148.0], [96.9, 2160.0], [97.0, 2186.0], [97.1, 2200.0], [97.2, 2215.0], [97.3, 2232.0], [97.4, 2264.0], [97.5, 2281.0], [97.6, 2305.0], [97.7, 2329.0], [97.8, 2354.0], [97.9, 2414.0], [98.0, 2438.0], [98.1, 2456.0], [98.2, 2490.0], [98.3, 2536.0], [98.4, 2566.0], [98.5, 2599.0], [98.6, 2640.0], [98.7, 2697.0], [98.8, 2727.0], [98.9, 2765.0], [99.0, 2864.0], [99.1, 2944.0], [99.2, 3026.0], [99.3, 3107.0], [99.4, 3212.0], [99.5, 3449.0], [99.6, 3562.0], [99.7, 3863.0], [99.8, 4465.0], [99.9, 4773.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 598.0, "series": [{"data": [[600.0, 371.0], [700.0, 311.0], [800.0, 310.0], [900.0, 278.0], [1000.0, 317.0], [1100.0, 219.0], [1200.0, 218.0], [1300.0, 209.0], [1400.0, 151.0], [1500.0, 105.0], [1600.0, 78.0], [1700.0, 63.0], [1800.0, 48.0], [1900.0, 47.0], [2000.0, 57.0], [2100.0, 33.0], [2200.0, 26.0], [2300.0, 17.0], [2400.0, 16.0], [2500.0, 16.0], [2600.0, 10.0], [2700.0, 13.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 7.0], [3100.0, 5.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 5.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 2.0], [4600.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 2.0], [5000.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [100.0, 67.0], [200.0, 589.0], [300.0, 409.0], [400.0, 598.0], [500.0, 560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 583.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2941.0, "series": [{"data": [[0.0, 1666.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2941.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 583.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.919499105545613, "minX": 1.60401516E12, "maxY": 10.0, "series": [{"data": [[1.60401546E12, 10.0], [1.60401528E12, 10.0], [1.60401534E12, 10.0], [1.60401516E12, 10.0], [1.60401522E12, 10.0], [1.60401552E12, 10.0], [1.60401558E12, 9.919499105545613], [1.6040154E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401558E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 326.0, "minX": 1.0, "maxY": 2287.0, "series": [{"data": [[8.0, 326.0], [4.0, 588.0], [2.0, 1472.0], [1.0, 2287.0], [9.0, 1088.0], [10.0, 855.7394325419799], [5.0, 854.0], [6.0, 773.0], [3.0, 795.0], [7.0, 843.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 855.9946050096336]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2703.0, "minX": 1.60401516E12, "maxY": 3947416.2333333334, "series": [{"data": [[1.60401546E12, 3012941.9], [1.60401528E12, 3947416.2333333334], [1.60401534E12, 3285691.183333333], [1.60401516E12, 1994834.4833333334], [1.60401522E12, 2682202.6], [1.60401552E12, 3390529.0833333335], [1.60401558E12, 2384978.283333333], [1.6040154E12, 3273615.066666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401546E12, 5221.783333333334], [1.60401528E12, 5347.766666666666], [1.60401534E12, 5376.333333333333], [1.60401516E12, 2703.0], [1.60401522E12, 5350.95], [1.60401552E12, 5651.466666666666], [1.60401558E12, 4215.6], [1.6040154E12, 4710.433333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401558E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 799.9637096774194, "minX": 1.60401516E12, "maxY": 995.5984042553188, "series": [{"data": [[1.60401546E12, 838.4824191279879], [1.60401528E12, 847.8994334277619], [1.60401534E12, 834.516174402251], [1.60401516E12, 995.5984042553188], [1.60401522E12, 819.6643929058666], [1.60401552E12, 799.9637096774194], [1.60401558E12, 852.3506261180678], [1.6040154E12, 934.9184615384623]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401558E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.3010752688178, "minX": 1.60401516E12, "maxY": 993.2819148936179, "series": [{"data": [[1.60401546E12, 836.7946554149086], [1.60401528E12, 845.2308781869679], [1.60401534E12, 832.5218002812929], [1.60401516E12, 993.2819148936179], [1.60401522E12, 817.9658935879944], [1.60401552E12, 798.3010752688178], [1.60401558E12, 850.9194991055455], [1.6040154E12, 933.1123076923083]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401558E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008064516129032254, "minX": 1.60401516E12, "maxY": 0.24999999999999997, "series": [{"data": [[1.60401546E12, 0.015471167369901553], [1.60401528E12, 0.018413597733711054], [1.60401534E12, 0.014064697609001404], [1.60401516E12, 0.24999999999999997], [1.60401522E12, 0.016371077762619365], [1.60401552E12, 0.008064516129032254], [1.60401558E12, 0.12343470483005384], [1.6040154E12, 0.030769230769230802]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401558E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60401516E12, "maxY": 5716.0, "series": [{"data": [[1.60401546E12, 3144.0], [1.60401528E12, 4542.0], [1.60401534E12, 4843.0], [1.60401516E12, 5086.0], [1.60401522E12, 4384.0], [1.60401552E12, 2944.0], [1.60401558E12, 3449.0], [1.6040154E12, 5716.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401546E12, 195.40799983024598], [1.60401528E12, 198.36299983143806], [1.60401534E12, 198.22399949073792], [1.60401516E12, 207.0], [1.60401522E12, 202.60599982500077], [1.60401552E12, 191.70499982237817], [1.60401558E12, 191.0399998664856], [1.6040154E12, 198.8589998447895]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401546E12, 196.04880006790162], [1.60401528E12, 198.99930006742477], [1.60401534E12, 200.04880006790162], [1.60401516E12, 207.0], [1.60401522E12, 203.2666000699997], [1.60401552E12, 192.37550007104875], [1.60401558E12, 191.54400005340577], [1.6040154E12, 201.22450031042098]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401546E12, 195.76399991512298], [1.60401528E12, 198.71649991571903], [1.60401534E12, 199.29199974536897], [1.60401516E12, 207.0], [1.60401522E12, 202.97299991250037], [1.60401552E12, 192.07749991118908], [1.60401558E12, 191.3199999332428], [1.6040154E12, 199.92249961197376]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401546E12, 183.0], [1.60401528E12, 182.0], [1.60401534E12, 186.0], [1.60401516E12, 199.0], [1.60401522E12, 189.0], [1.60401552E12, 184.0], [1.60401558E12, 182.0], [1.6040154E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401546E12, 681.0], [1.60401528E12, 649.0], [1.60401534E12, 697.0], [1.60401516E12, 851.0], [1.60401522E12, 682.0], [1.60401552E12, 611.0], [1.60401558E12, 679.0], [1.6040154E12, 815.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401558E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 2287.0, "series": [{"data": [[3.0, 295.0], [4.0, 1000.5], [5.0, 1547.0], [6.0, 1097.0], [7.0, 1080.5], [8.0, 1015.0], [9.0, 951.0], [10.0, 895.5], [11.0, 836.0], [12.0, 811.5], [13.0, 701.0], [14.0, 705.5], [15.0, 567.0], [16.0, 543.0], [1.0, 2287.0], [17.0, 566.5], [18.0, 469.5], [19.0, 395.0], [20.0, 467.5], [21.0, 422.0], [22.0, 415.0], [23.0, 422.5], [24.0, 441.5], [25.0, 408.5], [27.0, 412.0], [28.0, 390.5], [29.0, 391.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 294.0, "minX": 1.0, "maxY": 2276.0, "series": [{"data": [[3.0, 294.0], [4.0, 1000.5], [5.0, 1545.0], [6.0, 1092.5], [7.0, 1078.0], [8.0, 1014.0], [9.0, 945.0], [10.0, 894.5], [11.0, 836.0], [12.0, 808.0], [13.0, 698.0], [14.0, 703.0], [15.0, 567.0], [16.0, 542.5], [1.0, 2276.0], [17.0, 566.0], [18.0, 469.0], [19.0, 394.0], [20.0, 466.0], [21.0, 422.0], [22.0, 415.0], [23.0, 422.0], [24.0, 441.0], [25.0, 408.5], [27.0, 412.0], [28.0, 390.5], [29.0, 391.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.433333333333334, "minX": 1.60401516E12, "maxY": 12.4, "series": [{"data": [[1.60401546E12, 11.85], [1.60401528E12, 11.766666666666667], [1.60401534E12, 11.85], [1.60401516E12, 6.433333333333334], [1.60401522E12, 12.216666666666667], [1.60401552E12, 12.4], [1.60401558E12, 9.15], [1.6040154E12, 10.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401558E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.266666666666667, "minX": 1.60401516E12, "maxY": 12.4, "series": [{"data": [[1.60401546E12, 11.85], [1.60401528E12, 11.766666666666667], [1.60401534E12, 11.85], [1.60401516E12, 6.266666666666667], [1.60401522E12, 12.216666666666667], [1.60401552E12, 12.4], [1.60401558E12, 9.316666666666666], [1.6040154E12, 10.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401558E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.266666666666667, "minX": 1.60401516E12, "maxY": 12.4, "series": [{"data": [[1.60401546E12, 11.85], [1.60401528E12, 11.766666666666667], [1.60401534E12, 11.85], [1.60401516E12, 6.266666666666667], [1.60401522E12, 12.216666666666667], [1.60401552E12, 12.4], [1.60401558E12, 9.316666666666666], [1.6040154E12, 10.833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401558E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.266666666666667, "minX": 1.60401516E12, "maxY": 12.4, "series": [{"data": [[1.60401546E12, 11.85], [1.60401528E12, 11.766666666666667], [1.60401534E12, 11.85], [1.60401516E12, 6.266666666666667], [1.60401522E12, 12.216666666666667], [1.60401552E12, 12.4], [1.60401558E12, 9.316666666666666], [1.6040154E12, 10.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401558E12, "title": "Total Transactions Per Second"}},
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

