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
        data: {"result": {"minY": 36.0, "minX": 0.0, "maxY": 4702.0, "series": [{"data": [[0.0, 36.0], [0.1, 44.0], [0.2, 52.0], [0.3, 105.0], [0.4, 111.0], [0.5, 115.0], [0.6, 117.0], [0.7, 118.0], [0.8, 120.0], [0.9, 121.0], [1.0, 122.0], [1.1, 124.0], [1.2, 125.0], [1.3, 126.0], [1.4, 128.0], [1.5, 129.0], [1.6, 132.0], [1.7, 135.0], [1.8, 136.0], [1.9, 136.0], [2.0, 138.0], [2.1, 138.0], [2.2, 139.0], [2.3, 139.0], [2.4, 140.0], [2.5, 141.0], [2.6, 141.0], [2.7, 142.0], [2.8, 142.0], [2.9, 143.0], [3.0, 143.0], [3.1, 143.0], [3.2, 144.0], [3.3, 144.0], [3.4, 145.0], [3.5, 145.0], [3.6, 145.0], [3.7, 146.0], [3.8, 146.0], [3.9, 146.0], [4.0, 146.0], [4.1, 147.0], [4.2, 147.0], [4.3, 147.0], [4.4, 147.0], [4.5, 148.0], [4.6, 148.0], [4.7, 148.0], [4.8, 148.0], [4.9, 148.0], [5.0, 149.0], [5.1, 149.0], [5.2, 149.0], [5.3, 149.0], [5.4, 149.0], [5.5, 150.0], [5.6, 150.0], [5.7, 150.0], [5.8, 150.0], [5.9, 150.0], [6.0, 151.0], [6.1, 151.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 151.0], [6.7, 152.0], [6.8, 152.0], [6.9, 152.0], [7.0, 152.0], [7.1, 152.0], [7.2, 152.0], [7.3, 153.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 153.0], [7.8, 153.0], [7.9, 153.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 154.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 155.0], [9.1, 155.0], [9.2, 155.0], [9.3, 156.0], [9.4, 156.0], [9.5, 156.0], [9.6, 156.0], [9.7, 156.0], [9.8, 156.0], [9.9, 156.0], [10.0, 156.0], [10.1, 157.0], [10.2, 157.0], [10.3, 157.0], [10.4, 157.0], [10.5, 157.0], [10.6, 157.0], [10.7, 157.0], [10.8, 158.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 158.0], [11.4, 159.0], [11.5, 159.0], [11.6, 159.0], [11.7, 159.0], [11.8, 159.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 160.0], [12.4, 160.0], [12.5, 161.0], [12.6, 161.0], [12.7, 161.0], [12.8, 161.0], [12.9, 161.0], [13.0, 162.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 162.0], [13.6, 163.0], [13.7, 163.0], [13.8, 163.0], [13.9, 163.0], [14.0, 163.0], [14.1, 164.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 165.0], [14.6, 165.0], [14.7, 165.0], [14.8, 165.0], [14.9, 165.0], [15.0, 165.0], [15.1, 166.0], [15.2, 166.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 167.0], [15.9, 167.0], [16.0, 167.0], [16.1, 168.0], [16.2, 168.0], [16.3, 168.0], [16.4, 168.0], [16.5, 169.0], [16.6, 169.0], [16.7, 169.0], [16.8, 170.0], [16.9, 170.0], [17.0, 170.0], [17.1, 170.0], [17.2, 170.0], [17.3, 171.0], [17.4, 171.0], [17.5, 171.0], [17.6, 171.0], [17.7, 172.0], [17.8, 172.0], [17.9, 172.0], [18.0, 172.0], [18.1, 173.0], [18.2, 173.0], [18.3, 173.0], [18.4, 174.0], [18.5, 174.0], [18.6, 174.0], [18.7, 174.0], [18.8, 175.0], [18.9, 175.0], [19.0, 175.0], [19.1, 176.0], [19.2, 176.0], [19.3, 177.0], [19.4, 177.0], [19.5, 177.0], [19.6, 177.0], [19.7, 178.0], [19.8, 178.0], [19.9, 178.0], [20.0, 179.0], [20.1, 179.0], [20.2, 180.0], [20.3, 181.0], [20.4, 181.0], [20.5, 182.0], [20.6, 182.0], [20.7, 183.0], [20.8, 183.0], [20.9, 184.0], [21.0, 184.0], [21.1, 185.0], [21.2, 187.0], [21.3, 187.0], [21.4, 188.0], [21.5, 189.0], [21.6, 190.0], [21.7, 192.0], [21.8, 192.0], [21.9, 194.0], [22.0, 195.0], [22.1, 196.0], [22.2, 198.0], [22.3, 200.0], [22.4, 201.0], [22.5, 203.0], [22.6, 204.0], [22.7, 206.0], [22.8, 207.0], [22.9, 208.0], [23.0, 209.0], [23.1, 210.0], [23.2, 212.0], [23.3, 214.0], [23.4, 216.0], [23.5, 217.0], [23.6, 218.0], [23.7, 219.0], [23.8, 219.0], [23.9, 220.0], [24.0, 222.0], [24.1, 222.0], [24.2, 223.0], [24.3, 224.0], [24.4, 224.0], [24.5, 225.0], [24.6, 226.0], [24.7, 227.0], [24.8, 228.0], [24.9, 230.0], [25.0, 230.0], [25.1, 231.0], [25.2, 231.0], [25.3, 232.0], [25.4, 233.0], [25.5, 234.0], [25.6, 234.0], [25.7, 236.0], [25.8, 237.0], [25.9, 238.0], [26.0, 239.0], [26.1, 240.0], [26.2, 240.0], [26.3, 241.0], [26.4, 241.0], [26.5, 242.0], [26.6, 243.0], [26.7, 244.0], [26.8, 245.0], [26.9, 246.0], [27.0, 246.0], [27.1, 247.0], [27.2, 247.0], [27.3, 248.0], [27.4, 249.0], [27.5, 249.0], [27.6, 250.0], [27.7, 250.0], [27.8, 250.0], [27.9, 251.0], [28.0, 252.0], [28.1, 252.0], [28.2, 253.0], [28.3, 253.0], [28.4, 254.0], [28.5, 254.0], [28.6, 255.0], [28.7, 255.0], [28.8, 256.0], [28.9, 257.0], [29.0, 257.0], [29.1, 258.0], [29.2, 259.0], [29.3, 260.0], [29.4, 260.0], [29.5, 261.0], [29.6, 262.0], [29.7, 262.0], [29.8, 263.0], [29.9, 264.0], [30.0, 264.0], [30.1, 265.0], [30.2, 266.0], [30.3, 267.0], [30.4, 267.0], [30.5, 268.0], [30.6, 268.0], [30.7, 269.0], [30.8, 269.0], [30.9, 270.0], [31.0, 271.0], [31.1, 272.0], [31.2, 272.0], [31.3, 273.0], [31.4, 274.0], [31.5, 275.0], [31.6, 275.0], [31.7, 277.0], [31.8, 278.0], [31.9, 279.0], [32.0, 280.0], [32.1, 281.0], [32.2, 282.0], [32.3, 283.0], [32.4, 284.0], [32.5, 286.0], [32.6, 287.0], [32.7, 288.0], [32.8, 289.0], [32.9, 290.0], [33.0, 290.0], [33.1, 292.0], [33.2, 293.0], [33.3, 294.0], [33.4, 295.0], [33.5, 296.0], [33.6, 296.0], [33.7, 297.0], [33.8, 298.0], [33.9, 299.0], [34.0, 299.0], [34.1, 300.0], [34.2, 301.0], [34.3, 302.0], [34.4, 303.0], [34.5, 304.0], [34.6, 305.0], [34.7, 307.0], [34.8, 309.0], [34.9, 310.0], [35.0, 311.0], [35.1, 313.0], [35.2, 314.0], [35.3, 315.0], [35.4, 316.0], [35.5, 318.0], [35.6, 319.0], [35.7, 323.0], [35.8, 325.0], [35.9, 326.0], [36.0, 328.0], [36.1, 329.0], [36.2, 329.0], [36.3, 331.0], [36.4, 331.0], [36.5, 332.0], [36.6, 335.0], [36.7, 336.0], [36.8, 338.0], [36.9, 338.0], [37.0, 339.0], [37.1, 341.0], [37.2, 343.0], [37.3, 344.0], [37.4, 345.0], [37.5, 346.0], [37.6, 347.0], [37.7, 348.0], [37.8, 350.0], [37.9, 351.0], [38.0, 353.0], [38.1, 354.0], [38.2, 355.0], [38.3, 357.0], [38.4, 358.0], [38.5, 359.0], [38.6, 361.0], [38.7, 363.0], [38.8, 364.0], [38.9, 366.0], [39.0, 367.0], [39.1, 368.0], [39.2, 371.0], [39.3, 372.0], [39.4, 375.0], [39.5, 376.0], [39.6, 377.0], [39.7, 379.0], [39.8, 379.0], [39.9, 381.0], [40.0, 382.0], [40.1, 384.0], [40.2, 387.0], [40.3, 390.0], [40.4, 391.0], [40.5, 392.0], [40.6, 395.0], [40.7, 396.0], [40.8, 397.0], [40.9, 400.0], [41.0, 401.0], [41.1, 403.0], [41.2, 404.0], [41.3, 406.0], [41.4, 409.0], [41.5, 411.0], [41.6, 412.0], [41.7, 414.0], [41.8, 416.0], [41.9, 418.0], [42.0, 419.0], [42.1, 420.0], [42.2, 420.0], [42.3, 422.0], [42.4, 424.0], [42.5, 425.0], [42.6, 427.0], [42.7, 428.0], [42.8, 430.0], [42.9, 432.0], [43.0, 433.0], [43.1, 434.0], [43.2, 436.0], [43.3, 437.0], [43.4, 440.0], [43.5, 441.0], [43.6, 443.0], [43.7, 445.0], [43.8, 446.0], [43.9, 448.0], [44.0, 450.0], [44.1, 451.0], [44.2, 452.0], [44.3, 453.0], [44.4, 454.0], [44.5, 457.0], [44.6, 458.0], [44.7, 459.0], [44.8, 460.0], [44.9, 461.0], [45.0, 463.0], [45.1, 464.0], [45.2, 465.0], [45.3, 465.0], [45.4, 467.0], [45.5, 470.0], [45.6, 472.0], [45.7, 473.0], [45.8, 474.0], [45.9, 476.0], [46.0, 478.0], [46.1, 479.0], [46.2, 480.0], [46.3, 481.0], [46.4, 483.0], [46.5, 483.0], [46.6, 484.0], [46.7, 485.0], [46.8, 486.0], [46.9, 488.0], [47.0, 489.0], [47.1, 491.0], [47.2, 493.0], [47.3, 494.0], [47.4, 495.0], [47.5, 497.0], [47.6, 498.0], [47.7, 499.0], [47.8, 500.0], [47.9, 503.0], [48.0, 504.0], [48.1, 505.0], [48.2, 506.0], [48.3, 508.0], [48.4, 508.0], [48.5, 510.0], [48.6, 511.0], [48.7, 513.0], [48.8, 514.0], [48.9, 515.0], [49.0, 516.0], [49.1, 517.0], [49.2, 519.0], [49.3, 521.0], [49.4, 522.0], [49.5, 525.0], [49.6, 529.0], [49.7, 531.0], [49.8, 535.0], [49.9, 538.0], [50.0, 540.0], [50.1, 543.0], [50.2, 544.0], [50.3, 546.0], [50.4, 549.0], [50.5, 549.0], [50.6, 550.0], [50.7, 552.0], [50.8, 553.0], [50.9, 553.0], [51.0, 554.0], [51.1, 555.0], [51.2, 556.0], [51.3, 558.0], [51.4, 559.0], [51.5, 560.0], [51.6, 563.0], [51.7, 564.0], [51.8, 565.0], [51.9, 566.0], [52.0, 568.0], [52.1, 569.0], [52.2, 569.0], [52.3, 572.0], [52.4, 574.0], [52.5, 576.0], [52.6, 578.0], [52.7, 580.0], [52.8, 581.0], [52.9, 583.0], [53.0, 585.0], [53.1, 587.0], [53.2, 588.0], [53.3, 590.0], [53.4, 591.0], [53.5, 592.0], [53.6, 593.0], [53.7, 594.0], [53.8, 594.0], [53.9, 596.0], [54.0, 598.0], [54.1, 599.0], [54.2, 600.0], [54.3, 601.0], [54.4, 602.0], [54.5, 605.0], [54.6, 606.0], [54.7, 608.0], [54.8, 609.0], [54.9, 611.0], [55.0, 612.0], [55.1, 613.0], [55.2, 614.0], [55.3, 615.0], [55.4, 617.0], [55.5, 618.0], [55.6, 619.0], [55.7, 622.0], [55.8, 623.0], [55.9, 625.0], [56.0, 626.0], [56.1, 628.0], [56.2, 630.0], [56.3, 632.0], [56.4, 632.0], [56.5, 634.0], [56.6, 636.0], [56.7, 638.0], [56.8, 641.0], [56.9, 642.0], [57.0, 644.0], [57.1, 645.0], [57.2, 646.0], [57.3, 647.0], [57.4, 648.0], [57.5, 649.0], [57.6, 650.0], [57.7, 652.0], [57.8, 653.0], [57.9, 654.0], [58.0, 655.0], [58.1, 656.0], [58.2, 658.0], [58.3, 659.0], [58.4, 661.0], [58.5, 663.0], [58.6, 665.0], [58.7, 666.0], [58.8, 668.0], [58.9, 669.0], [59.0, 670.0], [59.1, 672.0], [59.2, 673.0], [59.3, 674.0], [59.4, 674.0], [59.5, 675.0], [59.6, 675.0], [59.7, 677.0], [59.8, 678.0], [59.9, 680.0], [60.0, 683.0], [60.1, 685.0], [60.2, 689.0], [60.3, 691.0], [60.4, 693.0], [60.5, 694.0], [60.6, 695.0], [60.7, 699.0], [60.8, 701.0], [60.9, 704.0], [61.0, 705.0], [61.1, 708.0], [61.2, 709.0], [61.3, 711.0], [61.4, 713.0], [61.5, 716.0], [61.6, 718.0], [61.7, 720.0], [61.8, 721.0], [61.9, 723.0], [62.0, 727.0], [62.1, 729.0], [62.2, 731.0], [62.3, 734.0], [62.4, 736.0], [62.5, 738.0], [62.6, 739.0], [62.7, 740.0], [62.8, 742.0], [62.9, 744.0], [63.0, 746.0], [63.1, 747.0], [63.2, 748.0], [63.3, 749.0], [63.4, 752.0], [63.5, 753.0], [63.6, 756.0], [63.7, 757.0], [63.8, 758.0], [63.9, 760.0], [64.0, 761.0], [64.1, 764.0], [64.2, 766.0], [64.3, 767.0], [64.4, 770.0], [64.5, 772.0], [64.6, 773.0], [64.7, 774.0], [64.8, 776.0], [64.9, 778.0], [65.0, 779.0], [65.1, 780.0], [65.2, 782.0], [65.3, 783.0], [65.4, 785.0], [65.5, 785.0], [65.6, 787.0], [65.7, 788.0], [65.8, 789.0], [65.9, 790.0], [66.0, 793.0], [66.1, 795.0], [66.2, 798.0], [66.3, 800.0], [66.4, 801.0], [66.5, 802.0], [66.6, 804.0], [66.7, 805.0], [66.8, 807.0], [66.9, 807.0], [67.0, 808.0], [67.1, 810.0], [67.2, 812.0], [67.3, 813.0], [67.4, 815.0], [67.5, 816.0], [67.6, 818.0], [67.7, 820.0], [67.8, 822.0], [67.9, 824.0], [68.0, 826.0], [68.1, 829.0], [68.2, 829.0], [68.3, 831.0], [68.4, 833.0], [68.5, 836.0], [68.6, 840.0], [68.7, 841.0], [68.8, 843.0], [68.9, 845.0], [69.0, 848.0], [69.1, 852.0], [69.2, 853.0], [69.3, 855.0], [69.4, 857.0], [69.5, 859.0], [69.6, 861.0], [69.7, 862.0], [69.8, 864.0], [69.9, 866.0], [70.0, 868.0], [70.1, 870.0], [70.2, 874.0], [70.3, 876.0], [70.4, 878.0], [70.5, 881.0], [70.6, 883.0], [70.7, 884.0], [70.8, 886.0], [70.9, 888.0], [71.0, 891.0], [71.1, 893.0], [71.2, 894.0], [71.3, 896.0], [71.4, 897.0], [71.5, 900.0], [71.6, 902.0], [71.7, 904.0], [71.8, 905.0], [71.9, 907.0], [72.0, 910.0], [72.1, 914.0], [72.2, 917.0], [72.3, 920.0], [72.4, 924.0], [72.5, 926.0], [72.6, 927.0], [72.7, 929.0], [72.8, 932.0], [72.9, 935.0], [73.0, 937.0], [73.1, 942.0], [73.2, 945.0], [73.3, 949.0], [73.4, 953.0], [73.5, 954.0], [73.6, 956.0], [73.7, 957.0], [73.8, 958.0], [73.9, 960.0], [74.0, 961.0], [74.1, 963.0], [74.2, 965.0], [74.3, 970.0], [74.4, 972.0], [74.5, 975.0], [74.6, 977.0], [74.7, 981.0], [74.8, 983.0], [74.9, 986.0], [75.0, 988.0], [75.1, 989.0], [75.2, 991.0], [75.3, 992.0], [75.4, 993.0], [75.5, 997.0], [75.6, 999.0], [75.7, 1002.0], [75.8, 1005.0], [75.9, 1010.0], [76.0, 1012.0], [76.1, 1014.0], [76.2, 1016.0], [76.3, 1018.0], [76.4, 1022.0], [76.5, 1024.0], [76.6, 1026.0], [76.7, 1028.0], [76.8, 1030.0], [76.9, 1034.0], [77.0, 1036.0], [77.1, 1040.0], [77.2, 1042.0], [77.3, 1043.0], [77.4, 1044.0], [77.5, 1047.0], [77.6, 1050.0], [77.7, 1052.0], [77.8, 1053.0], [77.9, 1057.0], [78.0, 1059.0], [78.1, 1061.0], [78.2, 1062.0], [78.3, 1063.0], [78.4, 1065.0], [78.5, 1067.0], [78.6, 1070.0], [78.7, 1072.0], [78.8, 1073.0], [78.9, 1075.0], [79.0, 1078.0], [79.1, 1081.0], [79.2, 1085.0], [79.3, 1086.0], [79.4, 1092.0], [79.5, 1095.0], [79.6, 1097.0], [79.7, 1103.0], [79.8, 1104.0], [79.9, 1105.0], [80.0, 1108.0], [80.1, 1109.0], [80.2, 1112.0], [80.3, 1114.0], [80.4, 1119.0], [80.5, 1121.0], [80.6, 1123.0], [80.7, 1125.0], [80.8, 1128.0], [80.9, 1131.0], [81.0, 1135.0], [81.1, 1138.0], [81.2, 1140.0], [81.3, 1142.0], [81.4, 1146.0], [81.5, 1151.0], [81.6, 1155.0], [81.7, 1158.0], [81.8, 1161.0], [81.9, 1163.0], [82.0, 1166.0], [82.1, 1168.0], [82.2, 1169.0], [82.3, 1172.0], [82.4, 1174.0], [82.5, 1182.0], [82.6, 1183.0], [82.7, 1185.0], [82.8, 1190.0], [82.9, 1193.0], [83.0, 1196.0], [83.1, 1199.0], [83.2, 1201.0], [83.3, 1204.0], [83.4, 1207.0], [83.5, 1208.0], [83.6, 1214.0], [83.7, 1217.0], [83.8, 1220.0], [83.9, 1223.0], [84.0, 1227.0], [84.1, 1232.0], [84.2, 1234.0], [84.3, 1236.0], [84.4, 1240.0], [84.5, 1244.0], [84.6, 1249.0], [84.7, 1253.0], [84.8, 1257.0], [84.9, 1261.0], [85.0, 1266.0], [85.1, 1268.0], [85.2, 1271.0], [85.3, 1275.0], [85.4, 1276.0], [85.5, 1280.0], [85.6, 1283.0], [85.7, 1285.0], [85.8, 1290.0], [85.9, 1301.0], [86.0, 1305.0], [86.1, 1307.0], [86.2, 1312.0], [86.3, 1318.0], [86.4, 1322.0], [86.5, 1330.0], [86.6, 1333.0], [86.7, 1336.0], [86.8, 1340.0], [86.9, 1346.0], [87.0, 1351.0], [87.1, 1355.0], [87.2, 1359.0], [87.3, 1362.0], [87.4, 1364.0], [87.5, 1368.0], [87.6, 1371.0], [87.7, 1376.0], [87.8, 1381.0], [87.9, 1388.0], [88.0, 1395.0], [88.1, 1400.0], [88.2, 1404.0], [88.3, 1410.0], [88.4, 1412.0], [88.5, 1415.0], [88.6, 1418.0], [88.7, 1422.0], [88.8, 1424.0], [88.9, 1426.0], [89.0, 1431.0], [89.1, 1434.0], [89.2, 1440.0], [89.3, 1445.0], [89.4, 1449.0], [89.5, 1457.0], [89.6, 1464.0], [89.7, 1473.0], [89.8, 1478.0], [89.9, 1486.0], [90.0, 1488.0], [90.1, 1495.0], [90.2, 1502.0], [90.3, 1508.0], [90.4, 1513.0], [90.5, 1519.0], [90.6, 1525.0], [90.7, 1529.0], [90.8, 1534.0], [90.9, 1540.0], [91.0, 1547.0], [91.1, 1551.0], [91.2, 1555.0], [91.3, 1568.0], [91.4, 1575.0], [91.5, 1581.0], [91.6, 1583.0], [91.7, 1587.0], [91.8, 1592.0], [91.9, 1596.0], [92.0, 1603.0], [92.1, 1609.0], [92.2, 1615.0], [92.3, 1623.0], [92.4, 1629.0], [92.5, 1637.0], [92.6, 1642.0], [92.7, 1646.0], [92.8, 1654.0], [92.9, 1658.0], [93.0, 1669.0], [93.1, 1678.0], [93.2, 1684.0], [93.3, 1693.0], [93.4, 1697.0], [93.5, 1702.0], [93.6, 1709.0], [93.7, 1721.0], [93.8, 1727.0], [93.9, 1743.0], [94.0, 1749.0], [94.1, 1754.0], [94.2, 1765.0], [94.3, 1776.0], [94.4, 1782.0], [94.5, 1795.0], [94.6, 1805.0], [94.7, 1814.0], [94.8, 1837.0], [94.9, 1845.0], [95.0, 1849.0], [95.1, 1856.0], [95.2, 1865.0], [95.3, 1877.0], [95.4, 1893.0], [95.5, 1931.0], [95.6, 1952.0], [95.7, 1958.0], [95.8, 1977.0], [95.9, 1990.0], [96.0, 1995.0], [96.1, 2021.0], [96.2, 2036.0], [96.3, 2047.0], [96.4, 2057.0], [96.5, 2074.0], [96.6, 2105.0], [96.7, 2122.0], [96.8, 2134.0], [96.9, 2148.0], [97.0, 2184.0], [97.1, 2192.0], [97.2, 2240.0], [97.3, 2263.0], [97.4, 2289.0], [97.5, 2315.0], [97.6, 2339.0], [97.7, 2347.0], [97.8, 2367.0], [97.9, 2386.0], [98.0, 2404.0], [98.1, 2418.0], [98.2, 2456.0], [98.3, 2488.0], [98.4, 2539.0], [98.5, 2576.0], [98.6, 2634.0], [98.7, 2688.0], [98.8, 2729.0], [98.9, 2809.0], [99.0, 2898.0], [99.1, 2987.0], [99.2, 3046.0], [99.3, 3162.0], [99.4, 3250.0], [99.5, 3313.0], [99.6, 3554.0], [99.7, 4012.0], [99.8, 4082.0], [99.9, 4196.0], [100.0, 4702.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1158.0, "series": [{"data": [[0.0, 15.0], [600.0, 348.0], [700.0, 291.0], [800.0, 273.0], [900.0, 218.0], [1000.0, 211.0], [1100.0, 183.0], [1200.0, 147.0], [1300.0, 115.0], [1400.0, 108.0], [1500.0, 95.0], [100.0, 1158.0], [1600.0, 81.0], [1700.0, 56.0], [1800.0, 45.0], [1900.0, 32.0], [2000.0, 29.0], [2100.0, 29.0], [2300.0, 27.0], [2200.0, 17.0], [2400.0, 20.0], [2500.0, 13.0], [2600.0, 8.0], [2800.0, 8.0], [2700.0, 7.0], [2900.0, 5.0], [3000.0, 7.0], [3100.0, 6.0], [200.0, 620.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 2.0], [3500.0, 2.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 6.0], [4100.0, 5.0], [4200.0, 1.0], [4300.0, 3.0], [300.0, 359.0], [4700.0, 1.0], [400.0, 360.0], [500.0, 337.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 516.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2517.0, "series": [{"data": [[0.0, 2517.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2229.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 516.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.043478260869565, "minX": 1.60238262E12, "maxY": 12.0, "series": [{"data": [[1.60238274E12, 12.0], [1.60238292E12, 11.043478260869565], [1.60238262E12, 11.956316410861854], [1.6023828E12, 12.0], [1.60238268E12, 12.0], [1.60238286E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238292E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 696.6358954796876, "minX": 1.0, "maxY": 4196.0, "series": [{"data": [[4.0, 2132.0], [8.0, 2181.5], [2.0, 4196.0], [1.0, 4075.0], [9.0, 2269.5], [5.0, 2078.5], [10.0, 2187.0], [11.0, 2251.5], [6.0, 1508.0], [12.0, 696.6358954796876], [3.0, 3962.0], [7.0, 4071.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 703.0577727099984]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 605.7666666666667, "minX": 1.60238262E12, "maxY": 1002096.4333333333, "series": [{"data": [[1.60238274E12, 744356.5], [1.60238292E12, 39893.2], [1.60238262E12, 815032.5333333333], [1.6023828E12, 745914.5], [1.60238268E12, 903419.0], [1.60238286E12, 1002096.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238274E12, 10129.283333333333], [1.60238292E12, 605.7666666666667], [1.60238262E12, 7330.366666666667], [1.6023828E12, 10439.4], [1.60238268E12, 8186.183333333333], [1.60238286E12, 8799.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238292E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 578.543390105433, "minX": 1.60238262E12, "maxY": 1805.36231884058, "series": [{"data": [[1.60238274E12, 578.543390105433], [1.60238292E12, 1805.36231884058], [1.60238262E12, 822.2089728453361], [1.6023828E12, 602.032094594595], [1.60238268E12, 777.6124197002135], [1.60238286E12, 729.7175879396987]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238292E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 578.2343876723431, "minX": 1.60238262E12, "maxY": 1805.04347826087, "series": [{"data": [[1.60238274E12, 578.2343876723431], [1.60238292E12, 1805.04347826087], [1.60238262E12, 821.6965761511213], [1.6023828E12, 601.730574324325], [1.60238268E12, 777.1241970021426], [1.60238286E12, 729.2412060301507]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238292E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010135135135135141, "minX": 1.60238262E12, "maxY": 0.14639905548996437, "series": [{"data": [[1.60238274E12, 0.014598540145985424], [1.60238292E12, 0.08695652173913045], [1.60238262E12, 0.14639905548996437], [1.6023828E12, 0.010135135135135141], [1.60238268E12, 0.016059957173447582], [1.60238286E12, 0.01809045226130655]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238292E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.60238262E12, "maxY": 4702.0, "series": [{"data": [[1.60238274E12, 4702.0], [1.60238292E12, 4317.0], [1.60238262E12, 3554.0], [1.6023828E12, 3142.0], [1.60238268E12, 2756.0], [1.60238286E12, 3362.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238274E12, 115.4239988231659], [1.60238292E12, 151.0], [1.60238262E12, 125.63199979782104], [1.6023828E12, 114.66499971747399], [1.60238268E12, 138.0], [1.60238286E12, 128.96399976253508]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238274E12, 120.29960070610046], [1.60238292E12, 151.0], [1.60238262E12, 126.0], [1.6023828E12, 115.73150011301041], [1.60238268E12, 138.25650008916855], [1.60238286E12, 132.44160037994385]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238274E12, 117.89199941158294], [1.60238292E12, 151.0], [1.60238262E12, 126.0], [1.6023828E12, 115.25749985873699], [1.60238268E12, 138.0], [1.60238286E12, 130.84799952507018]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238274E12, 36.0], [1.60238292E12, 151.0], [1.60238262E12, 81.0], [1.6023828E12, 38.0], [1.60238268E12, 71.0], [1.60238286E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238274E12, 303.0], [1.60238292E12, 1185.0], [1.60238262E12, 686.0], [1.6023828E12, 479.0], [1.60238268E12, 700.5], [1.60238286E12, 600.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238292E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 156.5, "minX": 2.0, "maxY": 3112.5, "series": [{"data": [[2.0, 2069.0], [33.0, 357.5], [32.0, 243.0], [34.0, 319.5], [35.0, 206.0], [37.0, 183.5], [36.0, 160.5], [39.0, 230.0], [38.0, 296.0], [41.0, 166.0], [43.0, 250.0], [44.0, 266.0], [45.0, 166.0], [46.0, 243.0], [47.0, 246.0], [3.0, 3112.5], [49.0, 164.5], [52.0, 156.5], [4.0, 2104.5], [67.0, 179.0], [5.0, 1774.0], [6.0, 1638.0], [7.0, 1453.0], [8.0, 1213.0], [9.0, 1274.0], [10.0, 1110.5], [11.0, 1070.0], [12.0, 1023.5], [13.0, 856.0], [14.0, 815.0], [15.0, 777.0], [16.0, 755.5], [17.0, 722.0], [18.0, 493.0], [19.0, 617.5], [20.0, 502.0], [21.0, 461.0], [22.0, 591.0], [23.0, 379.5], [24.0, 482.0], [25.0, 402.5], [26.0, 366.0], [27.0, 450.0], [28.0, 320.5], [29.0, 400.0], [30.0, 255.0], [31.0, 483.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 156.5, "minX": 2.0, "maxY": 3111.5, "series": [{"data": [[2.0, 2068.5], [33.0, 357.5], [32.0, 242.5], [34.0, 319.0], [35.0, 206.0], [37.0, 183.5], [36.0, 160.5], [39.0, 230.0], [38.0, 296.0], [41.0, 166.0], [43.0, 250.0], [44.0, 265.0], [45.0, 166.0], [46.0, 242.5], [47.0, 246.0], [3.0, 3111.5], [49.0, 164.5], [52.0, 156.5], [4.0, 2101.0], [67.0, 179.0], [5.0, 1772.0], [6.0, 1636.5], [7.0, 1452.5], [8.0, 1212.5], [9.0, 1272.0], [10.0, 1110.5], [11.0, 1070.0], [12.0, 1022.5], [13.0, 856.0], [14.0, 815.0], [15.0, 777.0], [16.0, 754.5], [17.0, 720.5], [18.0, 493.0], [19.0, 617.5], [20.0, 502.0], [21.0, 461.0], [22.0, 590.5], [23.0, 379.0], [24.0, 482.0], [25.0, 401.0], [26.0, 366.0], [27.0, 450.0], [28.0, 320.5], [29.0, 400.0], [30.0, 255.0], [31.0, 483.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.60238262E12, "maxY": 20.55, "series": [{"data": [[1.60238274E12, 20.55], [1.60238292E12, 0.95], [1.60238262E12, 14.316666666666666], [1.6023828E12, 19.733333333333334], [1.60238268E12, 15.566666666666666], [1.60238286E12, 16.583333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238292E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60238262E12, "maxY": 20.55, "series": [{"data": [[1.60238274E12, 20.55], [1.60238292E12, 1.15], [1.60238262E12, 14.116666666666667], [1.6023828E12, 19.733333333333334], [1.60238268E12, 15.566666666666666], [1.60238286E12, 16.583333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238292E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60238262E12, "maxY": 20.55, "series": [{"data": [[1.60238274E12, 20.55], [1.60238292E12, 1.15], [1.60238262E12, 14.116666666666667], [1.6023828E12, 19.733333333333334], [1.60238268E12, 15.566666666666666], [1.60238286E12, 16.583333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238292E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60238262E12, "maxY": 20.55, "series": [{"data": [[1.60238274E12, 20.55], [1.60238292E12, 1.15], [1.60238262E12, 14.116666666666667], [1.6023828E12, 19.733333333333334], [1.60238268E12, 15.566666666666666], [1.60238286E12, 16.583333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238292E12, "title": "Total Transactions Per Second"}},
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

