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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 5051.0, "series": [{"data": [[0.0, 33.0], [0.1, 40.0], [0.2, 48.0], [0.3, 69.0], [0.4, 78.0], [0.5, 104.0], [0.6, 106.0], [0.7, 108.0], [0.8, 109.0], [0.9, 110.0], [1.0, 112.0], [1.1, 113.0], [1.2, 117.0], [1.3, 120.0], [1.4, 123.0], [1.5, 124.0], [1.6, 126.0], [1.7, 128.0], [1.8, 130.0], [1.9, 130.0], [2.0, 131.0], [2.1, 131.0], [2.2, 132.0], [2.3, 132.0], [2.4, 133.0], [2.5, 133.0], [2.6, 134.0], [2.7, 134.0], [2.8, 134.0], [2.9, 135.0], [3.0, 135.0], [3.1, 136.0], [3.2, 136.0], [3.3, 136.0], [3.4, 137.0], [3.5, 137.0], [3.6, 137.0], [3.7, 138.0], [3.8, 138.0], [3.9, 138.0], [4.0, 138.0], [4.1, 138.0], [4.2, 138.0], [4.3, 138.0], [4.4, 139.0], [4.5, 139.0], [4.6, 139.0], [4.7, 139.0], [4.8, 139.0], [4.9, 139.0], [5.0, 140.0], [5.1, 140.0], [5.2, 140.0], [5.3, 140.0], [5.4, 140.0], [5.5, 141.0], [5.6, 141.0], [5.7, 141.0], [5.8, 141.0], [5.9, 141.0], [6.0, 141.0], [6.1, 142.0], [6.2, 142.0], [6.3, 142.0], [6.4, 142.0], [6.5, 142.0], [6.6, 142.0], [6.7, 143.0], [6.8, 143.0], [6.9, 143.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 144.0], [7.6, 144.0], [7.7, 144.0], [7.8, 144.0], [7.9, 144.0], [8.0, 144.0], [8.1, 144.0], [8.2, 144.0], [8.3, 144.0], [8.4, 144.0], [8.5, 145.0], [8.6, 145.0], [8.7, 145.0], [8.8, 145.0], [8.9, 145.0], [9.0, 145.0], [9.1, 145.0], [9.2, 146.0], [9.3, 146.0], [9.4, 146.0], [9.5, 146.0], [9.6, 146.0], [9.7, 146.0], [9.8, 146.0], [9.9, 146.0], [10.0, 146.0], [10.1, 147.0], [10.2, 147.0], [10.3, 147.0], [10.4, 147.0], [10.5, 147.0], [10.6, 147.0], [10.7, 147.0], [10.8, 147.0], [10.9, 147.0], [11.0, 148.0], [11.1, 148.0], [11.2, 148.0], [11.3, 148.0], [11.4, 148.0], [11.5, 148.0], [11.6, 148.0], [11.7, 148.0], [11.8, 148.0], [11.9, 148.0], [12.0, 149.0], [12.1, 149.0], [12.2, 149.0], [12.3, 149.0], [12.4, 149.0], [12.5, 149.0], [12.6, 149.0], [12.7, 149.0], [12.8, 149.0], [12.9, 150.0], [13.0, 150.0], [13.1, 150.0], [13.2, 150.0], [13.3, 150.0], [13.4, 150.0], [13.5, 150.0], [13.6, 150.0], [13.7, 151.0], [13.8, 151.0], [13.9, 151.0], [14.0, 151.0], [14.1, 151.0], [14.2, 151.0], [14.3, 151.0], [14.4, 151.0], [14.5, 151.0], [14.6, 151.0], [14.7, 152.0], [14.8, 152.0], [14.9, 152.0], [15.0, 152.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 153.0], [15.6, 153.0], [15.7, 153.0], [15.8, 153.0], [15.9, 153.0], [16.0, 153.0], [16.1, 154.0], [16.2, 154.0], [16.3, 154.0], [16.4, 154.0], [16.5, 154.0], [16.6, 154.0], [16.7, 155.0], [16.8, 155.0], [16.9, 155.0], [17.0, 155.0], [17.1, 156.0], [17.2, 156.0], [17.3, 156.0], [17.4, 156.0], [17.5, 156.0], [17.6, 156.0], [17.7, 157.0], [17.8, 157.0], [17.9, 157.0], [18.0, 157.0], [18.1, 158.0], [18.2, 158.0], [18.3, 158.0], [18.4, 159.0], [18.5, 159.0], [18.6, 159.0], [18.7, 160.0], [18.8, 160.0], [18.9, 160.0], [19.0, 160.0], [19.1, 160.0], [19.2, 161.0], [19.3, 161.0], [19.4, 161.0], [19.5, 162.0], [19.6, 162.0], [19.7, 163.0], [19.8, 163.0], [19.9, 164.0], [20.0, 164.0], [20.1, 165.0], [20.2, 165.0], [20.3, 166.0], [20.4, 166.0], [20.5, 167.0], [20.6, 167.0], [20.7, 168.0], [20.8, 169.0], [20.9, 170.0], [21.0, 172.0], [21.1, 173.0], [21.2, 173.0], [21.3, 175.0], [21.4, 175.0], [21.5, 177.0], [21.6, 178.0], [21.7, 179.0], [21.8, 181.0], [21.9, 182.0], [22.0, 183.0], [22.1, 184.0], [22.2, 186.0], [22.3, 187.0], [22.4, 188.0], [22.5, 190.0], [22.6, 191.0], [22.7, 193.0], [22.8, 195.0], [22.9, 196.0], [23.0, 198.0], [23.1, 200.0], [23.2, 202.0], [23.3, 204.0], [23.4, 207.0], [23.5, 209.0], [23.6, 211.0], [23.7, 213.0], [23.8, 214.0], [23.9, 216.0], [24.0, 218.0], [24.1, 219.0], [24.2, 221.0], [24.3, 222.0], [24.4, 224.0], [24.5, 225.0], [24.6, 226.0], [24.7, 227.0], [24.8, 228.0], [24.9, 229.0], [25.0, 229.0], [25.1, 231.0], [25.2, 232.0], [25.3, 233.0], [25.4, 234.0], [25.5, 235.0], [25.6, 236.0], [25.7, 237.0], [25.8, 238.0], [25.9, 240.0], [26.0, 240.0], [26.1, 240.0], [26.2, 241.0], [26.3, 242.0], [26.4, 242.0], [26.5, 243.0], [26.6, 243.0], [26.7, 244.0], [26.8, 245.0], [26.9, 246.0], [27.0, 248.0], [27.1, 249.0], [27.2, 249.0], [27.3, 249.0], [27.4, 250.0], [27.5, 251.0], [27.6, 252.0], [27.7, 253.0], [27.8, 254.0], [27.9, 254.0], [28.0, 255.0], [28.1, 256.0], [28.2, 256.0], [28.3, 257.0], [28.4, 257.0], [28.5, 258.0], [28.6, 259.0], [28.7, 260.0], [28.8, 261.0], [28.9, 262.0], [29.0, 262.0], [29.1, 263.0], [29.2, 263.0], [29.3, 263.0], [29.4, 264.0], [29.5, 265.0], [29.6, 265.0], [29.7, 266.0], [29.8, 267.0], [29.9, 267.0], [30.0, 268.0], [30.1, 269.0], [30.2, 269.0], [30.3, 270.0], [30.4, 271.0], [30.5, 272.0], [30.6, 272.0], [30.7, 273.0], [30.8, 273.0], [30.9, 274.0], [31.0, 274.0], [31.1, 275.0], [31.2, 275.0], [31.3, 276.0], [31.4, 276.0], [31.5, 277.0], [31.6, 278.0], [31.7, 279.0], [31.8, 280.0], [31.9, 281.0], [32.0, 282.0], [32.1, 282.0], [32.2, 283.0], [32.3, 284.0], [32.4, 285.0], [32.5, 286.0], [32.6, 287.0], [32.7, 288.0], [32.8, 289.0], [32.9, 290.0], [33.0, 291.0], [33.1, 293.0], [33.2, 294.0], [33.3, 295.0], [33.4, 296.0], [33.5, 296.0], [33.6, 297.0], [33.7, 298.0], [33.8, 300.0], [33.9, 301.0], [34.0, 302.0], [34.1, 304.0], [34.2, 305.0], [34.3, 306.0], [34.4, 307.0], [34.5, 308.0], [34.6, 310.0], [34.7, 312.0], [34.8, 313.0], [34.9, 314.0], [35.0, 315.0], [35.1, 316.0], [35.2, 317.0], [35.3, 319.0], [35.4, 320.0], [35.5, 321.0], [35.6, 321.0], [35.7, 322.0], [35.8, 324.0], [35.9, 325.0], [36.0, 327.0], [36.1, 328.0], [36.2, 329.0], [36.3, 330.0], [36.4, 333.0], [36.5, 334.0], [36.6, 336.0], [36.7, 337.0], [36.8, 341.0], [36.9, 342.0], [37.0, 343.0], [37.1, 344.0], [37.2, 346.0], [37.3, 347.0], [37.4, 349.0], [37.5, 351.0], [37.6, 354.0], [37.7, 355.0], [37.8, 355.0], [37.9, 357.0], [38.0, 358.0], [38.1, 360.0], [38.2, 362.0], [38.3, 364.0], [38.4, 366.0], [38.5, 368.0], [38.6, 370.0], [38.7, 371.0], [38.8, 373.0], [38.9, 374.0], [39.0, 376.0], [39.1, 379.0], [39.2, 380.0], [39.3, 382.0], [39.4, 385.0], [39.5, 386.0], [39.6, 387.0], [39.7, 389.0], [39.8, 390.0], [39.9, 392.0], [40.0, 393.0], [40.1, 395.0], [40.2, 396.0], [40.3, 397.0], [40.4, 398.0], [40.5, 401.0], [40.6, 402.0], [40.7, 403.0], [40.8, 404.0], [40.9, 407.0], [41.0, 408.0], [41.1, 410.0], [41.2, 412.0], [41.3, 414.0], [41.4, 418.0], [41.5, 419.0], [41.6, 423.0], [41.7, 425.0], [41.8, 427.0], [41.9, 428.0], [42.0, 429.0], [42.1, 430.0], [42.2, 430.0], [42.3, 432.0], [42.4, 433.0], [42.5, 435.0], [42.6, 435.0], [42.7, 437.0], [42.8, 438.0], [42.9, 440.0], [43.0, 442.0], [43.1, 444.0], [43.2, 446.0], [43.3, 447.0], [43.4, 451.0], [43.5, 453.0], [43.6, 454.0], [43.7, 455.0], [43.8, 458.0], [43.9, 459.0], [44.0, 463.0], [44.1, 464.0], [44.2, 466.0], [44.3, 466.0], [44.4, 467.0], [44.5, 468.0], [44.6, 468.0], [44.7, 469.0], [44.8, 470.0], [44.9, 471.0], [45.0, 473.0], [45.1, 474.0], [45.2, 475.0], [45.3, 477.0], [45.4, 478.0], [45.5, 480.0], [45.6, 481.0], [45.7, 482.0], [45.8, 483.0], [45.9, 486.0], [46.0, 488.0], [46.1, 490.0], [46.2, 492.0], [46.3, 494.0], [46.4, 496.0], [46.5, 497.0], [46.6, 498.0], [46.7, 498.0], [46.8, 501.0], [46.9, 503.0], [47.0, 505.0], [47.1, 506.0], [47.2, 508.0], [47.3, 510.0], [47.4, 512.0], [47.5, 513.0], [47.6, 515.0], [47.7, 518.0], [47.8, 519.0], [47.9, 522.0], [48.0, 523.0], [48.1, 525.0], [48.2, 526.0], [48.3, 527.0], [48.4, 530.0], [48.5, 531.0], [48.6, 534.0], [48.7, 536.0], [48.8, 537.0], [48.9, 539.0], [49.0, 540.0], [49.1, 541.0], [49.2, 544.0], [49.3, 544.0], [49.4, 545.0], [49.5, 547.0], [49.6, 548.0], [49.7, 552.0], [49.8, 553.0], [49.9, 555.0], [50.0, 556.0], [50.1, 562.0], [50.2, 564.0], [50.3, 567.0], [50.4, 570.0], [50.5, 571.0], [50.6, 572.0], [50.7, 574.0], [50.8, 575.0], [50.9, 577.0], [51.0, 578.0], [51.1, 578.0], [51.2, 580.0], [51.3, 581.0], [51.4, 582.0], [51.5, 583.0], [51.6, 585.0], [51.7, 585.0], [51.8, 587.0], [51.9, 588.0], [52.0, 589.0], [52.1, 591.0], [52.2, 592.0], [52.3, 593.0], [52.4, 595.0], [52.5, 596.0], [52.6, 597.0], [52.7, 598.0], [52.8, 601.0], [52.9, 602.0], [53.0, 603.0], [53.1, 605.0], [53.2, 607.0], [53.3, 608.0], [53.4, 611.0], [53.5, 612.0], [53.6, 614.0], [53.7, 617.0], [53.8, 618.0], [53.9, 619.0], [54.0, 620.0], [54.1, 621.0], [54.2, 623.0], [54.3, 623.0], [54.4, 625.0], [54.5, 627.0], [54.6, 628.0], [54.7, 630.0], [54.8, 632.0], [54.9, 635.0], [55.0, 637.0], [55.1, 637.0], [55.2, 639.0], [55.3, 642.0], [55.4, 644.0], [55.5, 644.0], [55.6, 646.0], [55.7, 648.0], [55.8, 652.0], [55.9, 655.0], [56.0, 656.0], [56.1, 657.0], [56.2, 658.0], [56.3, 661.0], [56.4, 664.0], [56.5, 665.0], [56.6, 667.0], [56.7, 669.0], [56.8, 670.0], [56.9, 674.0], [57.0, 675.0], [57.1, 677.0], [57.2, 677.0], [57.3, 678.0], [57.4, 679.0], [57.5, 681.0], [57.6, 684.0], [57.7, 686.0], [57.8, 687.0], [57.9, 688.0], [58.0, 689.0], [58.1, 691.0], [58.2, 693.0], [58.3, 695.0], [58.4, 696.0], [58.5, 698.0], [58.6, 699.0], [58.7, 700.0], [58.8, 701.0], [58.9, 704.0], [59.0, 705.0], [59.1, 707.0], [59.2, 710.0], [59.3, 712.0], [59.4, 714.0], [59.5, 715.0], [59.6, 717.0], [59.7, 718.0], [59.8, 720.0], [59.9, 723.0], [60.0, 724.0], [60.1, 727.0], [60.2, 729.0], [60.3, 730.0], [60.4, 732.0], [60.5, 734.0], [60.6, 735.0], [60.7, 739.0], [60.8, 741.0], [60.9, 743.0], [61.0, 744.0], [61.1, 746.0], [61.2, 748.0], [61.3, 750.0], [61.4, 751.0], [61.5, 753.0], [61.6, 755.0], [61.7, 756.0], [61.8, 758.0], [61.9, 760.0], [62.0, 761.0], [62.1, 762.0], [62.2, 766.0], [62.3, 767.0], [62.4, 770.0], [62.5, 771.0], [62.6, 772.0], [62.7, 773.0], [62.8, 775.0], [62.9, 778.0], [63.0, 780.0], [63.1, 781.0], [63.2, 782.0], [63.3, 784.0], [63.4, 785.0], [63.5, 787.0], [63.6, 789.0], [63.7, 790.0], [63.8, 790.0], [63.9, 792.0], [64.0, 794.0], [64.1, 795.0], [64.2, 796.0], [64.3, 797.0], [64.4, 801.0], [64.5, 803.0], [64.6, 804.0], [64.7, 805.0], [64.8, 807.0], [64.9, 809.0], [65.0, 810.0], [65.1, 811.0], [65.2, 814.0], [65.3, 816.0], [65.4, 818.0], [65.5, 821.0], [65.6, 822.0], [65.7, 824.0], [65.8, 826.0], [65.9, 827.0], [66.0, 829.0], [66.1, 831.0], [66.2, 832.0], [66.3, 834.0], [66.4, 835.0], [66.5, 836.0], [66.6, 837.0], [66.7, 838.0], [66.8, 840.0], [66.9, 841.0], [67.0, 843.0], [67.1, 844.0], [67.2, 847.0], [67.3, 848.0], [67.4, 849.0], [67.5, 850.0], [67.6, 852.0], [67.7, 855.0], [67.8, 857.0], [67.9, 860.0], [68.0, 861.0], [68.1, 863.0], [68.2, 868.0], [68.3, 870.0], [68.4, 873.0], [68.5, 874.0], [68.6, 874.0], [68.7, 876.0], [68.8, 879.0], [68.9, 880.0], [69.0, 881.0], [69.1, 883.0], [69.2, 884.0], [69.3, 887.0], [69.4, 888.0], [69.5, 891.0], [69.6, 893.0], [69.7, 896.0], [69.8, 899.0], [69.9, 901.0], [70.0, 903.0], [70.1, 906.0], [70.2, 909.0], [70.3, 911.0], [70.4, 915.0], [70.5, 918.0], [70.6, 920.0], [70.7, 921.0], [70.8, 928.0], [70.9, 931.0], [71.0, 937.0], [71.1, 940.0], [71.2, 943.0], [71.3, 949.0], [71.4, 952.0], [71.5, 956.0], [71.6, 958.0], [71.7, 961.0], [71.8, 963.0], [71.9, 966.0], [72.0, 969.0], [72.1, 972.0], [72.2, 974.0], [72.3, 977.0], [72.4, 979.0], [72.5, 984.0], [72.6, 986.0], [72.7, 988.0], [72.8, 991.0], [72.9, 995.0], [73.0, 997.0], [73.1, 1001.0], [73.2, 1005.0], [73.3, 1008.0], [73.4, 1009.0], [73.5, 1013.0], [73.6, 1016.0], [73.7, 1020.0], [73.8, 1021.0], [73.9, 1024.0], [74.0, 1027.0], [74.1, 1032.0], [74.2, 1035.0], [74.3, 1038.0], [74.4, 1042.0], [74.5, 1044.0], [74.6, 1047.0], [74.7, 1050.0], [74.8, 1053.0], [74.9, 1055.0], [75.0, 1057.0], [75.1, 1060.0], [75.2, 1064.0], [75.3, 1067.0], [75.4, 1071.0], [75.5, 1074.0], [75.6, 1075.0], [75.7, 1078.0], [75.8, 1080.0], [75.9, 1081.0], [76.0, 1083.0], [76.1, 1085.0], [76.2, 1087.0], [76.3, 1089.0], [76.4, 1091.0], [76.5, 1093.0], [76.6, 1095.0], [76.7, 1099.0], [76.8, 1101.0], [76.9, 1103.0], [77.0, 1104.0], [77.1, 1106.0], [77.2, 1110.0], [77.3, 1114.0], [77.4, 1119.0], [77.5, 1121.0], [77.6, 1126.0], [77.7, 1128.0], [77.8, 1130.0], [77.9, 1132.0], [78.0, 1135.0], [78.1, 1137.0], [78.2, 1138.0], [78.3, 1141.0], [78.4, 1145.0], [78.5, 1148.0], [78.6, 1151.0], [78.7, 1156.0], [78.8, 1159.0], [78.9, 1165.0], [79.0, 1171.0], [79.1, 1175.0], [79.2, 1178.0], [79.3, 1183.0], [79.4, 1185.0], [79.5, 1192.0], [79.6, 1198.0], [79.7, 1202.0], [79.8, 1206.0], [79.9, 1212.0], [80.0, 1216.0], [80.1, 1217.0], [80.2, 1220.0], [80.3, 1221.0], [80.4, 1225.0], [80.5, 1226.0], [80.6, 1230.0], [80.7, 1233.0], [80.8, 1237.0], [80.9, 1241.0], [81.0, 1245.0], [81.1, 1249.0], [81.2, 1251.0], [81.3, 1258.0], [81.4, 1261.0], [81.5, 1262.0], [81.6, 1263.0], [81.7, 1267.0], [81.8, 1271.0], [81.9, 1274.0], [82.0, 1278.0], [82.1, 1281.0], [82.2, 1282.0], [82.3, 1284.0], [82.4, 1290.0], [82.5, 1293.0], [82.6, 1295.0], [82.7, 1300.0], [82.8, 1302.0], [82.9, 1309.0], [83.0, 1313.0], [83.1, 1315.0], [83.2, 1318.0], [83.3, 1322.0], [83.4, 1330.0], [83.5, 1337.0], [83.6, 1340.0], [83.7, 1343.0], [83.8, 1352.0], [83.9, 1354.0], [84.0, 1361.0], [84.1, 1367.0], [84.2, 1373.0], [84.3, 1379.0], [84.4, 1383.0], [84.5, 1387.0], [84.6, 1389.0], [84.7, 1391.0], [84.8, 1396.0], [84.9, 1401.0], [85.0, 1409.0], [85.1, 1411.0], [85.2, 1420.0], [85.3, 1425.0], [85.4, 1428.0], [85.5, 1432.0], [85.6, 1433.0], [85.7, 1438.0], [85.8, 1442.0], [85.9, 1445.0], [86.0, 1449.0], [86.1, 1457.0], [86.2, 1463.0], [86.3, 1466.0], [86.4, 1469.0], [86.5, 1473.0], [86.6, 1478.0], [86.7, 1483.0], [86.8, 1486.0], [86.9, 1489.0], [87.0, 1495.0], [87.1, 1498.0], [87.2, 1501.0], [87.3, 1503.0], [87.4, 1507.0], [87.5, 1513.0], [87.6, 1519.0], [87.7, 1527.0], [87.8, 1530.0], [87.9, 1535.0], [88.0, 1540.0], [88.1, 1542.0], [88.2, 1545.0], [88.3, 1552.0], [88.4, 1556.0], [88.5, 1559.0], [88.6, 1565.0], [88.7, 1573.0], [88.8, 1576.0], [88.9, 1582.0], [89.0, 1587.0], [89.1, 1593.0], [89.2, 1599.0], [89.3, 1603.0], [89.4, 1611.0], [89.5, 1614.0], [89.6, 1626.0], [89.7, 1634.0], [89.8, 1639.0], [89.9, 1644.0], [90.0, 1651.0], [90.1, 1659.0], [90.2, 1665.0], [90.3, 1669.0], [90.4, 1673.0], [90.5, 1681.0], [90.6, 1692.0], [90.7, 1700.0], [90.8, 1714.0], [90.9, 1718.0], [91.0, 1726.0], [91.1, 1739.0], [91.2, 1744.0], [91.3, 1751.0], [91.4, 1758.0], [91.5, 1760.0], [91.6, 1767.0], [91.7, 1770.0], [91.8, 1777.0], [91.9, 1783.0], [92.0, 1788.0], [92.1, 1795.0], [92.2, 1800.0], [92.3, 1803.0], [92.4, 1807.0], [92.5, 1810.0], [92.6, 1817.0], [92.7, 1821.0], [92.8, 1825.0], [92.9, 1827.0], [93.0, 1829.0], [93.1, 1834.0], [93.2, 1845.0], [93.3, 1857.0], [93.4, 1868.0], [93.5, 1873.0], [93.6, 1879.0], [93.7, 1883.0], [93.8, 1891.0], [93.9, 1899.0], [94.0, 1907.0], [94.1, 1914.0], [94.2, 1924.0], [94.3, 1939.0], [94.4, 1947.0], [94.5, 1956.0], [94.6, 1965.0], [94.7, 1979.0], [94.8, 1989.0], [94.9, 2009.0], [95.0, 2016.0], [95.1, 2031.0], [95.2, 2046.0], [95.3, 2053.0], [95.4, 2067.0], [95.5, 2079.0], [95.6, 2098.0], [95.7, 2106.0], [95.8, 2115.0], [95.9, 2129.0], [96.0, 2142.0], [96.1, 2178.0], [96.2, 2199.0], [96.3, 2214.0], [96.4, 2228.0], [96.5, 2234.0], [96.6, 2248.0], [96.7, 2284.0], [96.8, 2301.0], [96.9, 2325.0], [97.0, 2348.0], [97.1, 2392.0], [97.2, 2404.0], [97.3, 2418.0], [97.4, 2428.0], [97.5, 2438.0], [97.6, 2455.0], [97.7, 2498.0], [97.8, 2535.0], [97.9, 2593.0], [98.0, 2626.0], [98.1, 2650.0], [98.2, 2685.0], [98.3, 2708.0], [98.4, 2769.0], [98.5, 2822.0], [98.6, 2873.0], [98.7, 2938.0], [98.8, 3041.0], [98.9, 3076.0], [99.0, 3120.0], [99.1, 3173.0], [99.2, 3300.0], [99.3, 3354.0], [99.4, 3446.0], [99.5, 3638.0], [99.6, 3817.0], [99.7, 4392.0], [99.8, 4461.0], [99.9, 4697.0], [100.0, 5051.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1191.0, "series": [{"data": [[0.0, 25.0], [600.0, 311.0], [700.0, 300.0], [800.0, 292.0], [900.0, 167.0], [1000.0, 194.0], [1100.0, 153.0], [1200.0, 161.0], [1300.0, 115.0], [1400.0, 120.0], [1500.0, 109.0], [100.0, 1191.0], [1600.0, 78.0], [1700.0, 79.0], [1800.0, 91.0], [1900.0, 52.0], [2000.0, 38.0], [2100.0, 31.0], [2300.0, 19.0], [2200.0, 31.0], [2400.0, 30.0], [2500.0, 10.0], [2600.0, 20.0], [2700.0, 8.0], [2800.0, 11.0], [2900.0, 6.0], [3000.0, 10.0], [3100.0, 10.0], [200.0, 563.0], [3300.0, 8.0], [3200.0, 2.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 4.0], [3700.0, 2.0], [3800.0, 1.0], [4200.0, 2.0], [4300.0, 4.0], [4400.0, 5.0], [4600.0, 4.0], [4500.0, 1.0], [300.0, 353.0], [4700.0, 3.0], [5000.0, 2.0], [400.0, 333.0], [500.0, 316.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 676.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2467.0, "series": [{"data": [[0.0, 2467.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2129.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 676.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.86105263157895, "minX": 1.60219476E12, "maxY": 12.0, "series": [{"data": [[1.60219476E12, 11.937414965986388], [1.60219506E12, 11.86105263157895], [1.60219488E12, 12.0], [1.60219494E12, 12.0], [1.60219482E12, 12.0], [1.602195E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 740.5349590398171, "minX": 1.0, "maxY": 4723.0, "series": [{"data": [[4.0, 2371.5], [8.0, 2619.5], [2.0, 4723.0], [1.0, 4566.0], [9.0, 2327.5], [5.0, 1618.3333333333333], [10.0, 2445.5], [11.0, 1355.8], [6.0, 2211.0], [12.0, 740.5349590398171], [3.0, 4392.0], [7.0, 2432.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.97875569044004, 747.5716995447641]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4180.4, "minX": 1.60219476E12, "maxY": 1042358.65, "series": [{"data": [[1.60219476E12, 600636.1333333333], [1.60219506E12, 483506.81666666665], [1.60219488E12, 703597.5], [1.60219494E12, 505146.5833333333], [1.60219482E12, 956354.5], [1.602195E12, 1042358.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219476E12, 6299.466666666666], [1.60219506E12, 4180.4], [1.60219488E12, 11112.4], [1.60219494E12, 9310.116666666667], [1.60219482E12, 6240.383333333333], [1.602195E12, 8436.783333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 546.4067669172923, "minX": 1.60219476E12, "maxY": 1015.2778947368416, "series": [{"data": [[1.60219476E12, 795.5129251700681], [1.60219506E12, 1015.2778947368416], [1.60219488E12, 546.4067669172923], [1.60219494E12, 689.7550432276656], [1.60219482E12, 1004.541143654114], [1.602195E12, 728.1591375770023]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 546.1751879699249, "minX": 1.60219476E12, "maxY": 1014.8210526315794, "series": [{"data": [[1.60219476E12, 795.1278911564625], [1.60219506E12, 1014.8210526315794], [1.60219488E12, 546.1751879699249], [1.60219494E12, 689.5331412103748], [1.60219482E12, 1003.9623430962353], [1.602195E12, 727.665297741274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010526315789473705, "minX": 1.60219476E12, "maxY": 0.13741496598639444, "series": [{"data": [[1.60219476E12, 0.13741496598639444], [1.60219506E12, 0.029473684210526367], [1.60219488E12, 0.010526315789473705], [1.60219494E12, 0.015369836695485134], [1.60219482E12, 0.02231520223152023], [1.602195E12, 0.014373716632443547]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60219476E12, "maxY": 5051.0, "series": [{"data": [[1.60219476E12, 3164.0], [1.60219506E12, 5051.0], [1.60219488E12, 4446.0], [1.60219494E12, 3138.0], [1.60219482E12, 3631.0], [1.602195E12, 3484.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219476E12, 131.62399982452393], [1.60219506E12, 130.0], [1.60219488E12, 132.0], [1.60219494E12, 43.75599950313568], [1.60219482E12, 106.46199982881546], [1.602195E12, 113.77499976754189]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219476E12, 132.28640007019044], [1.60219506E12, 130.0], [1.60219488E12, 132.0], [1.60219494E12, 45.94740029811859], [1.60219482E12, 107.0], [1.602195E12, 115.95750027894974]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219476E12, 131.99199991226197], [1.60219506E12, 130.0], [1.60219488E12, 132.0], [1.60219494E12, 44.79799975156784], [1.60219482E12, 106.82099991440774], [1.602195E12, 114.78749965131283]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219476E12, 69.0], [1.60219506E12, 125.0], [1.60219488E12, 105.0], [1.60219494E12, 33.0], [1.60219482E12, 94.0], [1.602195E12, 109.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219476E12, 716.0], [1.60219506E12, 784.0], [1.60219488E12, 291.0], [1.60219494E12, 538.0], [1.60219482E12, 862.0], [1.602195E12, 589.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 145.5, "minX": 1.0, "maxY": 4711.0, "series": [{"data": [[2.0, 3864.0], [3.0, 2948.0], [4.0, 1761.0], [5.0, 1942.0], [6.0, 1824.0], [7.0, 1427.0], [8.0, 1423.5], [9.0, 1296.5], [10.0, 1153.5], [11.0, 1020.0], [12.0, 1021.5], [13.0, 971.0], [14.0, 826.5], [15.0, 720.5], [16.0, 708.0], [17.0, 587.0], [18.0, 629.0], [19.0, 570.0], [20.0, 677.5], [21.0, 542.0], [22.0, 274.0], [23.0, 442.0], [24.0, 546.0], [25.0, 429.0], [26.0, 469.0], [27.0, 356.0], [28.0, 317.0], [29.0, 379.5], [30.0, 389.5], [31.0, 387.0], [32.0, 378.0], [33.0, 345.0], [35.0, 269.0], [34.0, 306.0], [37.0, 322.0], [36.0, 301.5], [38.0, 211.5], [39.0, 162.0], [40.0, 157.0], [41.0, 304.0], [42.0, 243.0], [44.0, 159.5], [46.0, 267.0], [47.0, 282.0], [49.0, 204.0], [48.0, 149.5], [51.0, 244.0], [54.0, 145.5], [69.0, 152.0], [1.0, 4711.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 69.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 145.5, "minX": 1.0, "maxY": 4710.0, "series": [{"data": [[2.0, 3864.0], [3.0, 2946.0], [4.0, 1760.0], [5.0, 1942.0], [6.0, 1822.0], [7.0, 1425.0], [8.0, 1423.0], [9.0, 1296.0], [10.0, 1153.5], [11.0, 1020.0], [12.0, 1021.5], [13.0, 971.0], [14.0, 825.5], [15.0, 720.0], [16.0, 708.0], [17.0, 587.0], [18.0, 629.0], [19.0, 569.5], [20.0, 677.5], [21.0, 542.0], [22.0, 274.0], [23.0, 442.0], [24.0, 546.0], [25.0, 428.0], [26.0, 468.5], [27.0, 356.0], [28.0, 316.0], [29.0, 378.5], [30.0, 389.5], [31.0, 386.0], [32.0, 378.0], [33.0, 344.5], [35.0, 269.0], [34.0, 306.0], [37.0, 322.0], [36.0, 301.0], [38.0, 211.5], [39.0, 162.0], [40.0, 157.0], [41.0, 304.0], [42.0, 243.0], [44.0, 159.5], [46.0, 267.0], [47.0, 282.0], [49.0, 204.0], [48.0, 149.5], [51.0, 244.0], [54.0, 145.5], [69.0, 152.0], [1.0, 4710.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 69.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.60219476E12, "maxY": 22.166666666666668, "series": [{"data": [[1.60219476E12, 12.45], [1.60219506E12, 7.716666666666667], [1.60219488E12, 22.166666666666668], [1.60219494E12, 17.35], [1.60219482E12, 11.95], [1.602195E12, 16.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.916666666666667, "minX": 1.60219476E12, "maxY": 22.166666666666668, "series": [{"data": [[1.60219476E12, 12.25], [1.60219506E12, 7.916666666666667], [1.60219488E12, 22.166666666666668], [1.60219494E12, 17.35], [1.60219482E12, 11.95], [1.602195E12, 16.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.916666666666667, "minX": 1.60219476E12, "maxY": 22.166666666666668, "series": [{"data": [[1.60219476E12, 12.25], [1.60219506E12, 7.916666666666667], [1.60219488E12, 22.166666666666668], [1.60219494E12, 17.35], [1.60219482E12, 11.95], [1.602195E12, 16.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.916666666666667, "minX": 1.60219476E12, "maxY": 22.166666666666668, "series": [{"data": [[1.60219476E12, 12.25], [1.60219506E12, 7.916666666666667], [1.60219488E12, 22.166666666666668], [1.60219494E12, 17.35], [1.60219482E12, 11.95], [1.602195E12, 16.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219506E12, "title": "Total Transactions Per Second"}},
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

