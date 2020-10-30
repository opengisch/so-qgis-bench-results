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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 4825.0, "series": [{"data": [[0.0, 34.0], [0.1, 39.0], [0.2, 43.0], [0.3, 46.0], [0.4, 78.0], [0.5, 83.0], [0.6, 102.0], [0.7, 111.0], [0.8, 116.0], [0.9, 121.0], [1.0, 123.0], [1.1, 126.0], [1.2, 126.0], [1.3, 127.0], [1.4, 127.0], [1.5, 130.0], [1.6, 132.0], [1.7, 134.0], [1.8, 135.0], [1.9, 136.0], [2.0, 137.0], [2.1, 138.0], [2.2, 138.0], [2.3, 138.0], [2.4, 139.0], [2.5, 139.0], [2.6, 140.0], [2.7, 140.0], [2.8, 140.0], [2.9, 141.0], [3.0, 141.0], [3.1, 142.0], [3.2, 142.0], [3.3, 142.0], [3.4, 143.0], [3.5, 143.0], [3.6, 143.0], [3.7, 143.0], [3.8, 144.0], [3.9, 144.0], [4.0, 144.0], [4.1, 144.0], [4.2, 144.0], [4.3, 145.0], [4.4, 145.0], [4.5, 145.0], [4.6, 145.0], [4.7, 146.0], [4.8, 146.0], [4.9, 146.0], [5.0, 146.0], [5.1, 147.0], [5.2, 147.0], [5.3, 147.0], [5.4, 147.0], [5.5, 148.0], [5.6, 148.0], [5.7, 148.0], [5.8, 148.0], [5.9, 148.0], [6.0, 149.0], [6.1, 149.0], [6.2, 149.0], [6.3, 149.0], [6.4, 149.0], [6.5, 149.0], [6.6, 150.0], [6.7, 150.0], [6.8, 150.0], [6.9, 150.0], [7.0, 150.0], [7.1, 151.0], [7.2, 151.0], [7.3, 151.0], [7.4, 151.0], [7.5, 152.0], [7.6, 152.0], [7.7, 152.0], [7.8, 152.0], [7.9, 152.0], [8.0, 152.0], [8.1, 152.0], [8.2, 153.0], [8.3, 153.0], [8.4, 153.0], [8.5, 153.0], [8.6, 153.0], [8.7, 153.0], [8.8, 153.0], [8.9, 154.0], [9.0, 154.0], [9.1, 154.0], [9.2, 154.0], [9.3, 154.0], [9.4, 155.0], [9.5, 155.0], [9.6, 155.0], [9.7, 155.0], [9.8, 155.0], [9.9, 155.0], [10.0, 156.0], [10.1, 156.0], [10.2, 156.0], [10.3, 156.0], [10.4, 156.0], [10.5, 156.0], [10.6, 157.0], [10.7, 157.0], [10.8, 157.0], [10.9, 157.0], [11.0, 157.0], [11.1, 157.0], [11.2, 157.0], [11.3, 158.0], [11.4, 158.0], [11.5, 158.0], [11.6, 158.0], [11.7, 158.0], [11.8, 158.0], [11.9, 159.0], [12.0, 159.0], [12.1, 159.0], [12.2, 159.0], [12.3, 159.0], [12.4, 159.0], [12.5, 159.0], [12.6, 160.0], [12.7, 160.0], [12.8, 160.0], [12.9, 160.0], [13.0, 160.0], [13.1, 160.0], [13.2, 161.0], [13.3, 161.0], [13.4, 161.0], [13.5, 161.0], [13.6, 161.0], [13.7, 161.0], [13.8, 161.0], [13.9, 162.0], [14.0, 162.0], [14.1, 162.0], [14.2, 162.0], [14.3, 162.0], [14.4, 162.0], [14.5, 163.0], [14.6, 163.0], [14.7, 163.0], [14.8, 163.0], [14.9, 163.0], [15.0, 164.0], [15.1, 164.0], [15.2, 164.0], [15.3, 164.0], [15.4, 165.0], [15.5, 165.0], [15.6, 165.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 167.0], [16.1, 167.0], [16.2, 167.0], [16.3, 167.0], [16.4, 168.0], [16.5, 168.0], [16.6, 168.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 169.0], [17.1, 170.0], [17.2, 170.0], [17.3, 171.0], [17.4, 171.0], [17.5, 171.0], [17.6, 172.0], [17.7, 172.0], [17.8, 172.0], [17.9, 172.0], [18.0, 173.0], [18.1, 173.0], [18.2, 173.0], [18.3, 174.0], [18.4, 174.0], [18.5, 175.0], [18.6, 175.0], [18.7, 175.0], [18.8, 176.0], [18.9, 176.0], [19.0, 176.0], [19.1, 177.0], [19.2, 177.0], [19.3, 178.0], [19.4, 178.0], [19.5, 179.0], [19.6, 180.0], [19.7, 180.0], [19.8, 181.0], [19.9, 181.0], [20.0, 182.0], [20.1, 182.0], [20.2, 183.0], [20.3, 183.0], [20.4, 184.0], [20.5, 185.0], [20.6, 186.0], [20.7, 187.0], [20.8, 187.0], [20.9, 188.0], [21.0, 189.0], [21.1, 190.0], [21.2, 193.0], [21.3, 194.0], [21.4, 196.0], [21.5, 197.0], [21.6, 198.0], [21.7, 201.0], [21.8, 203.0], [21.9, 204.0], [22.0, 204.0], [22.1, 205.0], [22.2, 207.0], [22.3, 207.0], [22.4, 209.0], [22.5, 211.0], [22.6, 214.0], [22.7, 216.0], [22.8, 218.0], [22.9, 219.0], [23.0, 221.0], [23.1, 222.0], [23.2, 224.0], [23.3, 225.0], [23.4, 226.0], [23.5, 229.0], [23.6, 229.0], [23.7, 232.0], [23.8, 232.0], [23.9, 233.0], [24.0, 234.0], [24.1, 236.0], [24.2, 237.0], [24.3, 238.0], [24.4, 238.0], [24.5, 239.0], [24.6, 240.0], [24.7, 240.0], [24.8, 240.0], [24.9, 242.0], [25.0, 242.0], [25.1, 243.0], [25.2, 244.0], [25.3, 244.0], [25.4, 245.0], [25.5, 246.0], [25.6, 247.0], [25.7, 247.0], [25.8, 248.0], [25.9, 249.0], [26.0, 250.0], [26.1, 251.0], [26.2, 251.0], [26.3, 252.0], [26.4, 253.0], [26.5, 253.0], [26.6, 254.0], [26.7, 254.0], [26.8, 255.0], [26.9, 255.0], [27.0, 256.0], [27.1, 257.0], [27.2, 257.0], [27.3, 258.0], [27.4, 258.0], [27.5, 259.0], [27.6, 260.0], [27.7, 261.0], [27.8, 262.0], [27.9, 263.0], [28.0, 263.0], [28.1, 263.0], [28.2, 264.0], [28.3, 264.0], [28.4, 265.0], [28.5, 266.0], [28.6, 267.0], [28.7, 268.0], [28.8, 268.0], [28.9, 269.0], [29.0, 269.0], [29.1, 270.0], [29.2, 270.0], [29.3, 271.0], [29.4, 271.0], [29.5, 272.0], [29.6, 273.0], [29.7, 273.0], [29.8, 274.0], [29.9, 274.0], [30.0, 274.0], [30.1, 275.0], [30.2, 276.0], [30.3, 276.0], [30.4, 277.0], [30.5, 278.0], [30.6, 278.0], [30.7, 279.0], [30.8, 280.0], [30.9, 280.0], [31.0, 281.0], [31.1, 281.0], [31.2, 282.0], [31.3, 283.0], [31.4, 284.0], [31.5, 284.0], [31.6, 286.0], [31.7, 286.0], [31.8, 287.0], [31.9, 287.0], [32.0, 288.0], [32.1, 289.0], [32.2, 290.0], [32.3, 291.0], [32.4, 292.0], [32.5, 293.0], [32.6, 294.0], [32.7, 294.0], [32.8, 298.0], [32.9, 299.0], [33.0, 300.0], [33.1, 301.0], [33.2, 303.0], [33.3, 304.0], [33.4, 307.0], [33.5, 308.0], [33.6, 310.0], [33.7, 311.0], [33.8, 313.0], [33.9, 313.0], [34.0, 316.0], [34.1, 317.0], [34.2, 319.0], [34.3, 320.0], [34.4, 321.0], [34.5, 322.0], [34.6, 322.0], [34.7, 324.0], [34.8, 326.0], [34.9, 326.0], [35.0, 329.0], [35.1, 330.0], [35.2, 331.0], [35.3, 334.0], [35.4, 336.0], [35.5, 338.0], [35.6, 339.0], [35.7, 340.0], [35.8, 342.0], [35.9, 343.0], [36.0, 344.0], [36.1, 346.0], [36.2, 347.0], [36.3, 349.0], [36.4, 351.0], [36.5, 352.0], [36.6, 354.0], [36.7, 355.0], [36.8, 357.0], [36.9, 358.0], [37.0, 359.0], [37.1, 364.0], [37.2, 365.0], [37.3, 366.0], [37.4, 367.0], [37.5, 368.0], [37.6, 370.0], [37.7, 371.0], [37.8, 372.0], [37.9, 374.0], [38.0, 376.0], [38.1, 378.0], [38.2, 381.0], [38.3, 382.0], [38.4, 384.0], [38.5, 387.0], [38.6, 389.0], [38.7, 390.0], [38.8, 394.0], [38.9, 396.0], [39.0, 399.0], [39.1, 401.0], [39.2, 402.0], [39.3, 404.0], [39.4, 407.0], [39.5, 408.0], [39.6, 408.0], [39.7, 410.0], [39.8, 411.0], [39.9, 413.0], [40.0, 415.0], [40.1, 418.0], [40.2, 419.0], [40.3, 420.0], [40.4, 423.0], [40.5, 424.0], [40.6, 426.0], [40.7, 426.0], [40.8, 427.0], [40.9, 429.0], [41.0, 431.0], [41.1, 432.0], [41.2, 434.0], [41.3, 435.0], [41.4, 436.0], [41.5, 437.0], [41.6, 439.0], [41.7, 442.0], [41.8, 443.0], [41.9, 444.0], [42.0, 445.0], [42.1, 446.0], [42.2, 447.0], [42.3, 448.0], [42.4, 450.0], [42.5, 452.0], [42.6, 454.0], [42.7, 455.0], [42.8, 456.0], [42.9, 457.0], [43.0, 458.0], [43.1, 460.0], [43.2, 462.0], [43.3, 464.0], [43.4, 464.0], [43.5, 466.0], [43.6, 470.0], [43.7, 472.0], [43.8, 473.0], [43.9, 474.0], [44.0, 475.0], [44.1, 476.0], [44.2, 478.0], [44.3, 479.0], [44.4, 481.0], [44.5, 484.0], [44.6, 485.0], [44.7, 487.0], [44.8, 488.0], [44.9, 490.0], [45.0, 490.0], [45.1, 492.0], [45.2, 493.0], [45.3, 494.0], [45.4, 495.0], [45.5, 496.0], [45.6, 497.0], [45.7, 498.0], [45.8, 498.0], [45.9, 499.0], [46.0, 500.0], [46.1, 503.0], [46.2, 506.0], [46.3, 508.0], [46.4, 511.0], [46.5, 513.0], [46.6, 515.0], [46.7, 516.0], [46.8, 517.0], [46.9, 519.0], [47.0, 521.0], [47.1, 522.0], [47.2, 523.0], [47.3, 525.0], [47.4, 527.0], [47.5, 528.0], [47.6, 530.0], [47.7, 531.0], [47.8, 533.0], [47.9, 535.0], [48.0, 536.0], [48.1, 538.0], [48.2, 539.0], [48.3, 541.0], [48.4, 542.0], [48.5, 544.0], [48.6, 546.0], [48.7, 547.0], [48.8, 549.0], [48.9, 549.0], [49.0, 551.0], [49.1, 551.0], [49.2, 552.0], [49.3, 553.0], [49.4, 554.0], [49.5, 556.0], [49.6, 561.0], [49.7, 563.0], [49.8, 564.0], [49.9, 566.0], [50.0, 569.0], [50.1, 570.0], [50.2, 572.0], [50.3, 574.0], [50.4, 576.0], [50.5, 577.0], [50.6, 577.0], [50.7, 578.0], [50.8, 580.0], [50.9, 582.0], [51.0, 583.0], [51.1, 585.0], [51.2, 586.0], [51.3, 587.0], [51.4, 589.0], [51.5, 590.0], [51.6, 591.0], [51.7, 592.0], [51.8, 593.0], [51.9, 594.0], [52.0, 595.0], [52.1, 596.0], [52.2, 597.0], [52.3, 598.0], [52.4, 599.0], [52.5, 601.0], [52.6, 602.0], [52.7, 602.0], [52.8, 604.0], [52.9, 606.0], [53.0, 608.0], [53.1, 611.0], [53.2, 613.0], [53.3, 614.0], [53.4, 616.0], [53.5, 617.0], [53.6, 618.0], [53.7, 619.0], [53.8, 620.0], [53.9, 622.0], [54.0, 623.0], [54.1, 625.0], [54.2, 626.0], [54.3, 627.0], [54.4, 628.0], [54.5, 630.0], [54.6, 631.0], [54.7, 634.0], [54.8, 636.0], [54.9, 639.0], [55.0, 641.0], [55.1, 644.0], [55.2, 646.0], [55.3, 647.0], [55.4, 649.0], [55.5, 653.0], [55.6, 655.0], [55.7, 655.0], [55.8, 658.0], [55.9, 660.0], [56.0, 662.0], [56.1, 663.0], [56.2, 664.0], [56.3, 666.0], [56.4, 668.0], [56.5, 669.0], [56.6, 670.0], [56.7, 672.0], [56.8, 674.0], [56.9, 677.0], [57.0, 678.0], [57.1, 679.0], [57.2, 680.0], [57.3, 682.0], [57.4, 683.0], [57.5, 684.0], [57.6, 686.0], [57.7, 687.0], [57.8, 689.0], [57.9, 691.0], [58.0, 692.0], [58.1, 695.0], [58.2, 696.0], [58.3, 697.0], [58.4, 702.0], [58.5, 703.0], [58.6, 705.0], [58.7, 706.0], [58.8, 707.0], [58.9, 708.0], [59.0, 709.0], [59.1, 713.0], [59.2, 715.0], [59.3, 715.0], [59.4, 717.0], [59.5, 720.0], [59.6, 721.0], [59.7, 722.0], [59.8, 723.0], [59.9, 725.0], [60.0, 730.0], [60.1, 731.0], [60.2, 733.0], [60.3, 733.0], [60.4, 737.0], [60.5, 739.0], [60.6, 742.0], [60.7, 743.0], [60.8, 746.0], [60.9, 747.0], [61.0, 748.0], [61.1, 749.0], [61.2, 752.0], [61.3, 754.0], [61.4, 756.0], [61.5, 757.0], [61.6, 758.0], [61.7, 760.0], [61.8, 761.0], [61.9, 763.0], [62.0, 764.0], [62.1, 765.0], [62.2, 767.0], [62.3, 768.0], [62.4, 769.0], [62.5, 770.0], [62.6, 772.0], [62.7, 773.0], [62.8, 774.0], [62.9, 775.0], [63.0, 777.0], [63.1, 779.0], [63.2, 780.0], [63.3, 781.0], [63.4, 783.0], [63.5, 785.0], [63.6, 785.0], [63.7, 786.0], [63.8, 789.0], [63.9, 789.0], [64.0, 791.0], [64.1, 793.0], [64.2, 795.0], [64.3, 796.0], [64.4, 797.0], [64.5, 799.0], [64.6, 802.0], [64.7, 803.0], [64.8, 804.0], [64.9, 807.0], [65.0, 808.0], [65.1, 811.0], [65.2, 813.0], [65.3, 814.0], [65.4, 816.0], [65.5, 819.0], [65.6, 823.0], [65.7, 825.0], [65.8, 827.0], [65.9, 828.0], [66.0, 829.0], [66.1, 831.0], [66.2, 832.0], [66.3, 834.0], [66.4, 835.0], [66.5, 837.0], [66.6, 837.0], [66.7, 839.0], [66.8, 840.0], [66.9, 843.0], [67.0, 846.0], [67.1, 848.0], [67.2, 851.0], [67.3, 852.0], [67.4, 855.0], [67.5, 857.0], [67.6, 858.0], [67.7, 860.0], [67.8, 860.0], [67.9, 861.0], [68.0, 864.0], [68.1, 865.0], [68.2, 866.0], [68.3, 868.0], [68.4, 869.0], [68.5, 870.0], [68.6, 874.0], [68.7, 875.0], [68.8, 877.0], [68.9, 877.0], [69.0, 879.0], [69.1, 881.0], [69.2, 884.0], [69.3, 886.0], [69.4, 887.0], [69.5, 891.0], [69.6, 892.0], [69.7, 894.0], [69.8, 897.0], [69.9, 900.0], [70.0, 902.0], [70.1, 903.0], [70.2, 909.0], [70.3, 914.0], [70.4, 916.0], [70.5, 917.0], [70.6, 919.0], [70.7, 921.0], [70.8, 923.0], [70.9, 925.0], [71.0, 930.0], [71.1, 935.0], [71.2, 938.0], [71.3, 942.0], [71.4, 945.0], [71.5, 947.0], [71.6, 950.0], [71.7, 951.0], [71.8, 954.0], [71.9, 958.0], [72.0, 962.0], [72.1, 963.0], [72.2, 968.0], [72.3, 972.0], [72.4, 974.0], [72.5, 979.0], [72.6, 983.0], [72.7, 988.0], [72.8, 993.0], [72.9, 996.0], [73.0, 999.0], [73.1, 1001.0], [73.2, 1003.0], [73.3, 1008.0], [73.4, 1010.0], [73.5, 1012.0], [73.6, 1014.0], [73.7, 1019.0], [73.8, 1021.0], [73.9, 1022.0], [74.0, 1024.0], [74.1, 1028.0], [74.2, 1030.0], [74.3, 1033.0], [74.4, 1036.0], [74.5, 1038.0], [74.6, 1040.0], [74.7, 1042.0], [74.8, 1047.0], [74.9, 1049.0], [75.0, 1052.0], [75.1, 1053.0], [75.2, 1055.0], [75.3, 1056.0], [75.4, 1059.0], [75.5, 1062.0], [75.6, 1065.0], [75.7, 1067.0], [75.8, 1069.0], [75.9, 1071.0], [76.0, 1076.0], [76.1, 1077.0], [76.2, 1079.0], [76.3, 1082.0], [76.4, 1084.0], [76.5, 1087.0], [76.6, 1090.0], [76.7, 1093.0], [76.8, 1096.0], [76.9, 1098.0], [77.0, 1101.0], [77.1, 1106.0], [77.2, 1108.0], [77.3, 1112.0], [77.4, 1113.0], [77.5, 1115.0], [77.6, 1118.0], [77.7, 1120.0], [77.8, 1125.0], [77.9, 1127.0], [78.0, 1130.0], [78.1, 1133.0], [78.2, 1135.0], [78.3, 1138.0], [78.4, 1142.0], [78.5, 1146.0], [78.6, 1147.0], [78.7, 1151.0], [78.8, 1153.0], [78.9, 1155.0], [79.0, 1158.0], [79.1, 1163.0], [79.2, 1166.0], [79.3, 1169.0], [79.4, 1173.0], [79.5, 1175.0], [79.6, 1178.0], [79.7, 1180.0], [79.8, 1185.0], [79.9, 1187.0], [80.0, 1190.0], [80.1, 1193.0], [80.2, 1197.0], [80.3, 1197.0], [80.4, 1203.0], [80.5, 1205.0], [80.6, 1209.0], [80.7, 1211.0], [80.8, 1214.0], [80.9, 1216.0], [81.0, 1221.0], [81.1, 1223.0], [81.2, 1225.0], [81.3, 1231.0], [81.4, 1234.0], [81.5, 1236.0], [81.6, 1238.0], [81.7, 1244.0], [81.8, 1248.0], [81.9, 1251.0], [82.0, 1253.0], [82.1, 1255.0], [82.2, 1257.0], [82.3, 1260.0], [82.4, 1262.0], [82.5, 1267.0], [82.6, 1270.0], [82.7, 1274.0], [82.8, 1275.0], [82.9, 1277.0], [83.0, 1279.0], [83.1, 1283.0], [83.2, 1286.0], [83.3, 1291.0], [83.4, 1294.0], [83.5, 1297.0], [83.6, 1299.0], [83.7, 1304.0], [83.8, 1308.0], [83.9, 1312.0], [84.0, 1315.0], [84.1, 1322.0], [84.2, 1326.0], [84.3, 1329.0], [84.4, 1332.0], [84.5, 1336.0], [84.6, 1339.0], [84.7, 1346.0], [84.8, 1352.0], [84.9, 1355.0], [85.0, 1359.0], [85.1, 1363.0], [85.2, 1368.0], [85.3, 1371.0], [85.4, 1373.0], [85.5, 1380.0], [85.6, 1383.0], [85.7, 1386.0], [85.8, 1392.0], [85.9, 1397.0], [86.0, 1398.0], [86.1, 1400.0], [86.2, 1406.0], [86.3, 1409.0], [86.4, 1410.0], [86.5, 1418.0], [86.6, 1421.0], [86.7, 1425.0], [86.8, 1429.0], [86.9, 1433.0], [87.0, 1438.0], [87.1, 1442.0], [87.2, 1448.0], [87.3, 1451.0], [87.4, 1456.0], [87.5, 1462.0], [87.6, 1467.0], [87.7, 1470.0], [87.8, 1476.0], [87.9, 1481.0], [88.0, 1484.0], [88.1, 1491.0], [88.2, 1497.0], [88.3, 1502.0], [88.4, 1508.0], [88.5, 1511.0], [88.6, 1516.0], [88.7, 1519.0], [88.8, 1525.0], [88.9, 1530.0], [89.0, 1538.0], [89.1, 1547.0], [89.2, 1551.0], [89.3, 1555.0], [89.4, 1559.0], [89.5, 1563.0], [89.6, 1568.0], [89.7, 1569.0], [89.8, 1575.0], [89.9, 1583.0], [90.0, 1589.0], [90.1, 1598.0], [90.2, 1601.0], [90.3, 1605.0], [90.4, 1610.0], [90.5, 1626.0], [90.6, 1631.0], [90.7, 1639.0], [90.8, 1646.0], [90.9, 1648.0], [91.0, 1653.0], [91.1, 1655.0], [91.2, 1668.0], [91.3, 1673.0], [91.4, 1681.0], [91.5, 1683.0], [91.6, 1684.0], [91.7, 1694.0], [91.8, 1701.0], [91.9, 1706.0], [92.0, 1710.0], [92.1, 1715.0], [92.2, 1720.0], [92.3, 1726.0], [92.4, 1741.0], [92.5, 1746.0], [92.6, 1752.0], [92.7, 1758.0], [92.8, 1763.0], [92.9, 1771.0], [93.0, 1774.0], [93.1, 1778.0], [93.2, 1789.0], [93.3, 1800.0], [93.4, 1808.0], [93.5, 1817.0], [93.6, 1821.0], [93.7, 1830.0], [93.8, 1836.0], [93.9, 1841.0], [94.0, 1846.0], [94.1, 1855.0], [94.2, 1867.0], [94.3, 1880.0], [94.4, 1890.0], [94.5, 1893.0], [94.6, 1907.0], [94.7, 1931.0], [94.8, 1941.0], [94.9, 1949.0], [95.0, 1968.0], [95.1, 1974.0], [95.2, 1989.0], [95.3, 2000.0], [95.4, 2018.0], [95.5, 2034.0], [95.6, 2057.0], [95.7, 2063.0], [95.8, 2089.0], [95.9, 2114.0], [96.0, 2132.0], [96.1, 2157.0], [96.2, 2184.0], [96.3, 2197.0], [96.4, 2211.0], [96.5, 2239.0], [96.6, 2270.0], [96.7, 2281.0], [96.8, 2301.0], [96.9, 2335.0], [97.0, 2364.0], [97.1, 2379.0], [97.2, 2413.0], [97.3, 2444.0], [97.4, 2467.0], [97.5, 2499.0], [97.6, 2514.0], [97.7, 2531.0], [97.8, 2566.0], [97.9, 2577.0], [98.0, 2600.0], [98.1, 2614.0], [98.2, 2665.0], [98.3, 2694.0], [98.4, 2736.0], [98.5, 2772.0], [98.6, 2839.0], [98.7, 2910.0], [98.8, 2971.0], [98.9, 3009.0], [99.0, 3039.0], [99.1, 3123.0], [99.2, 3259.0], [99.3, 3351.0], [99.4, 3428.0], [99.5, 3639.0], [99.6, 3781.0], [99.7, 4439.0], [99.8, 4553.0], [99.9, 4620.0], [100.0, 4825.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1107.0, "series": [{"data": [[0.0, 31.0], [600.0, 312.0], [700.0, 324.0], [800.0, 283.0], [900.0, 165.0], [1000.0, 207.0], [1100.0, 177.0], [1200.0, 173.0], [1300.0, 128.0], [1400.0, 117.0], [1500.0, 100.0], [100.0, 1107.0], [1600.0, 85.0], [1700.0, 79.0], [1800.0, 65.0], [1900.0, 40.0], [2000.0, 30.0], [2100.0, 24.0], [2300.0, 17.0], [2200.0, 25.0], [2400.0, 22.0], [2500.0, 24.0], [2600.0, 17.0], [2700.0, 13.0], [2800.0, 6.0], [2900.0, 11.0], [3000.0, 9.0], [3100.0, 4.0], [200.0, 595.0], [3300.0, 7.0], [3200.0, 5.0], [3400.0, 5.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 3.0], [4300.0, 3.0], [4200.0, 2.0], [4400.0, 5.0], [4500.0, 5.0], [4600.0, 3.0], [300.0, 322.0], [4700.0, 2.0], [4800.0, 1.0], [400.0, 362.0], [500.0, 342.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 616.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2421.0, "series": [{"data": [[0.0, 2421.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2225.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 616.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.446153846153845, "minX": 1.60384986E12, "maxY": 12.0, "series": [{"data": [[1.60385016E12, 12.0], [1.60384986E12, 11.446153846153845], [1.60385004E12, 12.0], [1.60385022E12, 11.801204819277105], [1.60384992E12, 12.0], [1.6038501E12, 12.0], [1.60384998E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385022E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 738.0400610454028, "minX": 1.0, "maxY": 4778.0, "series": [{"data": [[8.0, 2411.5], [4.0, 4778.0], [2.0, 4671.0], [1.0, 4620.0], [9.0, 2392.0], [5.0, 1632.0], [10.0, 2516.5], [11.0, 1835.3333333333333], [6.0, 2212.5], [12.0, 738.0400610454028], [3.0, 4226.0], [7.0, 2455.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980615735461788, 745.2447738502453]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 529.95, "minX": 1.60384986E12, "maxY": 1014700.8166666667, "series": [{"data": [[1.60385016E12, 1014700.8166666667], [1.60384986E12, 47342.8], [1.60385004E12, 708500.6666666666], [1.60385022E12, 180541.2], [1.60384992E12, 803088.3166666667], [1.6038501E12, 634422.1833333333], [1.60384998E12, 862341.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60385016E12, 6995.2], [1.60384986E12, 529.95], [1.60385004E12, 9907.816666666668], [1.60385022E12, 3004.366666666667], [1.60384992E12, 7181.733333333334], [1.6038501E12, 10268.883333333333], [1.60384998E12, 7603.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385022E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 599.6171096345507, "minX": 1.60384986E12, "maxY": 904.2205513784464, "series": [{"data": [[1.60385016E12, 904.2205513784464], [1.60384986E12, 751.4153846153846], [1.60385004E12, 599.6171096345507], [1.60385022E12, 809.8554216867473], [1.60384992E12, 881.0497572815536], [1.6038501E12, 612.5757057313939], [1.60384998E12, 825.4839080459777]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385022E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 599.3222591362131, "minX": 1.60384986E12, "maxY": 903.6378446115282, "series": [{"data": [[1.60385016E12, 903.6378446115282], [1.60384986E12, 751.0461538461539], [1.60385004E12, 599.3222591362131], [1.60385022E12, 809.6114457831326], [1.60384992E12, 880.558252427185], [1.6038501E12, 612.317365269461], [1.60384998E12, 824.9954022988504]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385022E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003012048192771086, "minX": 1.60384986E12, "maxY": 2.1846153846153844, "series": [{"data": [[1.60385016E12, 0.016290726817042602], [1.60384986E12, 2.1846153846153844], [1.60385004E12, 0.009966777408637871], [1.60385022E12, 0.003012048192771086], [1.60384992E12, 0.020631067961165046], [1.6038501E12, 0.012831479897348159], [1.60384998E12, 0.016091954022988506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385022E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60384986E12, "maxY": 4825.0, "series": [{"data": [[1.60385016E12, 3639.0], [1.60384986E12, 1944.0], [1.60385004E12, 4463.0], [1.60385022E12, 4825.0], [1.60384992E12, 3507.0], [1.6038501E12, 2532.0], [1.60384998E12, 3476.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60385016E12, 127.0], [1.60384986E12, 85.0], [1.60385004E12, 42.844999712705615], [1.60385022E12, 126.0], [1.60384992E12, 113.42499980330467], [1.6038501E12, 126.0], [1.60384998E12, 137.8389997923374]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60385016E12, 127.0], [1.60384986E12, 85.0], [1.60385004E12, 43.0], [1.60385022E12, 126.0], [1.60384992E12, 114.16750007867813], [1.6038501E12, 126.0], [1.60384998E12, 138.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60385016E12, 127.0], [1.60384986E12, 85.0], [1.60385004E12, 43.0], [1.60385022E12, 126.0], [1.60384992E12, 113.83749990165234], [1.6038501E12, 126.0], [1.60384998E12, 138.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60385016E12, 121.0], [1.60384986E12, 85.0], [1.60385004E12, 34.0], [1.60385022E12, 124.0], [1.60384992E12, 102.0], [1.6038501E12, 75.0], [1.60384998E12, 124.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60385016E12, 767.5], [1.60384986E12, 662.0], [1.60385004E12, 336.5], [1.60385022E12, 478.5], [1.60384992E12, 758.5], [1.6038501E12, 479.0], [1.60384998E12, 731.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385022E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 151.0, "minX": 1.0, "maxY": 4473.0, "series": [{"data": [[2.0, 3755.0], [3.0, 2684.0], [4.0, 2070.0], [5.0, 1994.0], [6.0, 1562.5], [7.0, 1415.5], [8.0, 1428.5], [9.0, 1235.5], [10.0, 1169.0], [11.0, 1091.0], [12.0, 920.5], [13.0, 880.0], [14.0, 778.5], [15.0, 844.0], [16.0, 591.0], [17.0, 763.5], [18.0, 603.0], [19.0, 627.0], [20.0, 610.5], [21.0, 528.0], [22.0, 622.5], [23.0, 361.5], [24.0, 457.0], [25.0, 522.0], [26.0, 451.0], [27.0, 448.0], [28.0, 462.0], [29.0, 399.5], [30.0, 353.0], [31.0, 356.0], [32.0, 317.0], [33.0, 370.0], [34.0, 278.0], [35.0, 271.0], [37.0, 234.0], [36.0, 255.0], [39.0, 286.0], [38.0, 311.0], [41.0, 293.0], [42.0, 295.5], [45.0, 252.0], [44.0, 254.0], [46.0, 259.5], [47.0, 161.0], [50.0, 151.0], [52.0, 162.5], [54.0, 181.5], [57.0, 179.0], [59.0, 151.0], [1.0, 4473.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 151.0, "minX": 1.0, "maxY": 4472.0, "series": [{"data": [[2.0, 3755.0], [3.0, 2684.0], [4.0, 2070.0], [5.0, 1994.0], [6.0, 1561.0], [7.0, 1413.0], [8.0, 1425.0], [9.0, 1235.5], [10.0, 1168.5], [11.0, 1090.5], [12.0, 920.5], [13.0, 878.5], [14.0, 778.5], [15.0, 843.5], [16.0, 591.0], [17.0, 762.0], [18.0, 602.5], [19.0, 626.0], [20.0, 610.0], [21.0, 527.0], [22.0, 622.5], [23.0, 361.5], [24.0, 457.0], [25.0, 522.0], [26.0, 451.0], [27.0, 448.0], [28.0, 461.5], [29.0, 399.5], [30.0, 353.0], [31.0, 356.0], [32.0, 317.0], [33.0, 370.0], [34.0, 278.0], [35.0, 271.0], [37.0, 233.0], [36.0, 255.0], [39.0, 286.0], [38.0, 310.5], [41.0, 293.0], [42.0, 295.5], [45.0, 252.0], [44.0, 254.0], [46.0, 259.0], [47.0, 161.0], [50.0, 151.0], [52.0, 162.5], [54.0, 181.5], [57.0, 179.0], [59.0, 151.0], [1.0, 4472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60384986E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60385016E12, 13.3], [1.60384986E12, 1.2833333333333334], [1.60385004E12, 20.066666666666666], [1.60385022E12, 5.333333333333333], [1.60384992E12, 13.733333333333333], [1.6038501E12, 19.483333333333334], [1.60384998E12, 14.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385022E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60384986E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60385016E12, 13.3], [1.60384986E12, 1.0833333333333333], [1.60385004E12, 20.066666666666666], [1.60385022E12, 5.533333333333333], [1.60384992E12, 13.733333333333333], [1.6038501E12, 19.483333333333334], [1.60384998E12, 14.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60385022E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60384986E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60385016E12, 13.3], [1.60384986E12, 1.0833333333333333], [1.60385004E12, 20.066666666666666], [1.60385022E12, 5.533333333333333], [1.60384992E12, 13.733333333333333], [1.6038501E12, 19.483333333333334], [1.60384998E12, 14.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385022E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60384986E12, "maxY": 20.066666666666666, "series": [{"data": [[1.60385016E12, 13.3], [1.60384986E12, 1.0833333333333333], [1.60385004E12, 20.066666666666666], [1.60385022E12, 5.533333333333333], [1.60384992E12, 13.733333333333333], [1.6038501E12, 19.483333333333334], [1.60384998E12, 14.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60385022E12, "title": "Total Transactions Per Second"}},
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

