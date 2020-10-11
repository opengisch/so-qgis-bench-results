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
        data: {"result": {"minY": 38.0, "minX": 0.0, "maxY": 4970.0, "series": [{"data": [[0.0, 38.0], [0.1, 50.0], [0.2, 66.0], [0.3, 72.0], [0.4, 76.0], [0.5, 79.0], [0.6, 81.0], [0.7, 119.0], [0.8, 122.0], [0.9, 122.0], [1.0, 124.0], [1.1, 125.0], [1.2, 127.0], [1.3, 129.0], [1.4, 130.0], [1.5, 131.0], [1.6, 133.0], [1.7, 134.0], [1.8, 135.0], [1.9, 135.0], [2.0, 137.0], [2.1, 137.0], [2.2, 138.0], [2.3, 139.0], [2.4, 139.0], [2.5, 140.0], [2.6, 140.0], [2.7, 141.0], [2.8, 141.0], [2.9, 142.0], [3.0, 142.0], [3.1, 143.0], [3.2, 143.0], [3.3, 143.0], [3.4, 143.0], [3.5, 144.0], [3.6, 144.0], [3.7, 145.0], [3.8, 145.0], [3.9, 146.0], [4.0, 146.0], [4.1, 146.0], [4.2, 147.0], [4.3, 147.0], [4.4, 147.0], [4.5, 148.0], [4.6, 148.0], [4.7, 148.0], [4.8, 148.0], [4.9, 148.0], [5.0, 148.0], [5.1, 149.0], [5.2, 149.0], [5.3, 149.0], [5.4, 149.0], [5.5, 149.0], [5.6, 150.0], [5.7, 150.0], [5.8, 150.0], [5.9, 150.0], [6.0, 150.0], [6.1, 150.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 151.0], [6.7, 151.0], [6.8, 152.0], [6.9, 152.0], [7.0, 152.0], [7.1, 152.0], [7.2, 152.0], [7.3, 152.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 153.0], [7.8, 153.0], [7.9, 154.0], [8.0, 154.0], [8.1, 154.0], [8.2, 155.0], [8.3, 155.0], [8.4, 155.0], [8.5, 155.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 156.0], [9.1, 156.0], [9.2, 156.0], [9.3, 156.0], [9.4, 156.0], [9.5, 157.0], [9.6, 157.0], [9.7, 157.0], [9.8, 157.0], [9.9, 157.0], [10.0, 158.0], [10.1, 158.0], [10.2, 158.0], [10.3, 158.0], [10.4, 158.0], [10.5, 158.0], [10.6, 159.0], [10.7, 159.0], [10.8, 159.0], [10.9, 159.0], [11.0, 159.0], [11.1, 159.0], [11.2, 159.0], [11.3, 160.0], [11.4, 160.0], [11.5, 160.0], [11.6, 160.0], [11.7, 160.0], [11.8, 161.0], [11.9, 161.0], [12.0, 161.0], [12.1, 161.0], [12.2, 161.0], [12.3, 161.0], [12.4, 162.0], [12.5, 162.0], [12.6, 162.0], [12.7, 162.0], [12.8, 162.0], [12.9, 162.0], [13.0, 163.0], [13.1, 163.0], [13.2, 163.0], [13.3, 163.0], [13.4, 163.0], [13.5, 164.0], [13.6, 164.0], [13.7, 164.0], [13.8, 164.0], [13.9, 164.0], [14.0, 165.0], [14.1, 165.0], [14.2, 165.0], [14.3, 165.0], [14.4, 165.0], [14.5, 166.0], [14.6, 166.0], [14.7, 166.0], [14.8, 166.0], [14.9, 167.0], [15.0, 167.0], [15.1, 167.0], [15.2, 168.0], [15.3, 168.0], [15.4, 168.0], [15.5, 168.0], [15.6, 168.0], [15.7, 168.0], [15.8, 169.0], [15.9, 169.0], [16.0, 169.0], [16.1, 169.0], [16.2, 170.0], [16.3, 170.0], [16.4, 170.0], [16.5, 171.0], [16.6, 171.0], [16.7, 171.0], [16.8, 171.0], [16.9, 171.0], [17.0, 172.0], [17.1, 172.0], [17.2, 172.0], [17.3, 173.0], [17.4, 173.0], [17.5, 173.0], [17.6, 173.0], [17.7, 173.0], [17.8, 173.0], [17.9, 174.0], [18.0, 174.0], [18.1, 174.0], [18.2, 175.0], [18.3, 175.0], [18.4, 175.0], [18.5, 176.0], [18.6, 176.0], [18.7, 176.0], [18.8, 176.0], [18.9, 177.0], [19.0, 177.0], [19.1, 177.0], [19.2, 178.0], [19.3, 178.0], [19.4, 178.0], [19.5, 179.0], [19.6, 179.0], [19.7, 179.0], [19.8, 180.0], [19.9, 180.0], [20.0, 181.0], [20.1, 181.0], [20.2, 182.0], [20.3, 182.0], [20.4, 182.0], [20.5, 183.0], [20.6, 183.0], [20.7, 184.0], [20.8, 184.0], [20.9, 185.0], [21.0, 186.0], [21.1, 188.0], [21.2, 189.0], [21.3, 191.0], [21.4, 193.0], [21.5, 194.0], [21.6, 195.0], [21.7, 197.0], [21.8, 198.0], [21.9, 200.0], [22.0, 202.0], [22.1, 204.0], [22.2, 206.0], [22.3, 207.0], [22.4, 208.0], [22.5, 210.0], [22.6, 213.0], [22.7, 215.0], [22.8, 217.0], [22.9, 217.0], [23.0, 219.0], [23.1, 221.0], [23.2, 223.0], [23.3, 224.0], [23.4, 225.0], [23.5, 226.0], [23.6, 227.0], [23.7, 230.0], [23.8, 231.0], [23.9, 231.0], [24.0, 231.0], [24.1, 232.0], [24.2, 234.0], [24.3, 234.0], [24.4, 235.0], [24.5, 237.0], [24.6, 237.0], [24.7, 238.0], [24.8, 238.0], [24.9, 239.0], [25.0, 240.0], [25.1, 242.0], [25.2, 243.0], [25.3, 244.0], [25.4, 245.0], [25.5, 245.0], [25.6, 247.0], [25.7, 248.0], [25.8, 249.0], [25.9, 250.0], [26.0, 251.0], [26.1, 252.0], [26.2, 252.0], [26.3, 253.0], [26.4, 254.0], [26.5, 255.0], [26.6, 256.0], [26.7, 257.0], [26.8, 258.0], [26.9, 259.0], [27.0, 260.0], [27.1, 260.0], [27.2, 261.0], [27.3, 261.0], [27.4, 262.0], [27.5, 263.0], [27.6, 264.0], [27.7, 265.0], [27.8, 265.0], [27.9, 266.0], [28.0, 266.0], [28.1, 268.0], [28.2, 268.0], [28.3, 269.0], [28.4, 270.0], [28.5, 271.0], [28.6, 271.0], [28.7, 272.0], [28.8, 272.0], [28.9, 273.0], [29.0, 274.0], [29.1, 274.0], [29.2, 275.0], [29.3, 276.0], [29.4, 277.0], [29.5, 277.0], [29.6, 278.0], [29.7, 278.0], [29.8, 279.0], [29.9, 280.0], [30.0, 280.0], [30.1, 281.0], [30.2, 281.0], [30.3, 282.0], [30.4, 282.0], [30.5, 282.0], [30.6, 283.0], [30.7, 284.0], [30.8, 285.0], [30.9, 285.0], [31.0, 286.0], [31.1, 287.0], [31.2, 288.0], [31.3, 289.0], [31.4, 290.0], [31.5, 291.0], [31.6, 292.0], [31.7, 293.0], [31.8, 295.0], [31.9, 295.0], [32.0, 296.0], [32.1, 297.0], [32.2, 298.0], [32.3, 299.0], [32.4, 299.0], [32.5, 300.0], [32.6, 301.0], [32.7, 302.0], [32.8, 302.0], [32.9, 304.0], [33.0, 305.0], [33.1, 306.0], [33.2, 306.0], [33.3, 308.0], [33.4, 309.0], [33.5, 310.0], [33.6, 312.0], [33.7, 312.0], [33.8, 314.0], [33.9, 315.0], [34.0, 317.0], [34.1, 319.0], [34.2, 319.0], [34.3, 321.0], [34.4, 321.0], [34.5, 322.0], [34.6, 323.0], [34.7, 324.0], [34.8, 325.0], [34.9, 326.0], [35.0, 327.0], [35.1, 328.0], [35.2, 330.0], [35.3, 331.0], [35.4, 332.0], [35.5, 334.0], [35.6, 336.0], [35.7, 337.0], [35.8, 338.0], [35.9, 339.0], [36.0, 340.0], [36.1, 340.0], [36.2, 341.0], [36.3, 342.0], [36.4, 344.0], [36.5, 345.0], [36.6, 346.0], [36.7, 347.0], [36.8, 347.0], [36.9, 348.0], [37.0, 349.0], [37.1, 350.0], [37.2, 352.0], [37.3, 352.0], [37.4, 353.0], [37.5, 354.0], [37.6, 355.0], [37.7, 356.0], [37.8, 357.0], [37.9, 358.0], [38.0, 359.0], [38.1, 361.0], [38.2, 362.0], [38.3, 363.0], [38.4, 364.0], [38.5, 366.0], [38.6, 368.0], [38.7, 370.0], [38.8, 372.0], [38.9, 373.0], [39.0, 375.0], [39.1, 376.0], [39.2, 379.0], [39.3, 381.0], [39.4, 382.0], [39.5, 384.0], [39.6, 386.0], [39.7, 388.0], [39.8, 391.0], [39.9, 394.0], [40.0, 395.0], [40.1, 397.0], [40.2, 399.0], [40.3, 402.0], [40.4, 403.0], [40.5, 405.0], [40.6, 407.0], [40.7, 409.0], [40.8, 411.0], [40.9, 412.0], [41.0, 413.0], [41.1, 414.0], [41.2, 415.0], [41.3, 416.0], [41.4, 417.0], [41.5, 419.0], [41.6, 421.0], [41.7, 422.0], [41.8, 424.0], [41.9, 426.0], [42.0, 427.0], [42.1, 429.0], [42.2, 432.0], [42.3, 433.0], [42.4, 436.0], [42.5, 437.0], [42.6, 438.0], [42.7, 440.0], [42.8, 443.0], [42.9, 444.0], [43.0, 445.0], [43.1, 446.0], [43.2, 447.0], [43.3, 449.0], [43.4, 450.0], [43.5, 450.0], [43.6, 453.0], [43.7, 453.0], [43.8, 455.0], [43.9, 458.0], [44.0, 460.0], [44.1, 463.0], [44.2, 464.0], [44.3, 466.0], [44.4, 467.0], [44.5, 470.0], [44.6, 471.0], [44.7, 472.0], [44.8, 474.0], [44.9, 475.0], [45.0, 476.0], [45.1, 479.0], [45.2, 480.0], [45.3, 481.0], [45.4, 482.0], [45.5, 484.0], [45.6, 485.0], [45.7, 486.0], [45.8, 487.0], [45.9, 488.0], [46.0, 490.0], [46.1, 490.0], [46.2, 492.0], [46.3, 494.0], [46.4, 498.0], [46.5, 499.0], [46.6, 501.0], [46.7, 503.0], [46.8, 505.0], [46.9, 506.0], [47.0, 508.0], [47.1, 509.0], [47.2, 511.0], [47.3, 513.0], [47.4, 515.0], [47.5, 518.0], [47.6, 520.0], [47.7, 522.0], [47.8, 523.0], [47.9, 525.0], [48.0, 526.0], [48.1, 529.0], [48.2, 531.0], [48.3, 533.0], [48.4, 535.0], [48.5, 536.0], [48.6, 537.0], [48.7, 539.0], [48.8, 542.0], [48.9, 545.0], [49.0, 547.0], [49.1, 549.0], [49.2, 550.0], [49.3, 552.0], [49.4, 554.0], [49.5, 556.0], [49.6, 558.0], [49.7, 560.0], [49.8, 562.0], [49.9, 563.0], [50.0, 565.0], [50.1, 566.0], [50.2, 567.0], [50.3, 569.0], [50.4, 572.0], [50.5, 574.0], [50.6, 575.0], [50.7, 577.0], [50.8, 579.0], [50.9, 580.0], [51.0, 580.0], [51.1, 581.0], [51.2, 582.0], [51.3, 584.0], [51.4, 585.0], [51.5, 586.0], [51.6, 587.0], [51.7, 588.0], [51.8, 591.0], [51.9, 592.0], [52.0, 594.0], [52.1, 596.0], [52.2, 596.0], [52.3, 598.0], [52.4, 599.0], [52.5, 600.0], [52.6, 601.0], [52.7, 603.0], [52.8, 606.0], [52.9, 607.0], [53.0, 609.0], [53.1, 612.0], [53.2, 613.0], [53.3, 615.0], [53.4, 617.0], [53.5, 619.0], [53.6, 620.0], [53.7, 622.0], [53.8, 625.0], [53.9, 626.0], [54.0, 627.0], [54.1, 628.0], [54.2, 630.0], [54.3, 631.0], [54.4, 632.0], [54.5, 633.0], [54.6, 635.0], [54.7, 636.0], [54.8, 637.0], [54.9, 638.0], [55.0, 640.0], [55.1, 642.0], [55.2, 643.0], [55.3, 644.0], [55.4, 645.0], [55.5, 646.0], [55.6, 647.0], [55.7, 649.0], [55.8, 652.0], [55.9, 654.0], [56.0, 655.0], [56.1, 656.0], [56.2, 659.0], [56.3, 661.0], [56.4, 663.0], [56.5, 665.0], [56.6, 668.0], [56.7, 670.0], [56.8, 672.0], [56.9, 675.0], [57.0, 676.0], [57.1, 678.0], [57.2, 680.0], [57.3, 682.0], [57.4, 683.0], [57.5, 684.0], [57.6, 685.0], [57.7, 686.0], [57.8, 688.0], [57.9, 689.0], [58.0, 692.0], [58.1, 693.0], [58.2, 695.0], [58.3, 696.0], [58.4, 698.0], [58.5, 700.0], [58.6, 701.0], [58.7, 703.0], [58.8, 704.0], [58.9, 707.0], [59.0, 708.0], [59.1, 710.0], [59.2, 711.0], [59.3, 712.0], [59.4, 713.0], [59.5, 714.0], [59.6, 719.0], [59.7, 721.0], [59.8, 722.0], [59.9, 724.0], [60.0, 725.0], [60.1, 727.0], [60.2, 728.0], [60.3, 729.0], [60.4, 730.0], [60.5, 731.0], [60.6, 732.0], [60.7, 733.0], [60.8, 735.0], [60.9, 737.0], [61.0, 738.0], [61.1, 740.0], [61.2, 742.0], [61.3, 743.0], [61.4, 744.0], [61.5, 746.0], [61.6, 747.0], [61.7, 749.0], [61.8, 752.0], [61.9, 754.0], [62.0, 756.0], [62.1, 758.0], [62.2, 760.0], [62.3, 761.0], [62.4, 763.0], [62.5, 765.0], [62.6, 766.0], [62.7, 768.0], [62.8, 769.0], [62.9, 771.0], [63.0, 773.0], [63.1, 775.0], [63.2, 777.0], [63.3, 778.0], [63.4, 781.0], [63.5, 782.0], [63.6, 782.0], [63.7, 784.0], [63.8, 785.0], [63.9, 786.0], [64.0, 787.0], [64.1, 788.0], [64.2, 791.0], [64.3, 792.0], [64.4, 795.0], [64.5, 796.0], [64.6, 798.0], [64.7, 800.0], [64.8, 801.0], [64.9, 802.0], [65.0, 804.0], [65.1, 806.0], [65.2, 808.0], [65.3, 809.0], [65.4, 811.0], [65.5, 811.0], [65.6, 813.0], [65.7, 814.0], [65.8, 815.0], [65.9, 816.0], [66.0, 820.0], [66.1, 821.0], [66.2, 822.0], [66.3, 823.0], [66.4, 825.0], [66.5, 828.0], [66.6, 829.0], [66.7, 831.0], [66.8, 832.0], [66.9, 835.0], [67.0, 837.0], [67.1, 840.0], [67.2, 842.0], [67.3, 844.0], [67.4, 847.0], [67.5, 848.0], [67.6, 850.0], [67.7, 851.0], [67.8, 853.0], [67.9, 855.0], [68.0, 857.0], [68.1, 859.0], [68.2, 860.0], [68.3, 861.0], [68.4, 865.0], [68.5, 867.0], [68.6, 868.0], [68.7, 871.0], [68.8, 876.0], [68.9, 878.0], [69.0, 881.0], [69.1, 882.0], [69.2, 883.0], [69.3, 886.0], [69.4, 887.0], [69.5, 890.0], [69.6, 892.0], [69.7, 899.0], [69.8, 902.0], [69.9, 904.0], [70.0, 906.0], [70.1, 908.0], [70.2, 909.0], [70.3, 912.0], [70.4, 914.0], [70.5, 916.0], [70.6, 920.0], [70.7, 922.0], [70.8, 926.0], [70.9, 929.0], [71.0, 931.0], [71.1, 932.0], [71.2, 935.0], [71.3, 937.0], [71.4, 939.0], [71.5, 941.0], [71.6, 944.0], [71.7, 946.0], [71.8, 949.0], [71.9, 950.0], [72.0, 952.0], [72.1, 955.0], [72.2, 959.0], [72.3, 961.0], [72.4, 964.0], [72.5, 965.0], [72.6, 969.0], [72.7, 970.0], [72.8, 973.0], [72.9, 977.0], [73.0, 978.0], [73.1, 983.0], [73.2, 991.0], [73.3, 994.0], [73.4, 996.0], [73.5, 999.0], [73.6, 1000.0], [73.7, 1001.0], [73.8, 1004.0], [73.9, 1008.0], [74.0, 1012.0], [74.1, 1014.0], [74.2, 1019.0], [74.3, 1022.0], [74.4, 1024.0], [74.5, 1029.0], [74.6, 1031.0], [74.7, 1033.0], [74.8, 1034.0], [74.9, 1036.0], [75.0, 1039.0], [75.1, 1042.0], [75.2, 1048.0], [75.3, 1050.0], [75.4, 1053.0], [75.5, 1056.0], [75.6, 1060.0], [75.7, 1064.0], [75.8, 1066.0], [75.9, 1069.0], [76.0, 1072.0], [76.1, 1074.0], [76.2, 1076.0], [76.3, 1081.0], [76.4, 1083.0], [76.5, 1088.0], [76.6, 1090.0], [76.7, 1092.0], [76.8, 1096.0], [76.9, 1098.0], [77.0, 1102.0], [77.1, 1107.0], [77.2, 1110.0], [77.3, 1112.0], [77.4, 1117.0], [77.5, 1122.0], [77.6, 1123.0], [77.7, 1127.0], [77.8, 1135.0], [77.9, 1138.0], [78.0, 1140.0], [78.1, 1142.0], [78.2, 1143.0], [78.3, 1147.0], [78.4, 1150.0], [78.5, 1151.0], [78.6, 1155.0], [78.7, 1158.0], [78.8, 1160.0], [78.9, 1162.0], [79.0, 1167.0], [79.1, 1169.0], [79.2, 1172.0], [79.3, 1178.0], [79.4, 1184.0], [79.5, 1186.0], [79.6, 1189.0], [79.7, 1192.0], [79.8, 1194.0], [79.9, 1196.0], [80.0, 1200.0], [80.1, 1203.0], [80.2, 1206.0], [80.3, 1210.0], [80.4, 1216.0], [80.5, 1217.0], [80.6, 1223.0], [80.7, 1226.0], [80.8, 1228.0], [80.9, 1231.0], [81.0, 1234.0], [81.1, 1237.0], [81.2, 1241.0], [81.3, 1243.0], [81.4, 1247.0], [81.5, 1248.0], [81.6, 1249.0], [81.7, 1254.0], [81.8, 1255.0], [81.9, 1258.0], [82.0, 1260.0], [82.1, 1264.0], [82.2, 1267.0], [82.3, 1269.0], [82.4, 1273.0], [82.5, 1279.0], [82.6, 1282.0], [82.7, 1284.0], [82.8, 1288.0], [82.9, 1293.0], [83.0, 1296.0], [83.1, 1303.0], [83.2, 1308.0], [83.3, 1312.0], [83.4, 1320.0], [83.5, 1324.0], [83.6, 1329.0], [83.7, 1332.0], [83.8, 1333.0], [83.9, 1335.0], [84.0, 1338.0], [84.1, 1342.0], [84.2, 1346.0], [84.3, 1348.0], [84.4, 1355.0], [84.5, 1361.0], [84.6, 1364.0], [84.7, 1368.0], [84.8, 1371.0], [84.9, 1376.0], [85.0, 1383.0], [85.1, 1385.0], [85.2, 1389.0], [85.3, 1393.0], [85.4, 1396.0], [85.5, 1401.0], [85.6, 1404.0], [85.7, 1406.0], [85.8, 1411.0], [85.9, 1412.0], [86.0, 1419.0], [86.1, 1423.0], [86.2, 1427.0], [86.3, 1432.0], [86.4, 1436.0], [86.5, 1439.0], [86.6, 1443.0], [86.7, 1451.0], [86.8, 1453.0], [86.9, 1462.0], [87.0, 1464.0], [87.1, 1468.0], [87.2, 1471.0], [87.3, 1473.0], [87.4, 1476.0], [87.5, 1480.0], [87.6, 1484.0], [87.7, 1488.0], [87.8, 1492.0], [87.9, 1496.0], [88.0, 1501.0], [88.1, 1506.0], [88.2, 1511.0], [88.3, 1515.0], [88.4, 1520.0], [88.5, 1522.0], [88.6, 1526.0], [88.7, 1529.0], [88.8, 1536.0], [88.9, 1545.0], [89.0, 1553.0], [89.1, 1558.0], [89.2, 1562.0], [89.3, 1567.0], [89.4, 1574.0], [89.5, 1577.0], [89.6, 1584.0], [89.7, 1595.0], [89.8, 1601.0], [89.9, 1604.0], [90.0, 1608.0], [90.1, 1614.0], [90.2, 1620.0], [90.3, 1625.0], [90.4, 1633.0], [90.5, 1639.0], [90.6, 1645.0], [90.7, 1649.0], [90.8, 1653.0], [90.9, 1664.0], [91.0, 1666.0], [91.1, 1673.0], [91.2, 1677.0], [91.3, 1685.0], [91.4, 1694.0], [91.5, 1702.0], [91.6, 1704.0], [91.7, 1710.0], [91.8, 1719.0], [91.9, 1722.0], [92.0, 1726.0], [92.1, 1730.0], [92.2, 1734.0], [92.3, 1740.0], [92.4, 1749.0], [92.5, 1754.0], [92.6, 1764.0], [92.7, 1769.0], [92.8, 1782.0], [92.9, 1790.0], [93.0, 1804.0], [93.1, 1813.0], [93.2, 1828.0], [93.3, 1843.0], [93.4, 1853.0], [93.5, 1858.0], [93.6, 1863.0], [93.7, 1873.0], [93.8, 1880.0], [93.9, 1892.0], [94.0, 1907.0], [94.1, 1917.0], [94.2, 1932.0], [94.3, 1957.0], [94.4, 1966.0], [94.5, 1975.0], [94.6, 1982.0], [94.7, 1999.0], [94.8, 2023.0], [94.9, 2035.0], [95.0, 2048.0], [95.1, 2058.0], [95.2, 2071.0], [95.3, 2083.0], [95.4, 2097.0], [95.5, 2111.0], [95.6, 2120.0], [95.7, 2144.0], [95.8, 2150.0], [95.9, 2166.0], [96.0, 2182.0], [96.1, 2217.0], [96.2, 2226.0], [96.3, 2236.0], [96.4, 2255.0], [96.5, 2270.0], [96.6, 2298.0], [96.7, 2342.0], [96.8, 2383.0], [96.9, 2418.0], [97.0, 2475.0], [97.1, 2517.0], [97.2, 2549.0], [97.3, 2569.0], [97.4, 2584.0], [97.5, 2606.0], [97.6, 2630.0], [97.7, 2669.0], [97.8, 2702.0], [97.9, 2742.0], [98.0, 2762.0], [98.1, 2791.0], [98.2, 2815.0], [98.3, 2818.0], [98.4, 2861.0], [98.5, 2911.0], [98.6, 2935.0], [98.7, 3014.0], [98.8, 3069.0], [98.9, 3100.0], [99.0, 3206.0], [99.1, 3269.0], [99.2, 3301.0], [99.3, 3440.0], [99.4, 3470.0], [99.5, 3703.0], [99.6, 4028.0], [99.7, 4414.0], [99.8, 4564.0], [99.9, 4589.0], [100.0, 4970.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1117.0, "series": [{"data": [[0.0, 34.0], [600.0, 320.0], [700.0, 325.0], [800.0, 266.0], [900.0, 201.0], [1000.0, 178.0], [1100.0, 161.0], [1200.0, 162.0], [1300.0, 128.0], [1400.0, 128.0], [1500.0, 95.0], [100.0, 1117.0], [1600.0, 89.0], [1700.0, 82.0], [1800.0, 50.0], [1900.0, 41.0], [2000.0, 37.0], [2100.0, 32.0], [2300.0, 10.0], [2200.0, 31.0], [2400.0, 15.0], [2500.0, 21.0], [2600.0, 16.0], [2800.0, 17.0], [2700.0, 20.0], [2900.0, 9.0], [3000.0, 12.0], [3100.0, 5.0], [200.0, 557.0], [3200.0, 10.0], [3300.0, 4.0], [3400.0, 8.0], [3500.0, 2.0], [3700.0, 5.0], [3600.0, 2.0], [4000.0, 1.0], [4300.0, 2.0], [4200.0, 3.0], [4500.0, 11.0], [4600.0, 2.0], [4400.0, 1.0], [300.0, 409.0], [4900.0, 2.0], [400.0, 330.0], [500.0, 311.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 633.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2449.0, "series": [{"data": [[0.0, 2449.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2180.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 633.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.847222222222223, "minX": 1.60238118E12, "maxY": 12.0, "series": [{"data": [[1.6023813E12, 12.0], [1.60238118E12, 11.952258064516116], [1.60238148E12, 11.847222222222223], [1.60238136E12, 12.0], [1.60238124E12, 12.0], [1.60238142E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238148E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 743.4491703223363, "minX": 1.0, "maxY": 4623.0, "series": [{"data": [[4.0, 2353.0], [8.0, 2553.5], [2.0, 4623.0], [1.0, 4578.0], [9.0, 2257.5], [5.0, 2355.5], [10.0, 2437.0], [11.0, 2587.5], [6.0, 1541.0], [12.0, 743.4491703223363], [3.0, 4505.0], [7.0, 4589.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 750.6480425693661]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3820.866666666667, "minX": 1.60238118E12, "maxY": 1046270.2, "series": [{"data": [[1.6023813E12, 694511.5], [1.60238118E12, 732353.0666666667], [1.60238148E12, 381767.23333333334], [1.60238136E12, 482012.98333333334], [1.60238124E12, 913903.6666666666], [1.60238142E12, 1046270.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023813E12, 10751.183333333332], [1.60238118E12, 6662.483333333334], [1.60238148E12, 3820.866666666667], [1.60238136E12, 10189.2], [1.60238124E12, 6703.866666666667], [1.60238142E12, 7363.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238148E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 555.2038759689933, "minX": 1.60238118E12, "maxY": 945.5725388601039, "series": [{"data": [[1.6023813E12, 555.2038759689933], [1.60238118E12, 870.7290322580652], [1.60238148E12, 901.513888888889], [1.60238136E12, 629.0146931719964], [1.60238124E12, 945.5725388601039], [1.60238142E12, 851.2870813397128]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238148E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 554.9341085271324, "minX": 1.60238118E12, "maxY": 945.0155440414505, "series": [{"data": [[1.6023813E12, 554.9341085271324], [1.60238118E12, 870.2077419354844], [1.60238148E12, 901.0902777777789], [1.60238136E12, 628.8046672428694], [1.60238124E12, 945.0155440414505], [1.60238142E12, 850.6925837320578]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238148E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01210025929127053, "minX": 1.60238118E12, "maxY": 0.1961290322580646, "series": [{"data": [[1.6023813E12, 0.01317829457364342], [1.60238118E12, 0.1961290322580646], [1.60238148E12, 0.01620370370370373], [1.60238136E12, 0.01210025929127053], [1.60238124E12, 0.016839378238341973], [1.60238142E12, 0.014354066985645947]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238148E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38.0, "minX": 1.60238118E12, "maxY": 4970.0, "series": [{"data": [[1.6023813E12, 4593.0], [1.60238118E12, 3547.0], [1.60238148E12, 4970.0], [1.60238136E12, 3100.0], [1.60238124E12, 3506.0], [1.60238142E12, 3796.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023813E12, 129.47599876880645], [1.60238118E12, 142.9839998149872], [1.60238148E12, 123.89699989676475], [1.60238136E12, 132.42199972391128], [1.60238124E12, 68.91399963140488], [1.60238142E12, 132.19799880266189]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023813E12, 134.90450061559676], [1.60238118E12, 144.36480014801026], [1.60238148E12, 124.2867000412941], [1.60238136E12, 133.0], [1.60238124E12, 70.30540014743805], [1.60238142E12, 135.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023813E12, 132.32249923050404], [1.60238118E12, 143.74399981498718], [1.60238148E12, 124.11349994838238], [1.60238136E12, 133.0], [1.60238124E12, 69.68699981570244], [1.60238142E12, 134.70899940133094]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023813E12, 38.0], [1.60238118E12, 87.0], [1.60238148E12, 121.0], [1.60238136E12, 50.0], [1.60238124E12, 60.0], [1.60238142E12, 122.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023813E12, 301.0], [1.60238118E12, 754.0], [1.60238148E12, 651.5], [1.60238136E12, 456.0], [1.60238124E12, 832.0], [1.60238142E12, 725.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 142.0, "minX": 1.0, "maxY": 4423.5, "series": [{"data": [[2.0, 4423.5], [3.0, 3189.5], [4.0, 2618.5], [5.0, 2057.0], [6.0, 1610.0], [7.0, 1409.5], [8.0, 1415.5], [9.0, 1251.0], [10.0, 1084.5], [11.0, 1036.0], [12.0, 974.0], [13.0, 865.0], [14.0, 880.0], [15.0, 815.5], [16.0, 713.0], [17.0, 646.5], [18.0, 650.5], [19.0, 632.0], [20.0, 659.5], [21.0, 463.0], [22.0, 472.0], [23.0, 449.5], [24.0, 569.0], [25.0, 565.0], [26.0, 318.5], [27.0, 484.0], [28.0, 181.0], [29.0, 345.5], [30.0, 347.5], [31.0, 280.0], [32.0, 328.5], [33.0, 325.5], [34.0, 172.0], [35.0, 183.0], [36.0, 279.5], [37.0, 224.0], [38.0, 176.5], [39.0, 258.0], [40.0, 291.0], [41.0, 311.0], [42.0, 271.0], [43.0, 251.0], [44.0, 173.0], [45.0, 242.0], [46.0, 263.0], [47.0, 161.0], [54.0, 170.0], [61.0, 156.0], [65.0, 178.0], [1.0, 142.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 137.0, "minX": 1.0, "maxY": 4422.5, "series": [{"data": [[2.0, 4422.5], [3.0, 3186.5], [4.0, 2617.0], [5.0, 2054.0], [6.0, 1607.0], [7.0, 1409.0], [8.0, 1415.0], [9.0, 1251.0], [10.0, 1082.5], [11.0, 1036.0], [12.0, 974.0], [13.0, 865.0], [14.0, 880.0], [15.0, 814.0], [16.0, 713.0], [17.0, 646.5], [18.0, 650.0], [19.0, 632.0], [20.0, 659.5], [21.0, 463.0], [22.0, 470.5], [23.0, 448.5], [24.0, 569.0], [25.0, 565.0], [26.0, 317.5], [27.0, 484.0], [28.0, 181.0], [29.0, 345.5], [30.0, 347.5], [31.0, 279.5], [32.0, 328.0], [33.0, 325.0], [34.0, 172.0], [35.0, 183.0], [36.0, 279.5], [37.0, 223.0], [38.0, 176.5], [39.0, 258.0], [40.0, 291.0], [41.0, 311.0], [42.0, 270.5], [43.0, 251.0], [44.0, 173.0], [45.0, 242.0], [46.0, 262.5], [47.0, 161.0], [54.0, 170.0], [61.0, 156.0], [65.0, 178.0], [1.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.60238118E12, "maxY": 21.5, "series": [{"data": [[1.6023813E12, 21.5], [1.60238118E12, 13.116666666666667], [1.60238148E12, 7.0], [1.60238136E12, 19.283333333333335], [1.60238124E12, 12.866666666666667], [1.60238142E12, 13.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238148E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.2, "minX": 1.60238118E12, "maxY": 21.5, "series": [{"data": [[1.6023813E12, 21.5], [1.60238118E12, 12.916666666666666], [1.60238148E12, 7.2], [1.60238136E12, 19.283333333333335], [1.60238124E12, 12.866666666666667], [1.60238142E12, 13.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238148E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.2, "minX": 1.60238118E12, "maxY": 21.5, "series": [{"data": [[1.6023813E12, 21.5], [1.60238118E12, 12.916666666666666], [1.60238148E12, 7.2], [1.60238136E12, 19.283333333333335], [1.60238124E12, 12.866666666666667], [1.60238142E12, 13.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238148E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.2, "minX": 1.60238118E12, "maxY": 21.5, "series": [{"data": [[1.6023813E12, 21.5], [1.60238118E12, 12.916666666666666], [1.60238148E12, 7.2], [1.60238136E12, 19.283333333333335], [1.60238124E12, 12.866666666666667], [1.60238142E12, 13.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238148E12, "title": "Total Transactions Per Second"}},
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

