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
        data: {"result": {"minY": 227.0, "minX": 0.0, "maxY": 8558.0, "series": [{"data": [[0.0, 227.0], [0.1, 227.0], [0.2, 228.0], [0.3, 230.0], [0.4, 230.0], [0.5, 233.0], [0.6, 237.0], [0.7, 237.0], [0.8, 237.0], [0.9, 238.0], [1.0, 240.0], [1.1, 242.0], [1.2, 242.0], [1.3, 243.0], [1.4, 245.0], [1.5, 254.0], [1.6, 254.0], [1.7, 256.0], [1.8, 258.0], [1.9, 258.0], [2.0, 259.0], [2.1, 267.0], [2.2, 271.0], [2.3, 271.0], [2.4, 275.0], [2.5, 275.0], [2.6, 275.0], [2.7, 275.0], [2.8, 278.0], [2.9, 280.0], [3.0, 282.0], [3.1, 282.0], [3.2, 283.0], [3.3, 285.0], [3.4, 285.0], [3.5, 287.0], [3.6, 288.0], [3.7, 289.0], [3.8, 289.0], [3.9, 299.0], [4.0, 307.0], [4.1, 312.0], [4.2, 312.0], [4.3, 316.0], [4.4, 317.0], [4.5, 319.0], [4.6, 319.0], [4.7, 322.0], [4.8, 323.0], [4.9, 324.0], [5.0, 324.0], [5.1, 326.0], [5.2, 328.0], [5.3, 328.0], [5.4, 334.0], [5.5, 336.0], [5.6, 339.0], [5.7, 339.0], [5.8, 340.0], [5.9, 341.0], [6.0, 346.0], [6.1, 346.0], [6.2, 349.0], [6.3, 349.0], [6.4, 349.0], [6.5, 349.0], [6.6, 351.0], [6.7, 358.0], [6.8, 358.0], [6.9, 362.0], [7.0, 362.0], [7.1, 366.0], [7.2, 366.0], [7.3, 369.0], [7.4, 370.0], [7.5, 370.0], [7.6, 370.0], [7.7, 375.0], [7.8, 378.0], [7.9, 378.0], [8.0, 378.0], [8.1, 379.0], [8.2, 380.0], [8.3, 382.0], [8.4, 382.0], [8.5, 383.0], [8.6, 383.0], [8.7, 383.0], [8.8, 384.0], [8.9, 384.0], [9.0, 386.0], [9.1, 386.0], [9.2, 387.0], [9.3, 389.0], [9.4, 391.0], [9.5, 391.0], [9.6, 393.0], [9.7, 394.0], [9.8, 395.0], [9.9, 395.0], [10.0, 395.0], [10.1, 395.0], [10.2, 395.0], [10.3, 395.0], [10.4, 395.0], [10.5, 398.0], [10.6, 398.0], [10.7, 399.0], [10.8, 402.0], [10.9, 403.0], [11.0, 403.0], [11.1, 403.0], [11.2, 405.0], [11.3, 406.0], [11.4, 406.0], [11.5, 406.0], [11.6, 407.0], [11.7, 407.0], [11.8, 410.0], [11.9, 410.0], [12.0, 410.0], [12.1, 410.0], [12.2, 411.0], [12.3, 411.0], [12.4, 412.0], [12.5, 412.0], [12.6, 416.0], [12.7, 417.0], [12.8, 419.0], [12.9, 419.0], [13.0, 422.0], [13.1, 423.0], [13.2, 425.0], [13.3, 425.0], [13.4, 426.0], [13.5, 426.0], [13.6, 426.0], [13.7, 429.0], [13.8, 429.0], [13.9, 430.0], [14.0, 430.0], [14.1, 430.0], [14.2, 431.0], [14.3, 431.0], [14.4, 431.0], [14.5, 432.0], [14.6, 432.0], [14.7, 432.0], [14.8, 432.0], [14.9, 434.0], [15.0, 434.0], [15.1, 434.0], [15.2, 435.0], [15.3, 435.0], [15.4, 435.0], [15.5, 435.0], [15.6, 436.0], [15.7, 436.0], [15.8, 437.0], [15.9, 437.0], [16.0, 439.0], [16.1, 439.0], [16.2, 440.0], [16.3, 440.0], [16.4, 441.0], [16.5, 441.0], [16.6, 442.0], [16.7, 442.0], [16.8, 442.0], [16.9, 443.0], [17.0, 443.0], [17.1, 443.0], [17.2, 446.0], [17.3, 448.0], [17.4, 448.0], [17.5, 448.0], [17.6, 449.0], [17.7, 450.0], [17.8, 450.0], [17.9, 450.0], [18.0, 451.0], [18.1, 451.0], [18.2, 451.0], [18.3, 451.0], [18.4, 452.0], [18.5, 452.0], [18.6, 452.0], [18.7, 452.0], [18.8, 453.0], [18.9, 453.0], [19.0, 454.0], [19.1, 456.0], [19.2, 457.0], [19.3, 457.0], [19.4, 458.0], [19.5, 458.0], [19.6, 460.0], [19.7, 460.0], [19.8, 461.0], [19.9, 461.0], [20.0, 464.0], [20.1, 464.0], [20.2, 464.0], [20.3, 467.0], [20.4, 467.0], [20.5, 467.0], [20.6, 469.0], [20.7, 469.0], [20.8, 469.0], [20.9, 470.0], [21.0, 471.0], [21.1, 472.0], [21.2, 472.0], [21.3, 473.0], [21.4, 474.0], [21.5, 475.0], [21.6, 475.0], [21.7, 475.0], [21.8, 477.0], [21.9, 477.0], [22.0, 477.0], [22.1, 478.0], [22.2, 479.0], [22.3, 479.0], [22.4, 480.0], [22.5, 481.0], [22.6, 481.0], [22.7, 481.0], [22.8, 482.0], [22.9, 482.0], [23.0, 483.0], [23.1, 483.0], [23.2, 483.0], [23.3, 484.0], [23.4, 484.0], [23.5, 485.0], [23.6, 486.0], [23.7, 488.0], [23.8, 488.0], [23.9, 489.0], [24.0, 489.0], [24.1, 490.0], [24.2, 490.0], [24.3, 491.0], [24.4, 491.0], [24.5, 491.0], [24.6, 491.0], [24.7, 492.0], [24.8, 492.0], [24.9, 493.0], [25.0, 493.0], [25.1, 493.0], [25.2, 493.0], [25.3, 493.0], [25.4, 494.0], [25.5, 494.0], [25.6, 495.0], [25.7, 495.0], [25.8, 496.0], [25.9, 497.0], [26.0, 499.0], [26.1, 499.0], [26.2, 500.0], [26.3, 500.0], [26.4, 501.0], [26.5, 501.0], [26.6, 504.0], [26.7, 504.0], [26.8, 504.0], [26.9, 504.0], [27.0, 505.0], [27.1, 505.0], [27.2, 505.0], [27.3, 508.0], [27.4, 508.0], [27.5, 509.0], [27.6, 509.0], [27.7, 509.0], [27.8, 510.0], [27.9, 510.0], [28.0, 510.0], [28.1, 512.0], [28.2, 513.0], [28.3, 513.0], [28.4, 513.0], [28.5, 513.0], [28.6, 513.0], [28.7, 513.0], [28.8, 513.0], [28.9, 514.0], [29.0, 515.0], [29.1, 515.0], [29.2, 518.0], [29.3, 518.0], [29.4, 519.0], [29.5, 519.0], [29.6, 521.0], [29.7, 521.0], [29.8, 521.0], [29.9, 521.0], [30.0, 522.0], [30.1, 522.0], [30.2, 522.0], [30.3, 522.0], [30.4, 523.0], [30.5, 528.0], [30.6, 528.0], [30.7, 529.0], [30.8, 529.0], [30.9, 531.0], [31.0, 531.0], [31.1, 532.0], [31.2, 532.0], [31.3, 533.0], [31.4, 533.0], [31.5, 534.0], [31.6, 535.0], [31.7, 535.0], [31.8, 540.0], [31.9, 540.0], [32.0, 540.0], [32.1, 540.0], [32.2, 540.0], [32.3, 541.0], [32.4, 541.0], [32.5, 541.0], [32.6, 541.0], [32.7, 541.0], [32.8, 543.0], [32.9, 543.0], [33.0, 543.0], [33.1, 543.0], [33.2, 545.0], [33.3, 545.0], [33.4, 545.0], [33.5, 546.0], [33.6, 546.0], [33.7, 547.0], [33.8, 548.0], [33.9, 548.0], [34.0, 548.0], [34.1, 548.0], [34.2, 551.0], [34.3, 553.0], [34.4, 553.0], [34.5, 555.0], [34.6, 555.0], [34.7, 555.0], [34.8, 555.0], [34.9, 556.0], [35.0, 556.0], [35.1, 556.0], [35.2, 558.0], [35.3, 558.0], [35.4, 558.0], [35.5, 558.0], [35.6, 560.0], [35.7, 561.0], [35.8, 563.0], [35.9, 563.0], [36.0, 563.0], [36.1, 563.0], [36.2, 563.0], [36.3, 563.0], [36.4, 564.0], [36.5, 564.0], [36.6, 566.0], [36.7, 566.0], [36.8, 566.0], [36.9, 567.0], [37.0, 567.0], [37.1, 567.0], [37.2, 568.0], [37.3, 569.0], [37.4, 569.0], [37.5, 569.0], [37.6, 570.0], [37.7, 571.0], [37.8, 571.0], [37.9, 573.0], [38.0, 574.0], [38.1, 575.0], [38.2, 575.0], [38.3, 575.0], [38.4, 575.0], [38.5, 575.0], [38.6, 575.0], [38.7, 578.0], [38.8, 578.0], [38.9, 578.0], [39.0, 578.0], [39.1, 579.0], [39.2, 579.0], [39.3, 579.0], [39.4, 580.0], [39.5, 580.0], [39.6, 581.0], [39.7, 581.0], [39.8, 582.0], [39.9, 583.0], [40.0, 584.0], [40.1, 584.0], [40.2, 585.0], [40.3, 586.0], [40.4, 586.0], [40.5, 588.0], [40.6, 589.0], [40.7, 590.0], [40.8, 590.0], [40.9, 593.0], [41.0, 593.0], [41.1, 597.0], [41.2, 597.0], [41.3, 598.0], [41.4, 599.0], [41.5, 601.0], [41.6, 601.0], [41.7, 601.0], [41.8, 601.0], [41.9, 601.0], [42.0, 602.0], [42.1, 603.0], [42.2, 605.0], [42.3, 605.0], [42.4, 605.0], [42.5, 605.0], [42.6, 606.0], [42.7, 606.0], [42.8, 607.0], [42.9, 607.0], [43.0, 609.0], [43.1, 609.0], [43.2, 610.0], [43.3, 610.0], [43.4, 610.0], [43.5, 610.0], [43.6, 611.0], [43.7, 613.0], [43.8, 613.0], [43.9, 615.0], [44.0, 615.0], [44.1, 615.0], [44.2, 615.0], [44.3, 616.0], [44.4, 618.0], [44.5, 620.0], [44.6, 620.0], [44.7, 622.0], [44.8, 624.0], [44.9, 625.0], [45.0, 625.0], [45.1, 627.0], [45.2, 629.0], [45.3, 629.0], [45.4, 630.0], [45.5, 631.0], [45.6, 632.0], [45.7, 632.0], [45.8, 632.0], [45.9, 633.0], [46.0, 633.0], [46.1, 633.0], [46.2, 634.0], [46.3, 635.0], [46.4, 635.0], [46.5, 635.0], [46.6, 635.0], [46.7, 638.0], [46.8, 638.0], [46.9, 640.0], [47.0, 642.0], [47.1, 643.0], [47.2, 643.0], [47.3, 644.0], [47.4, 644.0], [47.5, 646.0], [47.6, 646.0], [47.7, 648.0], [47.8, 650.0], [47.9, 651.0], [48.0, 651.0], [48.1, 655.0], [48.2, 655.0], [48.3, 659.0], [48.4, 659.0], [48.5, 661.0], [48.6, 666.0], [48.7, 666.0], [48.8, 667.0], [48.9, 667.0], [49.0, 669.0], [49.1, 669.0], [49.2, 669.0], [49.3, 670.0], [49.4, 673.0], [49.5, 673.0], [49.6, 674.0], [49.7, 676.0], [49.8, 679.0], [49.9, 679.0], [50.0, 679.0], [50.1, 683.0], [50.2, 683.0], [50.3, 684.0], [50.4, 684.0], [50.5, 684.0], [50.6, 684.0], [50.7, 686.0], [50.8, 687.0], [50.9, 688.0], [51.0, 688.0], [51.1, 688.0], [51.2, 689.0], [51.3, 694.0], [51.4, 694.0], [51.5, 697.0], [51.6, 703.0], [51.7, 703.0], [51.8, 704.0], [51.9, 707.0], [52.0, 708.0], [52.1, 708.0], [52.2, 708.0], [52.3, 709.0], [52.4, 710.0], [52.5, 710.0], [52.6, 710.0], [52.7, 710.0], [52.8, 713.0], [52.9, 713.0], [53.0, 713.0], [53.1, 714.0], [53.2, 714.0], [53.3, 714.0], [53.4, 722.0], [53.5, 723.0], [53.6, 723.0], [53.7, 724.0], [53.8, 725.0], [53.9, 731.0], [54.0, 731.0], [54.1, 731.0], [54.2, 731.0], [54.3, 733.0], [54.4, 733.0], [54.5, 736.0], [54.6, 741.0], [54.7, 743.0], [54.8, 743.0], [54.9, 744.0], [55.0, 745.0], [55.1, 745.0], [55.2, 746.0], [55.3, 747.0], [55.4, 749.0], [55.5, 749.0], [55.6, 749.0], [55.7, 750.0], [55.8, 750.0], [55.9, 750.0], [56.0, 751.0], [56.1, 751.0], [56.2, 752.0], [56.3, 752.0], [56.4, 753.0], [56.5, 756.0], [56.6, 757.0], [56.7, 757.0], [56.8, 758.0], [56.9, 758.0], [57.0, 758.0], [57.1, 760.0], [57.2, 760.0], [57.3, 761.0], [57.4, 761.0], [57.5, 762.0], [57.6, 764.0], [57.7, 773.0], [57.8, 773.0], [57.9, 774.0], [58.0, 775.0], [58.1, 776.0], [58.2, 776.0], [58.3, 778.0], [58.4, 778.0], [58.5, 778.0], [58.6, 780.0], [58.7, 781.0], [58.8, 781.0], [58.9, 781.0], [59.0, 782.0], [59.1, 784.0], [59.2, 786.0], [59.3, 786.0], [59.4, 787.0], [59.5, 795.0], [59.6, 798.0], [59.7, 798.0], [59.8, 799.0], [59.9, 799.0], [60.0, 802.0], [60.1, 802.0], [60.2, 803.0], [60.3, 803.0], [60.4, 803.0], [60.5, 804.0], [60.6, 806.0], [60.7, 808.0], [60.8, 808.0], [60.9, 810.0], [61.0, 812.0], [61.1, 813.0], [61.2, 813.0], [61.3, 815.0], [61.4, 822.0], [61.5, 822.0], [61.6, 822.0], [61.7, 825.0], [61.8, 829.0], [61.9, 829.0], [62.0, 831.0], [62.1, 843.0], [62.2, 844.0], [62.3, 844.0], [62.4, 845.0], [62.5, 846.0], [62.6, 849.0], [62.7, 849.0], [62.8, 850.0], [62.9, 850.0], [63.0, 850.0], [63.1, 850.0], [63.2, 851.0], [63.3, 853.0], [63.4, 853.0], [63.5, 854.0], [63.6, 854.0], [63.7, 854.0], [63.8, 854.0], [63.9, 857.0], [64.0, 857.0], [64.1, 858.0], [64.2, 858.0], [64.3, 860.0], [64.4, 861.0], [64.5, 862.0], [64.6, 862.0], [64.7, 863.0], [64.8, 869.0], [64.9, 869.0], [65.0, 869.0], [65.1, 870.0], [65.2, 870.0], [65.3, 870.0], [65.4, 871.0], [65.5, 873.0], [65.6, 876.0], [65.7, 876.0], [65.8, 877.0], [65.9, 877.0], [66.0, 879.0], [66.1, 879.0], [66.2, 883.0], [66.3, 887.0], [66.4, 889.0], [66.5, 889.0], [66.6, 889.0], [66.7, 892.0], [66.8, 892.0], [66.9, 895.0], [67.0, 897.0], [67.1, 898.0], [67.2, 898.0], [67.3, 899.0], [67.4, 907.0], [67.5, 912.0], [67.6, 912.0], [67.7, 915.0], [67.8, 915.0], [67.9, 916.0], [68.0, 916.0], [68.1, 919.0], [68.2, 920.0], [68.3, 923.0], [68.4, 923.0], [68.5, 925.0], [68.6, 928.0], [68.7, 928.0], [68.8, 929.0], [68.9, 929.0], [69.0, 930.0], [69.1, 930.0], [69.2, 932.0], [69.3, 937.0], [69.4, 938.0], [69.5, 938.0], [69.6, 942.0], [69.7, 947.0], [69.8, 953.0], [69.9, 953.0], [70.0, 954.0], [70.1, 955.0], [70.2, 955.0], [70.3, 956.0], [70.4, 958.0], [70.5, 960.0], [70.6, 960.0], [70.7, 961.0], [70.8, 963.0], [70.9, 964.0], [71.0, 964.0], [71.1, 964.0], [71.2, 969.0], [71.3, 971.0], [71.4, 971.0], [71.5, 972.0], [71.6, 974.0], [71.7, 974.0], [71.8, 975.0], [71.9, 975.0], [72.0, 977.0], [72.1, 977.0], [72.2, 982.0], [72.3, 988.0], [72.4, 989.0], [72.5, 989.0], [72.6, 992.0], [72.7, 996.0], [72.8, 998.0], [72.9, 998.0], [73.0, 998.0], [73.1, 1005.0], [73.2, 1005.0], [73.3, 1005.0], [73.4, 1011.0], [73.5, 1014.0], [73.6, 1014.0], [73.7, 1014.0], [73.8, 1017.0], [73.9, 1025.0], [74.0, 1025.0], [74.1, 1025.0], [74.2, 1028.0], [74.3, 1029.0], [74.4, 1029.0], [74.5, 1031.0], [74.6, 1031.0], [74.7, 1042.0], [74.8, 1042.0], [74.9, 1045.0], [75.0, 1046.0], [75.1, 1046.0], [75.2, 1049.0], [75.3, 1050.0], [75.4, 1055.0], [75.5, 1055.0], [75.6, 1056.0], [75.7, 1057.0], [75.8, 1061.0], [75.9, 1061.0], [76.0, 1063.0], [76.1, 1064.0], [76.2, 1066.0], [76.3, 1066.0], [76.4, 1073.0], [76.5, 1080.0], [76.6, 1082.0], [76.7, 1082.0], [76.8, 1085.0], [76.9, 1088.0], [77.0, 1088.0], [77.1, 1091.0], [77.2, 1091.0], [77.3, 1092.0], [77.4, 1092.0], [77.5, 1094.0], [77.6, 1094.0], [77.7, 1099.0], [77.8, 1099.0], [77.9, 1106.0], [78.0, 1107.0], [78.1, 1124.0], [78.2, 1124.0], [78.3, 1125.0], [78.4, 1126.0], [78.5, 1126.0], [78.6, 1129.0], [78.7, 1130.0], [78.8, 1131.0], [78.9, 1131.0], [79.0, 1132.0], [79.1, 1140.0], [79.2, 1140.0], [79.3, 1140.0], [79.4, 1143.0], [79.5, 1152.0], [79.6, 1153.0], [79.7, 1153.0], [79.8, 1156.0], [79.9, 1157.0], [80.0, 1160.0], [80.1, 1160.0], [80.2, 1163.0], [80.3, 1165.0], [80.4, 1165.0], [80.5, 1173.0], [80.6, 1176.0], [80.7, 1182.0], [80.8, 1182.0], [80.9, 1188.0], [81.0, 1189.0], [81.1, 1195.0], [81.2, 1195.0], [81.3, 1201.0], [81.4, 1209.0], [81.5, 1218.0], [81.6, 1218.0], [81.7, 1219.0], [81.8, 1219.0], [81.9, 1219.0], [82.0, 1231.0], [82.1, 1236.0], [82.2, 1241.0], [82.3, 1241.0], [82.4, 1244.0], [82.5, 1245.0], [82.6, 1247.0], [82.7, 1247.0], [82.8, 1253.0], [82.9, 1254.0], [83.0, 1259.0], [83.1, 1259.0], [83.2, 1259.0], [83.3, 1268.0], [83.4, 1268.0], [83.5, 1273.0], [83.6, 1277.0], [83.7, 1278.0], [83.8, 1278.0], [83.9, 1279.0], [84.0, 1293.0], [84.1, 1299.0], [84.2, 1299.0], [84.3, 1314.0], [84.4, 1316.0], [84.5, 1329.0], [84.6, 1329.0], [84.7, 1331.0], [84.8, 1332.0], [84.9, 1334.0], [85.0, 1334.0], [85.1, 1339.0], [85.2, 1345.0], [85.3, 1345.0], [85.4, 1348.0], [85.5, 1360.0], [85.6, 1360.0], [85.7, 1360.0], [85.8, 1369.0], [85.9, 1369.0], [86.0, 1382.0], [86.1, 1382.0], [86.2, 1385.0], [86.3, 1395.0], [86.4, 1411.0], [86.5, 1411.0], [86.6, 1411.0], [86.7, 1415.0], [86.8, 1415.0], [86.9, 1417.0], [87.0, 1419.0], [87.1, 1420.0], [87.2, 1420.0], [87.3, 1427.0], [87.4, 1430.0], [87.5, 1439.0], [87.6, 1439.0], [87.7, 1447.0], [87.8, 1458.0], [87.9, 1460.0], [88.0, 1460.0], [88.1, 1468.0], [88.2, 1471.0], [88.3, 1473.0], [88.4, 1473.0], [88.5, 1481.0], [88.6, 1485.0], [88.7, 1485.0], [88.8, 1488.0], [88.9, 1490.0], [89.0, 1498.0], [89.1, 1498.0], [89.2, 1499.0], [89.3, 1501.0], [89.4, 1501.0], [89.5, 1501.0], [89.6, 1501.0], [89.7, 1502.0], [89.8, 1510.0], [89.9, 1510.0], [90.0, 1511.0], [90.1, 1511.0], [90.2, 1511.0], [90.3, 1520.0], [90.4, 1530.0], [90.5, 1535.0], [90.6, 1535.0], [90.7, 1551.0], [90.8, 1570.0], [90.9, 1585.0], [91.0, 1585.0], [91.1, 1591.0], [91.2, 1591.0], [91.3, 1592.0], [91.4, 1592.0], [91.5, 1593.0], [91.6, 1593.0], [91.7, 1593.0], [91.8, 1599.0], [91.9, 1621.0], [92.0, 1626.0], [92.1, 1626.0], [92.2, 1628.0], [92.3, 1631.0], [92.4, 1633.0], [92.5, 1633.0], [92.6, 1637.0], [92.7, 1639.0], [92.8, 1655.0], [92.9, 1655.0], [93.0, 1656.0], [93.1, 1657.0], [93.2, 1659.0], [93.3, 1659.0], [93.4, 1676.0], [93.5, 1678.0], [93.6, 1678.0], [93.7, 1691.0], [93.8, 1701.0], [93.9, 1705.0], [94.0, 1705.0], [94.1, 1707.0], [94.2, 1723.0], [94.3, 1746.0], [94.4, 1746.0], [94.5, 1770.0], [94.6, 1798.0], [94.7, 1814.0], [94.8, 1814.0], [94.9, 1819.0], [95.0, 1822.0], [95.1, 1822.0], [95.2, 1832.0], [95.3, 1833.0], [95.4, 1833.0], [95.5, 1833.0], [95.6, 1850.0], [95.7, 1863.0], [95.8, 1918.0], [95.9, 1918.0], [96.0, 1931.0], [96.1, 1955.0], [96.2, 1983.0], [96.3, 1983.0], [96.4, 1985.0], [96.5, 2010.0], [96.6, 2094.0], [96.7, 2094.0], [96.8, 2146.0], [96.9, 2225.0], [97.0, 2225.0], [97.1, 2231.0], [97.2, 2303.0], [97.3, 2328.0], [97.4, 2328.0], [97.5, 2387.0], [97.6, 2392.0], [97.7, 2429.0], [97.8, 2429.0], [97.9, 2530.0], [98.0, 2565.0], [98.1, 2574.0], [98.2, 2574.0], [98.3, 2585.0], [98.4, 2605.0], [98.5, 2605.0], [98.6, 2605.0], [98.7, 2675.0], [98.8, 2690.0], [98.9, 2690.0], [99.0, 2696.0], [99.1, 2726.0], [99.2, 3126.0], [99.3, 3126.0], [99.4, 4848.0], [99.5, 4966.0], [99.6, 5739.0], [99.7, 5739.0], [99.8, 7379.0], [99.9, 8558.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 113.0, "series": [{"data": [[8500.0, 1.0], [600.0, 74.0], [700.0, 62.0], [800.0, 54.0], [900.0, 42.0], [1000.0, 35.0], [1100.0, 25.0], [1200.0, 22.0], [1300.0, 16.0], [1400.0, 21.0], [1500.0, 19.0], [1600.0, 14.0], [1700.0, 7.0], [1800.0, 8.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 4.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 5.0], [2700.0, 1.0], [3100.0, 1.0], [200.0, 29.0], [300.0, 50.0], [4800.0, 1.0], [4900.0, 1.0], [5700.0, 1.0], [400.0, 113.0], [7300.0, 1.0], [500.0, 113.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 462.0, "series": [{"data": [[0.0, 194.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 79.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.920353982300886, "minX": 1.60386882E12, "maxY": 10.0, "series": [{"data": [[1.60386882E12, 10.0], [1.60386888E12, 9.920353982300886]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386888E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 405.0, "minX": 1.0, "maxY": 4848.0, "series": [{"data": [[8.0, 4848.0], [4.0, 441.0], [2.0, 1005.0], [1.0, 1385.0], [9.0, 505.0], [10.0, 862.8388429752068], [5.0, 500.0], [6.0, 405.0], [3.0, 472.0], [7.0, 410.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 865.8394557823132]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1286.7833333333333, "minX": 1.60386882E12, "maxY": 1545087.7833333334, "series": [{"data": [[1.60386882E12, 650354.2666666667], [1.60386888E12, 1545087.7833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386882E12, 1286.7833333333333], [1.60386888E12, 4236.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386888E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 823.1964601769919, "minX": 1.60386882E12, "maxY": 1007.5647058823535, "series": [{"data": [[1.60386882E12, 1007.5647058823535], [1.60386888E12, 823.1964601769919]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386888E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 821.8318584070797, "minX": 1.60386882E12, "maxY": 1005.7941176470589, "series": [{"data": [[1.60386882E12, 1005.7941176470589], [1.60386888E12, 821.8318584070797]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386888E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015929203539823005, "minX": 1.60386882E12, "maxY": 0.5176470588235298, "series": [{"data": [[1.60386882E12, 0.5176470588235298], [1.60386888E12, 0.015929203539823005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386888E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 227.0, "minX": 1.60386882E12, "maxY": 8558.0, "series": [{"data": [[1.60386882E12, 8558.0], [1.60386888E12, 7379.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386882E12, 231.61699987769126], [1.60386888E12, 242.09399986505508]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386882E12, 232.07870004892348], [1.60386888E12, 242.60340005397796]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386882E12, 231.87349993884564], [1.60386888E12, 242.37699993252755]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386882E12, 230.0], [1.60386888E12, 227.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386882E12, 794.5], [1.60386888E12, 640.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386888E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 378.0, "minX": 1.0, "maxY": 1556.0, "series": [{"data": [[8.0, 909.0], [2.0, 1195.0], [9.0, 560.0], [10.0, 804.5], [11.0, 791.0], [12.0, 737.0], [13.0, 621.5], [14.0, 630.0], [15.0, 577.5], [1.0, 1055.0], [16.0, 588.0], [4.0, 1556.0], [17.0, 567.0], [18.0, 481.5], [19.0, 378.0], [5.0, 1321.0], [20.0, 521.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 378.0, "minX": 1.0, "maxY": 1554.5, "series": [{"data": [[8.0, 907.0], [2.0, 1193.0], [9.0, 559.5], [10.0, 803.5], [11.0, 790.0], [12.0, 736.0], [13.0, 620.0], [14.0, 629.5], [15.0, 576.0], [1.0, 1051.0], [16.0, 588.0], [4.0, 1554.5], [17.0, 560.0], [18.0, 481.5], [19.0, 378.0], [5.0, 1320.5], [20.0, 520.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60386882E12, "maxY": 9.25, "series": [{"data": [[1.60386882E12, 3.0], [1.60386888E12, 9.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386888E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60386882E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60386882E12, 2.8333333333333335], [1.60386888E12, 9.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386888E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60386882E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60386882E12, 2.8333333333333335], [1.60386888E12, 9.416666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386888E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.60386882E12, "maxY": 9.416666666666666, "series": [{"data": [[1.60386882E12, 2.8333333333333335], [1.60386888E12, 9.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386888E12, "title": "Total Transactions Per Second"}},
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

