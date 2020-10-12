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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 5679.0, "series": [{"data": [[0.0, 174.0], [0.1, 186.0], [0.2, 188.0], [0.3, 190.0], [0.4, 190.0], [0.5, 191.0], [0.6, 193.0], [0.7, 194.0], [0.8, 194.0], [0.9, 195.0], [1.0, 195.0], [1.1, 197.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 201.0], [1.6, 202.0], [1.7, 203.0], [1.8, 203.0], [1.9, 204.0], [2.0, 204.0], [2.1, 205.0], [2.2, 206.0], [2.3, 207.0], [2.4, 208.0], [2.5, 209.0], [2.6, 210.0], [2.7, 211.0], [2.8, 212.0], [2.9, 213.0], [3.0, 214.0], [3.1, 215.0], [3.2, 217.0], [3.3, 218.0], [3.4, 220.0], [3.5, 220.0], [3.6, 221.0], [3.7, 222.0], [3.8, 222.0], [3.9, 223.0], [4.0, 224.0], [4.1, 224.0], [4.2, 225.0], [4.3, 225.0], [4.4, 226.0], [4.5, 226.0], [4.6, 227.0], [4.7, 228.0], [4.8, 228.0], [4.9, 229.0], [5.0, 230.0], [5.1, 231.0], [5.2, 232.0], [5.3, 234.0], [5.4, 234.0], [5.5, 235.0], [5.6, 235.0], [5.7, 236.0], [5.8, 238.0], [5.9, 239.0], [6.0, 240.0], [6.1, 240.0], [6.2, 242.0], [6.3, 243.0], [6.4, 244.0], [6.5, 246.0], [6.6, 247.0], [6.7, 248.0], [6.8, 249.0], [6.9, 250.0], [7.0, 251.0], [7.1, 253.0], [7.2, 254.0], [7.3, 255.0], [7.4, 256.0], [7.5, 258.0], [7.6, 259.0], [7.7, 261.0], [7.8, 262.0], [7.9, 263.0], [8.0, 265.0], [8.1, 265.0], [8.2, 266.0], [8.3, 266.0], [8.4, 267.0], [8.5, 269.0], [8.6, 270.0], [8.7, 271.0], [8.8, 272.0], [8.9, 273.0], [9.0, 273.0], [9.1, 274.0], [9.2, 275.0], [9.3, 276.0], [9.4, 277.0], [9.5, 277.0], [9.6, 278.0], [9.7, 279.0], [9.8, 279.0], [9.9, 280.0], [10.0, 281.0], [10.1, 282.0], [10.2, 282.0], [10.3, 283.0], [10.4, 283.0], [10.5, 285.0], [10.6, 285.0], [10.7, 286.0], [10.8, 287.0], [10.9, 287.0], [11.0, 288.0], [11.1, 289.0], [11.2, 290.0], [11.3, 291.0], [11.4, 292.0], [11.5, 293.0], [11.6, 295.0], [11.7, 296.0], [11.8, 297.0], [11.9, 298.0], [12.0, 299.0], [12.1, 300.0], [12.2, 301.0], [12.3, 302.0], [12.4, 303.0], [12.5, 305.0], [12.6, 306.0], [12.7, 306.0], [12.8, 307.0], [12.9, 308.0], [13.0, 309.0], [13.1, 310.0], [13.2, 312.0], [13.3, 313.0], [13.4, 314.0], [13.5, 316.0], [13.6, 317.0], [13.7, 318.0], [13.8, 319.0], [13.9, 320.0], [14.0, 321.0], [14.1, 323.0], [14.2, 324.0], [14.3, 325.0], [14.4, 325.0], [14.5, 326.0], [14.6, 327.0], [14.7, 327.0], [14.8, 329.0], [14.9, 331.0], [15.0, 332.0], [15.1, 334.0], [15.2, 336.0], [15.3, 339.0], [15.4, 341.0], [15.5, 344.0], [15.6, 346.0], [15.7, 348.0], [15.8, 351.0], [15.9, 352.0], [16.0, 353.0], [16.1, 355.0], [16.2, 357.0], [16.3, 362.0], [16.4, 365.0], [16.5, 367.0], [16.6, 368.0], [16.7, 369.0], [16.8, 370.0], [16.9, 371.0], [17.0, 373.0], [17.1, 374.0], [17.2, 375.0], [17.3, 376.0], [17.4, 377.0], [17.5, 377.0], [17.6, 378.0], [17.7, 379.0], [17.8, 380.0], [17.9, 382.0], [18.0, 383.0], [18.1, 384.0], [18.2, 385.0], [18.3, 385.0], [18.4, 387.0], [18.5, 388.0], [18.6, 389.0], [18.7, 390.0], [18.8, 391.0], [18.9, 391.0], [19.0, 392.0], [19.1, 393.0], [19.2, 393.0], [19.3, 394.0], [19.4, 395.0], [19.5, 396.0], [19.6, 396.0], [19.7, 398.0], [19.8, 398.0], [19.9, 398.0], [20.0, 399.0], [20.1, 400.0], [20.2, 400.0], [20.3, 401.0], [20.4, 402.0], [20.5, 403.0], [20.6, 404.0], [20.7, 405.0], [20.8, 405.0], [20.9, 406.0], [21.0, 407.0], [21.1, 408.0], [21.2, 408.0], [21.3, 409.0], [21.4, 409.0], [21.5, 410.0], [21.6, 411.0], [21.7, 412.0], [21.8, 413.0], [21.9, 413.0], [22.0, 414.0], [22.1, 415.0], [22.2, 415.0], [22.3, 416.0], [22.4, 417.0], [22.5, 419.0], [22.6, 419.0], [22.7, 420.0], [22.8, 421.0], [22.9, 422.0], [23.0, 422.0], [23.1, 423.0], [23.2, 424.0], [23.3, 425.0], [23.4, 425.0], [23.5, 426.0], [23.6, 427.0], [23.7, 428.0], [23.8, 429.0], [23.9, 430.0], [24.0, 430.0], [24.1, 431.0], [24.2, 431.0], [24.3, 432.0], [24.4, 433.0], [24.5, 434.0], [24.6, 434.0], [24.7, 435.0], [24.8, 436.0], [24.9, 437.0], [25.0, 437.0], [25.1, 438.0], [25.2, 438.0], [25.3, 439.0], [25.4, 440.0], [25.5, 440.0], [25.6, 442.0], [25.7, 442.0], [25.8, 443.0], [25.9, 443.0], [26.0, 444.0], [26.1, 444.0], [26.2, 445.0], [26.3, 446.0], [26.4, 446.0], [26.5, 447.0], [26.6, 448.0], [26.7, 449.0], [26.8, 449.0], [26.9, 450.0], [27.0, 450.0], [27.1, 452.0], [27.2, 453.0], [27.3, 453.0], [27.4, 454.0], [27.5, 455.0], [27.6, 456.0], [27.7, 457.0], [27.8, 459.0], [27.9, 460.0], [28.0, 461.0], [28.1, 462.0], [28.2, 463.0], [28.3, 464.0], [28.4, 465.0], [28.5, 466.0], [28.6, 467.0], [28.7, 468.0], [28.8, 469.0], [28.9, 470.0], [29.0, 471.0], [29.1, 472.0], [29.2, 473.0], [29.3, 474.0], [29.4, 476.0], [29.5, 477.0], [29.6, 478.0], [29.7, 478.0], [29.8, 479.0], [29.9, 480.0], [30.0, 480.0], [30.1, 481.0], [30.2, 482.0], [30.3, 483.0], [30.4, 484.0], [30.5, 485.0], [30.6, 487.0], [30.7, 488.0], [30.8, 490.0], [30.9, 490.0], [31.0, 491.0], [31.1, 492.0], [31.2, 494.0], [31.3, 494.0], [31.4, 496.0], [31.5, 497.0], [31.6, 498.0], [31.7, 499.0], [31.8, 501.0], [31.9, 502.0], [32.0, 503.0], [32.1, 504.0], [32.2, 505.0], [32.3, 505.0], [32.4, 506.0], [32.5, 506.0], [32.6, 507.0], [32.7, 509.0], [32.8, 511.0], [32.9, 512.0], [33.0, 513.0], [33.1, 513.0], [33.2, 514.0], [33.3, 516.0], [33.4, 517.0], [33.5, 519.0], [33.6, 520.0], [33.7, 521.0], [33.8, 522.0], [33.9, 523.0], [34.0, 524.0], [34.1, 525.0], [34.2, 526.0], [34.3, 527.0], [34.4, 527.0], [34.5, 528.0], [34.6, 529.0], [34.7, 529.0], [34.8, 530.0], [34.9, 531.0], [35.0, 532.0], [35.1, 532.0], [35.2, 533.0], [35.3, 535.0], [35.4, 535.0], [35.5, 536.0], [35.6, 537.0], [35.7, 538.0], [35.8, 539.0], [35.9, 540.0], [36.0, 541.0], [36.1, 542.0], [36.2, 543.0], [36.3, 543.0], [36.4, 544.0], [36.5, 545.0], [36.6, 546.0], [36.7, 547.0], [36.8, 548.0], [36.9, 548.0], [37.0, 549.0], [37.1, 550.0], [37.2, 550.0], [37.3, 551.0], [37.4, 551.0], [37.5, 552.0], [37.6, 552.0], [37.7, 553.0], [37.8, 553.0], [37.9, 554.0], [38.0, 554.0], [38.1, 555.0], [38.2, 556.0], [38.3, 557.0], [38.4, 557.0], [38.5, 559.0], [38.6, 560.0], [38.7, 561.0], [38.8, 561.0], [38.9, 562.0], [39.0, 563.0], [39.1, 564.0], [39.2, 564.0], [39.3, 565.0], [39.4, 567.0], [39.5, 568.0], [39.6, 570.0], [39.7, 571.0], [39.8, 572.0], [39.9, 572.0], [40.0, 573.0], [40.1, 574.0], [40.2, 575.0], [40.3, 576.0], [40.4, 577.0], [40.5, 578.0], [40.6, 579.0], [40.7, 580.0], [40.8, 581.0], [40.9, 583.0], [41.0, 584.0], [41.1, 585.0], [41.2, 585.0], [41.3, 585.0], [41.4, 586.0], [41.5, 586.0], [41.6, 588.0], [41.7, 588.0], [41.8, 589.0], [41.9, 591.0], [42.0, 592.0], [42.1, 592.0], [42.2, 593.0], [42.3, 595.0], [42.4, 596.0], [42.5, 597.0], [42.6, 598.0], [42.7, 599.0], [42.8, 600.0], [42.9, 600.0], [43.0, 601.0], [43.1, 602.0], [43.2, 604.0], [43.3, 606.0], [43.4, 606.0], [43.5, 609.0], [43.6, 609.0], [43.7, 610.0], [43.8, 611.0], [43.9, 613.0], [44.0, 614.0], [44.1, 616.0], [44.2, 617.0], [44.3, 619.0], [44.4, 620.0], [44.5, 622.0], [44.6, 623.0], [44.7, 624.0], [44.8, 626.0], [44.9, 627.0], [45.0, 628.0], [45.1, 629.0], [45.2, 630.0], [45.3, 631.0], [45.4, 632.0], [45.5, 633.0], [45.6, 634.0], [45.7, 634.0], [45.8, 636.0], [45.9, 637.0], [46.0, 638.0], [46.1, 639.0], [46.2, 641.0], [46.3, 642.0], [46.4, 646.0], [46.5, 648.0], [46.6, 649.0], [46.7, 650.0], [46.8, 651.0], [46.9, 652.0], [47.0, 654.0], [47.1, 656.0], [47.2, 658.0], [47.3, 659.0], [47.4, 660.0], [47.5, 661.0], [47.6, 662.0], [47.7, 663.0], [47.8, 664.0], [47.9, 667.0], [48.0, 668.0], [48.1, 669.0], [48.2, 670.0], [48.3, 672.0], [48.4, 673.0], [48.5, 676.0], [48.6, 678.0], [48.7, 679.0], [48.8, 679.0], [48.9, 681.0], [49.0, 682.0], [49.1, 684.0], [49.2, 685.0], [49.3, 687.0], [49.4, 688.0], [49.5, 690.0], [49.6, 691.0], [49.7, 693.0], [49.8, 694.0], [49.9, 696.0], [50.0, 697.0], [50.1, 698.0], [50.2, 700.0], [50.3, 701.0], [50.4, 703.0], [50.5, 704.0], [50.6, 706.0], [50.7, 707.0], [50.8, 709.0], [50.9, 711.0], [51.0, 712.0], [51.1, 714.0], [51.2, 715.0], [51.3, 716.0], [51.4, 717.0], [51.5, 718.0], [51.6, 719.0], [51.7, 721.0], [51.8, 723.0], [51.9, 724.0], [52.0, 725.0], [52.1, 727.0], [52.2, 728.0], [52.3, 729.0], [52.4, 732.0], [52.5, 733.0], [52.6, 736.0], [52.7, 737.0], [52.8, 740.0], [52.9, 741.0], [53.0, 742.0], [53.1, 745.0], [53.2, 746.0], [53.3, 748.0], [53.4, 750.0], [53.5, 752.0], [53.6, 753.0], [53.7, 755.0], [53.8, 756.0], [53.9, 759.0], [54.0, 761.0], [54.1, 762.0], [54.2, 765.0], [54.3, 768.0], [54.4, 769.0], [54.5, 770.0], [54.6, 770.0], [54.7, 772.0], [54.8, 773.0], [54.9, 774.0], [55.0, 776.0], [55.1, 778.0], [55.2, 780.0], [55.3, 782.0], [55.4, 782.0], [55.5, 784.0], [55.6, 786.0], [55.7, 787.0], [55.8, 790.0], [55.9, 791.0], [56.0, 793.0], [56.1, 794.0], [56.2, 795.0], [56.3, 797.0], [56.4, 799.0], [56.5, 804.0], [56.6, 805.0], [56.7, 807.0], [56.8, 809.0], [56.9, 810.0], [57.0, 811.0], [57.1, 812.0], [57.2, 814.0], [57.3, 815.0], [57.4, 817.0], [57.5, 818.0], [57.6, 821.0], [57.7, 822.0], [57.8, 824.0], [57.9, 828.0], [58.0, 829.0], [58.1, 830.0], [58.2, 832.0], [58.3, 832.0], [58.4, 834.0], [58.5, 835.0], [58.6, 837.0], [58.7, 837.0], [58.8, 838.0], [58.9, 840.0], [59.0, 840.0], [59.1, 842.0], [59.2, 843.0], [59.3, 845.0], [59.4, 847.0], [59.5, 848.0], [59.6, 850.0], [59.7, 851.0], [59.8, 853.0], [59.9, 855.0], [60.0, 856.0], [60.1, 857.0], [60.2, 859.0], [60.3, 860.0], [60.4, 862.0], [60.5, 864.0], [60.6, 865.0], [60.7, 866.0], [60.8, 868.0], [60.9, 870.0], [61.0, 872.0], [61.1, 874.0], [61.2, 874.0], [61.3, 875.0], [61.4, 876.0], [61.5, 877.0], [61.6, 879.0], [61.7, 881.0], [61.8, 882.0], [61.9, 885.0], [62.0, 887.0], [62.1, 889.0], [62.2, 890.0], [62.3, 891.0], [62.4, 891.0], [62.5, 893.0], [62.6, 896.0], [62.7, 896.0], [62.8, 898.0], [62.9, 902.0], [63.0, 903.0], [63.1, 904.0], [63.2, 907.0], [63.3, 909.0], [63.4, 910.0], [63.5, 911.0], [63.6, 913.0], [63.7, 914.0], [63.8, 915.0], [63.9, 916.0], [64.0, 917.0], [64.1, 921.0], [64.2, 924.0], [64.3, 925.0], [64.4, 926.0], [64.5, 927.0], [64.6, 929.0], [64.7, 935.0], [64.8, 936.0], [64.9, 937.0], [65.0, 938.0], [65.1, 939.0], [65.2, 941.0], [65.3, 941.0], [65.4, 943.0], [65.5, 946.0], [65.6, 948.0], [65.7, 951.0], [65.8, 954.0], [65.9, 956.0], [66.0, 959.0], [66.1, 962.0], [66.2, 963.0], [66.3, 964.0], [66.4, 965.0], [66.5, 968.0], [66.6, 969.0], [66.7, 971.0], [66.8, 972.0], [66.9, 973.0], [67.0, 975.0], [67.1, 977.0], [67.2, 978.0], [67.3, 980.0], [67.4, 984.0], [67.5, 986.0], [67.6, 988.0], [67.7, 989.0], [67.8, 991.0], [67.9, 993.0], [68.0, 996.0], [68.1, 997.0], [68.2, 997.0], [68.3, 999.0], [68.4, 1000.0], [68.5, 1002.0], [68.6, 1005.0], [68.7, 1007.0], [68.8, 1010.0], [68.9, 1011.0], [69.0, 1013.0], [69.1, 1016.0], [69.2, 1018.0], [69.3, 1020.0], [69.4, 1021.0], [69.5, 1022.0], [69.6, 1025.0], [69.7, 1027.0], [69.8, 1029.0], [69.9, 1031.0], [70.0, 1033.0], [70.1, 1034.0], [70.2, 1036.0], [70.3, 1037.0], [70.4, 1042.0], [70.5, 1043.0], [70.6, 1047.0], [70.7, 1048.0], [70.8, 1049.0], [70.9, 1051.0], [71.0, 1053.0], [71.1, 1055.0], [71.2, 1057.0], [71.3, 1059.0], [71.4, 1060.0], [71.5, 1061.0], [71.6, 1064.0], [71.7, 1066.0], [71.8, 1066.0], [71.9, 1068.0], [72.0, 1071.0], [72.1, 1072.0], [72.2, 1073.0], [72.3, 1076.0], [72.4, 1078.0], [72.5, 1080.0], [72.6, 1082.0], [72.7, 1084.0], [72.8, 1087.0], [72.9, 1090.0], [73.0, 1091.0], [73.1, 1093.0], [73.2, 1094.0], [73.3, 1096.0], [73.4, 1097.0], [73.5, 1099.0], [73.6, 1100.0], [73.7, 1102.0], [73.8, 1106.0], [73.9, 1108.0], [74.0, 1109.0], [74.1, 1113.0], [74.2, 1114.0], [74.3, 1116.0], [74.4, 1118.0], [74.5, 1121.0], [74.6, 1122.0], [74.7, 1124.0], [74.8, 1127.0], [74.9, 1129.0], [75.0, 1131.0], [75.1, 1133.0], [75.2, 1134.0], [75.3, 1136.0], [75.4, 1141.0], [75.5, 1143.0], [75.6, 1145.0], [75.7, 1145.0], [75.8, 1147.0], [75.9, 1148.0], [76.0, 1150.0], [76.1, 1152.0], [76.2, 1154.0], [76.3, 1157.0], [76.4, 1160.0], [76.5, 1161.0], [76.6, 1163.0], [76.7, 1164.0], [76.8, 1166.0], [76.9, 1170.0], [77.0, 1172.0], [77.1, 1175.0], [77.2, 1176.0], [77.3, 1178.0], [77.4, 1181.0], [77.5, 1184.0], [77.6, 1186.0], [77.7, 1188.0], [77.8, 1190.0], [77.9, 1192.0], [78.0, 1195.0], [78.1, 1198.0], [78.2, 1200.0], [78.3, 1202.0], [78.4, 1203.0], [78.5, 1207.0], [78.6, 1209.0], [78.7, 1212.0], [78.8, 1215.0], [78.9, 1217.0], [79.0, 1221.0], [79.1, 1224.0], [79.2, 1226.0], [79.3, 1228.0], [79.4, 1233.0], [79.5, 1236.0], [79.6, 1239.0], [79.7, 1242.0], [79.8, 1244.0], [79.9, 1246.0], [80.0, 1249.0], [80.1, 1252.0], [80.2, 1256.0], [80.3, 1259.0], [80.4, 1261.0], [80.5, 1264.0], [80.6, 1268.0], [80.7, 1269.0], [80.8, 1272.0], [80.9, 1274.0], [81.0, 1277.0], [81.1, 1280.0], [81.2, 1284.0], [81.3, 1286.0], [81.4, 1290.0], [81.5, 1291.0], [81.6, 1294.0], [81.7, 1296.0], [81.8, 1299.0], [81.9, 1300.0], [82.0, 1301.0], [82.1, 1304.0], [82.2, 1307.0], [82.3, 1311.0], [82.4, 1315.0], [82.5, 1319.0], [82.6, 1320.0], [82.7, 1322.0], [82.8, 1325.0], [82.9, 1326.0], [83.0, 1329.0], [83.1, 1331.0], [83.2, 1336.0], [83.3, 1338.0], [83.4, 1339.0], [83.5, 1343.0], [83.6, 1348.0], [83.7, 1351.0], [83.8, 1353.0], [83.9, 1356.0], [84.0, 1358.0], [84.1, 1361.0], [84.2, 1362.0], [84.3, 1364.0], [84.4, 1366.0], [84.5, 1369.0], [84.6, 1372.0], [84.7, 1374.0], [84.8, 1377.0], [84.9, 1380.0], [85.0, 1381.0], [85.1, 1382.0], [85.2, 1385.0], [85.3, 1388.0], [85.4, 1391.0], [85.5, 1394.0], [85.6, 1399.0], [85.7, 1402.0], [85.8, 1405.0], [85.9, 1407.0], [86.0, 1408.0], [86.1, 1410.0], [86.2, 1411.0], [86.3, 1412.0], [86.4, 1415.0], [86.5, 1418.0], [86.6, 1420.0], [86.7, 1424.0], [86.8, 1427.0], [86.9, 1434.0], [87.0, 1436.0], [87.1, 1438.0], [87.2, 1441.0], [87.3, 1445.0], [87.4, 1450.0], [87.5, 1453.0], [87.6, 1454.0], [87.7, 1456.0], [87.8, 1460.0], [87.9, 1464.0], [88.0, 1468.0], [88.1, 1470.0], [88.2, 1471.0], [88.3, 1473.0], [88.4, 1476.0], [88.5, 1483.0], [88.6, 1487.0], [88.7, 1494.0], [88.8, 1498.0], [88.9, 1499.0], [89.0, 1505.0], [89.1, 1509.0], [89.2, 1516.0], [89.3, 1528.0], [89.4, 1534.0], [89.5, 1540.0], [89.6, 1543.0], [89.7, 1549.0], [89.8, 1553.0], [89.9, 1556.0], [90.0, 1571.0], [90.1, 1578.0], [90.2, 1582.0], [90.3, 1584.0], [90.4, 1587.0], [90.5, 1591.0], [90.6, 1597.0], [90.7, 1603.0], [90.8, 1608.0], [90.9, 1616.0], [91.0, 1620.0], [91.1, 1633.0], [91.2, 1638.0], [91.3, 1641.0], [91.4, 1644.0], [91.5, 1648.0], [91.6, 1654.0], [91.7, 1661.0], [91.8, 1672.0], [91.9, 1675.0], [92.0, 1681.0], [92.1, 1686.0], [92.2, 1693.0], [92.3, 1699.0], [92.4, 1704.0], [92.5, 1712.0], [92.6, 1716.0], [92.7, 1732.0], [92.8, 1737.0], [92.9, 1744.0], [93.0, 1758.0], [93.1, 1764.0], [93.2, 1779.0], [93.3, 1787.0], [93.4, 1799.0], [93.5, 1812.0], [93.6, 1820.0], [93.7, 1829.0], [93.8, 1839.0], [93.9, 1852.0], [94.0, 1867.0], [94.1, 1872.0], [94.2, 1881.0], [94.3, 1887.0], [94.4, 1901.0], [94.5, 1916.0], [94.6, 1931.0], [94.7, 1948.0], [94.8, 1959.0], [94.9, 1977.0], [95.0, 1982.0], [95.1, 1989.0], [95.2, 2004.0], [95.3, 2017.0], [95.4, 2034.0], [95.5, 2052.0], [95.6, 2057.0], [95.7, 2081.0], [95.8, 2086.0], [95.9, 2096.0], [96.0, 2111.0], [96.1, 2121.0], [96.2, 2135.0], [96.3, 2144.0], [96.4, 2157.0], [96.5, 2167.0], [96.6, 2171.0], [96.7, 2188.0], [96.8, 2203.0], [96.9, 2217.0], [97.0, 2224.0], [97.1, 2243.0], [97.2, 2256.0], [97.3, 2268.0], [97.4, 2284.0], [97.5, 2311.0], [97.6, 2329.0], [97.7, 2352.0], [97.8, 2370.0], [97.9, 2402.0], [98.0, 2412.0], [98.1, 2451.0], [98.2, 2483.0], [98.3, 2512.0], [98.4, 2567.0], [98.5, 2600.0], [98.6, 2691.0], [98.7, 2760.0], [98.8, 2787.0], [98.9, 2843.0], [99.0, 2893.0], [99.1, 2984.0], [99.2, 3091.0], [99.3, 3146.0], [99.4, 3411.0], [99.5, 3530.0], [99.6, 3699.0], [99.7, 4247.0], [99.8, 4538.0], [99.9, 5072.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 605.0, "series": [{"data": [[600.0, 385.0], [700.0, 325.0], [800.0, 330.0], [900.0, 286.0], [1000.0, 270.0], [1100.0, 242.0], [1200.0, 189.0], [1300.0, 196.0], [1400.0, 171.0], [1500.0, 91.0], [1600.0, 89.0], [1700.0, 54.0], [1800.0, 50.0], [1900.0, 39.0], [2000.0, 41.0], [2100.0, 44.0], [2300.0, 22.0], [2200.0, 36.0], [2400.0, 18.0], [2500.0, 14.0], [2600.0, 6.0], [2700.0, 11.0], [2800.0, 11.0], [2900.0, 6.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 3.0], [3400.0, 5.0], [3500.0, 6.0], [3600.0, 2.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4500.0, 2.0], [4400.0, 2.0], [4600.0, 1.0], [4800.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [100.0, 68.0], [200.0, 559.0], [300.0, 415.0], [400.0, 605.0], [500.0, 573.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 576.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2966.0, "series": [{"data": [[0.0, 1648.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2966.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 576.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.893867924528301, "minX": 1.60246032E12, "maxY": 10.0, "series": [{"data": [[1.60246038E12, 10.0], [1.60246068E12, 10.0], [1.6024605E12, 10.0], [1.60246032E12, 10.0], [1.60246062E12, 10.0], [1.60246044E12, 10.0], [1.60246074E12, 9.893867924528301], [1.60246056E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246074E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 324.0, "minX": 1.0, "maxY": 2782.0, "series": [{"data": [[8.0, 1207.0], [4.0, 1117.0], [2.0, 2782.0], [1.0, 2505.0], [9.0, 1824.0], [10.0, 856.2887473460726], [5.0, 1661.0], [6.0, 337.0], [3.0, 747.0], [7.0, 324.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 857.2131021194607]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3198.7166666666667, "minX": 1.60246032E12, "maxY": 3662269.466666667, "series": [{"data": [[1.60246038E12, 2916110.1333333333], [1.60246068E12, 3203494.933333333], [1.6024605E12, 3275287.316666667], [1.60246032E12, 2484653.95], [1.60246062E12, 3246390.8], [1.60246044E12, 3662269.466666667], [1.60246074E12, 1983584.4833333334], [1.60246056E12, 3201078.0833333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246038E12, 5312.5], [1.60246068E12, 6020.916666666667], [1.6024605E12, 5217.233333333334], [1.60246032E12, 3425.5], [1.60246062E12, 5270.316666666667], [1.60246044E12, 5422.333333333333], [1.60246074E12, 3198.7166666666667], [1.60246056E12, 4709.816666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246074E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 753.3501259445849, "minX": 1.60246032E12, "maxY": 974.3983228511522, "series": [{"data": [[1.60246038E12, 821.5623268698054], [1.60246068E12, 753.3501259445849], [1.6024605E12, 866.633333333333], [1.60246032E12, 974.3983228511522], [1.60246062E12, 845.3818181818182], [1.60246044E12, 840.3062937062936], [1.60246074E12, 928.0589622641506], [1.60246056E12, 912.8315467075029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246074E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 751.8866498740546, "minX": 1.60246032E12, "maxY": 972.0566037735849, "series": [{"data": [[1.60246038E12, 819.6578947368424], [1.60246068E12, 751.8866498740546], [1.6024605E12, 864.5246376811601], [1.60246032E12, 972.0566037735849], [1.60246062E12, 843.5790209790214], [1.60246044E12, 837.7958041958042], [1.60246074E12, 926.2382075471695], [1.60246056E12, 910.906584992343]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246074E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013853904282115881, "minX": 1.60246032E12, "maxY": 0.16771488469601661, "series": [{"data": [[1.60246038E12, 0.01662049861495844], [1.60246068E12, 0.013853904282115881], [1.6024605E12, 0.018840579710144908], [1.60246032E12, 0.16771488469601661], [1.60246062E12, 0.015384615384615387], [1.60246044E12, 0.016783216783216776], [1.60246074E12, 0.02594339622641511], [1.60246056E12, 0.03522205206738131]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246074E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.60246032E12, "maxY": 5679.0, "series": [{"data": [[1.60246038E12, 4530.0], [1.60246068E12, 2648.0], [1.6024605E12, 5260.0], [1.60246032E12, 5162.0], [1.60246062E12, 4247.0], [1.60246044E12, 2920.0], [1.60246074E12, 4012.0], [1.60246056E12, 5679.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246038E12, 202.0], [1.60246068E12, 189.15499981045724], [1.6024605E12, 201.21899983525276], [1.60246032E12, 204.60399977207183], [1.60246062E12, 197.8879996585846], [1.60246044E12, 193.8879996585846], [1.60246074E12, 192.4749996960163], [1.60246056E12, 193.88599984407426]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246038E12, 202.6308002758026], [1.60246068E12, 189.87050007581712], [1.6024605E12, 201.8409000658989], [1.60246032E12, 205.46440009117126], [1.60246062E12, 199.0], [1.60246044E12, 195.17680013656616], [1.60246074E12, 193.20750004053116], [1.60246056E12, 194.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246038E12, 202.0], [1.60246068E12, 189.55249990522861], [1.6024605E12, 201.5644999176264], [1.60246032E12, 205.08199988603593], [1.60246062E12, 198.6039998292923], [1.60246044E12, 194.6039998292923], [1.60246074E12, 193.03749994933605], [1.60246056E12, 194.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246038E12, 187.0], [1.60246068E12, 174.0], [1.6024605E12, 184.0], [1.60246032E12, 194.0], [1.60246062E12, 190.0], [1.60246044E12, 183.0], [1.60246074E12, 189.0], [1.60246056E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246038E12, 629.0], [1.60246068E12, 593.0], [1.6024605E12, 716.5], [1.60246032E12, 827.0], [1.60246062E12, 661.0], [1.60246044E12, 663.0], [1.60246074E12, 761.0], [1.60246056E12, 787.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 400.5, "minX": 2.0, "maxY": 2582.0, "series": [{"data": [[2.0, 2010.5], [3.0, 2582.0], [4.0, 1499.5], [5.0, 1339.0], [6.0, 1069.5], [7.0, 1087.5], [8.0, 1063.0], [9.0, 968.0], [10.0, 872.0], [11.0, 792.0], [12.0, 771.5], [13.0, 663.5], [14.0, 736.0], [15.0, 628.5], [16.0, 559.0], [17.0, 503.5], [18.0, 496.5], [19.0, 480.0], [20.0, 438.5], [21.0, 405.5], [22.0, 429.0], [23.0, 449.0], [24.0, 411.5], [25.0, 433.0], [26.0, 400.5], [27.0, 409.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 400.5, "minX": 2.0, "maxY": 2582.0, "series": [{"data": [[2.0, 2009.0], [3.0, 2582.0], [4.0, 1494.5], [5.0, 1338.0], [6.0, 1066.5], [7.0, 1085.5], [8.0, 1057.0], [9.0, 959.0], [10.0, 871.0], [11.0, 791.0], [12.0, 770.5], [13.0, 663.5], [14.0, 734.0], [15.0, 628.0], [16.0, 558.5], [17.0, 503.5], [18.0, 496.5], [19.0, 480.0], [20.0, 438.5], [21.0, 404.5], [22.0, 429.0], [23.0, 448.0], [24.0, 411.5], [25.0, 433.0], [26.0, 400.5], [27.0, 408.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.9, "minX": 1.60246032E12, "maxY": 13.233333333333333, "series": [{"data": [[1.60246038E12, 12.033333333333333], [1.60246068E12, 13.233333333333333], [1.6024605E12, 11.5], [1.60246032E12, 8.116666666666667], [1.60246062E12, 11.916666666666666], [1.60246044E12, 11.916666666666666], [1.60246074E12, 6.9], [1.60246056E12, 10.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.066666666666666, "minX": 1.60246032E12, "maxY": 13.233333333333333, "series": [{"data": [[1.60246038E12, 12.033333333333333], [1.60246068E12, 13.233333333333333], [1.6024605E12, 11.5], [1.60246032E12, 7.95], [1.60246062E12, 11.916666666666666], [1.60246044E12, 11.916666666666666], [1.60246074E12, 7.066666666666666], [1.60246056E12, 10.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246074E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.066666666666666, "minX": 1.60246032E12, "maxY": 13.233333333333333, "series": [{"data": [[1.60246038E12, 12.033333333333333], [1.60246068E12, 13.233333333333333], [1.6024605E12, 11.5], [1.60246032E12, 7.95], [1.60246062E12, 11.916666666666666], [1.60246044E12, 11.916666666666666], [1.60246074E12, 7.066666666666666], [1.60246056E12, 10.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246074E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.066666666666666, "minX": 1.60246032E12, "maxY": 13.233333333333333, "series": [{"data": [[1.60246038E12, 12.033333333333333], [1.60246068E12, 13.233333333333333], [1.6024605E12, 11.5], [1.60246032E12, 7.95], [1.60246062E12, 11.916666666666666], [1.60246044E12, 11.916666666666666], [1.60246074E12, 7.066666666666666], [1.60246056E12, 10.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246074E12, "title": "Total Transactions Per Second"}},
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

