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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 8483.0, "series": [{"data": [[0.0, 181.0], [0.1, 187.0], [0.2, 188.0], [0.3, 189.0], [0.4, 189.0], [0.5, 190.0], [0.6, 191.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 195.0], [1.1, 195.0], [1.2, 196.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 197.0], [1.7, 197.0], [1.8, 199.0], [1.9, 199.0], [2.0, 200.0], [2.1, 200.0], [2.2, 201.0], [2.3, 202.0], [2.4, 202.0], [2.5, 203.0], [2.6, 203.0], [2.7, 204.0], [2.8, 204.0], [2.9, 205.0], [3.0, 206.0], [3.1, 206.0], [3.2, 207.0], [3.3, 208.0], [3.4, 209.0], [3.5, 211.0], [3.6, 212.0], [3.7, 213.0], [3.8, 214.0], [3.9, 215.0], [4.0, 216.0], [4.1, 217.0], [4.2, 217.0], [4.3, 218.0], [4.4, 218.0], [4.5, 219.0], [4.6, 220.0], [4.7, 220.0], [4.8, 220.0], [4.9, 222.0], [5.0, 222.0], [5.1, 223.0], [5.2, 224.0], [5.3, 225.0], [5.4, 226.0], [5.5, 228.0], [5.6, 228.0], [5.7, 229.0], [5.8, 229.0], [5.9, 230.0], [6.0, 231.0], [6.1, 231.0], [6.2, 233.0], [6.3, 234.0], [6.4, 235.0], [6.5, 236.0], [6.6, 237.0], [6.7, 238.0], [6.8, 240.0], [6.9, 241.0], [7.0, 243.0], [7.1, 244.0], [7.2, 245.0], [7.3, 246.0], [7.4, 248.0], [7.5, 252.0], [7.6, 252.0], [7.7, 254.0], [7.8, 255.0], [7.9, 257.0], [8.0, 259.0], [8.1, 260.0], [8.2, 261.0], [8.3, 262.0], [8.4, 263.0], [8.5, 264.0], [8.6, 266.0], [8.7, 267.0], [8.8, 269.0], [8.9, 270.0], [9.0, 271.0], [9.1, 272.0], [9.2, 272.0], [9.3, 273.0], [9.4, 273.0], [9.5, 274.0], [9.6, 274.0], [9.7, 275.0], [9.8, 275.0], [9.9, 276.0], [10.0, 278.0], [10.1, 279.0], [10.2, 279.0], [10.3, 280.0], [10.4, 281.0], [10.5, 281.0], [10.6, 282.0], [10.7, 282.0], [10.8, 283.0], [10.9, 285.0], [11.0, 286.0], [11.1, 287.0], [11.2, 287.0], [11.3, 289.0], [11.4, 289.0], [11.5, 290.0], [11.6, 290.0], [11.7, 292.0], [11.8, 292.0], [11.9, 293.0], [12.0, 294.0], [12.1, 295.0], [12.2, 297.0], [12.3, 297.0], [12.4, 298.0], [12.5, 299.0], [12.6, 300.0], [12.7, 301.0], [12.8, 302.0], [12.9, 303.0], [13.0, 303.0], [13.1, 305.0], [13.2, 307.0], [13.3, 307.0], [13.4, 309.0], [13.5, 310.0], [13.6, 311.0], [13.7, 312.0], [13.8, 313.0], [13.9, 313.0], [14.0, 314.0], [14.1, 316.0], [14.2, 317.0], [14.3, 317.0], [14.4, 318.0], [14.5, 319.0], [14.6, 320.0], [14.7, 321.0], [14.8, 322.0], [14.9, 323.0], [15.0, 324.0], [15.1, 326.0], [15.2, 327.0], [15.3, 329.0], [15.4, 330.0], [15.5, 331.0], [15.6, 332.0], [15.7, 335.0], [15.8, 336.0], [15.9, 338.0], [16.0, 338.0], [16.1, 339.0], [16.2, 341.0], [16.3, 342.0], [16.4, 344.0], [16.5, 344.0], [16.6, 347.0], [16.7, 350.0], [16.8, 352.0], [16.9, 353.0], [17.0, 355.0], [17.1, 356.0], [17.2, 358.0], [17.3, 360.0], [17.4, 363.0], [17.5, 366.0], [17.6, 367.0], [17.7, 369.0], [17.8, 370.0], [17.9, 372.0], [18.0, 373.0], [18.1, 374.0], [18.2, 376.0], [18.3, 376.0], [18.4, 379.0], [18.5, 380.0], [18.6, 382.0], [18.7, 384.0], [18.8, 384.0], [18.9, 385.0], [19.0, 386.0], [19.1, 388.0], [19.2, 389.0], [19.3, 390.0], [19.4, 391.0], [19.5, 392.0], [19.6, 392.0], [19.7, 393.0], [19.8, 394.0], [19.9, 394.0], [20.0, 396.0], [20.1, 397.0], [20.2, 398.0], [20.3, 399.0], [20.4, 399.0], [20.5, 400.0], [20.6, 402.0], [20.7, 404.0], [20.8, 405.0], [20.9, 406.0], [21.0, 407.0], [21.1, 408.0], [21.2, 409.0], [21.3, 410.0], [21.4, 411.0], [21.5, 412.0], [21.6, 412.0], [21.7, 413.0], [21.8, 414.0], [21.9, 415.0], [22.0, 416.0], [22.1, 417.0], [22.2, 418.0], [22.3, 420.0], [22.4, 421.0], [22.5, 422.0], [22.6, 422.0], [22.7, 423.0], [22.8, 424.0], [22.9, 425.0], [23.0, 425.0], [23.1, 426.0], [23.2, 427.0], [23.3, 428.0], [23.4, 429.0], [23.5, 430.0], [23.6, 431.0], [23.7, 432.0], [23.8, 432.0], [23.9, 433.0], [24.0, 434.0], [24.1, 435.0], [24.2, 435.0], [24.3, 436.0], [24.4, 437.0], [24.5, 437.0], [24.6, 438.0], [24.7, 439.0], [24.8, 440.0], [24.9, 441.0], [25.0, 442.0], [25.1, 443.0], [25.2, 444.0], [25.3, 445.0], [25.4, 446.0], [25.5, 446.0], [25.6, 447.0], [25.7, 448.0], [25.8, 448.0], [25.9, 449.0], [26.0, 450.0], [26.1, 450.0], [26.2, 451.0], [26.3, 452.0], [26.4, 453.0], [26.5, 454.0], [26.6, 455.0], [26.7, 455.0], [26.8, 456.0], [26.9, 456.0], [27.0, 457.0], [27.1, 457.0], [27.2, 458.0], [27.3, 458.0], [27.4, 459.0], [27.5, 460.0], [27.6, 460.0], [27.7, 461.0], [27.8, 462.0], [27.9, 463.0], [28.0, 464.0], [28.1, 465.0], [28.2, 466.0], [28.3, 468.0], [28.4, 469.0], [28.5, 469.0], [28.6, 470.0], [28.7, 471.0], [28.8, 472.0], [28.9, 472.0], [29.0, 473.0], [29.1, 474.0], [29.2, 474.0], [29.3, 475.0], [29.4, 476.0], [29.5, 477.0], [29.6, 478.0], [29.7, 479.0], [29.8, 479.0], [29.9, 480.0], [30.0, 482.0], [30.1, 482.0], [30.2, 484.0], [30.3, 485.0], [30.4, 487.0], [30.5, 487.0], [30.6, 488.0], [30.7, 488.0], [30.8, 490.0], [30.9, 492.0], [31.0, 493.0], [31.1, 493.0], [31.2, 494.0], [31.3, 495.0], [31.4, 496.0], [31.5, 498.0], [31.6, 499.0], [31.7, 500.0], [31.8, 501.0], [31.9, 502.0], [32.0, 504.0], [32.1, 504.0], [32.2, 505.0], [32.3, 506.0], [32.4, 507.0], [32.5, 508.0], [32.6, 508.0], [32.7, 509.0], [32.8, 510.0], [32.9, 511.0], [33.0, 512.0], [33.1, 513.0], [33.2, 514.0], [33.3, 515.0], [33.4, 515.0], [33.5, 516.0], [33.6, 517.0], [33.7, 518.0], [33.8, 519.0], [33.9, 521.0], [34.0, 522.0], [34.1, 524.0], [34.2, 525.0], [34.3, 526.0], [34.4, 527.0], [34.5, 528.0], [34.6, 529.0], [34.7, 531.0], [34.8, 532.0], [34.9, 534.0], [35.0, 535.0], [35.1, 536.0], [35.2, 537.0], [35.3, 538.0], [35.4, 539.0], [35.5, 540.0], [35.6, 541.0], [35.7, 542.0], [35.8, 542.0], [35.9, 543.0], [36.0, 544.0], [36.1, 545.0], [36.2, 546.0], [36.3, 546.0], [36.4, 548.0], [36.5, 549.0], [36.6, 550.0], [36.7, 550.0], [36.8, 551.0], [36.9, 552.0], [37.0, 552.0], [37.1, 553.0], [37.2, 554.0], [37.3, 555.0], [37.4, 556.0], [37.5, 556.0], [37.6, 558.0], [37.7, 559.0], [37.8, 560.0], [37.9, 561.0], [38.0, 561.0], [38.1, 562.0], [38.2, 564.0], [38.3, 564.0], [38.4, 565.0], [38.5, 566.0], [38.6, 567.0], [38.7, 568.0], [38.8, 569.0], [38.9, 570.0], [39.0, 571.0], [39.1, 571.0], [39.2, 572.0], [39.3, 574.0], [39.4, 575.0], [39.5, 576.0], [39.6, 577.0], [39.7, 578.0], [39.8, 579.0], [39.9, 579.0], [40.0, 580.0], [40.1, 581.0], [40.2, 581.0], [40.3, 583.0], [40.4, 584.0], [40.5, 585.0], [40.6, 586.0], [40.7, 586.0], [40.8, 587.0], [40.9, 589.0], [41.0, 590.0], [41.1, 590.0], [41.2, 591.0], [41.3, 592.0], [41.4, 593.0], [41.5, 594.0], [41.6, 595.0], [41.7, 596.0], [41.8, 597.0], [41.9, 598.0], [42.0, 598.0], [42.1, 599.0], [42.2, 601.0], [42.3, 602.0], [42.4, 603.0], [42.5, 604.0], [42.6, 604.0], [42.7, 605.0], [42.8, 606.0], [42.9, 607.0], [43.0, 609.0], [43.1, 610.0], [43.2, 612.0], [43.3, 613.0], [43.4, 614.0], [43.5, 616.0], [43.6, 616.0], [43.7, 618.0], [43.8, 619.0], [43.9, 619.0], [44.0, 620.0], [44.1, 621.0], [44.2, 622.0], [44.3, 623.0], [44.4, 624.0], [44.5, 624.0], [44.6, 625.0], [44.7, 626.0], [44.8, 627.0], [44.9, 628.0], [45.0, 630.0], [45.1, 632.0], [45.2, 634.0], [45.3, 635.0], [45.4, 636.0], [45.5, 637.0], [45.6, 639.0], [45.7, 640.0], [45.8, 642.0], [45.9, 642.0], [46.0, 644.0], [46.1, 645.0], [46.2, 646.0], [46.3, 648.0], [46.4, 649.0], [46.5, 650.0], [46.6, 651.0], [46.7, 653.0], [46.8, 655.0], [46.9, 656.0], [47.0, 658.0], [47.1, 658.0], [47.2, 660.0], [47.3, 661.0], [47.4, 662.0], [47.5, 663.0], [47.6, 664.0], [47.7, 665.0], [47.8, 668.0], [47.9, 668.0], [48.0, 668.0], [48.1, 669.0], [48.2, 671.0], [48.3, 672.0], [48.4, 673.0], [48.5, 674.0], [48.6, 676.0], [48.7, 678.0], [48.8, 679.0], [48.9, 680.0], [49.0, 681.0], [49.1, 682.0], [49.2, 683.0], [49.3, 684.0], [49.4, 687.0], [49.5, 689.0], [49.6, 690.0], [49.7, 693.0], [49.8, 694.0], [49.9, 695.0], [50.0, 697.0], [50.1, 698.0], [50.2, 700.0], [50.3, 701.0], [50.4, 702.0], [50.5, 704.0], [50.6, 706.0], [50.7, 707.0], [50.8, 708.0], [50.9, 709.0], [51.0, 710.0], [51.1, 711.0], [51.2, 715.0], [51.3, 716.0], [51.4, 717.0], [51.5, 718.0], [51.6, 720.0], [51.7, 721.0], [51.8, 724.0], [51.9, 726.0], [52.0, 727.0], [52.1, 728.0], [52.2, 731.0], [52.3, 732.0], [52.4, 734.0], [52.5, 735.0], [52.6, 738.0], [52.7, 740.0], [52.8, 743.0], [52.9, 747.0], [53.0, 749.0], [53.1, 750.0], [53.2, 752.0], [53.3, 753.0], [53.4, 754.0], [53.5, 756.0], [53.6, 758.0], [53.7, 760.0], [53.8, 762.0], [53.9, 763.0], [54.0, 765.0], [54.1, 767.0], [54.2, 768.0], [54.3, 769.0], [54.4, 771.0], [54.5, 774.0], [54.6, 776.0], [54.7, 776.0], [54.8, 778.0], [54.9, 779.0], [55.0, 780.0], [55.1, 783.0], [55.2, 784.0], [55.3, 784.0], [55.4, 785.0], [55.5, 787.0], [55.6, 789.0], [55.7, 792.0], [55.8, 793.0], [55.9, 794.0], [56.0, 795.0], [56.1, 797.0], [56.2, 799.0], [56.3, 800.0], [56.4, 802.0], [56.5, 803.0], [56.6, 804.0], [56.7, 805.0], [56.8, 807.0], [56.9, 809.0], [57.0, 810.0], [57.1, 813.0], [57.2, 815.0], [57.3, 817.0], [57.4, 818.0], [57.5, 820.0], [57.6, 822.0], [57.7, 824.0], [57.8, 826.0], [57.9, 827.0], [58.0, 830.0], [58.1, 831.0], [58.2, 832.0], [58.3, 834.0], [58.4, 837.0], [58.5, 842.0], [58.6, 843.0], [58.7, 846.0], [58.8, 847.0], [58.9, 850.0], [59.0, 850.0], [59.1, 852.0], [59.2, 855.0], [59.3, 857.0], [59.4, 859.0], [59.5, 862.0], [59.6, 862.0], [59.7, 864.0], [59.8, 864.0], [59.9, 865.0], [60.0, 865.0], [60.1, 867.0], [60.2, 869.0], [60.3, 871.0], [60.4, 872.0], [60.5, 874.0], [60.6, 875.0], [60.7, 876.0], [60.8, 877.0], [60.9, 880.0], [61.0, 882.0], [61.1, 884.0], [61.2, 886.0], [61.3, 888.0], [61.4, 889.0], [61.5, 890.0], [61.6, 891.0], [61.7, 893.0], [61.8, 893.0], [61.9, 895.0], [62.0, 897.0], [62.1, 899.0], [62.2, 901.0], [62.3, 902.0], [62.4, 903.0], [62.5, 906.0], [62.6, 907.0], [62.7, 909.0], [62.8, 910.0], [62.9, 912.0], [63.0, 913.0], [63.1, 914.0], [63.2, 915.0], [63.3, 917.0], [63.4, 919.0], [63.5, 921.0], [63.6, 924.0], [63.7, 926.0], [63.8, 929.0], [63.9, 930.0], [64.0, 931.0], [64.1, 933.0], [64.2, 936.0], [64.3, 937.0], [64.4, 938.0], [64.5, 939.0], [64.6, 940.0], [64.7, 943.0], [64.8, 945.0], [64.9, 948.0], [65.0, 951.0], [65.1, 952.0], [65.2, 952.0], [65.3, 953.0], [65.4, 955.0], [65.5, 957.0], [65.6, 958.0], [65.7, 959.0], [65.8, 960.0], [65.9, 961.0], [66.0, 962.0], [66.1, 963.0], [66.2, 965.0], [66.3, 968.0], [66.4, 969.0], [66.5, 970.0], [66.6, 971.0], [66.7, 972.0], [66.8, 974.0], [66.9, 975.0], [67.0, 976.0], [67.1, 979.0], [67.2, 979.0], [67.3, 980.0], [67.4, 982.0], [67.5, 984.0], [67.6, 984.0], [67.7, 985.0], [67.8, 988.0], [67.9, 990.0], [68.0, 991.0], [68.1, 992.0], [68.2, 995.0], [68.3, 996.0], [68.4, 997.0], [68.5, 999.0], [68.6, 1000.0], [68.7, 1002.0], [68.8, 1003.0], [68.9, 1004.0], [69.0, 1006.0], [69.1, 1008.0], [69.2, 1010.0], [69.3, 1012.0], [69.4, 1014.0], [69.5, 1016.0], [69.6, 1016.0], [69.7, 1017.0], [69.8, 1018.0], [69.9, 1020.0], [70.0, 1021.0], [70.1, 1022.0], [70.2, 1023.0], [70.3, 1024.0], [70.4, 1025.0], [70.5, 1025.0], [70.6, 1026.0], [70.7, 1028.0], [70.8, 1030.0], [70.9, 1031.0], [71.0, 1034.0], [71.1, 1037.0], [71.2, 1038.0], [71.3, 1040.0], [71.4, 1043.0], [71.5, 1048.0], [71.6, 1049.0], [71.7, 1049.0], [71.8, 1052.0], [71.9, 1054.0], [72.0, 1057.0], [72.1, 1059.0], [72.2, 1061.0], [72.3, 1065.0], [72.4, 1065.0], [72.5, 1066.0], [72.6, 1068.0], [72.7, 1071.0], [72.8, 1073.0], [72.9, 1076.0], [73.0, 1080.0], [73.1, 1083.0], [73.2, 1084.0], [73.3, 1085.0], [73.4, 1088.0], [73.5, 1090.0], [73.6, 1094.0], [73.7, 1095.0], [73.8, 1096.0], [73.9, 1097.0], [74.0, 1098.0], [74.1, 1101.0], [74.2, 1103.0], [74.3, 1104.0], [74.4, 1107.0], [74.5, 1109.0], [74.6, 1110.0], [74.7, 1110.0], [74.8, 1113.0], [74.9, 1116.0], [75.0, 1116.0], [75.1, 1120.0], [75.2, 1122.0], [75.3, 1126.0], [75.4, 1127.0], [75.5, 1129.0], [75.6, 1130.0], [75.7, 1131.0], [75.8, 1132.0], [75.9, 1135.0], [76.0, 1138.0], [76.1, 1140.0], [76.2, 1142.0], [76.3, 1145.0], [76.4, 1148.0], [76.5, 1150.0], [76.6, 1151.0], [76.7, 1152.0], [76.8, 1154.0], [76.9, 1158.0], [77.0, 1162.0], [77.1, 1165.0], [77.2, 1167.0], [77.3, 1170.0], [77.4, 1174.0], [77.5, 1176.0], [77.6, 1178.0], [77.7, 1180.0], [77.8, 1181.0], [77.9, 1183.0], [78.0, 1184.0], [78.1, 1188.0], [78.2, 1191.0], [78.3, 1195.0], [78.4, 1199.0], [78.5, 1200.0], [78.6, 1204.0], [78.7, 1207.0], [78.8, 1207.0], [78.9, 1209.0], [79.0, 1211.0], [79.1, 1219.0], [79.2, 1220.0], [79.3, 1222.0], [79.4, 1223.0], [79.5, 1226.0], [79.6, 1229.0], [79.7, 1233.0], [79.8, 1236.0], [79.9, 1239.0], [80.0, 1242.0], [80.1, 1247.0], [80.2, 1251.0], [80.3, 1254.0], [80.4, 1256.0], [80.5, 1259.0], [80.6, 1262.0], [80.7, 1262.0], [80.8, 1264.0], [80.9, 1269.0], [81.0, 1271.0], [81.1, 1272.0], [81.2, 1278.0], [81.3, 1281.0], [81.4, 1283.0], [81.5, 1287.0], [81.6, 1290.0], [81.7, 1293.0], [81.8, 1294.0], [81.9, 1296.0], [82.0, 1297.0], [82.1, 1298.0], [82.2, 1301.0], [82.3, 1304.0], [82.4, 1306.0], [82.5, 1308.0], [82.6, 1309.0], [82.7, 1311.0], [82.8, 1313.0], [82.9, 1314.0], [83.0, 1316.0], [83.1, 1320.0], [83.2, 1323.0], [83.3, 1324.0], [83.4, 1326.0], [83.5, 1327.0], [83.6, 1330.0], [83.7, 1333.0], [83.8, 1335.0], [83.9, 1336.0], [84.0, 1339.0], [84.1, 1340.0], [84.2, 1342.0], [84.3, 1344.0], [84.4, 1345.0], [84.5, 1348.0], [84.6, 1349.0], [84.7, 1352.0], [84.8, 1354.0], [84.9, 1356.0], [85.0, 1359.0], [85.1, 1360.0], [85.2, 1364.0], [85.3, 1365.0], [85.4, 1369.0], [85.5, 1371.0], [85.6, 1373.0], [85.7, 1376.0], [85.8, 1380.0], [85.9, 1383.0], [86.0, 1385.0], [86.1, 1387.0], [86.2, 1388.0], [86.3, 1389.0], [86.4, 1394.0], [86.5, 1396.0], [86.6, 1402.0], [86.7, 1405.0], [86.8, 1406.0], [86.9, 1410.0], [87.0, 1414.0], [87.1, 1416.0], [87.2, 1419.0], [87.3, 1425.0], [87.4, 1426.0], [87.5, 1429.0], [87.6, 1433.0], [87.7, 1437.0], [87.8, 1440.0], [87.9, 1447.0], [88.0, 1453.0], [88.1, 1455.0], [88.2, 1458.0], [88.3, 1460.0], [88.4, 1464.0], [88.5, 1470.0], [88.6, 1474.0], [88.7, 1479.0], [88.8, 1482.0], [88.9, 1486.0], [89.0, 1489.0], [89.1, 1497.0], [89.2, 1505.0], [89.3, 1509.0], [89.4, 1515.0], [89.5, 1524.0], [89.6, 1527.0], [89.7, 1529.0], [89.8, 1534.0], [89.9, 1541.0], [90.0, 1551.0], [90.1, 1555.0], [90.2, 1559.0], [90.3, 1566.0], [90.4, 1570.0], [90.5, 1573.0], [90.6, 1582.0], [90.7, 1587.0], [90.8, 1592.0], [90.9, 1597.0], [91.0, 1602.0], [91.1, 1608.0], [91.2, 1612.0], [91.3, 1616.0], [91.4, 1622.0], [91.5, 1626.0], [91.6, 1629.0], [91.7, 1640.0], [91.8, 1645.0], [91.9, 1654.0], [92.0, 1662.0], [92.1, 1665.0], [92.2, 1670.0], [92.3, 1677.0], [92.4, 1691.0], [92.5, 1696.0], [92.6, 1699.0], [92.7, 1709.0], [92.8, 1724.0], [92.9, 1732.0], [93.0, 1739.0], [93.1, 1747.0], [93.2, 1754.0], [93.3, 1769.0], [93.4, 1773.0], [93.5, 1789.0], [93.6, 1796.0], [93.7, 1803.0], [93.8, 1810.0], [93.9, 1817.0], [94.0, 1823.0], [94.1, 1833.0], [94.2, 1840.0], [94.3, 1845.0], [94.4, 1854.0], [94.5, 1868.0], [94.6, 1879.0], [94.7, 1904.0], [94.8, 1915.0], [94.9, 1920.0], [95.0, 1924.0], [95.1, 1931.0], [95.2, 1948.0], [95.3, 1956.0], [95.4, 1975.0], [95.5, 1985.0], [95.6, 2002.0], [95.7, 2015.0], [95.8, 2023.0], [95.9, 2052.0], [96.0, 2056.0], [96.1, 2066.0], [96.2, 2076.0], [96.3, 2080.0], [96.4, 2096.0], [96.5, 2106.0], [96.6, 2114.0], [96.7, 2123.0], [96.8, 2129.0], [96.9, 2148.0], [97.0, 2172.0], [97.1, 2177.0], [97.2, 2184.0], [97.3, 2211.0], [97.4, 2225.0], [97.5, 2237.0], [97.6, 2249.0], [97.7, 2288.0], [97.8, 2296.0], [97.9, 2322.0], [98.0, 2384.0], [98.1, 2420.0], [98.2, 2462.0], [98.3, 2482.0], [98.4, 2509.0], [98.5, 2547.0], [98.6, 2628.0], [98.7, 2687.0], [98.8, 2722.0], [98.9, 2779.0], [99.0, 2832.0], [99.1, 2934.0], [99.2, 3105.0], [99.3, 3287.0], [99.4, 3450.0], [99.5, 3552.0], [99.6, 3616.0], [99.7, 4435.0], [99.8, 4691.0], [99.9, 4972.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 584.0, "series": [{"data": [[8400.0, 1.0], [600.0, 417.0], [700.0, 314.0], [800.0, 307.0], [900.0, 332.0], [1000.0, 286.0], [1100.0, 227.0], [1200.0, 194.0], [1300.0, 229.0], [1400.0, 132.0], [1500.0, 94.0], [100.0, 102.0], [1600.0, 87.0], [1700.0, 54.0], [1800.0, 53.0], [1900.0, 48.0], [2000.0, 46.0], [2100.0, 40.0], [2300.0, 12.0], [2200.0, 29.0], [2400.0, 17.0], [2500.0, 10.0], [2600.0, 9.0], [2800.0, 9.0], [2700.0, 10.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 550.0], [3200.0, 4.0], [3300.0, 2.0], [3400.0, 7.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 1.0], [4000.0, 2.0], [4500.0, 4.0], [4400.0, 1.0], [4600.0, 1.0], [300.0, 408.0], [4700.0, 2.0], [4800.0, 2.0], [5100.0, 1.0], [4900.0, 2.0], [5600.0, 1.0], [5900.0, 1.0], [400.0, 584.0], [500.0, 544.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2979.0, "series": [{"data": [[0.0, 1647.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2979.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 564.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.730538922155688, "minX": 1.60218876E12, "maxY": 10.0, "series": [{"data": [[1.60218888E12, 10.0], [1.60218906E12, 10.0], [1.60218876E12, 10.0], [1.60218924E12, 9.730538922155688], [1.60218894E12, 10.0], [1.60218912E12, 10.0], [1.60218882E12, 10.0], [1.602189E12, 10.0], [1.60218918E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218924E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 484.0, "minX": 1.0, "maxY": 2639.0, "series": [{"data": [[8.0, 775.0], [4.0, 875.0], [2.0, 2639.0], [1.0, 2533.0], [9.0, 875.0], [10.0, 851.2956387495183], [5.0, 1262.0], [6.0, 910.0], [3.0, 987.0], [7.0, 484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 852.0042381044121]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 275.31666666666666, "minX": 1.60218876E12, "maxY": 3666991.2, "series": [{"data": [[1.60218888E12, 3370706.5166666666], [1.60218906E12, 2652590.8666666667], [1.60218876E12, 267159.23333333334], [1.60218924E12, 769572.6333333333], [1.60218894E12, 3666991.2], [1.60218912E12, 3642282.6], [1.60218882E12, 3097260.8], [1.602189E12, 3295776.2333333334], [1.60218918E12, 3209523.533333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60218888E12, 5636.833333333333], [1.60218906E12, 5363.783333333334], [1.60218876E12, 275.31666666666666], [1.60218924E12, 1254.8833333333334], [1.60218894E12, 5512.05], [1.60218912E12, 5421.316666666667], [1.60218882E12, 4699.1], [1.602189E12, 4858.7], [1.60218918E12, 5562.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218924E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 793.8722002635036, "minX": 1.60218876E12, "maxY": 1515.3888888888891, "series": [{"data": [[1.60218888E12, 793.8722002635036], [1.60218906E12, 808.9864498644984], [1.60218876E12, 1515.3888888888891], [1.60218924E12, 1050.994011976048], [1.60218894E12, 822.9931129476582], [1.60218912E12, 825.4848484848485], [1.60218882E12, 914.394777265745], [1.602189E12, 922.717557251909], [1.60218918E12, 813.9931787175994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218924E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 792.0079051383398, "minX": 1.60218876E12, "maxY": 1511.9722222222217, "series": [{"data": [[1.60218888E12, 792.0079051383398], [1.60218906E12, 807.8373983739837], [1.60218876E12, 1511.9722222222217], [1.60218924E12, 1049.3532934131736], [1.60218894E12, 820.9104683195599], [1.60218912E12, 823.7203856749309], [1.60218882E12, 912.5330261136712], [1.602189E12, 921.0381679389317], [1.60218918E12, 812.3833560709411]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218924E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008185538881309684, "minX": 1.60218876E12, "maxY": 2.9166666666666687, "series": [{"data": [[1.60218888E12, 0.0158102766798419], [1.60218906E12, 0.012195121951219514], [1.60218876E12, 2.9166666666666687], [1.60218924E12, 0.011976047904191631], [1.60218894E12, 0.011019283746556472], [1.60218912E12, 0.013774104683195607], [1.60218882E12, 0.015360983102918589], [1.602189E12, 0.012213740458015267], [1.60218918E12, 0.008185538881309684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218924E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60218876E12, "maxY": 8483.0, "series": [{"data": [[1.60218888E12, 4435.0], [1.60218906E12, 5917.0], [1.60218876E12, 3606.0], [1.60218924E12, 3612.0], [1.60218894E12, 3033.0], [1.60218912E12, 2841.0], [1.60218882E12, 5136.0], [1.602189E12, 8483.0], [1.60218918E12, 3046.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60218888E12, 198.67999963760377], [1.60218906E12, 194.30199964761735], [1.60218876E12, 194.0], [1.60218924E12, 303.53599987983705], [1.60218894E12, 190.0], [1.60218912E12, 190.0], [1.60218882E12, 203.60399953365325], [1.602189E12, 190.80799968719484], [1.60218918E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60218888E12, 199.0], [1.60218906E12, 195.0], [1.60218876E12, 194.0], [1.60218924E12, 303.9896000480652], [1.60218894E12, 190.18740006923676], [1.60218912E12, 190.0], [1.60218882E12, 205.3644001865387], [1.602189E12, 191.49440006256103], [1.60218918E12, 196.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60218888E12, 199.0], [1.60218906E12, 195.0], [1.60218876E12, 194.0], [1.60218924E12, 303.7879999399185], [1.60218894E12, 190.0], [1.60218912E12, 190.0], [1.60218882E12, 204.58199976682664], [1.602189E12, 191.23199992179872], [1.60218918E12, 196.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60218888E12, 185.0], [1.60218906E12, 183.0], [1.60218876E12, 194.0], [1.60218924E12, 302.0], [1.60218894E12, 181.0], [1.60218912E12, 187.0], [1.60218882E12, 187.0], [1.602189E12, 186.0], [1.60218918E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60218888E12, 624.0], [1.60218906E12, 686.0], [1.60218876E12, 1027.0], [1.60218924E12, 918.0], [1.60218894E12, 675.0], [1.60218912E12, 637.0], [1.60218882E12, 780.0], [1.602189E12, 707.0], [1.60218918E12, 700.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218924E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 2681.0, "series": [{"data": [[2.0, 1665.0], [3.0, 2681.0], [4.0, 1402.5], [5.0, 1059.5], [6.0, 1164.0], [7.0, 1063.0], [8.0, 1014.0], [9.0, 923.0], [10.0, 848.5], [11.0, 832.0], [12.0, 796.0], [13.0, 745.0], [14.0, 675.5], [15.0, 626.0], [16.0, 531.5], [1.0, 2586.0], [17.0, 528.0], [18.0, 494.5], [19.0, 522.0], [20.0, 429.5], [21.0, 447.0], [22.0, 424.5], [23.0, 447.0], [24.0, 435.5], [25.0, 429.5], [27.0, 423.0], [28.0, 418.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[13.0, 219.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 2678.0, "series": [{"data": [[2.0, 1664.0], [3.0, 2678.0], [4.0, 1398.0], [5.0, 1059.0], [6.0, 1160.0], [7.0, 1062.0], [8.0, 1013.5], [9.0, 922.0], [10.0, 846.5], [11.0, 831.0], [12.0, 795.0], [13.0, 744.5], [14.0, 675.0], [15.0, 624.0], [16.0, 531.5], [1.0, 2579.5], [17.0, 528.0], [18.0, 494.0], [19.0, 522.0], [20.0, 429.5], [21.0, 447.0], [22.0, 424.5], [23.0, 447.0], [24.0, 435.0], [25.0, 429.5], [27.0, 423.0], [28.0, 418.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[13.0, 219.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60218876E12, "maxY": 12.65, "series": [{"data": [[1.60218888E12, 12.65], [1.60218906E12, 12.3], [1.60218876E12, 0.7666666666666667], [1.60218924E12, 2.6166666666666667], [1.60218894E12, 12.1], [1.60218912E12, 12.1], [1.60218882E12, 10.85], [1.602189E12, 10.916666666666666], [1.60218918E12, 12.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218924E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218876E12, "maxY": 12.65, "series": [{"data": [[1.60218888E12, 12.65], [1.60218906E12, 12.3], [1.60218876E12, 0.6], [1.60218924E12, 2.783333333333333], [1.60218894E12, 12.083333333333334], [1.60218912E12, 12.1], [1.60218882E12, 10.85], [1.602189E12, 10.916666666666666], [1.60218918E12, 12.216666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60218894E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60218924E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218876E12, "maxY": 12.65, "series": [{"data": [[1.60218888E12, 12.65], [1.60218906E12, 12.3], [1.60218876E12, 0.6], [1.60218924E12, 2.783333333333333], [1.60218894E12, 12.083333333333334], [1.60218912E12, 12.1], [1.60218882E12, 10.85], [1.602189E12, 10.916666666666666], [1.60218918E12, 12.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60218894E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218924E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60218876E12, "maxY": 12.65, "series": [{"data": [[1.60218888E12, 12.65], [1.60218906E12, 12.3], [1.60218876E12, 0.6], [1.60218924E12, 2.783333333333333], [1.60218894E12, 12.083333333333334], [1.60218912E12, 12.1], [1.60218882E12, 10.85], [1.602189E12, 10.916666666666666], [1.60218918E12, 12.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60218894E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60218924E12, "title": "Total Transactions Per Second"}},
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

