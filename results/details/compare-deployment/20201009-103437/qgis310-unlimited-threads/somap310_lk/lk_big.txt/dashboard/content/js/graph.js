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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 5265.0, "series": [{"data": [[0.0, 34.0], [0.1, 38.0], [0.2, 41.0], [0.3, 44.0], [0.4, 58.0], [0.5, 70.0], [0.6, 73.0], [0.7, 75.0], [0.8, 77.0], [0.9, 78.0], [1.0, 78.0], [1.1, 82.0], [1.2, 90.0], [1.3, 98.0], [1.4, 110.0], [1.5, 113.0], [1.6, 116.0], [1.7, 118.0], [1.8, 120.0], [1.9, 124.0], [2.0, 127.0], [2.1, 129.0], [2.2, 130.0], [2.3, 130.0], [2.4, 131.0], [2.5, 131.0], [2.6, 132.0], [2.7, 132.0], [2.8, 133.0], [2.9, 133.0], [3.0, 133.0], [3.1, 134.0], [3.2, 134.0], [3.3, 135.0], [3.4, 135.0], [3.5, 135.0], [3.6, 135.0], [3.7, 136.0], [3.8, 136.0], [3.9, 136.0], [4.0, 136.0], [4.1, 137.0], [4.2, 137.0], [4.3, 137.0], [4.4, 137.0], [4.5, 137.0], [4.6, 138.0], [4.7, 138.0], [4.8, 138.0], [4.9, 138.0], [5.0, 139.0], [5.1, 139.0], [5.2, 139.0], [5.3, 139.0], [5.4, 139.0], [5.5, 139.0], [5.6, 140.0], [5.7, 140.0], [5.8, 140.0], [5.9, 140.0], [6.0, 141.0], [6.1, 141.0], [6.2, 141.0], [6.3, 141.0], [6.4, 141.0], [6.5, 142.0], [6.6, 142.0], [6.7, 142.0], [6.8, 142.0], [6.9, 142.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 143.0], [7.6, 143.0], [7.7, 144.0], [7.8, 144.0], [7.9, 144.0], [8.0, 144.0], [8.1, 144.0], [8.2, 144.0], [8.3, 145.0], [8.4, 145.0], [8.5, 145.0], [8.6, 145.0], [8.7, 145.0], [8.8, 145.0], [8.9, 145.0], [9.0, 146.0], [9.1, 146.0], [9.2, 146.0], [9.3, 146.0], [9.4, 146.0], [9.5, 146.0], [9.6, 147.0], [9.7, 147.0], [9.8, 147.0], [9.9, 147.0], [10.0, 147.0], [10.1, 148.0], [10.2, 148.0], [10.3, 148.0], [10.4, 148.0], [10.5, 148.0], [10.6, 148.0], [10.7, 149.0], [10.8, 149.0], [10.9, 149.0], [11.0, 149.0], [11.1, 149.0], [11.2, 150.0], [11.3, 150.0], [11.4, 150.0], [11.5, 150.0], [11.6, 150.0], [11.7, 150.0], [11.8, 151.0], [11.9, 151.0], [12.0, 151.0], [12.1, 151.0], [12.2, 151.0], [12.3, 151.0], [12.4, 151.0], [12.5, 152.0], [12.6, 152.0], [12.7, 152.0], [12.8, 152.0], [12.9, 152.0], [13.0, 152.0], [13.1, 153.0], [13.2, 153.0], [13.3, 153.0], [13.4, 153.0], [13.5, 153.0], [13.6, 153.0], [13.7, 154.0], [13.8, 154.0], [13.9, 154.0], [14.0, 154.0], [14.1, 154.0], [14.2, 154.0], [14.3, 155.0], [14.4, 155.0], [14.5, 155.0], [14.6, 155.0], [14.7, 155.0], [14.8, 155.0], [14.9, 155.0], [15.0, 156.0], [15.1, 156.0], [15.2, 156.0], [15.3, 156.0], [15.4, 156.0], [15.5, 156.0], [15.6, 157.0], [15.7, 157.0], [15.8, 157.0], [15.9, 158.0], [16.0, 158.0], [16.1, 158.0], [16.2, 158.0], [16.3, 158.0], [16.4, 159.0], [16.5, 159.0], [16.6, 159.0], [16.7, 159.0], [16.8, 159.0], [16.9, 159.0], [17.0, 160.0], [17.1, 160.0], [17.2, 160.0], [17.3, 161.0], [17.4, 161.0], [17.5, 161.0], [17.6, 162.0], [17.7, 162.0], [17.8, 162.0], [17.9, 163.0], [18.0, 163.0], [18.1, 163.0], [18.2, 164.0], [18.3, 164.0], [18.4, 164.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 166.0], [19.0, 166.0], [19.1, 166.0], [19.2, 166.0], [19.3, 166.0], [19.4, 167.0], [19.5, 167.0], [19.6, 168.0], [19.7, 168.0], [19.8, 169.0], [19.9, 169.0], [20.0, 170.0], [20.1, 170.0], [20.2, 171.0], [20.3, 171.0], [20.4, 172.0], [20.5, 172.0], [20.6, 172.0], [20.7, 173.0], [20.8, 173.0], [20.9, 174.0], [21.0, 174.0], [21.1, 176.0], [21.2, 177.0], [21.3, 177.0], [21.4, 179.0], [21.5, 180.0], [21.6, 180.0], [21.7, 182.0], [21.8, 182.0], [21.9, 183.0], [22.0, 183.0], [22.1, 185.0], [22.2, 185.0], [22.3, 186.0], [22.4, 187.0], [22.5, 188.0], [22.6, 189.0], [22.7, 191.0], [22.8, 191.0], [22.9, 192.0], [23.0, 194.0], [23.1, 195.0], [23.2, 195.0], [23.3, 198.0], [23.4, 199.0], [23.5, 200.0], [23.6, 201.0], [23.7, 201.0], [23.8, 202.0], [23.9, 203.0], [24.0, 204.0], [24.1, 205.0], [24.2, 206.0], [24.3, 208.0], [24.4, 209.0], [24.5, 210.0], [24.6, 211.0], [24.7, 213.0], [24.8, 214.0], [24.9, 214.0], [25.0, 215.0], [25.1, 216.0], [25.2, 217.0], [25.3, 218.0], [25.4, 219.0], [25.5, 220.0], [25.6, 220.0], [25.7, 221.0], [25.8, 222.0], [25.9, 224.0], [26.0, 224.0], [26.1, 225.0], [26.2, 226.0], [26.3, 227.0], [26.4, 228.0], [26.5, 229.0], [26.6, 230.0], [26.7, 231.0], [26.8, 231.0], [26.9, 233.0], [27.0, 233.0], [27.1, 234.0], [27.2, 235.0], [27.3, 236.0], [27.4, 236.0], [27.5, 237.0], [27.6, 237.0], [27.7, 238.0], [27.8, 239.0], [27.9, 239.0], [28.0, 240.0], [28.1, 241.0], [28.2, 242.0], [28.3, 242.0], [28.4, 244.0], [28.5, 245.0], [28.6, 246.0], [28.7, 247.0], [28.8, 249.0], [28.9, 249.0], [29.0, 250.0], [29.1, 251.0], [29.2, 252.0], [29.3, 253.0], [29.4, 253.0], [29.5, 254.0], [29.6, 255.0], [29.7, 256.0], [29.8, 256.0], [29.9, 257.0], [30.0, 257.0], [30.1, 258.0], [30.2, 259.0], [30.3, 260.0], [30.4, 260.0], [30.5, 261.0], [30.6, 261.0], [30.7, 261.0], [30.8, 263.0], [30.9, 264.0], [31.0, 264.0], [31.1, 265.0], [31.2, 266.0], [31.3, 267.0], [31.4, 267.0], [31.5, 268.0], [31.6, 268.0], [31.7, 269.0], [31.8, 270.0], [31.9, 270.0], [32.0, 271.0], [32.1, 272.0], [32.2, 273.0], [32.3, 274.0], [32.4, 275.0], [32.5, 276.0], [32.6, 276.0], [32.7, 277.0], [32.8, 278.0], [32.9, 278.0], [33.0, 280.0], [33.1, 281.0], [33.2, 282.0], [33.3, 283.0], [33.4, 284.0], [33.5, 286.0], [33.6, 286.0], [33.7, 289.0], [33.8, 290.0], [33.9, 291.0], [34.0, 292.0], [34.1, 293.0], [34.2, 295.0], [34.3, 296.0], [34.4, 297.0], [34.5, 299.0], [34.6, 300.0], [34.7, 301.0], [34.8, 302.0], [34.9, 302.0], [35.0, 303.0], [35.1, 305.0], [35.2, 305.0], [35.3, 306.0], [35.4, 308.0], [35.5, 309.0], [35.6, 311.0], [35.7, 312.0], [35.8, 314.0], [35.9, 315.0], [36.0, 316.0], [36.1, 317.0], [36.2, 318.0], [36.3, 320.0], [36.4, 322.0], [36.5, 324.0], [36.6, 328.0], [36.7, 330.0], [36.8, 331.0], [36.9, 333.0], [37.0, 334.0], [37.1, 336.0], [37.2, 337.0], [37.3, 339.0], [37.4, 340.0], [37.5, 342.0], [37.6, 343.0], [37.7, 346.0], [37.8, 347.0], [37.9, 348.0], [38.0, 349.0], [38.1, 350.0], [38.2, 350.0], [38.3, 351.0], [38.4, 352.0], [38.5, 353.0], [38.6, 355.0], [38.7, 357.0], [38.8, 358.0], [38.9, 360.0], [39.0, 361.0], [39.1, 362.0], [39.2, 363.0], [39.3, 364.0], [39.4, 366.0], [39.5, 369.0], [39.6, 370.0], [39.7, 372.0], [39.8, 372.0], [39.9, 373.0], [40.0, 375.0], [40.1, 376.0], [40.2, 377.0], [40.3, 378.0], [40.4, 380.0], [40.5, 383.0], [40.6, 384.0], [40.7, 388.0], [40.8, 389.0], [40.9, 392.0], [41.0, 392.0], [41.1, 393.0], [41.2, 396.0], [41.3, 400.0], [41.4, 402.0], [41.5, 405.0], [41.6, 406.0], [41.7, 409.0], [41.8, 413.0], [41.9, 415.0], [42.0, 416.0], [42.1, 418.0], [42.2, 419.0], [42.3, 421.0], [42.4, 424.0], [42.5, 426.0], [42.6, 427.0], [42.7, 429.0], [42.8, 431.0], [42.9, 433.0], [43.0, 435.0], [43.1, 436.0], [43.2, 438.0], [43.3, 439.0], [43.4, 440.0], [43.5, 441.0], [43.6, 442.0], [43.7, 444.0], [43.8, 446.0], [43.9, 448.0], [44.0, 449.0], [44.1, 450.0], [44.2, 451.0], [44.3, 452.0], [44.4, 453.0], [44.5, 455.0], [44.6, 456.0], [44.7, 457.0], [44.8, 458.0], [44.9, 458.0], [45.0, 460.0], [45.1, 461.0], [45.2, 461.0], [45.3, 462.0], [45.4, 462.0], [45.5, 464.0], [45.6, 465.0], [45.7, 466.0], [45.8, 468.0], [45.9, 469.0], [46.0, 472.0], [46.1, 473.0], [46.2, 474.0], [46.3, 476.0], [46.4, 477.0], [46.5, 478.0], [46.6, 480.0], [46.7, 482.0], [46.8, 483.0], [46.9, 484.0], [47.0, 486.0], [47.1, 487.0], [47.2, 488.0], [47.3, 490.0], [47.4, 492.0], [47.5, 493.0], [47.6, 494.0], [47.7, 497.0], [47.8, 500.0], [47.9, 502.0], [48.0, 503.0], [48.1, 505.0], [48.2, 507.0], [48.3, 509.0], [48.4, 511.0], [48.5, 512.0], [48.6, 515.0], [48.7, 517.0], [48.8, 519.0], [48.9, 521.0], [49.0, 522.0], [49.1, 524.0], [49.2, 527.0], [49.3, 528.0], [49.4, 529.0], [49.5, 530.0], [49.6, 531.0], [49.7, 532.0], [49.8, 533.0], [49.9, 535.0], [50.0, 535.0], [50.1, 538.0], [50.2, 540.0], [50.3, 541.0], [50.4, 542.0], [50.5, 543.0], [50.6, 545.0], [50.7, 545.0], [50.8, 548.0], [50.9, 550.0], [51.0, 551.0], [51.1, 553.0], [51.2, 553.0], [51.3, 555.0], [51.4, 557.0], [51.5, 558.0], [51.6, 559.0], [51.7, 561.0], [51.8, 563.0], [51.9, 564.0], [52.0, 565.0], [52.1, 567.0], [52.2, 568.0], [52.3, 570.0], [52.4, 571.0], [52.5, 572.0], [52.6, 573.0], [52.7, 574.0], [52.8, 576.0], [52.9, 577.0], [53.0, 578.0], [53.1, 580.0], [53.2, 582.0], [53.3, 584.0], [53.4, 585.0], [53.5, 587.0], [53.6, 588.0], [53.7, 591.0], [53.8, 593.0], [53.9, 594.0], [54.0, 595.0], [54.1, 597.0], [54.2, 598.0], [54.3, 599.0], [54.4, 601.0], [54.5, 602.0], [54.6, 604.0], [54.7, 605.0], [54.8, 608.0], [54.9, 609.0], [55.0, 610.0], [55.1, 611.0], [55.2, 613.0], [55.3, 615.0], [55.4, 617.0], [55.5, 619.0], [55.6, 620.0], [55.7, 621.0], [55.8, 622.0], [55.9, 624.0], [56.0, 624.0], [56.1, 626.0], [56.2, 628.0], [56.3, 632.0], [56.4, 633.0], [56.5, 635.0], [56.6, 635.0], [56.7, 637.0], [56.8, 638.0], [56.9, 640.0], [57.0, 642.0], [57.1, 642.0], [57.2, 644.0], [57.3, 645.0], [57.4, 646.0], [57.5, 648.0], [57.6, 650.0], [57.7, 652.0], [57.8, 653.0], [57.9, 655.0], [58.0, 658.0], [58.1, 660.0], [58.2, 662.0], [58.3, 664.0], [58.4, 666.0], [58.5, 668.0], [58.6, 669.0], [58.7, 669.0], [58.8, 670.0], [58.9, 672.0], [59.0, 674.0], [59.1, 675.0], [59.2, 676.0], [59.3, 678.0], [59.4, 679.0], [59.5, 680.0], [59.6, 682.0], [59.7, 683.0], [59.8, 684.0], [59.9, 686.0], [60.0, 687.0], [60.1, 688.0], [60.2, 690.0], [60.3, 691.0], [60.4, 692.0], [60.5, 694.0], [60.6, 695.0], [60.7, 697.0], [60.8, 698.0], [60.9, 699.0], [61.0, 701.0], [61.1, 703.0], [61.2, 704.0], [61.3, 707.0], [61.4, 709.0], [61.5, 711.0], [61.6, 713.0], [61.7, 715.0], [61.8, 720.0], [61.9, 722.0], [62.0, 725.0], [62.1, 728.0], [62.2, 729.0], [62.3, 733.0], [62.4, 736.0], [62.5, 738.0], [62.6, 741.0], [62.7, 742.0], [62.8, 743.0], [62.9, 745.0], [63.0, 748.0], [63.1, 749.0], [63.2, 750.0], [63.3, 753.0], [63.4, 755.0], [63.5, 757.0], [63.6, 759.0], [63.7, 763.0], [63.8, 765.0], [63.9, 766.0], [64.0, 769.0], [64.1, 770.0], [64.2, 772.0], [64.3, 773.0], [64.4, 775.0], [64.5, 777.0], [64.6, 779.0], [64.7, 780.0], [64.8, 783.0], [64.9, 784.0], [65.0, 787.0], [65.1, 789.0], [65.2, 791.0], [65.3, 792.0], [65.4, 794.0], [65.5, 796.0], [65.6, 798.0], [65.7, 799.0], [65.8, 800.0], [65.9, 801.0], [66.0, 803.0], [66.1, 804.0], [66.2, 806.0], [66.3, 807.0], [66.4, 808.0], [66.5, 809.0], [66.6, 811.0], [66.7, 812.0], [66.8, 814.0], [66.9, 815.0], [67.0, 816.0], [67.1, 817.0], [67.2, 818.0], [67.3, 821.0], [67.4, 822.0], [67.5, 823.0], [67.6, 825.0], [67.7, 826.0], [67.8, 827.0], [67.9, 829.0], [68.0, 830.0], [68.1, 833.0], [68.2, 834.0], [68.3, 836.0], [68.4, 839.0], [68.5, 841.0], [68.6, 843.0], [68.7, 845.0], [68.8, 846.0], [68.9, 848.0], [69.0, 850.0], [69.1, 851.0], [69.2, 854.0], [69.3, 856.0], [69.4, 860.0], [69.5, 861.0], [69.6, 863.0], [69.7, 865.0], [69.8, 866.0], [69.9, 867.0], [70.0, 869.0], [70.1, 871.0], [70.2, 874.0], [70.3, 875.0], [70.4, 878.0], [70.5, 881.0], [70.6, 882.0], [70.7, 884.0], [70.8, 884.0], [70.9, 887.0], [71.0, 889.0], [71.1, 891.0], [71.2, 894.0], [71.3, 896.0], [71.4, 901.0], [71.5, 904.0], [71.6, 907.0], [71.7, 911.0], [71.8, 916.0], [71.9, 920.0], [72.0, 923.0], [72.1, 924.0], [72.2, 926.0], [72.3, 928.0], [72.4, 932.0], [72.5, 934.0], [72.6, 936.0], [72.7, 938.0], [72.8, 943.0], [72.9, 945.0], [73.0, 951.0], [73.1, 952.0], [73.2, 956.0], [73.3, 960.0], [73.4, 962.0], [73.5, 965.0], [73.6, 966.0], [73.7, 967.0], [73.8, 970.0], [73.9, 972.0], [74.0, 974.0], [74.1, 976.0], [74.2, 977.0], [74.3, 979.0], [74.4, 982.0], [74.5, 983.0], [74.6, 985.0], [74.7, 988.0], [74.8, 990.0], [74.9, 991.0], [75.0, 994.0], [75.1, 997.0], [75.2, 998.0], [75.3, 1001.0], [75.4, 1004.0], [75.5, 1007.0], [75.6, 1008.0], [75.7, 1010.0], [75.8, 1014.0], [75.9, 1019.0], [76.0, 1020.0], [76.1, 1022.0], [76.2, 1024.0], [76.3, 1025.0], [76.4, 1026.0], [76.5, 1028.0], [76.6, 1030.0], [76.7, 1032.0], [76.8, 1035.0], [76.9, 1040.0], [77.0, 1042.0], [77.1, 1045.0], [77.2, 1047.0], [77.3, 1050.0], [77.4, 1051.0], [77.5, 1054.0], [77.6, 1056.0], [77.7, 1058.0], [77.8, 1060.0], [77.9, 1062.0], [78.0, 1066.0], [78.1, 1067.0], [78.2, 1070.0], [78.3, 1072.0], [78.4, 1075.0], [78.5, 1078.0], [78.6, 1084.0], [78.7, 1086.0], [78.8, 1089.0], [78.9, 1092.0], [79.0, 1094.0], [79.1, 1096.0], [79.2, 1098.0], [79.3, 1101.0], [79.4, 1105.0], [79.5, 1107.0], [79.6, 1110.0], [79.7, 1111.0], [79.8, 1115.0], [79.9, 1118.0], [80.0, 1118.0], [80.1, 1120.0], [80.2, 1124.0], [80.3, 1127.0], [80.4, 1129.0], [80.5, 1131.0], [80.6, 1134.0], [80.7, 1139.0], [80.8, 1141.0], [80.9, 1143.0], [81.0, 1146.0], [81.1, 1148.0], [81.2, 1151.0], [81.3, 1153.0], [81.4, 1156.0], [81.5, 1159.0], [81.6, 1170.0], [81.7, 1173.0], [81.8, 1177.0], [81.9, 1178.0], [82.0, 1181.0], [82.1, 1184.0], [82.2, 1189.0], [82.3, 1194.0], [82.4, 1198.0], [82.5, 1200.0], [82.6, 1204.0], [82.7, 1206.0], [82.8, 1211.0], [82.9, 1215.0], [83.0, 1221.0], [83.1, 1227.0], [83.2, 1228.0], [83.3, 1231.0], [83.4, 1234.0], [83.5, 1237.0], [83.6, 1242.0], [83.7, 1246.0], [83.8, 1248.0], [83.9, 1251.0], [84.0, 1253.0], [84.1, 1255.0], [84.2, 1256.0], [84.3, 1259.0], [84.4, 1263.0], [84.5, 1267.0], [84.6, 1272.0], [84.7, 1275.0], [84.8, 1279.0], [84.9, 1283.0], [85.0, 1290.0], [85.1, 1299.0], [85.2, 1300.0], [85.3, 1303.0], [85.4, 1304.0], [85.5, 1306.0], [85.6, 1308.0], [85.7, 1311.0], [85.8, 1314.0], [85.9, 1316.0], [86.0, 1319.0], [86.1, 1321.0], [86.2, 1323.0], [86.3, 1328.0], [86.4, 1330.0], [86.5, 1333.0], [86.6, 1338.0], [86.7, 1343.0], [86.8, 1346.0], [86.9, 1351.0], [87.0, 1354.0], [87.1, 1360.0], [87.2, 1363.0], [87.3, 1365.0], [87.4, 1368.0], [87.5, 1370.0], [87.6, 1374.0], [87.7, 1376.0], [87.8, 1383.0], [87.9, 1389.0], [88.0, 1392.0], [88.1, 1396.0], [88.2, 1400.0], [88.3, 1404.0], [88.4, 1407.0], [88.5, 1411.0], [88.6, 1415.0], [88.7, 1422.0], [88.8, 1425.0], [88.9, 1427.0], [89.0, 1431.0], [89.1, 1433.0], [89.2, 1435.0], [89.3, 1443.0], [89.4, 1447.0], [89.5, 1450.0], [89.6, 1455.0], [89.7, 1458.0], [89.8, 1465.0], [89.9, 1469.0], [90.0, 1473.0], [90.1, 1475.0], [90.2, 1479.0], [90.3, 1484.0], [90.4, 1490.0], [90.5, 1491.0], [90.6, 1496.0], [90.7, 1504.0], [90.8, 1509.0], [90.9, 1520.0], [91.0, 1523.0], [91.1, 1535.0], [91.2, 1544.0], [91.3, 1551.0], [91.4, 1556.0], [91.5, 1558.0], [91.6, 1569.0], [91.7, 1573.0], [91.8, 1588.0], [91.9, 1597.0], [92.0, 1605.0], [92.1, 1612.0], [92.2, 1615.0], [92.3, 1621.0], [92.4, 1629.0], [92.5, 1638.0], [92.6, 1643.0], [92.7, 1650.0], [92.8, 1658.0], [92.9, 1668.0], [93.0, 1673.0], [93.1, 1679.0], [93.2, 1686.0], [93.3, 1689.0], [93.4, 1693.0], [93.5, 1697.0], [93.6, 1701.0], [93.7, 1710.0], [93.8, 1719.0], [93.9, 1732.0], [94.0, 1738.0], [94.1, 1758.0], [94.2, 1769.0], [94.3, 1784.0], [94.4, 1806.0], [94.5, 1824.0], [94.6, 1834.0], [94.7, 1845.0], [94.8, 1855.0], [94.9, 1866.0], [95.0, 1875.0], [95.1, 1891.0], [95.2, 1898.0], [95.3, 1905.0], [95.4, 1912.0], [95.5, 1916.0], [95.6, 1937.0], [95.7, 1944.0], [95.8, 1954.0], [95.9, 1966.0], [96.0, 1975.0], [96.1, 1987.0], [96.2, 1994.0], [96.3, 2003.0], [96.4, 2026.0], [96.5, 2050.0], [96.6, 2056.0], [96.7, 2088.0], [96.8, 2126.0], [96.9, 2157.0], [97.0, 2179.0], [97.1, 2187.0], [97.2, 2206.0], [97.3, 2223.0], [97.4, 2235.0], [97.5, 2260.0], [97.6, 2288.0], [97.7, 2299.0], [97.8, 2322.0], [97.9, 2350.0], [98.0, 2385.0], [98.1, 2419.0], [98.2, 2478.0], [98.3, 2497.0], [98.4, 2541.0], [98.5, 2572.0], [98.6, 2602.0], [98.7, 2630.0], [98.8, 2735.0], [98.9, 2820.0], [99.0, 2900.0], [99.1, 2990.0], [99.2, 3122.0], [99.3, 3200.0], [99.4, 3277.0], [99.5, 3366.0], [99.6, 3485.0], [99.7, 3963.0], [99.8, 4128.0], [99.9, 4585.0], [100.0, 5265.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1165.0, "series": [{"data": [[0.0, 72.0], [600.0, 347.0], [700.0, 255.0], [800.0, 297.0], [900.0, 202.0], [1000.0, 211.0], [1100.0, 172.0], [1200.0, 142.0], [1300.0, 158.0], [1400.0, 130.0], [1500.0, 66.0], [100.0, 1165.0], [1600.0, 88.0], [1700.0, 41.0], [1800.0, 45.0], [1900.0, 54.0], [2000.0, 27.0], [2100.0, 22.0], [2300.0, 19.0], [2200.0, 29.0], [2400.0, 13.0], [2500.0, 14.0], [2600.0, 9.0], [2700.0, 8.0], [2800.0, 5.0], [2900.0, 8.0], [3000.0, 1.0], [3100.0, 7.0], [200.0, 586.0], [3200.0, 7.0], [3300.0, 6.0], [3400.0, 4.0], [3500.0, 1.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4100.0, 5.0], [4300.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [300.0, 354.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 2.0], [5200.0, 1.0], [400.0, 342.0], [500.0, 346.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 493.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2523.0, "series": [{"data": [[0.0, 2523.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2256.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 493.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.863354037267081, "minX": 1.60224576E12, "maxY": 12.0, "series": [{"data": [[1.60224594E12, 12.0], [1.60224576E12, 11.924385633270322], [1.60224582E12, 12.0], [1.602246E12, 12.0], [1.60224606E12, 11.863354037267081], [1.60224588E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224606E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 693.7565714285739, "minX": 1.0, "maxY": 4585.0, "series": [{"data": [[8.0, 2492.0], [4.0, 4128.0], [2.0, 4054.0], [1.0, 4445.0], [9.0, 2743.5], [5.0, 1465.3333333333333], [10.0, 1252.6666666666665], [11.0, 1454.75], [6.0, 1692.0], [12.0, 693.7565714285739], [3.0, 4585.0], [7.0, 4153.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979893778452206, 700.5134673748112]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4249.466666666666, "minX": 1.60224576E12, "maxY": 1083148.1, "series": [{"data": [[1.60224594E12, 583345.45], [1.60224576E12, 290223.7], [1.60224582E12, 981337.8], [1.602246E12, 1083148.1], [1.60224606E12, 495142.7166666667], [1.60224588E12, 858480.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224594E12, 10879.633333333333], [1.60224576E12, 4580.333333333333], [1.60224582E12, 6892.183333333333], [1.602246E12, 8873.666666666666], [1.60224606E12, 4249.466666666666], [1.60224588E12, 10104.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224606E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 579.2051696284329, "minX": 1.60224576E12, "maxY": 949.3892339544509, "series": [{"data": [[1.60224594E12, 579.2051696284329], [1.60224576E12, 687.5387523629493], [1.60224582E12, 900.0441361916762], [1.602246E12, 701.7621832358681], [1.60224606E12, 949.3892339544509], [1.60224588E12, 598.5411471321702]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224606E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 578.9870759289165, "minX": 1.60224576E12, "maxY": 948.9668737060049, "series": [{"data": [[1.60224594E12, 578.9870759289165], [1.60224576E12, 687.2325141776946], [1.60224582E12, 899.4451450189154], [1.602246E12, 701.288499025341], [1.60224606E12, 948.9668737060049], [1.60224588E12, 598.2219451371587]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224606E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011637572734829604, "minX": 1.60224576E12, "maxY": 0.2495274102079395, "series": [{"data": [[1.60224594E12, 0.012116316639741524], [1.60224576E12, 0.2495274102079395], [1.60224582E12, 0.018915510718789424], [1.602246E12, 0.011695906432748544], [1.60224606E12, 0.031055900621117998], [1.60224588E12, 0.011637572734829604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224606E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.60224576E12, "maxY": 5265.0, "series": [{"data": [[1.60224594E12, 2855.0], [1.60224576E12, 2003.0], [1.60224582E12, 3318.0], [1.602246E12, 3381.0], [1.60224606E12, 5265.0], [1.60224588E12, 4935.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224594E12, 72.15099970459939], [1.60224576E12, 137.0], [1.60224582E12, 119.14599981069564], [1.602246E12, 44.24299975514412], [1.60224606E12, 130.3559998846054], [1.60224588E12, 131.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224594E12, 73.26610011816025], [1.60224576E12, 137.0], [1.60224582E12, 119.86060007572173], [1.602246E12, 45.0], [1.60224606E12, 130.79160004615784], [1.60224588E12, 131.9196001148224]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224594E12, 72.7704998522997], [1.60224576E12, 137.0], [1.60224582E12, 119.54299990534783], [1.602246E12, 44.75649987757206], [1.60224606E12, 130.5979999423027], [1.60224588E12, 131.437999856472]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224594E12, 34.0], [1.60224576E12, 56.0], [1.60224582E12, 99.0], [1.602246E12, 36.0], [1.60224606E12, 128.0], [1.60224588E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224594E12, 457.0], [1.60224576E12, 624.0], [1.60224582E12, 789.0], [1.602246E12, 578.5], [1.60224606E12, 747.0], [1.60224588E12, 347.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224606E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 141.0, "minX": 1.0, "maxY": 4445.0, "series": [{"data": [[2.0, 2095.5], [3.0, 3170.5], [4.0, 2376.0], [5.0, 1891.0], [6.0, 1524.0], [7.0, 1296.5], [8.0, 1455.5], [9.0, 1151.0], [10.0, 1144.5], [11.0, 1042.0], [12.0, 986.0], [13.0, 993.0], [14.0, 832.0], [15.0, 754.0], [16.0, 736.0], [17.0, 730.0], [18.0, 558.0], [19.0, 447.0], [20.0, 538.0], [21.0, 606.0], [22.0, 512.0], [23.0, 541.0], [24.0, 298.0], [25.0, 622.0], [26.0, 366.0], [27.0, 338.0], [28.0, 415.5], [29.0, 382.5], [30.0, 464.0], [31.0, 183.0], [33.0, 271.5], [32.0, 335.5], [34.0, 236.5], [35.0, 361.0], [37.0, 374.0], [36.0, 439.0], [39.0, 226.5], [38.0, 169.5], [40.0, 236.0], [41.0, 256.0], [43.0, 253.0], [42.0, 211.0], [44.0, 269.5], [47.0, 251.5], [46.0, 237.5], [49.0, 235.0], [50.0, 259.5], [52.0, 155.0], [59.0, 141.0], [73.0, 158.0], [1.0, 4445.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 141.0, "minX": 1.0, "maxY": 4445.0, "series": [{"data": [[2.0, 2095.0], [3.0, 3165.5], [4.0, 2375.0], [5.0, 1891.0], [6.0, 1522.0], [7.0, 1295.5], [8.0, 1455.0], [9.0, 1150.5], [10.0, 1144.5], [11.0, 1042.0], [12.0, 985.5], [13.0, 993.0], [14.0, 832.0], [15.0, 754.0], [16.0, 735.5], [17.0, 730.0], [18.0, 558.0], [19.0, 445.5], [20.0, 537.5], [21.0, 606.0], [22.0, 512.0], [23.0, 540.0], [24.0, 298.0], [25.0, 622.0], [26.0, 365.5], [27.0, 338.0], [28.0, 415.5], [29.0, 382.5], [30.0, 464.0], [31.0, 183.0], [33.0, 271.5], [32.0, 335.5], [34.0, 236.5], [35.0, 361.0], [37.0, 374.0], [36.0, 439.0], [39.0, 225.0], [38.0, 169.5], [40.0, 236.0], [41.0, 256.0], [43.0, 253.0], [42.0, 210.5], [44.0, 269.5], [47.0, 251.5], [46.0, 237.5], [49.0, 234.5], [50.0, 259.5], [52.0, 155.0], [59.0, 141.0], [73.0, 158.0], [1.0, 4445.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.85, "minX": 1.60224576E12, "maxY": 20.633333333333333, "series": [{"data": [[1.60224594E12, 20.633333333333333], [1.60224576E12, 9.016666666666667], [1.60224582E12, 13.216666666666667], [1.602246E12, 17.1], [1.60224606E12, 7.85], [1.60224588E12, 20.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224606E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.05, "minX": 1.60224576E12, "maxY": 20.633333333333333, "series": [{"data": [[1.60224594E12, 20.633333333333333], [1.60224576E12, 8.816666666666666], [1.60224582E12, 13.216666666666667], [1.602246E12, 17.1], [1.60224606E12, 8.05], [1.60224588E12, 20.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224606E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.05, "minX": 1.60224576E12, "maxY": 20.633333333333333, "series": [{"data": [[1.60224594E12, 20.633333333333333], [1.60224576E12, 8.816666666666666], [1.60224582E12, 13.216666666666667], [1.602246E12, 17.1], [1.60224606E12, 8.05], [1.60224588E12, 20.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224606E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.05, "minX": 1.60224576E12, "maxY": 20.633333333333333, "series": [{"data": [[1.60224594E12, 20.633333333333333], [1.60224576E12, 8.816666666666666], [1.60224582E12, 13.216666666666667], [1.602246E12, 17.1], [1.60224606E12, 8.05], [1.60224588E12, 20.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224606E12, "title": "Total Transactions Per Second"}},
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

