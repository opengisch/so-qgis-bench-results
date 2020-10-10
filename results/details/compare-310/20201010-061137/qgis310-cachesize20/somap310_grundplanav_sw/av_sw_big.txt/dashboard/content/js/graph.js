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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 6158.0, "series": [{"data": [[0.0, 178.0], [0.1, 182.0], [0.2, 185.0], [0.3, 186.0], [0.4, 187.0], [0.5, 189.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 193.0], [1.1, 194.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 199.0], [1.9, 200.0], [2.0, 201.0], [2.1, 201.0], [2.2, 202.0], [2.3, 203.0], [2.4, 203.0], [2.5, 204.0], [2.6, 204.0], [2.7, 206.0], [2.8, 207.0], [2.9, 207.0], [3.0, 208.0], [3.1, 208.0], [3.2, 209.0], [3.3, 210.0], [3.4, 211.0], [3.5, 212.0], [3.6, 213.0], [3.7, 214.0], [3.8, 215.0], [3.9, 215.0], [4.0, 216.0], [4.1, 217.0], [4.2, 218.0], [4.3, 219.0], [4.4, 219.0], [4.5, 220.0], [4.6, 221.0], [4.7, 222.0], [4.8, 223.0], [4.9, 223.0], [5.0, 224.0], [5.1, 225.0], [5.2, 226.0], [5.3, 227.0], [5.4, 228.0], [5.5, 229.0], [5.6, 229.0], [5.7, 230.0], [5.8, 231.0], [5.9, 232.0], [6.0, 232.0], [6.1, 234.0], [6.2, 235.0], [6.3, 236.0], [6.4, 238.0], [6.5, 239.0], [6.6, 241.0], [6.7, 241.0], [6.8, 242.0], [6.9, 244.0], [7.0, 245.0], [7.1, 246.0], [7.2, 248.0], [7.3, 250.0], [7.4, 252.0], [7.5, 255.0], [7.6, 256.0], [7.7, 257.0], [7.8, 259.0], [7.9, 261.0], [8.0, 263.0], [8.1, 265.0], [8.2, 266.0], [8.3, 267.0], [8.4, 268.0], [8.5, 269.0], [8.6, 269.0], [8.7, 271.0], [8.8, 272.0], [8.9, 272.0], [9.0, 273.0], [9.1, 274.0], [9.2, 275.0], [9.3, 276.0], [9.4, 276.0], [9.5, 277.0], [9.6, 277.0], [9.7, 278.0], [9.8, 278.0], [9.9, 279.0], [10.0, 281.0], [10.1, 283.0], [10.2, 283.0], [10.3, 284.0], [10.4, 284.0], [10.5, 285.0], [10.6, 286.0], [10.7, 286.0], [10.8, 287.0], [10.9, 288.0], [11.0, 290.0], [11.1, 291.0], [11.2, 293.0], [11.3, 294.0], [11.4, 295.0], [11.5, 297.0], [11.6, 298.0], [11.7, 298.0], [11.8, 299.0], [11.9, 300.0], [12.0, 301.0], [12.1, 301.0], [12.2, 303.0], [12.3, 304.0], [12.4, 305.0], [12.5, 305.0], [12.6, 306.0], [12.7, 307.0], [12.8, 307.0], [12.9, 309.0], [13.0, 310.0], [13.1, 310.0], [13.2, 311.0], [13.3, 312.0], [13.4, 313.0], [13.5, 314.0], [13.6, 314.0], [13.7, 316.0], [13.8, 317.0], [13.9, 318.0], [14.0, 318.0], [14.1, 319.0], [14.2, 321.0], [14.3, 322.0], [14.4, 324.0], [14.5, 325.0], [14.6, 325.0], [14.7, 326.0], [14.8, 326.0], [14.9, 328.0], [15.0, 329.0], [15.1, 330.0], [15.2, 331.0], [15.3, 332.0], [15.4, 336.0], [15.5, 338.0], [15.6, 339.0], [15.7, 340.0], [15.8, 343.0], [15.9, 346.0], [16.0, 347.0], [16.1, 349.0], [16.2, 351.0], [16.3, 352.0], [16.4, 353.0], [16.5, 354.0], [16.6, 355.0], [16.7, 357.0], [16.8, 359.0], [16.9, 362.0], [17.0, 363.0], [17.1, 364.0], [17.2, 365.0], [17.3, 367.0], [17.4, 370.0], [17.5, 373.0], [17.6, 375.0], [17.7, 377.0], [17.8, 379.0], [17.9, 380.0], [18.0, 382.0], [18.1, 383.0], [18.2, 383.0], [18.3, 385.0], [18.4, 386.0], [18.5, 387.0], [18.6, 389.0], [18.7, 389.0], [18.8, 390.0], [18.9, 391.0], [19.0, 392.0], [19.1, 393.0], [19.2, 394.0], [19.3, 394.0], [19.4, 395.0], [19.5, 396.0], [19.6, 397.0], [19.7, 397.0], [19.8, 399.0], [19.9, 400.0], [20.0, 401.0], [20.1, 402.0], [20.2, 403.0], [20.3, 405.0], [20.4, 405.0], [20.5, 406.0], [20.6, 407.0], [20.7, 407.0], [20.8, 408.0], [20.9, 409.0], [21.0, 411.0], [21.1, 412.0], [21.2, 413.0], [21.3, 414.0], [21.4, 415.0], [21.5, 417.0], [21.6, 418.0], [21.7, 419.0], [21.8, 421.0], [21.9, 422.0], [22.0, 423.0], [22.1, 424.0], [22.2, 425.0], [22.3, 426.0], [22.4, 427.0], [22.5, 427.0], [22.6, 428.0], [22.7, 428.0], [22.8, 429.0], [22.9, 430.0], [23.0, 431.0], [23.1, 432.0], [23.2, 432.0], [23.3, 433.0], [23.4, 433.0], [23.5, 433.0], [23.6, 434.0], [23.7, 435.0], [23.8, 437.0], [23.9, 438.0], [24.0, 438.0], [24.1, 439.0], [24.2, 440.0], [24.3, 440.0], [24.4, 441.0], [24.5, 442.0], [24.6, 444.0], [24.7, 444.0], [24.8, 445.0], [24.9, 446.0], [25.0, 446.0], [25.1, 447.0], [25.2, 447.0], [25.3, 448.0], [25.4, 449.0], [25.5, 450.0], [25.6, 451.0], [25.7, 452.0], [25.8, 453.0], [25.9, 454.0], [26.0, 456.0], [26.1, 456.0], [26.2, 458.0], [26.3, 458.0], [26.4, 459.0], [26.5, 460.0], [26.6, 462.0], [26.7, 463.0], [26.8, 463.0], [26.9, 464.0], [27.0, 464.0], [27.1, 466.0], [27.2, 466.0], [27.3, 466.0], [27.4, 468.0], [27.5, 468.0], [27.6, 469.0], [27.7, 470.0], [27.8, 471.0], [27.9, 472.0], [28.0, 473.0], [28.1, 474.0], [28.2, 474.0], [28.3, 475.0], [28.4, 477.0], [28.5, 478.0], [28.6, 478.0], [28.7, 479.0], [28.8, 480.0], [28.9, 481.0], [29.0, 482.0], [29.1, 483.0], [29.2, 484.0], [29.3, 486.0], [29.4, 487.0], [29.5, 488.0], [29.6, 488.0], [29.7, 490.0], [29.8, 491.0], [29.9, 492.0], [30.0, 493.0], [30.1, 494.0], [30.2, 495.0], [30.3, 495.0], [30.4, 496.0], [30.5, 496.0], [30.6, 497.0], [30.7, 499.0], [30.8, 500.0], [30.9, 501.0], [31.0, 502.0], [31.1, 503.0], [31.2, 504.0], [31.3, 506.0], [31.4, 507.0], [31.5, 508.0], [31.6, 509.0], [31.7, 510.0], [31.8, 511.0], [31.9, 512.0], [32.0, 513.0], [32.1, 514.0], [32.2, 515.0], [32.3, 517.0], [32.4, 517.0], [32.5, 519.0], [32.6, 520.0], [32.7, 521.0], [32.8, 521.0], [32.9, 523.0], [33.0, 524.0], [33.1, 525.0], [33.2, 526.0], [33.3, 527.0], [33.4, 528.0], [33.5, 528.0], [33.6, 530.0], [33.7, 530.0], [33.8, 531.0], [33.9, 531.0], [34.0, 532.0], [34.1, 533.0], [34.2, 534.0], [34.3, 535.0], [34.4, 537.0], [34.5, 538.0], [34.6, 539.0], [34.7, 540.0], [34.8, 541.0], [34.9, 542.0], [35.0, 543.0], [35.1, 543.0], [35.2, 544.0], [35.3, 545.0], [35.4, 547.0], [35.5, 548.0], [35.6, 549.0], [35.7, 550.0], [35.8, 551.0], [35.9, 552.0], [36.0, 553.0], [36.1, 554.0], [36.2, 555.0], [36.3, 556.0], [36.4, 559.0], [36.5, 561.0], [36.6, 562.0], [36.7, 563.0], [36.8, 563.0], [36.9, 564.0], [37.0, 566.0], [37.1, 567.0], [37.2, 568.0], [37.3, 569.0], [37.4, 570.0], [37.5, 570.0], [37.6, 571.0], [37.7, 572.0], [37.8, 573.0], [37.9, 573.0], [38.0, 574.0], [38.1, 574.0], [38.2, 575.0], [38.3, 575.0], [38.4, 576.0], [38.5, 577.0], [38.6, 578.0], [38.7, 579.0], [38.8, 580.0], [38.9, 580.0], [39.0, 581.0], [39.1, 582.0], [39.2, 583.0], [39.3, 583.0], [39.4, 584.0], [39.5, 585.0], [39.6, 585.0], [39.7, 586.0], [39.8, 588.0], [39.9, 589.0], [40.0, 590.0], [40.1, 591.0], [40.2, 591.0], [40.3, 592.0], [40.4, 594.0], [40.5, 595.0], [40.6, 596.0], [40.7, 597.0], [40.8, 598.0], [40.9, 600.0], [41.0, 601.0], [41.1, 602.0], [41.2, 604.0], [41.3, 604.0], [41.4, 605.0], [41.5, 607.0], [41.6, 609.0], [41.7, 609.0], [41.8, 610.0], [41.9, 611.0], [42.0, 612.0], [42.1, 613.0], [42.2, 615.0], [42.3, 616.0], [42.4, 617.0], [42.5, 618.0], [42.6, 620.0], [42.7, 620.0], [42.8, 623.0], [42.9, 624.0], [43.0, 625.0], [43.1, 626.0], [43.2, 627.0], [43.3, 628.0], [43.4, 629.0], [43.5, 631.0], [43.6, 633.0], [43.7, 634.0], [43.8, 635.0], [43.9, 635.0], [44.0, 637.0], [44.1, 638.0], [44.2, 640.0], [44.3, 640.0], [44.4, 641.0], [44.5, 642.0], [44.6, 643.0], [44.7, 643.0], [44.8, 645.0], [44.9, 646.0], [45.0, 647.0], [45.1, 649.0], [45.2, 651.0], [45.3, 651.0], [45.4, 652.0], [45.5, 653.0], [45.6, 654.0], [45.7, 655.0], [45.8, 656.0], [45.9, 657.0], [46.0, 659.0], [46.1, 660.0], [46.2, 661.0], [46.3, 662.0], [46.4, 663.0], [46.5, 664.0], [46.6, 665.0], [46.7, 666.0], [46.8, 668.0], [46.9, 668.0], [47.0, 669.0], [47.1, 670.0], [47.2, 673.0], [47.3, 674.0], [47.4, 676.0], [47.5, 677.0], [47.6, 678.0], [47.7, 680.0], [47.8, 681.0], [47.9, 683.0], [48.0, 684.0], [48.1, 685.0], [48.2, 687.0], [48.3, 688.0], [48.4, 689.0], [48.5, 690.0], [48.6, 692.0], [48.7, 693.0], [48.8, 694.0], [48.9, 695.0], [49.0, 697.0], [49.1, 698.0], [49.2, 698.0], [49.3, 700.0], [49.4, 702.0], [49.5, 704.0], [49.6, 706.0], [49.7, 707.0], [49.8, 710.0], [49.9, 711.0], [50.0, 712.0], [50.1, 713.0], [50.2, 714.0], [50.3, 716.0], [50.4, 717.0], [50.5, 718.0], [50.6, 719.0], [50.7, 721.0], [50.8, 723.0], [50.9, 726.0], [51.0, 728.0], [51.1, 729.0], [51.2, 731.0], [51.3, 732.0], [51.4, 734.0], [51.5, 734.0], [51.6, 735.0], [51.7, 736.0], [51.8, 738.0], [51.9, 739.0], [52.0, 741.0], [52.1, 741.0], [52.2, 744.0], [52.3, 745.0], [52.4, 746.0], [52.5, 748.0], [52.6, 751.0], [52.7, 753.0], [52.8, 755.0], [52.9, 757.0], [53.0, 759.0], [53.1, 761.0], [53.2, 762.0], [53.3, 764.0], [53.4, 767.0], [53.5, 770.0], [53.6, 771.0], [53.7, 772.0], [53.8, 773.0], [53.9, 775.0], [54.0, 778.0], [54.1, 779.0], [54.2, 780.0], [54.3, 782.0], [54.4, 783.0], [54.5, 784.0], [54.6, 787.0], [54.7, 787.0], [54.8, 789.0], [54.9, 792.0], [55.0, 794.0], [55.1, 795.0], [55.2, 796.0], [55.3, 798.0], [55.4, 800.0], [55.5, 803.0], [55.6, 804.0], [55.7, 807.0], [55.8, 808.0], [55.9, 809.0], [56.0, 812.0], [56.1, 813.0], [56.2, 814.0], [56.3, 815.0], [56.4, 818.0], [56.5, 820.0], [56.6, 822.0], [56.7, 823.0], [56.8, 824.0], [56.9, 825.0], [57.0, 827.0], [57.1, 830.0], [57.2, 832.0], [57.3, 833.0], [57.4, 835.0], [57.5, 836.0], [57.6, 838.0], [57.7, 839.0], [57.8, 842.0], [57.9, 845.0], [58.0, 846.0], [58.1, 848.0], [58.2, 849.0], [58.3, 850.0], [58.4, 851.0], [58.5, 855.0], [58.6, 857.0], [58.7, 862.0], [58.8, 863.0], [58.9, 864.0], [59.0, 866.0], [59.1, 867.0], [59.2, 869.0], [59.3, 870.0], [59.4, 871.0], [59.5, 874.0], [59.6, 875.0], [59.7, 877.0], [59.8, 879.0], [59.9, 880.0], [60.0, 882.0], [60.1, 884.0], [60.2, 885.0], [60.3, 887.0], [60.4, 890.0], [60.5, 891.0], [60.6, 891.0], [60.7, 893.0], [60.8, 894.0], [60.9, 898.0], [61.0, 900.0], [61.1, 901.0], [61.2, 903.0], [61.3, 907.0], [61.4, 907.0], [61.5, 909.0], [61.6, 910.0], [61.7, 912.0], [61.8, 913.0], [61.9, 915.0], [62.0, 918.0], [62.1, 919.0], [62.2, 921.0], [62.3, 923.0], [62.4, 925.0], [62.5, 927.0], [62.6, 928.0], [62.7, 930.0], [62.8, 931.0], [62.9, 932.0], [63.0, 936.0], [63.1, 937.0], [63.2, 938.0], [63.3, 941.0], [63.4, 944.0], [63.5, 945.0], [63.6, 947.0], [63.7, 947.0], [63.8, 949.0], [63.9, 950.0], [64.0, 951.0], [64.1, 953.0], [64.2, 956.0], [64.3, 957.0], [64.4, 958.0], [64.5, 960.0], [64.6, 962.0], [64.7, 964.0], [64.8, 966.0], [64.9, 968.0], [65.0, 970.0], [65.1, 971.0], [65.2, 973.0], [65.3, 975.0], [65.4, 977.0], [65.5, 980.0], [65.6, 981.0], [65.7, 982.0], [65.8, 984.0], [65.9, 987.0], [66.0, 989.0], [66.1, 990.0], [66.2, 992.0], [66.3, 992.0], [66.4, 996.0], [66.5, 998.0], [66.6, 999.0], [66.7, 1001.0], [66.8, 1003.0], [66.9, 1003.0], [67.0, 1004.0], [67.1, 1006.0], [67.2, 1008.0], [67.3, 1009.0], [67.4, 1012.0], [67.5, 1014.0], [67.6, 1017.0], [67.7, 1019.0], [67.8, 1021.0], [67.9, 1022.0], [68.0, 1024.0], [68.1, 1026.0], [68.2, 1028.0], [68.3, 1029.0], [68.4, 1030.0], [68.5, 1032.0], [68.6, 1034.0], [68.7, 1036.0], [68.8, 1037.0], [68.9, 1040.0], [69.0, 1043.0], [69.1, 1044.0], [69.2, 1046.0], [69.3, 1047.0], [69.4, 1049.0], [69.5, 1050.0], [69.6, 1052.0], [69.7, 1053.0], [69.8, 1057.0], [69.9, 1059.0], [70.0, 1061.0], [70.1, 1062.0], [70.2, 1064.0], [70.3, 1066.0], [70.4, 1067.0], [70.5, 1068.0], [70.6, 1069.0], [70.7, 1072.0], [70.8, 1072.0], [70.9, 1076.0], [71.0, 1078.0], [71.1, 1081.0], [71.2, 1082.0], [71.3, 1084.0], [71.4, 1086.0], [71.5, 1088.0], [71.6, 1090.0], [71.7, 1091.0], [71.8, 1092.0], [71.9, 1094.0], [72.0, 1097.0], [72.1, 1097.0], [72.2, 1100.0], [72.3, 1102.0], [72.4, 1105.0], [72.5, 1105.0], [72.6, 1108.0], [72.7, 1111.0], [72.8, 1116.0], [72.9, 1119.0], [73.0, 1121.0], [73.1, 1123.0], [73.2, 1124.0], [73.3, 1125.0], [73.4, 1128.0], [73.5, 1131.0], [73.6, 1133.0], [73.7, 1135.0], [73.8, 1137.0], [73.9, 1139.0], [74.0, 1142.0], [74.1, 1144.0], [74.2, 1146.0], [74.3, 1148.0], [74.4, 1150.0], [74.5, 1151.0], [74.6, 1155.0], [74.7, 1156.0], [74.8, 1158.0], [74.9, 1163.0], [75.0, 1164.0], [75.1, 1169.0], [75.2, 1171.0], [75.3, 1172.0], [75.4, 1173.0], [75.5, 1175.0], [75.6, 1178.0], [75.7, 1179.0], [75.8, 1181.0], [75.9, 1182.0], [76.0, 1187.0], [76.1, 1189.0], [76.2, 1191.0], [76.3, 1193.0], [76.4, 1196.0], [76.5, 1200.0], [76.6, 1202.0], [76.7, 1206.0], [76.8, 1207.0], [76.9, 1209.0], [77.0, 1211.0], [77.1, 1213.0], [77.2, 1214.0], [77.3, 1216.0], [77.4, 1217.0], [77.5, 1220.0], [77.6, 1223.0], [77.7, 1224.0], [77.8, 1226.0], [77.9, 1231.0], [78.0, 1235.0], [78.1, 1236.0], [78.2, 1239.0], [78.3, 1241.0], [78.4, 1243.0], [78.5, 1245.0], [78.6, 1247.0], [78.7, 1250.0], [78.8, 1253.0], [78.9, 1256.0], [79.0, 1258.0], [79.1, 1260.0], [79.2, 1262.0], [79.3, 1266.0], [79.4, 1266.0], [79.5, 1269.0], [79.6, 1272.0], [79.7, 1275.0], [79.8, 1277.0], [79.9, 1280.0], [80.0, 1281.0], [80.1, 1283.0], [80.2, 1285.0], [80.3, 1287.0], [80.4, 1290.0], [80.5, 1292.0], [80.6, 1295.0], [80.7, 1296.0], [80.8, 1297.0], [80.9, 1300.0], [81.0, 1301.0], [81.1, 1302.0], [81.2, 1305.0], [81.3, 1307.0], [81.4, 1311.0], [81.5, 1313.0], [81.6, 1316.0], [81.7, 1320.0], [81.8, 1322.0], [81.9, 1324.0], [82.0, 1327.0], [82.1, 1330.0], [82.2, 1335.0], [82.3, 1335.0], [82.4, 1337.0], [82.5, 1339.0], [82.6, 1341.0], [82.7, 1342.0], [82.8, 1345.0], [82.9, 1347.0], [83.0, 1349.0], [83.1, 1351.0], [83.2, 1352.0], [83.3, 1356.0], [83.4, 1358.0], [83.5, 1360.0], [83.6, 1363.0], [83.7, 1365.0], [83.8, 1367.0], [83.9, 1370.0], [84.0, 1373.0], [84.1, 1374.0], [84.2, 1378.0], [84.3, 1383.0], [84.4, 1386.0], [84.5, 1387.0], [84.6, 1390.0], [84.7, 1392.0], [84.8, 1394.0], [84.9, 1396.0], [85.0, 1398.0], [85.1, 1401.0], [85.2, 1402.0], [85.3, 1406.0], [85.4, 1409.0], [85.5, 1413.0], [85.6, 1416.0], [85.7, 1419.0], [85.8, 1424.0], [85.9, 1426.0], [86.0, 1429.0], [86.1, 1433.0], [86.2, 1439.0], [86.3, 1441.0], [86.4, 1445.0], [86.5, 1449.0], [86.6, 1451.0], [86.7, 1455.0], [86.8, 1457.0], [86.9, 1461.0], [87.0, 1466.0], [87.1, 1467.0], [87.2, 1469.0], [87.3, 1476.0], [87.4, 1478.0], [87.5, 1481.0], [87.6, 1484.0], [87.7, 1487.0], [87.8, 1491.0], [87.9, 1494.0], [88.0, 1497.0], [88.1, 1499.0], [88.2, 1502.0], [88.3, 1504.0], [88.4, 1510.0], [88.5, 1512.0], [88.6, 1515.0], [88.7, 1518.0], [88.8, 1522.0], [88.9, 1523.0], [89.0, 1526.0], [89.1, 1533.0], [89.2, 1540.0], [89.3, 1549.0], [89.4, 1553.0], [89.5, 1556.0], [89.6, 1562.0], [89.7, 1564.0], [89.8, 1569.0], [89.9, 1574.0], [90.0, 1585.0], [90.1, 1593.0], [90.2, 1595.0], [90.3, 1599.0], [90.4, 1605.0], [90.5, 1611.0], [90.6, 1617.0], [90.7, 1628.0], [90.8, 1633.0], [90.9, 1641.0], [91.0, 1643.0], [91.1, 1651.0], [91.2, 1659.0], [91.3, 1667.0], [91.4, 1671.0], [91.5, 1678.0], [91.6, 1688.0], [91.7, 1696.0], [91.8, 1702.0], [91.9, 1713.0], [92.0, 1721.0], [92.1, 1728.0], [92.2, 1731.0], [92.3, 1739.0], [92.4, 1750.0], [92.5, 1756.0], [92.6, 1763.0], [92.7, 1774.0], [92.8, 1780.0], [92.9, 1788.0], [93.0, 1795.0], [93.1, 1802.0], [93.2, 1809.0], [93.3, 1816.0], [93.4, 1826.0], [93.5, 1830.0], [93.6, 1835.0], [93.7, 1839.0], [93.8, 1846.0], [93.9, 1848.0], [94.0, 1862.0], [94.1, 1870.0], [94.2, 1876.0], [94.3, 1893.0], [94.4, 1910.0], [94.5, 1914.0], [94.6, 1922.0], [94.7, 1935.0], [94.8, 1953.0], [94.9, 1964.0], [95.0, 1975.0], [95.1, 1984.0], [95.2, 1993.0], [95.3, 2006.0], [95.4, 2024.0], [95.5, 2029.0], [95.6, 2045.0], [95.7, 2052.0], [95.8, 2058.0], [95.9, 2067.0], [96.0, 2077.0], [96.1, 2085.0], [96.2, 2094.0], [96.3, 2105.0], [96.4, 2116.0], [96.5, 2124.0], [96.6, 2143.0], [96.7, 2157.0], [96.8, 2167.0], [96.9, 2183.0], [97.0, 2198.0], [97.1, 2210.0], [97.2, 2219.0], [97.3, 2241.0], [97.4, 2253.0], [97.5, 2288.0], [97.6, 2316.0], [97.7, 2332.0], [97.8, 2365.0], [97.9, 2385.0], [98.0, 2421.0], [98.1, 2442.0], [98.2, 2489.0], [98.3, 2516.0], [98.4, 2562.0], [98.5, 2585.0], [98.6, 2607.0], [98.7, 2648.0], [98.8, 2712.0], [98.9, 2801.0], [99.0, 2868.0], [99.1, 2979.0], [99.2, 3058.0], [99.3, 3091.0], [99.4, 3153.0], [99.5, 3347.0], [99.6, 3652.0], [99.7, 3951.0], [99.8, 4400.0], [99.9, 5154.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 566.0, "series": [{"data": [[600.0, 434.0], [700.0, 316.0], [800.0, 292.0], [900.0, 296.0], [1000.0, 287.0], [1100.0, 224.0], [1200.0, 228.0], [1300.0, 216.0], [1400.0, 160.0], [1500.0, 113.0], [1600.0, 75.0], [1700.0, 67.0], [1800.0, 68.0], [1900.0, 47.0], [2000.0, 50.0], [2100.0, 42.0], [2200.0, 27.0], [2300.0, 19.0], [2400.0, 18.0], [2500.0, 15.0], [2600.0, 11.0], [2700.0, 6.0], [2800.0, 9.0], [2900.0, 4.0], [3000.0, 9.0], [3100.0, 5.0], [3200.0, 3.0], [3300.0, 4.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 3.0], [4100.0, 1.0], [4300.0, 1.0], [4200.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4700.0, 2.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5800.0, 2.0], [6100.0, 1.0], [100.0, 96.0], [200.0, 518.0], [300.0, 417.0], [400.0, 566.0], [500.0, 525.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2973.0, "series": [{"data": [[0.0, 1603.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2973.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 614.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.843205574912892, "minX": 1.60231266E12, "maxY": 10.0, "series": [{"data": [[1.60231266E12, 10.0], [1.60231314E12, 9.843205574912892], [1.60231296E12, 10.0], [1.60231302E12, 10.0], [1.60231284E12, 10.0], [1.6023129E12, 10.0], [1.60231272E12, 10.0], [1.60231278E12, 10.0], [1.60231308E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 277.0, "minX": 1.0, "maxY": 2266.0, "series": [{"data": [[8.0, 1088.0], [4.0, 659.0], [2.0, 1066.0], [1.0, 2266.0], [9.0, 277.0], [10.0, 869.811655731378], [5.0, 749.0], [6.0, 1363.0], [3.0, 552.0], [7.0, 1829.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 870.200924677326]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 99.35, "minX": 1.60231266E12, "maxY": 3479828.816666667, "series": [{"data": [[1.60231266E12, 86591.3], [1.60231314E12, 1506234.7166666666], [1.60231296E12, 2805421.95], [1.60231302E12, 3479828.816666667], [1.60231284E12, 3438290.1], [1.6023129E12, 3376451.2333333334], [1.60231272E12, 3160573.5166666666], [1.60231278E12, 3018220.2666666666], [1.60231308E12, 3100637.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231266E12, 99.35], [1.60231314E12, 2161.2833333333333], [1.60231296E12, 4611.483333333334], [1.60231302E12, 5604.633333333333], [1.60231284E12, 5509.866666666667], [1.6023129E12, 4729.216666666666], [1.60231272E12, 4628.583333333333], [1.60231278E12, 5233.45], [1.60231308E12, 6006.183333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 757.6767676767678, "minX": 1.60231266E12, "maxY": 1827.3846153846157, "series": [{"data": [[1.60231266E12, 1827.3846153846157], [1.60231314E12, 1024.3414634146347], [1.60231296E12, 946.7076205287711], [1.60231302E12, 794.4316069057096], [1.60231284E12, 825.5777166437421], [1.6023129E12, 932.0810810810802], [1.60231272E12, 940.0218750000005], [1.60231278E12, 854.8274398868464], [1.60231308E12, 757.6767676767678]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 756.4356060606058, "minX": 1.60231266E12, "maxY": 1824.7692307692307, "series": [{"data": [[1.60231266E12, 1824.7692307692307], [1.60231314E12, 1022.7839721254347], [1.60231296E12, 945.0793157076206], [1.60231302E12, 792.9335989375832], [1.60231284E12, 823.6629986244833], [1.6023129E12, 930.0635930047696], [1.60231272E12, 937.9859375000007], [1.60231278E12, 853.1258840169734], [1.60231308E12, 756.4356060606058]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011004126547455294, "minX": 1.60231266E12, "maxY": 6.3076923076923075, "series": [{"data": [[1.60231266E12, 6.3076923076923075], [1.60231314E12, 0.013937282229965155], [1.60231296E12, 0.012441679626749613], [1.60231302E12, 0.014608233731739721], [1.60231284E12, 0.011004126547455294], [1.6023129E12, 0.011128775834658182], [1.60231272E12, 0.03593750000000001], [1.60231278E12, 0.011315417256011321], [1.60231308E12, 0.01262626262626262]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60231266E12, "maxY": 6158.0, "series": [{"data": [[1.60231266E12, 3435.0], [1.60231314E12, 3974.0], [1.60231296E12, 6158.0], [1.60231302E12, 2622.0], [1.60231284E12, 3347.0], [1.6023129E12, 4793.0], [1.60231272E12, 5892.0], [1.60231278E12, 4734.0], [1.60231308E12, 3073.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231266E12, 274.0], [1.60231314E12, 226.95999965667724], [1.60231296E12, 200.7759990787506], [1.60231302E12, 192.7859998202324], [1.60231284E12, 193.5429998266697], [1.6023129E12, 186.66999984979628], [1.60231272E12, 205.30699954152107], [1.60231278E12, 197.37199983119964], [1.60231308E12, 186.27399962186814]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231266E12, 274.0], [1.60231314E12, 228.2560001373291], [1.60231296E12, 202.0], [1.60231302E12, 193.0], [1.60231284E12, 194.39460013866426], [1.6023129E12, 187.0], [1.60231272E12, 206.34590006113052], [1.60231278E12, 198.00920006752014], [1.60231308E12, 187.70140015125276]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231266E12, 274.0], [1.60231314E12, 227.67999982833862], [1.60231296E12, 202.0], [1.60231302E12, 193.0], [1.60231284E12, 193.90649991333484], [1.6023129E12, 186.98499992489815], [1.60231272E12, 206.08949992358686], [1.60231278E12, 197.72599991559983], [1.60231308E12, 187.06699981093408]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231266E12, 274.0], [1.60231314E12, 211.0], [1.60231296E12, 189.0], [1.60231302E12, 182.0], [1.60231284E12, 185.0], [1.6023129E12, 179.0], [1.60231272E12, 193.0], [1.60231278E12, 185.0], [1.60231308E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231266E12, 2425.0], [1.60231314E12, 914.0], [1.60231296E12, 811.0], [1.60231302E12, 633.0], [1.60231284E12, 659.0], [1.6023129E12, 795.0], [1.60231272E12, 801.5], [1.60231278E12, 627.0], [1.60231308E12, 587.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231314E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 215.0, "minX": 2.0, "maxY": 2294.5, "series": [{"data": [[2.0, 2294.5], [3.0, 1275.0], [4.0, 1959.5], [5.0, 1314.5], [6.0, 1149.5], [7.0, 1116.0], [8.0, 976.5], [9.0, 1007.0], [10.0, 877.5], [11.0, 875.5], [12.0, 761.0], [13.0, 754.0], [14.0, 669.0], [15.0, 595.0], [16.0, 592.5], [17.0, 528.0], [18.0, 449.5], [19.0, 446.0], [20.0, 463.0], [21.0, 465.0], [22.0, 439.5], [23.0, 440.0], [24.0, 404.0], [25.0, 414.0], [26.0, 436.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 215.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 215.0, "minX": 2.0, "maxY": 2285.5, "series": [{"data": [[2.0, 2285.5], [3.0, 1273.0], [4.0, 1948.0], [5.0, 1314.5], [6.0, 1146.5], [7.0, 1113.0], [8.0, 975.0], [9.0, 1006.0], [10.0, 874.5], [11.0, 874.5], [12.0, 760.0], [13.0, 753.0], [14.0, 668.5], [15.0, 595.0], [16.0, 592.0], [17.0, 528.0], [18.0, 448.5], [19.0, 446.0], [20.0, 462.0], [21.0, 465.0], [22.0, 439.5], [23.0, 439.5], [24.0, 404.0], [25.0, 414.0], [26.0, 436.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 215.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60231266E12, "maxY": 13.2, "series": [{"data": [[1.60231266E12, 0.38333333333333336], [1.60231314E12, 4.616666666666666], [1.60231296E12, 10.716666666666667], [1.60231302E12, 12.55], [1.60231284E12, 12.116666666666667], [1.6023129E12, 10.483333333333333], [1.60231272E12, 10.666666666666666], [1.60231278E12, 11.783333333333333], [1.60231308E12, 13.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231266E12, "maxY": 13.2, "series": [{"data": [[1.60231266E12, 0.21666666666666667], [1.60231314E12, 4.783333333333333], [1.60231296E12, 10.716666666666667], [1.60231302E12, 12.55], [1.60231284E12, 12.1], [1.6023129E12, 10.483333333333333], [1.60231272E12, 10.666666666666666], [1.60231278E12, 11.783333333333333], [1.60231308E12, 13.2]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60231284E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60231314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231266E12, "maxY": 13.2, "series": [{"data": [[1.60231266E12, 0.21666666666666667], [1.60231314E12, 4.783333333333333], [1.60231296E12, 10.716666666666667], [1.60231302E12, 12.55], [1.60231284E12, 12.1], [1.6023129E12, 10.483333333333333], [1.60231272E12, 10.666666666666666], [1.60231278E12, 11.783333333333333], [1.60231308E12, 13.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60231284E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60231266E12, "maxY": 13.2, "series": [{"data": [[1.60231266E12, 0.21666666666666667], [1.60231314E12, 4.783333333333333], [1.60231296E12, 10.716666666666667], [1.60231302E12, 12.55], [1.60231284E12, 12.1], [1.6023129E12, 10.483333333333333], [1.60231272E12, 10.666666666666666], [1.60231278E12, 11.783333333333333], [1.60231308E12, 13.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60231284E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60231314E12, "title": "Total Transactions Per Second"}},
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

