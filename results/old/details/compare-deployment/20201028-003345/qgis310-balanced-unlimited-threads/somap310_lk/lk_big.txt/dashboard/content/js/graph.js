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
        data: {"result": {"minY": 49.0, "minX": 0.0, "maxY": 4417.0, "series": [{"data": [[0.0, 49.0], [0.1, 74.0], [0.2, 114.0], [0.3, 116.0], [0.4, 119.0], [0.5, 119.0], [0.6, 122.0], [0.7, 123.0], [0.8, 126.0], [0.9, 127.0], [1.0, 129.0], [1.1, 130.0], [1.2, 132.0], [1.3, 133.0], [1.4, 134.0], [1.5, 134.0], [1.6, 135.0], [1.7, 135.0], [1.8, 137.0], [1.9, 137.0], [2.0, 138.0], [2.1, 138.0], [2.2, 139.0], [2.3, 139.0], [2.4, 139.0], [2.5, 140.0], [2.6, 140.0], [2.7, 141.0], [2.8, 141.0], [2.9, 141.0], [3.0, 141.0], [3.1, 142.0], [3.2, 142.0], [3.3, 143.0], [3.4, 143.0], [3.5, 143.0], [3.6, 143.0], [3.7, 143.0], [3.8, 144.0], [3.9, 144.0], [4.0, 144.0], [4.1, 145.0], [4.2, 145.0], [4.3, 145.0], [4.4, 146.0], [4.5, 146.0], [4.6, 146.0], [4.7, 146.0], [4.8, 146.0], [4.9, 147.0], [5.0, 147.0], [5.1, 147.0], [5.2, 147.0], [5.3, 147.0], [5.4, 148.0], [5.5, 148.0], [5.6, 148.0], [5.7, 149.0], [5.8, 149.0], [5.9, 149.0], [6.0, 149.0], [6.1, 149.0], [6.2, 149.0], [6.3, 150.0], [6.4, 150.0], [6.5, 150.0], [6.6, 150.0], [6.7, 151.0], [6.8, 151.0], [6.9, 151.0], [7.0, 151.0], [7.1, 151.0], [7.2, 152.0], [7.3, 152.0], [7.4, 152.0], [7.5, 152.0], [7.6, 152.0], [7.7, 152.0], [7.8, 153.0], [7.9, 153.0], [8.0, 153.0], [8.1, 153.0], [8.2, 153.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 154.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 155.0], [9.1, 155.0], [9.2, 156.0], [9.3, 156.0], [9.4, 156.0], [9.5, 156.0], [9.6, 156.0], [9.7, 156.0], [9.8, 157.0], [9.9, 157.0], [10.0, 157.0], [10.1, 157.0], [10.2, 157.0], [10.3, 157.0], [10.4, 158.0], [10.5, 158.0], [10.6, 158.0], [10.7, 158.0], [10.8, 158.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 158.0], [11.4, 159.0], [11.5, 159.0], [11.6, 159.0], [11.7, 159.0], [11.8, 159.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 160.0], [12.4, 161.0], [12.5, 161.0], [12.6, 161.0], [12.7, 161.0], [12.8, 161.0], [12.9, 161.0], [13.0, 161.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 162.0], [13.6, 162.0], [13.7, 162.0], [13.8, 163.0], [13.9, 163.0], [14.0, 163.0], [14.1, 163.0], [14.2, 163.0], [14.3, 163.0], [14.4, 164.0], [14.5, 164.0], [14.6, 164.0], [14.7, 164.0], [14.8, 164.0], [14.9, 164.0], [15.0, 164.0], [15.1, 165.0], [15.2, 165.0], [15.3, 165.0], [15.4, 165.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 167.0], [16.1, 167.0], [16.2, 167.0], [16.3, 167.0], [16.4, 168.0], [16.5, 168.0], [16.6, 168.0], [16.7, 168.0], [16.8, 168.0], [16.9, 169.0], [17.0, 169.0], [17.1, 169.0], [17.2, 169.0], [17.3, 170.0], [17.4, 170.0], [17.5, 170.0], [17.6, 170.0], [17.7, 171.0], [17.8, 171.0], [17.9, 171.0], [18.0, 171.0], [18.1, 172.0], [18.2, 172.0], [18.3, 173.0], [18.4, 173.0], [18.5, 173.0], [18.6, 174.0], [18.7, 174.0], [18.8, 174.0], [18.9, 175.0], [19.0, 175.0], [19.1, 176.0], [19.2, 176.0], [19.3, 177.0], [19.4, 177.0], [19.5, 178.0], [19.6, 178.0], [19.7, 179.0], [19.8, 179.0], [19.9, 179.0], [20.0, 179.0], [20.1, 180.0], [20.2, 180.0], [20.3, 181.0], [20.4, 181.0], [20.5, 182.0], [20.6, 182.0], [20.7, 183.0], [20.8, 183.0], [20.9, 184.0], [21.0, 184.0], [21.1, 185.0], [21.2, 185.0], [21.3, 185.0], [21.4, 186.0], [21.5, 187.0], [21.6, 188.0], [21.7, 188.0], [21.8, 189.0], [21.9, 189.0], [22.0, 191.0], [22.1, 191.0], [22.2, 192.0], [22.3, 193.0], [22.4, 194.0], [22.5, 195.0], [22.6, 196.0], [22.7, 198.0], [22.8, 199.0], [22.9, 199.0], [23.0, 200.0], [23.1, 201.0], [23.2, 202.0], [23.3, 203.0], [23.4, 205.0], [23.5, 207.0], [23.6, 208.0], [23.7, 209.0], [23.8, 210.0], [23.9, 211.0], [24.0, 213.0], [24.1, 215.0], [24.2, 216.0], [24.3, 216.0], [24.4, 218.0], [24.5, 219.0], [24.6, 220.0], [24.7, 221.0], [24.8, 222.0], [24.9, 223.0], [25.0, 225.0], [25.1, 226.0], [25.2, 227.0], [25.3, 228.0], [25.4, 229.0], [25.5, 231.0], [25.6, 232.0], [25.7, 232.0], [25.8, 233.0], [25.9, 234.0], [26.0, 234.0], [26.1, 235.0], [26.2, 236.0], [26.3, 236.0], [26.4, 238.0], [26.5, 238.0], [26.6, 239.0], [26.7, 240.0], [26.8, 241.0], [26.9, 242.0], [27.0, 243.0], [27.1, 243.0], [27.2, 244.0], [27.3, 246.0], [27.4, 247.0], [27.5, 248.0], [27.6, 248.0], [27.7, 249.0], [27.8, 251.0], [27.9, 253.0], [28.0, 254.0], [28.1, 256.0], [28.2, 256.0], [28.3, 257.0], [28.4, 258.0], [28.5, 258.0], [28.6, 259.0], [28.7, 260.0], [28.8, 261.0], [28.9, 261.0], [29.0, 262.0], [29.1, 263.0], [29.2, 264.0], [29.3, 264.0], [29.4, 265.0], [29.5, 265.0], [29.6, 266.0], [29.7, 267.0], [29.8, 267.0], [29.9, 268.0], [30.0, 268.0], [30.1, 269.0], [30.2, 270.0], [30.3, 270.0], [30.4, 271.0], [30.5, 272.0], [30.6, 272.0], [30.7, 272.0], [30.8, 273.0], [30.9, 274.0], [31.0, 274.0], [31.1, 275.0], [31.2, 275.0], [31.3, 277.0], [31.4, 277.0], [31.5, 279.0], [31.6, 279.0], [31.7, 281.0], [31.8, 281.0], [31.9, 283.0], [32.0, 283.0], [32.1, 285.0], [32.2, 285.0], [32.3, 286.0], [32.4, 287.0], [32.5, 288.0], [32.6, 288.0], [32.7, 289.0], [32.8, 290.0], [32.9, 291.0], [33.0, 292.0], [33.1, 293.0], [33.2, 294.0], [33.3, 294.0], [33.4, 295.0], [33.5, 296.0], [33.6, 298.0], [33.7, 299.0], [33.8, 300.0], [33.9, 301.0], [34.0, 302.0], [34.1, 303.0], [34.2, 305.0], [34.3, 306.0], [34.4, 307.0], [34.5, 309.0], [34.6, 309.0], [34.7, 311.0], [34.8, 313.0], [34.9, 315.0], [35.0, 317.0], [35.1, 319.0], [35.2, 321.0], [35.3, 322.0], [35.4, 322.0], [35.5, 323.0], [35.6, 324.0], [35.7, 326.0], [35.8, 327.0], [35.9, 328.0], [36.0, 329.0], [36.1, 330.0], [36.2, 331.0], [36.3, 333.0], [36.4, 334.0], [36.5, 336.0], [36.6, 337.0], [36.7, 338.0], [36.8, 339.0], [36.9, 339.0], [37.0, 341.0], [37.1, 343.0], [37.2, 343.0], [37.3, 345.0], [37.4, 347.0], [37.5, 348.0], [37.6, 349.0], [37.7, 350.0], [37.8, 351.0], [37.9, 352.0], [38.0, 354.0], [38.1, 354.0], [38.2, 356.0], [38.3, 357.0], [38.4, 359.0], [38.5, 359.0], [38.6, 360.0], [38.7, 361.0], [38.8, 362.0], [38.9, 362.0], [39.0, 363.0], [39.1, 364.0], [39.2, 365.0], [39.3, 366.0], [39.4, 367.0], [39.5, 369.0], [39.6, 370.0], [39.7, 371.0], [39.8, 373.0], [39.9, 374.0], [40.0, 375.0], [40.1, 377.0], [40.2, 378.0], [40.3, 379.0], [40.4, 380.0], [40.5, 381.0], [40.6, 382.0], [40.7, 383.0], [40.8, 385.0], [40.9, 386.0], [41.0, 387.0], [41.1, 391.0], [41.2, 393.0], [41.3, 394.0], [41.4, 395.0], [41.5, 397.0], [41.6, 399.0], [41.7, 403.0], [41.8, 403.0], [41.9, 406.0], [42.0, 410.0], [42.1, 412.0], [42.2, 413.0], [42.3, 414.0], [42.4, 416.0], [42.5, 418.0], [42.6, 418.0], [42.7, 421.0], [42.8, 423.0], [42.9, 424.0], [43.0, 427.0], [43.1, 429.0], [43.2, 431.0], [43.3, 433.0], [43.4, 436.0], [43.5, 438.0], [43.6, 439.0], [43.7, 440.0], [43.8, 442.0], [43.9, 445.0], [44.0, 446.0], [44.1, 448.0], [44.2, 450.0], [44.3, 452.0], [44.4, 455.0], [44.5, 456.0], [44.6, 457.0], [44.7, 458.0], [44.8, 459.0], [44.9, 460.0], [45.0, 461.0], [45.1, 463.0], [45.2, 464.0], [45.3, 465.0], [45.4, 466.0], [45.5, 468.0], [45.6, 471.0], [45.7, 472.0], [45.8, 473.0], [45.9, 474.0], [46.0, 476.0], [46.1, 476.0], [46.2, 477.0], [46.3, 478.0], [46.4, 480.0], [46.5, 481.0], [46.6, 482.0], [46.7, 483.0], [46.8, 485.0], [46.9, 486.0], [47.0, 489.0], [47.1, 490.0], [47.2, 491.0], [47.3, 492.0], [47.4, 492.0], [47.5, 493.0], [47.6, 494.0], [47.7, 495.0], [47.8, 497.0], [47.9, 498.0], [48.0, 498.0], [48.1, 499.0], [48.2, 500.0], [48.3, 501.0], [48.4, 502.0], [48.5, 504.0], [48.6, 505.0], [48.7, 505.0], [48.8, 506.0], [48.9, 508.0], [49.0, 509.0], [49.1, 511.0], [49.2, 511.0], [49.3, 512.0], [49.4, 514.0], [49.5, 517.0], [49.6, 520.0], [49.7, 523.0], [49.8, 525.0], [49.9, 526.0], [50.0, 528.0], [50.1, 530.0], [50.2, 531.0], [50.3, 533.0], [50.4, 535.0], [50.5, 537.0], [50.6, 541.0], [50.7, 543.0], [50.8, 544.0], [50.9, 546.0], [51.0, 547.0], [51.1, 550.0], [51.2, 553.0], [51.3, 554.0], [51.4, 556.0], [51.5, 558.0], [51.6, 560.0], [51.7, 561.0], [51.8, 563.0], [51.9, 564.0], [52.0, 565.0], [52.1, 566.0], [52.2, 569.0], [52.3, 570.0], [52.4, 571.0], [52.5, 572.0], [52.6, 574.0], [52.7, 575.0], [52.8, 575.0], [52.9, 576.0], [53.0, 578.0], [53.1, 579.0], [53.2, 581.0], [53.3, 582.0], [53.4, 582.0], [53.5, 584.0], [53.6, 585.0], [53.7, 587.0], [53.8, 589.0], [53.9, 589.0], [54.0, 591.0], [54.1, 591.0], [54.2, 592.0], [54.3, 593.0], [54.4, 594.0], [54.5, 595.0], [54.6, 597.0], [54.7, 598.0], [54.8, 599.0], [54.9, 601.0], [55.0, 603.0], [55.1, 604.0], [55.2, 605.0], [55.3, 607.0], [55.4, 608.0], [55.5, 610.0], [55.6, 613.0], [55.7, 614.0], [55.8, 615.0], [55.9, 616.0], [56.0, 617.0], [56.1, 619.0], [56.2, 620.0], [56.3, 621.0], [56.4, 623.0], [56.5, 626.0], [56.6, 627.0], [56.7, 629.0], [56.8, 632.0], [56.9, 634.0], [57.0, 635.0], [57.1, 636.0], [57.2, 638.0], [57.3, 640.0], [57.4, 643.0], [57.5, 645.0], [57.6, 646.0], [57.7, 649.0], [57.8, 651.0], [57.9, 652.0], [58.0, 655.0], [58.1, 658.0], [58.2, 658.0], [58.3, 660.0], [58.4, 662.0], [58.5, 663.0], [58.6, 664.0], [58.7, 666.0], [58.8, 669.0], [58.9, 670.0], [59.0, 671.0], [59.1, 672.0], [59.2, 675.0], [59.3, 676.0], [59.4, 677.0], [59.5, 678.0], [59.6, 680.0], [59.7, 681.0], [59.8, 682.0], [59.9, 684.0], [60.0, 685.0], [60.1, 686.0], [60.2, 688.0], [60.3, 690.0], [60.4, 691.0], [60.5, 691.0], [60.6, 692.0], [60.7, 694.0], [60.8, 696.0], [60.9, 697.0], [61.0, 699.0], [61.1, 700.0], [61.2, 701.0], [61.3, 703.0], [61.4, 704.0], [61.5, 706.0], [61.6, 706.0], [61.7, 707.0], [61.8, 708.0], [61.9, 711.0], [62.0, 714.0], [62.1, 715.0], [62.2, 716.0], [62.3, 718.0], [62.4, 719.0], [62.5, 722.0], [62.6, 724.0], [62.7, 725.0], [62.8, 727.0], [62.9, 729.0], [63.0, 733.0], [63.1, 735.0], [63.2, 736.0], [63.3, 739.0], [63.4, 742.0], [63.5, 743.0], [63.6, 746.0], [63.7, 749.0], [63.8, 750.0], [63.9, 752.0], [64.0, 754.0], [64.1, 756.0], [64.2, 759.0], [64.3, 761.0], [64.4, 762.0], [64.5, 764.0], [64.6, 765.0], [64.7, 767.0], [64.8, 767.0], [64.9, 769.0], [65.0, 771.0], [65.1, 773.0], [65.2, 774.0], [65.3, 776.0], [65.4, 778.0], [65.5, 780.0], [65.6, 783.0], [65.7, 784.0], [65.8, 786.0], [65.9, 787.0], [66.0, 787.0], [66.1, 789.0], [66.2, 791.0], [66.3, 792.0], [66.4, 794.0], [66.5, 795.0], [66.6, 797.0], [66.7, 799.0], [66.8, 800.0], [66.9, 802.0], [67.0, 806.0], [67.1, 807.0], [67.2, 808.0], [67.3, 809.0], [67.4, 810.0], [67.5, 812.0], [67.6, 814.0], [67.7, 815.0], [67.8, 817.0], [67.9, 819.0], [68.0, 821.0], [68.1, 822.0], [68.2, 825.0], [68.3, 827.0], [68.4, 828.0], [68.5, 831.0], [68.6, 832.0], [68.7, 833.0], [68.8, 836.0], [68.9, 838.0], [69.0, 840.0], [69.1, 841.0], [69.2, 844.0], [69.3, 847.0], [69.4, 848.0], [69.5, 851.0], [69.6, 853.0], [69.7, 855.0], [69.8, 856.0], [69.9, 857.0], [70.0, 860.0], [70.1, 863.0], [70.2, 868.0], [70.3, 872.0], [70.4, 874.0], [70.5, 876.0], [70.6, 878.0], [70.7, 881.0], [70.8, 884.0], [70.9, 887.0], [71.0, 889.0], [71.1, 891.0], [71.2, 892.0], [71.3, 894.0], [71.4, 897.0], [71.5, 898.0], [71.6, 900.0], [71.7, 902.0], [71.8, 905.0], [71.9, 906.0], [72.0, 907.0], [72.1, 910.0], [72.2, 910.0], [72.3, 912.0], [72.4, 913.0], [72.5, 914.0], [72.6, 916.0], [72.7, 917.0], [72.8, 918.0], [72.9, 919.0], [73.0, 921.0], [73.1, 923.0], [73.2, 926.0], [73.3, 929.0], [73.4, 930.0], [73.5, 934.0], [73.6, 938.0], [73.7, 940.0], [73.8, 943.0], [73.9, 945.0], [74.0, 947.0], [74.1, 950.0], [74.2, 951.0], [74.3, 954.0], [74.4, 956.0], [74.5, 961.0], [74.6, 965.0], [74.7, 968.0], [74.8, 971.0], [74.9, 977.0], [75.0, 978.0], [75.1, 979.0], [75.2, 981.0], [75.3, 982.0], [75.4, 984.0], [75.5, 985.0], [75.6, 987.0], [75.7, 989.0], [75.8, 991.0], [75.9, 994.0], [76.0, 997.0], [76.1, 1002.0], [76.2, 1006.0], [76.3, 1007.0], [76.4, 1012.0], [76.5, 1013.0], [76.6, 1016.0], [76.7, 1020.0], [76.8, 1023.0], [76.9, 1026.0], [77.0, 1030.0], [77.1, 1034.0], [77.2, 1035.0], [77.3, 1041.0], [77.4, 1044.0], [77.5, 1045.0], [77.6, 1048.0], [77.7, 1053.0], [77.8, 1057.0], [77.9, 1059.0], [78.0, 1064.0], [78.1, 1065.0], [78.2, 1067.0], [78.3, 1071.0], [78.4, 1074.0], [78.5, 1076.0], [78.6, 1077.0], [78.7, 1081.0], [78.8, 1083.0], [78.9, 1087.0], [79.0, 1088.0], [79.1, 1089.0], [79.2, 1090.0], [79.3, 1093.0], [79.4, 1096.0], [79.5, 1098.0], [79.6, 1099.0], [79.7, 1101.0], [79.8, 1103.0], [79.9, 1105.0], [80.0, 1106.0], [80.1, 1107.0], [80.2, 1110.0], [80.3, 1111.0], [80.4, 1113.0], [80.5, 1116.0], [80.6, 1120.0], [80.7, 1122.0], [80.8, 1124.0], [80.9, 1125.0], [81.0, 1129.0], [81.1, 1132.0], [81.2, 1133.0], [81.3, 1135.0], [81.4, 1137.0], [81.5, 1139.0], [81.6, 1142.0], [81.7, 1148.0], [81.8, 1153.0], [81.9, 1157.0], [82.0, 1160.0], [82.1, 1163.0], [82.2, 1166.0], [82.3, 1168.0], [82.4, 1173.0], [82.5, 1175.0], [82.6, 1182.0], [82.7, 1186.0], [82.8, 1188.0], [82.9, 1192.0], [83.0, 1195.0], [83.1, 1200.0], [83.2, 1202.0], [83.3, 1210.0], [83.4, 1213.0], [83.5, 1215.0], [83.6, 1219.0], [83.7, 1221.0], [83.8, 1224.0], [83.9, 1227.0], [84.0, 1227.0], [84.1, 1230.0], [84.2, 1234.0], [84.3, 1238.0], [84.4, 1241.0], [84.5, 1246.0], [84.6, 1247.0], [84.7, 1251.0], [84.8, 1257.0], [84.9, 1263.0], [85.0, 1269.0], [85.1, 1270.0], [85.2, 1273.0], [85.3, 1277.0], [85.4, 1283.0], [85.5, 1285.0], [85.6, 1286.0], [85.7, 1288.0], [85.8, 1290.0], [85.9, 1293.0], [86.0, 1297.0], [86.1, 1298.0], [86.2, 1299.0], [86.3, 1305.0], [86.4, 1308.0], [86.5, 1310.0], [86.6, 1317.0], [86.7, 1320.0], [86.8, 1323.0], [86.9, 1330.0], [87.0, 1336.0], [87.1, 1343.0], [87.2, 1348.0], [87.3, 1349.0], [87.4, 1353.0], [87.5, 1356.0], [87.6, 1357.0], [87.7, 1360.0], [87.8, 1362.0], [87.9, 1363.0], [88.0, 1367.0], [88.1, 1370.0], [88.2, 1375.0], [88.3, 1381.0], [88.4, 1383.0], [88.5, 1391.0], [88.6, 1399.0], [88.7, 1407.0], [88.8, 1411.0], [88.9, 1415.0], [89.0, 1423.0], [89.1, 1431.0], [89.2, 1435.0], [89.3, 1440.0], [89.4, 1446.0], [89.5, 1454.0], [89.6, 1462.0], [89.7, 1466.0], [89.8, 1467.0], [89.9, 1471.0], [90.0, 1477.0], [90.1, 1481.0], [90.2, 1484.0], [90.3, 1487.0], [90.4, 1491.0], [90.5, 1497.0], [90.6, 1506.0], [90.7, 1511.0], [90.8, 1516.0], [90.9, 1521.0], [91.0, 1527.0], [91.1, 1530.0], [91.2, 1535.0], [91.3, 1542.0], [91.4, 1546.0], [91.5, 1553.0], [91.6, 1557.0], [91.7, 1560.0], [91.8, 1566.0], [91.9, 1571.0], [92.0, 1581.0], [92.1, 1588.0], [92.2, 1595.0], [92.3, 1599.0], [92.4, 1603.0], [92.5, 1609.0], [92.6, 1616.0], [92.7, 1620.0], [92.8, 1628.0], [92.9, 1631.0], [93.0, 1634.0], [93.1, 1641.0], [93.2, 1647.0], [93.3, 1659.0], [93.4, 1670.0], [93.5, 1674.0], [93.6, 1679.0], [93.7, 1696.0], [93.8, 1705.0], [93.9, 1721.0], [94.0, 1725.0], [94.1, 1737.0], [94.2, 1745.0], [94.3, 1763.0], [94.4, 1773.0], [94.5, 1779.0], [94.6, 1788.0], [94.7, 1809.0], [94.8, 1814.0], [94.9, 1822.0], [95.0, 1828.0], [95.1, 1851.0], [95.2, 1860.0], [95.3, 1871.0], [95.4, 1879.0], [95.5, 1892.0], [95.6, 1904.0], [95.7, 1911.0], [95.8, 1925.0], [95.9, 1942.0], [96.0, 1947.0], [96.1, 1959.0], [96.2, 1978.0], [96.3, 2018.0], [96.4, 2039.0], [96.5, 2047.0], [96.6, 2065.0], [96.7, 2082.0], [96.8, 2095.0], [96.9, 2107.0], [97.0, 2126.0], [97.1, 2139.0], [97.2, 2169.0], [97.3, 2200.0], [97.4, 2208.0], [97.5, 2258.0], [97.6, 2310.0], [97.7, 2330.0], [97.8, 2376.0], [97.9, 2400.0], [98.0, 2447.0], [98.1, 2489.0], [98.2, 2507.0], [98.3, 2531.0], [98.4, 2542.0], [98.5, 2573.0], [98.6, 2600.0], [98.7, 2647.0], [98.8, 2674.0], [98.9, 2710.0], [99.0, 2873.0], [99.1, 2926.0], [99.2, 3069.0], [99.3, 3252.0], [99.4, 3319.0], [99.5, 3476.0], [99.6, 3847.0], [99.7, 3943.0], [99.8, 4024.0], [99.9, 4134.0], [100.0, 4417.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1199.0, "series": [{"data": [[0.0, 8.0], [600.0, 331.0], [700.0, 297.0], [800.0, 254.0], [900.0, 236.0], [1000.0, 189.0], [1100.0, 181.0], [1200.0, 164.0], [1300.0, 127.0], [1400.0, 101.0], [1500.0, 94.0], [100.0, 1199.0], [1600.0, 76.0], [1700.0, 47.0], [1800.0, 47.0], [1900.0, 37.0], [2000.0, 30.0], [2100.0, 24.0], [2300.0, 17.0], [2200.0, 15.0], [2400.0, 15.0], [2500.0, 22.0], [2600.0, 14.0], [2800.0, 8.0], [2700.0, 4.0], [2900.0, 3.0], [3000.0, 5.0], [3100.0, 3.0], [200.0, 569.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 5.0], [3800.0, 6.0], [3900.0, 5.0], [4000.0, 5.0], [4100.0, 4.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [300.0, 415.0], [400.0, 344.0], [500.0, 349.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 498.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2541.0, "series": [{"data": [[0.0, 2541.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2223.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 498.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.802395209580837, "minX": 1.6038513E12, "maxY": 12.0, "series": [{"data": [[1.6038513E12, 11.943166441136672], [1.60385148E12, 12.0], [1.60385154E12, 12.0], [1.60385136E12, 12.0], [1.60385142E12, 12.0], [1.6038516E12, 11.802395209580837]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 691.7793893129751, "minX": 1.0, "maxY": 4417.0, "series": [{"data": [[8.0, 2272.5], [4.0, 4417.0], [2.0, 4053.0], [1.0, 4404.0], [9.0, 1454.3333333333333], [5.0, 1059.5], [10.0, 2104.5], [11.0, 1369.75], [6.0, 1978.5], [12.0, 691.7793893129751], [3.0, 3832.0], [7.0, 3911.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979475484606624, 697.8966172557962]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3018.633333333333, "minX": 1.6038513E12, "maxY": 1100499.9166666667, "series": [{"data": [[1.6038513E12, 602291.0166666667], [1.60385148E12, 607910.4], [1.60385154E12, 1100499.9166666667], [1.60385136E12, 1011939.9833333333], [1.60385142E12, 746303.2], [1.6038516E12, 181957.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038513E12, 6334.8], [1.60385148E12, 11015.516666666666], [1.60385154E12, 7245.483333333334], [1.60385136E12, 6706.966666666666], [1.60385142E12, 11169.55], [1.6038516E12, 3018.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 534.4240837696336, "minX": 1.6038513E12, "maxY": 946.3264248704658, "series": [{"data": [[1.6038513E12, 736.8376184032477], [1.60385148E12, 578.2545889864331], [1.60385154E12, 860.663845223701], [1.60385136E12, 946.3264248704658], [1.60385142E12, 534.4240837696336], [1.6038516E12, 737.7185628742517]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 534.1510845175771, "minX": 1.6038513E12, "maxY": 945.7098445595856, "series": [{"data": [[1.6038513E12, 736.4127198917453], [1.60385148E12, 578.0103750997607], [1.60385154E12, 860.0241837968564], [1.60385136E12, 945.7098445595856], [1.60385142E12, 534.1510845175771], [1.6038516E12, 737.5029940119759]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008778930566640072, "minX": 1.6038513E12, "maxY": 0.146143437077131, "series": [{"data": [[1.6038513E12, 0.146143437077131], [1.60385148E12, 0.008778930566640072], [1.60385154E12, 0.020556227327690458], [1.60385136E12, 0.01554404145077719], [1.60385142E12, 0.008975317875841436], [1.6038516E12, 0.04491017964071859]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 49.0, "minX": 1.6038513E12, "maxY": 4417.0, "series": [{"data": [[1.6038513E12, 2803.0], [1.60385148E12, 2707.0], [1.60385154E12, 4134.0], [1.60385136E12, 3370.0], [1.60385142E12, 4120.0], [1.6038516E12, 4417.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038513E12, 139.0], [1.60385148E12, 123.5719994020462], [1.60385154E12, 107.23199684143067], [1.60385136E12, 119.0], [1.60385142E12, 146.0], [1.6038516E12, 137.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038513E12, 139.0], [1.60385148E12, 125.0], [1.60385154E12, 116.0], [1.60385136E12, 119.0], [1.60385142E12, 146.0], [1.6038516E12, 137.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038513E12, 139.0], [1.60385148E12, 124.82599970102311], [1.60385154E12, 113.85599842071532], [1.60385136E12, 119.0], [1.60385142E12, 146.0], [1.6038516E12, 137.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038513E12, 62.0], [1.60385148E12, 117.0], [1.60385154E12, 49.0], [1.60385136E12, 114.0], [1.60385142E12, 134.0], [1.6038516E12, 134.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038513E12, 641.0], [1.60385148E12, 458.0], [1.60385154E12, 708.0], [1.60385136E12, 838.0], [1.60385142E12, 301.0], [1.6038516E12, 459.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 164.0, "minX": 2.0, "maxY": 3950.0, "series": [{"data": [[2.0, 3950.0], [3.0, 3393.0], [4.0, 2327.0], [5.0, 1874.0], [6.0, 1781.0], [7.0, 1362.0], [8.0, 1357.0], [9.0, 1235.0], [10.0, 1093.0], [11.0, 1067.0], [12.0, 884.5], [13.0, 935.0], [14.0, 903.5], [15.0, 807.0], [16.0, 664.0], [17.0, 581.0], [18.0, 678.5], [19.0, 595.5], [20.0, 567.5], [21.0, 629.5], [22.0, 601.0], [23.0, 421.0], [24.0, 492.5], [25.0, 684.0], [26.0, 476.5], [27.0, 334.0], [28.0, 463.0], [29.0, 370.0], [30.0, 342.0], [31.0, 268.0], [32.0, 348.5], [33.0, 360.0], [35.0, 180.5], [34.0, 323.5], [36.0, 271.5], [37.0, 186.5], [39.0, 171.0], [38.0, 166.0], [41.0, 277.0], [40.0, 290.5], [43.0, 239.0], [44.0, 267.0], [45.0, 241.5], [47.0, 199.0], [50.0, 200.0], [52.0, 257.0], [55.0, 180.0], [57.0, 164.0], [59.0, 173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 164.0, "minX": 2.0, "maxY": 3950.0, "series": [{"data": [[2.0, 3950.0], [3.0, 3392.0], [4.0, 2326.0], [5.0, 1874.0], [6.0, 1779.5], [7.0, 1361.0], [8.0, 1356.5], [9.0, 1234.5], [10.0, 1093.0], [11.0, 1067.0], [12.0, 883.5], [13.0, 934.5], [14.0, 903.0], [15.0, 807.0], [16.0, 664.0], [17.0, 579.0], [18.0, 678.5], [19.0, 595.5], [20.0, 567.5], [21.0, 629.5], [22.0, 601.0], [23.0, 421.0], [24.0, 492.5], [25.0, 683.0], [26.0, 476.0], [27.0, 334.0], [28.0, 463.0], [29.0, 370.0], [30.0, 342.0], [31.0, 267.5], [32.0, 348.5], [33.0, 359.5], [35.0, 180.5], [34.0, 323.5], [36.0, 271.0], [37.0, 186.5], [39.0, 171.0], [38.0, 166.0], [41.0, 276.0], [40.0, 290.5], [43.0, 238.0], [44.0, 266.5], [45.0, 241.5], [47.0, 199.0], [50.0, 200.0], [52.0, 257.0], [55.0, 180.0], [57.0, 164.0], [59.0, 173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.366666666666666, "minX": 1.6038513E12, "maxY": 22.283333333333335, "series": [{"data": [[1.6038513E12, 12.516666666666667], [1.60385148E12, 20.883333333333333], [1.60385154E12, 13.783333333333333], [1.60385136E12, 12.866666666666667], [1.60385142E12, 22.283333333333335], [1.6038516E12, 5.366666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.6038513E12, "maxY": 22.283333333333335, "series": [{"data": [[1.6038513E12, 12.316666666666666], [1.60385148E12, 20.883333333333333], [1.60385154E12, 13.783333333333333], [1.60385136E12, 12.866666666666667], [1.60385142E12, 22.283333333333335], [1.6038516E12, 5.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.6038513E12, "maxY": 22.283333333333335, "series": [{"data": [[1.6038513E12, 12.316666666666666], [1.60385148E12, 20.883333333333333], [1.60385154E12, 13.783333333333333], [1.60385136E12, 12.866666666666667], [1.60385142E12, 22.283333333333335], [1.6038516E12, 5.566666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.6038513E12, "maxY": 22.283333333333335, "series": [{"data": [[1.6038513E12, 12.316666666666666], [1.60385148E12, 20.883333333333333], [1.60385154E12, 13.783333333333333], [1.60385136E12, 12.866666666666667], [1.60385142E12, 22.283333333333335], [1.6038516E12, 5.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038516E12, "title": "Total Transactions Per Second"}},
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

