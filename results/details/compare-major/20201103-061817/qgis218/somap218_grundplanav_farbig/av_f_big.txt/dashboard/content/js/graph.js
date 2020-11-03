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
        data: {"result": {"minY": 225.0, "minX": 0.0, "maxY": 8346.0, "series": [{"data": [[0.0, 225.0], [0.1, 225.0], [0.2, 226.0], [0.3, 229.0], [0.4, 229.0], [0.5, 230.0], [0.6, 233.0], [0.7, 239.0], [0.8, 239.0], [0.9, 243.0], [1.0, 243.0], [1.1, 243.0], [1.2, 243.0], [1.3, 244.0], [1.4, 245.0], [1.5, 246.0], [1.6, 246.0], [1.7, 253.0], [1.8, 254.0], [1.9, 254.0], [2.0, 257.0], [2.1, 264.0], [2.2, 265.0], [2.3, 265.0], [2.4, 266.0], [2.5, 276.0], [2.6, 277.0], [2.7, 277.0], [2.8, 279.0], [2.9, 280.0], [3.0, 283.0], [3.1, 283.0], [3.2, 284.0], [3.3, 289.0], [3.4, 289.0], [3.5, 290.0], [3.6, 291.0], [3.7, 292.0], [3.8, 292.0], [3.9, 296.0], [4.0, 305.0], [4.1, 305.0], [4.2, 305.0], [4.3, 307.0], [4.4, 310.0], [4.5, 317.0], [4.6, 317.0], [4.7, 318.0], [4.8, 318.0], [4.9, 318.0], [5.0, 318.0], [5.1, 320.0], [5.2, 321.0], [5.3, 321.0], [5.4, 325.0], [5.5, 326.0], [5.6, 327.0], [5.7, 327.0], [5.8, 331.0], [5.9, 332.0], [6.0, 332.0], [6.1, 332.0], [6.2, 335.0], [6.3, 337.0], [6.4, 337.0], [6.5, 337.0], [6.6, 338.0], [6.7, 340.0], [6.8, 340.0], [6.9, 341.0], [7.0, 341.0], [7.1, 344.0], [7.2, 344.0], [7.3, 347.0], [7.4, 347.0], [7.5, 357.0], [7.6, 357.0], [7.7, 358.0], [7.8, 364.0], [7.9, 364.0], [8.0, 364.0], [8.1, 365.0], [8.2, 365.0], [8.3, 368.0], [8.4, 368.0], [8.5, 369.0], [8.6, 376.0], [8.7, 376.0], [8.8, 377.0], [8.9, 377.0], [9.0, 378.0], [9.1, 378.0], [9.2, 379.0], [9.3, 380.0], [9.4, 381.0], [9.5, 381.0], [9.6, 383.0], [9.7, 386.0], [9.8, 389.0], [9.9, 389.0], [10.0, 389.0], [10.1, 391.0], [10.2, 391.0], [10.3, 394.0], [10.4, 397.0], [10.5, 397.0], [10.6, 397.0], [10.7, 401.0], [10.8, 402.0], [10.9, 404.0], [11.0, 404.0], [11.1, 406.0], [11.2, 410.0], [11.3, 410.0], [11.4, 410.0], [11.5, 412.0], [11.6, 413.0], [11.7, 413.0], [11.8, 413.0], [11.9, 415.0], [12.0, 417.0], [12.1, 417.0], [12.2, 417.0], [12.3, 417.0], [12.4, 419.0], [12.5, 419.0], [12.6, 420.0], [12.7, 420.0], [12.8, 420.0], [12.9, 420.0], [13.0, 422.0], [13.1, 424.0], [13.2, 425.0], [13.3, 425.0], [13.4, 425.0], [13.5, 426.0], [13.6, 426.0], [13.7, 427.0], [13.8, 428.0], [13.9, 430.0], [14.0, 430.0], [14.1, 431.0], [14.2, 432.0], [14.3, 433.0], [14.4, 433.0], [14.5, 435.0], [14.6, 436.0], [14.7, 437.0], [14.8, 437.0], [14.9, 444.0], [15.0, 444.0], [15.1, 444.0], [15.2, 446.0], [15.3, 446.0], [15.4, 447.0], [15.5, 447.0], [15.6, 449.0], [15.7, 449.0], [15.8, 450.0], [15.9, 450.0], [16.0, 452.0], [16.1, 453.0], [16.2, 455.0], [16.3, 455.0], [16.4, 455.0], [16.5, 456.0], [16.6, 457.0], [16.7, 457.0], [16.8, 458.0], [16.9, 460.0], [17.0, 460.0], [17.1, 462.0], [17.2, 463.0], [17.3, 463.0], [17.4, 463.0], [17.5, 464.0], [17.6, 465.0], [17.7, 466.0], [17.8, 466.0], [17.9, 467.0], [18.0, 467.0], [18.1, 468.0], [18.2, 468.0], [18.3, 468.0], [18.4, 468.0], [18.5, 468.0], [18.6, 469.0], [18.7, 469.0], [18.8, 470.0], [18.9, 470.0], [19.0, 471.0], [19.1, 471.0], [19.2, 472.0], [19.3, 472.0], [19.4, 473.0], [19.5, 473.0], [19.6, 474.0], [19.7, 474.0], [19.8, 474.0], [19.9, 474.0], [20.0, 475.0], [20.1, 475.0], [20.2, 477.0], [20.3, 477.0], [20.4, 477.0], [20.5, 479.0], [20.6, 479.0], [20.7, 479.0], [20.8, 479.0], [20.9, 480.0], [21.0, 481.0], [21.1, 481.0], [21.2, 481.0], [21.3, 481.0], [21.4, 483.0], [21.5, 484.0], [21.6, 484.0], [21.7, 485.0], [21.8, 485.0], [21.9, 485.0], [22.0, 487.0], [22.1, 487.0], [22.2, 489.0], [22.3, 489.0], [22.4, 490.0], [22.5, 490.0], [22.6, 491.0], [22.7, 491.0], [22.8, 493.0], [22.9, 494.0], [23.0, 494.0], [23.1, 494.0], [23.2, 495.0], [23.3, 496.0], [23.4, 496.0], [23.5, 496.0], [23.6, 496.0], [23.7, 496.0], [23.8, 496.0], [23.9, 497.0], [24.0, 498.0], [24.1, 498.0], [24.2, 498.0], [24.3, 499.0], [24.4, 499.0], [24.5, 501.0], [24.6, 501.0], [24.7, 502.0], [24.8, 503.0], [24.9, 505.0], [25.0, 505.0], [25.1, 506.0], [25.2, 506.0], [25.3, 506.0], [25.4, 507.0], [25.5, 507.0], [25.6, 507.0], [25.7, 507.0], [25.8, 507.0], [25.9, 508.0], [26.0, 509.0], [26.1, 509.0], [26.2, 510.0], [26.3, 510.0], [26.4, 510.0], [26.5, 510.0], [26.6, 512.0], [26.7, 513.0], [26.8, 513.0], [26.9, 513.0], [27.0, 513.0], [27.1, 514.0], [27.2, 514.0], [27.3, 514.0], [27.4, 514.0], [27.5, 514.0], [27.6, 514.0], [27.7, 516.0], [27.8, 516.0], [27.9, 517.0], [28.0, 517.0], [28.1, 518.0], [28.2, 518.0], [28.3, 518.0], [28.4, 518.0], [28.5, 519.0], [28.6, 519.0], [28.7, 519.0], [28.8, 519.0], [28.9, 521.0], [29.0, 522.0], [29.1, 522.0], [29.2, 522.0], [29.3, 522.0], [29.4, 523.0], [29.5, 523.0], [29.6, 525.0], [29.7, 528.0], [29.8, 528.0], [29.9, 528.0], [30.0, 528.0], [30.1, 528.0], [30.2, 528.0], [30.3, 528.0], [30.4, 529.0], [30.5, 530.0], [30.6, 530.0], [30.7, 531.0], [30.8, 531.0], [30.9, 532.0], [31.0, 532.0], [31.1, 532.0], [31.2, 532.0], [31.3, 534.0], [31.4, 534.0], [31.5, 535.0], [31.6, 535.0], [31.7, 535.0], [31.8, 535.0], [31.9, 535.0], [32.0, 535.0], [32.1, 535.0], [32.2, 537.0], [32.3, 538.0], [32.4, 538.0], [32.5, 538.0], [32.6, 538.0], [32.7, 538.0], [32.8, 538.0], [32.9, 538.0], [33.0, 539.0], [33.1, 539.0], [33.2, 540.0], [33.3, 540.0], [33.4, 541.0], [33.5, 541.0], [33.6, 541.0], [33.7, 542.0], [33.8, 543.0], [33.9, 544.0], [34.0, 544.0], [34.1, 544.0], [34.2, 545.0], [34.3, 546.0], [34.4, 546.0], [34.5, 546.0], [34.6, 548.0], [34.7, 548.0], [34.8, 548.0], [34.9, 548.0], [35.0, 548.0], [35.1, 548.0], [35.2, 549.0], [35.3, 550.0], [35.4, 551.0], [35.5, 551.0], [35.6, 553.0], [35.7, 553.0], [35.8, 554.0], [35.9, 554.0], [36.0, 556.0], [36.1, 556.0], [36.2, 556.0], [36.3, 556.0], [36.4, 556.0], [36.5, 557.0], [36.6, 558.0], [36.7, 558.0], [36.8, 558.0], [36.9, 559.0], [37.0, 559.0], [37.1, 559.0], [37.2, 560.0], [37.3, 561.0], [37.4, 561.0], [37.5, 561.0], [37.6, 561.0], [37.7, 562.0], [37.8, 562.0], [37.9, 562.0], [38.0, 563.0], [38.1, 564.0], [38.2, 564.0], [38.3, 565.0], [38.4, 566.0], [38.5, 566.0], [38.6, 566.0], [38.7, 567.0], [38.8, 568.0], [38.9, 568.0], [39.0, 572.0], [39.1, 574.0], [39.2, 575.0], [39.3, 575.0], [39.4, 575.0], [39.5, 575.0], [39.6, 576.0], [39.7, 576.0], [39.8, 576.0], [39.9, 577.0], [40.0, 577.0], [40.1, 577.0], [40.2, 577.0], [40.3, 579.0], [40.4, 579.0], [40.5, 579.0], [40.6, 583.0], [40.7, 583.0], [40.8, 583.0], [40.9, 584.0], [41.0, 587.0], [41.1, 588.0], [41.2, 588.0], [41.3, 590.0], [41.4, 591.0], [41.5, 592.0], [41.6, 592.0], [41.7, 593.0], [41.8, 594.0], [41.9, 594.0], [42.0, 598.0], [42.1, 599.0], [42.2, 604.0], [42.3, 604.0], [42.4, 604.0], [42.5, 605.0], [42.6, 605.0], [42.7, 605.0], [42.8, 606.0], [42.9, 607.0], [43.0, 608.0], [43.1, 608.0], [43.2, 608.0], [43.3, 610.0], [43.4, 610.0], [43.5, 611.0], [43.6, 614.0], [43.7, 614.0], [43.8, 614.0], [43.9, 616.0], [44.0, 617.0], [44.1, 617.0], [44.2, 617.0], [44.3, 618.0], [44.4, 619.0], [44.5, 620.0], [44.6, 620.0], [44.7, 622.0], [44.8, 622.0], [44.9, 626.0], [45.0, 626.0], [45.1, 629.0], [45.2, 629.0], [45.3, 629.0], [45.4, 630.0], [45.5, 631.0], [45.6, 632.0], [45.7, 632.0], [45.8, 633.0], [45.9, 633.0], [46.0, 636.0], [46.1, 636.0], [46.2, 638.0], [46.3, 639.0], [46.4, 640.0], [46.5, 640.0], [46.6, 641.0], [46.7, 641.0], [46.8, 641.0], [46.9, 642.0], [47.0, 642.0], [47.1, 642.0], [47.2, 642.0], [47.3, 643.0], [47.4, 645.0], [47.5, 645.0], [47.6, 645.0], [47.7, 646.0], [47.8, 647.0], [47.9, 648.0], [48.0, 648.0], [48.1, 649.0], [48.2, 649.0], [48.3, 651.0], [48.4, 651.0], [48.5, 655.0], [48.6, 655.0], [48.7, 655.0], [48.8, 655.0], [48.9, 657.0], [49.0, 660.0], [49.1, 660.0], [49.2, 660.0], [49.3, 661.0], [49.4, 661.0], [49.5, 661.0], [49.6, 664.0], [49.7, 665.0], [49.8, 667.0], [49.9, 667.0], [50.0, 668.0], [50.1, 669.0], [50.2, 669.0], [50.3, 669.0], [50.4, 670.0], [50.5, 674.0], [50.6, 674.0], [50.7, 676.0], [50.8, 677.0], [50.9, 677.0], [51.0, 677.0], [51.1, 677.0], [51.2, 679.0], [51.3, 680.0], [51.4, 680.0], [51.5, 680.0], [51.6, 683.0], [51.7, 683.0], [51.8, 684.0], [51.9, 685.0], [52.0, 686.0], [52.1, 686.0], [52.2, 689.0], [52.3, 690.0], [52.4, 690.0], [52.5, 690.0], [52.6, 690.0], [52.7, 691.0], [52.8, 691.0], [52.9, 691.0], [53.0, 691.0], [53.1, 693.0], [53.2, 693.0], [53.3, 693.0], [53.4, 694.0], [53.5, 695.0], [53.6, 695.0], [53.7, 698.0], [53.8, 699.0], [53.9, 702.0], [54.0, 702.0], [54.1, 707.0], [54.2, 708.0], [54.3, 708.0], [54.4, 708.0], [54.5, 709.0], [54.6, 712.0], [54.7, 712.0], [54.8, 712.0], [54.9, 713.0], [55.0, 714.0], [55.1, 714.0], [55.2, 715.0], [55.3, 727.0], [55.4, 727.0], [55.5, 727.0], [55.6, 728.0], [55.7, 728.0], [55.8, 729.0], [55.9, 729.0], [56.0, 731.0], [56.1, 731.0], [56.2, 736.0], [56.3, 736.0], [56.4, 737.0], [56.5, 738.0], [56.6, 739.0], [56.7, 739.0], [56.8, 740.0], [56.9, 740.0], [57.0, 740.0], [57.1, 745.0], [57.2, 745.0], [57.3, 746.0], [57.4, 746.0], [57.5, 747.0], [57.6, 748.0], [57.7, 758.0], [57.8, 758.0], [57.9, 759.0], [58.0, 760.0], [58.1, 761.0], [58.2, 761.0], [58.3, 762.0], [58.4, 764.0], [58.5, 764.0], [58.6, 766.0], [58.7, 773.0], [58.8, 774.0], [58.9, 774.0], [59.0, 775.0], [59.1, 780.0], [59.2, 786.0], [59.3, 786.0], [59.4, 787.0], [59.5, 788.0], [59.6, 788.0], [59.7, 788.0], [59.8, 789.0], [59.9, 790.0], [60.0, 795.0], [60.1, 795.0], [60.2, 795.0], [60.3, 796.0], [60.4, 796.0], [60.5, 797.0], [60.6, 800.0], [60.7, 803.0], [60.8, 803.0], [60.9, 810.0], [61.0, 811.0], [61.1, 812.0], [61.2, 812.0], [61.3, 814.0], [61.4, 815.0], [61.5, 815.0], [61.6, 815.0], [61.7, 816.0], [61.8, 816.0], [61.9, 816.0], [62.0, 822.0], [62.1, 823.0], [62.2, 828.0], [62.3, 828.0], [62.4, 832.0], [62.5, 833.0], [62.6, 833.0], [62.7, 833.0], [62.8, 836.0], [62.9, 838.0], [63.0, 843.0], [63.1, 843.0], [63.2, 852.0], [63.3, 852.0], [63.4, 852.0], [63.5, 853.0], [63.6, 856.0], [63.7, 857.0], [63.8, 857.0], [63.9, 860.0], [64.0, 861.0], [64.1, 868.0], [64.2, 868.0], [64.3, 871.0], [64.4, 872.0], [64.5, 873.0], [64.6, 873.0], [64.7, 879.0], [64.8, 881.0], [64.9, 882.0], [65.0, 882.0], [65.1, 883.0], [65.2, 883.0], [65.3, 883.0], [65.4, 887.0], [65.5, 890.0], [65.6, 891.0], [65.7, 891.0], [65.8, 891.0], [65.9, 891.0], [66.0, 893.0], [66.1, 893.0], [66.2, 893.0], [66.3, 894.0], [66.4, 895.0], [66.5, 895.0], [66.6, 896.0], [66.7, 901.0], [66.8, 901.0], [66.9, 902.0], [67.0, 905.0], [67.1, 905.0], [67.2, 905.0], [67.3, 913.0], [67.4, 913.0], [67.5, 915.0], [67.6, 915.0], [67.7, 916.0], [67.8, 917.0], [67.9, 919.0], [68.0, 919.0], [68.1, 919.0], [68.2, 920.0], [68.3, 928.0], [68.4, 928.0], [68.5, 933.0], [68.6, 933.0], [68.7, 933.0], [68.8, 934.0], [68.9, 937.0], [69.0, 940.0], [69.1, 940.0], [69.2, 942.0], [69.3, 945.0], [69.4, 948.0], [69.5, 948.0], [69.6, 951.0], [69.7, 952.0], [69.8, 952.0], [69.9, 952.0], [70.0, 952.0], [70.1, 954.0], [70.2, 954.0], [70.3, 954.0], [70.4, 956.0], [70.5, 957.0], [70.6, 957.0], [70.7, 958.0], [70.8, 960.0], [70.9, 961.0], [71.0, 961.0], [71.1, 964.0], [71.2, 964.0], [71.3, 965.0], [71.4, 965.0], [71.5, 965.0], [71.6, 970.0], [71.7, 970.0], [71.8, 971.0], [71.9, 972.0], [72.0, 976.0], [72.1, 976.0], [72.2, 979.0], [72.3, 981.0], [72.4, 984.0], [72.5, 984.0], [72.6, 986.0], [72.7, 986.0], [72.8, 991.0], [72.9, 991.0], [73.0, 993.0], [73.1, 996.0], [73.2, 998.0], [73.3, 998.0], [73.4, 1001.0], [73.5, 1004.0], [73.6, 1004.0], [73.7, 1004.0], [73.8, 1007.0], [73.9, 1009.0], [74.0, 1009.0], [74.1, 1011.0], [74.2, 1012.0], [74.3, 1020.0], [74.4, 1020.0], [74.5, 1023.0], [74.6, 1029.0], [74.7, 1030.0], [74.8, 1030.0], [74.9, 1030.0], [75.0, 1031.0], [75.1, 1031.0], [75.2, 1036.0], [75.3, 1040.0], [75.4, 1042.0], [75.5, 1042.0], [75.6, 1043.0], [75.7, 1047.0], [75.8, 1049.0], [75.9, 1049.0], [76.0, 1050.0], [76.1, 1054.0], [76.2, 1057.0], [76.3, 1057.0], [76.4, 1058.0], [76.5, 1061.0], [76.6, 1064.0], [76.7, 1064.0], [76.8, 1065.0], [76.9, 1068.0], [77.0, 1068.0], [77.1, 1068.0], [77.2, 1071.0], [77.3, 1073.0], [77.4, 1073.0], [77.5, 1076.0], [77.6, 1077.0], [77.7, 1078.0], [77.8, 1078.0], [77.9, 1085.0], [78.0, 1087.0], [78.1, 1089.0], [78.2, 1089.0], [78.3, 1090.0], [78.4, 1090.0], [78.5, 1090.0], [78.6, 1090.0], [78.7, 1093.0], [78.8, 1093.0], [78.9, 1093.0], [79.0, 1098.0], [79.1, 1102.0], [79.2, 1106.0], [79.3, 1106.0], [79.4, 1107.0], [79.5, 1108.0], [79.6, 1111.0], [79.7, 1111.0], [79.8, 1113.0], [79.9, 1126.0], [80.0, 1129.0], [80.1, 1129.0], [80.2, 1139.0], [80.3, 1139.0], [80.4, 1139.0], [80.5, 1142.0], [80.6, 1147.0], [80.7, 1147.0], [80.8, 1147.0], [80.9, 1148.0], [81.0, 1149.0], [81.1, 1156.0], [81.2, 1156.0], [81.3, 1164.0], [81.4, 1169.0], [81.5, 1172.0], [81.6, 1172.0], [81.7, 1178.0], [81.8, 1183.0], [81.9, 1183.0], [82.0, 1184.0], [82.1, 1194.0], [82.2, 1195.0], [82.3, 1195.0], [82.4, 1197.0], [82.5, 1214.0], [82.6, 1226.0], [82.7, 1226.0], [82.8, 1227.0], [82.9, 1229.0], [83.0, 1229.0], [83.1, 1229.0], [83.2, 1232.0], [83.3, 1237.0], [83.4, 1237.0], [83.5, 1239.0], [83.6, 1259.0], [83.7, 1267.0], [83.8, 1267.0], [83.9, 1269.0], [84.0, 1273.0], [84.1, 1274.0], [84.2, 1274.0], [84.3, 1276.0], [84.4, 1277.0], [84.5, 1281.0], [84.6, 1281.0], [84.7, 1281.0], [84.8, 1281.0], [84.9, 1284.0], [85.0, 1284.0], [85.1, 1291.0], [85.2, 1292.0], [85.3, 1292.0], [85.4, 1294.0], [85.5, 1295.0], [85.6, 1297.0], [85.7, 1297.0], [85.8, 1297.0], [85.9, 1297.0], [86.0, 1302.0], [86.1, 1302.0], [86.2, 1308.0], [86.3, 1308.0], [86.4, 1310.0], [86.5, 1310.0], [86.6, 1316.0], [86.7, 1317.0], [86.8, 1317.0], [86.9, 1325.0], [87.0, 1331.0], [87.1, 1346.0], [87.2, 1346.0], [87.3, 1354.0], [87.4, 1359.0], [87.5, 1360.0], [87.6, 1360.0], [87.7, 1365.0], [87.8, 1381.0], [87.9, 1385.0], [88.0, 1385.0], [88.1, 1387.0], [88.2, 1391.0], [88.3, 1403.0], [88.4, 1403.0], [88.5, 1405.0], [88.6, 1411.0], [88.7, 1411.0], [88.8, 1413.0], [88.9, 1426.0], [89.0, 1430.0], [89.1, 1430.0], [89.2, 1433.0], [89.3, 1434.0], [89.4, 1434.0], [89.5, 1434.0], [89.6, 1437.0], [89.7, 1439.0], [89.8, 1439.0], [89.9, 1439.0], [90.0, 1440.0], [90.1, 1450.0], [90.2, 1450.0], [90.3, 1451.0], [90.4, 1457.0], [90.5, 1458.0], [90.6, 1458.0], [90.7, 1459.0], [90.8, 1460.0], [90.9, 1464.0], [91.0, 1464.0], [91.1, 1464.0], [91.2, 1466.0], [91.3, 1468.0], [91.4, 1468.0], [91.5, 1472.0], [91.6, 1481.0], [91.7, 1481.0], [91.8, 1487.0], [91.9, 1494.0], [92.0, 1498.0], [92.1, 1498.0], [92.2, 1504.0], [92.3, 1509.0], [92.4, 1531.0], [92.5, 1531.0], [92.6, 1534.0], [92.7, 1539.0], [92.8, 1546.0], [92.9, 1546.0], [93.0, 1558.0], [93.1, 1561.0], [93.2, 1577.0], [93.3, 1577.0], [93.4, 1578.0], [93.5, 1578.0], [93.6, 1578.0], [93.7, 1579.0], [93.8, 1595.0], [93.9, 1599.0], [94.0, 1599.0], [94.1, 1602.0], [94.2, 1607.0], [94.3, 1638.0], [94.4, 1638.0], [94.5, 1641.0], [94.6, 1662.0], [94.7, 1684.0], [94.8, 1684.0], [94.9, 1684.0], [95.0, 1707.0], [95.1, 1707.0], [95.2, 1758.0], [95.3, 1791.0], [95.4, 1796.0], [95.5, 1796.0], [95.6, 1801.0], [95.7, 1817.0], [95.8, 1820.0], [95.9, 1820.0], [96.0, 1827.0], [96.1, 1872.0], [96.2, 1877.0], [96.3, 1877.0], [96.4, 1897.0], [96.5, 1936.0], [96.6, 1940.0], [96.7, 1940.0], [96.8, 1948.0], [96.9, 2004.0], [97.0, 2004.0], [97.1, 2106.0], [97.2, 2202.0], [97.3, 2235.0], [97.4, 2235.0], [97.5, 2254.0], [97.6, 2289.0], [97.7, 2323.0], [97.8, 2323.0], [97.9, 2337.0], [98.0, 2370.0], [98.1, 2377.0], [98.2, 2377.0], [98.3, 2401.0], [98.4, 2404.0], [98.5, 2404.0], [98.6, 2407.0], [98.7, 2494.0], [98.8, 2784.0], [98.9, 2784.0], [99.0, 2835.0], [99.1, 3080.0], [99.2, 3379.0], [99.3, 3379.0], [99.4, 4735.0], [99.5, 5046.0], [99.6, 5120.0], [99.7, 5120.0], [99.8, 8220.0], [99.9, 8346.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 130.0, "series": [{"data": [[8300.0, 1.0], [8200.0, 1.0], [600.0, 86.0], [700.0, 49.0], [800.0, 45.0], [900.0, 49.0], [1000.0, 42.0], [1100.0, 25.0], [1200.0, 26.0], [1300.0, 17.0], [1400.0, 28.0], [1500.0, 14.0], [1600.0, 7.0], [1700.0, 4.0], [1800.0, 7.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 4.0], [2300.0, 4.0], [2400.0, 4.0], [2800.0, 1.0], [2700.0, 1.0], [3000.0, 1.0], [200.0, 29.0], [3300.0, 1.0], [300.0, 49.0], [4700.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [400.0, 102.0], [500.0, 130.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 58.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 497.0, "series": [{"data": [[0.0, 180.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 497.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 58.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.930489731437598, "minX": 1.60438446E12, "maxY": 10.0, "series": [{"data": [[1.60438446E12, 10.0], [1.60438452E12, 9.930489731437598]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438452E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 420.0, "minX": 1.0, "maxY": 2799.5, "series": [{"data": [[8.0, 2799.5], [4.0, 420.0], [2.0, 1147.0], [1.0, 1405.0], [9.0, 736.0], [10.0, 841.1859504132235], [5.0, 2784.0], [6.0, 498.0], [3.0, 464.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.940136054421767, 848.644897959184]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 772.7333333333333, "minX": 1.60438446E12, "maxY": 1730831.1666666667, "series": [{"data": [[1.60438446E12, 464325.0333333333], [1.60438452E12, 1730831.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438446E12, 772.7333333333333], [1.60438452E12, 4750.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438452E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 828.1990521327011, "minX": 1.60438446E12, "maxY": 975.5294117647062, "series": [{"data": [[1.60438446E12, 975.5294117647062], [1.60438452E12, 828.1990521327011]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438452E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 826.8009478672981, "minX": 1.60438446E12, "maxY": 972.7254901960782, "series": [{"data": [[1.60438446E12, 972.7254901960782], [1.60438452E12, 826.8009478672981]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438452E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009478672985781993, "minX": 1.60438446E12, "maxY": 0.803921568627451, "series": [{"data": [[1.60438446E12, 0.803921568627451], [1.60438452E12, 0.009478672985781993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438452E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.60438446E12, "maxY": 8346.0, "series": [{"data": [[1.60438446E12, 8346.0], [1.60438452E12, 8220.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438446E12, 229.0], [1.60438452E12, 251.35399863958358]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438446E12, 229.01970000982286], [1.60438452E12, 254.82980018138886]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438446E12, 229.0], [1.60438452E12, 254.06899977326393]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438446E12, 229.0], [1.60438452E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438446E12, 701.5], [1.60438452E12, 661.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 1299.5, "series": [{"data": [[2.0, 979.5], [8.0, 1252.0], [9.0, 811.0], [10.0, 678.5], [11.0, 712.0], [12.0, 745.0], [3.0, 1284.0], [13.0, 796.0], [14.0, 557.5], [15.0, 540.0], [16.0, 503.0], [17.0, 630.0], [18.0, 550.0], [19.0, 505.5], [23.0, 394.0], [6.0, 1100.0], [7.0, 1299.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 2.0, "maxY": 1298.5, "series": [{"data": [[2.0, 977.5], [8.0, 1251.0], [9.0, 810.0], [10.0, 677.5], [11.0, 711.0], [12.0, 744.5], [3.0, 1281.0], [13.0, 794.0], [14.0, 557.0], [15.0, 540.0], [16.0, 503.0], [17.0, 629.5], [18.0, 549.0], [19.0, 504.5], [23.0, 394.0], [6.0, 1098.5], [7.0, 1298.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60438446E12, "maxY": 10.383333333333333, "series": [{"data": [[1.60438446E12, 1.8666666666666667], [1.60438452E12, 10.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60438446E12, "maxY": 10.55, "series": [{"data": [[1.60438446E12, 1.7], [1.60438452E12, 10.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438452E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60438446E12, "maxY": 10.55, "series": [{"data": [[1.60438446E12, 1.7], [1.60438452E12, 10.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438452E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60438446E12, "maxY": 10.55, "series": [{"data": [[1.60438446E12, 1.7], [1.60438452E12, 10.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438452E12, "title": "Total Transactions Per Second"}},
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

