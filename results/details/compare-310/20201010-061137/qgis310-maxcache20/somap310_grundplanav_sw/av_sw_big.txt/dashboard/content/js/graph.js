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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8830.0, "series": [{"data": [[0.0, 181.0], [0.1, 184.0], [0.2, 186.0], [0.3, 187.0], [0.4, 188.0], [0.5, 190.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 200.0], [1.9, 201.0], [2.0, 201.0], [2.1, 202.0], [2.2, 203.0], [2.3, 205.0], [2.4, 205.0], [2.5, 206.0], [2.6, 207.0], [2.7, 208.0], [2.8, 208.0], [2.9, 209.0], [3.0, 210.0], [3.1, 210.0], [3.2, 212.0], [3.3, 214.0], [3.4, 214.0], [3.5, 215.0], [3.6, 216.0], [3.7, 217.0], [3.8, 218.0], [3.9, 218.0], [4.0, 219.0], [4.1, 219.0], [4.2, 220.0], [4.3, 221.0], [4.4, 221.0], [4.5, 222.0], [4.6, 223.0], [4.7, 223.0], [4.8, 224.0], [4.9, 225.0], [5.0, 225.0], [5.1, 226.0], [5.2, 227.0], [5.3, 227.0], [5.4, 228.0], [5.5, 228.0], [5.6, 229.0], [5.7, 230.0], [5.8, 231.0], [5.9, 232.0], [6.0, 233.0], [6.1, 235.0], [6.2, 236.0], [6.3, 237.0], [6.4, 238.0], [6.5, 240.0], [6.6, 240.0], [6.7, 241.0], [6.8, 243.0], [6.9, 245.0], [7.0, 246.0], [7.1, 247.0], [7.2, 248.0], [7.3, 250.0], [7.4, 252.0], [7.5, 253.0], [7.6, 255.0], [7.7, 256.0], [7.8, 258.0], [7.9, 260.0], [8.0, 261.0], [8.1, 262.0], [8.2, 263.0], [8.3, 264.0], [8.4, 265.0], [8.5, 266.0], [8.6, 266.0], [8.7, 267.0], [8.8, 268.0], [8.9, 269.0], [9.0, 270.0], [9.1, 270.0], [9.2, 271.0], [9.3, 271.0], [9.4, 272.0], [9.5, 272.0], [9.6, 273.0], [9.7, 274.0], [9.8, 275.0], [9.9, 275.0], [10.0, 277.0], [10.1, 277.0], [10.2, 278.0], [10.3, 279.0], [10.4, 279.0], [10.5, 280.0], [10.6, 281.0], [10.7, 282.0], [10.8, 282.0], [10.9, 282.0], [11.0, 283.0], [11.1, 284.0], [11.2, 285.0], [11.3, 286.0], [11.4, 287.0], [11.5, 287.0], [11.6, 289.0], [11.7, 290.0], [11.8, 290.0], [11.9, 291.0], [12.0, 292.0], [12.1, 293.0], [12.2, 294.0], [12.3, 295.0], [12.4, 297.0], [12.5, 298.0], [12.6, 301.0], [12.7, 302.0], [12.8, 303.0], [12.9, 304.0], [13.0, 305.0], [13.1, 306.0], [13.2, 307.0], [13.3, 308.0], [13.4, 308.0], [13.5, 309.0], [13.6, 309.0], [13.7, 310.0], [13.8, 311.0], [13.9, 313.0], [14.0, 313.0], [14.1, 314.0], [14.2, 315.0], [14.3, 316.0], [14.4, 318.0], [14.5, 318.0], [14.6, 319.0], [14.7, 321.0], [14.8, 322.0], [14.9, 324.0], [15.0, 325.0], [15.1, 326.0], [15.2, 328.0], [15.3, 329.0], [15.4, 330.0], [15.5, 331.0], [15.6, 333.0], [15.7, 334.0], [15.8, 335.0], [15.9, 337.0], [16.0, 338.0], [16.1, 339.0], [16.2, 341.0], [16.3, 345.0], [16.4, 346.0], [16.5, 348.0], [16.6, 350.0], [16.7, 352.0], [16.8, 354.0], [16.9, 357.0], [17.0, 360.0], [17.1, 363.0], [17.2, 364.0], [17.3, 365.0], [17.4, 366.0], [17.5, 368.0], [17.6, 370.0], [17.7, 372.0], [17.8, 372.0], [17.9, 373.0], [18.0, 374.0], [18.1, 375.0], [18.2, 376.0], [18.3, 377.0], [18.4, 379.0], [18.5, 380.0], [18.6, 382.0], [18.7, 383.0], [18.8, 384.0], [18.9, 385.0], [19.0, 386.0], [19.1, 386.0], [19.2, 387.0], [19.3, 388.0], [19.4, 390.0], [19.5, 391.0], [19.6, 392.0], [19.7, 394.0], [19.8, 395.0], [19.9, 396.0], [20.0, 397.0], [20.1, 398.0], [20.2, 399.0], [20.3, 401.0], [20.4, 402.0], [20.5, 403.0], [20.6, 404.0], [20.7, 405.0], [20.8, 406.0], [20.9, 407.0], [21.0, 409.0], [21.1, 410.0], [21.2, 411.0], [21.3, 412.0], [21.4, 414.0], [21.5, 415.0], [21.6, 416.0], [21.7, 418.0], [21.8, 419.0], [21.9, 420.0], [22.0, 421.0], [22.1, 422.0], [22.2, 423.0], [22.3, 424.0], [22.4, 424.0], [22.5, 425.0], [22.6, 426.0], [22.7, 427.0], [22.8, 428.0], [22.9, 429.0], [23.0, 430.0], [23.1, 431.0], [23.2, 432.0], [23.3, 433.0], [23.4, 434.0], [23.5, 434.0], [23.6, 435.0], [23.7, 436.0], [23.8, 437.0], [23.9, 437.0], [24.0, 438.0], [24.1, 439.0], [24.2, 440.0], [24.3, 441.0], [24.4, 442.0], [24.5, 443.0], [24.6, 444.0], [24.7, 444.0], [24.8, 445.0], [24.9, 446.0], [25.0, 447.0], [25.1, 448.0], [25.2, 449.0], [25.3, 450.0], [25.4, 450.0], [25.5, 451.0], [25.6, 451.0], [25.7, 452.0], [25.8, 452.0], [25.9, 453.0], [26.0, 454.0], [26.1, 454.0], [26.2, 456.0], [26.3, 457.0], [26.4, 457.0], [26.5, 458.0], [26.6, 459.0], [26.7, 459.0], [26.8, 460.0], [26.9, 461.0], [27.0, 461.0], [27.1, 462.0], [27.2, 463.0], [27.3, 463.0], [27.4, 465.0], [27.5, 465.0], [27.6, 466.0], [27.7, 467.0], [27.8, 468.0], [27.9, 469.0], [28.0, 470.0], [28.1, 470.0], [28.2, 471.0], [28.3, 472.0], [28.4, 473.0], [28.5, 474.0], [28.6, 475.0], [28.7, 475.0], [28.8, 476.0], [28.9, 477.0], [29.0, 478.0], [29.1, 478.0], [29.2, 479.0], [29.3, 480.0], [29.4, 480.0], [29.5, 482.0], [29.6, 483.0], [29.7, 484.0], [29.8, 485.0], [29.9, 486.0], [30.0, 488.0], [30.1, 489.0], [30.2, 490.0], [30.3, 490.0], [30.4, 492.0], [30.5, 493.0], [30.6, 495.0], [30.7, 495.0], [30.8, 496.0], [30.9, 497.0], [31.0, 498.0], [31.1, 499.0], [31.2, 501.0], [31.3, 502.0], [31.4, 503.0], [31.5, 504.0], [31.6, 506.0], [31.7, 507.0], [31.8, 507.0], [31.9, 508.0], [32.0, 508.0], [32.1, 509.0], [32.2, 510.0], [32.3, 510.0], [32.4, 511.0], [32.5, 513.0], [32.6, 514.0], [32.7, 514.0], [32.8, 516.0], [32.9, 518.0], [33.0, 520.0], [33.1, 520.0], [33.2, 521.0], [33.3, 522.0], [33.4, 523.0], [33.5, 524.0], [33.6, 524.0], [33.7, 525.0], [33.8, 526.0], [33.9, 527.0], [34.0, 527.0], [34.1, 528.0], [34.2, 529.0], [34.3, 530.0], [34.4, 530.0], [34.5, 531.0], [34.6, 533.0], [34.7, 534.0], [34.8, 535.0], [34.9, 536.0], [35.0, 537.0], [35.1, 538.0], [35.2, 539.0], [35.3, 540.0], [35.4, 540.0], [35.5, 541.0], [35.6, 542.0], [35.7, 544.0], [35.8, 544.0], [35.9, 545.0], [36.0, 546.0], [36.1, 546.0], [36.2, 548.0], [36.3, 548.0], [36.4, 549.0], [36.5, 550.0], [36.6, 551.0], [36.7, 552.0], [36.8, 554.0], [36.9, 555.0], [37.0, 555.0], [37.1, 557.0], [37.2, 557.0], [37.3, 558.0], [37.4, 558.0], [37.5, 559.0], [37.6, 560.0], [37.7, 561.0], [37.8, 562.0], [37.9, 563.0], [38.0, 565.0], [38.1, 566.0], [38.2, 567.0], [38.3, 568.0], [38.4, 569.0], [38.5, 570.0], [38.6, 570.0], [38.7, 571.0], [38.8, 572.0], [38.9, 574.0], [39.0, 575.0], [39.1, 576.0], [39.2, 577.0], [39.3, 578.0], [39.4, 579.0], [39.5, 580.0], [39.6, 581.0], [39.7, 581.0], [39.8, 583.0], [39.9, 584.0], [40.0, 585.0], [40.1, 586.0], [40.2, 586.0], [40.3, 588.0], [40.4, 589.0], [40.5, 589.0], [40.6, 590.0], [40.7, 591.0], [40.8, 592.0], [40.9, 594.0], [41.0, 595.0], [41.1, 597.0], [41.2, 597.0], [41.3, 598.0], [41.4, 598.0], [41.5, 599.0], [41.6, 600.0], [41.7, 602.0], [41.8, 603.0], [41.9, 605.0], [42.0, 606.0], [42.1, 607.0], [42.2, 608.0], [42.3, 608.0], [42.4, 609.0], [42.5, 610.0], [42.6, 611.0], [42.7, 612.0], [42.8, 613.0], [42.9, 614.0], [43.0, 614.0], [43.1, 615.0], [43.2, 616.0], [43.3, 618.0], [43.4, 619.0], [43.5, 619.0], [43.6, 621.0], [43.7, 622.0], [43.8, 623.0], [43.9, 624.0], [44.0, 625.0], [44.1, 625.0], [44.2, 626.0], [44.3, 627.0], [44.4, 630.0], [44.5, 631.0], [44.6, 633.0], [44.7, 634.0], [44.8, 635.0], [44.9, 635.0], [45.0, 636.0], [45.1, 638.0], [45.2, 639.0], [45.3, 640.0], [45.4, 641.0], [45.5, 642.0], [45.6, 643.0], [45.7, 645.0], [45.8, 647.0], [45.9, 648.0], [46.0, 650.0], [46.1, 652.0], [46.2, 654.0], [46.3, 654.0], [46.4, 654.0], [46.5, 656.0], [46.6, 657.0], [46.7, 658.0], [46.8, 659.0], [46.9, 660.0], [47.0, 662.0], [47.1, 665.0], [47.2, 666.0], [47.3, 667.0], [47.4, 670.0], [47.5, 671.0], [47.6, 671.0], [47.7, 672.0], [47.8, 673.0], [47.9, 674.0], [48.0, 676.0], [48.1, 677.0], [48.2, 678.0], [48.3, 680.0], [48.4, 681.0], [48.5, 682.0], [48.6, 683.0], [48.7, 685.0], [48.8, 687.0], [48.9, 689.0], [49.0, 690.0], [49.1, 691.0], [49.2, 691.0], [49.3, 693.0], [49.4, 694.0], [49.5, 695.0], [49.6, 695.0], [49.7, 697.0], [49.8, 698.0], [49.9, 699.0], [50.0, 700.0], [50.1, 702.0], [50.2, 704.0], [50.3, 705.0], [50.4, 706.0], [50.5, 707.0], [50.6, 709.0], [50.7, 711.0], [50.8, 714.0], [50.9, 717.0], [51.0, 719.0], [51.1, 719.0], [51.2, 721.0], [51.3, 722.0], [51.4, 723.0], [51.5, 725.0], [51.6, 727.0], [51.7, 728.0], [51.8, 729.0], [51.9, 730.0], [52.0, 731.0], [52.1, 733.0], [52.2, 734.0], [52.3, 735.0], [52.4, 737.0], [52.5, 738.0], [52.6, 741.0], [52.7, 742.0], [52.8, 742.0], [52.9, 745.0], [53.0, 746.0], [53.1, 747.0], [53.2, 748.0], [53.3, 749.0], [53.4, 751.0], [53.5, 755.0], [53.6, 756.0], [53.7, 759.0], [53.8, 761.0], [53.9, 763.0], [54.0, 765.0], [54.1, 766.0], [54.2, 768.0], [54.3, 770.0], [54.4, 771.0], [54.5, 774.0], [54.6, 777.0], [54.7, 778.0], [54.8, 779.0], [54.9, 781.0], [55.0, 783.0], [55.1, 785.0], [55.2, 786.0], [55.3, 787.0], [55.4, 790.0], [55.5, 794.0], [55.6, 796.0], [55.7, 798.0], [55.8, 799.0], [55.9, 800.0], [56.0, 801.0], [56.1, 805.0], [56.2, 806.0], [56.3, 807.0], [56.4, 810.0], [56.5, 813.0], [56.6, 814.0], [56.7, 817.0], [56.8, 819.0], [56.9, 820.0], [57.0, 823.0], [57.1, 825.0], [57.2, 826.0], [57.3, 827.0], [57.4, 829.0], [57.5, 830.0], [57.6, 832.0], [57.7, 834.0], [57.8, 835.0], [57.9, 838.0], [58.0, 839.0], [58.1, 840.0], [58.2, 843.0], [58.3, 844.0], [58.4, 846.0], [58.5, 848.0], [58.6, 850.0], [58.7, 851.0], [58.8, 852.0], [58.9, 853.0], [59.0, 854.0], [59.1, 855.0], [59.2, 857.0], [59.3, 858.0], [59.4, 860.0], [59.5, 862.0], [59.6, 864.0], [59.7, 867.0], [59.8, 869.0], [59.9, 871.0], [60.0, 873.0], [60.1, 874.0], [60.2, 875.0], [60.3, 877.0], [60.4, 879.0], [60.5, 881.0], [60.6, 883.0], [60.7, 884.0], [60.8, 885.0], [60.9, 887.0], [61.0, 889.0], [61.1, 890.0], [61.2, 893.0], [61.3, 896.0], [61.4, 898.0], [61.5, 900.0], [61.6, 901.0], [61.7, 903.0], [61.8, 906.0], [61.9, 908.0], [62.0, 909.0], [62.1, 911.0], [62.2, 913.0], [62.3, 916.0], [62.4, 917.0], [62.5, 921.0], [62.6, 923.0], [62.7, 924.0], [62.8, 924.0], [62.9, 926.0], [63.0, 927.0], [63.1, 928.0], [63.2, 929.0], [63.3, 931.0], [63.4, 933.0], [63.5, 934.0], [63.6, 935.0], [63.7, 937.0], [63.8, 938.0], [63.9, 940.0], [64.0, 941.0], [64.1, 942.0], [64.2, 944.0], [64.3, 946.0], [64.4, 947.0], [64.5, 948.0], [64.6, 950.0], [64.7, 951.0], [64.8, 953.0], [64.9, 954.0], [65.0, 956.0], [65.1, 957.0], [65.2, 959.0], [65.3, 961.0], [65.4, 963.0], [65.5, 966.0], [65.6, 968.0], [65.7, 971.0], [65.8, 974.0], [65.9, 975.0], [66.0, 978.0], [66.1, 980.0], [66.2, 982.0], [66.3, 982.0], [66.4, 984.0], [66.5, 987.0], [66.6, 988.0], [66.7, 989.0], [66.8, 991.0], [66.9, 992.0], [67.0, 993.0], [67.1, 995.0], [67.2, 997.0], [67.3, 998.0], [67.4, 999.0], [67.5, 1000.0], [67.6, 1002.0], [67.7, 1003.0], [67.8, 1004.0], [67.9, 1005.0], [68.0, 1006.0], [68.1, 1008.0], [68.2, 1011.0], [68.3, 1011.0], [68.4, 1013.0], [68.5, 1014.0], [68.6, 1016.0], [68.7, 1018.0], [68.8, 1019.0], [68.9, 1021.0], [69.0, 1024.0], [69.1, 1027.0], [69.2, 1028.0], [69.3, 1030.0], [69.4, 1032.0], [69.5, 1034.0], [69.6, 1036.0], [69.7, 1038.0], [69.8, 1040.0], [69.9, 1040.0], [70.0, 1042.0], [70.1, 1043.0], [70.2, 1045.0], [70.3, 1047.0], [70.4, 1048.0], [70.5, 1050.0], [70.6, 1052.0], [70.7, 1053.0], [70.8, 1054.0], [70.9, 1057.0], [71.0, 1057.0], [71.1, 1058.0], [71.2, 1061.0], [71.3, 1063.0], [71.4, 1065.0], [71.5, 1067.0], [71.6, 1069.0], [71.7, 1072.0], [71.8, 1073.0], [71.9, 1075.0], [72.0, 1077.0], [72.1, 1078.0], [72.2, 1081.0], [72.3, 1083.0], [72.4, 1086.0], [72.5, 1090.0], [72.6, 1092.0], [72.7, 1093.0], [72.8, 1095.0], [72.9, 1096.0], [73.0, 1098.0], [73.1, 1102.0], [73.2, 1104.0], [73.3, 1106.0], [73.4, 1110.0], [73.5, 1111.0], [73.6, 1112.0], [73.7, 1114.0], [73.8, 1117.0], [73.9, 1118.0], [74.0, 1120.0], [74.1, 1122.0], [74.2, 1125.0], [74.3, 1131.0], [74.4, 1134.0], [74.5, 1135.0], [74.6, 1137.0], [74.7, 1140.0], [74.8, 1141.0], [74.9, 1144.0], [75.0, 1148.0], [75.1, 1150.0], [75.2, 1151.0], [75.3, 1152.0], [75.4, 1155.0], [75.5, 1157.0], [75.6, 1159.0], [75.7, 1160.0], [75.8, 1162.0], [75.9, 1164.0], [76.0, 1166.0], [76.1, 1168.0], [76.2, 1170.0], [76.3, 1173.0], [76.4, 1176.0], [76.5, 1179.0], [76.6, 1182.0], [76.7, 1182.0], [76.8, 1185.0], [76.9, 1186.0], [77.0, 1190.0], [77.1, 1192.0], [77.2, 1196.0], [77.3, 1197.0], [77.4, 1201.0], [77.5, 1204.0], [77.6, 1208.0], [77.7, 1211.0], [77.8, 1212.0], [77.9, 1214.0], [78.0, 1218.0], [78.1, 1223.0], [78.2, 1225.0], [78.3, 1226.0], [78.4, 1228.0], [78.5, 1229.0], [78.6, 1233.0], [78.7, 1236.0], [78.8, 1239.0], [78.9, 1241.0], [79.0, 1244.0], [79.1, 1248.0], [79.2, 1252.0], [79.3, 1257.0], [79.4, 1262.0], [79.5, 1265.0], [79.6, 1266.0], [79.7, 1267.0], [79.8, 1270.0], [79.9, 1271.0], [80.0, 1276.0], [80.1, 1278.0], [80.2, 1280.0], [80.3, 1284.0], [80.4, 1286.0], [80.5, 1289.0], [80.6, 1290.0], [80.7, 1296.0], [80.8, 1298.0], [80.9, 1301.0], [81.0, 1304.0], [81.1, 1310.0], [81.2, 1311.0], [81.3, 1313.0], [81.4, 1317.0], [81.5, 1317.0], [81.6, 1321.0], [81.7, 1327.0], [81.8, 1329.0], [81.9, 1332.0], [82.0, 1335.0], [82.1, 1336.0], [82.2, 1340.0], [82.3, 1343.0], [82.4, 1344.0], [82.5, 1347.0], [82.6, 1351.0], [82.7, 1353.0], [82.8, 1357.0], [82.9, 1360.0], [83.0, 1362.0], [83.1, 1364.0], [83.2, 1365.0], [83.3, 1367.0], [83.4, 1368.0], [83.5, 1371.0], [83.6, 1374.0], [83.7, 1374.0], [83.8, 1378.0], [83.9, 1381.0], [84.0, 1384.0], [84.1, 1386.0], [84.2, 1388.0], [84.3, 1389.0], [84.4, 1391.0], [84.5, 1394.0], [84.6, 1397.0], [84.7, 1400.0], [84.8, 1401.0], [84.9, 1404.0], [85.0, 1407.0], [85.1, 1411.0], [85.2, 1414.0], [85.3, 1416.0], [85.4, 1421.0], [85.5, 1424.0], [85.6, 1427.0], [85.7, 1428.0], [85.8, 1429.0], [85.9, 1434.0], [86.0, 1439.0], [86.1, 1441.0], [86.2, 1442.0], [86.3, 1446.0], [86.4, 1451.0], [86.5, 1453.0], [86.6, 1456.0], [86.7, 1458.0], [86.8, 1460.0], [86.9, 1465.0], [87.0, 1468.0], [87.1, 1471.0], [87.2, 1473.0], [87.3, 1476.0], [87.4, 1481.0], [87.5, 1486.0], [87.6, 1488.0], [87.7, 1490.0], [87.8, 1492.0], [87.9, 1494.0], [88.0, 1499.0], [88.1, 1502.0], [88.2, 1506.0], [88.3, 1509.0], [88.4, 1511.0], [88.5, 1520.0], [88.6, 1526.0], [88.7, 1530.0], [88.8, 1534.0], [88.9, 1537.0], [89.0, 1541.0], [89.1, 1542.0], [89.2, 1545.0], [89.3, 1548.0], [89.4, 1550.0], [89.5, 1556.0], [89.6, 1562.0], [89.7, 1566.0], [89.8, 1569.0], [89.9, 1575.0], [90.0, 1578.0], [90.1, 1586.0], [90.2, 1592.0], [90.3, 1595.0], [90.4, 1602.0], [90.5, 1612.0], [90.6, 1627.0], [90.7, 1633.0], [90.8, 1642.0], [90.9, 1646.0], [91.0, 1656.0], [91.1, 1661.0], [91.2, 1665.0], [91.3, 1672.0], [91.4, 1676.0], [91.5, 1682.0], [91.6, 1689.0], [91.7, 1697.0], [91.8, 1708.0], [91.9, 1714.0], [92.0, 1720.0], [92.1, 1724.0], [92.2, 1737.0], [92.3, 1740.0], [92.4, 1747.0], [92.5, 1754.0], [92.6, 1756.0], [92.7, 1767.0], [92.8, 1773.0], [92.9, 1783.0], [93.0, 1798.0], [93.1, 1800.0], [93.2, 1816.0], [93.3, 1826.0], [93.4, 1828.0], [93.5, 1833.0], [93.6, 1843.0], [93.7, 1848.0], [93.8, 1858.0], [93.9, 1863.0], [94.0, 1873.0], [94.1, 1876.0], [94.2, 1895.0], [94.3, 1900.0], [94.4, 1908.0], [94.5, 1920.0], [94.6, 1927.0], [94.7, 1934.0], [94.8, 1953.0], [94.9, 1958.0], [95.0, 1974.0], [95.1, 1981.0], [95.2, 1995.0], [95.3, 2017.0], [95.4, 2022.0], [95.5, 2034.0], [95.6, 2045.0], [95.7, 2058.0], [95.8, 2069.0], [95.9, 2081.0], [96.0, 2095.0], [96.1, 2107.0], [96.2, 2122.0], [96.3, 2142.0], [96.4, 2163.0], [96.5, 2180.0], [96.6, 2199.0], [96.7, 2206.0], [96.8, 2216.0], [96.9, 2226.0], [97.0, 2231.0], [97.1, 2249.0], [97.2, 2263.0], [97.3, 2287.0], [97.4, 2303.0], [97.5, 2353.0], [97.6, 2366.0], [97.7, 2377.0], [97.8, 2397.0], [97.9, 2412.0], [98.0, 2459.0], [98.1, 2484.0], [98.2, 2569.0], [98.3, 2584.0], [98.4, 2649.0], [98.5, 2665.0], [98.6, 2729.0], [98.7, 2766.0], [98.8, 2818.0], [98.9, 2865.0], [99.0, 3015.0], [99.1, 3120.0], [99.2, 3210.0], [99.3, 3304.0], [99.4, 3400.0], [99.5, 3549.0], [99.6, 3689.0], [99.7, 4392.0], [99.8, 4634.0], [99.9, 5222.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 566.0, "series": [{"data": [[600.0, 432.0], [700.0, 309.0], [800.0, 292.0], [900.0, 309.0], [1000.0, 289.0], [1100.0, 227.0], [1200.0, 180.0], [1300.0, 197.0], [1400.0, 175.0], [1500.0, 121.0], [1600.0, 72.0], [1700.0, 69.0], [1800.0, 63.0], [1900.0, 49.0], [2000.0, 42.0], [2100.0, 30.0], [2200.0, 39.0], [2300.0, 25.0], [2400.0, 14.0], [2500.0, 11.0], [2600.0, 13.0], [2800.0, 8.0], [2700.0, 10.0], [2900.0, 4.0], [3000.0, 5.0], [3100.0, 5.0], [3200.0, 5.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 5.0], [3700.0, 1.0], [3800.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 3.0], [5300.0, 1.0], [5200.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [7300.0, 1.0], [8800.0, 1.0], [100.0, 93.0], [200.0, 559.0], [300.0, 398.0], [400.0, 566.0], [500.0, 543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2951.0, "series": [{"data": [[0.0, 1618.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2951.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 621.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.845890410958903, "minX": 1.60231128E12, "maxY": 10.0, "series": [{"data": [[1.6023114E12, 10.0], [1.60231158E12, 10.0], [1.60231152E12, 10.0], [1.6023117E12, 9.845890410958903], [1.60231164E12, 10.0], [1.60231134E12, 10.0], [1.60231128E12, 10.0], [1.60231146E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023117E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 308.0, "minX": 1.0, "maxY": 3305.0, "series": [{"data": [[8.0, 478.0], [4.0, 588.0], [2.0, 1279.0], [1.0, 3305.0], [9.0, 586.0], [10.0, 868.5138942493244], [5.0, 1548.0], [6.0, 746.0], [3.0, 745.0], [7.0, 308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 868.8541706800229]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2199.883333333333, "minX": 1.60231128E12, "maxY": 3487635.566666667, "series": [{"data": [[1.6023114E12, 3487635.566666667], [1.60231158E12, 3484904.183333333], [1.60231152E12, 2673744.0833333335], [1.6023117E12, 1521294.3666666667], [1.60231164E12, 3025570.6333333333], [1.60231134E12, 3155825.816666667], [1.60231128E12, 3248577.0166666666], [1.60231146E12, 3375675.8333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023114E12, 5522.833333333333], [1.60231158E12, 5620.616666666667], [1.60231152E12, 4680.483333333334], [1.6023117E12, 2199.883333333333], [1.60231164E12, 5780.95], [1.60231134E12, 5439.933333333333], [1.60231128E12, 4721.966666666666], [1.60231146E12, 4617.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023117E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 783.4251968503938, "minX": 1.60231128E12, "maxY": 1045.5171232876705, "series": [{"data": [[1.6023114E12, 821.6222527472526], [1.60231158E12, 791.8368700265256], [1.60231152E12, 941.7315950920248], [1.6023117E12, 1045.5171232876705], [1.60231164E12, 783.4251968503938], [1.60231134E12, 821.5646258503407], [1.60231128E12, 933.3251533742322], [1.60231146E12, 951.9285714285714]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023117E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 782.2139107611555, "minX": 1.60231128E12, "maxY": 1043.7808219178075, "series": [{"data": [[1.6023114E12, 819.6991758241755], [1.60231158E12, 790.3885941644563], [1.60231152E12, 940.0214723926381], [1.6023117E12, 1043.7808219178075], [1.60231164E12, 782.2139107611555], [1.60231134E12, 819.8925170068026], [1.60231128E12, 931.2868098159499], [1.60231146E12, 949.8262987012981]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023117E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009615384615384621, "minX": 1.60231128E12, "maxY": 0.11349693251533739, "series": [{"data": [[1.6023114E12, 0.009615384615384621], [1.60231158E12, 0.013262599469496024], [1.60231152E12, 0.018404907975460127], [1.6023117E12, 0.013698630136986297], [1.60231164E12, 0.01181102362204724], [1.60231134E12, 0.014965986394557826], [1.60231128E12, 0.11349693251533739], [1.60231146E12, 0.012987012987012988]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023117E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60231128E12, "maxY": 8830.0, "series": [{"data": [[1.6023114E12, 3626.0], [1.60231158E12, 3251.0], [1.60231152E12, 8830.0], [1.6023117E12, 3851.0], [1.60231164E12, 3304.0], [1.60231134E12, 4738.0], [1.60231128E12, 5332.0], [1.60231146E12, 4404.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023114E12, 192.0], [1.60231158E12, 188.0], [1.60231152E12, 206.87699984431268], [1.6023117E12, 207.36999930143355], [1.60231164E12, 189.73399963617325], [1.60231134E12, 191.24799964904784], [1.60231128E12, 199.87699984431268], [1.60231146E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023114E12, 192.2072000694275], [1.60231158E12, 189.42350021600723], [1.60231152E12, 207.92940012454986], [1.6023117E12, 210.00700027942656], [1.60231164E12, 190.55370007276534], [1.60231134E12, 192.0], [1.60231128E12, 202.32350031137466], [1.60231146E12, 198.2166001176834]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023114E12, 192.0], [1.60231158E12, 188.51749972999096], [1.60231152E12, 207.40699984431268], [1.6023117E12, 208.83499965071678], [1.60231164E12, 190.24849990904332], [1.60231134E12, 191.98399982452392], [1.60231128E12, 201.01749961078167], [1.60231146E12, 198.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023114E12, 181.0], [1.60231158E12, 184.0], [1.60231152E12, 189.0], [1.6023117E12, 199.0], [1.60231164E12, 183.0], [1.60231134E12, 186.0], [1.60231128E12, 189.0], [1.60231146E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023114E12, 672.0], [1.60231158E12, 592.0], [1.60231152E12, 773.5], [1.6023117E12, 950.0], [1.60231164E12, 610.0], [1.60231134E12, 618.0], [1.60231128E12, 762.0], [1.60231146E12, 822.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023117E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 1.0, "maxY": 3305.0, "series": [{"data": [[3.0, 2509.0], [4.0, 1151.0], [5.0, 1181.0], [6.0, 1201.0], [7.0, 1016.0], [8.0, 913.5], [9.0, 1012.0], [10.0, 910.5], [11.0, 851.0], [12.0, 802.0], [13.0, 729.5], [14.0, 656.5], [15.0, 597.0], [16.0, 540.5], [1.0, 3305.0], [17.0, 550.5], [18.0, 528.0], [19.0, 436.0], [20.0, 319.0], [21.0, 437.0], [22.0, 384.0], [23.0, 423.0], [24.0, 416.0], [25.0, 410.5], [26.0, 424.5], [27.0, 437.0], [28.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 206.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 206.0, "minX": 1.0, "maxY": 3293.0, "series": [{"data": [[3.0, 2508.0], [4.0, 1147.0], [5.0, 1179.5], [6.0, 1194.5], [7.0, 1016.0], [8.0, 906.5], [9.0, 1010.0], [10.0, 908.0], [11.0, 851.0], [12.0, 800.5], [13.0, 729.0], [14.0, 654.5], [15.0, 596.0], [16.0, 540.0], [1.0, 3293.0], [17.0, 550.0], [18.0, 528.0], [19.0, 435.5], [20.0, 319.0], [21.0, 437.0], [22.0, 383.5], [23.0, 423.0], [24.0, 415.5], [25.0, 410.5], [26.0, 424.5], [27.0, 437.0], [28.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 206.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60231122E12, "maxY": 12.7, "series": [{"data": [[1.6023114E12, 12.133333333333333], [1.60231158E12, 12.566666666666666], [1.60231152E12, 10.866666666666667], [1.60231122E12, 0.16666666666666666], [1.6023117E12, 4.7], [1.60231164E12, 12.7], [1.60231134E12, 12.25], [1.60231128E12, 10.866666666666667], [1.60231146E12, 10.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023117E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231128E12, "maxY": 12.7, "series": [{"data": [[1.6023114E12, 12.116666666666667], [1.60231158E12, 12.566666666666666], [1.60231152E12, 10.866666666666667], [1.6023117E12, 4.866666666666666], [1.60231164E12, 12.7], [1.60231134E12, 12.25], [1.60231128E12, 10.866666666666667], [1.60231146E12, 10.266666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6023114E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023117E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231128E12, "maxY": 12.7, "series": [{"data": [[1.6023114E12, 12.116666666666667], [1.60231158E12, 12.566666666666666], [1.60231152E12, 10.866666666666667], [1.6023117E12, 4.866666666666666], [1.60231164E12, 12.7], [1.60231134E12, 12.25], [1.60231128E12, 10.866666666666667], [1.60231146E12, 10.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6023114E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023117E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231128E12, "maxY": 12.7, "series": [{"data": [[1.6023114E12, 12.116666666666667], [1.60231158E12, 12.566666666666666], [1.60231152E12, 10.866666666666667], [1.6023117E12, 4.866666666666666], [1.60231164E12, 12.7], [1.60231134E12, 12.25], [1.60231128E12, 10.866666666666667], [1.60231146E12, 10.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6023114E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023117E12, "title": "Total Transactions Per Second"}},
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

