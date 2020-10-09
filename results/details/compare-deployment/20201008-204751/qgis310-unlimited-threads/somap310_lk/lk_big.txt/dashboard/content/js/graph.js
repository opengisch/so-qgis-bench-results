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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 5098.0, "series": [{"data": [[0.0, 33.0], [0.1, 36.0], [0.2, 39.0], [0.3, 42.0], [0.4, 46.0], [0.5, 69.0], [0.6, 72.0], [0.7, 74.0], [0.8, 77.0], [0.9, 78.0], [1.0, 82.0], [1.1, 91.0], [1.2, 94.0], [1.3, 95.0], [1.4, 98.0], [1.5, 100.0], [1.6, 104.0], [1.7, 105.0], [1.8, 107.0], [1.9, 109.0], [2.0, 110.0], [2.1, 112.0], [2.2, 112.0], [2.3, 113.0], [2.4, 113.0], [2.5, 114.0], [2.6, 115.0], [2.7, 116.0], [2.8, 116.0], [2.9, 117.0], [3.0, 118.0], [3.1, 119.0], [3.2, 120.0], [3.3, 121.0], [3.4, 121.0], [3.5, 122.0], [3.6, 123.0], [3.7, 124.0], [3.8, 125.0], [3.9, 125.0], [4.0, 125.0], [4.1, 126.0], [4.2, 127.0], [4.3, 127.0], [4.4, 128.0], [4.5, 128.0], [4.6, 129.0], [4.7, 130.0], [4.8, 130.0], [4.9, 131.0], [5.0, 131.0], [5.1, 132.0], [5.2, 132.0], [5.3, 132.0], [5.4, 132.0], [5.5, 133.0], [5.6, 133.0], [5.7, 134.0], [5.8, 134.0], [5.9, 134.0], [6.0, 135.0], [6.1, 135.0], [6.2, 135.0], [6.3, 135.0], [6.4, 136.0], [6.5, 136.0], [6.6, 136.0], [6.7, 137.0], [6.8, 137.0], [6.9, 137.0], [7.0, 137.0], [7.1, 138.0], [7.2, 138.0], [7.3, 138.0], [7.4, 138.0], [7.5, 138.0], [7.6, 139.0], [7.7, 139.0], [7.8, 139.0], [7.9, 139.0], [8.0, 139.0], [8.1, 140.0], [8.2, 140.0], [8.3, 140.0], [8.4, 140.0], [8.5, 140.0], [8.6, 141.0], [8.7, 141.0], [8.8, 141.0], [8.9, 141.0], [9.0, 141.0], [9.1, 142.0], [9.2, 142.0], [9.3, 142.0], [9.4, 142.0], [9.5, 142.0], [9.6, 142.0], [9.7, 143.0], [9.8, 143.0], [9.9, 143.0], [10.0, 143.0], [10.1, 143.0], [10.2, 143.0], [10.3, 143.0], [10.4, 143.0], [10.5, 144.0], [10.6, 144.0], [10.7, 144.0], [10.8, 144.0], [10.9, 144.0], [11.0, 144.0], [11.1, 144.0], [11.2, 145.0], [11.3, 145.0], [11.4, 145.0], [11.5, 145.0], [11.6, 145.0], [11.7, 145.0], [11.8, 145.0], [11.9, 146.0], [12.0, 146.0], [12.1, 146.0], [12.2, 146.0], [12.3, 146.0], [12.4, 147.0], [12.5, 147.0], [12.6, 147.0], [12.7, 147.0], [12.8, 147.0], [12.9, 147.0], [13.0, 147.0], [13.1, 148.0], [13.2, 148.0], [13.3, 148.0], [13.4, 148.0], [13.5, 148.0], [13.6, 148.0], [13.7, 148.0], [13.8, 149.0], [13.9, 149.0], [14.0, 149.0], [14.1, 149.0], [14.2, 149.0], [14.3, 150.0], [14.4, 150.0], [14.5, 150.0], [14.6, 150.0], [14.7, 150.0], [14.8, 151.0], [14.9, 151.0], [15.0, 151.0], [15.1, 151.0], [15.2, 151.0], [15.3, 151.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 152.0], [15.8, 152.0], [15.9, 153.0], [16.0, 153.0], [16.1, 153.0], [16.2, 153.0], [16.3, 153.0], [16.4, 153.0], [16.5, 154.0], [16.6, 154.0], [16.7, 154.0], [16.8, 154.0], [16.9, 154.0], [17.0, 154.0], [17.1, 155.0], [17.2, 155.0], [17.3, 155.0], [17.4, 155.0], [17.5, 155.0], [17.6, 156.0], [17.7, 156.0], [17.8, 156.0], [17.9, 156.0], [18.0, 156.0], [18.1, 157.0], [18.2, 157.0], [18.3, 157.0], [18.4, 157.0], [18.5, 157.0], [18.6, 157.0], [18.7, 158.0], [18.8, 158.0], [18.9, 158.0], [19.0, 159.0], [19.1, 159.0], [19.2, 160.0], [19.3, 160.0], [19.4, 160.0], [19.5, 161.0], [19.6, 161.0], [19.7, 162.0], [19.8, 163.0], [19.9, 163.0], [20.0, 164.0], [20.1, 165.0], [20.2, 165.0], [20.3, 166.0], [20.4, 167.0], [20.5, 167.0], [20.6, 168.0], [20.7, 168.0], [20.8, 170.0], [20.9, 171.0], [21.0, 171.0], [21.1, 173.0], [21.2, 175.0], [21.3, 176.0], [21.4, 177.0], [21.5, 178.0], [21.6, 179.0], [21.7, 181.0], [21.8, 183.0], [21.9, 185.0], [22.0, 186.0], [22.1, 186.0], [22.2, 188.0], [22.3, 190.0], [22.4, 191.0], [22.5, 193.0], [22.6, 194.0], [22.7, 196.0], [22.8, 196.0], [22.9, 197.0], [23.0, 198.0], [23.1, 199.0], [23.2, 201.0], [23.3, 203.0], [23.4, 204.0], [23.5, 205.0], [23.6, 206.0], [23.7, 208.0], [23.8, 209.0], [23.9, 210.0], [24.0, 212.0], [24.1, 214.0], [24.2, 215.0], [24.3, 217.0], [24.4, 218.0], [24.5, 219.0], [24.6, 220.0], [24.7, 222.0], [24.8, 224.0], [24.9, 225.0], [25.0, 227.0], [25.1, 228.0], [25.2, 228.0], [25.3, 229.0], [25.4, 230.0], [25.5, 231.0], [25.6, 232.0], [25.7, 232.0], [25.8, 233.0], [25.9, 234.0], [26.0, 235.0], [26.1, 235.0], [26.2, 236.0], [26.3, 237.0], [26.4, 237.0], [26.5, 238.0], [26.6, 238.0], [26.7, 239.0], [26.8, 239.0], [26.9, 241.0], [27.0, 241.0], [27.1, 242.0], [27.2, 242.0], [27.3, 243.0], [27.4, 243.0], [27.5, 244.0], [27.6, 245.0], [27.7, 246.0], [27.8, 247.0], [27.9, 247.0], [28.0, 248.0], [28.1, 248.0], [28.2, 249.0], [28.3, 249.0], [28.4, 250.0], [28.5, 251.0], [28.6, 251.0], [28.7, 252.0], [28.8, 252.0], [28.9, 253.0], [29.0, 253.0], [29.1, 254.0], [29.2, 254.0], [29.3, 255.0], [29.4, 256.0], [29.5, 256.0], [29.6, 257.0], [29.7, 257.0], [29.8, 259.0], [29.9, 259.0], [30.0, 260.0], [30.1, 260.0], [30.2, 261.0], [30.3, 262.0], [30.4, 263.0], [30.5, 264.0], [30.6, 264.0], [30.7, 265.0], [30.8, 266.0], [30.9, 266.0], [31.0, 266.0], [31.1, 267.0], [31.2, 267.0], [31.3, 268.0], [31.4, 268.0], [31.5, 268.0], [31.6, 269.0], [31.7, 270.0], [31.8, 271.0], [31.9, 272.0], [32.0, 272.0], [32.1, 273.0], [32.2, 273.0], [32.3, 274.0], [32.4, 275.0], [32.5, 275.0], [32.6, 276.0], [32.7, 277.0], [32.8, 279.0], [32.9, 279.0], [33.0, 280.0], [33.1, 281.0], [33.2, 283.0], [33.3, 284.0], [33.4, 286.0], [33.5, 287.0], [33.6, 288.0], [33.7, 289.0], [33.8, 290.0], [33.9, 292.0], [34.0, 293.0], [34.1, 294.0], [34.2, 295.0], [34.3, 296.0], [34.4, 298.0], [34.5, 299.0], [34.6, 300.0], [34.7, 301.0], [34.8, 301.0], [34.9, 303.0], [35.0, 304.0], [35.1, 305.0], [35.2, 306.0], [35.3, 307.0], [35.4, 309.0], [35.5, 312.0], [35.6, 314.0], [35.7, 315.0], [35.8, 316.0], [35.9, 318.0], [36.0, 320.0], [36.1, 321.0], [36.2, 322.0], [36.3, 324.0], [36.4, 326.0], [36.5, 328.0], [36.6, 329.0], [36.7, 330.0], [36.8, 331.0], [36.9, 333.0], [37.0, 334.0], [37.1, 335.0], [37.2, 336.0], [37.3, 336.0], [37.4, 337.0], [37.5, 339.0], [37.6, 340.0], [37.7, 341.0], [37.8, 342.0], [37.9, 343.0], [38.0, 345.0], [38.1, 348.0], [38.2, 350.0], [38.3, 350.0], [38.4, 351.0], [38.5, 354.0], [38.6, 355.0], [38.7, 356.0], [38.8, 357.0], [38.9, 359.0], [39.0, 361.0], [39.1, 362.0], [39.2, 363.0], [39.3, 364.0], [39.4, 366.0], [39.5, 367.0], [39.6, 367.0], [39.7, 370.0], [39.8, 372.0], [39.9, 373.0], [40.0, 374.0], [40.1, 377.0], [40.2, 379.0], [40.3, 380.0], [40.4, 382.0], [40.5, 383.0], [40.6, 383.0], [40.7, 385.0], [40.8, 386.0], [40.9, 386.0], [41.0, 387.0], [41.1, 388.0], [41.2, 389.0], [41.3, 390.0], [41.4, 392.0], [41.5, 393.0], [41.6, 395.0], [41.7, 396.0], [41.8, 397.0], [41.9, 398.0], [42.0, 400.0], [42.1, 401.0], [42.2, 401.0], [42.3, 403.0], [42.4, 404.0], [42.5, 405.0], [42.6, 407.0], [42.7, 409.0], [42.8, 411.0], [42.9, 414.0], [43.0, 415.0], [43.1, 417.0], [43.2, 419.0], [43.3, 420.0], [43.4, 421.0], [43.5, 423.0], [43.6, 426.0], [43.7, 427.0], [43.8, 430.0], [43.9, 431.0], [44.0, 433.0], [44.1, 435.0], [44.2, 436.0], [44.3, 439.0], [44.4, 440.0], [44.5, 441.0], [44.6, 442.0], [44.7, 443.0], [44.8, 444.0], [44.9, 446.0], [45.0, 446.0], [45.1, 447.0], [45.2, 448.0], [45.3, 449.0], [45.4, 450.0], [45.5, 451.0], [45.6, 453.0], [45.7, 455.0], [45.8, 457.0], [45.9, 458.0], [46.0, 460.0], [46.1, 462.0], [46.2, 463.0], [46.3, 465.0], [46.4, 466.0], [46.5, 468.0], [46.6, 469.0], [46.7, 470.0], [46.8, 471.0], [46.9, 473.0], [47.0, 474.0], [47.1, 476.0], [47.2, 478.0], [47.3, 480.0], [47.4, 481.0], [47.5, 482.0], [47.6, 484.0], [47.7, 484.0], [47.8, 487.0], [47.9, 488.0], [48.0, 490.0], [48.1, 491.0], [48.2, 496.0], [48.3, 497.0], [48.4, 499.0], [48.5, 500.0], [48.6, 501.0], [48.7, 503.0], [48.8, 504.0], [48.9, 506.0], [49.0, 508.0], [49.1, 510.0], [49.2, 512.0], [49.3, 513.0], [49.4, 514.0], [49.5, 516.0], [49.6, 518.0], [49.7, 521.0], [49.8, 522.0], [49.9, 524.0], [50.0, 527.0], [50.1, 529.0], [50.2, 530.0], [50.3, 533.0], [50.4, 536.0], [50.5, 536.0], [50.6, 538.0], [50.7, 539.0], [50.8, 542.0], [50.9, 543.0], [51.0, 544.0], [51.1, 545.0], [51.2, 547.0], [51.3, 548.0], [51.4, 551.0], [51.5, 554.0], [51.6, 556.0], [51.7, 557.0], [51.8, 558.0], [51.9, 561.0], [52.0, 563.0], [52.1, 563.0], [52.2, 565.0], [52.3, 567.0], [52.4, 569.0], [52.5, 570.0], [52.6, 572.0], [52.7, 573.0], [52.8, 574.0], [52.9, 576.0], [53.0, 577.0], [53.1, 578.0], [53.2, 579.0], [53.3, 581.0], [53.4, 583.0], [53.5, 584.0], [53.6, 585.0], [53.7, 586.0], [53.8, 588.0], [53.9, 589.0], [54.0, 590.0], [54.1, 592.0], [54.2, 594.0], [54.3, 595.0], [54.4, 596.0], [54.5, 597.0], [54.6, 598.0], [54.7, 600.0], [54.8, 602.0], [54.9, 604.0], [55.0, 606.0], [55.1, 607.0], [55.2, 609.0], [55.3, 610.0], [55.4, 611.0], [55.5, 612.0], [55.6, 613.0], [55.7, 614.0], [55.8, 614.0], [55.9, 616.0], [56.0, 618.0], [56.1, 619.0], [56.2, 621.0], [56.3, 623.0], [56.4, 624.0], [56.5, 625.0], [56.6, 627.0], [56.7, 628.0], [56.8, 630.0], [56.9, 632.0], [57.0, 634.0], [57.1, 636.0], [57.2, 636.0], [57.3, 637.0], [57.4, 639.0], [57.5, 640.0], [57.6, 642.0], [57.7, 643.0], [57.8, 645.0], [57.9, 646.0], [58.0, 648.0], [58.1, 649.0], [58.2, 651.0], [58.3, 653.0], [58.4, 655.0], [58.5, 656.0], [58.6, 657.0], [58.7, 658.0], [58.8, 659.0], [58.9, 662.0], [59.0, 663.0], [59.1, 663.0], [59.2, 666.0], [59.3, 666.0], [59.4, 668.0], [59.5, 669.0], [59.6, 671.0], [59.7, 672.0], [59.8, 674.0], [59.9, 675.0], [60.0, 678.0], [60.1, 680.0], [60.2, 682.0], [60.3, 685.0], [60.4, 687.0], [60.5, 688.0], [60.6, 690.0], [60.7, 692.0], [60.8, 695.0], [60.9, 697.0], [61.0, 699.0], [61.1, 702.0], [61.2, 704.0], [61.3, 704.0], [61.4, 706.0], [61.5, 710.0], [61.6, 713.0], [61.7, 715.0], [61.8, 717.0], [61.9, 720.0], [62.0, 721.0], [62.1, 722.0], [62.2, 723.0], [62.3, 724.0], [62.4, 726.0], [62.5, 729.0], [62.6, 730.0], [62.7, 730.0], [62.8, 733.0], [62.9, 734.0], [63.0, 736.0], [63.1, 738.0], [63.2, 740.0], [63.3, 743.0], [63.4, 745.0], [63.5, 746.0], [63.6, 747.0], [63.7, 748.0], [63.8, 749.0], [63.9, 751.0], [64.0, 751.0], [64.1, 752.0], [64.2, 753.0], [64.3, 756.0], [64.4, 758.0], [64.5, 759.0], [64.6, 763.0], [64.7, 763.0], [64.8, 764.0], [64.9, 765.0], [65.0, 766.0], [65.1, 768.0], [65.2, 769.0], [65.3, 772.0], [65.4, 774.0], [65.5, 778.0], [65.6, 781.0], [65.7, 782.0], [65.8, 785.0], [65.9, 787.0], [66.0, 788.0], [66.1, 789.0], [66.2, 791.0], [66.3, 792.0], [66.4, 793.0], [66.5, 794.0], [66.6, 795.0], [66.7, 797.0], [66.8, 798.0], [66.9, 799.0], [67.0, 801.0], [67.1, 802.0], [67.2, 805.0], [67.3, 808.0], [67.4, 809.0], [67.5, 813.0], [67.6, 813.0], [67.7, 814.0], [67.8, 816.0], [67.9, 818.0], [68.0, 820.0], [68.1, 822.0], [68.2, 824.0], [68.3, 826.0], [68.4, 830.0], [68.5, 830.0], [68.6, 833.0], [68.7, 835.0], [68.8, 838.0], [68.9, 839.0], [69.0, 840.0], [69.1, 841.0], [69.2, 843.0], [69.3, 844.0], [69.4, 848.0], [69.5, 851.0], [69.6, 853.0], [69.7, 855.0], [69.8, 856.0], [69.9, 859.0], [70.0, 861.0], [70.1, 864.0], [70.2, 865.0], [70.3, 866.0], [70.4, 868.0], [70.5, 870.0], [70.6, 873.0], [70.7, 874.0], [70.8, 876.0], [70.9, 877.0], [71.0, 879.0], [71.1, 883.0], [71.2, 884.0], [71.3, 886.0], [71.4, 890.0], [71.5, 891.0], [71.6, 893.0], [71.7, 897.0], [71.8, 899.0], [71.9, 902.0], [72.0, 905.0], [72.1, 907.0], [72.2, 910.0], [72.3, 912.0], [72.4, 913.0], [72.5, 915.0], [72.6, 917.0], [72.7, 919.0], [72.8, 920.0], [72.9, 923.0], [73.0, 926.0], [73.1, 928.0], [73.2, 931.0], [73.3, 934.0], [73.4, 936.0], [73.5, 939.0], [73.6, 941.0], [73.7, 944.0], [73.8, 945.0], [73.9, 948.0], [74.0, 949.0], [74.1, 951.0], [74.2, 952.0], [74.3, 956.0], [74.4, 958.0], [74.5, 960.0], [74.6, 963.0], [74.7, 966.0], [74.8, 967.0], [74.9, 968.0], [75.0, 969.0], [75.1, 972.0], [75.2, 974.0], [75.3, 976.0], [75.4, 981.0], [75.5, 982.0], [75.6, 984.0], [75.7, 986.0], [75.8, 992.0], [75.9, 994.0], [76.0, 997.0], [76.1, 1000.0], [76.2, 1003.0], [76.3, 1005.0], [76.4, 1006.0], [76.5, 1009.0], [76.6, 1011.0], [76.7, 1013.0], [76.8, 1016.0], [76.9, 1019.0], [77.0, 1021.0], [77.1, 1022.0], [77.2, 1024.0], [77.3, 1026.0], [77.4, 1028.0], [77.5, 1032.0], [77.6, 1037.0], [77.7, 1041.0], [77.8, 1043.0], [77.9, 1046.0], [78.0, 1050.0], [78.1, 1052.0], [78.2, 1055.0], [78.3, 1056.0], [78.4, 1063.0], [78.5, 1065.0], [78.6, 1068.0], [78.7, 1070.0], [78.8, 1073.0], [78.9, 1076.0], [79.0, 1078.0], [79.1, 1081.0], [79.2, 1086.0], [79.3, 1090.0], [79.4, 1096.0], [79.5, 1100.0], [79.6, 1101.0], [79.7, 1102.0], [79.8, 1104.0], [79.9, 1108.0], [80.0, 1110.0], [80.1, 1112.0], [80.2, 1116.0], [80.3, 1117.0], [80.4, 1119.0], [80.5, 1121.0], [80.6, 1126.0], [80.7, 1127.0], [80.8, 1130.0], [80.9, 1134.0], [81.0, 1138.0], [81.1, 1140.0], [81.2, 1141.0], [81.3, 1145.0], [81.4, 1148.0], [81.5, 1152.0], [81.6, 1155.0], [81.7, 1158.0], [81.8, 1161.0], [81.9, 1164.0], [82.0, 1169.0], [82.1, 1175.0], [82.2, 1176.0], [82.3, 1178.0], [82.4, 1182.0], [82.5, 1183.0], [82.6, 1185.0], [82.7, 1185.0], [82.8, 1190.0], [82.9, 1193.0], [83.0, 1198.0], [83.1, 1202.0], [83.2, 1205.0], [83.3, 1207.0], [83.4, 1211.0], [83.5, 1217.0], [83.6, 1218.0], [83.7, 1221.0], [83.8, 1223.0], [83.9, 1227.0], [84.0, 1229.0], [84.1, 1234.0], [84.2, 1237.0], [84.3, 1239.0], [84.4, 1242.0], [84.5, 1243.0], [84.6, 1248.0], [84.7, 1253.0], [84.8, 1259.0], [84.9, 1261.0], [85.0, 1263.0], [85.1, 1265.0], [85.2, 1267.0], [85.3, 1273.0], [85.4, 1275.0], [85.5, 1278.0], [85.6, 1282.0], [85.7, 1287.0], [85.8, 1288.0], [85.9, 1294.0], [86.0, 1299.0], [86.1, 1300.0], [86.2, 1301.0], [86.3, 1308.0], [86.4, 1313.0], [86.5, 1317.0], [86.6, 1318.0], [86.7, 1321.0], [86.8, 1326.0], [86.9, 1329.0], [87.0, 1333.0], [87.1, 1336.0], [87.2, 1340.0], [87.3, 1345.0], [87.4, 1349.0], [87.5, 1351.0], [87.6, 1353.0], [87.7, 1358.0], [87.8, 1361.0], [87.9, 1370.0], [88.0, 1373.0], [88.1, 1377.0], [88.2, 1380.0], [88.3, 1384.0], [88.4, 1388.0], [88.5, 1393.0], [88.6, 1395.0], [88.7, 1403.0], [88.8, 1414.0], [88.9, 1420.0], [89.0, 1424.0], [89.1, 1431.0], [89.2, 1440.0], [89.3, 1443.0], [89.4, 1447.0], [89.5, 1450.0], [89.6, 1455.0], [89.7, 1461.0], [89.8, 1468.0], [89.9, 1469.0], [90.0, 1477.0], [90.1, 1483.0], [90.2, 1489.0], [90.3, 1497.0], [90.4, 1498.0], [90.5, 1504.0], [90.6, 1506.0], [90.7, 1511.0], [90.8, 1520.0], [90.9, 1530.0], [91.0, 1535.0], [91.1, 1543.0], [91.2, 1548.0], [91.3, 1551.0], [91.4, 1555.0], [91.5, 1564.0], [91.6, 1567.0], [91.7, 1572.0], [91.8, 1582.0], [91.9, 1590.0], [92.0, 1599.0], [92.1, 1606.0], [92.2, 1614.0], [92.3, 1626.0], [92.4, 1632.0], [92.5, 1641.0], [92.6, 1648.0], [92.7, 1652.0], [92.8, 1658.0], [92.9, 1663.0], [93.0, 1671.0], [93.1, 1678.0], [93.2, 1686.0], [93.3, 1696.0], [93.4, 1707.0], [93.5, 1726.0], [93.6, 1732.0], [93.7, 1743.0], [93.8, 1746.0], [93.9, 1757.0], [94.0, 1766.0], [94.1, 1779.0], [94.2, 1788.0], [94.3, 1792.0], [94.4, 1804.0], [94.5, 1821.0], [94.6, 1828.0], [94.7, 1847.0], [94.8, 1855.0], [94.9, 1880.0], [95.0, 1885.0], [95.1, 1894.0], [95.2, 1904.0], [95.3, 1917.0], [95.4, 1930.0], [95.5, 1941.0], [95.6, 1957.0], [95.7, 1971.0], [95.8, 1986.0], [95.9, 1999.0], [96.0, 2015.0], [96.1, 2026.0], [96.2, 2057.0], [96.3, 2072.0], [96.4, 2094.0], [96.5, 2103.0], [96.6, 2135.0], [96.7, 2157.0], [96.8, 2200.0], [96.9, 2211.0], [97.0, 2236.0], [97.1, 2260.0], [97.2, 2273.0], [97.3, 2303.0], [97.4, 2318.0], [97.5, 2343.0], [97.6, 2358.0], [97.7, 2385.0], [97.8, 2403.0], [97.9, 2435.0], [98.0, 2470.0], [98.1, 2532.0], [98.2, 2593.0], [98.3, 2624.0], [98.4, 2644.0], [98.5, 2691.0], [98.6, 2724.0], [98.7, 2744.0], [98.8, 2801.0], [98.9, 2842.0], [99.0, 2887.0], [99.1, 2928.0], [99.2, 3012.0], [99.3, 3110.0], [99.4, 3236.0], [99.5, 3399.0], [99.6, 3529.0], [99.7, 4021.0], [99.8, 4138.0], [99.9, 4196.0], [100.0, 5098.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1139.0, "series": [{"data": [[0.0, 79.0], [600.0, 336.0], [700.0, 312.0], [800.0, 256.0], [900.0, 225.0], [1000.0, 180.0], [1100.0, 187.0], [1200.0, 159.0], [1300.0, 137.0], [1400.0, 93.0], [1500.0, 84.0], [100.0, 1139.0], [1600.0, 71.0], [1700.0, 53.0], [1800.0, 41.0], [1900.0, 40.0], [2000.0, 30.0], [2100.0, 17.0], [2200.0, 25.0], [2300.0, 27.0], [2400.0, 15.0], [2500.0, 10.0], [2600.0, 15.0], [2700.0, 13.0], [2800.0, 13.0], [2900.0, 8.0], [3000.0, 6.0], [3100.0, 4.0], [200.0, 606.0], [3200.0, 4.0], [3300.0, 3.0], [3400.0, 4.0], [3500.0, 2.0], [3900.0, 3.0], [4000.0, 5.0], [4200.0, 3.0], [4100.0, 7.0], [4300.0, 1.0], [300.0, 389.0], [5000.0, 1.0], [400.0, 341.0], [500.0, 328.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 504.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2560.0, "series": [{"data": [[0.0, 2560.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2208.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 504.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.858267716535432, "minX": 1.60219608E12, "maxY": 12.0, "series": [{"data": [[1.60219632E12, 12.0], [1.60219638E12, 11.920673076923075], [1.6021962E12, 12.0], [1.60219626E12, 12.0], [1.60219608E12, 11.858267716535432], [1.60219614E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219638E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 688.8370454978108, "minX": 1.0, "maxY": 4354.0, "series": [{"data": [[8.0, 2129.0], [4.0, 4196.0], [2.0, 4157.0], [1.0, 4354.0], [9.0, 2219.0], [5.0, 1493.3333333333333], [10.0, 2705.5], [11.0, 2128.5], [6.0, 1481.0], [12.0, 688.8370454978108], [3.0, 4156.0], [7.0, 4122.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980652503793614, 695.5108118361162]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2276.116666666667, "minX": 1.60219608E12, "maxY": 1039022.8666666667, "series": [{"data": [[1.60219632E12, 1039022.8666666667], [1.60219638E12, 660614.1666666666], [1.6021962E12, 743623.55], [1.60219626E12, 781021.95], [1.60219608E12, 84337.28333333334], [1.60219614E12, 982920.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219632E12, 8685.25], [1.60219638E12, 7365.033333333334], [1.6021962E12, 8255.85], [1.60219626E12, 11846.5], [1.60219608E12, 2276.116666666667], [1.60219614E12, 7150.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219638E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 502.8941836019621, "minX": 1.60219608E12, "maxY": 863.3978494623659, "series": [{"data": [[1.60219632E12, 722.4562814070347], [1.60219638E12, 773.1899038461547], [1.6021962E12, 778.4724919093844], [1.60219626E12, 502.8941836019621], [1.60219608E12, 561.6417322834646], [1.60219614E12, 863.3978494623659]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219638E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 502.64470918009766, "minX": 1.60219608E12, "maxY": 862.816009557946, "series": [{"data": [[1.60219632E12, 721.9979899497482], [1.60219638E12, 772.8497596153849], [1.6021962E12, 778.101402373247], [1.60219626E12, 502.64470918009766], [1.60219608E12, 561.3897637795276], [1.60219614E12, 862.816009557946]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219638E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009110021023125447, "minX": 1.60219608E12, "maxY": 0.5669291338582679, "series": [{"data": [[1.60219632E12, 0.02512562814070352], [1.60219638E12, 0.01682692307692311], [1.6021962E12, 0.0161812297734628], [1.60219626E12, 0.009110021023125447], [1.60219608E12, 0.5669291338582679], [1.60219614E12, 0.017921146953405027]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219638E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 33.0, "minX": 1.60219608E12, "maxY": 5098.0, "series": [{"data": [[1.60219632E12, 3399.0], [1.60219638E12, 5098.0], [1.6021962E12, 4260.0], [1.60219626E12, 2887.0], [1.60219608E12, 2057.0], [1.60219614E12, 3431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219632E12, 70.0], [1.60219638E12, 121.0], [1.6021962E12, 128.35199977874757], [1.60219626E12, 40.851999659538265], [1.60219608E12, 94.33999683856965], [1.60219614E12, 115.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219632E12, 70.86040009498596], [1.60219638E12, 121.24670007944107], [1.6021962E12, 129.187200088501], [1.60219626E12, 42.13720013618469], [1.60219608E12, 106.27400126457215], [1.60219614E12, 115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219632E12, 70.46199988126754], [1.60219638E12, 121.0], [1.6021962E12, 128.81599988937378], [1.60219626E12, 41.56599982976913], [1.60219608E12, 100.96999841928482], [1.60219614E12, 115.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219632E12, 39.0], [1.60219638E12, 116.0], [1.6021962E12, 122.0], [1.60219626E12, 33.0], [1.60219608E12, 70.0], [1.60219614E12, 109.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219632E12, 586.0], [1.60219638E12, 582.0], [1.6021962E12, 569.0], [1.60219626E12, 300.0], [1.60219608E12, 557.0], [1.60219614E12, 795.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219638E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 140.0, "minX": 1.0, "maxY": 4354.0, "series": [{"data": [[2.0, 4216.0], [3.0, 3163.0], [4.0, 1951.0], [5.0, 1857.5], [6.0, 1656.0], [7.0, 1441.0], [8.0, 1383.0], [9.0, 1226.0], [10.0, 1162.0], [11.0, 864.0], [12.0, 969.5], [13.0, 890.0], [14.0, 834.0], [15.0, 729.5], [16.0, 735.5], [17.0, 744.0], [18.0, 725.0], [19.0, 514.0], [20.0, 732.0], [21.0, 436.5], [22.0, 558.0], [23.0, 625.0], [24.0, 390.0], [25.0, 448.0], [26.0, 503.5], [27.0, 390.0], [28.0, 402.0], [29.0, 425.0], [30.0, 258.0], [31.0, 336.5], [32.0, 341.0], [33.0, 372.5], [34.0, 308.0], [37.0, 154.5], [36.0, 198.5], [39.0, 305.5], [38.0, 147.0], [40.0, 240.5], [41.0, 153.5], [43.0, 261.0], [42.0, 259.0], [45.0, 253.0], [44.0, 259.0], [47.0, 147.0], [49.0, 247.0], [48.0, 156.5], [51.0, 140.0], [52.0, 249.0], [54.0, 151.0], [59.0, 170.0], [63.0, 143.0], [1.0, 4354.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 140.0, "minX": 1.0, "maxY": 4354.0, "series": [{"data": [[2.0, 4215.5], [3.0, 3159.5], [4.0, 1949.5], [5.0, 1857.0], [6.0, 1656.0], [7.0, 1440.0], [8.0, 1382.5], [9.0, 1224.0], [10.0, 1161.0], [11.0, 864.0], [12.0, 969.5], [13.0, 890.0], [14.0, 833.5], [15.0, 729.5], [16.0, 734.5], [17.0, 744.0], [18.0, 725.0], [19.0, 513.0], [20.0, 732.0], [21.0, 436.5], [22.0, 558.0], [23.0, 625.0], [24.0, 390.0], [25.0, 448.0], [26.0, 503.5], [27.0, 389.0], [28.0, 401.5], [29.0, 424.0], [30.0, 258.0], [31.0, 335.5], [32.0, 341.0], [33.0, 372.5], [34.0, 307.5], [37.0, 154.0], [36.0, 198.5], [39.0, 305.5], [38.0, 147.0], [40.0, 240.5], [41.0, 153.5], [43.0, 260.0], [42.0, 259.0], [45.0, 253.0], [44.0, 259.0], [47.0, 147.0], [49.0, 247.0], [48.0, 156.5], [51.0, 140.0], [52.0, 249.0], [54.0, 151.0], [59.0, 170.0], [63.0, 143.0], [1.0, 4354.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.433333333333334, "minX": 1.60219608E12, "maxY": 23.783333333333335, "series": [{"data": [[1.60219632E12, 16.583333333333332], [1.60219638E12, 13.666666666666666], [1.6021962E12, 15.45], [1.60219626E12, 23.783333333333335], [1.60219608E12, 4.433333333333334], [1.60219614E12, 13.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219638E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60219608E12, "maxY": 23.783333333333335, "series": [{"data": [[1.60219632E12, 16.583333333333332], [1.60219638E12, 13.866666666666667], [1.6021962E12, 15.45], [1.60219626E12, 23.783333333333335], [1.60219608E12, 4.233333333333333], [1.60219614E12, 13.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219638E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60219608E12, "maxY": 23.783333333333335, "series": [{"data": [[1.60219632E12, 16.583333333333332], [1.60219638E12, 13.866666666666667], [1.6021962E12, 15.45], [1.60219626E12, 23.783333333333335], [1.60219608E12, 4.233333333333333], [1.60219614E12, 13.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219638E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.233333333333333, "minX": 1.60219608E12, "maxY": 23.783333333333335, "series": [{"data": [[1.60219632E12, 16.583333333333332], [1.60219638E12, 13.866666666666667], [1.6021962E12, 15.45], [1.60219626E12, 23.783333333333335], [1.60219608E12, 4.233333333333333], [1.60219614E12, 13.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219638E12, "title": "Total Transactions Per Second"}},
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

