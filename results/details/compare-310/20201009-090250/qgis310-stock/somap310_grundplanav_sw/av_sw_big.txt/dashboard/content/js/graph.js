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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 8796.0, "series": [{"data": [[0.0, 175.0], [0.1, 184.0], [0.2, 186.0], [0.3, 188.0], [0.4, 189.0], [0.5, 189.0], [0.6, 190.0], [0.7, 191.0], [0.8, 192.0], [0.9, 192.0], [1.0, 193.0], [1.1, 194.0], [1.2, 194.0], [1.3, 195.0], [1.4, 196.0], [1.5, 196.0], [1.6, 197.0], [1.7, 198.0], [1.8, 198.0], [1.9, 198.0], [2.0, 199.0], [2.1, 199.0], [2.2, 200.0], [2.3, 200.0], [2.4, 201.0], [2.5, 202.0], [2.6, 203.0], [2.7, 204.0], [2.8, 204.0], [2.9, 205.0], [3.0, 205.0], [3.1, 206.0], [3.2, 207.0], [3.3, 208.0], [3.4, 208.0], [3.5, 210.0], [3.6, 210.0], [3.7, 211.0], [3.8, 212.0], [3.9, 213.0], [4.0, 214.0], [4.1, 215.0], [4.2, 217.0], [4.3, 217.0], [4.4, 218.0], [4.5, 219.0], [4.6, 220.0], [4.7, 221.0], [4.8, 222.0], [4.9, 223.0], [5.0, 223.0], [5.1, 224.0], [5.2, 224.0], [5.3, 225.0], [5.4, 225.0], [5.5, 226.0], [5.6, 227.0], [5.7, 227.0], [5.8, 228.0], [5.9, 229.0], [6.0, 229.0], [6.1, 230.0], [6.2, 231.0], [6.3, 232.0], [6.4, 233.0], [6.5, 233.0], [6.6, 233.0], [6.7, 234.0], [6.8, 235.0], [6.9, 236.0], [7.0, 237.0], [7.1, 239.0], [7.2, 240.0], [7.3, 241.0], [7.4, 244.0], [7.5, 246.0], [7.6, 247.0], [7.7, 248.0], [7.8, 249.0], [7.9, 250.0], [8.0, 252.0], [8.1, 253.0], [8.2, 256.0], [8.3, 257.0], [8.4, 258.0], [8.5, 260.0], [8.6, 261.0], [8.7, 262.0], [8.8, 263.0], [8.9, 263.0], [9.0, 264.0], [9.1, 265.0], [9.2, 265.0], [9.3, 266.0], [9.4, 267.0], [9.5, 267.0], [9.6, 268.0], [9.7, 268.0], [9.8, 269.0], [9.9, 269.0], [10.0, 270.0], [10.1, 271.0], [10.2, 272.0], [10.3, 272.0], [10.4, 273.0], [10.5, 274.0], [10.6, 274.0], [10.7, 275.0], [10.8, 275.0], [10.9, 276.0], [11.0, 277.0], [11.1, 277.0], [11.2, 277.0], [11.3, 278.0], [11.4, 279.0], [11.5, 279.0], [11.6, 280.0], [11.7, 280.0], [11.8, 281.0], [11.9, 282.0], [12.0, 283.0], [12.1, 284.0], [12.2, 285.0], [12.3, 286.0], [12.4, 286.0], [12.5, 288.0], [12.6, 289.0], [12.7, 290.0], [12.8, 291.0], [12.9, 292.0], [13.0, 293.0], [13.1, 294.0], [13.2, 295.0], [13.3, 296.0], [13.4, 298.0], [13.5, 299.0], [13.6, 299.0], [13.7, 301.0], [13.8, 303.0], [13.9, 304.0], [14.0, 306.0], [14.1, 308.0], [14.2, 310.0], [14.3, 310.0], [14.4, 311.0], [14.5, 312.0], [14.6, 313.0], [14.7, 314.0], [14.8, 315.0], [14.9, 317.0], [15.0, 317.0], [15.1, 318.0], [15.2, 319.0], [15.3, 321.0], [15.4, 321.0], [15.5, 323.0], [15.6, 325.0], [15.7, 327.0], [15.8, 328.0], [15.9, 329.0], [16.0, 330.0], [16.1, 332.0], [16.2, 333.0], [16.3, 335.0], [16.4, 336.0], [16.5, 338.0], [16.6, 340.0], [16.7, 342.0], [16.8, 343.0], [16.9, 345.0], [17.0, 348.0], [17.1, 350.0], [17.2, 352.0], [17.3, 356.0], [17.4, 360.0], [17.5, 363.0], [17.6, 366.0], [17.7, 367.0], [17.8, 369.0], [17.9, 370.0], [18.0, 371.0], [18.1, 373.0], [18.2, 375.0], [18.3, 377.0], [18.4, 379.0], [18.5, 380.0], [18.6, 382.0], [18.7, 385.0], [18.8, 386.0], [18.9, 388.0], [19.0, 390.0], [19.1, 390.0], [19.2, 391.0], [19.3, 392.0], [19.4, 394.0], [19.5, 394.0], [19.6, 395.0], [19.7, 397.0], [19.8, 397.0], [19.9, 398.0], [20.0, 399.0], [20.1, 400.0], [20.2, 401.0], [20.3, 402.0], [20.4, 402.0], [20.5, 405.0], [20.6, 405.0], [20.7, 405.0], [20.8, 406.0], [20.9, 406.0], [21.0, 409.0], [21.1, 409.0], [21.2, 410.0], [21.3, 412.0], [21.4, 412.0], [21.5, 414.0], [21.6, 414.0], [21.7, 416.0], [21.8, 416.0], [21.9, 418.0], [22.0, 419.0], [22.1, 420.0], [22.2, 421.0], [22.3, 422.0], [22.4, 423.0], [22.5, 423.0], [22.6, 424.0], [22.7, 425.0], [22.8, 426.0], [22.9, 427.0], [23.0, 427.0], [23.1, 428.0], [23.2, 429.0], [23.3, 430.0], [23.4, 430.0], [23.5, 431.0], [23.6, 432.0], [23.7, 432.0], [23.8, 433.0], [23.9, 434.0], [24.0, 435.0], [24.1, 437.0], [24.2, 438.0], [24.3, 438.0], [24.4, 438.0], [24.5, 439.0], [24.6, 440.0], [24.7, 441.0], [24.8, 442.0], [24.9, 444.0], [25.0, 444.0], [25.1, 445.0], [25.2, 446.0], [25.3, 446.0], [25.4, 447.0], [25.5, 448.0], [25.6, 449.0], [25.7, 450.0], [25.8, 451.0], [25.9, 452.0], [26.0, 453.0], [26.1, 454.0], [26.2, 454.0], [26.3, 455.0], [26.4, 455.0], [26.5, 455.0], [26.6, 456.0], [26.7, 457.0], [26.8, 458.0], [26.9, 460.0], [27.0, 460.0], [27.1, 460.0], [27.2, 461.0], [27.3, 462.0], [27.4, 464.0], [27.5, 465.0], [27.6, 466.0], [27.7, 467.0], [27.8, 468.0], [27.9, 468.0], [28.0, 470.0], [28.1, 470.0], [28.2, 471.0], [28.3, 472.0], [28.4, 473.0], [28.5, 473.0], [28.6, 474.0], [28.7, 475.0], [28.8, 476.0], [28.9, 477.0], [29.0, 478.0], [29.1, 479.0], [29.2, 480.0], [29.3, 482.0], [29.4, 483.0], [29.5, 483.0], [29.6, 484.0], [29.7, 485.0], [29.8, 486.0], [29.9, 487.0], [30.0, 489.0], [30.1, 490.0], [30.2, 491.0], [30.3, 491.0], [30.4, 493.0], [30.5, 493.0], [30.6, 494.0], [30.7, 496.0], [30.8, 496.0], [30.9, 498.0], [31.0, 499.0], [31.1, 499.0], [31.2, 500.0], [31.3, 500.0], [31.4, 501.0], [31.5, 503.0], [31.6, 504.0], [31.7, 505.0], [31.8, 506.0], [31.9, 506.0], [32.0, 507.0], [32.1, 508.0], [32.2, 510.0], [32.3, 511.0], [32.4, 511.0], [32.5, 513.0], [32.6, 514.0], [32.7, 515.0], [32.8, 516.0], [32.9, 517.0], [33.0, 519.0], [33.1, 520.0], [33.2, 522.0], [33.3, 523.0], [33.4, 524.0], [33.5, 525.0], [33.6, 526.0], [33.7, 528.0], [33.8, 528.0], [33.9, 529.0], [34.0, 529.0], [34.1, 530.0], [34.2, 531.0], [34.3, 532.0], [34.4, 532.0], [34.5, 534.0], [34.6, 535.0], [34.7, 535.0], [34.8, 536.0], [34.9, 537.0], [35.0, 538.0], [35.1, 538.0], [35.2, 539.0], [35.3, 540.0], [35.4, 540.0], [35.5, 541.0], [35.6, 543.0], [35.7, 543.0], [35.8, 544.0], [35.9, 545.0], [36.0, 546.0], [36.1, 547.0], [36.2, 547.0], [36.3, 548.0], [36.4, 549.0], [36.5, 550.0], [36.6, 551.0], [36.7, 551.0], [36.8, 552.0], [36.9, 552.0], [37.0, 553.0], [37.1, 554.0], [37.2, 555.0], [37.3, 555.0], [37.4, 557.0], [37.5, 558.0], [37.6, 559.0], [37.7, 561.0], [37.8, 562.0], [37.9, 562.0], [38.0, 563.0], [38.1, 564.0], [38.2, 566.0], [38.3, 567.0], [38.4, 568.0], [38.5, 569.0], [38.6, 570.0], [38.7, 571.0], [38.8, 572.0], [38.9, 573.0], [39.0, 574.0], [39.1, 574.0], [39.2, 576.0], [39.3, 577.0], [39.4, 578.0], [39.5, 579.0], [39.6, 580.0], [39.7, 580.0], [39.8, 582.0], [39.9, 583.0], [40.0, 585.0], [40.1, 586.0], [40.2, 587.0], [40.3, 588.0], [40.4, 589.0], [40.5, 589.0], [40.6, 590.0], [40.7, 591.0], [40.8, 592.0], [40.9, 593.0], [41.0, 594.0], [41.1, 595.0], [41.2, 596.0], [41.3, 597.0], [41.4, 598.0], [41.5, 599.0], [41.6, 601.0], [41.7, 601.0], [41.8, 603.0], [41.9, 604.0], [42.0, 605.0], [42.1, 606.0], [42.2, 607.0], [42.3, 608.0], [42.4, 609.0], [42.5, 610.0], [42.6, 610.0], [42.7, 611.0], [42.8, 612.0], [42.9, 612.0], [43.0, 614.0], [43.1, 615.0], [43.2, 616.0], [43.3, 617.0], [43.4, 618.0], [43.5, 619.0], [43.6, 619.0], [43.7, 620.0], [43.8, 621.0], [43.9, 622.0], [44.0, 623.0], [44.1, 624.0], [44.2, 625.0], [44.3, 626.0], [44.4, 628.0], [44.5, 629.0], [44.6, 631.0], [44.7, 631.0], [44.8, 633.0], [44.9, 634.0], [45.0, 635.0], [45.1, 637.0], [45.2, 639.0], [45.3, 641.0], [45.4, 642.0], [45.5, 642.0], [45.6, 644.0], [45.7, 645.0], [45.8, 646.0], [45.9, 647.0], [46.0, 648.0], [46.1, 650.0], [46.2, 651.0], [46.3, 652.0], [46.4, 653.0], [46.5, 654.0], [46.6, 656.0], [46.7, 658.0], [46.8, 658.0], [46.9, 659.0], [47.0, 661.0], [47.1, 662.0], [47.2, 663.0], [47.3, 664.0], [47.4, 665.0], [47.5, 665.0], [47.6, 666.0], [47.7, 668.0], [47.8, 670.0], [47.9, 671.0], [48.0, 672.0], [48.1, 674.0], [48.2, 677.0], [48.3, 679.0], [48.4, 679.0], [48.5, 681.0], [48.6, 683.0], [48.7, 684.0], [48.8, 685.0], [48.9, 686.0], [49.0, 687.0], [49.1, 689.0], [49.2, 689.0], [49.3, 690.0], [49.4, 691.0], [49.5, 692.0], [49.6, 694.0], [49.7, 696.0], [49.8, 698.0], [49.9, 699.0], [50.0, 700.0], [50.1, 702.0], [50.2, 704.0], [50.3, 706.0], [50.4, 709.0], [50.5, 711.0], [50.6, 713.0], [50.7, 713.0], [50.8, 716.0], [50.9, 717.0], [51.0, 719.0], [51.1, 721.0], [51.2, 723.0], [51.3, 724.0], [51.4, 726.0], [51.5, 728.0], [51.6, 729.0], [51.7, 730.0], [51.8, 733.0], [51.9, 734.0], [52.0, 735.0], [52.1, 737.0], [52.2, 739.0], [52.3, 741.0], [52.4, 742.0], [52.5, 744.0], [52.6, 746.0], [52.7, 747.0], [52.8, 747.0], [52.9, 750.0], [53.0, 751.0], [53.1, 754.0], [53.2, 755.0], [53.3, 756.0], [53.4, 759.0], [53.5, 762.0], [53.6, 763.0], [53.7, 764.0], [53.8, 765.0], [53.9, 767.0], [54.0, 771.0], [54.1, 773.0], [54.2, 775.0], [54.3, 776.0], [54.4, 777.0], [54.5, 780.0], [54.6, 781.0], [54.7, 782.0], [54.8, 786.0], [54.9, 787.0], [55.0, 790.0], [55.1, 792.0], [55.2, 795.0], [55.3, 795.0], [55.4, 798.0], [55.5, 798.0], [55.6, 800.0], [55.7, 801.0], [55.8, 803.0], [55.9, 805.0], [56.0, 808.0], [56.1, 810.0], [56.2, 810.0], [56.3, 812.0], [56.4, 813.0], [56.5, 815.0], [56.6, 816.0], [56.7, 817.0], [56.8, 819.0], [56.9, 820.0], [57.0, 821.0], [57.1, 822.0], [57.2, 825.0], [57.3, 826.0], [57.4, 828.0], [57.5, 829.0], [57.6, 830.0], [57.7, 832.0], [57.8, 833.0], [57.9, 835.0], [58.0, 837.0], [58.1, 839.0], [58.2, 841.0], [58.3, 842.0], [58.4, 843.0], [58.5, 843.0], [58.6, 844.0], [58.7, 845.0], [58.8, 846.0], [58.9, 848.0], [59.0, 850.0], [59.1, 852.0], [59.2, 854.0], [59.3, 855.0], [59.4, 856.0], [59.5, 857.0], [59.6, 860.0], [59.7, 862.0], [59.8, 862.0], [59.9, 864.0], [60.0, 866.0], [60.1, 867.0], [60.2, 869.0], [60.3, 872.0], [60.4, 873.0], [60.5, 874.0], [60.6, 875.0], [60.7, 876.0], [60.8, 878.0], [60.9, 879.0], [61.0, 881.0], [61.1, 884.0], [61.2, 884.0], [61.3, 887.0], [61.4, 890.0], [61.5, 893.0], [61.6, 894.0], [61.7, 896.0], [61.8, 897.0], [61.9, 898.0], [62.0, 899.0], [62.1, 900.0], [62.2, 901.0], [62.3, 903.0], [62.4, 904.0], [62.5, 906.0], [62.6, 908.0], [62.7, 911.0], [62.8, 913.0], [62.9, 915.0], [63.0, 918.0], [63.1, 920.0], [63.2, 922.0], [63.3, 925.0], [63.4, 927.0], [63.5, 929.0], [63.6, 930.0], [63.7, 931.0], [63.8, 933.0], [63.9, 934.0], [64.0, 936.0], [64.1, 938.0], [64.2, 939.0], [64.3, 940.0], [64.4, 942.0], [64.5, 948.0], [64.6, 949.0], [64.7, 950.0], [64.8, 953.0], [64.9, 955.0], [65.0, 959.0], [65.1, 961.0], [65.2, 963.0], [65.3, 964.0], [65.4, 966.0], [65.5, 968.0], [65.6, 969.0], [65.7, 971.0], [65.8, 972.0], [65.9, 974.0], [66.0, 975.0], [66.1, 976.0], [66.2, 977.0], [66.3, 978.0], [66.4, 982.0], [66.5, 985.0], [66.6, 986.0], [66.7, 988.0], [66.8, 989.0], [66.9, 990.0], [67.0, 993.0], [67.1, 995.0], [67.2, 995.0], [67.3, 998.0], [67.4, 999.0], [67.5, 1002.0], [67.6, 1002.0], [67.7, 1004.0], [67.8, 1004.0], [67.9, 1006.0], [68.0, 1007.0], [68.1, 1009.0], [68.2, 1011.0], [68.3, 1013.0], [68.4, 1015.0], [68.5, 1018.0], [68.6, 1021.0], [68.7, 1022.0], [68.8, 1024.0], [68.9, 1025.0], [69.0, 1027.0], [69.1, 1029.0], [69.2, 1030.0], [69.3, 1030.0], [69.4, 1031.0], [69.5, 1032.0], [69.6, 1034.0], [69.7, 1037.0], [69.8, 1038.0], [69.9, 1039.0], [70.0, 1040.0], [70.1, 1042.0], [70.2, 1043.0], [70.3, 1045.0], [70.4, 1046.0], [70.5, 1048.0], [70.6, 1050.0], [70.7, 1052.0], [70.8, 1053.0], [70.9, 1055.0], [71.0, 1056.0], [71.1, 1057.0], [71.2, 1059.0], [71.3, 1061.0], [71.4, 1063.0], [71.5, 1065.0], [71.6, 1067.0], [71.7, 1069.0], [71.8, 1072.0], [71.9, 1075.0], [72.0, 1076.0], [72.1, 1078.0], [72.2, 1080.0], [72.3, 1082.0], [72.4, 1083.0], [72.5, 1084.0], [72.6, 1086.0], [72.7, 1089.0], [72.8, 1092.0], [72.9, 1096.0], [73.0, 1097.0], [73.1, 1099.0], [73.2, 1100.0], [73.3, 1104.0], [73.4, 1105.0], [73.5, 1106.0], [73.6, 1107.0], [73.7, 1109.0], [73.8, 1111.0], [73.9, 1113.0], [74.0, 1115.0], [74.1, 1116.0], [74.2, 1117.0], [74.3, 1119.0], [74.4, 1121.0], [74.5, 1123.0], [74.6, 1124.0], [74.7, 1126.0], [74.8, 1130.0], [74.9, 1136.0], [75.0, 1138.0], [75.1, 1140.0], [75.2, 1143.0], [75.3, 1145.0], [75.4, 1147.0], [75.5, 1150.0], [75.6, 1154.0], [75.7, 1158.0], [75.8, 1159.0], [75.9, 1161.0], [76.0, 1164.0], [76.1, 1167.0], [76.2, 1170.0], [76.3, 1173.0], [76.4, 1175.0], [76.5, 1177.0], [76.6, 1179.0], [76.7, 1180.0], [76.8, 1181.0], [76.9, 1184.0], [77.0, 1187.0], [77.1, 1193.0], [77.2, 1195.0], [77.3, 1198.0], [77.4, 1199.0], [77.5, 1203.0], [77.6, 1205.0], [77.7, 1207.0], [77.8, 1208.0], [77.9, 1210.0], [78.0, 1213.0], [78.1, 1217.0], [78.2, 1219.0], [78.3, 1221.0], [78.4, 1223.0], [78.5, 1229.0], [78.6, 1232.0], [78.7, 1234.0], [78.8, 1236.0], [78.9, 1237.0], [79.0, 1241.0], [79.1, 1244.0], [79.2, 1248.0], [79.3, 1250.0], [79.4, 1252.0], [79.5, 1253.0], [79.6, 1256.0], [79.7, 1259.0], [79.8, 1263.0], [79.9, 1267.0], [80.0, 1269.0], [80.1, 1270.0], [80.2, 1275.0], [80.3, 1276.0], [80.4, 1279.0], [80.5, 1281.0], [80.6, 1285.0], [80.7, 1287.0], [80.8, 1290.0], [80.9, 1293.0], [81.0, 1294.0], [81.1, 1296.0], [81.2, 1300.0], [81.3, 1303.0], [81.4, 1306.0], [81.5, 1307.0], [81.6, 1309.0], [81.7, 1312.0], [81.8, 1315.0], [81.9, 1317.0], [82.0, 1318.0], [82.1, 1319.0], [82.2, 1321.0], [82.3, 1323.0], [82.4, 1325.0], [82.5, 1328.0], [82.6, 1329.0], [82.7, 1332.0], [82.8, 1336.0], [82.9, 1340.0], [83.0, 1342.0], [83.1, 1344.0], [83.2, 1347.0], [83.3, 1350.0], [83.4, 1352.0], [83.5, 1355.0], [83.6, 1358.0], [83.7, 1360.0], [83.8, 1362.0], [83.9, 1363.0], [84.0, 1365.0], [84.1, 1368.0], [84.2, 1371.0], [84.3, 1373.0], [84.4, 1376.0], [84.5, 1379.0], [84.6, 1381.0], [84.7, 1383.0], [84.8, 1386.0], [84.9, 1390.0], [85.0, 1392.0], [85.1, 1393.0], [85.2, 1397.0], [85.3, 1399.0], [85.4, 1403.0], [85.5, 1404.0], [85.6, 1405.0], [85.7, 1406.0], [85.8, 1410.0], [85.9, 1415.0], [86.0, 1417.0], [86.1, 1420.0], [86.2, 1423.0], [86.3, 1427.0], [86.4, 1429.0], [86.5, 1436.0], [86.6, 1437.0], [86.7, 1440.0], [86.8, 1442.0], [86.9, 1445.0], [87.0, 1449.0], [87.1, 1451.0], [87.2, 1456.0], [87.3, 1457.0], [87.4, 1460.0], [87.5, 1463.0], [87.6, 1466.0], [87.7, 1473.0], [87.8, 1477.0], [87.9, 1478.0], [88.0, 1481.0], [88.1, 1484.0], [88.2, 1490.0], [88.3, 1492.0], [88.4, 1495.0], [88.5, 1498.0], [88.6, 1501.0], [88.7, 1504.0], [88.8, 1510.0], [88.9, 1514.0], [89.0, 1519.0], [89.1, 1525.0], [89.2, 1527.0], [89.3, 1528.0], [89.4, 1533.0], [89.5, 1539.0], [89.6, 1550.0], [89.7, 1554.0], [89.8, 1557.0], [89.9, 1561.0], [90.0, 1565.0], [90.1, 1574.0], [90.2, 1577.0], [90.3, 1580.0], [90.4, 1582.0], [90.5, 1586.0], [90.6, 1592.0], [90.7, 1597.0], [90.8, 1600.0], [90.9, 1608.0], [91.0, 1614.0], [91.1, 1629.0], [91.2, 1634.0], [91.3, 1638.0], [91.4, 1646.0], [91.5, 1652.0], [91.6, 1658.0], [91.7, 1669.0], [91.8, 1676.0], [91.9, 1684.0], [92.0, 1687.0], [92.1, 1697.0], [92.2, 1700.0], [92.3, 1710.0], [92.4, 1715.0], [92.5, 1720.0], [92.6, 1725.0], [92.7, 1748.0], [92.8, 1755.0], [92.9, 1761.0], [93.0, 1764.0], [93.1, 1781.0], [93.2, 1787.0], [93.3, 1794.0], [93.4, 1798.0], [93.5, 1806.0], [93.6, 1817.0], [93.7, 1825.0], [93.8, 1844.0], [93.9, 1852.0], [94.0, 1867.0], [94.1, 1887.0], [94.2, 1897.0], [94.3, 1903.0], [94.4, 1907.0], [94.5, 1918.0], [94.6, 1922.0], [94.7, 1931.0], [94.8, 1947.0], [94.9, 1957.0], [95.0, 1970.0], [95.1, 1980.0], [95.2, 1990.0], [95.3, 2004.0], [95.4, 2015.0], [95.5, 2022.0], [95.6, 2035.0], [95.7, 2042.0], [95.8, 2052.0], [95.9, 2064.0], [96.0, 2071.0], [96.1, 2090.0], [96.2, 2096.0], [96.3, 2103.0], [96.4, 2117.0], [96.5, 2125.0], [96.6, 2138.0], [96.7, 2171.0], [96.8, 2183.0], [96.9, 2194.0], [97.0, 2203.0], [97.1, 2221.0], [97.2, 2229.0], [97.3, 2252.0], [97.4, 2278.0], [97.5, 2304.0], [97.6, 2323.0], [97.7, 2349.0], [97.8, 2390.0], [97.9, 2423.0], [98.0, 2438.0], [98.1, 2491.0], [98.2, 2546.0], [98.3, 2578.0], [98.4, 2626.0], [98.5, 2670.0], [98.6, 2685.0], [98.7, 2707.0], [98.8, 2739.0], [98.9, 2781.0], [99.0, 2876.0], [99.1, 2953.0], [99.2, 2984.0], [99.3, 3083.0], [99.4, 3311.0], [99.5, 3401.0], [99.6, 3651.0], [99.7, 4148.0], [99.8, 4982.0], [99.9, 5452.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 596.0, "series": [{"data": [[600.0, 437.0], [700.0, 292.0], [800.0, 336.0], [900.0, 279.0], [1000.0, 296.0], [1100.0, 222.0], [1200.0, 195.0], [1300.0, 215.0], [1400.0, 168.0], [1500.0, 116.0], [1600.0, 73.0], [1700.0, 65.0], [1800.0, 42.0], [1900.0, 54.0], [2000.0, 52.0], [2100.0, 35.0], [2200.0, 27.0], [2300.0, 19.0], [2400.0, 14.0], [2500.0, 11.0], [2600.0, 19.0], [2800.0, 6.0], [2700.0, 11.0], [2900.0, 11.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 6.0], [3200.0, 1.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 2.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [5100.0, 1.0], [4900.0, 2.0], [5000.0, 2.0], [5500.0, 1.0], [5400.0, 1.0], [5600.0, 1.0], [6500.0, 1.0], [7000.0, 1.0], [8700.0, 1.0], [100.0, 110.0], [200.0, 596.0], [300.0, 336.0], [400.0, 575.0], [500.0, 539.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2972.0, "series": [{"data": [[0.0, 1625.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2972.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 593.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891826923076925, "minX": 1.60223442E12, "maxY": 10.0, "series": [{"data": [[1.60223454E12, 10.0], [1.60223484E12, 9.891826923076925], [1.60223448E12, 10.0], [1.60223466E12, 10.0], [1.6022346E12, 10.0], [1.60223478E12, 10.0], [1.60223442E12, 10.0], [1.60223472E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223484E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 316.0, "minX": 1.0, "maxY": 2287.0, "series": [{"data": [[8.0, 1687.0], [4.0, 598.0], [2.0, 993.0], [1.0, 2287.0], [9.0, 1577.0], [10.0, 862.2333076032414], [5.0, 665.0], [6.0, 316.0], [3.0, 589.0], [7.0, 569.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 862.5262955114617]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3137.25, "minX": 1.60223442E12, "maxY": 3677174.3833333333, "series": [{"data": [[1.60223454E12, 3677174.3833333333], [1.60223484E12, 1901223.45], [1.60223448E12, 2926637.783333333], [1.60223466E12, 3100890.85], [1.6022346E12, 3161945.95], [1.60223478E12, 3214022.8333333335], [1.60223442E12, 2752595.966666667], [1.60223472E12, 3238175.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223454E12, 5524.766666666666], [1.60223484E12, 3137.25], [1.60223448E12, 5176.05], [1.60223466E12, 4593.566666666667], [1.6022346E12, 5074.266666666666], [1.60223478E12, 5886.933333333333], [1.60223442E12, 3819.9166666666665], [1.60223472E12, 5371.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223484E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 771.440721649484, "minX": 1.60223442E12, "maxY": 940.0603773584901, "series": [{"data": [[1.60223454E12, 827.0041208791208], [1.60223484E12, 919.3701923076923], [1.60223448E12, 850.2147937411088], [1.60223466E12, 927.5642633228834], [1.6022346E12, 892.0714285714294], [1.60223478E12, 771.440721649484], [1.60223442E12, 940.0603773584901], [1.60223472E12, 833.8296703296702]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223484E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 769.9445876288654, "minX": 1.60223442E12, "maxY": 937.92641509434, "series": [{"data": [[1.60223454E12, 824.7857142857146], [1.60223484E12, 917.723557692308], [1.60223448E12, 848.3627311522044], [1.60223466E12, 925.5313479623821], [1.6022346E12, 890.0535714285718], [1.60223478E12, 769.9445876288654], [1.60223442E12, 937.92641509434], [1.60223472E12, 832.1263736263732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223484E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012362637362637376, "minX": 1.60223442E12, "maxY": 0.1735849056603775, "series": [{"data": [[1.60223454E12, 0.016483516483516494], [1.60223484E12, 0.02163461538461539], [1.60223448E12, 0.025604551920341407], [1.60223466E12, 0.017241379310344827], [1.6022346E12, 0.014880952380952392], [1.60223478E12, 0.01804123711340206], [1.60223442E12, 0.1735849056603775], [1.60223472E12, 0.012362637362637376]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223484E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60223442E12, "maxY": 8796.0, "series": [{"data": [[1.60223454E12, 3679.0], [1.60223484E12, 3651.0], [1.60223448E12, 4616.0], [1.60223466E12, 8796.0], [1.6022346E12, 5508.0], [1.60223478E12, 3530.0], [1.60223442E12, 6551.0], [1.60223472E12, 4550.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223454E12, 188.55199982643128], [1.60223484E12, 189.75299990057945], [1.60223448E12, 195.0], [1.60223466E12, 204.25299954295158], [1.6022346E12, 193.0569998395443], [1.60223478E12, 188.99299981474877], [1.60223442E12, 208.23199898719787], [1.60223472E12, 190.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223454E12, 189.2072000694275], [1.60223484E12, 190.0], [1.60223448E12, 195.0], [1.60223466E12, 205.0], [1.6022346E12, 193.66270006418227], [1.60223478E12, 190.384600148201], [1.60223442E12, 210.2569000506401], [1.60223472E12, 190.21710006952287]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223454E12, 188.91599991321564], [1.60223484E12, 189.96149995028972], [1.60223448E12, 195.0], [1.60223466E12, 205.0], [1.6022346E12, 193.39349991977215], [1.60223478E12, 189.76299981474875], [1.60223442E12, 210.04449993669988], [1.60223472E12, 190.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223454E12, 182.0], [1.60223484E12, 184.0], [1.60223448E12, 190.0], [1.60223466E12, 189.0], [1.6022346E12, 188.0], [1.60223478E12, 183.0], [1.60223442E12, 194.0], [1.60223472E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223454E12, 653.0], [1.60223484E12, 787.5], [1.60223448E12, 659.0], [1.60223466E12, 787.5], [1.6022346E12, 705.5], [1.60223478E12, 599.0], [1.60223442E12, 796.5], [1.60223472E12, 660.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223484E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 2287.0, "series": [{"data": [[3.0, 1486.0], [4.0, 947.0], [5.0, 1424.0], [6.0, 1279.5], [7.0, 1093.0], [8.0, 1079.5], [9.0, 933.0], [10.0, 839.0], [11.0, 813.0], [12.0, 828.0], [13.0, 702.0], [14.0, 696.5], [15.0, 592.0], [16.0, 555.0], [1.0, 2287.0], [17.0, 509.0], [18.0, 468.5], [19.0, 444.5], [20.0, 448.5], [21.0, 446.5], [22.0, 427.5], [23.0, 410.0], [24.0, 450.0], [25.0, 442.0], [26.0, 402.0], [27.0, 431.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 234.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 2275.0, "series": [{"data": [[3.0, 1476.0], [4.0, 946.0], [5.0, 1424.0], [6.0, 1277.0], [7.0, 1088.0], [8.0, 1077.0], [9.0, 931.0], [10.0, 837.0], [11.0, 810.5], [12.0, 826.5], [13.0, 701.0], [14.0, 696.0], [15.0, 592.0], [16.0, 554.5], [1.0, 2275.0], [17.0, 508.0], [18.0, 468.5], [19.0, 444.5], [20.0, 448.5], [21.0, 446.5], [22.0, 427.5], [23.0, 410.0], [24.0, 449.5], [25.0, 441.5], [26.0, 402.0], [27.0, 430.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 234.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.766666666666667, "minX": 1.60223442E12, "maxY": 12.933333333333334, "series": [{"data": [[1.60223454E12, 12.133333333333333], [1.60223484E12, 6.766666666666667], [1.60223448E12, 11.716666666666667], [1.60223466E12, 10.633333333333333], [1.6022346E12, 11.2], [1.60223478E12, 12.933333333333334], [1.60223442E12, 9.0], [1.60223472E12, 12.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223484E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223442E12, "maxY": 12.933333333333334, "series": [{"data": [[1.60223454E12, 12.116666666666667], [1.60223484E12, 6.933333333333334], [1.60223448E12, 11.716666666666667], [1.60223466E12, 10.633333333333333], [1.6022346E12, 11.2], [1.60223478E12, 12.933333333333334], [1.60223442E12, 8.833333333333334], [1.60223472E12, 12.133333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223454E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223484E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223442E12, "maxY": 12.933333333333334, "series": [{"data": [[1.60223454E12, 12.116666666666667], [1.60223484E12, 6.933333333333334], [1.60223448E12, 11.716666666666667], [1.60223466E12, 10.633333333333333], [1.6022346E12, 11.2], [1.60223478E12, 12.933333333333334], [1.60223442E12, 8.833333333333334], [1.60223472E12, 12.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223454E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223484E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223442E12, "maxY": 12.933333333333334, "series": [{"data": [[1.60223454E12, 12.116666666666667], [1.60223484E12, 6.933333333333334], [1.60223448E12, 11.716666666666667], [1.60223466E12, 10.633333333333333], [1.6022346E12, 11.2], [1.60223478E12, 12.933333333333334], [1.60223442E12, 8.833333333333334], [1.60223472E12, 12.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223454E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223484E12, "title": "Total Transactions Per Second"}},
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

