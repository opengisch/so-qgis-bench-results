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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8734.0, "series": [{"data": [[0.0, 181.0], [0.1, 186.0], [0.2, 189.0], [0.3, 190.0], [0.4, 192.0], [0.5, 194.0], [0.6, 195.0], [0.7, 196.0], [0.8, 197.0], [0.9, 197.0], [1.0, 198.0], [1.1, 198.0], [1.2, 199.0], [1.3, 200.0], [1.4, 201.0], [1.5, 201.0], [1.6, 203.0], [1.7, 203.0], [1.8, 204.0], [1.9, 205.0], [2.0, 206.0], [2.1, 207.0], [2.2, 208.0], [2.3, 208.0], [2.4, 209.0], [2.5, 210.0], [2.6, 210.0], [2.7, 211.0], [2.8, 212.0], [2.9, 212.0], [3.0, 213.0], [3.1, 214.0], [3.2, 214.0], [3.3, 215.0], [3.4, 216.0], [3.5, 216.0], [3.6, 217.0], [3.7, 219.0], [3.8, 219.0], [3.9, 220.0], [4.0, 222.0], [4.1, 222.0], [4.2, 223.0], [4.3, 224.0], [4.4, 225.0], [4.5, 225.0], [4.6, 226.0], [4.7, 226.0], [4.8, 227.0], [4.9, 227.0], [5.0, 228.0], [5.1, 228.0], [5.2, 229.0], [5.3, 229.0], [5.4, 230.0], [5.5, 230.0], [5.6, 231.0], [5.7, 231.0], [5.8, 232.0], [5.9, 233.0], [6.0, 234.0], [6.1, 234.0], [6.2, 236.0], [6.3, 236.0], [6.4, 237.0], [6.5, 239.0], [6.6, 242.0], [6.7, 243.0], [6.8, 245.0], [6.9, 246.0], [7.0, 248.0], [7.1, 248.0], [7.2, 248.0], [7.3, 249.0], [7.4, 251.0], [7.5, 253.0], [7.6, 254.0], [7.7, 257.0], [7.8, 257.0], [7.9, 258.0], [8.0, 259.0], [8.1, 261.0], [8.2, 263.0], [8.3, 264.0], [8.4, 265.0], [8.5, 266.0], [8.6, 268.0], [8.7, 269.0], [8.8, 270.0], [8.9, 271.0], [9.0, 272.0], [9.1, 273.0], [9.2, 273.0], [9.3, 274.0], [9.4, 274.0], [9.5, 275.0], [9.6, 276.0], [9.7, 277.0], [9.8, 279.0], [9.9, 280.0], [10.0, 281.0], [10.1, 281.0], [10.2, 282.0], [10.3, 282.0], [10.4, 283.0], [10.5, 284.0], [10.6, 284.0], [10.7, 285.0], [10.8, 286.0], [10.9, 286.0], [11.0, 288.0], [11.1, 288.0], [11.2, 288.0], [11.3, 289.0], [11.4, 290.0], [11.5, 291.0], [11.6, 292.0], [11.7, 292.0], [11.8, 293.0], [11.9, 294.0], [12.0, 295.0], [12.1, 296.0], [12.2, 298.0], [12.3, 299.0], [12.4, 299.0], [12.5, 300.0], [12.6, 301.0], [12.7, 302.0], [12.8, 304.0], [12.9, 305.0], [13.0, 306.0], [13.1, 307.0], [13.2, 307.0], [13.3, 309.0], [13.4, 310.0], [13.5, 311.0], [13.6, 312.0], [13.7, 313.0], [13.8, 315.0], [13.9, 316.0], [14.0, 316.0], [14.1, 317.0], [14.2, 318.0], [14.3, 320.0], [14.4, 322.0], [14.5, 323.0], [14.6, 324.0], [14.7, 325.0], [14.8, 326.0], [14.9, 327.0], [15.0, 328.0], [15.1, 329.0], [15.2, 331.0], [15.3, 332.0], [15.4, 334.0], [15.5, 336.0], [15.6, 339.0], [15.7, 342.0], [15.8, 344.0], [15.9, 346.0], [16.0, 347.0], [16.1, 350.0], [16.2, 353.0], [16.3, 356.0], [16.4, 357.0], [16.5, 358.0], [16.6, 359.0], [16.7, 361.0], [16.8, 364.0], [16.9, 365.0], [17.0, 366.0], [17.1, 368.0], [17.2, 369.0], [17.3, 371.0], [17.4, 373.0], [17.5, 374.0], [17.6, 375.0], [17.7, 378.0], [17.8, 379.0], [17.9, 379.0], [18.0, 381.0], [18.1, 383.0], [18.2, 384.0], [18.3, 385.0], [18.4, 386.0], [18.5, 387.0], [18.6, 389.0], [18.7, 390.0], [18.8, 390.0], [18.9, 391.0], [19.0, 393.0], [19.1, 394.0], [19.2, 395.0], [19.3, 396.0], [19.4, 398.0], [19.5, 399.0], [19.6, 399.0], [19.7, 401.0], [19.8, 402.0], [19.9, 404.0], [20.0, 405.0], [20.1, 407.0], [20.2, 408.0], [20.3, 409.0], [20.4, 410.0], [20.5, 411.0], [20.6, 411.0], [20.7, 411.0], [20.8, 412.0], [20.9, 414.0], [21.0, 415.0], [21.1, 416.0], [21.2, 417.0], [21.3, 418.0], [21.4, 419.0], [21.5, 420.0], [21.6, 421.0], [21.7, 422.0], [21.8, 423.0], [21.9, 423.0], [22.0, 426.0], [22.1, 426.0], [22.2, 427.0], [22.3, 429.0], [22.4, 429.0], [22.5, 430.0], [22.6, 432.0], [22.7, 432.0], [22.8, 433.0], [22.9, 434.0], [23.0, 435.0], [23.1, 436.0], [23.2, 437.0], [23.3, 438.0], [23.4, 438.0], [23.5, 439.0], [23.6, 440.0], [23.7, 440.0], [23.8, 441.0], [23.9, 442.0], [24.0, 444.0], [24.1, 444.0], [24.2, 446.0], [24.3, 447.0], [24.4, 449.0], [24.5, 450.0], [24.6, 451.0], [24.7, 452.0], [24.8, 452.0], [24.9, 453.0], [25.0, 454.0], [25.1, 455.0], [25.2, 455.0], [25.3, 456.0], [25.4, 458.0], [25.5, 458.0], [25.6, 459.0], [25.7, 460.0], [25.8, 460.0], [25.9, 461.0], [26.0, 461.0], [26.1, 462.0], [26.2, 464.0], [26.3, 464.0], [26.4, 465.0], [26.5, 466.0], [26.6, 467.0], [26.7, 467.0], [26.8, 468.0], [26.9, 469.0], [27.0, 469.0], [27.1, 470.0], [27.2, 472.0], [27.3, 473.0], [27.4, 473.0], [27.5, 474.0], [27.6, 475.0], [27.7, 476.0], [27.8, 476.0], [27.9, 477.0], [28.0, 478.0], [28.1, 479.0], [28.2, 480.0], [28.3, 481.0], [28.4, 483.0], [28.5, 484.0], [28.6, 485.0], [28.7, 485.0], [28.8, 487.0], [28.9, 488.0], [29.0, 490.0], [29.1, 490.0], [29.2, 491.0], [29.3, 492.0], [29.4, 493.0], [29.5, 493.0], [29.6, 494.0], [29.7, 495.0], [29.8, 496.0], [29.9, 497.0], [30.0, 498.0], [30.1, 499.0], [30.2, 499.0], [30.3, 500.0], [30.4, 501.0], [30.5, 502.0], [30.6, 502.0], [30.7, 502.0], [30.8, 503.0], [30.9, 504.0], [31.0, 505.0], [31.1, 505.0], [31.2, 507.0], [31.3, 508.0], [31.4, 509.0], [31.5, 511.0], [31.6, 512.0], [31.7, 512.0], [31.8, 514.0], [31.9, 515.0], [32.0, 517.0], [32.1, 518.0], [32.2, 518.0], [32.3, 520.0], [32.4, 521.0], [32.5, 521.0], [32.6, 522.0], [32.7, 523.0], [32.8, 523.0], [32.9, 525.0], [33.0, 527.0], [33.1, 527.0], [33.2, 528.0], [33.3, 530.0], [33.4, 531.0], [33.5, 533.0], [33.6, 535.0], [33.7, 536.0], [33.8, 537.0], [33.9, 538.0], [34.0, 539.0], [34.1, 540.0], [34.2, 541.0], [34.3, 543.0], [34.4, 544.0], [34.5, 545.0], [34.6, 547.0], [34.7, 548.0], [34.8, 548.0], [34.9, 549.0], [35.0, 550.0], [35.1, 552.0], [35.2, 552.0], [35.3, 554.0], [35.4, 555.0], [35.5, 555.0], [35.6, 556.0], [35.7, 557.0], [35.8, 558.0], [35.9, 558.0], [36.0, 559.0], [36.1, 560.0], [36.2, 560.0], [36.3, 561.0], [36.4, 562.0], [36.5, 563.0], [36.6, 564.0], [36.7, 565.0], [36.8, 566.0], [36.9, 566.0], [37.0, 567.0], [37.1, 568.0], [37.2, 569.0], [37.3, 570.0], [37.4, 571.0], [37.5, 571.0], [37.6, 572.0], [37.7, 573.0], [37.8, 573.0], [37.9, 575.0], [38.0, 576.0], [38.1, 577.0], [38.2, 578.0], [38.3, 579.0], [38.4, 579.0], [38.5, 580.0], [38.6, 581.0], [38.7, 581.0], [38.8, 582.0], [38.9, 584.0], [39.0, 584.0], [39.1, 585.0], [39.2, 586.0], [39.3, 587.0], [39.4, 588.0], [39.5, 589.0], [39.6, 591.0], [39.7, 592.0], [39.8, 593.0], [39.9, 593.0], [40.0, 594.0], [40.1, 596.0], [40.2, 597.0], [40.3, 597.0], [40.4, 599.0], [40.5, 599.0], [40.6, 600.0], [40.7, 601.0], [40.8, 602.0], [40.9, 603.0], [41.0, 604.0], [41.1, 605.0], [41.2, 607.0], [41.3, 608.0], [41.4, 609.0], [41.5, 611.0], [41.6, 613.0], [41.7, 614.0], [41.8, 615.0], [41.9, 617.0], [42.0, 618.0], [42.1, 618.0], [42.2, 620.0], [42.3, 622.0], [42.4, 622.0], [42.5, 623.0], [42.6, 624.0], [42.7, 625.0], [42.8, 626.0], [42.9, 626.0], [43.0, 627.0], [43.1, 629.0], [43.2, 630.0], [43.3, 630.0], [43.4, 631.0], [43.5, 632.0], [43.6, 633.0], [43.7, 635.0], [43.8, 636.0], [43.9, 637.0], [44.0, 638.0], [44.1, 638.0], [44.2, 640.0], [44.3, 641.0], [44.4, 642.0], [44.5, 642.0], [44.6, 643.0], [44.7, 644.0], [44.8, 645.0], [44.9, 647.0], [45.0, 648.0], [45.1, 649.0], [45.2, 651.0], [45.3, 652.0], [45.4, 652.0], [45.5, 655.0], [45.6, 657.0], [45.7, 658.0], [45.8, 660.0], [45.9, 661.0], [46.0, 662.0], [46.1, 663.0], [46.2, 665.0], [46.3, 665.0], [46.4, 666.0], [46.5, 668.0], [46.6, 669.0], [46.7, 670.0], [46.8, 671.0], [46.9, 673.0], [47.0, 674.0], [47.1, 677.0], [47.2, 680.0], [47.3, 681.0], [47.4, 683.0], [47.5, 683.0], [47.6, 685.0], [47.7, 687.0], [47.8, 689.0], [47.9, 690.0], [48.0, 691.0], [48.1, 693.0], [48.2, 695.0], [48.3, 696.0], [48.4, 697.0], [48.5, 699.0], [48.6, 699.0], [48.7, 701.0], [48.8, 702.0], [48.9, 703.0], [49.0, 704.0], [49.1, 705.0], [49.2, 707.0], [49.3, 708.0], [49.4, 710.0], [49.5, 711.0], [49.6, 716.0], [49.7, 717.0], [49.8, 719.0], [49.9, 720.0], [50.0, 722.0], [50.1, 723.0], [50.2, 725.0], [50.3, 727.0], [50.4, 727.0], [50.5, 729.0], [50.6, 730.0], [50.7, 731.0], [50.8, 733.0], [50.9, 735.0], [51.0, 736.0], [51.1, 737.0], [51.2, 738.0], [51.3, 740.0], [51.4, 742.0], [51.5, 743.0], [51.6, 744.0], [51.7, 748.0], [51.8, 750.0], [51.9, 753.0], [52.0, 754.0], [52.1, 755.0], [52.2, 757.0], [52.3, 759.0], [52.4, 760.0], [52.5, 761.0], [52.6, 762.0], [52.7, 764.0], [52.8, 766.0], [52.9, 767.0], [53.0, 770.0], [53.1, 772.0], [53.2, 774.0], [53.3, 776.0], [53.4, 777.0], [53.5, 779.0], [53.6, 780.0], [53.7, 782.0], [53.8, 783.0], [53.9, 784.0], [54.0, 786.0], [54.1, 786.0], [54.2, 789.0], [54.3, 791.0], [54.4, 793.0], [54.5, 795.0], [54.6, 797.0], [54.7, 799.0], [54.8, 801.0], [54.9, 802.0], [55.0, 805.0], [55.1, 806.0], [55.2, 809.0], [55.3, 811.0], [55.4, 812.0], [55.5, 813.0], [55.6, 814.0], [55.7, 816.0], [55.8, 818.0], [55.9, 819.0], [56.0, 820.0], [56.1, 822.0], [56.2, 822.0], [56.3, 824.0], [56.4, 825.0], [56.5, 826.0], [56.6, 828.0], [56.7, 831.0], [56.8, 833.0], [56.9, 835.0], [57.0, 838.0], [57.1, 841.0], [57.2, 842.0], [57.3, 845.0], [57.4, 846.0], [57.5, 847.0], [57.6, 849.0], [57.7, 850.0], [57.8, 851.0], [57.9, 853.0], [58.0, 855.0], [58.1, 856.0], [58.2, 858.0], [58.3, 859.0], [58.4, 860.0], [58.5, 863.0], [58.6, 864.0], [58.7, 865.0], [58.8, 867.0], [58.9, 868.0], [59.0, 870.0], [59.1, 871.0], [59.2, 872.0], [59.3, 874.0], [59.4, 875.0], [59.5, 876.0], [59.6, 877.0], [59.7, 881.0], [59.8, 882.0], [59.9, 884.0], [60.0, 886.0], [60.1, 888.0], [60.2, 889.0], [60.3, 892.0], [60.4, 893.0], [60.5, 897.0], [60.6, 900.0], [60.7, 902.0], [60.8, 904.0], [60.9, 905.0], [61.0, 907.0], [61.1, 909.0], [61.2, 910.0], [61.3, 912.0], [61.4, 913.0], [61.5, 914.0], [61.6, 915.0], [61.7, 917.0], [61.8, 921.0], [61.9, 922.0], [62.0, 924.0], [62.1, 926.0], [62.2, 928.0], [62.3, 928.0], [62.4, 932.0], [62.5, 933.0], [62.6, 934.0], [62.7, 935.0], [62.8, 937.0], [62.9, 938.0], [63.0, 939.0], [63.1, 941.0], [63.2, 941.0], [63.3, 943.0], [63.4, 944.0], [63.5, 945.0], [63.6, 947.0], [63.7, 950.0], [63.8, 953.0], [63.9, 955.0], [64.0, 956.0], [64.1, 957.0], [64.2, 959.0], [64.3, 961.0], [64.4, 963.0], [64.5, 964.0], [64.6, 966.0], [64.7, 967.0], [64.8, 968.0], [64.9, 970.0], [65.0, 972.0], [65.1, 974.0], [65.2, 978.0], [65.3, 980.0], [65.4, 981.0], [65.5, 985.0], [65.6, 985.0], [65.7, 987.0], [65.8, 988.0], [65.9, 990.0], [66.0, 992.0], [66.1, 994.0], [66.2, 995.0], [66.3, 997.0], [66.4, 998.0], [66.5, 999.0], [66.6, 1001.0], [66.7, 1002.0], [66.8, 1004.0], [66.9, 1006.0], [67.0, 1007.0], [67.1, 1010.0], [67.2, 1012.0], [67.3, 1012.0], [67.4, 1013.0], [67.5, 1015.0], [67.6, 1017.0], [67.7, 1021.0], [67.8, 1021.0], [67.9, 1024.0], [68.0, 1025.0], [68.1, 1027.0], [68.2, 1029.0], [68.3, 1031.0], [68.4, 1032.0], [68.5, 1035.0], [68.6, 1036.0], [68.7, 1038.0], [68.8, 1039.0], [68.9, 1040.0], [69.0, 1042.0], [69.1, 1045.0], [69.2, 1047.0], [69.3, 1049.0], [69.4, 1051.0], [69.5, 1053.0], [69.6, 1057.0], [69.7, 1059.0], [69.8, 1060.0], [69.9, 1062.0], [70.0, 1066.0], [70.1, 1069.0], [70.2, 1071.0], [70.3, 1072.0], [70.4, 1076.0], [70.5, 1077.0], [70.6, 1078.0], [70.7, 1080.0], [70.8, 1084.0], [70.9, 1085.0], [71.0, 1087.0], [71.1, 1089.0], [71.2, 1090.0], [71.3, 1093.0], [71.4, 1094.0], [71.5, 1096.0], [71.6, 1097.0], [71.7, 1099.0], [71.8, 1100.0], [71.9, 1102.0], [72.0, 1104.0], [72.1, 1106.0], [72.2, 1108.0], [72.3, 1109.0], [72.4, 1110.0], [72.5, 1111.0], [72.6, 1113.0], [72.7, 1115.0], [72.8, 1119.0], [72.9, 1120.0], [73.0, 1123.0], [73.1, 1125.0], [73.2, 1127.0], [73.3, 1130.0], [73.4, 1131.0], [73.5, 1133.0], [73.6, 1135.0], [73.7, 1135.0], [73.8, 1136.0], [73.9, 1138.0], [74.0, 1141.0], [74.1, 1144.0], [74.2, 1146.0], [74.3, 1148.0], [74.4, 1151.0], [74.5, 1153.0], [74.6, 1154.0], [74.7, 1156.0], [74.8, 1159.0], [74.9, 1161.0], [75.0, 1164.0], [75.1, 1166.0], [75.2, 1168.0], [75.3, 1171.0], [75.4, 1173.0], [75.5, 1176.0], [75.6, 1177.0], [75.7, 1179.0], [75.8, 1181.0], [75.9, 1183.0], [76.0, 1185.0], [76.1, 1187.0], [76.2, 1188.0], [76.3, 1190.0], [76.4, 1193.0], [76.5, 1197.0], [76.6, 1198.0], [76.7, 1201.0], [76.8, 1206.0], [76.9, 1208.0], [77.0, 1212.0], [77.1, 1215.0], [77.2, 1218.0], [77.3, 1220.0], [77.4, 1226.0], [77.5, 1228.0], [77.6, 1232.0], [77.7, 1235.0], [77.8, 1237.0], [77.9, 1242.0], [78.0, 1245.0], [78.1, 1248.0], [78.2, 1251.0], [78.3, 1255.0], [78.4, 1257.0], [78.5, 1260.0], [78.6, 1262.0], [78.7, 1263.0], [78.8, 1266.0], [78.9, 1271.0], [79.0, 1272.0], [79.1, 1276.0], [79.2, 1278.0], [79.3, 1281.0], [79.4, 1282.0], [79.5, 1284.0], [79.6, 1287.0], [79.7, 1288.0], [79.8, 1291.0], [79.9, 1295.0], [80.0, 1296.0], [80.1, 1298.0], [80.2, 1299.0], [80.3, 1301.0], [80.4, 1305.0], [80.5, 1309.0], [80.6, 1311.0], [80.7, 1313.0], [80.8, 1315.0], [80.9, 1318.0], [81.0, 1320.0], [81.1, 1321.0], [81.2, 1323.0], [81.3, 1326.0], [81.4, 1329.0], [81.5, 1331.0], [81.6, 1335.0], [81.7, 1337.0], [81.8, 1339.0], [81.9, 1342.0], [82.0, 1344.0], [82.1, 1345.0], [82.2, 1346.0], [82.3, 1348.0], [82.4, 1349.0], [82.5, 1350.0], [82.6, 1351.0], [82.7, 1353.0], [82.8, 1355.0], [82.9, 1358.0], [83.0, 1361.0], [83.1, 1364.0], [83.2, 1366.0], [83.3, 1369.0], [83.4, 1372.0], [83.5, 1375.0], [83.6, 1380.0], [83.7, 1382.0], [83.8, 1386.0], [83.9, 1389.0], [84.0, 1390.0], [84.1, 1394.0], [84.2, 1398.0], [84.3, 1401.0], [84.4, 1406.0], [84.5, 1407.0], [84.6, 1411.0], [84.7, 1412.0], [84.8, 1413.0], [84.9, 1416.0], [85.0, 1418.0], [85.1, 1420.0], [85.2, 1426.0], [85.3, 1428.0], [85.4, 1431.0], [85.5, 1432.0], [85.6, 1433.0], [85.7, 1436.0], [85.8, 1438.0], [85.9, 1440.0], [86.0, 1441.0], [86.1, 1444.0], [86.2, 1445.0], [86.3, 1447.0], [86.4, 1448.0], [86.5, 1450.0], [86.6, 1452.0], [86.7, 1457.0], [86.8, 1461.0], [86.9, 1464.0], [87.0, 1468.0], [87.1, 1470.0], [87.2, 1475.0], [87.3, 1479.0], [87.4, 1481.0], [87.5, 1482.0], [87.6, 1486.0], [87.7, 1490.0], [87.8, 1498.0], [87.9, 1506.0], [88.0, 1511.0], [88.1, 1516.0], [88.2, 1518.0], [88.3, 1522.0], [88.4, 1525.0], [88.5, 1532.0], [88.6, 1534.0], [88.7, 1537.0], [88.8, 1539.0], [88.9, 1544.0], [89.0, 1546.0], [89.1, 1552.0], [89.2, 1555.0], [89.3, 1559.0], [89.4, 1564.0], [89.5, 1567.0], [89.6, 1572.0], [89.7, 1574.0], [89.8, 1577.0], [89.9, 1581.0], [90.0, 1585.0], [90.1, 1590.0], [90.2, 1595.0], [90.3, 1598.0], [90.4, 1607.0], [90.5, 1610.0], [90.6, 1615.0], [90.7, 1619.0], [90.8, 1623.0], [90.9, 1627.0], [91.0, 1633.0], [91.1, 1639.0], [91.2, 1644.0], [91.3, 1651.0], [91.4, 1654.0], [91.5, 1662.0], [91.6, 1667.0], [91.7, 1677.0], [91.8, 1683.0], [91.9, 1690.0], [92.0, 1698.0], [92.1, 1708.0], [92.2, 1720.0], [92.3, 1728.0], [92.4, 1736.0], [92.5, 1744.0], [92.6, 1747.0], [92.7, 1757.0], [92.8, 1763.0], [92.9, 1770.0], [93.0, 1780.0], [93.1, 1786.0], [93.2, 1793.0], [93.3, 1808.0], [93.4, 1810.0], [93.5, 1823.0], [93.6, 1830.0], [93.7, 1843.0], [93.8, 1852.0], [93.9, 1856.0], [94.0, 1865.0], [94.1, 1870.0], [94.2, 1874.0], [94.3, 1883.0], [94.4, 1891.0], [94.5, 1899.0], [94.6, 1906.0], [94.7, 1914.0], [94.8, 1923.0], [94.9, 1936.0], [95.0, 1944.0], [95.1, 1966.0], [95.2, 1978.0], [95.3, 1998.0], [95.4, 2006.0], [95.5, 2020.0], [95.6, 2033.0], [95.7, 2041.0], [95.8, 2058.0], [95.9, 2070.0], [96.0, 2081.0], [96.1, 2096.0], [96.2, 2108.0], [96.3, 2120.0], [96.4, 2138.0], [96.5, 2153.0], [96.6, 2165.0], [96.7, 2172.0], [96.8, 2188.0], [96.9, 2211.0], [97.0, 2234.0], [97.1, 2251.0], [97.2, 2259.0], [97.3, 2270.0], [97.4, 2285.0], [97.5, 2313.0], [97.6, 2336.0], [97.7, 2351.0], [97.8, 2383.0], [97.9, 2395.0], [98.0, 2421.0], [98.1, 2483.0], [98.2, 2503.0], [98.3, 2515.0], [98.4, 2552.0], [98.5, 2582.0], [98.6, 2612.0], [98.7, 2649.0], [98.8, 2688.0], [98.9, 2765.0], [99.0, 2821.0], [99.1, 2865.0], [99.2, 3012.0], [99.3, 3171.0], [99.4, 3377.0], [99.5, 3469.0], [99.6, 3651.0], [99.7, 4022.0], [99.8, 4524.0], [99.9, 4765.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 579.0, "series": [{"data": [[600.0, 419.0], [700.0, 317.0], [800.0, 304.0], [900.0, 311.0], [1000.0, 269.0], [1100.0, 254.0], [1200.0, 186.0], [1300.0, 207.0], [1400.0, 186.0], [1500.0, 130.0], [1600.0, 88.0], [1700.0, 65.0], [1800.0, 66.0], [1900.0, 41.0], [2000.0, 44.0], [2100.0, 37.0], [2200.0, 29.0], [2300.0, 24.0], [2400.0, 14.0], [2500.0, 21.0], [2600.0, 12.0], [2800.0, 9.0], [2700.0, 8.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 5.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 7.0], [3500.0, 3.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [4500.0, 3.0], [4400.0, 1.0], [4600.0, 1.0], [4700.0, 3.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [8700.0, 1.0], [100.0, 66.0], [200.0, 579.0], [300.0, 374.0], [400.0, 552.0], [500.0, 534.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2981.0, "series": [{"data": [[0.0, 1576.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2981.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 633.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.852459016393441, "minX": 1.60223652E12, "maxY": 10.0, "series": [{"data": [[1.60223688E12, 10.0], [1.60223694E12, 10.0], [1.60223658E12, 10.0], [1.60223676E12, 10.0], [1.60223652E12, 10.0], [1.60223682E12, 10.0], [1.6022367E12, 10.0], [1.60223664E12, 10.0], [1.602237E12, 9.852459016393441]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602237E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 2596.0, "series": [{"data": [[8.0, 1322.0], [4.0, 1210.0], [2.0, 2552.0], [1.0, 2596.0], [9.0, 307.0], [10.0, 874.2570436125043], [5.0, 1145.0], [6.0, 1764.0], [3.0, 668.0], [7.0, 288.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 875.0244654209203]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 76.2, "minX": 1.60223652E12, "maxY": 3450089.183333333, "series": [{"data": [[1.60223688E12, 3450089.183333333], [1.60223694E12, 3109815.566666667], [1.60223658E12, 3209872.0833333335], [1.60223676E12, 3366054.4], [1.60223652E12, 76583.58333333333], [1.60223682E12, 2673969.466666667], [1.6022367E12, 3390688.966666667], [1.60223664E12, 3169688.1333333333], [1.602237E12, 1525355.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223688E12, 5566.166666666667], [1.60223694E12, 5907.6], [1.60223658E12, 4709.883333333333], [1.60223676E12, 4629.966666666666], [1.60223652E12, 76.2], [1.60223682E12, 4552.083333333333], [1.6022367E12, 5380.316666666667], [1.60223664E12, 5464.516666666666], [1.602237E12, 2297.3166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602237E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 772.9229781771501, "minX": 1.60223652E12, "maxY": 2016.2, "series": [{"data": [[1.60223688E12, 804.3021390374329], [1.60223694E12, 772.9229781771501], [1.60223658E12, 928.5391705069129], [1.60223676E12, 953.8784440842783], [1.60223652E12, 2016.2], [1.60223682E12, 956.5820189274446], [1.6022367E12, 844.8110014104371], [1.60223664E12, 822.8197831978317], [1.602237E12, 1025.108196721311]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602237E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 771.4082156611036, "minX": 1.60223652E12, "maxY": 2012.3, "series": [{"data": [[1.60223688E12, 802.4197860962571], [1.60223694E12, 771.4082156611036], [1.60223658E12, 926.434715821812], [1.60223676E12, 951.4392220421395], [1.60223652E12, 2012.3], [1.60223682E12, 954.946372239748], [1.6022367E12, 842.7390691114231], [1.60223664E12, 820.8577235772344], [1.602237E12, 1023.1770491803275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602237E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010269576379974325, "minX": 1.60223652E12, "maxY": 5.2, "series": [{"data": [[1.60223688E12, 0.012032085561497333], [1.60223694E12, 0.010269576379974325], [1.60223658E12, 0.08755760368663587], [1.60223676E12, 0.011345218800648297], [1.60223652E12, 5.2], [1.60223682E12, 0.014195583596214513], [1.6022367E12, 0.016925246826516225], [1.60223664E12, 0.013550135501355016], [1.602237E12, 0.01311475409836065]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602237E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60223652E12, "maxY": 8734.0, "series": [{"data": [[1.60223688E12, 2532.0], [1.60223694E12, 3441.0], [1.60223658E12, 4949.0], [1.60223676E12, 4799.0], [1.60223652E12, 3561.0], [1.60223682E12, 8734.0], [1.6022367E12, 3228.0], [1.60223664E12, 4765.0], [1.602237E12, 3651.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223688E12, 197.0], [1.60223694E12, 191.03999962806702], [1.60223658E12, 213.8679998445511], [1.60223676E12, 194.56199985265732], [1.60223652E12, 201.0], [1.60223682E12, 202.1449995458126], [1.6022367E12, 204.38099983096123], [1.60223664E12, 196.0], [1.602237E12, 215.06399883270262]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223688E12, 197.0], [1.60223694E12, 192.4440001487732], [1.60223658E12, 214.0], [1.60223676E12, 195.11820005893708], [1.60223652E12, 201.0], [1.60223682E12, 203.0], [1.6022367E12, 205.0191000676155], [1.60223664E12, 196.0], [1.602237E12, 219.11760011672973]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223688E12, 197.0], [1.60223694E12, 191.8199998140335], [1.60223658E12, 214.0], [1.60223676E12, 194.87099992632866], [1.60223652E12, 201.0], [1.60223682E12, 203.0], [1.6022367E12, 204.7354999154806], [1.60223664E12, 196.0], [1.602237E12, 217.51199941635133]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223688E12, 189.0], [1.60223694E12, 181.0], [1.60223658E12, 193.0], [1.60223676E12, 183.0], [1.60223652E12, 201.0], [1.60223682E12, 184.0], [1.6022367E12, 189.0], [1.60223664E12, 185.0], [1.602237E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223688E12, 628.0], [1.60223694E12, 638.0], [1.60223658E12, 782.0], [1.60223676E12, 800.0], [1.60223652E12, 2623.5], [1.60223682E12, 816.5], [1.6022367E12, 682.0], [1.60223664E12, 601.0], [1.602237E12, 935.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602237E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 397.5, "minX": 1.0, "maxY": 2634.0, "series": [{"data": [[2.0, 2574.0], [3.0, 1453.0], [4.0, 1845.0], [5.0, 1252.0], [6.0, 1247.5], [7.0, 1162.0], [8.0, 1038.5], [9.0, 937.0], [10.0, 864.0], [11.0, 819.0], [12.0, 823.0], [13.0, 733.5], [14.0, 683.5], [15.0, 598.5], [1.0, 2634.0], [16.0, 620.0], [17.0, 476.0], [18.0, 505.0], [19.0, 513.0], [20.0, 458.5], [21.0, 449.0], [22.0, 426.5], [23.0, 455.0], [24.0, 397.5], [25.0, 439.0], [26.0, 402.0], [27.0, 447.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 397.5, "minX": 1.0, "maxY": 2631.0, "series": [{"data": [[2.0, 2566.0], [3.0, 1450.0], [4.0, 1843.0], [5.0, 1247.0], [6.0, 1246.5], [7.0, 1161.0], [8.0, 1035.5], [9.0, 936.0], [10.0, 864.0], [11.0, 817.5], [12.0, 819.5], [13.0, 733.5], [14.0, 682.0], [15.0, 598.5], [1.0, 2631.0], [16.0, 620.0], [17.0, 476.0], [18.0, 504.5], [19.0, 513.0], [20.0, 458.5], [21.0, 448.5], [22.0, 426.0], [23.0, 455.0], [24.0, 397.5], [25.0, 438.0], [26.0, 402.0], [27.0, 447.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60223652E12, "maxY": 12.983333333333333, "series": [{"data": [[1.60223688E12, 12.466666666666667], [1.60223694E12, 12.983333333333333], [1.60223658E12, 10.85], [1.60223676E12, 10.283333333333333], [1.60223652E12, 0.3333333333333333], [1.60223682E12, 10.566666666666666], [1.6022367E12, 11.816666666666666], [1.60223664E12, 12.3], [1.602237E12, 4.916666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602237E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223652E12, "maxY": 12.983333333333333, "series": [{"data": [[1.60223688E12, 12.466666666666667], [1.60223694E12, 12.983333333333333], [1.60223658E12, 10.85], [1.60223676E12, 10.283333333333333], [1.60223652E12, 0.16666666666666666], [1.60223682E12, 10.566666666666666], [1.6022367E12, 11.8], [1.60223664E12, 12.3], [1.602237E12, 5.083333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6022367E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602237E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223652E12, "maxY": 12.983333333333333, "series": [{"data": [[1.60223688E12, 12.466666666666667], [1.60223694E12, 12.983333333333333], [1.60223658E12, 10.85], [1.60223676E12, 10.283333333333333], [1.60223652E12, 0.16666666666666666], [1.60223682E12, 10.566666666666666], [1.6022367E12, 11.8], [1.60223664E12, 12.3], [1.602237E12, 5.083333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6022367E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602237E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223652E12, "maxY": 12.983333333333333, "series": [{"data": [[1.60223688E12, 12.466666666666667], [1.60223694E12, 12.983333333333333], [1.60223658E12, 10.85], [1.60223676E12, 10.283333333333333], [1.60223652E12, 0.16666666666666666], [1.60223682E12, 10.566666666666666], [1.6022367E12, 11.8], [1.60223664E12, 12.3], [1.602237E12, 5.083333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6022367E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602237E12, "title": "Total Transactions Per Second"}},
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

