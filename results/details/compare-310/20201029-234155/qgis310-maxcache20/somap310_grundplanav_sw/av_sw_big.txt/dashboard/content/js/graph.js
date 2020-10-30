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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 5533.0, "series": [{"data": [[0.0, 186.0], [0.1, 188.0], [0.2, 190.0], [0.3, 192.0], [0.4, 193.0], [0.5, 194.0], [0.6, 195.0], [0.7, 196.0], [0.8, 197.0], [0.9, 198.0], [1.0, 198.0], [1.1, 198.0], [1.2, 199.0], [1.3, 200.0], [1.4, 200.0], [1.5, 201.0], [1.6, 201.0], [1.7, 202.0], [1.8, 203.0], [1.9, 203.0], [2.0, 203.0], [2.1, 204.0], [2.2, 204.0], [2.3, 205.0], [2.4, 206.0], [2.5, 207.0], [2.6, 207.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 211.0], [3.2, 212.0], [3.3, 212.0], [3.4, 213.0], [3.5, 214.0], [3.6, 215.0], [3.7, 216.0], [3.8, 218.0], [3.9, 220.0], [4.0, 221.0], [4.1, 222.0], [4.2, 223.0], [4.3, 223.0], [4.4, 224.0], [4.5, 225.0], [4.6, 225.0], [4.7, 226.0], [4.8, 228.0], [4.9, 228.0], [5.0, 230.0], [5.1, 230.0], [5.2, 231.0], [5.3, 232.0], [5.4, 232.0], [5.5, 233.0], [5.6, 235.0], [5.7, 236.0], [5.8, 236.0], [5.9, 238.0], [6.0, 239.0], [6.1, 239.0], [6.2, 240.0], [6.3, 241.0], [6.4, 241.0], [6.5, 243.0], [6.6, 245.0], [6.7, 246.0], [6.8, 246.0], [6.9, 247.0], [7.0, 249.0], [7.1, 249.0], [7.2, 251.0], [7.3, 251.0], [7.4, 252.0], [7.5, 253.0], [7.6, 253.0], [7.7, 254.0], [7.8, 255.0], [7.9, 258.0], [8.0, 259.0], [8.1, 261.0], [8.2, 263.0], [8.3, 263.0], [8.4, 264.0], [8.5, 266.0], [8.6, 266.0], [8.7, 267.0], [8.8, 269.0], [8.9, 269.0], [9.0, 270.0], [9.1, 271.0], [9.2, 272.0], [9.3, 272.0], [9.4, 273.0], [9.5, 273.0], [9.6, 274.0], [9.7, 275.0], [9.8, 275.0], [9.9, 276.0], [10.0, 277.0], [10.1, 277.0], [10.2, 278.0], [10.3, 278.0], [10.4, 279.0], [10.5, 279.0], [10.6, 280.0], [10.7, 280.0], [10.8, 281.0], [10.9, 282.0], [11.0, 282.0], [11.1, 284.0], [11.2, 285.0], [11.3, 287.0], [11.4, 288.0], [11.5, 288.0], [11.6, 289.0], [11.7, 291.0], [11.8, 292.0], [11.9, 292.0], [12.0, 292.0], [12.1, 293.0], [12.2, 294.0], [12.3, 296.0], [12.4, 297.0], [12.5, 298.0], [12.6, 299.0], [12.7, 300.0], [12.8, 301.0], [12.9, 301.0], [13.0, 303.0], [13.1, 304.0], [13.2, 306.0], [13.3, 307.0], [13.4, 309.0], [13.5, 310.0], [13.6, 313.0], [13.7, 314.0], [13.8, 315.0], [13.9, 315.0], [14.0, 317.0], [14.1, 318.0], [14.2, 319.0], [14.3, 321.0], [14.4, 322.0], [14.5, 323.0], [14.6, 324.0], [14.7, 326.0], [14.8, 328.0], [14.9, 329.0], [15.0, 330.0], [15.1, 331.0], [15.2, 331.0], [15.3, 334.0], [15.4, 336.0], [15.5, 337.0], [15.6, 339.0], [15.7, 342.0], [15.8, 344.0], [15.9, 346.0], [16.0, 348.0], [16.1, 350.0], [16.2, 352.0], [16.3, 353.0], [16.4, 356.0], [16.5, 357.0], [16.6, 357.0], [16.7, 359.0], [16.8, 361.0], [16.9, 364.0], [17.0, 365.0], [17.1, 367.0], [17.2, 368.0], [17.3, 370.0], [17.4, 371.0], [17.5, 373.0], [17.6, 374.0], [17.7, 374.0], [17.8, 376.0], [17.9, 377.0], [18.0, 377.0], [18.1, 379.0], [18.2, 380.0], [18.3, 381.0], [18.4, 382.0], [18.5, 383.0], [18.6, 383.0], [18.7, 384.0], [18.8, 385.0], [18.9, 386.0], [19.0, 387.0], [19.1, 387.0], [19.2, 388.0], [19.3, 388.0], [19.4, 389.0], [19.5, 390.0], [19.6, 390.0], [19.7, 391.0], [19.8, 391.0], [19.9, 392.0], [20.0, 392.0], [20.1, 393.0], [20.2, 394.0], [20.3, 395.0], [20.4, 395.0], [20.5, 396.0], [20.6, 397.0], [20.7, 397.0], [20.8, 398.0], [20.9, 398.0], [21.0, 399.0], [21.1, 400.0], [21.2, 400.0], [21.3, 401.0], [21.4, 402.0], [21.5, 402.0], [21.6, 403.0], [21.7, 404.0], [21.8, 404.0], [21.9, 405.0], [22.0, 405.0], [22.1, 406.0], [22.2, 407.0], [22.3, 408.0], [22.4, 409.0], [22.5, 410.0], [22.6, 410.0], [22.7, 411.0], [22.8, 412.0], [22.9, 412.0], [23.0, 413.0], [23.1, 414.0], [23.2, 415.0], [23.3, 416.0], [23.4, 416.0], [23.5, 417.0], [23.6, 418.0], [23.7, 419.0], [23.8, 420.0], [23.9, 421.0], [24.0, 422.0], [24.1, 423.0], [24.2, 424.0], [24.3, 425.0], [24.4, 427.0], [24.5, 427.0], [24.6, 427.0], [24.7, 428.0], [24.8, 429.0], [24.9, 430.0], [25.0, 431.0], [25.1, 431.0], [25.2, 432.0], [25.3, 433.0], [25.4, 434.0], [25.5, 435.0], [25.6, 436.0], [25.7, 437.0], [25.8, 437.0], [25.9, 438.0], [26.0, 439.0], [26.1, 439.0], [26.2, 440.0], [26.3, 440.0], [26.4, 442.0], [26.5, 442.0], [26.6, 443.0], [26.7, 443.0], [26.8, 444.0], [26.9, 446.0], [27.0, 447.0], [27.1, 448.0], [27.2, 449.0], [27.3, 450.0], [27.4, 451.0], [27.5, 452.0], [27.6, 453.0], [27.7, 454.0], [27.8, 455.0], [27.9, 456.0], [28.0, 457.0], [28.1, 457.0], [28.2, 458.0], [28.3, 459.0], [28.4, 460.0], [28.5, 461.0], [28.6, 462.0], [28.7, 463.0], [28.8, 465.0], [28.9, 466.0], [29.0, 467.0], [29.1, 468.0], [29.2, 470.0], [29.3, 470.0], [29.4, 471.0], [29.5, 473.0], [29.6, 474.0], [29.7, 474.0], [29.8, 475.0], [29.9, 476.0], [30.0, 477.0], [30.1, 477.0], [30.2, 478.0], [30.3, 479.0], [30.4, 480.0], [30.5, 480.0], [30.6, 482.0], [30.7, 483.0], [30.8, 485.0], [30.9, 485.0], [31.0, 485.0], [31.1, 486.0], [31.2, 488.0], [31.3, 489.0], [31.4, 490.0], [31.5, 491.0], [31.6, 492.0], [31.7, 492.0], [31.8, 493.0], [31.9, 494.0], [32.0, 495.0], [32.1, 495.0], [32.2, 496.0], [32.3, 498.0], [32.4, 499.0], [32.5, 501.0], [32.6, 502.0], [32.7, 503.0], [32.8, 503.0], [32.9, 504.0], [33.0, 505.0], [33.1, 505.0], [33.2, 508.0], [33.3, 509.0], [33.4, 510.0], [33.5, 511.0], [33.6, 512.0], [33.7, 513.0], [33.8, 514.0], [33.9, 515.0], [34.0, 515.0], [34.1, 517.0], [34.2, 517.0], [34.3, 518.0], [34.4, 519.0], [34.5, 520.0], [34.6, 520.0], [34.7, 521.0], [34.8, 522.0], [34.9, 523.0], [35.0, 524.0], [35.1, 524.0], [35.2, 525.0], [35.3, 526.0], [35.4, 527.0], [35.5, 528.0], [35.6, 529.0], [35.7, 532.0], [35.8, 532.0], [35.9, 533.0], [36.0, 533.0], [36.1, 535.0], [36.2, 535.0], [36.3, 536.0], [36.4, 536.0], [36.5, 537.0], [36.6, 538.0], [36.7, 538.0], [36.8, 538.0], [36.9, 539.0], [37.0, 540.0], [37.1, 541.0], [37.2, 541.0], [37.3, 542.0], [37.4, 542.0], [37.5, 543.0], [37.6, 543.0], [37.7, 545.0], [37.8, 545.0], [37.9, 546.0], [38.0, 547.0], [38.1, 549.0], [38.2, 549.0], [38.3, 550.0], [38.4, 551.0], [38.5, 551.0], [38.6, 552.0], [38.7, 553.0], [38.8, 554.0], [38.9, 554.0], [39.0, 556.0], [39.1, 557.0], [39.2, 558.0], [39.3, 558.0], [39.4, 560.0], [39.5, 560.0], [39.6, 561.0], [39.7, 561.0], [39.8, 563.0], [39.9, 564.0], [40.0, 565.0], [40.1, 565.0], [40.2, 566.0], [40.3, 567.0], [40.4, 568.0], [40.5, 568.0], [40.6, 570.0], [40.7, 571.0], [40.8, 573.0], [40.9, 574.0], [41.0, 575.0], [41.1, 575.0], [41.2, 576.0], [41.3, 578.0], [41.4, 579.0], [41.5, 580.0], [41.6, 580.0], [41.7, 581.0], [41.8, 581.0], [41.9, 582.0], [42.0, 584.0], [42.1, 585.0], [42.2, 587.0], [42.3, 588.0], [42.4, 589.0], [42.5, 589.0], [42.6, 590.0], [42.7, 591.0], [42.8, 593.0], [42.9, 594.0], [43.0, 595.0], [43.1, 596.0], [43.2, 597.0], [43.3, 598.0], [43.4, 598.0], [43.5, 599.0], [43.6, 600.0], [43.7, 601.0], [43.8, 602.0], [43.9, 603.0], [44.0, 604.0], [44.1, 605.0], [44.2, 606.0], [44.3, 606.0], [44.4, 607.0], [44.5, 607.0], [44.6, 609.0], [44.7, 610.0], [44.8, 612.0], [44.9, 613.0], [45.0, 615.0], [45.1, 616.0], [45.2, 617.0], [45.3, 618.0], [45.4, 619.0], [45.5, 620.0], [45.6, 620.0], [45.7, 622.0], [45.8, 624.0], [45.9, 625.0], [46.0, 626.0], [46.1, 627.0], [46.2, 628.0], [46.3, 630.0], [46.4, 632.0], [46.5, 633.0], [46.6, 634.0], [46.7, 635.0], [46.8, 635.0], [46.9, 637.0], [47.0, 639.0], [47.1, 641.0], [47.2, 643.0], [47.3, 644.0], [47.4, 645.0], [47.5, 647.0], [47.6, 649.0], [47.7, 650.0], [47.8, 651.0], [47.9, 652.0], [48.0, 652.0], [48.1, 653.0], [48.2, 656.0], [48.3, 657.0], [48.4, 659.0], [48.5, 661.0], [48.6, 662.0], [48.7, 663.0], [48.8, 664.0], [48.9, 665.0], [49.0, 667.0], [49.1, 669.0], [49.2, 672.0], [49.3, 674.0], [49.4, 674.0], [49.5, 677.0], [49.6, 678.0], [49.7, 680.0], [49.8, 684.0], [49.9, 685.0], [50.0, 687.0], [50.1, 690.0], [50.2, 691.0], [50.3, 693.0], [50.4, 696.0], [50.5, 696.0], [50.6, 698.0], [50.7, 700.0], [50.8, 702.0], [50.9, 704.0], [51.0, 705.0], [51.1, 706.0], [51.2, 707.0], [51.3, 709.0], [51.4, 710.0], [51.5, 712.0], [51.6, 713.0], [51.7, 715.0], [51.8, 717.0], [51.9, 719.0], [52.0, 720.0], [52.1, 722.0], [52.2, 725.0], [52.3, 727.0], [52.4, 727.0], [52.5, 730.0], [52.6, 731.0], [52.7, 734.0], [52.8, 735.0], [52.9, 737.0], [53.0, 738.0], [53.1, 740.0], [53.2, 741.0], [53.3, 742.0], [53.4, 744.0], [53.5, 748.0], [53.6, 748.0], [53.7, 751.0], [53.8, 752.0], [53.9, 755.0], [54.0, 757.0], [54.1, 758.0], [54.2, 759.0], [54.3, 761.0], [54.4, 764.0], [54.5, 765.0], [54.6, 767.0], [54.7, 768.0], [54.8, 770.0], [54.9, 771.0], [55.0, 774.0], [55.1, 775.0], [55.2, 777.0], [55.3, 779.0], [55.4, 781.0], [55.5, 783.0], [55.6, 784.0], [55.7, 785.0], [55.8, 787.0], [55.9, 789.0], [56.0, 792.0], [56.1, 795.0], [56.2, 796.0], [56.3, 797.0], [56.4, 799.0], [56.5, 800.0], [56.6, 803.0], [56.7, 805.0], [56.8, 808.0], [56.9, 810.0], [57.0, 811.0], [57.1, 813.0], [57.2, 814.0], [57.3, 815.0], [57.4, 817.0], [57.5, 819.0], [57.6, 821.0], [57.7, 823.0], [57.8, 824.0], [57.9, 825.0], [58.0, 827.0], [58.1, 830.0], [58.2, 832.0], [58.3, 835.0], [58.4, 837.0], [58.5, 839.0], [58.6, 840.0], [58.7, 841.0], [58.8, 842.0], [58.9, 843.0], [59.0, 845.0], [59.1, 846.0], [59.2, 847.0], [59.3, 849.0], [59.4, 851.0], [59.5, 854.0], [59.6, 855.0], [59.7, 857.0], [59.8, 858.0], [59.9, 859.0], [60.0, 861.0], [60.1, 864.0], [60.2, 865.0], [60.3, 869.0], [60.4, 870.0], [60.5, 873.0], [60.6, 875.0], [60.7, 876.0], [60.8, 879.0], [60.9, 881.0], [61.0, 883.0], [61.1, 886.0], [61.2, 887.0], [61.3, 889.0], [61.4, 891.0], [61.5, 892.0], [61.6, 893.0], [61.7, 894.0], [61.8, 895.0], [61.9, 897.0], [62.0, 899.0], [62.1, 901.0], [62.2, 902.0], [62.3, 903.0], [62.4, 906.0], [62.5, 907.0], [62.6, 908.0], [62.7, 911.0], [62.8, 911.0], [62.9, 914.0], [63.0, 915.0], [63.1, 917.0], [63.2, 918.0], [63.3, 920.0], [63.4, 920.0], [63.5, 922.0], [63.6, 924.0], [63.7, 927.0], [63.8, 930.0], [63.9, 931.0], [64.0, 931.0], [64.1, 933.0], [64.2, 934.0], [64.3, 937.0], [64.4, 938.0], [64.5, 940.0], [64.6, 941.0], [64.7, 942.0], [64.8, 944.0], [64.9, 946.0], [65.0, 947.0], [65.1, 950.0], [65.2, 952.0], [65.3, 955.0], [65.4, 959.0], [65.5, 960.0], [65.6, 961.0], [65.7, 962.0], [65.8, 964.0], [65.9, 965.0], [66.0, 966.0], [66.1, 968.0], [66.2, 970.0], [66.3, 973.0], [66.4, 975.0], [66.5, 977.0], [66.6, 978.0], [66.7, 980.0], [66.8, 981.0], [66.9, 982.0], [67.0, 984.0], [67.1, 986.0], [67.2, 987.0], [67.3, 989.0], [67.4, 991.0], [67.5, 993.0], [67.6, 994.0], [67.7, 996.0], [67.8, 998.0], [67.9, 1001.0], [68.0, 1002.0], [68.1, 1003.0], [68.2, 1004.0], [68.3, 1006.0], [68.4, 1007.0], [68.5, 1008.0], [68.6, 1012.0], [68.7, 1013.0], [68.8, 1013.0], [68.9, 1014.0], [69.0, 1016.0], [69.1, 1017.0], [69.2, 1020.0], [69.3, 1022.0], [69.4, 1023.0], [69.5, 1025.0], [69.6, 1027.0], [69.7, 1029.0], [69.8, 1031.0], [69.9, 1035.0], [70.0, 1038.0], [70.1, 1042.0], [70.2, 1045.0], [70.3, 1045.0], [70.4, 1046.0], [70.5, 1047.0], [70.6, 1049.0], [70.7, 1050.0], [70.8, 1052.0], [70.9, 1054.0], [71.0, 1054.0], [71.1, 1056.0], [71.2, 1058.0], [71.3, 1060.0], [71.4, 1061.0], [71.5, 1063.0], [71.6, 1066.0], [71.7, 1067.0], [71.8, 1069.0], [71.9, 1072.0], [72.0, 1074.0], [72.1, 1075.0], [72.2, 1077.0], [72.3, 1078.0], [72.4, 1079.0], [72.5, 1081.0], [72.6, 1082.0], [72.7, 1084.0], [72.8, 1086.0], [72.9, 1089.0], [73.0, 1089.0], [73.1, 1091.0], [73.2, 1093.0], [73.3, 1094.0], [73.4, 1096.0], [73.5, 1097.0], [73.6, 1098.0], [73.7, 1100.0], [73.8, 1102.0], [73.9, 1104.0], [74.0, 1106.0], [74.1, 1107.0], [74.2, 1107.0], [74.3, 1110.0], [74.4, 1111.0], [74.5, 1114.0], [74.6, 1117.0], [74.7, 1119.0], [74.8, 1121.0], [74.9, 1123.0], [75.0, 1125.0], [75.1, 1126.0], [75.2, 1129.0], [75.3, 1131.0], [75.4, 1136.0], [75.5, 1138.0], [75.6, 1140.0], [75.7, 1142.0], [75.8, 1146.0], [75.9, 1149.0], [76.0, 1150.0], [76.1, 1151.0], [76.2, 1153.0], [76.3, 1154.0], [76.4, 1158.0], [76.5, 1160.0], [76.6, 1163.0], [76.7, 1165.0], [76.8, 1166.0], [76.9, 1172.0], [77.0, 1175.0], [77.1, 1177.0], [77.2, 1179.0], [77.3, 1183.0], [77.4, 1185.0], [77.5, 1186.0], [77.6, 1189.0], [77.7, 1193.0], [77.8, 1195.0], [77.9, 1201.0], [78.0, 1202.0], [78.1, 1204.0], [78.2, 1206.0], [78.3, 1210.0], [78.4, 1210.0], [78.5, 1212.0], [78.6, 1213.0], [78.7, 1214.0], [78.8, 1215.0], [78.9, 1216.0], [79.0, 1219.0], [79.1, 1220.0], [79.2, 1222.0], [79.3, 1224.0], [79.4, 1226.0], [79.5, 1229.0], [79.6, 1233.0], [79.7, 1235.0], [79.8, 1238.0], [79.9, 1241.0], [80.0, 1242.0], [80.1, 1244.0], [80.2, 1246.0], [80.3, 1248.0], [80.4, 1251.0], [80.5, 1252.0], [80.6, 1254.0], [80.7, 1256.0], [80.8, 1262.0], [80.9, 1263.0], [81.0, 1266.0], [81.1, 1267.0], [81.2, 1270.0], [81.3, 1272.0], [81.4, 1273.0], [81.5, 1274.0], [81.6, 1277.0], [81.7, 1280.0], [81.8, 1282.0], [81.9, 1283.0], [82.0, 1286.0], [82.1, 1288.0], [82.2, 1290.0], [82.3, 1293.0], [82.4, 1295.0], [82.5, 1297.0], [82.6, 1299.0], [82.7, 1301.0], [82.8, 1303.0], [82.9, 1305.0], [83.0, 1307.0], [83.1, 1308.0], [83.2, 1311.0], [83.3, 1314.0], [83.4, 1316.0], [83.5, 1318.0], [83.6, 1322.0], [83.7, 1325.0], [83.8, 1326.0], [83.9, 1328.0], [84.0, 1329.0], [84.1, 1331.0], [84.2, 1333.0], [84.3, 1335.0], [84.4, 1338.0], [84.5, 1341.0], [84.6, 1345.0], [84.7, 1348.0], [84.8, 1351.0], [84.9, 1353.0], [85.0, 1355.0], [85.1, 1356.0], [85.2, 1360.0], [85.3, 1364.0], [85.4, 1368.0], [85.5, 1372.0], [85.6, 1373.0], [85.7, 1375.0], [85.8, 1377.0], [85.9, 1382.0], [86.0, 1384.0], [86.1, 1385.0], [86.2, 1388.0], [86.3, 1390.0], [86.4, 1391.0], [86.5, 1394.0], [86.6, 1397.0], [86.7, 1398.0], [86.8, 1399.0], [86.9, 1400.0], [87.0, 1403.0], [87.1, 1407.0], [87.2, 1409.0], [87.3, 1412.0], [87.4, 1415.0], [87.5, 1416.0], [87.6, 1418.0], [87.7, 1421.0], [87.8, 1423.0], [87.9, 1428.0], [88.0, 1436.0], [88.1, 1436.0], [88.2, 1437.0], [88.3, 1442.0], [88.4, 1443.0], [88.5, 1450.0], [88.6, 1452.0], [88.7, 1455.0], [88.8, 1459.0], [88.9, 1463.0], [89.0, 1469.0], [89.1, 1473.0], [89.2, 1476.0], [89.3, 1484.0], [89.4, 1488.0], [89.5, 1493.0], [89.6, 1496.0], [89.7, 1503.0], [89.8, 1509.0], [89.9, 1515.0], [90.0, 1525.0], [90.1, 1529.0], [90.2, 1531.0], [90.3, 1538.0], [90.4, 1546.0], [90.5, 1553.0], [90.6, 1560.0], [90.7, 1564.0], [90.8, 1571.0], [90.9, 1575.0], [91.0, 1590.0], [91.1, 1597.0], [91.2, 1603.0], [91.3, 1610.0], [91.4, 1615.0], [91.5, 1621.0], [91.6, 1629.0], [91.7, 1636.0], [91.8, 1637.0], [91.9, 1641.0], [92.0, 1650.0], [92.1, 1657.0], [92.2, 1667.0], [92.3, 1676.0], [92.4, 1682.0], [92.5, 1689.0], [92.6, 1692.0], [92.7, 1701.0], [92.8, 1704.0], [92.9, 1708.0], [93.0, 1719.0], [93.1, 1732.0], [93.2, 1737.0], [93.3, 1747.0], [93.4, 1753.0], [93.5, 1757.0], [93.6, 1774.0], [93.7, 1781.0], [93.8, 1788.0], [93.9, 1798.0], [94.0, 1805.0], [94.1, 1810.0], [94.2, 1829.0], [94.3, 1839.0], [94.4, 1844.0], [94.5, 1850.0], [94.6, 1870.0], [94.7, 1874.0], [94.8, 1881.0], [94.9, 1892.0], [95.0, 1904.0], [95.1, 1914.0], [95.2, 1931.0], [95.3, 1941.0], [95.4, 1954.0], [95.5, 1968.0], [95.6, 1986.0], [95.7, 1995.0], [95.8, 2007.0], [95.9, 2019.0], [96.0, 2026.0], [96.1, 2037.0], [96.2, 2053.0], [96.3, 2065.0], [96.4, 2079.0], [96.5, 2088.0], [96.6, 2097.0], [96.7, 2116.0], [96.8, 2140.0], [96.9, 2162.0], [97.0, 2179.0], [97.1, 2189.0], [97.2, 2206.0], [97.3, 2238.0], [97.4, 2254.0], [97.5, 2278.0], [97.6, 2292.0], [97.7, 2306.0], [97.8, 2324.0], [97.9, 2357.0], [98.0, 2402.0], [98.1, 2437.0], [98.2, 2453.0], [98.3, 2472.0], [98.4, 2500.0], [98.5, 2608.0], [98.6, 2637.0], [98.7, 2680.0], [98.8, 2788.0], [98.9, 2843.0], [99.0, 3002.0], [99.1, 3036.0], [99.2, 3153.0], [99.3, 3248.0], [99.4, 3376.0], [99.5, 3573.0], [99.6, 3685.0], [99.7, 3945.0], [99.8, 4084.0], [99.9, 4700.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 591.0, "series": [{"data": [[600.0, 370.0], [700.0, 299.0], [800.0, 290.0], [900.0, 303.0], [1000.0, 301.0], [1100.0, 219.0], [1200.0, 246.0], [1300.0, 221.0], [1400.0, 144.0], [1500.0, 77.0], [100.0, 66.0], [1600.0, 79.0], [1700.0, 66.0], [1800.0, 53.0], [1900.0, 41.0], [2000.0, 45.0], [2100.0, 29.0], [2300.0, 20.0], [2200.0, 23.0], [2400.0, 20.0], [2500.0, 6.0], [2600.0, 11.0], [2800.0, 5.0], [2700.0, 7.0], [2900.0, 3.0], [3000.0, 8.0], [3100.0, 5.0], [200.0, 591.0], [3300.0, 6.0], [3200.0, 5.0], [3400.0, 1.0], [3500.0, 4.0], [3600.0, 3.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 4.0], [4200.0, 2.0], [4100.0, 1.0], [4400.0, 1.0], [300.0, 437.0], [4700.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [400.0, 588.0], [500.0, 578.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 536.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2968.0, "series": [{"data": [[0.0, 1686.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2968.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 536.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.891041162227602, "minX": 1.60401588E12, "maxY": 10.0, "series": [{"data": [[1.60401594E12, 10.0], [1.60401624E12, 10.0], [1.6040163E12, 9.891041162227602], [1.60401612E12, 10.0], [1.60401618E12, 10.0], [1.604016E12, 10.0], [1.60401606E12, 10.0], [1.60401588E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040163E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 2667.0, "series": [{"data": [[8.0, 1542.0], [4.0, 524.0], [2.0, 733.0], [1.0, 2667.0], [9.0, 740.0], [10.0, 846.4445087820884], [5.0, 699.0], [6.0, 607.0], [3.0, 596.0], [7.0, 580.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 846.6506743737957]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3113.8, "minX": 1.60401588E12, "maxY": 3804591.5833333335, "series": [{"data": [[1.60401594E12, 2995792.5166666666], [1.60401624E12, 3236807.55], [1.6040163E12, 1874052.25], [1.60401612E12, 3160516.033333333], [1.60401618E12, 3292123.683333333], [1.604016E12, 3804591.5833333335], [1.60401606E12, 3269299.95], [1.60401588E12, 2339961.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401594E12, 5460.366666666667], [1.60401624E12, 5820.783333333334], [1.6040163E12, 3113.8], [1.60401612E12, 4677.133333333333], [1.60401618E12, 5511.35], [1.604016E12, 5582.966666666666], [1.60401606E12, 5209.383333333333], [1.60401588E12, 3201.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040163E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 778.6610169491532, "minX": 1.60401588E12, "maxY": 966.096412556055, "series": [{"data": [[1.60401594E12, 800.994616419919], [1.60401624E12, 778.6610169491532], [1.6040163E12, 905.6319612590796], [1.60401612E12, 918.8058551617877], [1.60401618E12, 807.5127175368132], [1.604016E12, 817.1059782608696], [1.60401606E12, 864.924528301887], [1.60401588E12, 966.096412556055]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040163E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 776.9634941329845, "minX": 1.60401588E12, "maxY": 963.9215246636772, "series": [{"data": [[1.60401594E12, 799.2099596231494], [1.60401624E12, 776.9634941329845], [1.6040163E12, 903.8547215496359], [1.60401612E12, 916.9969183359007], [1.60401618E12, 805.7242302543514], [1.604016E12, 814.6983695652176], [1.60401606E12, 862.6908563134978], [1.60401588E12, 963.9215246636772]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040163E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.012048192771084326, "minX": 1.60401588E12, "maxY": 0.19506726457399104, "series": [{"data": [[1.60401594E12, 0.014804845222072682], [1.60401624E12, 0.018252933507170808], [1.6040163E12, 0.01937046004842615], [1.60401612E12, 0.01694915254237287], [1.60401618E12, 0.012048192771084326], [1.604016E12, 0.02038043478260872], [1.60401606E12, 0.013062409288824385], [1.60401588E12, 0.19506726457399104]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040163E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60401588E12, "maxY": 5533.0, "series": [{"data": [[1.60401594E12, 3975.0], [1.60401624E12, 3384.0], [1.6040163E12, 3283.0], [1.60401612E12, 5533.0], [1.60401618E12, 3109.0], [1.604016E12, 3031.0], [1.60401606E12, 4186.0], [1.60401588E12, 5149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401594E12, 200.39199964523314], [1.60401624E12, 196.91199981689454], [1.6040163E12, 189.45199980258943], [1.60401612E12, 208.69999969005585], [1.60401618E12, 194.0], [1.604016E12, 192.63299982428552], [1.60401606E12, 198.62999950647355], [1.60401588E12, 200.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401594E12, 201.36560007095338], [1.60401624E12, 197.6032000732422], [1.6040163E12, 190.19720007896424], [1.60401612E12, 209.43500006198883], [1.60401618E12, 194.40520007133483], [1.604016E12, 193.5926001405716], [1.60401606E12, 200.4930001974106], [1.60401588E12, 200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401594E12, 201.06799991130828], [1.60401624E12, 197.29599990844727], [1.6040163E12, 189.8659999012947], [1.60401612E12, 209.17499992251396], [1.60401618E12, 194.10599991083146], [1.604016E12, 193.0029998242855], [1.60401606E12, 199.66499975323677], [1.60401588E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401594E12, 192.0], [1.60401624E12, 188.0], [1.6040163E12, 186.0], [1.60401612E12, 200.0], [1.60401618E12, 186.0], [1.604016E12, 186.0], [1.60401606E12, 192.0], [1.60401588E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401594E12, 615.0], [1.60401624E12, 624.0], [1.6040163E12, 778.0], [1.60401612E12, 774.0], [1.60401618E12, 615.0], [1.604016E12, 623.5], [1.60401606E12, 666.0], [1.60401588E12, 819.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040163E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 396.0, "minX": 1.0, "maxY": 2652.0, "series": [{"data": [[2.0, 1508.0], [3.0, 1663.0], [4.0, 1326.5], [5.0, 911.0], [6.0, 1228.5], [7.0, 1031.5], [8.0, 1017.5], [9.0, 973.0], [10.0, 936.5], [11.0, 796.0], [12.0, 785.5], [13.0, 732.0], [14.0, 636.0], [15.0, 607.0], [1.0, 2652.0], [16.0, 560.0], [17.0, 555.0], [18.0, 465.5], [19.0, 446.0], [20.0, 443.0], [21.0, 402.5], [22.0, 424.0], [23.0, 429.0], [24.0, 405.0], [25.0, 416.0], [26.0, 427.0], [27.0, 396.0], [28.0, 401.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 396.0, "minX": 1.0, "maxY": 2644.0, "series": [{"data": [[2.0, 1504.5], [3.0, 1661.0], [4.0, 1317.0], [5.0, 911.0], [6.0, 1224.5], [7.0, 1028.0], [8.0, 1014.0], [9.0, 967.0], [10.0, 932.5], [11.0, 791.0], [12.0, 782.0], [13.0, 730.5], [14.0, 634.5], [15.0, 605.0], [1.0, 2644.0], [16.0, 560.0], [17.0, 552.5], [18.0, 465.0], [19.0, 446.0], [20.0, 443.0], [21.0, 402.0], [22.0, 423.5], [23.0, 429.0], [24.0, 405.0], [25.0, 416.0], [26.0, 427.0], [27.0, 396.0], [28.0, 400.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.716666666666667, "minX": 1.60401588E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60401594E12, 12.383333333333333], [1.60401624E12, 12.783333333333333], [1.6040163E12, 6.716666666666667], [1.60401612E12, 10.816666666666666], [1.60401618E12, 12.45], [1.604016E12, 12.266666666666667], [1.60401606E12, 11.483333333333333], [1.60401588E12, 7.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040163E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.883333333333334, "minX": 1.60401588E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60401594E12, 12.383333333333333], [1.60401624E12, 12.783333333333333], [1.6040163E12, 6.883333333333334], [1.60401612E12, 10.816666666666666], [1.60401618E12, 12.45], [1.604016E12, 12.266666666666667], [1.60401606E12, 11.483333333333333], [1.60401588E12, 7.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040163E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.883333333333334, "minX": 1.60401588E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60401594E12, 12.383333333333333], [1.60401624E12, 12.783333333333333], [1.6040163E12, 6.883333333333334], [1.60401612E12, 10.816666666666666], [1.60401618E12, 12.45], [1.604016E12, 12.266666666666667], [1.60401606E12, 11.483333333333333], [1.60401588E12, 7.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040163E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.883333333333334, "minX": 1.60401588E12, "maxY": 12.783333333333333, "series": [{"data": [[1.60401594E12, 12.383333333333333], [1.60401624E12, 12.783333333333333], [1.6040163E12, 6.883333333333334], [1.60401612E12, 10.816666666666666], [1.60401618E12, 12.45], [1.604016E12, 12.266666666666667], [1.60401606E12, 11.483333333333333], [1.60401588E12, 7.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040163E12, "title": "Total Transactions Per Second"}},
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

