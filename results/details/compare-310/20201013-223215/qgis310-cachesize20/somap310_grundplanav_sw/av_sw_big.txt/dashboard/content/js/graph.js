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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 5957.0, "series": [{"data": [[0.0, 178.0], [0.1, 183.0], [0.2, 185.0], [0.3, 187.0], [0.4, 188.0], [0.5, 189.0], [0.6, 190.0], [0.7, 191.0], [0.8, 192.0], [0.9, 193.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 196.0], [1.5, 197.0], [1.6, 198.0], [1.7, 199.0], [1.8, 199.0], [1.9, 200.0], [2.0, 202.0], [2.1, 203.0], [2.2, 204.0], [2.3, 205.0], [2.4, 207.0], [2.5, 208.0], [2.6, 208.0], [2.7, 209.0], [2.8, 210.0], [2.9, 211.0], [3.0, 212.0], [3.1, 212.0], [3.2, 213.0], [3.3, 214.0], [3.4, 216.0], [3.5, 217.0], [3.6, 217.0], [3.7, 218.0], [3.8, 218.0], [3.9, 218.0], [4.0, 219.0], [4.1, 220.0], [4.2, 221.0], [4.3, 222.0], [4.4, 223.0], [4.5, 224.0], [4.6, 225.0], [4.7, 225.0], [4.8, 225.0], [4.9, 226.0], [5.0, 226.0], [5.1, 227.0], [5.2, 228.0], [5.3, 228.0], [5.4, 229.0], [5.5, 229.0], [5.6, 230.0], [5.7, 231.0], [5.8, 231.0], [5.9, 232.0], [6.0, 232.0], [6.1, 233.0], [6.2, 233.0], [6.3, 234.0], [6.4, 235.0], [6.5, 235.0], [6.6, 236.0], [6.7, 238.0], [6.8, 239.0], [6.9, 240.0], [7.0, 244.0], [7.1, 245.0], [7.2, 246.0], [7.3, 248.0], [7.4, 248.0], [7.5, 250.0], [7.6, 251.0], [7.7, 252.0], [7.8, 253.0], [7.9, 254.0], [8.0, 256.0], [8.1, 257.0], [8.2, 259.0], [8.3, 259.0], [8.4, 261.0], [8.5, 263.0], [8.6, 264.0], [8.7, 265.0], [8.8, 266.0], [8.9, 267.0], [9.0, 268.0], [9.1, 269.0], [9.2, 270.0], [9.3, 271.0], [9.4, 272.0], [9.5, 273.0], [9.6, 273.0], [9.7, 274.0], [9.8, 275.0], [9.9, 275.0], [10.0, 276.0], [10.1, 277.0], [10.2, 277.0], [10.3, 278.0], [10.4, 279.0], [10.5, 279.0], [10.6, 280.0], [10.7, 281.0], [10.8, 281.0], [10.9, 281.0], [11.0, 282.0], [11.1, 283.0], [11.2, 284.0], [11.3, 285.0], [11.4, 285.0], [11.5, 286.0], [11.6, 287.0], [11.7, 287.0], [11.8, 289.0], [11.9, 290.0], [12.0, 291.0], [12.1, 291.0], [12.2, 293.0], [12.3, 294.0], [12.4, 294.0], [12.5, 296.0], [12.6, 297.0], [12.7, 298.0], [12.8, 299.0], [12.9, 302.0], [13.0, 303.0], [13.1, 303.0], [13.2, 304.0], [13.3, 305.0], [13.4, 306.0], [13.5, 307.0], [13.6, 307.0], [13.7, 308.0], [13.8, 309.0], [13.9, 310.0], [14.0, 311.0], [14.1, 311.0], [14.2, 312.0], [14.3, 314.0], [14.4, 315.0], [14.5, 317.0], [14.6, 319.0], [14.7, 319.0], [14.8, 320.0], [14.9, 321.0], [15.0, 322.0], [15.1, 323.0], [15.2, 325.0], [15.3, 326.0], [15.4, 327.0], [15.5, 327.0], [15.6, 329.0], [15.7, 330.0], [15.8, 331.0], [15.9, 333.0], [16.0, 335.0], [16.1, 336.0], [16.2, 337.0], [16.3, 339.0], [16.4, 341.0], [16.5, 343.0], [16.6, 344.0], [16.7, 344.0], [16.8, 346.0], [16.9, 348.0], [17.0, 351.0], [17.1, 355.0], [17.2, 358.0], [17.3, 359.0], [17.4, 362.0], [17.5, 364.0], [17.6, 367.0], [17.7, 368.0], [17.8, 370.0], [17.9, 372.0], [18.0, 373.0], [18.1, 374.0], [18.2, 375.0], [18.3, 376.0], [18.4, 378.0], [18.5, 379.0], [18.6, 380.0], [18.7, 381.0], [18.8, 382.0], [18.9, 383.0], [19.0, 385.0], [19.1, 385.0], [19.2, 387.0], [19.3, 387.0], [19.4, 389.0], [19.5, 391.0], [19.6, 391.0], [19.7, 393.0], [19.8, 394.0], [19.9, 395.0], [20.0, 396.0], [20.1, 396.0], [20.2, 397.0], [20.3, 398.0], [20.4, 400.0], [20.5, 400.0], [20.6, 400.0], [20.7, 401.0], [20.8, 402.0], [20.9, 403.0], [21.0, 404.0], [21.1, 405.0], [21.2, 406.0], [21.3, 407.0], [21.4, 408.0], [21.5, 408.0], [21.6, 409.0], [21.7, 410.0], [21.8, 411.0], [21.9, 412.0], [22.0, 413.0], [22.1, 413.0], [22.2, 414.0], [22.3, 415.0], [22.4, 416.0], [22.5, 416.0], [22.6, 417.0], [22.7, 418.0], [22.8, 419.0], [22.9, 419.0], [23.0, 420.0], [23.1, 421.0], [23.2, 422.0], [23.3, 424.0], [23.4, 425.0], [23.5, 426.0], [23.6, 427.0], [23.7, 428.0], [23.8, 428.0], [23.9, 430.0], [24.0, 430.0], [24.1, 431.0], [24.2, 432.0], [24.3, 433.0], [24.4, 434.0], [24.5, 435.0], [24.6, 435.0], [24.7, 436.0], [24.8, 437.0], [24.9, 437.0], [25.0, 438.0], [25.1, 439.0], [25.2, 440.0], [25.3, 441.0], [25.4, 443.0], [25.5, 443.0], [25.6, 445.0], [25.7, 446.0], [25.8, 446.0], [25.9, 447.0], [26.0, 448.0], [26.1, 448.0], [26.2, 449.0], [26.3, 449.0], [26.4, 450.0], [26.5, 451.0], [26.6, 452.0], [26.7, 452.0], [26.8, 453.0], [26.9, 454.0], [27.0, 454.0], [27.1, 455.0], [27.2, 456.0], [27.3, 457.0], [27.4, 458.0], [27.5, 460.0], [27.6, 461.0], [27.7, 461.0], [27.8, 463.0], [27.9, 464.0], [28.0, 465.0], [28.1, 466.0], [28.2, 466.0], [28.3, 467.0], [28.4, 468.0], [28.5, 468.0], [28.6, 469.0], [28.7, 470.0], [28.8, 471.0], [28.9, 472.0], [29.0, 472.0], [29.1, 473.0], [29.2, 474.0], [29.3, 474.0], [29.4, 475.0], [29.5, 476.0], [29.6, 476.0], [29.7, 477.0], [29.8, 479.0], [29.9, 480.0], [30.0, 481.0], [30.1, 482.0], [30.2, 483.0], [30.3, 484.0], [30.4, 485.0], [30.5, 487.0], [30.6, 488.0], [30.7, 489.0], [30.8, 489.0], [30.9, 490.0], [31.0, 491.0], [31.1, 492.0], [31.2, 493.0], [31.3, 494.0], [31.4, 495.0], [31.5, 496.0], [31.6, 498.0], [31.7, 499.0], [31.8, 499.0], [31.9, 501.0], [32.0, 502.0], [32.1, 502.0], [32.2, 503.0], [32.3, 504.0], [32.4, 506.0], [32.5, 507.0], [32.6, 507.0], [32.7, 509.0], [32.8, 510.0], [32.9, 512.0], [33.0, 513.0], [33.1, 514.0], [33.2, 516.0], [33.3, 518.0], [33.4, 518.0], [33.5, 519.0], [33.6, 519.0], [33.7, 520.0], [33.8, 521.0], [33.9, 522.0], [34.0, 523.0], [34.1, 524.0], [34.2, 525.0], [34.3, 527.0], [34.4, 528.0], [34.5, 528.0], [34.6, 529.0], [34.7, 530.0], [34.8, 531.0], [34.9, 532.0], [35.0, 533.0], [35.1, 534.0], [35.2, 535.0], [35.3, 536.0], [35.4, 537.0], [35.5, 538.0], [35.6, 540.0], [35.7, 540.0], [35.8, 541.0], [35.9, 542.0], [36.0, 542.0], [36.1, 543.0], [36.2, 543.0], [36.3, 544.0], [36.4, 545.0], [36.5, 546.0], [36.6, 547.0], [36.7, 547.0], [36.8, 548.0], [36.9, 549.0], [37.0, 550.0], [37.1, 550.0], [37.2, 551.0], [37.3, 552.0], [37.4, 553.0], [37.5, 555.0], [37.6, 556.0], [37.7, 556.0], [37.8, 557.0], [37.9, 558.0], [38.0, 560.0], [38.1, 561.0], [38.2, 561.0], [38.3, 562.0], [38.4, 562.0], [38.5, 563.0], [38.6, 564.0], [38.7, 564.0], [38.8, 565.0], [38.9, 565.0], [39.0, 566.0], [39.1, 567.0], [39.2, 568.0], [39.3, 569.0], [39.4, 571.0], [39.5, 573.0], [39.6, 574.0], [39.7, 574.0], [39.8, 576.0], [39.9, 577.0], [40.0, 578.0], [40.1, 580.0], [40.2, 581.0], [40.3, 582.0], [40.4, 584.0], [40.5, 585.0], [40.6, 586.0], [40.7, 588.0], [40.8, 589.0], [40.9, 590.0], [41.0, 592.0], [41.1, 593.0], [41.2, 594.0], [41.3, 595.0], [41.4, 596.0], [41.5, 598.0], [41.6, 598.0], [41.7, 599.0], [41.8, 601.0], [41.9, 602.0], [42.0, 604.0], [42.1, 605.0], [42.2, 606.0], [42.3, 607.0], [42.4, 607.0], [42.5, 608.0], [42.6, 610.0], [42.7, 611.0], [42.8, 613.0], [42.9, 615.0], [43.0, 615.0], [43.1, 616.0], [43.2, 617.0], [43.3, 618.0], [43.4, 619.0], [43.5, 620.0], [43.6, 622.0], [43.7, 623.0], [43.8, 624.0], [43.9, 626.0], [44.0, 627.0], [44.1, 628.0], [44.2, 629.0], [44.3, 630.0], [44.4, 632.0], [44.5, 633.0], [44.6, 634.0], [44.7, 635.0], [44.8, 637.0], [44.9, 638.0], [45.0, 638.0], [45.1, 640.0], [45.2, 642.0], [45.3, 642.0], [45.4, 644.0], [45.5, 646.0], [45.6, 646.0], [45.7, 647.0], [45.8, 649.0], [45.9, 650.0], [46.0, 652.0], [46.1, 653.0], [46.2, 655.0], [46.3, 655.0], [46.4, 657.0], [46.5, 658.0], [46.6, 660.0], [46.7, 660.0], [46.8, 662.0], [46.9, 663.0], [47.0, 666.0], [47.1, 667.0], [47.2, 668.0], [47.3, 670.0], [47.4, 671.0], [47.5, 673.0], [47.6, 674.0], [47.7, 676.0], [47.8, 677.0], [47.9, 679.0], [48.0, 680.0], [48.1, 681.0], [48.2, 683.0], [48.3, 685.0], [48.4, 686.0], [48.5, 691.0], [48.6, 691.0], [48.7, 692.0], [48.8, 695.0], [48.9, 697.0], [49.0, 700.0], [49.1, 703.0], [49.2, 705.0], [49.3, 707.0], [49.4, 708.0], [49.5, 708.0], [49.6, 710.0], [49.7, 713.0], [49.8, 714.0], [49.9, 715.0], [50.0, 717.0], [50.1, 718.0], [50.2, 719.0], [50.3, 720.0], [50.4, 722.0], [50.5, 723.0], [50.6, 726.0], [50.7, 729.0], [50.8, 730.0], [50.9, 732.0], [51.0, 734.0], [51.1, 734.0], [51.2, 736.0], [51.3, 737.0], [51.4, 737.0], [51.5, 739.0], [51.6, 739.0], [51.7, 740.0], [51.8, 741.0], [51.9, 742.0], [52.0, 743.0], [52.1, 745.0], [52.2, 747.0], [52.3, 749.0], [52.4, 750.0], [52.5, 751.0], [52.6, 753.0], [52.7, 756.0], [52.8, 758.0], [52.9, 760.0], [53.0, 761.0], [53.1, 762.0], [53.2, 764.0], [53.3, 765.0], [53.4, 768.0], [53.5, 769.0], [53.6, 770.0], [53.7, 772.0], [53.8, 773.0], [53.9, 774.0], [54.0, 775.0], [54.1, 777.0], [54.2, 778.0], [54.3, 779.0], [54.4, 782.0], [54.5, 784.0], [54.6, 784.0], [54.7, 788.0], [54.8, 790.0], [54.9, 790.0], [55.0, 791.0], [55.1, 794.0], [55.2, 796.0], [55.3, 799.0], [55.4, 801.0], [55.5, 803.0], [55.6, 805.0], [55.7, 805.0], [55.8, 807.0], [55.9, 807.0], [56.0, 811.0], [56.1, 814.0], [56.2, 817.0], [56.3, 818.0], [56.4, 819.0], [56.5, 821.0], [56.6, 822.0], [56.7, 823.0], [56.8, 826.0], [56.9, 828.0], [57.0, 829.0], [57.1, 831.0], [57.2, 832.0], [57.3, 833.0], [57.4, 835.0], [57.5, 836.0], [57.6, 837.0], [57.7, 838.0], [57.8, 839.0], [57.9, 843.0], [58.0, 845.0], [58.1, 846.0], [58.2, 849.0], [58.3, 853.0], [58.4, 855.0], [58.5, 856.0], [58.6, 858.0], [58.7, 859.0], [58.8, 860.0], [58.9, 863.0], [59.0, 864.0], [59.1, 865.0], [59.2, 867.0], [59.3, 867.0], [59.4, 869.0], [59.5, 873.0], [59.6, 876.0], [59.7, 879.0], [59.8, 881.0], [59.9, 882.0], [60.0, 884.0], [60.1, 885.0], [60.2, 887.0], [60.3, 887.0], [60.4, 889.0], [60.5, 892.0], [60.6, 893.0], [60.7, 895.0], [60.8, 896.0], [60.9, 898.0], [61.0, 900.0], [61.1, 902.0], [61.2, 904.0], [61.3, 904.0], [61.4, 907.0], [61.5, 910.0], [61.6, 912.0], [61.7, 914.0], [61.8, 916.0], [61.9, 918.0], [62.0, 921.0], [62.1, 922.0], [62.2, 925.0], [62.3, 926.0], [62.4, 928.0], [62.5, 930.0], [62.6, 931.0], [62.7, 933.0], [62.8, 934.0], [62.9, 935.0], [63.0, 937.0], [63.1, 939.0], [63.2, 940.0], [63.3, 940.0], [63.4, 943.0], [63.5, 945.0], [63.6, 946.0], [63.7, 947.0], [63.8, 949.0], [63.9, 950.0], [64.0, 952.0], [64.1, 954.0], [64.2, 957.0], [64.3, 960.0], [64.4, 962.0], [64.5, 963.0], [64.6, 965.0], [64.7, 966.0], [64.8, 968.0], [64.9, 969.0], [65.0, 970.0], [65.1, 971.0], [65.2, 973.0], [65.3, 975.0], [65.4, 977.0], [65.5, 980.0], [65.6, 981.0], [65.7, 982.0], [65.8, 984.0], [65.9, 986.0], [66.0, 987.0], [66.1, 989.0], [66.2, 990.0], [66.3, 992.0], [66.4, 994.0], [66.5, 995.0], [66.6, 996.0], [66.7, 997.0], [66.8, 998.0], [66.9, 1002.0], [67.0, 1003.0], [67.1, 1005.0], [67.2, 1005.0], [67.3, 1006.0], [67.4, 1008.0], [67.5, 1010.0], [67.6, 1013.0], [67.7, 1014.0], [67.8, 1016.0], [67.9, 1018.0], [68.0, 1020.0], [68.1, 1021.0], [68.2, 1023.0], [68.3, 1024.0], [68.4, 1026.0], [68.5, 1028.0], [68.6, 1029.0], [68.7, 1032.0], [68.8, 1032.0], [68.9, 1035.0], [69.0, 1037.0], [69.1, 1041.0], [69.2, 1044.0], [69.3, 1045.0], [69.4, 1046.0], [69.5, 1049.0], [69.6, 1050.0], [69.7, 1052.0], [69.8, 1053.0], [69.9, 1055.0], [70.0, 1056.0], [70.1, 1059.0], [70.2, 1061.0], [70.3, 1062.0], [70.4, 1063.0], [70.5, 1065.0], [70.6, 1067.0], [70.7, 1068.0], [70.8, 1069.0], [70.9, 1071.0], [71.0, 1072.0], [71.1, 1074.0], [71.2, 1076.0], [71.3, 1077.0], [71.4, 1078.0], [71.5, 1078.0], [71.6, 1080.0], [71.7, 1082.0], [71.8, 1085.0], [71.9, 1086.0], [72.0, 1088.0], [72.1, 1090.0], [72.2, 1092.0], [72.3, 1096.0], [72.4, 1097.0], [72.5, 1098.0], [72.6, 1103.0], [72.7, 1105.0], [72.8, 1108.0], [72.9, 1110.0], [73.0, 1112.0], [73.1, 1114.0], [73.2, 1116.0], [73.3, 1118.0], [73.4, 1120.0], [73.5, 1122.0], [73.6, 1123.0], [73.7, 1127.0], [73.8, 1128.0], [73.9, 1129.0], [74.0, 1130.0], [74.1, 1132.0], [74.2, 1135.0], [74.3, 1136.0], [74.4, 1138.0], [74.5, 1141.0], [74.6, 1142.0], [74.7, 1142.0], [74.8, 1143.0], [74.9, 1146.0], [75.0, 1148.0], [75.1, 1149.0], [75.2, 1151.0], [75.3, 1154.0], [75.4, 1157.0], [75.5, 1160.0], [75.6, 1162.0], [75.7, 1164.0], [75.8, 1166.0], [75.9, 1168.0], [76.0, 1171.0], [76.1, 1176.0], [76.2, 1179.0], [76.3, 1180.0], [76.4, 1184.0], [76.5, 1186.0], [76.6, 1189.0], [76.7, 1192.0], [76.8, 1194.0], [76.9, 1195.0], [77.0, 1197.0], [77.1, 1201.0], [77.2, 1203.0], [77.3, 1206.0], [77.4, 1208.0], [77.5, 1209.0], [77.6, 1210.0], [77.7, 1213.0], [77.8, 1217.0], [77.9, 1220.0], [78.0, 1223.0], [78.1, 1225.0], [78.2, 1227.0], [78.3, 1230.0], [78.4, 1233.0], [78.5, 1235.0], [78.6, 1239.0], [78.7, 1242.0], [78.8, 1245.0], [78.9, 1248.0], [79.0, 1250.0], [79.1, 1253.0], [79.2, 1256.0], [79.3, 1260.0], [79.4, 1263.0], [79.5, 1269.0], [79.6, 1273.0], [79.7, 1275.0], [79.8, 1277.0], [79.9, 1281.0], [80.0, 1284.0], [80.1, 1285.0], [80.2, 1287.0], [80.3, 1290.0], [80.4, 1292.0], [80.5, 1294.0], [80.6, 1297.0], [80.7, 1299.0], [80.8, 1301.0], [80.9, 1303.0], [81.0, 1307.0], [81.1, 1310.0], [81.2, 1313.0], [81.3, 1315.0], [81.4, 1317.0], [81.5, 1320.0], [81.6, 1322.0], [81.7, 1325.0], [81.8, 1328.0], [81.9, 1331.0], [82.0, 1332.0], [82.1, 1333.0], [82.2, 1336.0], [82.3, 1338.0], [82.4, 1340.0], [82.5, 1344.0], [82.6, 1346.0], [82.7, 1349.0], [82.8, 1351.0], [82.9, 1353.0], [83.0, 1355.0], [83.1, 1356.0], [83.2, 1358.0], [83.3, 1361.0], [83.4, 1362.0], [83.5, 1364.0], [83.6, 1369.0], [83.7, 1372.0], [83.8, 1376.0], [83.9, 1378.0], [84.0, 1380.0], [84.1, 1381.0], [84.2, 1382.0], [84.3, 1384.0], [84.4, 1386.0], [84.5, 1387.0], [84.6, 1391.0], [84.7, 1394.0], [84.8, 1397.0], [84.9, 1400.0], [85.0, 1403.0], [85.1, 1404.0], [85.2, 1407.0], [85.3, 1408.0], [85.4, 1410.0], [85.5, 1411.0], [85.6, 1416.0], [85.7, 1419.0], [85.8, 1423.0], [85.9, 1426.0], [86.0, 1427.0], [86.1, 1431.0], [86.2, 1434.0], [86.3, 1437.0], [86.4, 1439.0], [86.5, 1442.0], [86.6, 1445.0], [86.7, 1449.0], [86.8, 1450.0], [86.9, 1454.0], [87.0, 1456.0], [87.1, 1460.0], [87.2, 1467.0], [87.3, 1469.0], [87.4, 1473.0], [87.5, 1474.0], [87.6, 1477.0], [87.7, 1481.0], [87.8, 1484.0], [87.9, 1489.0], [88.0, 1491.0], [88.1, 1495.0], [88.2, 1497.0], [88.3, 1499.0], [88.4, 1502.0], [88.5, 1504.0], [88.6, 1509.0], [88.7, 1512.0], [88.8, 1516.0], [88.9, 1524.0], [89.0, 1532.0], [89.1, 1534.0], [89.2, 1538.0], [89.3, 1541.0], [89.4, 1546.0], [89.5, 1552.0], [89.6, 1554.0], [89.7, 1557.0], [89.8, 1563.0], [89.9, 1566.0], [90.0, 1570.0], [90.1, 1576.0], [90.2, 1580.0], [90.3, 1584.0], [90.4, 1590.0], [90.5, 1594.0], [90.6, 1600.0], [90.7, 1606.0], [90.8, 1607.0], [90.9, 1614.0], [91.0, 1622.0], [91.1, 1626.0], [91.2, 1630.0], [91.3, 1637.0], [91.4, 1644.0], [91.5, 1648.0], [91.6, 1657.0], [91.7, 1661.0], [91.8, 1666.0], [91.9, 1672.0], [92.0, 1678.0], [92.1, 1686.0], [92.2, 1690.0], [92.3, 1697.0], [92.4, 1700.0], [92.5, 1708.0], [92.6, 1717.0], [92.7, 1720.0], [92.8, 1724.0], [92.9, 1732.0], [93.0, 1738.0], [93.1, 1741.0], [93.2, 1754.0], [93.3, 1763.0], [93.4, 1772.0], [93.5, 1784.0], [93.6, 1791.0], [93.7, 1810.0], [93.8, 1815.0], [93.9, 1819.0], [94.0, 1834.0], [94.1, 1843.0], [94.2, 1851.0], [94.3, 1862.0], [94.4, 1870.0], [94.5, 1886.0], [94.6, 1895.0], [94.7, 1915.0], [94.8, 1928.0], [94.9, 1941.0], [95.0, 1950.0], [95.1, 1959.0], [95.2, 1976.0], [95.3, 1993.0], [95.4, 2010.0], [95.5, 2018.0], [95.6, 2032.0], [95.7, 2059.0], [95.8, 2077.0], [95.9, 2087.0], [96.0, 2098.0], [96.1, 2105.0], [96.2, 2114.0], [96.3, 2127.0], [96.4, 2141.0], [96.5, 2149.0], [96.6, 2167.0], [96.7, 2172.0], [96.8, 2181.0], [96.9, 2192.0], [97.0, 2204.0], [97.1, 2216.0], [97.2, 2236.0], [97.3, 2254.0], [97.4, 2270.0], [97.5, 2281.0], [97.6, 2303.0], [97.7, 2317.0], [97.8, 2344.0], [97.9, 2381.0], [98.0, 2416.0], [98.1, 2427.0], [98.2, 2483.0], [98.3, 2529.0], [98.4, 2577.0], [98.5, 2645.0], [98.6, 2668.0], [98.7, 2693.0], [98.8, 2771.0], [98.9, 2816.0], [99.0, 2925.0], [99.1, 2992.0], [99.2, 3171.0], [99.3, 3257.0], [99.4, 3346.0], [99.5, 3462.0], [99.6, 3640.0], [99.7, 3779.0], [99.8, 4143.0], [99.9, 5081.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 594.0, "series": [{"data": [[600.0, 377.0], [700.0, 329.0], [800.0, 291.0], [900.0, 305.0], [1000.0, 296.0], [1100.0, 233.0], [1200.0, 195.0], [1300.0, 214.0], [1400.0, 177.0], [1500.0, 119.0], [1600.0, 93.0], [1700.0, 67.0], [1800.0, 48.0], [1900.0, 39.0], [2000.0, 37.0], [2100.0, 45.0], [2200.0, 34.0], [2300.0, 19.0], [2400.0, 16.0], [2500.0, 7.0], [2600.0, 17.0], [2800.0, 7.0], [2700.0, 4.0], [2900.0, 9.0], [3000.0, 1.0], [3100.0, 5.0], [3200.0, 7.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 1.0], [3700.0, 5.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4300.0, 1.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [5400.0, 1.0], [5500.0, 2.0], [5700.0, 1.0], [5900.0, 1.0], [100.0, 95.0], [200.0, 570.0], [300.0, 392.0], [400.0, 594.0], [500.0, 515.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 604.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2931.0, "series": [{"data": [[0.0, 1655.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2931.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 604.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.555555555555555, "minX": 1.60263072E12, "maxY": 10.0, "series": [{"data": [[1.60263078E12, 10.0], [1.6026312E12, 9.555555555555555], [1.60263072E12, 10.0], [1.6026309E12, 10.0], [1.60263108E12, 10.0], [1.60263084E12, 10.0], [1.60263114E12, 10.0], [1.60263096E12, 10.0], [1.60263102E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026312E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 343.0, "minX": 1.0, "maxY": 2648.0, "series": [{"data": [[8.0, 1206.0], [2.0, 2442.0], [1.0, 2648.0], [9.0, 343.0], [10.0, 863.8996332754292], [5.0, 1080.5], [6.0, 1142.0], [3.0, 1028.0], [7.0, 818.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996148, 864.6728323699421]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 751.0333333333333, "minX": 1.60263072E12, "maxY": 3793821.683333333, "series": [{"data": [[1.60263078E12, 2638690.9833333334], [1.6026312E12, 421594.86666666664], [1.60263072E12, 1131277.25], [1.6026309E12, 3538856.6666666665], [1.60263108E12, 3793821.683333333], [1.60263084E12, 3629612.9833333334], [1.60263114E12, 3112377.5166666666], [1.60263096E12, 3193935.0], [1.60263102E12, 2512484.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263078E12, 5311.0], [1.6026312E12, 751.0333333333333], [1.60263072E12, 1096.1166666666666], [1.6026309E12, 5529.55], [1.60263108E12, 5407.366666666667], [1.60263084E12, 5413.8], [1.60263114E12, 5333.3], [1.60263096E12, 4522.783333333334], [1.60263102E12, 5212.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026312E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 818.64060356653, "minX": 1.60263072E12, "maxY": 1205.1148648648648, "series": [{"data": [[1.60263078E12, 827.6761904761898], [1.6026312E12, 1101.8888888888887], [1.60263072E12, 1205.1148648648648], [1.6026309E12, 818.64060356653], [1.60263108E12, 843.8216292134838], [1.60263084E12, 826.6307053941908], [1.60263114E12, 848.951773049646], [1.60263096E12, 974.1731391585773], [1.60263102E12, 826.7295423023576]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026312E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 816.3127572016458, "minX": 1.60263072E12, "maxY": 1201.8040540540542, "series": [{"data": [[1.60263078E12, 826.0476190476187], [1.6026312E12, 1100.4343434343432], [1.60263072E12, 1201.8040540540542], [1.6026309E12, 816.3127572016458], [1.60263108E12, 842.0421348314611], [1.60263084E12, 824.2558782849253], [1.60263114E12, 847.3546099290778], [1.60263096E12, 972.3058252427192], [1.60263102E12, 825.5256588072127]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026312E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263072E12, "maxY": 0.6689189189189197, "series": [{"data": [[1.60263078E12, 0.017687074829931978], [1.6026312E12, 0.0], [1.60263072E12, 0.6689189189189197], [1.6026309E12, 0.009602194787379977], [1.60263108E12, 0.016853932584269666], [1.60263084E12, 0.01659751037344399], [1.60263114E12, 0.009929078014184396], [1.60263096E12, 0.01618122977346278], [1.60263102E12, 0.009708737864077673]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026312E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60263072E12, "maxY": 5957.0, "series": [{"data": [[1.60263078E12, 5548.0], [1.6026312E12, 3375.0], [1.60263072E12, 3768.0], [1.6026309E12, 3913.0], [1.60263108E12, 2492.0], [1.60263084E12, 4143.0], [1.60263114E12, 3728.0], [1.60263096E12, 5526.0], [1.60263102E12, 5957.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263078E12, 202.0], [1.6026312E12, 198.0], [1.60263072E12, 192.70499982237817], [1.6026309E12, 188.0], [1.60263108E12, 186.8339996600151], [1.60263084E12, 192.51599982738495], [1.60263114E12, 194.35399983167648], [1.60263096E12, 210.7129995572567], [1.60263102E12, 200.49799982786178]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263078E12, 202.0], [1.6026312E12, 198.0], [1.60263072E12, 193.37550007104875], [1.6026309E12, 188.2270000696182], [1.60263108E12, 188.0], [1.60263084E12, 193.33520013809203], [1.60263114E12, 194.9894000673294], [1.60263096E12, 212.51240023612976], [1.60263102E12, 201.29560013771058]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263078E12, 202.0], [1.6026312E12, 198.0], [1.60263072E12, 193.07749991118908], [1.6026309E12, 188.0], [1.60263108E12, 187.54699983000756], [1.60263084E12, 192.87799991369246], [1.60263114E12, 194.70699991583825], [1.60263096E12, 211.64149977862834], [1.60263102E12, 200.8589999139309]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263078E12, 190.0], [1.6026312E12, 198.0], [1.60263072E12, 191.0], [1.6026309E12, 178.0], [1.60263108E12, 179.0], [1.60263084E12, 185.0], [1.60263114E12, 185.0], [1.60263096E12, 183.0], [1.60263102E12, 195.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263078E12, 667.0], [1.6026312E12, 930.0], [1.60263072E12, 988.5], [1.6026309E12, 683.0], [1.60263108E12, 666.5], [1.60263084E12, 637.0], [1.60263114E12, 724.0], [1.60263096E12, 826.5], [1.60263102E12, 686.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026312E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 397.0, "minX": 2.0, "maxY": 2545.0, "series": [{"data": [[2.0, 2545.0], [3.0, 2140.5], [4.0, 1356.0], [5.0, 1363.0], [6.0, 1167.0], [7.0, 1074.0], [8.0, 1067.0], [9.0, 962.0], [10.0, 899.5], [11.0, 811.0], [12.0, 818.5], [13.0, 750.0], [14.0, 657.0], [15.0, 575.0], [16.0, 616.5], [17.0, 500.0], [18.0, 473.5], [19.0, 428.0], [20.0, 428.5], [21.0, 448.0], [22.0, 430.5], [23.0, 446.0], [24.0, 412.5], [25.0, 417.0], [26.0, 436.0], [27.0, 397.0], [28.0, 417.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 397.0, "minX": 2.0, "maxY": 2537.0, "series": [{"data": [[2.0, 2537.0], [3.0, 2138.5], [4.0, 1354.5], [5.0, 1361.0], [6.0, 1164.5], [7.0, 1070.0], [8.0, 1060.5], [9.0, 958.0], [10.0, 899.5], [11.0, 811.0], [12.0, 815.5], [13.0, 747.5], [14.0, 657.0], [15.0, 573.0], [16.0, 616.0], [17.0, 496.5], [18.0, 473.0], [19.0, 427.0], [20.0, 428.0], [21.0, 447.0], [22.0, 428.5], [23.0, 446.0], [24.0, 412.5], [25.0, 416.0], [26.0, 435.5], [27.0, 397.0], [28.0, 416.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60263072E12, "maxY": 12.25, "series": [{"data": [[1.60263078E12, 12.25], [1.6026312E12, 1.4833333333333334], [1.60263072E12, 2.6333333333333333], [1.6026309E12, 12.15], [1.60263108E12, 11.866666666666667], [1.60263084E12, 12.05], [1.60263114E12, 11.75], [1.60263096E12, 10.3], [1.60263102E12, 12.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026312E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.60263072E12, "maxY": 12.25, "series": [{"data": [[1.60263078E12, 12.25], [1.6026312E12, 1.65], [1.60263072E12, 2.466666666666667], [1.6026309E12, 12.15], [1.60263108E12, 11.866666666666667], [1.60263084E12, 12.05], [1.60263114E12, 11.75], [1.60263096E12, 10.3], [1.60263102E12, 12.016666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026312E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.60263072E12, "maxY": 12.25, "series": [{"data": [[1.60263078E12, 12.25], [1.6026312E12, 1.65], [1.60263072E12, 2.466666666666667], [1.6026309E12, 12.15], [1.60263108E12, 11.866666666666667], [1.60263084E12, 12.05], [1.60263114E12, 11.75], [1.60263096E12, 10.3], [1.60263102E12, 12.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026312E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.60263072E12, "maxY": 12.25, "series": [{"data": [[1.60263078E12, 12.25], [1.6026312E12, 1.65], [1.60263072E12, 2.466666666666667], [1.6026309E12, 12.15], [1.60263108E12, 11.866666666666667], [1.60263084E12, 12.05], [1.60263114E12, 11.75], [1.60263096E12, 10.3], [1.60263102E12, 12.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026312E12, "title": "Total Transactions Per Second"}},
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

