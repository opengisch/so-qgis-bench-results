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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 5927.0, "series": [{"data": [[0.0, 182.0], [0.1, 184.0], [0.2, 187.0], [0.3, 188.0], [0.4, 189.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 194.0], [0.9, 194.0], [1.0, 195.0], [1.1, 196.0], [1.2, 196.0], [1.3, 196.0], [1.4, 197.0], [1.5, 198.0], [1.6, 199.0], [1.7, 199.0], [1.8, 199.0], [1.9, 200.0], [2.0, 200.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 203.0], [2.5, 204.0], [2.6, 204.0], [2.7, 205.0], [2.8, 206.0], [2.9, 206.0], [3.0, 207.0], [3.1, 208.0], [3.2, 209.0], [3.3, 210.0], [3.4, 211.0], [3.5, 213.0], [3.6, 214.0], [3.7, 215.0], [3.8, 216.0], [3.9, 216.0], [4.0, 217.0], [4.1, 218.0], [4.2, 219.0], [4.3, 219.0], [4.4, 220.0], [4.5, 221.0], [4.6, 222.0], [4.7, 222.0], [4.8, 223.0], [4.9, 223.0], [5.0, 224.0], [5.1, 224.0], [5.2, 225.0], [5.3, 226.0], [5.4, 227.0], [5.5, 228.0], [5.6, 229.0], [5.7, 230.0], [5.8, 231.0], [5.9, 233.0], [6.0, 233.0], [6.1, 233.0], [6.2, 234.0], [6.3, 235.0], [6.4, 236.0], [6.5, 236.0], [6.6, 237.0], [6.7, 238.0], [6.8, 239.0], [6.9, 240.0], [7.0, 240.0], [7.1, 242.0], [7.2, 243.0], [7.3, 244.0], [7.4, 247.0], [7.5, 248.0], [7.6, 250.0], [7.7, 251.0], [7.8, 252.0], [7.9, 253.0], [8.0, 254.0], [8.1, 255.0], [8.2, 256.0], [8.3, 258.0], [8.4, 259.0], [8.5, 261.0], [8.6, 262.0], [8.7, 263.0], [8.8, 265.0], [8.9, 266.0], [9.0, 267.0], [9.1, 268.0], [9.2, 270.0], [9.3, 270.0], [9.4, 271.0], [9.5, 272.0], [9.6, 273.0], [9.7, 273.0], [9.8, 274.0], [9.9, 275.0], [10.0, 276.0], [10.1, 277.0], [10.2, 277.0], [10.3, 279.0], [10.4, 279.0], [10.5, 280.0], [10.6, 281.0], [10.7, 282.0], [10.8, 283.0], [10.9, 283.0], [11.0, 284.0], [11.1, 286.0], [11.2, 286.0], [11.3, 287.0], [11.4, 288.0], [11.5, 289.0], [11.6, 290.0], [11.7, 292.0], [11.8, 293.0], [11.9, 294.0], [12.0, 296.0], [12.1, 299.0], [12.2, 300.0], [12.3, 302.0], [12.4, 303.0], [12.5, 304.0], [12.6, 305.0], [12.7, 306.0], [12.8, 307.0], [12.9, 308.0], [13.0, 309.0], [13.1, 311.0], [13.2, 311.0], [13.3, 314.0], [13.4, 315.0], [13.5, 316.0], [13.6, 317.0], [13.7, 318.0], [13.8, 319.0], [13.9, 320.0], [14.0, 321.0], [14.1, 323.0], [14.2, 325.0], [14.3, 326.0], [14.4, 326.0], [14.5, 327.0], [14.6, 329.0], [14.7, 331.0], [14.8, 332.0], [14.9, 334.0], [15.0, 335.0], [15.1, 336.0], [15.2, 336.0], [15.3, 338.0], [15.4, 339.0], [15.5, 340.0], [15.6, 342.0], [15.7, 344.0], [15.8, 347.0], [15.9, 348.0], [16.0, 351.0], [16.1, 353.0], [16.2, 354.0], [16.3, 355.0], [16.4, 356.0], [16.5, 357.0], [16.6, 360.0], [16.7, 362.0], [16.8, 364.0], [16.9, 367.0], [17.0, 370.0], [17.1, 372.0], [17.2, 374.0], [17.3, 377.0], [17.4, 378.0], [17.5, 380.0], [17.6, 381.0], [17.7, 383.0], [17.8, 384.0], [17.9, 385.0], [18.0, 387.0], [18.1, 387.0], [18.2, 388.0], [18.3, 390.0], [18.4, 391.0], [18.5, 392.0], [18.6, 394.0], [18.7, 396.0], [18.8, 396.0], [18.9, 398.0], [19.0, 399.0], [19.1, 400.0], [19.2, 401.0], [19.3, 402.0], [19.4, 403.0], [19.5, 405.0], [19.6, 406.0], [19.7, 407.0], [19.8, 408.0], [19.9, 410.0], [20.0, 412.0], [20.1, 412.0], [20.2, 413.0], [20.3, 414.0], [20.4, 415.0], [20.5, 416.0], [20.6, 417.0], [20.7, 418.0], [20.8, 419.0], [20.9, 420.0], [21.0, 421.0], [21.1, 422.0], [21.2, 423.0], [21.3, 424.0], [21.4, 425.0], [21.5, 425.0], [21.6, 427.0], [21.7, 428.0], [21.8, 428.0], [21.9, 429.0], [22.0, 430.0], [22.1, 430.0], [22.2, 432.0], [22.3, 433.0], [22.4, 433.0], [22.5, 435.0], [22.6, 436.0], [22.7, 437.0], [22.8, 437.0], [22.9, 439.0], [23.0, 440.0], [23.1, 442.0], [23.2, 443.0], [23.3, 444.0], [23.4, 444.0], [23.5, 445.0], [23.6, 447.0], [23.7, 447.0], [23.8, 448.0], [23.9, 448.0], [24.0, 449.0], [24.1, 450.0], [24.2, 450.0], [24.3, 451.0], [24.4, 452.0], [24.5, 454.0], [24.6, 454.0], [24.7, 455.0], [24.8, 456.0], [24.9, 457.0], [25.0, 457.0], [25.1, 458.0], [25.2, 459.0], [25.3, 459.0], [25.4, 460.0], [25.5, 461.0], [25.6, 461.0], [25.7, 462.0], [25.8, 463.0], [25.9, 463.0], [26.0, 464.0], [26.1, 464.0], [26.2, 466.0], [26.3, 466.0], [26.4, 467.0], [26.5, 468.0], [26.6, 469.0], [26.7, 470.0], [26.8, 471.0], [26.9, 472.0], [27.0, 473.0], [27.1, 474.0], [27.2, 475.0], [27.3, 476.0], [27.4, 478.0], [27.5, 479.0], [27.6, 480.0], [27.7, 481.0], [27.8, 483.0], [27.9, 485.0], [28.0, 487.0], [28.1, 488.0], [28.2, 489.0], [28.3, 490.0], [28.4, 491.0], [28.5, 493.0], [28.6, 494.0], [28.7, 494.0], [28.8, 496.0], [28.9, 497.0], [29.0, 498.0], [29.1, 498.0], [29.2, 499.0], [29.3, 501.0], [29.4, 503.0], [29.5, 504.0], [29.6, 505.0], [29.7, 506.0], [29.8, 507.0], [29.9, 508.0], [30.0, 509.0], [30.1, 510.0], [30.2, 512.0], [30.3, 513.0], [30.4, 514.0], [30.5, 516.0], [30.6, 517.0], [30.7, 519.0], [30.8, 519.0], [30.9, 520.0], [31.0, 521.0], [31.1, 521.0], [31.2, 522.0], [31.3, 523.0], [31.4, 523.0], [31.5, 524.0], [31.6, 525.0], [31.7, 526.0], [31.8, 527.0], [31.9, 528.0], [32.0, 529.0], [32.1, 530.0], [32.2, 531.0], [32.3, 532.0], [32.4, 532.0], [32.5, 534.0], [32.6, 535.0], [32.7, 535.0], [32.8, 536.0], [32.9, 537.0], [33.0, 537.0], [33.1, 538.0], [33.2, 539.0], [33.3, 539.0], [33.4, 541.0], [33.5, 541.0], [33.6, 542.0], [33.7, 543.0], [33.8, 545.0], [33.9, 546.0], [34.0, 547.0], [34.1, 547.0], [34.2, 549.0], [34.3, 550.0], [34.4, 550.0], [34.5, 551.0], [34.6, 552.0], [34.7, 552.0], [34.8, 553.0], [34.9, 554.0], [35.0, 555.0], [35.1, 556.0], [35.2, 557.0], [35.3, 558.0], [35.4, 558.0], [35.5, 559.0], [35.6, 559.0], [35.7, 560.0], [35.8, 561.0], [35.9, 562.0], [36.0, 562.0], [36.1, 563.0], [36.2, 563.0], [36.3, 565.0], [36.4, 566.0], [36.5, 567.0], [36.6, 568.0], [36.7, 569.0], [36.8, 569.0], [36.9, 570.0], [37.0, 571.0], [37.1, 572.0], [37.2, 573.0], [37.3, 574.0], [37.4, 575.0], [37.5, 576.0], [37.6, 578.0], [37.7, 579.0], [37.8, 581.0], [37.9, 582.0], [38.0, 582.0], [38.1, 582.0], [38.2, 584.0], [38.3, 585.0], [38.4, 586.0], [38.5, 586.0], [38.6, 587.0], [38.7, 589.0], [38.8, 591.0], [38.9, 592.0], [39.0, 592.0], [39.1, 594.0], [39.2, 594.0], [39.3, 596.0], [39.4, 597.0], [39.5, 597.0], [39.6, 598.0], [39.7, 598.0], [39.8, 599.0], [39.9, 601.0], [40.0, 603.0], [40.1, 604.0], [40.2, 605.0], [40.3, 606.0], [40.4, 606.0], [40.5, 608.0], [40.6, 608.0], [40.7, 609.0], [40.8, 610.0], [40.9, 611.0], [41.0, 612.0], [41.1, 614.0], [41.2, 615.0], [41.3, 616.0], [41.4, 617.0], [41.5, 618.0], [41.6, 619.0], [41.7, 620.0], [41.8, 621.0], [41.9, 621.0], [42.0, 622.0], [42.1, 624.0], [42.2, 624.0], [42.3, 625.0], [42.4, 626.0], [42.5, 628.0], [42.6, 629.0], [42.7, 630.0], [42.8, 631.0], [42.9, 632.0], [43.0, 633.0], [43.1, 633.0], [43.2, 635.0], [43.3, 636.0], [43.4, 638.0], [43.5, 640.0], [43.6, 640.0], [43.7, 641.0], [43.8, 643.0], [43.9, 644.0], [44.0, 645.0], [44.1, 647.0], [44.2, 648.0], [44.3, 649.0], [44.4, 650.0], [44.5, 653.0], [44.6, 654.0], [44.7, 654.0], [44.8, 655.0], [44.9, 656.0], [45.0, 657.0], [45.1, 659.0], [45.2, 660.0], [45.3, 661.0], [45.4, 662.0], [45.5, 663.0], [45.6, 664.0], [45.7, 665.0], [45.8, 666.0], [45.9, 667.0], [46.0, 669.0], [46.1, 671.0], [46.2, 672.0], [46.3, 673.0], [46.4, 674.0], [46.5, 676.0], [46.6, 677.0], [46.7, 678.0], [46.8, 679.0], [46.9, 680.0], [47.0, 682.0], [47.1, 683.0], [47.2, 684.0], [47.3, 684.0], [47.4, 686.0], [47.5, 688.0], [47.6, 689.0], [47.7, 691.0], [47.8, 691.0], [47.9, 692.0], [48.0, 695.0], [48.1, 696.0], [48.2, 698.0], [48.3, 699.0], [48.4, 701.0], [48.5, 702.0], [48.6, 703.0], [48.7, 704.0], [48.8, 705.0], [48.9, 706.0], [49.0, 707.0], [49.1, 709.0], [49.2, 709.0], [49.3, 710.0], [49.4, 711.0], [49.5, 713.0], [49.6, 714.0], [49.7, 716.0], [49.8, 717.0], [49.9, 719.0], [50.0, 719.0], [50.1, 721.0], [50.2, 721.0], [50.3, 723.0], [50.4, 724.0], [50.5, 725.0], [50.6, 726.0], [50.7, 727.0], [50.8, 731.0], [50.9, 732.0], [51.0, 734.0], [51.1, 735.0], [51.2, 736.0], [51.3, 737.0], [51.4, 741.0], [51.5, 742.0], [51.6, 745.0], [51.7, 747.0], [51.8, 749.0], [51.9, 751.0], [52.0, 753.0], [52.1, 754.0], [52.2, 756.0], [52.3, 758.0], [52.4, 759.0], [52.5, 761.0], [52.6, 762.0], [52.7, 763.0], [52.8, 764.0], [52.9, 767.0], [53.0, 768.0], [53.1, 768.0], [53.2, 769.0], [53.3, 770.0], [53.4, 772.0], [53.5, 775.0], [53.6, 777.0], [53.7, 779.0], [53.8, 780.0], [53.9, 782.0], [54.0, 784.0], [54.1, 786.0], [54.2, 789.0], [54.3, 791.0], [54.4, 792.0], [54.5, 794.0], [54.6, 797.0], [54.7, 799.0], [54.8, 801.0], [54.9, 804.0], [55.0, 807.0], [55.1, 810.0], [55.2, 812.0], [55.3, 813.0], [55.4, 816.0], [55.5, 817.0], [55.6, 818.0], [55.7, 820.0], [55.8, 821.0], [55.9, 822.0], [56.0, 824.0], [56.1, 826.0], [56.2, 828.0], [56.3, 829.0], [56.4, 831.0], [56.5, 833.0], [56.6, 834.0], [56.7, 835.0], [56.8, 836.0], [56.9, 837.0], [57.0, 839.0], [57.1, 841.0], [57.2, 842.0], [57.3, 843.0], [57.4, 844.0], [57.5, 845.0], [57.6, 847.0], [57.7, 848.0], [57.8, 850.0], [57.9, 851.0], [58.0, 853.0], [58.1, 856.0], [58.2, 858.0], [58.3, 860.0], [58.4, 861.0], [58.5, 863.0], [58.6, 864.0], [58.7, 865.0], [58.8, 867.0], [58.9, 869.0], [59.0, 869.0], [59.1, 870.0], [59.2, 873.0], [59.3, 875.0], [59.4, 876.0], [59.5, 878.0], [59.6, 880.0], [59.7, 882.0], [59.8, 884.0], [59.9, 885.0], [60.0, 887.0], [60.1, 888.0], [60.2, 889.0], [60.3, 890.0], [60.4, 890.0], [60.5, 891.0], [60.6, 893.0], [60.7, 895.0], [60.8, 898.0], [60.9, 899.0], [61.0, 904.0], [61.1, 905.0], [61.2, 906.0], [61.3, 907.0], [61.4, 909.0], [61.5, 911.0], [61.6, 913.0], [61.7, 914.0], [61.8, 916.0], [61.9, 918.0], [62.0, 920.0], [62.1, 921.0], [62.2, 923.0], [62.3, 925.0], [62.4, 926.0], [62.5, 928.0], [62.6, 931.0], [62.7, 934.0], [62.8, 935.0], [62.9, 937.0], [63.0, 940.0], [63.1, 942.0], [63.2, 945.0], [63.3, 947.0], [63.4, 948.0], [63.5, 950.0], [63.6, 952.0], [63.7, 954.0], [63.8, 956.0], [63.9, 958.0], [64.0, 959.0], [64.1, 961.0], [64.2, 962.0], [64.3, 963.0], [64.4, 964.0], [64.5, 965.0], [64.6, 966.0], [64.7, 968.0], [64.8, 969.0], [64.9, 971.0], [65.0, 972.0], [65.1, 974.0], [65.2, 976.0], [65.3, 977.0], [65.4, 978.0], [65.5, 981.0], [65.6, 983.0], [65.7, 985.0], [65.8, 987.0], [65.9, 989.0], [66.0, 990.0], [66.1, 993.0], [66.2, 995.0], [66.3, 995.0], [66.4, 997.0], [66.5, 998.0], [66.6, 999.0], [66.7, 1000.0], [66.8, 1002.0], [66.9, 1003.0], [67.0, 1007.0], [67.1, 1010.0], [67.2, 1010.0], [67.3, 1012.0], [67.4, 1013.0], [67.5, 1014.0], [67.6, 1015.0], [67.7, 1016.0], [67.8, 1017.0], [67.9, 1018.0], [68.0, 1020.0], [68.1, 1021.0], [68.2, 1022.0], [68.3, 1025.0], [68.4, 1026.0], [68.5, 1029.0], [68.6, 1030.0], [68.7, 1031.0], [68.8, 1031.0], [68.9, 1033.0], [69.0, 1035.0], [69.1, 1037.0], [69.2, 1038.0], [69.3, 1040.0], [69.4, 1040.0], [69.5, 1042.0], [69.6, 1044.0], [69.7, 1046.0], [69.8, 1049.0], [69.9, 1052.0], [70.0, 1053.0], [70.1, 1055.0], [70.2, 1057.0], [70.3, 1059.0], [70.4, 1060.0], [70.5, 1061.0], [70.6, 1062.0], [70.7, 1064.0], [70.8, 1065.0], [70.9, 1067.0], [71.0, 1069.0], [71.1, 1069.0], [71.2, 1071.0], [71.3, 1074.0], [71.4, 1077.0], [71.5, 1079.0], [71.6, 1081.0], [71.7, 1082.0], [71.8, 1085.0], [71.9, 1087.0], [72.0, 1088.0], [72.1, 1089.0], [72.2, 1091.0], [72.3, 1093.0], [72.4, 1093.0], [72.5, 1095.0], [72.6, 1097.0], [72.7, 1099.0], [72.8, 1101.0], [72.9, 1101.0], [73.0, 1103.0], [73.1, 1104.0], [73.2, 1106.0], [73.3, 1107.0], [73.4, 1109.0], [73.5, 1110.0], [73.6, 1111.0], [73.7, 1113.0], [73.8, 1116.0], [73.9, 1118.0], [74.0, 1119.0], [74.1, 1122.0], [74.2, 1125.0], [74.3, 1127.0], [74.4, 1128.0], [74.5, 1131.0], [74.6, 1132.0], [74.7, 1134.0], [74.8, 1135.0], [74.9, 1139.0], [75.0, 1141.0], [75.1, 1142.0], [75.2, 1143.0], [75.3, 1144.0], [75.4, 1148.0], [75.5, 1150.0], [75.6, 1155.0], [75.7, 1156.0], [75.8, 1158.0], [75.9, 1160.0], [76.0, 1164.0], [76.1, 1166.0], [76.2, 1169.0], [76.3, 1170.0], [76.4, 1171.0], [76.5, 1175.0], [76.6, 1179.0], [76.7, 1181.0], [76.8, 1184.0], [76.9, 1187.0], [77.0, 1189.0], [77.1, 1191.0], [77.2, 1194.0], [77.3, 1196.0], [77.4, 1199.0], [77.5, 1203.0], [77.6, 1207.0], [77.7, 1208.0], [77.8, 1210.0], [77.9, 1211.0], [78.0, 1212.0], [78.1, 1218.0], [78.2, 1221.0], [78.3, 1224.0], [78.4, 1227.0], [78.5, 1228.0], [78.6, 1229.0], [78.7, 1231.0], [78.8, 1233.0], [78.9, 1233.0], [79.0, 1237.0], [79.1, 1239.0], [79.2, 1241.0], [79.3, 1242.0], [79.4, 1245.0], [79.5, 1249.0], [79.6, 1251.0], [79.7, 1252.0], [79.8, 1254.0], [79.9, 1257.0], [80.0, 1259.0], [80.1, 1262.0], [80.2, 1264.0], [80.3, 1266.0], [80.4, 1269.0], [80.5, 1270.0], [80.6, 1273.0], [80.7, 1276.0], [80.8, 1280.0], [80.9, 1281.0], [81.0, 1282.0], [81.1, 1287.0], [81.2, 1291.0], [81.3, 1293.0], [81.4, 1294.0], [81.5, 1297.0], [81.6, 1298.0], [81.7, 1300.0], [81.8, 1302.0], [81.9, 1302.0], [82.0, 1303.0], [82.1, 1306.0], [82.2, 1309.0], [82.3, 1311.0], [82.4, 1311.0], [82.5, 1316.0], [82.6, 1318.0], [82.7, 1319.0], [82.8, 1321.0], [82.9, 1323.0], [83.0, 1325.0], [83.1, 1327.0], [83.2, 1330.0], [83.3, 1333.0], [83.4, 1335.0], [83.5, 1337.0], [83.6, 1338.0], [83.7, 1340.0], [83.8, 1343.0], [83.9, 1345.0], [84.0, 1348.0], [84.1, 1349.0], [84.2, 1352.0], [84.3, 1354.0], [84.4, 1356.0], [84.5, 1358.0], [84.6, 1359.0], [84.7, 1363.0], [84.8, 1367.0], [84.9, 1370.0], [85.0, 1372.0], [85.1, 1373.0], [85.2, 1375.0], [85.3, 1377.0], [85.4, 1380.0], [85.5, 1383.0], [85.6, 1384.0], [85.7, 1391.0], [85.8, 1392.0], [85.9, 1396.0], [86.0, 1398.0], [86.1, 1401.0], [86.2, 1403.0], [86.3, 1404.0], [86.4, 1409.0], [86.5, 1412.0], [86.6, 1417.0], [86.7, 1419.0], [86.8, 1420.0], [86.9, 1422.0], [87.0, 1424.0], [87.1, 1426.0], [87.2, 1432.0], [87.3, 1435.0], [87.4, 1438.0], [87.5, 1442.0], [87.6, 1447.0], [87.7, 1451.0], [87.8, 1454.0], [87.9, 1458.0], [88.0, 1462.0], [88.1, 1465.0], [88.2, 1469.0], [88.3, 1471.0], [88.4, 1474.0], [88.5, 1480.0], [88.6, 1491.0], [88.7, 1492.0], [88.8, 1497.0], [88.9, 1501.0], [89.0, 1503.0], [89.1, 1507.0], [89.2, 1512.0], [89.3, 1517.0], [89.4, 1521.0], [89.5, 1524.0], [89.6, 1527.0], [89.7, 1535.0], [89.8, 1541.0], [89.9, 1543.0], [90.0, 1549.0], [90.1, 1555.0], [90.2, 1559.0], [90.3, 1562.0], [90.4, 1570.0], [90.5, 1574.0], [90.6, 1578.0], [90.7, 1583.0], [90.8, 1588.0], [90.9, 1590.0], [91.0, 1594.0], [91.1, 1599.0], [91.2, 1606.0], [91.3, 1612.0], [91.4, 1621.0], [91.5, 1627.0], [91.6, 1632.0], [91.7, 1637.0], [91.8, 1644.0], [91.9, 1651.0], [92.0, 1665.0], [92.1, 1666.0], [92.2, 1672.0], [92.3, 1677.0], [92.4, 1687.0], [92.5, 1699.0], [92.6, 1706.0], [92.7, 1722.0], [92.8, 1733.0], [92.9, 1744.0], [93.0, 1757.0], [93.1, 1761.0], [93.2, 1768.0], [93.3, 1774.0], [93.4, 1785.0], [93.5, 1788.0], [93.6, 1791.0], [93.7, 1798.0], [93.8, 1809.0], [93.9, 1822.0], [94.0, 1832.0], [94.1, 1847.0], [94.2, 1851.0], [94.3, 1860.0], [94.4, 1869.0], [94.5, 1886.0], [94.6, 1892.0], [94.7, 1911.0], [94.8, 1919.0], [94.9, 1927.0], [95.0, 1935.0], [95.1, 1945.0], [95.2, 1952.0], [95.3, 1961.0], [95.4, 1972.0], [95.5, 1996.0], [95.6, 2003.0], [95.7, 2010.0], [95.8, 2022.0], [95.9, 2031.0], [96.0, 2059.0], [96.1, 2071.0], [96.2, 2078.0], [96.3, 2085.0], [96.4, 2095.0], [96.5, 2107.0], [96.6, 2115.0], [96.7, 2128.0], [96.8, 2156.0], [96.9, 2173.0], [97.0, 2186.0], [97.1, 2196.0], [97.2, 2210.0], [97.3, 2232.0], [97.4, 2259.0], [97.5, 2279.0], [97.6, 2299.0], [97.7, 2311.0], [97.8, 2340.0], [97.9, 2360.0], [98.0, 2373.0], [98.1, 2384.0], [98.2, 2433.0], [98.3, 2483.0], [98.4, 2502.0], [98.5, 2567.0], [98.6, 2589.0], [98.7, 2649.0], [98.8, 2706.0], [98.9, 2782.0], [99.0, 2906.0], [99.1, 3064.0], [99.2, 3199.0], [99.3, 3395.0], [99.4, 3536.0], [99.5, 3610.0], [99.6, 3758.0], [99.7, 4281.0], [99.8, 4499.0], [99.9, 4801.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 549.0, "series": [{"data": [[600.0, 441.0], [700.0, 333.0], [800.0, 321.0], [900.0, 296.0], [1000.0, 316.0], [1100.0, 245.0], [1200.0, 220.0], [1300.0, 228.0], [1400.0, 145.0], [1500.0, 118.0], [1600.0, 72.0], [1700.0, 63.0], [1800.0, 48.0], [1900.0, 48.0], [2000.0, 46.0], [2100.0, 35.0], [2300.0, 29.0], [2200.0, 25.0], [2400.0, 11.0], [2500.0, 12.0], [2600.0, 9.0], [2700.0, 6.0], [2800.0, 5.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 4.0], [3200.0, 2.0], [3300.0, 3.0], [3400.0, 1.0], [3500.0, 9.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 2.0], [4200.0, 4.0], [4300.0, 2.0], [4400.0, 2.0], [4500.0, 2.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [100.0, 96.0], [200.0, 535.0], [300.0, 357.0], [400.0, 530.0], [500.0, 549.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3092.0, "series": [{"data": [[0.0, 1520.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3092.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 578.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.883720930232558, "minX": 1.60223514E12, "maxY": 10.0, "series": [{"data": [[1.60223532E12, 10.0], [1.6022355E12, 10.0], [1.60223544E12, 10.0], [1.60223514E12, 10.0], [1.60223556E12, 9.883720930232558], [1.60223526E12, 10.0], [1.6022352E12, 10.0], [1.60223538E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223556E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 558.0, "minX": 1.0, "maxY": 2844.0, "series": [{"data": [[8.0, 1016.0], [4.0, 801.0], [2.0, 2844.0], [1.0, 2581.0], [9.0, 558.0], [10.0, 867.0659976842924], [5.0, 966.0], [6.0, 2085.0], [3.0, 2133.0], [7.0, 760.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 868.2103640916979]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2913.983333333333, "minX": 1.60223514E12, "maxY": 3498653.05, "series": [{"data": [[1.60223532E12, 3238624.55], [1.6022355E12, 3247872.3333333335], [1.60223544E12, 3246297.1666666665], [1.60223514E12, 3022804.15], [1.60223556E12, 1735254.3166666667], [1.60223526E12, 3498653.05], [1.6022352E12, 2947187.716666667], [1.60223538E12, 3035507.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60223532E12, 5183.333333333333], [1.6022355E12, 5744.483333333334], [1.60223544E12, 5543.383333333333], [1.60223514E12, 4303.933333333333], [1.60223556E12, 2913.983333333333], [1.60223526E12, 5335.9], [1.6022352E12, 5057.666666666667], [1.60223538E12, 4501.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223556E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 788.1111111111117, "minX": 1.60223514E12, "maxY": 949.3620414673036, "series": [{"data": [[1.60223532E12, 875.95633187773], [1.6022355E12, 788.1111111111117], [1.60223544E12, 807.6546666666669], [1.60223514E12, 936.8235294117651], [1.60223556E12, 914.9095607235142], [1.60223526E12, 852.8008534850643], [1.6022352E12, 870.6938775510203], [1.60223538E12, 949.3620414673036]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223556E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 786.5529100529099, "minX": 1.60223514E12, "maxY": 947.2759170653909, "series": [{"data": [[1.60223532E12, 873.8733624454151], [1.6022355E12, 786.5529100529099], [1.60223544E12, 806.188], [1.60223514E12, 934.5176470588239], [1.60223556E12, 913.4186046511624], [1.60223526E12, 850.6571834992882], [1.6022352E12, 868.7405247813412], [1.60223538E12, 947.2759170653909]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223556E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010666666666666677, "minX": 1.60223514E12, "maxY": 0.1815126050420166, "series": [{"data": [[1.60223532E12, 0.01455604075691412], [1.6022355E12, 0.01455026455026455], [1.60223544E12, 0.010666666666666677], [1.60223514E12, 0.1815126050420166], [1.60223556E12, 0.023255813953488382], [1.60223526E12, 0.014224751066856344], [1.6022352E12, 0.03206997084548106], [1.60223538E12, 0.0207336523125997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223556E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60223514E12, "maxY": 5927.0, "series": [{"data": [[1.60223532E12, 4361.0], [1.6022355E12, 2814.0], [1.60223544E12, 3418.0], [1.60223514E12, 4729.0], [1.60223556E12, 3758.0], [1.60223526E12, 3330.0], [1.6022352E12, 4544.0], [1.60223538E12, 5927.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60223532E12, 196.0], [1.6022355E12, 190.0], [1.60223544E12, 193.75899982094765], [1.60223514E12, 201.72799971580505], [1.60223556E12, 183.49199990749358], [1.60223526E12, 195.32699983239175], [1.6022352E12, 194.0], [1.60223538E12, 198.30399970054626]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60223532E12, 196.0], [1.6022355E12, 190.0], [1.60223544E12, 194.43490007162094], [1.60223514E12, 202.80080011367798], [1.60223556E12, 183.84120003700255], [1.60223526E12, 195.95970006704331], [1.6022352E12, 194.0], [1.60223538E12, 199.21720005989076]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60223532E12, 196.0], [1.6022355E12, 190.0], [1.60223544E12, 194.13449991047383], [1.60223514E12, 202.32399985790252], [1.60223556E12, 183.6859999537468], [1.60223526E12, 195.67849991619588], [1.6022352E12, 194.0], [1.60223538E12, 198.93199985027314]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60223532E12, 189.0], [1.6022355E12, 182.0], [1.60223544E12, 185.0], [1.60223514E12, 188.0], [1.60223556E12, 182.0], [1.60223526E12, 184.0], [1.6022352E12, 187.0], [1.60223538E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60223532E12, 689.0], [1.6022355E12, 674.0], [1.60223544E12, 640.5], [1.60223514E12, 787.0], [1.60223556E12, 788.0], [1.60223526E12, 725.5], [1.6022352E12, 671.5], [1.60223538E12, 784.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 2712.5, "series": [{"data": [[2.0, 2712.5], [3.0, 2180.0], [4.0, 1200.0], [5.0, 1255.0], [6.0, 1141.5], [7.0, 1105.5], [8.0, 1082.5], [9.0, 913.0], [10.0, 834.0], [11.0, 864.0], [12.0, 814.5], [13.0, 735.0], [14.0, 652.5], [15.0, 612.0], [16.0, 563.5], [1.0, 2133.0], [17.0, 559.0], [18.0, 459.0], [19.0, 485.0], [20.0, 448.0], [21.0, 530.5], [22.0, 443.0], [23.0, 389.0], [24.0, 433.5], [25.0, 424.0], [26.0, 428.5], [28.0, 409.5], [29.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 926.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 389.0, "minX": 1.0, "maxY": 2706.0, "series": [{"data": [[2.0, 2706.0], [3.0, 2178.0], [4.0, 1198.0], [5.0, 1244.0], [6.0, 1135.5], [7.0, 1105.5], [8.0, 1076.0], [9.0, 910.0], [10.0, 832.0], [11.0, 863.0], [12.0, 813.5], [13.0, 735.0], [14.0, 651.5], [15.0, 612.0], [16.0, 562.5], [1.0, 2131.0], [17.0, 557.0], [18.0, 459.0], [19.0, 485.0], [20.0, 448.0], [21.0, 530.5], [22.0, 443.0], [23.0, 389.0], [24.0, 433.0], [25.0, 424.0], [26.0, 428.5], [28.0, 409.5], [29.0, 399.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 926.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.283333333333333, "minX": 1.60223514E12, "maxY": 12.6, "series": [{"data": [[1.60223532E12, 11.45], [1.6022355E12, 12.6], [1.60223544E12, 12.5], [1.60223514E12, 10.083333333333334], [1.60223556E12, 6.283333333333333], [1.60223526E12, 11.716666666666667], [1.6022352E12, 11.433333333333334], [1.60223538E12, 10.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223556E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223514E12, "maxY": 12.6, "series": [{"data": [[1.60223532E12, 11.45], [1.6022355E12, 12.6], [1.60223544E12, 12.5], [1.60223514E12, 9.916666666666666], [1.60223556E12, 6.45], [1.60223526E12, 11.7], [1.6022352E12, 11.433333333333334], [1.60223538E12, 10.45]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60223526E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60223556E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223514E12, "maxY": 12.6, "series": [{"data": [[1.60223532E12, 11.45], [1.6022355E12, 12.6], [1.60223544E12, 12.5], [1.60223514E12, 9.916666666666666], [1.60223556E12, 6.45], [1.60223526E12, 11.7], [1.6022352E12, 11.433333333333334], [1.60223538E12, 10.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60223526E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223556E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60223514E12, "maxY": 12.6, "series": [{"data": [[1.60223532E12, 11.45], [1.6022355E12, 12.6], [1.60223544E12, 12.5], [1.60223514E12, 9.916666666666666], [1.60223556E12, 6.45], [1.60223526E12, 11.7], [1.6022352E12, 11.433333333333334], [1.60223538E12, 10.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60223526E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60223556E12, "title": "Total Transactions Per Second"}},
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

