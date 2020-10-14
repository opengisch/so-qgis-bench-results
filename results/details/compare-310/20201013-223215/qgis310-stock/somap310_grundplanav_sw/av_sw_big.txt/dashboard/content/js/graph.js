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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 8676.0, "series": [{"data": [[0.0, 177.0], [0.1, 185.0], [0.2, 187.0], [0.3, 188.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 190.0], [0.8, 191.0], [0.9, 192.0], [1.0, 193.0], [1.1, 193.0], [1.2, 195.0], [1.3, 195.0], [1.4, 196.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 200.0], [1.9, 201.0], [2.0, 202.0], [2.1, 202.0], [2.2, 204.0], [2.3, 205.0], [2.4, 206.0], [2.5, 206.0], [2.6, 208.0], [2.7, 209.0], [2.8, 210.0], [2.9, 210.0], [3.0, 211.0], [3.1, 212.0], [3.2, 212.0], [3.3, 213.0], [3.4, 214.0], [3.5, 214.0], [3.6, 215.0], [3.7, 216.0], [3.8, 217.0], [3.9, 217.0], [4.0, 219.0], [4.1, 219.0], [4.2, 219.0], [4.3, 220.0], [4.4, 221.0], [4.5, 221.0], [4.6, 221.0], [4.7, 222.0], [4.8, 223.0], [4.9, 223.0], [5.0, 224.0], [5.1, 225.0], [5.2, 226.0], [5.3, 227.0], [5.4, 228.0], [5.5, 228.0], [5.6, 229.0], [5.7, 230.0], [5.8, 230.0], [5.9, 231.0], [6.0, 232.0], [6.1, 234.0], [6.2, 235.0], [6.3, 236.0], [6.4, 237.0], [6.5, 238.0], [6.6, 240.0], [6.7, 241.0], [6.8, 242.0], [6.9, 243.0], [7.0, 244.0], [7.1, 245.0], [7.2, 247.0], [7.3, 248.0], [7.4, 250.0], [7.5, 250.0], [7.6, 252.0], [7.7, 253.0], [7.8, 253.0], [7.9, 256.0], [8.0, 258.0], [8.1, 258.0], [8.2, 259.0], [8.3, 260.0], [8.4, 261.0], [8.5, 263.0], [8.6, 264.0], [8.7, 266.0], [8.8, 267.0], [8.9, 267.0], [9.0, 268.0], [9.1, 269.0], [9.2, 269.0], [9.3, 271.0], [9.4, 272.0], [9.5, 272.0], [9.6, 274.0], [9.7, 274.0], [9.8, 275.0], [9.9, 276.0], [10.0, 277.0], [10.1, 278.0], [10.2, 279.0], [10.3, 279.0], [10.4, 280.0], [10.5, 281.0], [10.6, 282.0], [10.7, 282.0], [10.8, 283.0], [10.9, 285.0], [11.0, 286.0], [11.1, 287.0], [11.2, 288.0], [11.3, 289.0], [11.4, 290.0], [11.5, 291.0], [11.6, 292.0], [11.7, 293.0], [11.8, 294.0], [11.9, 295.0], [12.0, 297.0], [12.1, 298.0], [12.2, 300.0], [12.3, 301.0], [12.4, 302.0], [12.5, 303.0], [12.6, 304.0], [12.7, 305.0], [12.8, 306.0], [12.9, 306.0], [13.0, 307.0], [13.1, 308.0], [13.2, 309.0], [13.3, 310.0], [13.4, 310.0], [13.5, 312.0], [13.6, 312.0], [13.7, 313.0], [13.8, 315.0], [13.9, 316.0], [14.0, 317.0], [14.1, 318.0], [14.2, 319.0], [14.3, 320.0], [14.4, 321.0], [14.5, 322.0], [14.6, 323.0], [14.7, 324.0], [14.8, 326.0], [14.9, 327.0], [15.0, 328.0], [15.1, 331.0], [15.2, 332.0], [15.3, 334.0], [15.4, 335.0], [15.5, 336.0], [15.6, 339.0], [15.7, 340.0], [15.8, 341.0], [15.9, 343.0], [16.0, 346.0], [16.1, 347.0], [16.2, 349.0], [16.3, 350.0], [16.4, 351.0], [16.5, 353.0], [16.6, 355.0], [16.7, 357.0], [16.8, 359.0], [16.9, 361.0], [17.0, 363.0], [17.1, 366.0], [17.2, 367.0], [17.3, 368.0], [17.4, 369.0], [17.5, 370.0], [17.6, 371.0], [17.7, 372.0], [17.8, 374.0], [17.9, 375.0], [18.0, 375.0], [18.1, 376.0], [18.2, 376.0], [18.3, 378.0], [18.4, 378.0], [18.5, 380.0], [18.6, 380.0], [18.7, 381.0], [18.8, 382.0], [18.9, 383.0], [19.0, 385.0], [19.1, 386.0], [19.2, 387.0], [19.3, 388.0], [19.4, 388.0], [19.5, 389.0], [19.6, 390.0], [19.7, 390.0], [19.8, 391.0], [19.9, 391.0], [20.0, 391.0], [20.1, 393.0], [20.2, 394.0], [20.3, 395.0], [20.4, 396.0], [20.5, 396.0], [20.6, 398.0], [20.7, 399.0], [20.8, 400.0], [20.9, 401.0], [21.0, 401.0], [21.1, 403.0], [21.2, 404.0], [21.3, 406.0], [21.4, 407.0], [21.5, 407.0], [21.6, 409.0], [21.7, 410.0], [21.8, 411.0], [21.9, 411.0], [22.0, 412.0], [22.1, 413.0], [22.2, 414.0], [22.3, 415.0], [22.4, 416.0], [22.5, 416.0], [22.6, 417.0], [22.7, 419.0], [22.8, 420.0], [22.9, 420.0], [23.0, 420.0], [23.1, 421.0], [23.2, 422.0], [23.3, 423.0], [23.4, 424.0], [23.5, 425.0], [23.6, 427.0], [23.7, 427.0], [23.8, 427.0], [23.9, 428.0], [24.0, 428.0], [24.1, 429.0], [24.2, 430.0], [24.3, 430.0], [24.4, 431.0], [24.5, 431.0], [24.6, 433.0], [24.7, 433.0], [24.8, 435.0], [24.9, 435.0], [25.0, 436.0], [25.1, 438.0], [25.2, 438.0], [25.3, 439.0], [25.4, 440.0], [25.5, 440.0], [25.6, 441.0], [25.7, 443.0], [25.8, 444.0], [25.9, 445.0], [26.0, 445.0], [26.1, 446.0], [26.2, 447.0], [26.3, 448.0], [26.4, 449.0], [26.5, 450.0], [26.6, 452.0], [26.7, 452.0], [26.8, 453.0], [26.9, 454.0], [27.0, 455.0], [27.1, 456.0], [27.2, 456.0], [27.3, 457.0], [27.4, 457.0], [27.5, 458.0], [27.6, 459.0], [27.7, 460.0], [27.8, 461.0], [27.9, 461.0], [28.0, 462.0], [28.1, 463.0], [28.2, 464.0], [28.3, 465.0], [28.4, 465.0], [28.5, 466.0], [28.6, 467.0], [28.7, 468.0], [28.8, 469.0], [28.9, 469.0], [29.0, 470.0], [29.1, 470.0], [29.2, 471.0], [29.3, 472.0], [29.4, 472.0], [29.5, 473.0], [29.6, 473.0], [29.7, 475.0], [29.8, 476.0], [29.9, 476.0], [30.0, 478.0], [30.1, 479.0], [30.2, 480.0], [30.3, 481.0], [30.4, 484.0], [30.5, 485.0], [30.6, 486.0], [30.7, 486.0], [30.8, 488.0], [30.9, 489.0], [31.0, 490.0], [31.1, 492.0], [31.2, 492.0], [31.3, 493.0], [31.4, 494.0], [31.5, 495.0], [31.6, 496.0], [31.7, 497.0], [31.8, 498.0], [31.9, 499.0], [32.0, 501.0], [32.1, 502.0], [32.2, 502.0], [32.3, 503.0], [32.4, 504.0], [32.5, 506.0], [32.6, 507.0], [32.7, 508.0], [32.8, 509.0], [32.9, 510.0], [33.0, 511.0], [33.1, 512.0], [33.2, 514.0], [33.3, 514.0], [33.4, 515.0], [33.5, 517.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 519.0], [34.0, 521.0], [34.1, 522.0], [34.2, 523.0], [34.3, 525.0], [34.4, 525.0], [34.5, 526.0], [34.6, 527.0], [34.7, 528.0], [34.8, 529.0], [34.9, 530.0], [35.0, 531.0], [35.1, 533.0], [35.2, 533.0], [35.3, 534.0], [35.4, 535.0], [35.5, 536.0], [35.6, 537.0], [35.7, 538.0], [35.8, 538.0], [35.9, 539.0], [36.0, 540.0], [36.1, 541.0], [36.2, 542.0], [36.3, 542.0], [36.4, 543.0], [36.5, 544.0], [36.6, 545.0], [36.7, 545.0], [36.8, 546.0], [36.9, 547.0], [37.0, 548.0], [37.1, 548.0], [37.2, 549.0], [37.3, 550.0], [37.4, 551.0], [37.5, 553.0], [37.6, 554.0], [37.7, 556.0], [37.8, 557.0], [37.9, 558.0], [38.0, 559.0], [38.1, 560.0], [38.2, 561.0], [38.3, 561.0], [38.4, 562.0], [38.5, 563.0], [38.6, 565.0], [38.7, 565.0], [38.8, 566.0], [38.9, 567.0], [39.0, 568.0], [39.1, 570.0], [39.2, 571.0], [39.3, 571.0], [39.4, 572.0], [39.5, 573.0], [39.6, 573.0], [39.7, 574.0], [39.8, 575.0], [39.9, 576.0], [40.0, 576.0], [40.1, 578.0], [40.2, 578.0], [40.3, 579.0], [40.4, 581.0], [40.5, 582.0], [40.6, 583.0], [40.7, 584.0], [40.8, 585.0], [40.9, 586.0], [41.0, 587.0], [41.1, 589.0], [41.2, 590.0], [41.3, 591.0], [41.4, 593.0], [41.5, 594.0], [41.6, 596.0], [41.7, 597.0], [41.8, 600.0], [41.9, 601.0], [42.0, 602.0], [42.1, 603.0], [42.2, 604.0], [42.3, 605.0], [42.4, 606.0], [42.5, 608.0], [42.6, 609.0], [42.7, 610.0], [42.8, 611.0], [42.9, 612.0], [43.0, 613.0], [43.1, 614.0], [43.2, 615.0], [43.3, 617.0], [43.4, 618.0], [43.5, 618.0], [43.6, 619.0], [43.7, 620.0], [43.8, 621.0], [43.9, 622.0], [44.0, 623.0], [44.1, 624.0], [44.2, 624.0], [44.3, 625.0], [44.4, 626.0], [44.5, 627.0], [44.6, 628.0], [44.7, 630.0], [44.8, 632.0], [44.9, 634.0], [45.0, 635.0], [45.1, 637.0], [45.2, 637.0], [45.3, 638.0], [45.4, 641.0], [45.5, 642.0], [45.6, 643.0], [45.7, 644.0], [45.8, 646.0], [45.9, 647.0], [46.0, 649.0], [46.1, 649.0], [46.2, 651.0], [46.3, 653.0], [46.4, 654.0], [46.5, 655.0], [46.6, 657.0], [46.7, 658.0], [46.8, 660.0], [46.9, 661.0], [47.0, 662.0], [47.1, 663.0], [47.2, 665.0], [47.3, 666.0], [47.4, 669.0], [47.5, 669.0], [47.6, 671.0], [47.7, 672.0], [47.8, 674.0], [47.9, 677.0], [48.0, 678.0], [48.1, 679.0], [48.2, 681.0], [48.3, 683.0], [48.4, 687.0], [48.5, 688.0], [48.6, 690.0], [48.7, 691.0], [48.8, 692.0], [48.9, 693.0], [49.0, 695.0], [49.1, 696.0], [49.2, 698.0], [49.3, 700.0], [49.4, 701.0], [49.5, 703.0], [49.6, 705.0], [49.7, 706.0], [49.8, 707.0], [49.9, 709.0], [50.0, 710.0], [50.1, 711.0], [50.2, 713.0], [50.3, 713.0], [50.4, 716.0], [50.5, 720.0], [50.6, 722.0], [50.7, 724.0], [50.8, 725.0], [50.9, 726.0], [51.0, 726.0], [51.1, 728.0], [51.2, 729.0], [51.3, 730.0], [51.4, 731.0], [51.5, 732.0], [51.6, 733.0], [51.7, 735.0], [51.8, 736.0], [51.9, 738.0], [52.0, 740.0], [52.1, 741.0], [52.2, 743.0], [52.3, 744.0], [52.4, 745.0], [52.5, 746.0], [52.6, 747.0], [52.7, 748.0], [52.8, 750.0], [52.9, 751.0], [53.0, 752.0], [53.1, 754.0], [53.2, 755.0], [53.3, 758.0], [53.4, 758.0], [53.5, 759.0], [53.6, 761.0], [53.7, 763.0], [53.8, 764.0], [53.9, 765.0], [54.0, 767.0], [54.1, 768.0], [54.2, 770.0], [54.3, 771.0], [54.4, 773.0], [54.5, 775.0], [54.6, 776.0], [54.7, 778.0], [54.8, 780.0], [54.9, 782.0], [55.0, 784.0], [55.1, 787.0], [55.2, 789.0], [55.3, 790.0], [55.4, 791.0], [55.5, 792.0], [55.6, 794.0], [55.7, 795.0], [55.8, 796.0], [55.9, 798.0], [56.0, 800.0], [56.1, 801.0], [56.2, 802.0], [56.3, 803.0], [56.4, 808.0], [56.5, 810.0], [56.6, 812.0], [56.7, 813.0], [56.8, 815.0], [56.9, 819.0], [57.0, 820.0], [57.1, 821.0], [57.2, 824.0], [57.3, 826.0], [57.4, 828.0], [57.5, 830.0], [57.6, 831.0], [57.7, 832.0], [57.8, 834.0], [57.9, 835.0], [58.0, 836.0], [58.1, 837.0], [58.2, 838.0], [58.3, 841.0], [58.4, 842.0], [58.5, 844.0], [58.6, 845.0], [58.7, 847.0], [58.8, 848.0], [58.9, 851.0], [59.0, 852.0], [59.1, 853.0], [59.2, 854.0], [59.3, 856.0], [59.4, 857.0], [59.5, 860.0], [59.6, 861.0], [59.7, 862.0], [59.8, 864.0], [59.9, 866.0], [60.0, 867.0], [60.1, 870.0], [60.2, 873.0], [60.3, 873.0], [60.4, 874.0], [60.5, 876.0], [60.6, 878.0], [60.7, 879.0], [60.8, 880.0], [60.9, 881.0], [61.0, 883.0], [61.1, 885.0], [61.2, 887.0], [61.3, 890.0], [61.4, 893.0], [61.5, 895.0], [61.6, 897.0], [61.7, 898.0], [61.8, 899.0], [61.9, 900.0], [62.0, 902.0], [62.1, 903.0], [62.2, 906.0], [62.3, 910.0], [62.4, 912.0], [62.5, 913.0], [62.6, 914.0], [62.7, 917.0], [62.8, 918.0], [62.9, 920.0], [63.0, 922.0], [63.1, 923.0], [63.2, 925.0], [63.3, 926.0], [63.4, 928.0], [63.5, 929.0], [63.6, 930.0], [63.7, 931.0], [63.8, 932.0], [63.9, 934.0], [64.0, 935.0], [64.1, 937.0], [64.2, 938.0], [64.3, 939.0], [64.4, 942.0], [64.5, 943.0], [64.6, 944.0], [64.7, 945.0], [64.8, 949.0], [64.9, 950.0], [65.0, 952.0], [65.1, 953.0], [65.2, 954.0], [65.3, 955.0], [65.4, 957.0], [65.5, 959.0], [65.6, 961.0], [65.7, 962.0], [65.8, 964.0], [65.9, 965.0], [66.0, 967.0], [66.1, 968.0], [66.2, 970.0], [66.3, 971.0], [66.4, 972.0], [66.5, 975.0], [66.6, 976.0], [66.7, 978.0], [66.8, 981.0], [66.9, 984.0], [67.0, 986.0], [67.1, 989.0], [67.2, 991.0], [67.3, 992.0], [67.4, 994.0], [67.5, 995.0], [67.6, 996.0], [67.7, 998.0], [67.8, 1000.0], [67.9, 1003.0], [68.0, 1006.0], [68.1, 1007.0], [68.2, 1008.0], [68.3, 1010.0], [68.4, 1012.0], [68.5, 1013.0], [68.6, 1014.0], [68.7, 1016.0], [68.8, 1018.0], [68.9, 1022.0], [69.0, 1023.0], [69.1, 1025.0], [69.2, 1026.0], [69.3, 1028.0], [69.4, 1031.0], [69.5, 1032.0], [69.6, 1033.0], [69.7, 1035.0], [69.8, 1036.0], [69.9, 1038.0], [70.0, 1040.0], [70.1, 1043.0], [70.2, 1044.0], [70.3, 1046.0], [70.4, 1046.0], [70.5, 1048.0], [70.6, 1050.0], [70.7, 1053.0], [70.8, 1055.0], [70.9, 1058.0], [71.0, 1059.0], [71.1, 1063.0], [71.2, 1065.0], [71.3, 1067.0], [71.4, 1069.0], [71.5, 1071.0], [71.6, 1073.0], [71.7, 1074.0], [71.8, 1075.0], [71.9, 1078.0], [72.0, 1078.0], [72.1, 1082.0], [72.2, 1084.0], [72.3, 1086.0], [72.4, 1087.0], [72.5, 1089.0], [72.6, 1090.0], [72.7, 1091.0], [72.8, 1093.0], [72.9, 1096.0], [73.0, 1098.0], [73.1, 1099.0], [73.2, 1102.0], [73.3, 1104.0], [73.4, 1106.0], [73.5, 1107.0], [73.6, 1109.0], [73.7, 1113.0], [73.8, 1114.0], [73.9, 1117.0], [74.0, 1119.0], [74.1, 1120.0], [74.2, 1124.0], [74.3, 1127.0], [74.4, 1128.0], [74.5, 1130.0], [74.6, 1132.0], [74.7, 1134.0], [74.8, 1136.0], [74.9, 1138.0], [75.0, 1141.0], [75.1, 1144.0], [75.2, 1148.0], [75.3, 1149.0], [75.4, 1151.0], [75.5, 1154.0], [75.6, 1156.0], [75.7, 1157.0], [75.8, 1158.0], [75.9, 1160.0], [76.0, 1162.0], [76.1, 1164.0], [76.2, 1165.0], [76.3, 1168.0], [76.4, 1170.0], [76.5, 1173.0], [76.6, 1176.0], [76.7, 1178.0], [76.8, 1180.0], [76.9, 1181.0], [77.0, 1183.0], [77.1, 1186.0], [77.2, 1190.0], [77.3, 1190.0], [77.4, 1192.0], [77.5, 1196.0], [77.6, 1197.0], [77.7, 1200.0], [77.8, 1203.0], [77.9, 1206.0], [78.0, 1208.0], [78.1, 1211.0], [78.2, 1215.0], [78.3, 1216.0], [78.4, 1219.0], [78.5, 1222.0], [78.6, 1227.0], [78.7, 1230.0], [78.8, 1233.0], [78.9, 1237.0], [79.0, 1242.0], [79.1, 1243.0], [79.2, 1246.0], [79.3, 1248.0], [79.4, 1252.0], [79.5, 1254.0], [79.6, 1256.0], [79.7, 1257.0], [79.8, 1259.0], [79.9, 1263.0], [80.0, 1267.0], [80.1, 1269.0], [80.2, 1271.0], [80.3, 1274.0], [80.4, 1275.0], [80.5, 1276.0], [80.6, 1278.0], [80.7, 1278.0], [80.8, 1281.0], [80.9, 1282.0], [81.0, 1286.0], [81.1, 1289.0], [81.2, 1290.0], [81.3, 1292.0], [81.4, 1295.0], [81.5, 1297.0], [81.6, 1298.0], [81.7, 1299.0], [81.8, 1299.0], [81.9, 1302.0], [82.0, 1304.0], [82.1, 1309.0], [82.2, 1312.0], [82.3, 1315.0], [82.4, 1316.0], [82.5, 1318.0], [82.6, 1321.0], [82.7, 1325.0], [82.8, 1325.0], [82.9, 1326.0], [83.0, 1329.0], [83.1, 1330.0], [83.2, 1332.0], [83.3, 1333.0], [83.4, 1335.0], [83.5, 1339.0], [83.6, 1342.0], [83.7, 1344.0], [83.8, 1346.0], [83.9, 1348.0], [84.0, 1351.0], [84.1, 1354.0], [84.2, 1357.0], [84.3, 1359.0], [84.4, 1366.0], [84.5, 1369.0], [84.6, 1371.0], [84.7, 1375.0], [84.8, 1379.0], [84.9, 1383.0], [85.0, 1386.0], [85.1, 1388.0], [85.2, 1391.0], [85.3, 1396.0], [85.4, 1400.0], [85.5, 1402.0], [85.6, 1404.0], [85.7, 1406.0], [85.8, 1410.0], [85.9, 1414.0], [86.0, 1415.0], [86.1, 1417.0], [86.2, 1419.0], [86.3, 1424.0], [86.4, 1426.0], [86.5, 1429.0], [86.6, 1432.0], [86.7, 1437.0], [86.8, 1440.0], [86.9, 1442.0], [87.0, 1444.0], [87.1, 1448.0], [87.2, 1449.0], [87.3, 1454.0], [87.4, 1457.0], [87.5, 1459.0], [87.6, 1462.0], [87.7, 1464.0], [87.8, 1466.0], [87.9, 1469.0], [88.0, 1474.0], [88.1, 1477.0], [88.2, 1479.0], [88.3, 1482.0], [88.4, 1486.0], [88.5, 1489.0], [88.6, 1491.0], [88.7, 1496.0], [88.8, 1501.0], [88.9, 1503.0], [89.0, 1506.0], [89.1, 1511.0], [89.2, 1515.0], [89.3, 1517.0], [89.4, 1521.0], [89.5, 1526.0], [89.6, 1530.0], [89.7, 1536.0], [89.8, 1544.0], [89.9, 1547.0], [90.0, 1551.0], [90.1, 1555.0], [90.2, 1558.0], [90.3, 1567.0], [90.4, 1569.0], [90.5, 1574.0], [90.6, 1585.0], [90.7, 1594.0], [90.8, 1597.0], [90.9, 1601.0], [91.0, 1604.0], [91.1, 1612.0], [91.2, 1615.0], [91.3, 1619.0], [91.4, 1622.0], [91.5, 1628.0], [91.6, 1640.0], [91.7, 1651.0], [91.8, 1655.0], [91.9, 1662.0], [92.0, 1668.0], [92.1, 1678.0], [92.2, 1683.0], [92.3, 1695.0], [92.4, 1701.0], [92.5, 1704.0], [92.6, 1721.0], [92.7, 1728.0], [92.8, 1737.0], [92.9, 1744.0], [93.0, 1757.0], [93.1, 1764.0], [93.2, 1775.0], [93.3, 1783.0], [93.4, 1793.0], [93.5, 1795.0], [93.6, 1802.0], [93.7, 1812.0], [93.8, 1816.0], [93.9, 1826.0], [94.0, 1834.0], [94.1, 1842.0], [94.2, 1859.0], [94.3, 1872.0], [94.4, 1873.0], [94.5, 1884.0], [94.6, 1896.0], [94.7, 1916.0], [94.8, 1928.0], [94.9, 1944.0], [95.0, 1962.0], [95.1, 1974.0], [95.2, 1978.0], [95.3, 1987.0], [95.4, 2002.0], [95.5, 2017.0], [95.6, 2024.0], [95.7, 2050.0], [95.8, 2063.0], [95.9, 2071.0], [96.0, 2079.0], [96.1, 2091.0], [96.2, 2106.0], [96.3, 2115.0], [96.4, 2121.0], [96.5, 2130.0], [96.6, 2135.0], [96.7, 2142.0], [96.8, 2149.0], [96.9, 2167.0], [97.0, 2178.0], [97.1, 2191.0], [97.2, 2207.0], [97.3, 2234.0], [97.4, 2254.0], [97.5, 2268.0], [97.6, 2289.0], [97.7, 2305.0], [97.8, 2331.0], [97.9, 2396.0], [98.0, 2423.0], [98.1, 2446.0], [98.2, 2479.0], [98.3, 2500.0], [98.4, 2534.0], [98.5, 2569.0], [98.6, 2628.0], [98.7, 2659.0], [98.8, 2714.0], [98.9, 2749.0], [99.0, 2840.0], [99.1, 2890.0], [99.2, 2990.0], [99.3, 3127.0], [99.4, 3252.0], [99.5, 3439.0], [99.6, 3584.0], [99.7, 4138.0], [99.8, 4869.0], [99.9, 5032.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 581.0, "series": [{"data": [[8600.0, 1.0], [600.0, 389.0], [700.0, 348.0], [800.0, 304.0], [900.0, 308.0], [1000.0, 277.0], [1100.0, 237.0], [1200.0, 214.0], [1300.0, 186.0], [1400.0, 172.0], [1500.0, 111.0], [1600.0, 80.0], [100.0, 92.0], [1700.0, 60.0], [1800.0, 55.0], [1900.0, 39.0], [2000.0, 41.0], [2100.0, 52.0], [2300.0, 16.0], [2200.0, 25.0], [2400.0, 18.0], [2500.0, 15.0], [2600.0, 10.0], [2700.0, 9.0], [2800.0, 9.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 4.0], [200.0, 538.0], [3200.0, 3.0], [3300.0, 2.0], [3400.0, 5.0], [3500.0, 4.0], [3700.0, 2.0], [3600.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4400.0, 2.0], [300.0, 446.0], [4800.0, 3.0], [5000.0, 3.0], [4900.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [400.0, 581.0], [500.0, 512.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 585.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2946.0, "series": [{"data": [[0.0, 1659.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2946.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 585.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.4, "minX": 1.60262856E12, "maxY": 10.0, "series": [{"data": [[1.60262886E12, 10.0], [1.60262868E12, 10.0], [1.6026288E12, 10.0], [1.60262898E12, 10.0], [1.60262862E12, 10.0], [1.60262892E12, 10.0], [1.60262874E12, 10.0], [1.60262904E12, 9.4], [1.60262856E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262904E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 353.0, "minX": 1.0, "maxY": 2845.0, "series": [{"data": [[8.0, 353.0], [4.0, 767.0], [2.0, 2845.0], [1.0, 2568.0], [9.0, 781.0], [10.0, 857.8610306890553], [5.0, 1881.0], [6.0, 906.0], [3.0, 1040.0], [7.0, 543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 858.6246628131013]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 572.25, "minX": 1.60262856E12, "maxY": 3835025.066666667, "series": [{"data": [[1.60262886E12, 2534773.966666667], [1.60262868E12, 3633124.316666667], [1.6026288E12, 3197391.4166666665], [1.60262898E12, 3111644.433333333], [1.60262862E12, 2661926.7333333334], [1.60262892E12, 3835025.066666667], [1.60262874E12, 3556301.3333333335], [1.60262904E12, 312290.11666666664], [1.60262856E12, 1129976.0333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60262886E12, 5237.266666666666], [1.60262868E12, 5321.85], [1.6026288E12, 4528.366666666667], [1.60262898E12, 5381.416666666667], [1.60262862E12, 5428.283333333334], [1.60262892E12, 5422.933333333333], [1.60262874E12, 5576.45], [1.60262904E12, 572.25], [1.60262856E12, 1108.5166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262904E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 805.1373333333338, "minX": 1.60262856E12, "maxY": 1187.573333333333, "series": [{"data": [[1.60262886E12, 824.4937759336101], [1.60262868E12, 839.5654008438827], [1.6026288E12, 965.1306451612899], [1.60262898E12, 843.7991573033711], [1.60262862E12, 805.1373333333338], [1.60262892E12, 841.9131652661077], [1.60262874E12, 815.7591836734689], [1.60262904E12, 1084.7733333333335], [1.60262856E12, 1187.573333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262904E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 803.6706666666664, "minX": 1.60262856E12, "maxY": 1184.233333333333, "series": [{"data": [[1.60262886E12, 823.2697095435692], [1.60262868E12, 837.1364275668075], [1.6026288E12, 963.5419354838708], [1.60262898E12, 842.1250000000005], [1.60262862E12, 803.6706666666664], [1.60262892E12, 840.0140056022415], [1.60262874E12, 813.6761904761913], [1.60262904E12, 1083.2], [1.60262856E12, 1184.233333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262904E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60262856E12, "maxY": 0.6199999999999998, "series": [{"data": [[1.60262886E12, 0.016597510373443983], [1.60262868E12, 0.02109704641350213], [1.6026288E12, 0.016129032258064516], [1.60262898E12, 0.016853932584269676], [1.60262862E12, 0.010666666666666672], [1.60262892E12, 0.00980392156862746], [1.60262874E12, 0.008163265306122455], [1.60262904E12, 0.0], [1.60262856E12, 0.6199999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262904E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60262856E12, "maxY": 8676.0, "series": [{"data": [[1.60262886E12, 5061.0], [1.60262868E12, 4457.0], [1.6026288E12, 8676.0], [1.60262898E12, 3608.0], [1.60262862E12, 5803.0], [1.60262892E12, 3093.0], [1.60262874E12, 4948.0], [1.60262904E12, 2890.0], [1.60262856E12, 3787.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60262886E12, 196.51599982738495], [1.60262868E12, 189.0], [1.6026288E12, 200.53399911165238], [1.60262898E12, 188.8339996600151], [1.60262862E12, 195.0], [1.60262892E12, 188.0], [1.60262874E12, 189.0], [1.60262904E12, 219.0], [1.60262856E12, 219.15399978399276]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60262886E12, 197.33520013809203], [1.60262868E12, 189.09760013580322], [1.6026288E12, 203.14790005922316], [1.60262898E12, 190.11740013599396], [1.60262862E12, 195.8698001432419], [1.60262892E12, 188.15700013637542], [1.60262874E12, 189.0], [1.60262904E12, 219.0], [1.60262856E12, 219.96940008640289]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60262886E12, 196.87799991369246], [1.60262868E12, 189.0], [1.6026288E12, 202.3969995558262], [1.60262898E12, 189.54699983000756], [1.60262862E12, 195.26899982094764], [1.60262892E12, 188.0], [1.60262874E12, 189.0], [1.60262904E12, 219.0], [1.60262856E12, 219.6069998919964]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60262886E12, 190.0], [1.60262868E12, 177.0], [1.6026288E12, 187.0], [1.60262898E12, 181.0], [1.60262862E12, 186.0], [1.60262892E12, 183.0], [1.60262874E12, 183.0], [1.60262904E12, 219.0], [1.60262856E12, 217.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60262886E12, 681.0], [1.60262868E12, 644.0], [1.6026288E12, 850.5], [1.60262898E12, 714.5], [1.60262862E12, 654.0], [1.60262892E12, 659.5], [1.60262874E12, 662.0], [1.60262904E12, 960.0], [1.60262856E12, 937.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262904E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 375.0, "minX": 2.0, "maxY": 2706.5, "series": [{"data": [[2.0, 2706.5], [3.0, 375.0], [4.0, 1463.0], [5.0, 1061.0], [6.0, 1155.5], [7.0, 1069.0], [8.0, 1017.0], [9.0, 978.0], [10.0, 906.5], [11.0, 840.0], [12.0, 795.5], [13.0, 729.0], [14.0, 626.0], [15.0, 577.0], [16.0, 571.5], [17.0, 512.5], [18.0, 490.5], [19.0, 459.0], [20.0, 439.5], [21.0, 430.0], [22.0, 427.0], [23.0, 405.0], [25.0, 402.0], [26.0, 393.5], [29.0, 405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 372.0, "minX": 2.0, "maxY": 2699.5, "series": [{"data": [[2.0, 2699.5], [3.0, 372.0], [4.0, 1460.0], [5.0, 1059.5], [6.0, 1154.0], [7.0, 1064.0], [8.0, 1016.0], [9.0, 978.0], [10.0, 904.5], [11.0, 839.0], [12.0, 794.5], [13.0, 727.0], [14.0, 625.5], [15.0, 575.0], [16.0, 570.5], [17.0, 512.0], [18.0, 490.5], [19.0, 459.0], [20.0, 439.5], [21.0, 430.0], [22.0, 426.5], [23.0, 404.0], [25.0, 402.0], [26.0, 393.5], [29.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60262856E12, "maxY": 12.5, "series": [{"data": [[1.60262886E12, 12.05], [1.60262868E12, 11.85], [1.6026288E12, 10.333333333333334], [1.60262898E12, 11.866666666666667], [1.60262862E12, 12.5], [1.60262892E12, 11.9], [1.60262874E12, 12.25], [1.60262904E12, 1.0833333333333333], [1.60262856E12, 2.6666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262904E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60262856E12, "maxY": 12.5, "series": [{"data": [[1.60262886E12, 12.05], [1.60262868E12, 11.85], [1.6026288E12, 10.333333333333334], [1.60262898E12, 11.866666666666667], [1.60262862E12, 12.5], [1.60262892E12, 11.9], [1.60262874E12, 12.25], [1.60262904E12, 1.25], [1.60262856E12, 2.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60262904E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60262856E12, "maxY": 12.5, "series": [{"data": [[1.60262886E12, 12.05], [1.60262868E12, 11.85], [1.6026288E12, 10.333333333333334], [1.60262898E12, 11.866666666666667], [1.60262862E12, 12.5], [1.60262892E12, 11.9], [1.60262874E12, 12.25], [1.60262904E12, 1.25], [1.60262856E12, 2.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262904E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.60262856E12, "maxY": 12.5, "series": [{"data": [[1.60262886E12, 12.05], [1.60262868E12, 11.85], [1.6026288E12, 10.333333333333334], [1.60262898E12, 11.866666666666667], [1.60262862E12, 12.5], [1.60262892E12, 11.9], [1.60262874E12, 12.25], [1.60262904E12, 1.25], [1.60262856E12, 2.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60262904E12, "title": "Total Transactions Per Second"}},
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

