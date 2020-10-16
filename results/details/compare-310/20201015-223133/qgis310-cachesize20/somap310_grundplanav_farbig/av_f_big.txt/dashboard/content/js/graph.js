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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 3604.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 180.0], [0.3, 192.0], [0.4, 192.0], [0.5, 198.0], [0.6, 209.0], [0.7, 209.0], [0.8, 209.0], [0.9, 214.0], [1.0, 221.0], [1.1, 229.0], [1.2, 229.0], [1.3, 231.0], [1.4, 231.0], [1.5, 234.0], [1.6, 234.0], [1.7, 237.0], [1.8, 238.0], [1.9, 238.0], [2.0, 238.0], [2.1, 240.0], [2.2, 241.0], [2.3, 241.0], [2.4, 242.0], [2.5, 245.0], [2.6, 247.0], [2.7, 247.0], [2.8, 248.0], [2.9, 252.0], [3.0, 253.0], [3.1, 253.0], [3.2, 257.0], [3.3, 258.0], [3.4, 258.0], [3.5, 261.0], [3.6, 266.0], [3.7, 266.0], [3.8, 266.0], [3.9, 271.0], [4.0, 274.0], [4.1, 275.0], [4.2, 275.0], [4.3, 275.0], [4.4, 277.0], [4.5, 280.0], [4.6, 280.0], [4.7, 280.0], [4.8, 281.0], [4.9, 283.0], [5.0, 283.0], [5.1, 283.0], [5.2, 286.0], [5.3, 286.0], [5.4, 291.0], [5.5, 292.0], [5.6, 295.0], [5.7, 295.0], [5.8, 296.0], [5.9, 296.0], [6.0, 298.0], [6.1, 298.0], [6.2, 298.0], [6.3, 301.0], [6.4, 301.0], [6.5, 301.0], [6.6, 304.0], [6.7, 304.0], [6.8, 304.0], [6.9, 305.0], [7.0, 308.0], [7.1, 308.0], [7.2, 308.0], [7.3, 313.0], [7.4, 318.0], [7.5, 319.0], [7.6, 319.0], [7.7, 320.0], [7.8, 321.0], [7.9, 327.0], [8.0, 327.0], [8.1, 327.0], [8.2, 329.0], [8.3, 334.0], [8.4, 334.0], [8.5, 334.0], [8.6, 335.0], [8.7, 335.0], [8.8, 335.0], [8.9, 340.0], [9.0, 342.0], [9.1, 342.0], [9.2, 343.0], [9.3, 343.0], [9.4, 345.0], [9.5, 345.0], [9.6, 346.0], [9.7, 346.0], [9.8, 349.0], [9.9, 349.0], [10.0, 350.0], [10.1, 351.0], [10.2, 351.0], [10.3, 354.0], [10.4, 354.0], [10.5, 355.0], [10.6, 355.0], [10.7, 356.0], [10.8, 358.0], [10.9, 359.0], [11.0, 359.0], [11.1, 362.0], [11.2, 363.0], [11.3, 365.0], [11.4, 365.0], [11.5, 365.0], [11.6, 366.0], [11.7, 366.0], [11.8, 368.0], [11.9, 368.0], [12.0, 369.0], [12.1, 369.0], [12.2, 370.0], [12.3, 372.0], [12.4, 372.0], [12.5, 372.0], [12.6, 375.0], [12.7, 376.0], [12.8, 376.0], [12.9, 376.0], [13.0, 376.0], [13.1, 380.0], [13.2, 382.0], [13.3, 382.0], [13.4, 383.0], [13.5, 385.0], [13.6, 385.0], [13.7, 385.0], [13.8, 386.0], [13.9, 387.0], [14.0, 387.0], [14.1, 388.0], [14.2, 390.0], [14.3, 390.0], [14.4, 390.0], [14.5, 392.0], [14.6, 392.0], [14.7, 393.0], [14.8, 393.0], [14.9, 393.0], [15.0, 393.0], [15.1, 393.0], [15.2, 394.0], [15.3, 395.0], [15.4, 396.0], [15.5, 396.0], [15.6, 396.0], [15.7, 398.0], [15.8, 399.0], [15.9, 399.0], [16.0, 402.0], [16.1, 403.0], [16.2, 404.0], [16.3, 404.0], [16.4, 404.0], [16.5, 405.0], [16.6, 407.0], [16.7, 407.0], [16.8, 407.0], [16.9, 414.0], [17.0, 414.0], [17.1, 417.0], [17.2, 417.0], [17.3, 419.0], [17.4, 419.0], [17.5, 420.0], [17.6, 427.0], [17.7, 431.0], [17.8, 431.0], [17.9, 431.0], [18.0, 433.0], [18.1, 435.0], [18.2, 435.0], [18.3, 436.0], [18.4, 437.0], [18.5, 437.0], [18.6, 438.0], [18.7, 439.0], [18.8, 441.0], [18.9, 441.0], [19.0, 442.0], [19.1, 442.0], [19.2, 443.0], [19.3, 443.0], [19.4, 447.0], [19.5, 448.0], [19.6, 449.0], [19.7, 449.0], [19.8, 451.0], [19.9, 455.0], [20.0, 456.0], [20.1, 456.0], [20.2, 456.0], [20.3, 458.0], [20.4, 458.0], [20.5, 459.0], [20.6, 463.0], [20.7, 465.0], [20.8, 465.0], [20.9, 465.0], [21.0, 465.0], [21.1, 467.0], [21.2, 467.0], [21.3, 467.0], [21.4, 471.0], [21.5, 473.0], [21.6, 473.0], [21.7, 475.0], [21.8, 477.0], [21.9, 477.0], [22.0, 478.0], [22.1, 481.0], [22.2, 482.0], [22.3, 482.0], [22.4, 485.0], [22.5, 487.0], [22.6, 489.0], [22.7, 489.0], [22.8, 495.0], [22.9, 496.0], [23.0, 497.0], [23.1, 497.0], [23.2, 498.0], [23.3, 498.0], [23.4, 498.0], [23.5, 498.0], [23.6, 499.0], [23.7, 499.0], [23.8, 499.0], [23.9, 501.0], [24.0, 505.0], [24.1, 506.0], [24.2, 506.0], [24.3, 508.0], [24.4, 508.0], [24.5, 509.0], [24.6, 509.0], [24.7, 510.0], [24.8, 514.0], [24.9, 517.0], [25.0, 517.0], [25.1, 520.0], [25.2, 523.0], [25.3, 523.0], [25.4, 526.0], [25.5, 528.0], [25.6, 529.0], [25.7, 529.0], [25.8, 531.0], [25.9, 532.0], [26.0, 534.0], [26.1, 534.0], [26.2, 535.0], [26.3, 536.0], [26.4, 537.0], [26.5, 537.0], [26.6, 538.0], [26.7, 540.0], [26.8, 540.0], [26.9, 540.0], [27.0, 542.0], [27.1, 542.0], [27.2, 542.0], [27.3, 543.0], [27.4, 543.0], [27.5, 544.0], [27.6, 544.0], [27.7, 544.0], [27.8, 545.0], [27.9, 545.0], [28.0, 545.0], [28.1, 547.0], [28.2, 547.0], [28.3, 548.0], [28.4, 548.0], [28.5, 548.0], [28.6, 549.0], [28.7, 549.0], [28.8, 550.0], [28.9, 558.0], [29.0, 560.0], [29.1, 560.0], [29.2, 561.0], [29.3, 561.0], [29.4, 563.0], [29.5, 563.0], [29.6, 564.0], [29.7, 565.0], [29.8, 566.0], [29.9, 566.0], [30.0, 567.0], [30.1, 570.0], [30.2, 570.0], [30.3, 570.0], [30.4, 571.0], [30.5, 572.0], [30.6, 572.0], [30.7, 573.0], [30.8, 573.0], [30.9, 575.0], [31.0, 575.0], [31.1, 578.0], [31.2, 578.0], [31.3, 578.0], [31.4, 578.0], [31.5, 578.0], [31.6, 578.0], [31.7, 578.0], [31.8, 578.0], [31.9, 580.0], [32.0, 581.0], [32.1, 581.0], [32.2, 581.0], [32.3, 581.0], [32.4, 583.0], [32.5, 583.0], [32.6, 585.0], [32.7, 588.0], [32.8, 592.0], [32.9, 592.0], [33.0, 593.0], [33.1, 595.0], [33.2, 595.0], [33.3, 595.0], [33.4, 597.0], [33.5, 598.0], [33.6, 598.0], [33.7, 599.0], [33.8, 600.0], [33.9, 602.0], [34.0, 602.0], [34.1, 605.0], [34.2, 605.0], [34.3, 607.0], [34.4, 607.0], [34.5, 608.0], [34.6, 610.0], [34.7, 610.0], [34.8, 610.0], [34.9, 610.0], [35.0, 611.0], [35.1, 611.0], [35.2, 614.0], [35.3, 615.0], [35.4, 618.0], [35.5, 618.0], [35.6, 619.0], [35.7, 620.0], [35.8, 621.0], [35.9, 621.0], [36.0, 622.0], [36.1, 623.0], [36.2, 623.0], [36.3, 623.0], [36.4, 624.0], [36.5, 626.0], [36.6, 626.0], [36.7, 626.0], [36.8, 626.0], [36.9, 627.0], [37.0, 627.0], [37.1, 628.0], [37.2, 629.0], [37.3, 631.0], [37.4, 631.0], [37.5, 632.0], [37.6, 632.0], [37.7, 635.0], [37.8, 635.0], [37.9, 636.0], [38.0, 637.0], [38.1, 642.0], [38.2, 642.0], [38.3, 643.0], [38.4, 645.0], [38.5, 645.0], [38.6, 647.0], [38.7, 647.0], [38.8, 648.0], [38.9, 648.0], [39.0, 648.0], [39.1, 650.0], [39.2, 652.0], [39.3, 652.0], [39.4, 652.0], [39.5, 653.0], [39.6, 654.0], [39.7, 654.0], [39.8, 655.0], [39.9, 656.0], [40.0, 657.0], [40.1, 657.0], [40.2, 657.0], [40.3, 657.0], [40.4, 657.0], [40.5, 658.0], [40.6, 661.0], [40.7, 664.0], [40.8, 664.0], [40.9, 666.0], [41.0, 666.0], [41.1, 670.0], [41.2, 670.0], [41.3, 670.0], [41.4, 671.0], [41.5, 676.0], [41.6, 676.0], [41.7, 678.0], [41.8, 680.0], [41.9, 680.0], [42.0, 681.0], [42.1, 684.0], [42.2, 686.0], [42.3, 686.0], [42.4, 690.0], [42.5, 690.0], [42.6, 691.0], [42.7, 691.0], [42.8, 692.0], [42.9, 694.0], [43.0, 695.0], [43.1, 695.0], [43.2, 698.0], [43.3, 698.0], [43.4, 698.0], [43.5, 701.0], [43.6, 701.0], [43.7, 703.0], [43.8, 703.0], [43.9, 704.0], [44.0, 705.0], [44.1, 709.0], [44.2, 709.0], [44.3, 711.0], [44.4, 712.0], [44.5, 712.0], [44.6, 712.0], [44.7, 713.0], [44.8, 714.0], [44.9, 715.0], [45.0, 715.0], [45.1, 715.0], [45.2, 717.0], [45.3, 717.0], [45.4, 725.0], [45.5, 726.0], [45.6, 731.0], [45.7, 731.0], [45.8, 737.0], [45.9, 738.0], [46.0, 740.0], [46.1, 740.0], [46.2, 741.0], [46.3, 742.0], [46.4, 743.0], [46.5, 743.0], [46.6, 744.0], [46.7, 745.0], [46.8, 745.0], [46.9, 751.0], [47.0, 752.0], [47.1, 753.0], [47.2, 753.0], [47.3, 755.0], [47.4, 755.0], [47.5, 756.0], [47.6, 756.0], [47.7, 759.0], [47.8, 759.0], [47.9, 759.0], [48.0, 759.0], [48.1, 759.0], [48.2, 763.0], [48.3, 765.0], [48.4, 765.0], [48.5, 767.0], [48.6, 771.0], [48.7, 771.0], [48.8, 772.0], [48.9, 773.0], [49.0, 774.0], [49.1, 774.0], [49.2, 775.0], [49.3, 779.0], [49.4, 780.0], [49.5, 780.0], [49.6, 782.0], [49.7, 784.0], [49.8, 785.0], [49.9, 785.0], [50.0, 787.0], [50.1, 787.0], [50.2, 787.0], [50.3, 788.0], [50.4, 790.0], [50.5, 791.0], [50.6, 791.0], [50.7, 798.0], [50.8, 804.0], [50.9, 805.0], [51.0, 805.0], [51.1, 809.0], [51.2, 809.0], [51.3, 813.0], [51.4, 813.0], [51.5, 814.0], [51.6, 816.0], [51.7, 816.0], [51.8, 816.0], [51.9, 819.0], [52.0, 822.0], [52.1, 822.0], [52.2, 823.0], [52.3, 823.0], [52.4, 825.0], [52.5, 825.0], [52.6, 825.0], [52.7, 826.0], [52.8, 828.0], [52.9, 828.0], [53.0, 829.0], [53.1, 835.0], [53.2, 838.0], [53.3, 838.0], [53.4, 840.0], [53.5, 841.0], [53.6, 841.0], [53.7, 841.0], [53.8, 843.0], [53.9, 846.0], [54.0, 846.0], [54.1, 847.0], [54.2, 848.0], [54.3, 848.0], [54.4, 848.0], [54.5, 848.0], [54.6, 848.0], [54.7, 850.0], [54.8, 850.0], [54.9, 855.0], [55.0, 856.0], [55.1, 856.0], [55.2, 862.0], [55.3, 862.0], [55.4, 863.0], [55.5, 863.0], [55.6, 863.0], [55.7, 864.0], [55.8, 866.0], [55.9, 866.0], [56.0, 867.0], [56.1, 869.0], [56.2, 869.0], [56.3, 869.0], [56.4, 872.0], [56.5, 872.0], [56.6, 874.0], [56.7, 874.0], [56.8, 878.0], [56.9, 879.0], [57.0, 879.0], [57.1, 880.0], [57.2, 883.0], [57.3, 884.0], [57.4, 884.0], [57.5, 885.0], [57.6, 886.0], [57.7, 886.0], [57.8, 886.0], [57.9, 886.0], [58.0, 888.0], [58.1, 889.0], [58.2, 889.0], [58.3, 890.0], [58.4, 891.0], [58.5, 891.0], [58.6, 893.0], [58.7, 897.0], [58.8, 897.0], [58.9, 897.0], [59.0, 900.0], [59.1, 900.0], [59.2, 900.0], [59.3, 900.0], [59.4, 902.0], [59.5, 903.0], [59.6, 905.0], [59.7, 905.0], [59.8, 907.0], [59.9, 909.0], [60.0, 911.0], [60.1, 911.0], [60.2, 913.0], [60.3, 915.0], [60.4, 915.0], [60.5, 916.0], [60.6, 917.0], [60.7, 923.0], [60.8, 923.0], [60.9, 923.0], [61.0, 923.0], [61.1, 923.0], [61.2, 923.0], [61.3, 924.0], [61.4, 926.0], [61.5, 927.0], [61.6, 927.0], [61.7, 927.0], [61.8, 929.0], [61.9, 929.0], [62.0, 930.0], [62.1, 931.0], [62.2, 934.0], [62.3, 934.0], [62.4, 936.0], [62.5, 938.0], [62.6, 939.0], [62.7, 939.0], [62.8, 939.0], [62.9, 941.0], [63.0, 947.0], [63.1, 947.0], [63.2, 949.0], [63.3, 951.0], [63.4, 951.0], [63.5, 951.0], [63.6, 952.0], [63.7, 953.0], [63.8, 953.0], [63.9, 957.0], [64.0, 957.0], [64.1, 958.0], [64.2, 958.0], [64.3, 959.0], [64.4, 960.0], [64.5, 963.0], [64.6, 963.0], [64.7, 964.0], [64.8, 965.0], [64.9, 966.0], [65.0, 966.0], [65.1, 966.0], [65.2, 967.0], [65.3, 967.0], [65.4, 967.0], [65.5, 968.0], [65.6, 968.0], [65.7, 968.0], [65.8, 969.0], [65.9, 969.0], [66.0, 970.0], [66.1, 970.0], [66.2, 970.0], [66.3, 972.0], [66.4, 972.0], [66.5, 972.0], [66.6, 973.0], [66.7, 974.0], [66.8, 974.0], [66.9, 977.0], [67.0, 978.0], [67.1, 983.0], [67.2, 983.0], [67.3, 987.0], [67.4, 987.0], [67.5, 988.0], [67.6, 988.0], [67.7, 988.0], [67.8, 990.0], [67.9, 990.0], [68.0, 990.0], [68.1, 990.0], [68.2, 991.0], [68.3, 992.0], [68.4, 992.0], [68.5, 992.0], [68.6, 992.0], [68.7, 992.0], [68.8, 995.0], [68.9, 997.0], [69.0, 998.0], [69.1, 998.0], [69.2, 999.0], [69.3, 1003.0], [69.4, 1003.0], [69.5, 1003.0], [69.6, 1003.0], [69.7, 1006.0], [69.8, 1010.0], [69.9, 1010.0], [70.0, 1015.0], [70.1, 1017.0], [70.2, 1017.0], [70.3, 1018.0], [70.4, 1020.0], [70.5, 1021.0], [70.6, 1021.0], [70.7, 1023.0], [70.8, 1023.0], [70.9, 1024.0], [71.0, 1024.0], [71.1, 1024.0], [71.2, 1026.0], [71.3, 1028.0], [71.4, 1028.0], [71.5, 1030.0], [71.6, 1033.0], [71.7, 1033.0], [71.8, 1034.0], [71.9, 1037.0], [72.0, 1037.0], [72.1, 1037.0], [72.2, 1037.0], [72.3, 1042.0], [72.4, 1043.0], [72.5, 1043.0], [72.6, 1044.0], [72.7, 1046.0], [72.8, 1047.0], [72.9, 1047.0], [73.0, 1049.0], [73.1, 1052.0], [73.2, 1054.0], [73.3, 1054.0], [73.4, 1054.0], [73.5, 1057.0], [73.6, 1057.0], [73.7, 1058.0], [73.8, 1059.0], [73.9, 1062.0], [74.0, 1062.0], [74.1, 1063.0], [74.2, 1063.0], [74.3, 1063.0], [74.4, 1063.0], [74.5, 1067.0], [74.6, 1068.0], [74.7, 1069.0], [74.8, 1069.0], [74.9, 1074.0], [75.0, 1074.0], [75.1, 1074.0], [75.2, 1075.0], [75.3, 1076.0], [75.4, 1078.0], [75.5, 1078.0], [75.6, 1078.0], [75.7, 1079.0], [75.8, 1079.0], [75.9, 1079.0], [76.0, 1081.0], [76.1, 1083.0], [76.2, 1083.0], [76.3, 1083.0], [76.4, 1084.0], [76.5, 1085.0], [76.6, 1087.0], [76.7, 1087.0], [76.8, 1091.0], [76.9, 1091.0], [77.0, 1091.0], [77.1, 1093.0], [77.2, 1094.0], [77.3, 1098.0], [77.4, 1098.0], [77.5, 1102.0], [77.6, 1103.0], [77.7, 1105.0], [77.8, 1105.0], [77.9, 1111.0], [78.0, 1115.0], [78.1, 1116.0], [78.2, 1116.0], [78.3, 1117.0], [78.4, 1120.0], [78.5, 1120.0], [78.6, 1122.0], [78.7, 1123.0], [78.8, 1126.0], [78.9, 1126.0], [79.0, 1126.0], [79.1, 1132.0], [79.2, 1132.0], [79.3, 1132.0], [79.4, 1132.0], [79.5, 1132.0], [79.6, 1135.0], [79.7, 1135.0], [79.8, 1136.0], [79.9, 1136.0], [80.0, 1137.0], [80.1, 1137.0], [80.2, 1139.0], [80.3, 1139.0], [80.4, 1139.0], [80.5, 1141.0], [80.6, 1143.0], [80.7, 1150.0], [80.8, 1150.0], [80.9, 1152.0], [81.0, 1153.0], [81.1, 1158.0], [81.2, 1158.0], [81.3, 1160.0], [81.4, 1161.0], [81.5, 1163.0], [81.6, 1163.0], [81.7, 1165.0], [81.8, 1166.0], [81.9, 1166.0], [82.0, 1166.0], [82.1, 1168.0], [82.2, 1169.0], [82.3, 1169.0], [82.4, 1171.0], [82.5, 1176.0], [82.6, 1177.0], [82.7, 1177.0], [82.8, 1177.0], [82.9, 1180.0], [83.0, 1182.0], [83.1, 1182.0], [83.2, 1182.0], [83.3, 1184.0], [83.4, 1184.0], [83.5, 1184.0], [83.6, 1185.0], [83.7, 1187.0], [83.8, 1187.0], [83.9, 1190.0], [84.0, 1198.0], [84.1, 1199.0], [84.2, 1199.0], [84.3, 1199.0], [84.4, 1201.0], [84.5, 1202.0], [84.6, 1202.0], [84.7, 1204.0], [84.8, 1206.0], [84.9, 1206.0], [85.0, 1206.0], [85.1, 1209.0], [85.2, 1222.0], [85.3, 1222.0], [85.4, 1223.0], [85.5, 1226.0], [85.6, 1227.0], [85.7, 1227.0], [85.8, 1229.0], [85.9, 1233.0], [86.0, 1236.0], [86.1, 1236.0], [86.2, 1239.0], [86.3, 1241.0], [86.4, 1245.0], [86.5, 1245.0], [86.6, 1246.0], [86.7, 1246.0], [86.8, 1246.0], [86.9, 1247.0], [87.0, 1255.0], [87.1, 1256.0], [87.2, 1256.0], [87.3, 1268.0], [87.4, 1268.0], [87.5, 1270.0], [87.6, 1270.0], [87.7, 1277.0], [87.8, 1281.0], [87.9, 1283.0], [88.0, 1283.0], [88.1, 1283.0], [88.2, 1288.0], [88.3, 1292.0], [88.4, 1292.0], [88.5, 1294.0], [88.6, 1297.0], [88.7, 1297.0], [88.8, 1298.0], [88.9, 1302.0], [89.0, 1316.0], [89.1, 1316.0], [89.2, 1317.0], [89.3, 1319.0], [89.4, 1328.0], [89.5, 1328.0], [89.6, 1331.0], [89.7, 1336.0], [89.8, 1337.0], [89.9, 1337.0], [90.0, 1338.0], [90.1, 1340.0], [90.2, 1340.0], [90.3, 1340.0], [90.4, 1341.0], [90.5, 1343.0], [90.6, 1343.0], [90.7, 1344.0], [90.8, 1346.0], [90.9, 1347.0], [91.0, 1347.0], [91.1, 1347.0], [91.2, 1358.0], [91.3, 1361.0], [91.4, 1361.0], [91.5, 1365.0], [91.6, 1369.0], [91.7, 1369.0], [91.8, 1380.0], [91.9, 1382.0], [92.0, 1384.0], [92.1, 1384.0], [92.2, 1387.0], [92.3, 1395.0], [92.4, 1406.0], [92.5, 1406.0], [92.6, 1407.0], [92.7, 1413.0], [92.8, 1432.0], [92.9, 1432.0], [93.0, 1449.0], [93.1, 1451.0], [93.2, 1455.0], [93.3, 1455.0], [93.4, 1462.0], [93.5, 1471.0], [93.6, 1471.0], [93.7, 1475.0], [93.8, 1479.0], [93.9, 1484.0], [94.0, 1484.0], [94.1, 1484.0], [94.2, 1512.0], [94.3, 1526.0], [94.4, 1526.0], [94.5, 1533.0], [94.6, 1533.0], [94.7, 1545.0], [94.8, 1545.0], [94.9, 1548.0], [95.0, 1557.0], [95.1, 1557.0], [95.2, 1561.0], [95.3, 1564.0], [95.4, 1572.0], [95.5, 1572.0], [95.6, 1607.0], [95.7, 1622.0], [95.8, 1641.0], [95.9, 1641.0], [96.0, 1646.0], [96.1, 1647.0], [96.2, 1649.0], [96.3, 1649.0], [96.4, 1673.0], [96.5, 1678.0], [96.6, 1703.0], [96.7, 1703.0], [96.8, 1709.0], [96.9, 1758.0], [97.0, 1758.0], [97.1, 1758.0], [97.2, 1831.0], [97.3, 1834.0], [97.4, 1834.0], [97.5, 1853.0], [97.6, 1891.0], [97.7, 2030.0], [97.8, 2030.0], [97.9, 2186.0], [98.0, 2186.0], [98.1, 2193.0], [98.2, 2193.0], [98.3, 2604.0], [98.4, 2728.0], [98.5, 2728.0], [98.6, 2839.0], [98.7, 2921.0], [98.8, 2954.0], [98.9, 2954.0], [99.0, 3142.0], [99.1, 3181.0], [99.2, 3186.0], [99.3, 3186.0], [99.4, 3193.0], [99.5, 3193.0], [99.6, 3231.0], [99.7, 3231.0], [99.8, 3421.0], [99.9, 3604.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 76.0, "series": [{"data": [[600.0, 71.0], [700.0, 54.0], [800.0, 60.0], [900.0, 76.0], [1000.0, 60.0], [1100.0, 51.0], [1200.0, 33.0], [1300.0, 26.0], [1400.0, 13.0], [1500.0, 10.0], [100.0, 4.0], [1600.0, 8.0], [1700.0, 4.0], [1800.0, 4.0], [2000.0, 1.0], [2100.0, 3.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3100.0, 5.0], [3200.0, 1.0], [200.0, 42.0], [3400.0, 1.0], [3600.0, 1.0], [300.0, 71.0], [400.0, 58.0], [500.0, 73.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 517.0, "series": [{"data": [[0.0, 175.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 517.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925986842105262, "minX": 1.6028034E12, "maxY": 10.0, "series": [{"data": [[1.60280346E12, 9.925986842105262], [1.6028034E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280346E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 550.0, "minX": 1.0, "maxY": 2186.0, "series": [{"data": [[8.0, 550.0], [4.0, 563.0], [2.0, 642.0], [1.0, 938.0], [9.0, 658.0], [10.0, 846.4641873278242], [5.0, 581.0], [6.0, 598.0], [3.0, 995.0], [7.0, 2186.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 846.5904761904769]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 961.8666666666667, "minX": 1.6028034E12, "maxY": 1394732.85, "series": [{"data": [[1.60280346E12, 1394732.85], [1.6028034E12, 440988.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280346E12, 4561.166666666667], [1.6028034E12, 961.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280346E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 804.2779605263164, "minX": 1.6028034E12, "maxY": 1049.1574803149604, "series": [{"data": [[1.60280346E12, 804.2779605263164], [1.6028034E12, 1049.1574803149604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280346E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 803.0937500000002, "minX": 1.6028034E12, "maxY": 1047.653543307087, "series": [{"data": [[1.60280346E12, 803.0937500000002], [1.6028034E12, 1047.653543307087]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280346E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.014802631578947368, "minX": 1.6028034E12, "maxY": 0.8031496062992128, "series": [{"data": [[1.60280346E12, 0.014802631578947368], [1.6028034E12, 0.8031496062992128]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280346E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.6028034E12, "maxY": 3604.0, "series": [{"data": [[1.60280346E12, 3181.0], [1.6028034E12, 3604.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280346E12, 217.3669989836216], [1.6028034E12, 177.45599990844727]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280346E12, 221.29100058078765], [1.6028034E12, 177.8016000366211]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280346E12, 219.4984994918108], [1.6028034E12, 177.64799995422362]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280346E12, 192.0], [1.6028034E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280346E12, 774.5], [1.6028034E12, 819.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280346E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 461.0, "minX": 1.0, "maxY": 1833.0, "series": [{"data": [[8.0, 916.5], [9.0, 927.0], [10.0, 1050.0], [11.0, 883.0], [12.0, 878.0], [13.0, 809.0], [14.0, 671.0], [15.0, 679.5], [1.0, 1833.0], [16.0, 622.0], [17.0, 534.5], [18.0, 461.0], [19.0, 643.0], [7.0, 948.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 461.0, "minX": 1.0, "maxY": 1831.5, "series": [{"data": [[8.0, 915.5], [9.0, 926.0], [10.0, 1047.5], [11.0, 882.0], [12.0, 877.0], [13.0, 807.0], [14.0, 670.0], [15.0, 679.0], [1.0, 1831.5], [16.0, 621.0], [17.0, 534.5], [18.0, 461.0], [19.0, 643.0], [7.0, 946.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.6028034E12, "maxY": 9.966666666666667, "series": [{"data": [[1.60280346E12, 9.966666666666667], [1.6028034E12, 2.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280346E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.1166666666666667, "minX": 1.6028034E12, "maxY": 10.133333333333333, "series": [{"data": [[1.60280346E12, 10.133333333333333], [1.6028034E12, 2.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280346E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.1166666666666667, "minX": 1.6028034E12, "maxY": 10.133333333333333, "series": [{"data": [[1.60280346E12, 10.133333333333333], [1.6028034E12, 2.1166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280346E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.1166666666666667, "minX": 1.6028034E12, "maxY": 10.133333333333333, "series": [{"data": [[1.60280346E12, 10.133333333333333], [1.6028034E12, 2.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280346E12, "title": "Total Transactions Per Second"}},
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

